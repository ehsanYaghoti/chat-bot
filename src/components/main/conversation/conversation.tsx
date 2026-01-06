"use client";

import Answer from "./answer";
import Question from "./question";
import { useEffect, useRef } from "react";
import { useChat, useStyle } from "@/store/store";

export default function Conversation() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const chats = useChat((state) => state.chats);
  const toggleScrollBtnVisible = useStyle(
    (state) => state.toggleScrollBtnVisible
  );

  useEffect(() => {
    if (!containerRef.current || !bottomRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        toggleScrollBtnVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [toggleScrollBtnVisible]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats.length]);

  return (
    <main
      className="flex flex-col gap-8 min-h-0 pb-8 overflow-y-hidden px-4 xl:px-0 pt-4 lg:w-[650px] xl:w-[750PX] max-w-[750px]   relative"
      ref={containerRef}
    >
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="flex flex-col gap-1"
        >
          <Question id={chat.id} content={chat.question} />
          <Answer id={chat.id} answer={chat.answer} />
        </div>
      ))}
      <div ref={bottomRef} className="h-[calc(-350px+100vh)]  grow" ></div>
    </main>
  );
}
