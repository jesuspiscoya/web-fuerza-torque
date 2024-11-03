"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRef } from "react";
import { caveat, rubik } from "../fonts";

export default function AboutUs() {
  const aboutRef = useRef(null);
  const tools = [
    "Herramientas hidráulicas",
    "Herramientas neumáticas",
    "Herramientas eléctricas",
  ];
  const data = [
    {
      label: "Misión",
      value: "mision",
      icon: "fa-solid fa-award",
      desc: "Nuestra misión es proveer bienes de capital, repuestos servicio de reparación y mantenimiento de la más alta calidad al mejor costo, manteniendo un alto nivel de profesionalismo y eficiencia en nuestra gestión, respaldados en un equipo humano altamente motivado, capacitado e identificado con nuestras metas.",
    },
    {
      label: "Visión",
      value: "vision",
      icon: "fa-solid fa-ranking-star",
      desc: "Buscamos convertirnos en el proveedor de bienes de capital, repuestos y servicios predilectos del mercado. Visualizamos a los clientes como nuestros socios, por lo que trabajamos con ellos de una manera ética y transparente. Seremos reconocidos por el liderazgo obtenido a través de nuestra capacidad de solucionar, integra y eficientemente las diversas necesidades de nuestros clientes.",
    },
    {
      label: "Valores",
      value: "valores",
      icon: "fa-solid fa-heart",
      desc: [
        { icon: "fa-solid fa-handshake-angle", desc: "Integridad" },
        { icon: "fa-solid fa-people-group", desc: "Trabajo en equipo" },
        { icon: "fa-solid fa-child-reaching", desc: "Compromiso" },
        { icon: "fa-solid fa-star", desc: "Excelencia" },
        { icon: "fa-solid fa-face-smile", desc: "Respeto" },
      ],
    },
  ];

  const handleScroll = () => {
    window.scrollTo({
      top:
        aboutRef.current.offsetTop -
        document.querySelector("nav").offsetHeight +
        1,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <div
        className="h-screen md:h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/nosotros.jpg')` }}
      >
        <div className="w-full h-full bg-black/80 flex flex-col justify-center items-center text-center px-7">
          <ScrollAnimation to="top">
            <Image
              src="/images/logo-icono.png"
              alt="Logo company"
              width={1000}
              height={1000}
              className="w-32 md:w-40 mb-10"
            />
          </ScrollAnimation>
          <ScrollAnimation to="bottom" delay={300}>
            <h1 className="text-4xl md:text-6xl rubik font-bold text-yellow-700">
              FUERZA & T
              <i
                className="fa-solid fa-gear fa-spin fa-sm"
                aria-hidden="true"
              ></i>
              RQUE COMPANY
            </h1>
          </ScrollAnimation>
          <button
            className="absolute flex flex-col gap-3 items-center text-gray-200 font-semibold bottom-7 animate-bounce"
            onClick={handleScroll}
          >
            Conoce más sobre nosotros
            <i className="fa-solid fa-angle-down fa-xl" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div
        ref={aboutRef}
        className="bg-gradient-to-t to-gray-900 from-blue-gray-900 px-10 md:px-24 py-7"
      >
        <div className="container min-h-screen flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex flex-col gap-7 text-center md:text-start">
            <ScrollAnimation to="left">
              <h1
                className={`text-6xl md:text-8xl text-white ${caveat.className}`}
              >
                ¿Quiénes somos?
              </h1>
            </ScrollAnimation>
            <ScrollAnimation to="left">
              <p className="md:text-lg text-yellow-50">
                Somos una empresa 100% peruana, conformada por un equipo técnico
                multidisciplinario con amplia experiencia en el servicio de e
                mantenimiento reparación y alquiler de herramientas hidráulicas,
                neumáticas y eléctricas.
              </p>
            </ScrollAnimation>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-7">
              {tools.map((tool, index) => (
                <ScrollAnimation key={index} to="left">
                  <div className="flex items-center">
                    <i
                      className="fa-solid fa-wrench fa-beat mr-4 text-yellow-700"
                      aria-hidden="true"
                    ></i>
                    <span className="text-yellow-50">{tool}</span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
          <ScrollAnimation to="bottom">
            <Image
              src="/images/img1.png"
              alt="Sobre nosotros"
              width={1000}
              height={1000}
              className="md:max-w-[36rem] ring-2 ring-blue-gray-200 rounded-xl shadow-lg md:shadow-2xl shadow-yellow-700 md:shadow-yellow-700/55 object-cover mb-4 md:mb-0"
            />
          </ScrollAnimation>
        </div>
      </div>
      <div className="p-7 md:p-16 md:py-20 bg-blue-gray-800">
        <div className="container">
          <Tabs id="custom-animation" value="mision">
            <ScrollAnimation to="top">
              <TabsHeader
                className="bg-white/30 p-1.5 h-14"
                indicatorProps={{ className: "bg-blue-gray-900" }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    className={`text-white text-lg font-semibold ${rubik.className}`}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
            </ScrollAnimation>
            <ScrollAnimation to="bottom" delay={400}>
              <TabsBody
                animate={{
                  initial: { y: 400 },
                  mount: { y: 0 },
                  unmount: { y: 400 },
                }}
              >
                {data.map(({ label, value, icon, desc }) => (
                  <TabPanel
                    key={value}
                    value={value}
                    className="flex flex-col gap-6 text-center md:flex-row md:gap-14 md:text-start text-white p-7 md:px-16 md:py-10 bg-gradient-to-tl to-indigo-800 from-teal-900 border-2 border-blue-gray-50 rounded-xl mt-5"
                  >
                    <i
                      className={`${icon} text-5xl md:text-6xl text-yellow-500`}
                      aria-hidden="true"
                    ></i>
                    <div>
                      <h1
                        className={`text-3xl md:text-5xl font-bold text-yellow-700 ${rubik.className}`}
                      >
                        {label}
                      </h1>
                      {Array.isArray(desc) ? (
                        <div className="grid md:grid-cols-5 gap-8 mt-10">
                          {desc.map((item, index) => (
                            <div
                              key={index}
                              className={`p-5 bg-blue-gray-600 hover:bg-yellow-600/55 text-xl rounded-md flex flex-col gap-4 justify-center text-center font-bold cursor-default duration-500 ${rubik.className}`}
                            >
                              <i
                                className={`${item.icon} text-3xl`}
                                aria-hidden="true"
                              ></i>
                              {item.desc}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p
                          className={`text-base mt-2 md:text-xl md:mt-5 ${rubik.className}`}
                        >
                          {desc}
                        </p>
                      )}
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </ScrollAnimation>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}
