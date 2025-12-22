"use client";

import Header from "@/components/common/header/header";
import InputComponent from "@/components/main/inputGroup";
import SidebarLayout from "@/components/layouts/sidebarLayout";
import Conversation from "@/components/main/conversation/conversation";

export default function Home() {
  return (
    <SidebarLayout>
      <div
        className="w-full flex flex-col h-svh overflow-hidden relative
         bg-secondary-1 grow items-center  text-textClr-1
        "
        style={{ scrollbarWidth: "thin", scrollbarColor: "#9F9F9F #2C2C2C" }}
      >
        <Header />
        {/* <main className=" w-full bg-secondary-1 grow flex flex-col gap-5 pb-8 items-center justify-center text-textClr-1 relative"> */}
        <Conversation />
        <div className="flex flex-col items-center gap-5 bg-transparent ">
          {/* <span className="text-3xl ">Ready when you are?</span> */}
          <InputComponent />
        </div>
        {/* </main> */}
      </div>
    </SidebarLayout>
  );
}
