"use client";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ArrowUp, AudioLines, Mic, Plus } from "lucide-react";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

export default function InputComponent() {
  const [inputHasValue, setInputHasValue] = useState(false);
  const [inputTextOverflow, setInputTextOverflow] = useState(false);
  const [question, setQuestion] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const inputTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (questionArg?: string) => {
    if (questionArg) {
      console.log(questionArg);
      return;
    }

    setInputTextOverflow(false);
    setQuestion("");
    console.log(question);
  };

  const keyHandler = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && e.shiftKey) {
      console.log("shift+Enter");
      if (e.currentTarget.id === "inputText") setInputTextOverflow(true);
      setTimeout(() => {
        inputTextAreaRef.current?.focus();
      }, 100);
      return;
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
    if (e.target.id === "textarea-code-32") {
        console.log(e.target.value.length)
      if (e.target.value.length === 0) {
        setInputTextOverflow(false);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    }

    if (e.target.id === "inputText") {
      if (e.target.scrollWidth > e.target.clientWidth) {
        setInputTextOverflow(true);
        setTimeout(() => {
          inputTextAreaRef.current?.focus();
        }, 100);
      }
    }
  };

  return (
    <div className=" w-full  flex-[0_0_auto] mb-8">
      <InputGroup
        className="flex flex-col scrollbar border-0  shadow-none! lg:w-[750px]  transition-all "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#C0C0C1 transparent",
        }}
      >
        <InputGroupTextarea
          id="textarea-code-32"
          ref={inputTextAreaRef}
          placeholder="Ask anything"
          className={`${
            inputTextOverflow ? "flex" : "hidden"
          } max-h-64 min-h-full border-0 ring-0 w-full max-w-full  bg-netural-1 rounded-b-none  rounded-t-lg `}
          autoFocus
          onChange={inputHandler}
          onKeyDown={(e) => keyHandler(e)}
          value={inputTextOverflow ? question : ""}
        />
        <InputGroup
          className={`${
            inputTextOverflow ? " rounded-b-lg rounded-t-none " : "rounded-full"
          } overflow-y-auto min-h-auto h-14 max-h-80 px-2 bg-netural-1 focus:outline-none outline-none border border-[#323232]
            lg:w-[750px]  items-center gap-2 overflow-hidden `}
        >
          <InputGroupAddon className="">
            <Button className="bg-transparent hover:bg-[#454545] rounded-full w-10 h-10 cursor-pointer ">
              <Plus />
            </Button>
          </InputGroupAddon>
          <InputGroupInput
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
            {inputHasValue ? (
              <Button
                onClick={() => submitHandler()}
                className=" text-primary-1 bg-textClr-1 hover:bg-[#C1C1C1] rounded-full w-10 h-10 cursor-pointer text-sm "
              >
                <ArrowUp />
              </Button>
            ) : (
              <Button className=" text-primary-1 bg-textClr-1 hover:bg-[#C1C1C1] rounded-full w-10 h-10 cursor-pointer text-sm ">
                <AudioLines />
              </Button>
            )}
          </InputGroupAddon>
        </InputGroup>
      </InputGroup>
    </div>
  );
}
