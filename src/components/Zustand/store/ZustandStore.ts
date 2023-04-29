import { TodoType } from "@/components/Recoil/RecoilList";
import { create } from "zustand";

interface TodoInterface {
  state: TodoType[];
  setState: (newState: TodoType[]) => void;
  addTodo: (newTodo: TodoType) => void;
  deleteTodo: (id: number) => void;
}

const initialState = [
  {
    id: 0,
    title: "투두리스트",
    contents: "오늘 이거 끝내야지",
  },
];

export const zustandTodo = create<TodoInterface>((set) => ({
  state: initialState,
  setState: (newState: TodoType[]) => set({ state: newState }),
  addTodo: (newTodo: TodoType) =>
    set((prev) => ({
      state: [...prev.state, newTodo],
    })),
  deleteTodo: (id: number) =>
    set((prev) => ({
      state: [...prev.state.filter((value) => value.id !== id)],
    })),
}));
