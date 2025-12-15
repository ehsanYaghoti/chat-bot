import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import Link from "next/link";
import { ActivitySquare, CircleArrowDown, CircleUser, Flag, HelpCircle, LifeBuoy, LogOut, PenLine, ReceiptText, Settings, Sparkles } from "lucide-react";
import UserInfo from "./userInfo";
import { cn } from "@/lib/utils";

export default function UserMenu({ collapsible }: { collapsible: boolean }) {
  return (
    <div
      className={`w-full  shrink-0   flex items-center justify-center relative  ${
        collapsible ? "p-0 rounded-full" : "p-0 rounded-lg"
      } items-center justify-between `}

    >
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full outline-none hover:bg-token-hover p-2 rounded-lg data-[state=open]:bg-token-hover " >
          <UserInfo collapsible={collapsible} />
        </DropdownMenuTrigger>
        <Button
          size={"sm"}
          className={` ${
            collapsible ? "hidden" : "flex"
          } absolute right-2 top-1/2 -translate-y-[50%]  bg-secondary-1 rounded-2xl border border-white/20 `}
        >
          <Link href={"/plans"}>Upgrade</Link>
        </Button>

        <DropdownMenuContent
          className={cn("*:hover:bg-token-hover! space-y-2 border-none -translate-y-2 text-textClr-1 *:hover:text-inherit! *:cursor-pointer p-3 rounded-2xl mt-5 z-50 w-60 bg-[#353535]  ")}
        >
          <DropdownMenuLabel>
            <UserInfo collapsible={collapsible} />
          </DropdownMenuLabel>
          <DropdownMenuSeparator className=" opacity-20 " />
          <DropdownMenuItem className="flex items-center gap-2 ">
            <Sparkles className="text-inherit" />
            Upgrade plan
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CircleUser className="text-inherit" />
            Personalization
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="text-inherit" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator className=" opacity-30 " />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className={cn("focus:bg-token-hover! data-[state=open]:bg-[#4A4A4A] data-[state=open]:text-inherit ")} >
                <LifeBuoy className="text-inherit" />
                Help
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent alignOffset={100} sideOffset={15} className={cn("bg-[#353535] p-3 flex flex-col gap-1 text-textClr-1 border-none *:hover:bg-[#4A4A4A]! *:hover:text-inherit! *:cursor-pointer rounded-2xl ")}
            >
                <DropdownMenuItem className="gap-2">
                    <HelpCircle className="text-inherit" />
                    Help center
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <PenLine className="text-inherit" />
                    Release notes
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <ReceiptText className="text-inherit" />
                    Terms & policies
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Flag className="text-inherit" />
                    Report Bug
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CircleArrowDown className="text-inherit" />
                    Download apps
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <ActivitySquare className="text-inherit rotate-90" />
                    Keyboard shortcuts
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <LogOut className="text-inherit" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
