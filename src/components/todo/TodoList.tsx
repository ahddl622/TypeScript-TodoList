import { TodoItemList } from "../../style/TodoStyle"
import { Todo } from "../../types/todo-type"
import TodoItem from "./TodoItem"

interface TodoListProps {
  todoTitle: string
  todos: Todo[]
  deleteTodo: (id: string) => void
  toggleTodoDone: (id: string) => void
}

const TodoList = ({todoTitle, todos, deleteTodo, toggleTodoDone}: TodoListProps) => {
  return (
    <section>
      <h2>{todoTitle}</h2>

      <div>
        <TodoItemList>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone}/>
          ))}
        </TodoItemList>
      </div>
    </section>
  )
}

export default TodoList