"use client";

import { JSX } from "react";
import {
  Copy,
  Ellipsis,
  RefreshCw,
  ThumbsDown,
  ThumbsUp,
  Upload,
} from "lucide-react";
import { Button } from "../../ui/button";
import { useLoading } from "@/store/store";
import ClipboardBtn from "@/components/common/buttons/clipboardBtn";

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
      <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
        <ThumbsUp />
      </Button>
      <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
        <ThumbsDown />
      </Button>
      <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
        <Upload />
      </Button>
      <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
        <RefreshCw />
      </Button>
      <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
        <Ellipsis />
      </Button>
    </div>
  );
}
