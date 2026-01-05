"use client";

import { JSX, useState } from "react";
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
import { useChat, useLoading } from "@/store/store";
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
  likedInit
}: {
  id: number;
  content: string | JSX.Element;
  likedInit : boolean | undefined
}) {
  const [liked, setLiked] = useState<undefined | boolean>(likedInit);

  const loading = useLoading((state) => state.loading);
  const updateLikeAnswer = useChat((state) => state.updateLikeAnswer);
  const cancelLikeAnswer = useChat((state) => state.cancelLikeAnswer);

  const likeHandler = (isLiked: boolean | undefined) => {
    if (typeof isLiked === "boolean") {
      updateLikeAnswer({ id, isLiked });
      setLiked(isLiked);
    } else if (typeof isLiked === "undefined") {
      cancelLikeAnswer({ id });
      setLiked(undefined);
    }
  };

  return (
    <div className={`${loading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-opacity flex items-center gap-0.5`}>
      <ClipboardBtn content={String(content)} />
      {liked === undefined ? (
        <>
          <Button
            size="icon-sm"
            className="bg-transparent hover:bg-netural-1 cursor-pointer"
            onClick={() => likeHandler(true)}
          >
            <ThumbsUp />
          </Button>
          <Button
            size="icon-sm"
            className="bg-transparent hover:bg-netural-1 cursor-pointer"
            onClick={() => likeHandler(false)}
          >
            <ThumbsDown />
          </Button>
        </>
      ) : (
        <Button
          size="icon-sm"
          className="bg-transparent hover:bg-netural-1 cursor-pointer"
          onClick={() => likeHandler(undefined)}
        >
          {liked ? <ThumbsUp fill="#ffffde" /> : <ThumbsDown fill="#ffffde" />}
        </Button>
      )}

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon-sm"
            className="bg-transparent hover:bg-netural-1 cursor-pointer"
          >
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          side="top"
          className="bg-netural-1 border-none text-textClr-1 w-52 space-y-0.5  p-3 rounded-xl "
        >
          <DropdownMenuItem className=" cursor-pointer hover:bg-token-hover! hover:text-inherit!">
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
