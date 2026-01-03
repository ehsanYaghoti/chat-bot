"use client";

import { Check, Copy, Pen } from "lucide-react";
import { Button } from "../../ui/button";
import copyToClipboard from "@/utils/copyClipBoard";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Question({
  id,
  content,
}: {
  id: string | number;
  content: string;
}) {
  const [isCopied, setIsCopied] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const id = setTimeout(() => {
      setIsCopied(false);
    }, 600);

    return () => clearTimeout(id);
  }, [isCopied]);

  const copyHandler = async () => {
    try {
      await copyToClipboard(content);
      setIsCopied(true);
    } catch (error) {
      console.log(error);
      toast.error("copy was not successful");
    }
  };

  return (
    <div className="flex flex-col gap-2 group ">
      <div className=" w-auto text-right flex items-center justify-end ">
        <p
          className={`${
            editMode ? "hidden" : "flex"
          } bg-netural-1 w-fit p-4 rounded-3xl  `}
        >
          {content}
        </p>
        <Input
          className={` ${
            editMode ? "flex" : "hidden"
          } mt-2 bg-netural-1 border-none w-full py-6! `}
          defaultValue={content}
        />
      </div>
      <div
        id={`question-${id}`}
        className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center self-end gap-0.5"
      >
        <Button
          onClick={copyHandler}
          disabled={isCopied}
          className="bg-transparent hover:bg-netural-1 cursor-pointer"
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
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}
          className="bg-transparent hover:bg-netural-1 cursor-pointer"
        >
          <Pen />
        </Button>
      </div>
    </div>
  );
}
