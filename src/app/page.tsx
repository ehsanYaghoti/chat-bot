"use client";

import Header from "@/components/common/header/header";
import InputComponent from "@/components/input/inputGroup";
import SidebarLayout from "@/components/layouts/sidebarLayout";
import Conversation from "@/components/main/conversation/conversation";

export default function Home() {
  return (
    <SidebarLayout>
      <div
        className="w-full flex flex-col h-svh overflow-y-hidden relative
         bg-secondary-1 items-center  text-textClr-1
        "
        style={{ scrollbarWidth: "thin", scrollbarColor: "#9F9F9F #2C2C2C" }}
      >
        <Header />
        <Conversation />
        <div className="w-full flex flex-col items-center gap-5  bg-linear-to-t from-primary-1 from-0% via-secondary-1 via-50%  to-transparent z-5  -mt-20 py-8 ">
          {/* <span className="text-3xl ">Ready when you are?</span> */}
          <InputComponent />
        </div>
      </div>
    </SidebarLayout>
  );
}
