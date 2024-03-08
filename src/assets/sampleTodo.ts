import { Todo } from "../types/todo-type";

export const sampleTodo: Todo = {
  id: "1",
  title: "Sample Todo",
  content: "Sample Todo",
  isDone: false,
  deadline: new Date().toLocaleString()
}