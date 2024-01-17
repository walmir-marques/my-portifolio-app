import React from "react";
import Image from "next/image";
import Image2 from "../../../public/assets/images/Image2.jpg";

export const About = () => {
  return (
    <section className="mx-auto container w-5/6 h-screen flex flex-col  mb-32 lg:mb-0">
      <h1 className="text-4xl mt-3 font-bold text-center">
        👤 Sobre <span className="text-sky-700">Mim</span>
      </h1>
      <div className="flex-1 flex flex-col lg:flex-row items-center container mx-auto p-4">
        <div className="mx-auto mb-8 md:mb-0 h-48 md:h-96 w-48 md:w-96">
          <Image
            src={Image2}
            alt="Um avatar de Walmir Marques"
            className="rounded-md max-w-full"
          />
        </div>
        <div className="flex-1 ml-0 md:ml-20 flex flex-col text-center md:text-left max-w-[500px]">
          <h2 className="font-bold text-2xl">Walmir Marques Filho</h2>
          <h3 className="mt-1 text-xl font-semibold">
            Atualmente estudando front-end
          </h3>
          <p className="mt-9">
            Sou formado em ciência da computação desde 2012, e desde a minha
            formação sempre trabalhei na área de infraestrutura. Entre março de
            2021 e Novembro de 2023 fui fazer um intercâmbio na Irlanda para
            aprimorar o meu inglês. Após retornar para o Brasil decidi migrar de
            área e escolhi a área de Front-End para estudar, por ser uma área na
            qual sempre tive vontade de me aprofundar. Atualmente estou focado
            nos meus estudos para futuramente encontrar uma vaga de emprego na
            área.
          </p>
          <p className="mt-5">
            <span className="text-sky-700 font-bold">📧 Email: </span>{" "}
            walmir-mf@hotmail.com
          </p>
          <p className="mt-5">
            <span className="text-sky-700 font-bold">📱 Telefone: </span> +55
            (35) 99126-4905
          </p>

          <a
            className="transition ease-in-out duration-700 w-40 text-center p-2 rounded-full mt-5 font-bold bg-sky-700 text-white hover:bg-white hover:text-sky-700 hover:border hover:border-sky-700 mx-auto lg:mx-0"
            href="https://drive.google.com/uc?export=download&id=1tRTBhle9SA8lint24DyR0NF1nKTGyFIn"
            target="_blank"
          >
            Baixe o meu CV
          </a>
        </div>
      </div>
    </section>
  );
};
