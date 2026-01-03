"use client";

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

export default function AnswerTools() {
  const loading = useLoading((state) => state.loading);


  const copyHandler = () => {
    // window.navigator.clipboard 
  }

  return (
    <div className={`${loading ? 'hidden' : 'flex'} items-center gap-0.5`}>
      <Button onClick={copyHandler} className="bg-transparent hover:bg-netural-1 cursor-pointer">
        <Copy />
      </Button>
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
