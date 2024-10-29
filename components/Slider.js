"use client";

import { lilita_one } from "@/app/fonts";
import { useEffect, useState } from "react";

export default function Slider() {
  const pharagraph = [
    {
      img: "/images/herramientas.jpg",
      title: "Alquiler de Herramientas Hidráulicas y Neumáticas",
      description:
        "Ahorra en costos y espacio con una amplia gama de herramientas neumáticas en alquiler para todo tipo de proyectos, ideal para profesionales y aficionados",
    },
    {
      img: "/images/industrias.jpg",
      title: "Mantenimiento Especializado",
      description:
        "Nuestros expertos realizan un mantenimiento preventivo y correctivo para asegurar el máximo rendimiento y durabilidad de tus herramientas",
    },
    {
      img: "/images/industrias2.jpg",
      title: "Reparación Rápida y Eficiente",
      description:
        "Ofrecemos servicios de reparación rápida y efectiva, con piezas de alta calidad y un servicio al cliente excepcional",
    },
    {
      img: "/images/asesoria.jpg",
      title: "Asesoría Personalizada",
      description:
        "¿No sabes qué herramienta necesitas? Nuestro equipo te ofrece asesoría personalizada para encontrar la solución perfecta según tus requerimientos y presupuesto",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % pharagraph.length);
        setIsVisible(true);
      }, 700);
    }, 8000);

    setIntervalId(id);
  };

  const nextSlide = () => {
    startInterval();
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % pharagraph.length);
      setIsVisible(true);
    }, 700);
  };

  const prevSlide = () => {
    startInterval();
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + pharagraph.length) % pharagraph.length
      );
      setIsVisible(true);
    }, 700);
  };

  useEffect(() => {
    setIsVisible(true);
    startInterval();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="transition-transform duration-500 flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {pharagraph.map((item, index) => (
          <div
            key={index}
            className="relative h-screen w-screen flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.img})` }}
            aria-hidden="false"
          >
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4 text-gray-300 flex flex-col gap-12">
                <h1
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-700 transition-all duration-1000 ${
                    lilita_one.className
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-y-20"
                  }`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-base md:text-xl font-medium transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white rounded-full px-3 py-1.5 hover:bg-gray-800/50 transition-colors duration-500"
        onClick={prevSlide}
      >
        <i className="fa-solid fa-angle-left fa-lg"></i>
      </button>
      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white rounded-full px-3 py-1.5 hover:bg-gray-800/50 transition-colors duration-500"
        onClick={nextSlide}
      >
        <i className="fa-solid fa-angle-right fa-lg"></i>
      </button>
    </div>
  );
}
