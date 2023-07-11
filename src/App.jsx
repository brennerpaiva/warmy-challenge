import Input from "./components/Input";
import TaskItem from "./components/TaskItem";
import { TodoContext } from "./context/TodoProvider";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <div className="container w-full mx-auto max-w-xl p-2 mt-6">
        <h1 className="text-center bold text-4xl">TO DO</h1>
        <Input />
        <TodoContext.Consumer>
          {(state) =>
            state.todoList.map((todo) => <TaskItem key={todo.id} todo={todo} />)
          }
        </TodoContext.Consumer>
      </div>
    </div>
  );
}

export default App;
