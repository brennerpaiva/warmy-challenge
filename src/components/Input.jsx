import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import { v1 } from "uuid";

function Input() {
  const [name, setName] = useState("");
  var todoContext = useContext(TodoContext);

  return (
    <form className="">
      <div className="flex items-center gap-3 mb-5 w-full mt-10">
        <input
          className="p-3 text-black w-full rounded-sm outline-none "
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escreva sua Tarefa"
        />
        <span
          className="py-3 px-5 cursor-pointer rounded-sm  bg-blue-500 text-white"
          onClick={() => {
            if (name != "") {
              todoContext.addTodo({
                id: v1(),
                task: name,
              });
            }
            setName("");
          }}
        >
          Adicionar
        </span>
      </div>
    </form>
  );
}

export default Input;
