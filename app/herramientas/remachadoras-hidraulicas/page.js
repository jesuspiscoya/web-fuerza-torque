import { rubik } from "@/app/fonts";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";
import React from "react";

export default function page() {
  const tools = [
    {
      img: "/images/herramientas.jpg",
      title: "Remachadora hidráulica tipo huck",
      description: "Remachadora hidráulica",
    },
  ];

  return (
    <>
      <NavBar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: `url('/images/herramientas.webp')` }}
      >
        <div className="w-full h-full bg-black/80 flex justify-center items-center">
          <ScrollAnimation to="top">
            <h1
              className={`text-4xl md:text-6xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Herramientas
            </h1>
          </ScrollAnimation>
        </div>
      </div>
      <Content
        element={{
          title: "Herramienta",
          subtitle: "Remachadoras Hidráulicas",
          desc: "Equipos de remachado hidráulico que permiten una conexión segura y de alta resistencia, ideales para aplicaciones de ensamblaje industrial y mantenimiento de maquinaria.",
          img: "/images/herramientas2.jpg",
          background: "bg-blue-gray-800",
          inverted: false,
        }}
      />
      <div className="p-7 md:p-16 bg-blue-gray-900">
        <div className="container text-center flex flex-col gap-8 md:gap-10">
          <ScrollAnimation to="left">
            <h1
              className={`text-3xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Tipos de herramientas que ofrecemos
            </h1>
            <div className="h-0.5 bg-red-600 max-w-72 mt-1 mb-5 mx-auto" />
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-5">
            {tools.map(({ img, title, description }, key) => (
              <ScrollAnimation
                key={key}
                to={"bottom"}
                delay={key * 100}
                className="relative h-72 w-full overflow-hidden bg-black/70 cursor-default shadow-lg shadow-black/70 duration-500"
              >
                <Image src={img} alt={title} fill className="object-cover" />
                <div className="absolute flex flex-col justify-center text-center gap-5 p-10 text-sm top-0 bottom-0 left-0 right-0 opacity-0 duration-500 bg-black/70 hover:opacity-100">
                  <h1
                    className={`text-red-700 font-bold text-2xl ${rubik.className}`}
                  >
                    {title}
                  </h1>
                  <p className="text-gray-400">{description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
