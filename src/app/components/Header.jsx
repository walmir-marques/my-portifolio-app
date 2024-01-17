import React from "react";
import Logo from "../../../public/assets/images/Logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="mt-6 flex flex-col md:flex-row justify-between text-xl font-bold items-center mx-auto container w-5/6">
      <div className="mb-4 md:mb-0">
        <Image src={Logo} alt="O logo da minha página" />
      </div>
      <div>
        <nav className="text-center md:text-left">
          <ul className="flex flex-col md:flex-row gap-6">
            <li className="hover:text-sky-700 hover:underline">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-sky-700 hover:underline">
              <a href="#about">Sobre</a>
            </li>
            <li className="hover:text-sky-700 hover:underline">
              <a href="#tec">Tecnologias</a>
            </li>
            <li className="hover:text-sky-700 hover:underline">
              <a href="#projects">Projetos</a>
            </li>
            <li className="hover:text-sky-700 hover:underline">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
