"use client";

import { JSX } from "react";
import {
  Copy,
  Ellipsis,
  Flag,
  RefreshCw,
  Split,
  ThumbsDown,
  ThumbsUp,
  Upload,
  Volume,
  Volume2,
} from "lucide-react";
import { Button } from "../../ui/button";
import { useLoading } from "@/store/store";
import ClipboardBtn from "@/components/common/buttons/clipboardBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AnswerTools({
  id,
  content,
}: {
  id: number;
  content: string | JSX.Element;
}) {
  const loading = useLoading((state) => state.loading);

  return (
    <div className={`${loading ? "hidden" : "flex"} items-center gap-0.5`}>
      <ClipboardBtn content={String(content)} />
      <Button
        size="icon-sm"
        className="bg-transparent hover:bg-netural-1 cursor-pointer"
      >
        <ThumbsUp />
      </Button>
      <Button
        size="icon-sm"
        className="bg-transparent hover:bg-netural-1 cursor-pointer"
      >
        <ThumbsDown />
      </Button>
      <Button
        size="icon-sm"
        className="bg-transparent hover:bg-netural-1 cursor-pointer"
      >
        <Upload />
      </Button>
      <Button
        size="icon-sm"
        className="bg-transparent hover:bg-netural-1 cursor-pointer"
      >
        <RefreshCw />
      </Button>
      <DropdownMenu   >
        <DropdownMenuTrigger asChild>
          <Button
            size="icon-sm"
            className="bg-transparent hover:bg-netural-1 cursor-pointer"
          >
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="top" className="bg-netural-1 border-none text-textClr-1 w-52 space-y-0.5  p-3 rounded-xl " >
            <DropdownMenuItem className=" cursor-pointer hover:bg-token-hover! hover:text-inherit!" >
                <Split className=" text-textClr-1 rotate-90" />
                Branch in new chat
            </DropdownMenuItem>
            <DropdownMenuItem className=" cursor-pointer hover:bg-token-hover! hover:text-inherit!">
                <Volume2 className="text-textClr-1 " />
                Read aloud
            </DropdownMenuItem>
            <DropdownMenuItem className=" cursor-pointer hover:bg-token-hover! hover:text-inherit!">
                <Flag className="text-textClr-1 " />
                Report message
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
