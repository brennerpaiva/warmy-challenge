import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import { v1 } from "uuid";

function Input() {
  const [name, setName] = useState("");
  var todoContext = useContext(TodoContext);

  return (
    <form className="flex items-center gap-3 mb-5 w-full mt-10">
      <input
        className="p-3 text-black w-full rounded-sm outline-none"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escreva sua Tarefa"
      />
      <span
        className="py-3 px-5 cursor-pointer rounded-sm  bg-primaryLighter text-white hover:bg-primaryDarker transition-colors duration-300"
        onClick={() => {
          if (name != "") {
            todoContext.addTodo({
              id: v1(),
              task: name,
              done: false,
            });
          }
          setName("");
        }}
      >
        Adicionar
      </span>
    </form>
  );
}

export default Input;
