import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";

const TaskCard = ({ task, deleteTask }) => {
  const router = useRouter();

  return (
    <div className="mb-4 ">
      <h3 className="text-lg font-bold text-cyan-500 mb-2">{task.title}</h3>
      <div className="flex items-center justify-between border-b-2 border-cyan-500 mb-8">
        <div className="w-3/5 ">
          <p className="text-gray-150 text-sm mb-2 w-full">
            {task.description}
          </p>
          <p className="text-gray-150 text-xs mb-2">
            {new Date(task.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="w-2/5 flex justify- items-center gap-3 text-xs">
          <button
            onClick={() => {
              router.push(`/tasks/edit/${task.id}`);
            }}
            className="bg-gray-100 text-gray-950 py-1 px-2 rounded-sm m-auto hover:bg-cyan-600 transition-all duration-300 focus:outline-none"
          >
            Editar
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-cyan-500 text-gray-950 py-1 px-2 rounded-sm m-auto hover:bg-cyan-600 transition-all duration-300 focus:outline-none"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
