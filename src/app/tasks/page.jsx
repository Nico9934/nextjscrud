"use client";

import TaskCard from "@/components/TaskCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export const dynamic = "force-dynamic";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefres] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios("api/tasks");
        setTasks(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTasks();
  }, [refresh]);

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setRefres(!refresh);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="md:w-2/5 bg-gray-800 p-12 mt-10 text-gray-150 mb-12 border-b-2 border-cyan-500 rounded-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-cyan-500 focus:border-transparent">
        <h2 className="text-2xl font-bold text-gray-150 mb-4">
          {tasks.length > 0 && "Tareas "}
        </h2>

        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
          ))
        ) : (
          <div className="m-auto uppercase text-center">Cargando...</div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
