import { atom } from "recoil";

export const todoState = atom({
  key: "todos",
  default: [
    {
      title: "할 일",
      contents: "내용 내용 ",
      id: 0,
    },
  ],
});
