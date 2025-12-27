"use client";

import Header from "@/components/common/header/header";
import InputBar from "@/components/input/inputBar";
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
        <InputBar />
      </div>
    </SidebarLayout>
  );
}
