"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "../../ui/button";
import useClipboard from "@/hooks/use-clipBoard";

export default function ClipboardBtn({
  content,
}: {
  content: string | ClipboardItems;
}) {
  const [isCopied, copyHandler] = useClipboard({ content });

  return (
    <Button
      onClick={copyHandler}
      disabled={isCopied as boolean}
      className="bg-transparent hover:bg-netural-1 cursor-pointer"
      size='icon-sm'
      aria-label="Copy question"
      aria-live="polite"
    >
      {!isCopied ? (
        <Copy className="" />
      ) : (
        <Check
          className={`${
            isCopied ? "opacity-100" : "opacity-0"
          } transition-opacity delay-200 duration-300 `}
        />
      )}
    </Button>
  );
}
