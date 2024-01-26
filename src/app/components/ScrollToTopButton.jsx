// ScrollToTopButton.js
"use client";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Adiciona um evento de rolagem para mostrar ou ocultar o botão
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Adiciona a funcionalidade de rolar de volta para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      ⬆
    </button>
  );
};

export default ScrollToTopButton;
