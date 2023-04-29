import { TodoType } from "@/components/Recoil/RecoilList";
import { atom } from "jotai";

export const todoAtom = atom<TodoType[]>([
  {
    title: "할 일",
    contents: "내용 내용 ",
    id: 0,
  },
]);
