"use client";

import { Copy, Pen } from "lucide-react";
import { Button } from "../../ui/button";

export default function QuestionTools({ id }: { id: string | number }) {
  const copyHandler = () => {
    
  };

  return (
    <div id={`question-${id}`} className="flex items-center self-end gap-0.5">
      <Button
        onClick={copyHandler}
        className="bg-transparent hover:bg-netural-1 cursor-pointer"
      >
        <Copy />
      </Button>
      <Button className="bg-transparent hover:bg-netural-1 cursor-pointer">
        <Pen />
      </Button>
    </div>
  );
}
