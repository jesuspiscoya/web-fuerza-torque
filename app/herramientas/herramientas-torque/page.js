import { rubik } from "@/app/fonts";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Herramientas de torque",
};

export default function page() {
  const tools = [
    {
      img: "/images/llave-rad.webp",
      title: "Llaves de torque neumáticas RAD hasta 8500 ft.lbs",
    },
    {
      img: "/images/llave-stealth.webp",
      title: "Llaves de torque hidráulica modelo Stealth hasta 47069 Nm",
    },
    {
      img: "/images/llave-avanti.webp",
      title: "Llaves de torque Hidráulico modelo Avanti hasta 24252 Nm",
    },
    {
      img: "/images/llave-hidraulica-dado.webp",
      title: "Llaves hidráulicas para trabajo con dado",
    },
    {
      img: "/images/llave-respaldo.webp",
      title: "Llaves de respaldo Hytorc",
    },
    {
      img: "/images/torquimetro.webp",
      title: "Torquímetro hasta 2000 ft.lbs",
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
          subtitle: "Llaves de Torque",
          desc: "Contamos con una variedad de herramientas de torque, incluyendo llaves hidráulicas, neumáticas y eléctricas, diseñadas para ofrecer un control preciso y seguro en aplicaciones que requieren un alto par de apriete.",
          img: "/images/llaves-torque.webp",
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
                <div className="absolute text-center p-10 text-sm top-0 bottom-0 left-0 right-0 opacity-0 duration-500 bg-black/70 hover:opacity-100 content-center">
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
