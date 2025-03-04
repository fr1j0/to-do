import { INITIAL_TODOS } from "../page";

export const TODO_TYPES: readonly string[] = [
  ...new Set(INITIAL_TODOS.map((todo) => todo.type)),
];
export type TODO_TYPE = (typeof TODO_TYPES)[number];

export type TODO = {
  type: TODO_TYPE;
  name: string;
};
