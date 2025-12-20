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
import { KeyboardEvent , useRef, useState } from "react";

export default function Home() {

  const [inputHasValue, setInputHasValue] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (question?: string) => {
    if (question) {
      console.log(question);
      return;
    }

    const input = inputRef.current as HTMLInputElement;

    console.log(input.value);
  };

  const keyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.shiftKey) {
      console.log("shift+Enter");
      return;
    }

    if (e.key === "Enter") {
      submitHandler(e.currentTarget.value);
    }

  };

    const inputHandler = () => {
        const value = inputRef.current?.value ?? "";
        setInputHasValue(value.trim().length > 0)
    };

  return (
    <SidebarLayout>
      <div className="w-full flex flex-col min-h-screen">
        <Header />
        <main className=" w-full  bg-secondary-1 grow flex items-center justify-center text-textClr-1 ">
          <div className="flex flex-col items-center gap-5">
            <span className="text-3xl ">Ready when you are?</span>
            <div className="flex flex-col" >
                {/* <InputGroupTextarea
                id="textarea-code-32"
                placeholder="Ask anything"
                className="min-h-full ring-0 focus:ring-0! focus-visible:ring-0"
                onChange={e => inputHandler(e)}
                onKeyDown={e => keyHandler(e)}
              /> */}
            </div>
            <InputGroup
              className="min-h-14 p-2 rounded-full bg-netural-1 focus:outline-none outline-none   border border-[#323232]
            w-[750px] flex items-center gap-2 overflow-hidden"
            >
              <InputGroupAddon className="">
                <Button className="bg-transparent hover:bg-[#454545] rounded-full w-10 h-10 cursor-pointer ">
                  <Plus />
                </Button>
              </InputGroupAddon>
              <InputGroupTextarea
                id="textarea-code-32"
                placeholder="Ask anything"
                className="hidden min-h-full ring-0 focus:ring-0! focus-visible:ring-0"
                onChange={e => inputHandler()}
                onKeyDown={e => keyHandler(e)}
              />
              {/* <Input className="border-none outline-none! focus:border-none" placeholder="Ask anything" /> */}
              <InputGroupInput
                placeholder="Ask anything"
                className="h-full focus:outline-none outline-none  focus:ring-0!  focus-visible:ring-0!  ring-0 border-ring"
                onChange={inputHandler}
                id="inputText"
                ref={inputRef}
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
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
}
