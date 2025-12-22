import Answer from "./answer";
import ConversationTools from "./conversationTools";
import Question from "./question";

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
  return (
    <main className="flex flex-col gap-8 h-full min-h-0 flex-[1_1_auto] w-[750PX] overflow-y-auto p-4 " style={{scrollbarWidth : "none"}}>
      {conversationList.map((conversation) => (
        <div key={conversation.id} className="flex flex-col gap-6">
          <Question content={conversation.question} />
          <Answer content={conversation.answer} />
          <ConversationTools />
        </div>
      ))}
    </main>
  );
}
