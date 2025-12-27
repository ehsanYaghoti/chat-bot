"use client";

import Link from "next/link";
import HeaderDropDown from "./headerDropDown";
import { ChartNoAxesColumn, MessageCircle, MessageCircleDashed, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogGroupChat } from "./groupChat";
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
  const [temporareChat, setTemporareChat] = useState(false);

  return (
    <header
      className=" w-full h-16 py-3 px-4 flex items-center justify-between
         bg-secondary-1 border-b border-b-white/10 text-textClr-1  z-40 flex-[0_0_auto] "
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="flex md:hidden" />
        <HeaderDropDown />
      </div>

      <Link
        href={"#pricing"}
        className="px-3 py-2 rounded-full bg-[#373669]
        hidden lg:flex items-center gap-2 text-sm font-medium hover:opacity-110 justify-self-center "
      >
        <Sparkle size={16} fill="#FFFFDE" />
        Get Plus
      </Link>
      <div className="flex items-center gap-3">
        <DialogGroupChat />

        {temporareChat ? (
          <Button
            onClick={() => setTemporareChat(false)}
            className="bg-transparent temporareIcon  hover:bg-token-hover rounded-full p-2 flex items-center justify-center cursor-pointer "
          >
            <MessageCircle className="" />
          </Button>
        ) : (
          <Button
            onClick={() => setTemporareChat(true)}
            className="bg-transparent temporareIcon  hover:bg-token-hover rounded-full p-2 flex items-center justify-center cursor-pointer "
          >
            <MessageCircleDashed className="" />
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
