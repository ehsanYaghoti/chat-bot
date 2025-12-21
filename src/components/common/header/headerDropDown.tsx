import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown, Flower, Sparkles } from "lucide-react";
import UpgradeBtn from "../buttons/upgradeBtn";

const HeaderDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <h1 className="text-lg flex items-center gap-2 hover:bg-netural-1 p-1 rounded-lg">
          ChatGPT
          <ChevronDown size={16} />
        </h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-netural-1 text-textClr-1 p-2 border-none w-80 "
      >
        <DropdownMenuItem
          className="focus:bg-token-hover focus:text-inherit hover:bg-token-hover
            rounded-lg  py-2 px-3"
        >
          <div
            className="flex items-center justify-between w-full
             "
          >
            <div className="flex items-center gap-3">
              <Sparkles className="text-inherit" />
              <div className="flex flex-col items-start gap-0 font-light">
                <span className="text-sm ">ChatGPT Plus</span>
                <p className="text-xs text-white/50">
                  Our smartest model & more
                </p>
              </div>
            </div>
            <UpgradeBtn className="text-xs!" />
          </div>{" "}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="focus:bg-token-hover focus:text-inherit hover:bg-token-hover
            rounded-lg  py-2 px-3"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <Flower className="text-inherit" />
              <div className="flex flex-col items-start gap-0 font-light">
                <span className="text-sm ">ChatGPT</span>
                <p className="text-xs text-white/50">
                  Great for everyday tasks
                </p>
              </div>
            </div>
            <Check className="text-inherit" />
          </div>{" "}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropDown;
