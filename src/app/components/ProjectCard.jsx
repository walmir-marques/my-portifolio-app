import Image from "next/image";
import React from "react";

export const ProjectCard = ({ item }) => {
  return (
    <div className="flex flex-col">
      <div>
        <Image
          src={item.source}
          width={900}
          height={400}
          alt={item.name}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <h1 className="text-2xl font-bold text-center">{item.name}</h1>
        <p className="text-lg font-semibold mx-5 text-center">
          {item.description}
        </p>
        <div className="my-10 gap-10 text-center">
          <a
            href={item.view}
            target="_blank"
            className="border p-5 m-4 rounded-full bg-sky-700 text-white hover:bg-white hover:text-sky-700 hover:border hover:border-sky-700"
          >
            Visitar
          </a>
          <a
            href={item.git}
            target="_blank"
            className="border p-5 m-4 rounded-full bg-sky-700 text-white hover:bg-white hover:text-sky-700 hover:border hover:border-sky-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
