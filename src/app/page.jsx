import Link from "next/link";

export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <div className="flex w-full h-[calc(100vh-5rem)] bg-gray-950-950">
      <div className="w-9/12 flex h-full  m-auto flex-row gap-48  items-center">
        <div className="text-cyan-500 w-1/2 font-semibold flex flex-col ">
          <h3 className="text-6xl mb-2 text-end">TaskList</h3>
          <p className="text-gray-100 text-end">
            Un proyecto creado con NextJs
          </p>
          <p className="mt-5 text-xs text-end text-gray-100">
            ¡Crea, edita y elimina tareas en pocos clicks!
          </p>
          <Link
            href={"/new"}
            className="bg-cyan-500 mt-12 mr-0 text-gray-950 py-2 px-4 rounded-sm m-auto hover:bg-cyan-600 transition-all duration-300 focus:outline-none"
          >
            Agrega tu primer tarea
          </Link>
        </div>
        <div className="text-gray-100 w-1/2 flex flex-col">
          <p className="text-cyan-500 text-8xl font-bold">CRUD</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
