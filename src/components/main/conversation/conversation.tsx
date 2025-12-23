"use client";

import Answer from "./answer";
import ConversationTools from "./conversationTools";
import Question from "./question";
import { useRef, useState } from "react";
import ScrollBottomBtn from "./scrollBottomBtn";

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
  const messagesRef = useRef<HTMLDivElement>(null);

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollHandler = () => {
    const el = messagesRef.current;

    if (!el) return;

    console.log(showScrollBtn);

    const distanceFromBottom =
      el?.scrollHeight - el?.scrollTop - el?.clientHeight;

    setShowScrollBtn(distanceFromBottom > 100);
  };

  return (
    <main
      className="flex flex-col gap-8 min-h-0 pb-20 flex-1 lg:w-[750PX] overflow-y-auto  py-4 relative"
      style={{ scrollbarWidth: "none" }}
      ref={messagesRef}
      onScroll={scrollHandler}
    >
      {conversationList.map((conversation) => (
        <div key={conversation.id} className="flex flex-col gap-6">
          <Question content={conversation.question} />
          <Answer content={conversation.answer} />
          <ConversationTools />
        </div>
      ))}
      <ScrollBottomBtn visible={showScrollBtn} containerRef={messagesRef} />
    </main>
  );
}
