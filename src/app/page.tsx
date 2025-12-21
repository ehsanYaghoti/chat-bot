"use client";

import Header from "@/components/common/header/header";
import InputComponent from "@/components/main/inputGroup";
import SidebarLayout from "@/components/layouts/sidebarLayout";

export default function Home() {


  return (
    <SidebarLayout>
      <div className="w-full flex flex-col min-h-screen">
        <Header />
        <main className=" w-full  bg-secondary-1 grow flex items-center justify-center text-textClr-1 ">
          <div className="flex flex-col items-center gap-5">
            <span className="text-3xl ">Ready when you are?</span>
            <InputComponent />
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
}
