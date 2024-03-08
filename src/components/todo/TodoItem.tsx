import { TodoActionBtn, TodoActionContainer, TodoCardItem, TodoCardItemContainer } from "../../style/TodoStyle"
import { Todo } from "../../types/todo-type"

interface TodoItemProps {
  todo: Todo
  deleteTodo: (id: string) => void
  toggleTodoDone: (id: string) => void
}

const TodoItem = ({todo, deleteTodo, toggleTodoDone} : TodoItemProps) => {
  const {title, content, deadline, isDone, id} = todo

  const onClickDelete = () => deleteTodo(id)

  const onClickToggleDone = () => toggleTodoDone(id)

  return (
    <li>
      <TodoCardItemContainer>
        <TodoCardItem $isDone={isDone}>
            <h3>{title}</h3>
            <p>{content}</p>
            <time>{deadline}</time>
        </TodoCardItem>
          <TodoActionContainer>
            <TodoActionBtn 
            $backgroundColor="skyblue"
            onClick={onClickToggleDone}
            >{isDone ? "취소" : "완료"}</TodoActionBtn>
            <TodoActionBtn 
            $backgroundColor="tomato"
            onClick={onClickDelete}>삭제</TodoActionBtn>
          </TodoActionContainer>
      </TodoCardItemContainer>
    </li>
  )
}

export default TodoItem