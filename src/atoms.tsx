import { atom } from "recoil";

export const toDoState = atom({
  key: "toDo",
  default: ["a", "b", "c", "d", "e", "f"],
});
