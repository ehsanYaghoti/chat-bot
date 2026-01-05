"use client";

import { Pen } from "lucide-react";
import { Button } from "../../ui/button";
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "@/store/store";
import ClipboardBtn from "@/components/common/buttons/clipboardBtn";

export default function Question({
  id,
  content,
}: {
  id: number;
  content: string;
}) {
  const [editMode, setEditMode] = useState(false);
  const editInput = useRef<HTMLTextAreaElement>(null);

  const editQuestion = useChat((store) => store.editQuestion);

  const editHandler = () => {
    if (editInput.current === null) return;

    editQuestion({ id: id, content: editInput.current.value });

    setEditMode(false);
  };

  return (
    <div className="flex flex-col gap-2 group ">
      <div className=" w-auto text-right flex items-center justify-end ">
        <p
          className={`${
            editMode ? "hidden" : "flex"
          } bg-netural-1 w-fit p-4 rounded-3xl whitespace-pre-wrap text-left  `}
        >
          {content}
        </p>
        <div
          className={`${
            editMode ? "flex" : "hidden"
          } flex-col items-end gap-5 px-4 py-5 bg-[#424242] rounded-3xl w-full `}
        >
          <Textarea
            ref={editInput}
            className={` bg-[#424242] border-none w-full h-fit rounded-3xl max-h-40
                focus-visible:border-0 focus-visible:ring-0
                 resize-none `}
            defaultValue={content}
            style={{
              scrollbarWidth: "auto",
              scrollbarColor: "#696969 transparent",
            }}
          />
          <div className="flex items-center gap-3">
            <Button
              className=" rounded-3xl bg-primary-1 text-textClr-1 cursor-pointer"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </Button>
            <Button
              className=" rounded-3xl text-primary-1 bg-textClr-1 cursor-pointer hover:bg-textClr-1/90 "
              onClick={editHandler}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <div
        id={`question-${id}`}
        className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center self-end gap-0.5"
      >
        <ClipboardBtn content={content} />
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}
          className="bg-transparent hover:bg-netural-1 cursor-pointer"
          size='icon-sm'
        >
          <Pen />
        </Button>
      </div>
    </div>
  );
}
