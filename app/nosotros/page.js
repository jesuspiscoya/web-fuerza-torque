"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { rubik } from "../fonts";
import { useRef } from "react";

export default function Page() {
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
      desc: "Ofrecer soluciones rentables y de alto rendimiento para las necesidades industriales de nuestros clientes. A través del alquiler, reparación y mantenimiento de equipos especializados, buscamos optimizar costos operativos y maximizar la productividad de nuestros clientes, proporcionándoles herramientas confiables y un servicio técnico profesional.",
    },
    {
      label: "Visión",
      value: "vision",
      icon: "fa-solid fa-ranking-star",
      desc: "Ser reconocidos como el principal proveedor de soluciones integrales para el alquiler y mantenimiento de equipos industriales en Perú y América Latina, destacándonos por nuestra capacidad de adaptarnos a las necesidades de cada cliente y por nuestra excelencia operativa.",
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
      <NavBar />
      <div
        className="h-screen md:h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/bg-nosotros.webp')` }}
      >
        <div className="w-full h-full bg-black/80 flex flex-col justify-center items-center text-center px-7">
          <ScrollAnimation to="top">
            <Image
              src="/images/logo-icono.webp"
              alt="Logo company"
              width={200}
              height={200}
              className="w-32 md:w-40 mb-10"
            />
          </ScrollAnimation>
          <ScrollAnimation to="bottom" delay={300}>
            <h1 className="text-5xl md:text-6xl rubik font-bold text-yellow-700 flex flex-wrap justify-center gap-x-3">
              FUERZA &
              <span className="block">
                T
                <i
                  className="fa-solid fa-gear fa-spin fa-sm"
                  aria-hidden="true"
                ></i>
                RQUE
              </span>
              COMPANY
            </h1>
          </ScrollAnimation>
          <button
            className="absolute flex flex-col gap-3 items-center text-gray-200 font-semibold bottom-5 animate-bounce"
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
          <div className="flex flex-col w-full gap-7 text-center md:text-start">
            <ScrollAnimation to="left">
              <h1
                className={`text-5xl md:text-[5rem] text-yellow-700 font-extrabold ${rubik.className}`}
              >
                ¿Quiénes somos?
              </h1>
            </ScrollAnimation>
            <ScrollAnimation to="left">
              <h2 className="md:text-lg text-white">
                Somos una empresa 100% peruana, conformada por un equipo técnico
                multidisciplinario con amplia experiencia en el servicio de
                mantenimiento, reparación y alquiler de herramientas hidráulicas,
                neumáticas y eléctricas.
              </h2>
            </ScrollAnimation>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-7">
              {tools.map((tool, key) => (
                <ScrollAnimation key={key} to="left">
                  <div className="flex items-center">
                    <i
                      className="fa-solid fa-wrench fa-beat mr-4 text-yellow-700"
                      aria-hidden="true"
                    ></i>
                    <h3 className="text-white">{tool}</h3>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
          <ScrollAnimation
            to="bottom"
            className="relative w-full h-72 md:h-[29rem] rounded-lg overflow-hidden shadow-xl shadow-black/60 duration-500"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/quienes-somos.webp"
                alt="Quiénes somos"
                fill
                className="object-cover"
              />
            </div>
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={200}
              height={200}
              className="absolute left-4 bottom-4 rounded-md bg-white/65 object-cover w-24 p-1.5"
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
                    className="flex flex-col gap-6 text-center md:flex-row md:gap-14 md:text-start text-white p-7 md:px-16 md:py-10 bg-gradient-to-tl to-blue-gray-600 from-blue-gray-900 rounded-xl mt-5"
                  >
                    <i
                      className={`${icon} text-5xl md:text-6xl text-yellow-700`}
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
                          {desc.map(({ icon, desc }, key) => (
                            <h1
                              key={key}
                              className={`p-5 bg-blue-gray-600 shadow-lg hover:bg-black/50 hover:shadow-black/70 hover:-translate-y-1.5 hover:text- text-xl rounded-md flex flex-col gap-4 justify-center text-center font-bold cursor-default duration-500 ${rubik.className}`}
                            >
                              <i
                                className={`${icon} text-3xl`}
                                aria-hidden="true"
                              ></i>
                              {desc}
                            </h1>
                          ))}
                        </div>
                      ) : (
                        <h2
                          className={`text-base mt-2 md:text-xl md:mt-5 ${rubik.className}`}
                        >
                          {desc}
                        </h2>
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
