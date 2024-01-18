import React from "react";
import { techs } from "@/utils/techs";
import { TechCard } from "./TechCard";
import Image from "next/image";

export const Technologies = () => {
  return (
    <section className=" flex flex-col bg-gradient-to-r from-sky-400 via-sky-500 to-sky-700 h-auto">
      <h1 className="text-4xl mt-6 font-bold text-center text-white">
        🖥️ Tecnologias
      </h1>
      <div className="mx-auto container w-5/6 flex-1 grid grid-cols-2 lg:grid-cols-4 mt-10 p-6 gap-16 ">
        {techs.map((item, index) => {
          return <TechCard item={item} key={index} />;
        })}
      </div>
    </section>
  );
};
