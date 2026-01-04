'use client';

import copyToClipboard from "@/utils/copyClipBoard";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useClipboard({
  content,
}: {
  content: string | ClipboardItems;
}) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!isCopied) return;

    const id = setTimeout(() => {
      setIsCopied(false);
    }, 600);

    return () => clearTimeout(id);
  }, [isCopied]);

  const copyHandler : React.MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await copyToClipboard(content);
      setIsCopied(true);
    } catch (error) {
      console.log(error);
      toast.error("copy was not successful");
    }
  };

  return [isCopied, copyHandler] as const;
}
