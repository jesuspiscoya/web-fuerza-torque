import { rubik } from "@/app/fonts";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";
import React from "react";

export default function page() {
  const images = [
    { img: "/images/herramientas.jpg" },
    { img: "/images/industrias.jpg" },
    { img: "/images/industrias2.jpg" },
    { img: "/images/asesoria.jpg" },
  ];
  const maintenances = [
    {
      title: "Servicio",
      subtitle: "Mantenimiento de herramientas",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/industrias2.jpg",
      background: "bg-blue-gray-800",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de equipos hidráulicos",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/industrias2.jpg",
      background: "bg-blue-gray-900",
      inverted: true,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de cilindros hidráulicos",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/industrias2.jpg",
      background: "bg-gray-900",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de elevadores de vehículos livianos",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/industrias2.jpg",
      background: "bg-blue-gray-800",
      inverted: true,
    },
  ];

  return (
    <>
      <NavBar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/mantenimiento.webp')` }}
      >
        <div className="w-full h-full bg-black/80 flex justify-center items-center">
          <ScrollAnimation to="top">
            <h1
              className={`text-4xl md:text-6xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Mantenimiento
            </h1>
          </ScrollAnimation>
        </div>
      </div>
      {maintenances.map((item, key) => (
        <Content key={key} element={item} />
      ))}
      <div className="p-7 md:p-16 bg-blue-gray-900">
        <div className="container text-center flex flex-col gap-8 md:gap-10">
          <ScrollAnimation to="left">
            <h1
              className={`text-3xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Galería
            </h1>
            <div className="h-0.5 bg-red-600 w-16 mt-1 mb-5 mx-auto" />
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-5">
            {[...images, ...images].map(({ img }, key) => (
              <ScrollAnimation
                key={key}
                to="bottom"
                className="relative"
                delay={key * 100}
              >
                <Image
                  src={img}
                  alt="Galería de servicios"
                  width={1000}
                  height={1000}
                  className="h-48 w-full md:h-80 object-cover"
                />
                <div className="absolute hover:bg-black/50 duration-[600ms] top-0 bottom-0 left-0 right-0 cursor-pointer" />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
