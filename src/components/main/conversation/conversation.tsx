"use client";

import { Button } from "@/components/ui/button";
import Answer from "./answer";
import ConversationTools from "./conversationTools";
import Question from "./question";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

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
  const scrollBtnRef = useRef<HTMLButtonElement>(null);

  const scrollBottomHandler = () => {
    console.log(messagesRef.current?.scrollHeight);
    messagesRef.current?.scrollTo({
      top: messagesRef.current?.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollHandler = () => {

    console.log((messagesRef.current?.scrollHeight as number) - (messagesRef.current?.scrollTop as number) - (messagesRef.current?.clientHeight as number))
    if(((messagesRef.current?.scrollHeight as number) - (messagesRef.current?.scrollTop as number) - (messagesRef.current?.clientHeight as number)) > 100 ){
        scrollBtnRef.current?.classList.replace('hidden' , 'flex')
        scrollBtnRef.current?.classList.replace('opacity-0' ,'opacity-1')

    } else {
        scrollBtnRef.current?.classList.replace('flex' , 'hidden')
        scrollBtnRef.current?.classList.replace('opacity-1' ,'opacity-0')
    }
  }

  return (
    <main
      className="flex flex-col gap-8 h-fit min-h-0 pb-20 flex-1 lg:w-[750PX] overflow-y-auto  py-4 relative"
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
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={scrollBottomHandler}
        className="border-textClr-1/20 z-50 bg-secondary-1 hover:bg-token-hover hover:text-inherit cursor-pointer rounded-full
         sticky bottom-0 left-1/2 -translate-x-1/2 items-center justify-center transition-opacity hidden "
         ref={scrollBtnRef}
      >
        <ArrowDown size={36} />
      </Button>
    </main>
  );
}
