import React, { useContext, useState } from "react";
import { FiEdit2, FiTrash2, FiCheck } from "react-icons/fi";
import { TodoContext } from "../context/TodoProvider";

function TaskItem({ todo }) {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [name, setName] = useState("");
  const todoContext = useContext(TodoContext);

  return (
    <ul className="flex flex-col gap-3" key={todo.id}>
      <li className="flex justify-between p-3 items-center rounded-md hover:bg-black hover:bg-opacity-30 transition-all">
        <div className="flex justify-between gap-3 items-center flex-1">
          {toggleUpdate ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="flex-1 mr-2 bg-secondary p-1 rounded transition-all ease-in-out duration-300"
            />
          ) : (
            <>
              <input
                type="checkbox"
                className="w-6 h-6 accent-primaryDarker rounded "
                checked={todo.done}
                onChange={() =>
                  todoContext.updateTodo({
                    id: todo.id,
                    task: todo.task,
                    done: !todo.done,
                  })
                }
              />
              <span className={`${todo.done ? "line-through" : ""} flex-1`}>
                {todo.task}
              </span>
            </>
          )}
        </div>

        <div className=" flex items-center gap-3">
          <button
            className="cursor-pointer w-8 h-8 flex items-center justify-center  rounded-full bg-blue-100 text-red-500 hover:bg-secondary transition-colors duration-300"
            onClick={() => {
              todoContext.removeTodo(todo.id);
            }}
          >
            <FiTrash2 />
          </button>
          <button
            className="cursor-pointer w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-primaryDarker hover:bg-secondary transition-colors duration-300"
            onClick={() => {
              setToggleUpdate(!toggleUpdate);
              if (name != "") {
                todoContext.updateTodo({
                  id: todo.id,
                  task: name,
                  done: todo.done,
                });
                setName("");
              }
            }}
          >
            {toggleUpdate ? <FiCheck /> : <FiEdit2 />}
          </button>
        </div>
      </li>
    </ul>
  );
}

export default TaskItem;
