import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" text-cyan-500 p-4 bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>NextJs Project</Link>
        <div className="flex gap-6">
          <Link
            href="/tasks"
            className="text-sm hover:border-b hover:border-cyan-500 transition-all delay-75 duration-100 "
          >
            Tareas
          </Link>
          <Link
            href="/new"
            className="text-sm hover:border-b hover:border-cyan-500 transition-all delay-75 duration-100 "
          >
            Nueva Tarea
          </Link>
          <Link
            href="/about"
            className="text-sm hover:border-b hover:border-cyan-500 transition-all delay-75 duration-100 "
          >
            Acerca de mi
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
