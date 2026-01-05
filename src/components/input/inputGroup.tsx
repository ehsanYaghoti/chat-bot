"use client";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ArrowUp, AudioLines, Mic, Plus, Square } from "lucide-react";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import InputAddBtn from "./inputAddBtn";
import { useChat, useLoading } from "@/store/store";
import { toast } from "sonner";

export default function InputComponent() {
  const [inputHasValue, setInputHasValue] = useState(false);
  const [inputTextOverflow, setInputTextOverflow] = useState(false);
  const [question, setQuestion] = useState("");

  const idRef = useRef<number>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const { loading, setLoading } = useLoading((state) => state);
  const { setErrorAnswer, insertQuestion, insertAnswer, deleteChat } = useChat(
    (state) => state
  );

  const submitHandler = async () => {
    try {
      if (question.length === 0) return;

      controllerRef.current = new AbortController();
      const signal = controllerRef.current.signal;

      setLoading(true);
      const id = insertQuestion(question);
      idRef.current = id;

      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: question }),
        signal,
      });

      setQuestion("");
      const data = await response.json();

      const status = response.status;

      insertAnswer({ id, content: data.answer });

      setInputTextOverflow(false);
      if (status !== 200) {
        setErrorAnswer({ id });
      }

      setLoading(false);
    } catch (error) {
      if (typeof error === "string") {
        toast.error(error);
      } else {
        toast.error("Request was not successfull");
      }
      deleteChat({ id: idRef.current as number });
      setLoading(false);
      setQuestion("");
    }
  };

  const keyHandler = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && e.shiftKey) {
      if (e.currentTarget.id === "inputText") setInputTextOverflow(true);
      setTimeout(() => {
        inputTextAreaRef.current?.focus();
      }, 100);
      return;
    }

    if (e.currentTarget.id === "textarea-code-32") {
      if (e.currentTarget.value.length === 0 && e.key === "Backspace") {
        setInputTextOverflow(false);
      }
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      submitHandler();
    }
  };

  const inputHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // const value = inputRef.current?.value ?? "";

    const value = e.target.value ?? "";
    setInputHasValue(value.trim().length > 0);
    setQuestion(e.target.value);

    if (e.target.id === "inputText") {
      if (e.target.scrollWidth > e.target.clientWidth) {
        setInputTextOverflow(true);
        setTimeout(() => {
          inputTextAreaRef.current?.focus();
        }, 100);
      }
    }
  };

  const stopChatHandler = () => {
    if (controllerRef.current) controllerRef.current.abort("abort by user");
  };

  return (
    <div className=" sticky bottom-0 w-full flex items-center justify-center  flex-[0_0_auto] transition-all">
      <InputGroup
        className="flex flex-col scrollbar border-0 transition-all "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#C0C0C1 transparent",
        }}
      >
        <InputGroupTextarea
          id="textarea-code-32"
          ref={inputTextAreaRef}
          placeholder="Ask anything"
          disabled={loading}
          className={`${
            inputTextOverflow ? "flex" : "hidden"
          } max-h-64 min-h-full border-0 ring-0 md:w-full lg:w-[650px] xl:w-[750px]  bg-netural-1 rounded-b-none  rounded-t-lg `}
          autoFocus
          onChange={inputHandler}
          onKeyDown={(e) => keyHandler(e)}
          value={inputTextOverflow ? question : ""}
        />
        <InputGroup
          className={`${
            inputTextOverflow ? " rounded-b-lg rounded-t-none " : "rounded-full"
          } overflow-y-auto min-h-auto h-14 max-h-80 px-2 bg-netural-1 focus:outline-none outline-none border border-[#323232]
           md:w-full lg:w-[650px] xl:w-[750px]  items-center gap-2 overflow-hidden `}
        >
          <InputGroupAddon className="">
            <InputAddBtn />
          </InputGroupAddon>
          <InputGroupInput
            disabled={loading}
            placeholder="Ask anything"
            className={`${
              inputTextOverflow ? "invisible" : "flex"
            } h-full focus:outline-none outline-none  focus:ring-0!  focus-visible:ring-0!  ring-0 border-ring"`}
            onChange={inputHandler}
            id="inputText"
            ref={inputRef}
            value={inputTextOverflow ? "" : question}
            onKeyDown={(e) => keyHandler(e)}
          />
          <InputGroupAddon align={"inline-end"}>
            <Button className="bg-transparent hover:bg-[#454545] rounded-full w-10 h-10  cursor-pointer ">
              <Mic />
            </Button>
            {!loading ? (
              <Button
                onClick={() => submitHandler()}
                disabled={!inputHasValue}
                className={`text-primary-1 bg-textClr-1 hover:bg-[#C1C1C1]  rounded-full w-10 h-10 cursor-pointer text-sm `}
              >
                <ArrowUp />
              </Button>
            ) : (
              <Button
                onClick={() => stopChatHandler()}
                className={`bg-textClr-1/10 text-textClr-1 hover:bg-textClr-1/5  rounded-full w-10 h-10 cursor-pointer text-sm `}
              >
                <Square fill="#ffffde" />
              </Button>
            )}
          </InputGroupAddon>
        </InputGroup>
      </InputGroup>
    </div>
  );
}
