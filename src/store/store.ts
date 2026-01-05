import { create } from "zustand";
import { persist } from "zustand/middleware";

import AnswerLoading from "@/components/common/loadings/answerLoading";
import { JSX } from "react";

type StoreLoading = {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};

type StoreStyle = {
  scrollBtnVisible: boolean;
  toggleScrollBtnVisible: (isIntersecting: boolean) => void;
};

type StoreChat = {
  chats: {
    id: number;
    question: string;
    answer: { content: string | JSX.Element; liked?: boolean; err?: boolean };
  }[];
  insertQuestion: (question: string) => number;
  editQuestion: (editPayload: { id: number; content: string }) => void;
  insertAnswer: (answerPayload: { id: number; content: string }) => void;
  updateLikeAnswer: (payload: { id: number; isLiked: boolean }) => void;
  cancelLikeAnswer: (payload: { id: number }) => void;
  setErrorAnswer: (payload: { id: number }) => void;
  deleteChat: (payload: { id: number }) => void;
};

export const useLoading = create<StoreLoading>((set) => ({
  loading: false,
  setLoading: (isLoading) => set((state) => ({ loading: isLoading })),
}));

export const useStyle = create<StoreStyle>((set) => ({
  scrollBtnVisible: false,
  toggleScrollBtnVisible: (isIntersecting) =>
    set((state) => ({ scrollBtnVisible: isIntersecting })),
}));

export const useChat = create<StoreChat>()(
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
                answer: { content: AnswerLoading() },
              },
            ],
          };
        });

        return newId;
      },
      editQuestion: ({ id, content }) => {
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id ? { ...chat, question: content } : chat
          ),
        }));
      },
      insertAnswer: ({ id, content }) => {
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id ? { ...chat, answer: { content } } : chat
          ),
        }));
      },
      updateLikeAnswer: ({ id, isLiked }) => {
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id
              ? { ...chat, answer: { ...chat.answer, liked: isLiked } }
              : chat
          ),
        }));
      },
      cancelLikeAnswer: ({ id }) => {
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id
              ? { ...chat, answer: { ...chat.answer, liked: undefined } }
              : chat
          ),
        }));
      },
      setErrorAnswer: ({ id }) => {
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id
              ? { ...chat, answer: { ...chat.answer, err: true } }
              : chat
          ),
        }));
      },
      deleteChat: ({ id }) => {
        set((state) => ({
          chats: state.chats.filter((item) => item.id !== id),
        }));
      },
    }),
    { name: "chat-storage" }
  )
);
