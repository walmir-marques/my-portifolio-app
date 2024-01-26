import Image from "next/image";
import React from "react";

export const TechCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3  bg-sky-700 h-56 hover:shadow-xl hover:shadow-white">
      <Image src={item.source} width={80} height={80} alt={item.name} />
      <h1 className="text-white font-bold md:text-2xl text-1xl">{item.name}</h1>
    </div>
  );
};
