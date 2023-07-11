import Input from "./components/Input";
import TaskItem from "./components/TaskItem";
import { TodoContext } from "./context/TodoProvider";

function App() {
  return (
    <div className="container w-full mx-auto max-w-xl p-2 font-poppins">
      <h1 className="text-center bold text-4xl">To Do</h1>
      <Input />
      <TodoContext.Consumer>
        {(state) =>
          state.todoList.map((todo) => <TaskItem key={todo.id} todo={todo} />)
        }
      </TodoContext.Consumer>
    </div>
  );
}

export default App;
