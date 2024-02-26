"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (params.id !== undefined) {
      const getTask = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3000/api/tasks/${params.id}`
          );
          const data = await res.data;
          setNewTask(data);
        } catch (error) {
          console.log(error.message);
        }
      };
      getTask();
    }
  }, []);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await axios.put(`/api/tasks/${params.id}`, newTask);
    } else {
      const res = await axios.post("api/tasks", newTask);
    }

    router.refresh();
    router.push("/tasks");
  };

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center">
      <form
        className="bg-gray-950 p-8 rounded-lg shadow-md w-96 flex justify-center flex-col"
        onSubmit={onHandleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-150 mb-4">
          Formulario de tareas
        </h2>

        <div className="mb-4">
          <label htmlFor="title" className="text-gray-150 block mb-2">
            Título:
          </label>
          <input
            type="text"
            id="title"
            defaultValue={newTask.title}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                title: e.target.value,
              })
            }
            className="w-full bg-gray-800 text-gray-150 border-b-2 border-cyan-500 rounded-sm p-2 outline-none transition-all duration-300 focus:ring-1 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="text-gray-150 block mb-2">
            Descripción:
          </label>
          {error && error.message}
          <textarea
            defaultValue={newTask.description}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                description: e.target.value,
              })
            }
            id="description"
            className="w-full bg-gray-800 text-gray-150 border-b-2 border-cyan-500 rounded-sm p-2 h-24 resize-none outline-none transition-all duration-300 focus:ring-1 focus:ring-cyan-500 focus:border-transparent"
          ></textarea>
        </div>

        <button className="bg-cyan-500 text-gray-950 py-2 px-4 rounded-sm m-auto hover:bg-cyan-600 transition-all duration-300 focus:outline-none">
          {params.id !== undefined ? "Guardar cambios" : "Nueva tarea"}
        </button>
      </form>
    </div>
  );
};

export default NewPage;
