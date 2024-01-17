import React from "react";
import image1 from "../../../public/assets/images/image1.jpeg";
import Image from "next/image";
import { Socials } from "./Socials";

export const Home = () => {
  return (
    <section className="p-5 h-5/6 flex flex-col md:flex-row items-center justify-around mt-11">
      <div className="flex flex-col gap-8 text-center md:text-left">
        <strong className="text-6xl text-sky-700">Olá,</strong>
        <p className="text-5xl font-bold text-color2">
          <strong className="text-5xl text-sky-700">Eu sou</strong> Walmir
          Marques
        </p>

        <h3 className="text-3xl">Um estudante de Front-End.</h3>
        <Socials />
      </div>
      <div className="h-48 md:h-96 w-48 md:w-96 mt-8 md:mt-0">
        <Image
          src={image1}
          alt="Um avatar de Walmir Marques"
          className="rounded-full shadow-2xl shadow-sky-700"
        />
      </div>
    </section>
  );
};
