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
import { AudioLines, Mic, Plus } from "lucide-react";

export default function Home() {
  return (
    <SidebarLayout>
      <div className="w-full flex flex-col min-h-screen">
        <Header />
        <main className=" w-full  bg-secondary-1 grow flex items-center justify-center text-textClr-1 ">
          <div className="flex flex-col items-center gap-5">
            <span className="text-3xl ">Ready when you are?</span>
            <InputGroup
              className="min-h-14 p-2 rounded-full bg-netural-1 focus:outline-none outline-none   border border-[#323232]
            w-[750px] flex items-center gap-2 overflow-hidden"
            >
              <InputGroupAddon className="">
                <Button className="bg-transparent hover:bg-[#454545] rounded-full w-10 h-10 cursor-pointer ">
                  <Plus />
                </Button>
              </InputGroupAddon>
              {/* <Input className="border-none outline-none! focus:border-none" placeholder="Ask anything" /> */}
              {/* <InputGroupInput placeholder="Ask anything" className="h-full focus:outline-none outline-none  focus:ring-0!  focus-visible:ring-0!  ring-0 border-ring" /> */}
              <InputGroupTextarea
                id="textarea-code-32"
                placeholder="Ask anything"
                className="min-h-full ring-0 focus:ring-0! focus-visible:ring-0"
              />
              <InputGroupAddon align={"inline-end"}>
                <Button className="bg-transparent hover:bg-[#454545] rounded-full w-10 h-10  cursor-pointer ">
                  <Mic />
                </Button>
                <Button className="text-primary-1 bg-textClr-1 hover:bg-[#C1C1C1] rounded-full w-10 h-10 cursor-pointer text-sm ">
                  <AudioLines />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
}
