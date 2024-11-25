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
      img: "/images/bomba-llave-torque.webp",
      title: "Bomba hidráulica para llave de torque",
    },
    {
      img: "/images/bomba-electrica-torque.webp",
      title: "Bomba eléctrica para llave de torque",
    },
    {
      img: "/images/bomba-neumatica-torque.webp",
      title: "Bomba neumática para llave de torque",
    },
    {
      img: "/images/bomba-hidraulica-pistones.webp",
      title: "Bomba hidráulica para pistones",
    },
    {
      img: "/images/bomba-hidraulica-cilindros.webp",
      title: "Bomba hidráulica para cilindros doble",
    },
    {
      img: "/images/bomba-hidraulica-simple.webp",
      title: "Bomba hidráulica de simple efecto",
    },
  ];

  return (
    <>
      <NavBar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: `url('/images/bg-herramientas.webp')` }}
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
          subtitle: "Bombas Hidráulicas",
          desc: "Nuestras bombas hidráulicas son ideales para aplicaciones industriales que requieren un suministro de energía hidráulica confiable. Perfectas para sistemas de apriete, presión y otros procesos de ensamblaje pesado.",
          img: "/images/bombas-hidraulicas.webp",
          background: "bg-blue-gray-800",
          inverted: false,
        }}
      />
      <div className="p-7 md:p-16 bg-blue-gray-900">
        <div className="container text-center flex flex-col gap-10">
          <ScrollAnimation to="left">
            <h1
              className={`text-3xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Tipos de herramientas que ofrecemos
            </h1>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-5">
            {tools.map(({ img, title }, key) => (
              <ScrollAnimation
                key={key}
                to="bottom"
                delay={key * 100}
                className="relative flex p-8 h-72 w-full overflow-hidden bg-white rounded-md cursor-default shadow-lg shadow-black/70 duration-500"
              >
                <Image
                  src={img}
                  alt={title}
                  width={200}
                  height={200}
                  className="object-contain w-full"
                />
                <div className="absolute flex flex-col justify-center text-center gap-5 p-10 text-sm top-0 bottom-0 left-0 right-0 opacity-0 duration-500 bg-black/70 hover:opacity-100">
                  <h1
                    className={`text-yellow-700 font-bold text-2xl ${rubik.className}`}
                  >
                    {title}
                  </h1>
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
