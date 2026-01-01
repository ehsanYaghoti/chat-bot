"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { RefObject, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function ScrollBottomBtn({visible , containerRef} : {visible : boolean , containerRef ?: RefObject<HTMLDivElement | null>}) {

  const scrollBottomHandler = () => {
    window.document.body?.scrollTo({
      top: window.document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={scrollBottomHandler}
      className={cn(
        "border-textClr-1/20 bg-secondary-1 transition-opacity duration-300 ease-in-out hover:bg-token-hover hover:text-inherit cursor-pointer rounded-full sticky bottom-28 left-1/2 -translate-x-1/2 flex items-center justify-center ",
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0  pointer-events-none"
      )}
    >
      <ArrowDown size={36} />
    </Button>
  );
}
