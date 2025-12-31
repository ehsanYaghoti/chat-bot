import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  chats: { id: number; question: string; answer: string }[];
  insertQuestion: (question: string) => number;
  insertAnswer: (answerPayload: { id: number; content: string }) => void;
};

const useChat = create<Store>()(
  persist(
    (set) => ({
      chats: [],
      insertQuestion: (question) => {
        let newId = 0;
        set((state) => {
          const lastId = state.chats.length
            ? state.chats[state.chats.length - 1].id
            : -1;

          newId = lastId + 1;

          return {
            chats: [
              ...state.chats,
              {
                id: newId,
                question,
                answer: "Loading...",
              },
            ],
          };
        });

        return newId;
      },
      insertAnswer: ({ id, content }) => {
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id ? { ...chat, answer: content } : chat
          ),
        }));
      },
    }),
    { name: "chat-storage" }
  )
);

export default useChat;
