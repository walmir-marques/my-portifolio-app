import React from "react";
import { projects } from "@/utils/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className=" flex flex-col h-screen ">
      <h1 className="text-4xl mt-6 font-bold text-center text-black">
        💻 Projetos
      </h1>
      <div className="mx-auto container w-4/6 flex-1 grid grid-cols-1 mt-10 p-6 gap-16">
        {projects.map((item, index) => {
          return (
            <div key={index} className="border shadow-md shadow-black h-auto">
              <ProjectCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
