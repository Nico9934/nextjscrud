import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex w-full h-[calc(100vh-5rem)] bg-gray-950-950">
      <div className="w-9/12 flex h-full gap-5 m-auto justify-center items-center">
        <div className="text-cyan-500 w-1/2 font-semibold flex flex-col">
          <h3 className="text-6xl mb-2 text-end">404 - Página no encontrada</h3>
          <p className="text-gray-100 text-end">
            Lo sentimos, la página que estás buscando no existe.
          </p>
          <p className="mt-5 text-xs text-end text-gray-300">
            <Link href="/">
              Haz click aqui para volver a la página de inicio
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
