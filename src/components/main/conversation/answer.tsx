"use client";

import { JSX } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AnswerTools from "./answerTools";


export default function Answer({
  answer: { content, liked , err  },
  id,
}: {
  id: number;
  answer: { content: string | JSX.Element; liked?: boolean ; err ?: boolean };
}) {

  return (
    <div id={`answer-${id}`} className="flex flex-col gap-4">
      <div
        className={`prose prose-invert max-w-none grow flex-1 w-full ${ err && "border-2 border-red-400 rounded-2xl px-4"} text-left py-4 overflow-y-hidden`}
        dir="ltr"
      >
        {typeof content === "string" ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        ) : (
          content
        )}
      </div>

      <AnswerTools id={id} content={content} likedInit={liked} />
    </div>
  );
}
