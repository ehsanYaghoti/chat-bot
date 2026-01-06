import { JSX } from "react";

export type Chat = {
  id: number;
  question: string;
  answer: { content: string | JSX.Element; liked?: boolean; err?: boolean };
};

export interface Conversation {
  id: string | number;
  name: string;
  chats: Chat[];
}
