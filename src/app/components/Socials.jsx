import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Socials = () => {
  return (
    <div>
      <ul className="flex gap-6">
        <li className=" w-12 h-12 rounded-full bg-sky-700 text-white hover:bg-black hover:text-sky-700">
          <a
            href="https://www.linkedin.com/in/walmir-marques-filho-1a0972101/"
            target="_blank"
            className="text-3xl flex justify-center mt-2 "
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className=" w-12 h-12 rounded-full bg-sky-700 text-white hover:bg-black hover:text-sky-700">
          <a
            href="https://github.com/walmir-marques"
            target="_blank"
            className="text-3xl flex justify-center mt-2 "
          >
            <FaGithub />
          </a>
        </li>
        <li className=" w-12 h-12 rounded-full bg-sky-700 text-white hover:bg-black hover:text-sky-700">
          <a
            href="https://www.instagram.com/walmir.marques/"
            target="_blank"
            className="text-3xl flex justify-center mt-2 "
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
