"use client";

import Answer from "./answer";
import ConversationTools from "./conversationTools";
import Question from "./question";
import { useEffect, useRef, useState } from "react";
import {useChat, useStyle} from "@/store/store";

const conversationList = [
  {
    id: 1,
    question: "Question test 1",
    answer: `answer test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos mollitia explicabo totam laboriosam reiciendis, ullam ipsam
            voluptates praesentium saepe asperiores ut doloremque officiis rerum
            facere natus placeat incidunt nobis vitae?`,
  },
  {
    id: 2,
    question: "Question test 2",
    answer: `answer test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos mollitia explicabo totam laboriosam reiciendis, ullam ipsam
            voluptates praesentium saepe asperiores ut doloremque officiis rerum
            facere natus placeat incidunt nobis vitae?`,
  },
  {
    id: 3,
    question: "Question test 3",
    answer: `answer test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos mollitia explicabo totam laboriosam reiciendis, ullam ipsam
            voluptates praesentium saepe asperiores ut doloremque officiis rerum
            facere natus placeat incidunt nobis vitae?
            answer test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos mollitia explicabo totam laboriosam reiciendis, ullam ipsam
            voluptates praesentium saepe asperiores ut doloremque officiis rerum
            facere natus placeat incidunt nobis vitae?
            answer test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos mollitia explicabo totam laboriosam reiciendis, ullam ipsam
            voluptates praesentium saepe asperiores ut doloremque officiis rerum
            facere natus placeat incidunt nobis vitae?

            `,
  },
  {
    id: 4,
    question: "Question test 4",
    answer: `answer test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos mollitia explicabo totam laboriosam reiciendis, ullam ipsam
            voluptates praesentium saepe asperiores ut doloremque officiis rerum
            facere natus placeat incidunt nobis vitae?`,
  },
  {
    id: 5,
    question: "Question test 5",
    answer: `answer test Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos mollitia explicabo totam laboriosam reiciendis, ullam ipsam
            voluptates praesentium saepe asperiores ut doloremque officiis rerum
            facere natus placeat incidunt nobis vitae?`,
  },
];

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
        console.log(entry.isIntersecting);
        toggleScrollBtnVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(bottomRef.current);
    console.log(observer.observe(bottomRef.current));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats.length]);

  return (
    <main
      className="flex flex-col gap-8 min-h-0 pb-20 overflow-y-hidden px-4  lg:w-[650px] xl:w-[750PX] max-w-[750px]  py-4 relative"
      ref={containerRef}
    >
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="flex flex-col gap-6"
          style={{ scrollbarWidth: "thin" }}
        >
          <Question content={chat.question} />
          <Answer content={chat.answer} />
          <ConversationTools />
        </div>
      ))}
      <div ref={bottomRef}></div>
    </main>
  );
}
