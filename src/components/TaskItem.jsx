import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiSave } from "react-icons/fi";
import Input from "./Input";

function TaskItem() {
  const [toggleEdit, setToggleEdit] = useState(false);

  return (
    <ul className="flex flex-col gap-3">
      <li className="flex justify-between p-3 items-center rounded-md hover:bg-black hover:bg-opacity-30 transition-all">
        <div className="flex justify-between gap-3 items-center flex-1">
          <input className="w-6 h-6" type="checkbox" />
          <span className="flex-1">Minha tarefa</span>
        </div>

        <div className=" flex items-center gap-3">
          <span className="cursor-pointer w-8 h-8 flex items-center justify-center bg-red-100 rounded-full text-red-500"></span>
          <span className="cursor-pointer w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-500"></span>
        </div>
      </li>
    </ul>
  );
}

export default TaskItem;
