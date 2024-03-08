import Header from "./components/layout/Header"
import TodoForm from "./components/todo/TodoForm"
import TodoList from "./components/todo/TodoList"
import { useTodos } from "./hooks/useTodos"
import { TodoBody } from "./style/TodoStyle"

const App = () => {
  const {addTodo, deleteTodo, toggleTodoDone, inProgressTodos, doneTodos} = useTodos()

  return (
    <TodoBody>
      <Header />
      <TodoForm addTodo={addTodo}/>
      <TodoList todoTitle="Working.." todos={inProgressTodos} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone}/>
      <TodoList todoTitle="Done.." todos={doneTodos} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone}/>
    </TodoBody>
  )
}

export default App