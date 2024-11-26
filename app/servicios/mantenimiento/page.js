import { rubik } from "@/app/fonts";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";
import React from "react";

export default function page() {
  const maintenances = [
    {
      title: "Servicio",
      subtitle: "Mantenimiento de herramientas",
      desc: "En Fuerza y Torque, brindamos un servicio integral de mantenimiento para herramientas de torque neumáticas e hidráulicas. Nos encargamos de la revisión, limpieza y ajuste de tus equipos, asegurando su correcto funcionamiento y prolongando su vida útil. Con nuestro servicio, garantizamos que tus herramientas operen de manera eficiente y segura.",
      img: "/images/mantenimiento-herramientas.webp",
      background: "bg-blue-gray-800",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de equipos hidráulicos",
      desc: "Contamos con experiencia en el mantenimiento de equipos hidráulicos, tanto móviles como fijos. Nos encargamos de inspeccionar y reemplazar componentes clave como bombas, válvulas, mangueras y filtros, para garantizar un funcionamiento eficiente y libre de fallas.",
      img: "/images/mantenimiento-hidraulicos.webp",
      background: "bg-blue-gray-900",
      inverted: true,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de cilindros hidráulicos",
      desc: "Ofrecemos un servicio especializado de mantenimiento para cilindros hidráulicos, cruciales en sistemas de alta presión. Realizamos la inspección de sellos, rodamientos y componentes internos, además de reparar cualquier daño que pueda afectar su funcionamiento.",
      img: "/images/mantenimiento-cilindros.webp",
      background: "bg-gray-900",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Mantenimiento de elevadores de vehículos livianos",
      desc: "Realizamos mantenimiento preventivo y correctivo para elevadores de vehículos livianos, revisando componentes esenciales como bombas, válvulas y estructuras. Aseguramos que tus elevadores funcionen con eficiencia y seguridad, realizando inspecciones regulares para prevenir fallos y mejorar su rendimiento general.",
      img: "/images/mantenimiento-elevadores.webp",
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
