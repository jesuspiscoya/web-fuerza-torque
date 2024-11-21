import { rubik } from "@/app/fonts";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";
import React from "react";

export default function page() {
  const images = [
    { img: "/images/slider-herramientas.webp" },
    { img: "/images/industrias.jpg" },
    { img: "/images/industrias2.jpg" },
    { img: "/images/slider-asesoria.webp" },
  ];
  const maintenances = [
    {
      title: "Servicio",
      subtitle: "Mantenimiento de herramientas",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/mantenimiento-herramientas.png",
      background: "bg-blue-gray-800",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de equipos hidráulicos",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/mantenimiento-hidraulicos.jpg",
      background: "bg-blue-gray-900",
      inverted: true,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de cilindros hidráulicos",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/mantenimiento-cilindros.jpg",
      background: "bg-gray-900",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de elevadores de vehículos livianos",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/mantenimiento-elevadores.jpg",
      background: "bg-blue-gray-800",
      inverted: true,
    },
  ];

  return (
    <>
      <NavBar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/images/bg-mantenimiento.webp')` }}
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
      <Footer />
    </>
  );
}
