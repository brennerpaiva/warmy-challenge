import React, { createContext, useState } from "react";
import { todos } from "./Todo";

export var TodoContext = createContext();

function TodoProvider(props) {
  const [todoList, setTodoList] = useState(todos);

  function addTodo(todo) {
    setTodoList((prevState) => [...prevState, todo]);
  }
  function removeTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id != id));
  }

  function updateTodo(todo) {
    var index = -1;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id == todo.id) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      todoList[index] = todo;
      setTodoList(todoList);
    }
  }

  return (
    <div>
      <TodoContext.Provider
        value={
          todoList: addTodo,
          removeTodo: removeTodo,
          updateTodo: updateTodo,
        }
      >
        {props.children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;
