import { useState } from "react";
import { AddTodoBtn, TodoInput, TodoInputBox } from "../../style/TodoStyle";
import { Todo } from "../../types/todo-type";

interface TodoFormProps {
  addTodo: (todo: Todo) => void
}

const TodoForm = ({addTodo} :TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const nextTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleString()
    }
    addTodo(nextTodo)

    setTitle("");
    setContent("");
  }

  return (
      <TodoInputBox onSubmit={onSubmit}>
        <div>
          <TodoInput type="text" name="title" placeholder=" 제목" value={title}
          onChange={(e) => setTitle(e.target.value)}/>
          <TodoInput $inputWidth="30rem" type="text" name="content" placeholder=" 내용" value={content}
          onChange={(e) => setContent(e.target.value)}/>
        </div>
        <AddTodoBtn type="submit">제출하기</AddTodoBtn>
      </TodoInputBox>
  )
}

export default TodoForm