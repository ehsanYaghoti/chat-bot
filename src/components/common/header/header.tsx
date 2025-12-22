import Link from "next/link";
import HeaderDropDown from "./headerDropDown";
import { MessageCircleDashed, Sparkle, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header
      className=" w-full h-16 py-3 px-4 flex items-center justify-between
         bg-secondary-1 border-b border-b-white/10 text-textClr-1  z-40 flex-[0_0_auto] "
    >
      <HeaderDropDown />
      <Link
        href={"#pricing"}
        className="px-3 py-2 rounded-full bg-[#373669]
        flex items-center gap-2 text-sm font-medium hover:opacity-110 justify-self-center "
      >
        <Sparkle size={16} fill="#FFFFDE" />
        Get Plus
      </Link>
      <div className="flex items-center gap-3">
        <button className="bg-transparent hover:bg-token-hover rounded-full p-2 flex items-center justify-center cursor-pointer ">
          <UserRoundPlus size={24} />
        </button>
        <button className="bg-transparent hover:bg-token-hover rounded-full p-2 flex items-center justify-center cursor-pointer ">
          <MessageCircleDashed />
        </button>
      </div>
    </header>
  );
};

export default Header;
