"use client";

import Header from "@/components/common/header/header";
import SidebarLayout from "@/components/layouts/sidebarLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ArrowUp, AudioLines, Mic, Plus } from "lucide-react";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

export default function Home() {
  const [inputHasValue, setInputHasValue] = useState(false);
  const [inputTextOverflow, setInputTextOverflow] = useState(false);
  const [question , setQuestion] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const inputGroupRef = useRef<HTMLDivElement>(null);
  const inputTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (question?: string) => {
    if (question) {
      console.log(question);
      return;
    }

    const input = inputRef.current as HTMLInputElement;
    const textArea = inputTextAreaRef.current as HTMLTextAreaElement;
    textArea.focus();

    console.log(input.value.trim() && textArea.value);
  };

  const keyHandler = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && e.shiftKey) {
      console.log("shift+Enter");
      if (e.currentTarget.id === "inputText") setInputTextOverflow(true);
      //   document.getElementById('textarea-code-32')?.focus()
      setTimeout(() => {
        inputTextAreaRef.current?.focus();
      }, 500);
      //   inputGroupRef.current?.classList.replace("rounded-full", "rounded-xl");
      // inputRef.current?.classList.add('-translate-y-36')
      //   inputTextAreaRef.current?.classList.toggle("mb-36");
      return;
    }

    if (e.key === "Enter") {
        e.preventDefault()
      submitHandler(e.currentTarget.value);
    }
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // const value = inputRef.current?.value ?? "";

    const value = e.target.value ?? "";
    setInputHasValue(value.trim().length > 0);
    setQuestion(e.target.value)
  };

  return (
    <SidebarLayout>
      <div className="w-full flex flex-col min-h-screen">
        <Header />
        <main className=" w-full  bg-secondary-1 grow flex items-center justify-center text-textClr-1 ">
          <div className="flex flex-col items-center gap-5">
            <span className="text-3xl ">Ready when you are?</span>
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
                value={inputTextOverflow ? question : ''}
              />
              <InputGroup
                ref={inputGroupRef}
                className={`${
                  inputTextOverflow
                    ? " rounded-b-lg rounded-t-none "
                    : "rounded-full"
                } overflow-y-auto min-h-auto h-auto max-h-80 p-2 bg-netural-1 focus:outline-none outline-none border border-[#323232]
            lg:w-[750px]  items-center gap-2 overflow-hidden `}
              >
                <InputGroupAddon className="">
                  <Button className="bg-transparent hover:bg-[#454545] rounded-full w-10 h-10 cursor-pointer ">
                    <Plus />
                  </Button>
                </InputGroupAddon>
                {/* <InputGroupTextarea
                  id="textarea-code-32"
                  placeholder="Ask anything"
                  className={`${
                    inputTextOverflow ? " mb-14" : "mb-0"
                  } border min-h-full ring-0 focus:ring-0! focus-visible:ring-0`}
                  ref={inputTextAreaRef}
                  onChange={(e) => inputHandler()}
                  onKeyDown={(e) => keyHandler(e)}
                /> */}
                {/* <Input className="border-none outline-none! focus:border-none" placeholder="Ask anything" /> */}
                <InputGroupInput
                  placeholder="Ask anything"
                  className={`${
                    inputTextOverflow ? "invisible" : "flex"
                  } h-full focus:outline-none outline-none  focus:ring-0!  focus-visible:ring-0!  ring-0 border-ring"`}
                  onChange={inputHandler}
                  id="inputText"
                  ref={inputRef}
                  value={inputTextOverflow ? '' : question}
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
            {/* <InputGroup
              ref={inputGroupRef}
              className={`${
                inputTextOverflow ? " rounded-lg" : "rounded-full"
              } overflow-y-auto min-h-S h-14 max-h-80 p-2 bg-netural-1 focus:outline-none outline-none   border border-[#323232]
            lg:w-[750px]  items-center gap-2 overflow-hidden`}
            >
              <InputGroupAddon className="">
                <Button className="bg-transparent hover:bg-[#454545] rounded-full w-10 h-10 cursor-pointer ">
                  <Plus />
                </Button>
              </InputGroupAddon>
              <InputGroupTextarea
                id="textarea-code-32"
                placeholder="Ask anything"
                className={`${
                  inputTextOverflow ? " mb-14" : "mb-0"
                } border min-h-full ring-0 focus:ring-0! focus-visible:ring-0`}
                ref={inputTextAreaRef}
                onChange={(e) => inputHandler()}
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
            </InputGroup> */}
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
}
