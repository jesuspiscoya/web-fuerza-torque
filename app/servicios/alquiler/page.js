import { rubik } from "@/app/fonts";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";

export default function page() {
  const images = [
    { img: "/images/herramientas.jpg" },
    { img: "/images/industrias.jpg" },
    { img: "/images/industrias2.jpg" },
    { img: "/images/asesoria.jpg" },
  ];
  const services = [
    {
      title: "Alquiler diario",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/herramientas.jpg",
      background: "bg-blue-gray-800",
      inverted: false,
    },
    {
      title: "Alquiler semanal",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/herramientas.jpg",
      background: "bg-blue-gray-900",
      inverted: true,
    },
    {
      title: "Alquiler mensual",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/herramientas.jpg",
      background: "bg-gray-900",
      inverted: false,
    },
    {
      title: "Alquiler anual",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/herramientas.jpg",
      background: "bg-blue-gray-800",
      inverted: true,
    },
    {
      title: "Alquiler venta",
      desc: "Contamos con el servicio técnico de mantenimiento de equipos manuales, neumáticos, hidráulicos y eléctrico que va más allá de lo que se ofrece actualmente, es un servicio técnico integral que tiene como principales objetivos la orientación al cliente, con atención personaliza y profesional.",
      img: "/images/herramientas.jpg",
      background: "bg-blue-gray-900",
      inverted: false,
    },
  ];
  const sector = [
    { title: "Construcción e Industria", img: "/images/industrias.jpg" },
    { title: "Minería", img: "/images/industrias.jpg" },
    { title: "Generación Eléctrica", img: "/images/industrias.jpg" },
    { title: "Naviera", img: "/images/industrias.jpg" },
    { title: "Maquinaria", img: "/images/industrias.jpg" },
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
              Alquiler
            </h1>
          </ScrollAnimation>
        </div>
      </div>
      {services.map((item, key) => (
        <Content key={key} element={item} />
      ))}
      <div className="p-7 md:p-16 bg-gradient-to-t to-black from-blue-gray-900">
        <div className="container flex flex-col items-center gap-10 md:gap-20">
          <ScrollAnimation to={"top"}>
            <h1
              className={`text-yellow-700 text-2xl md:text-5xl text-center font-bold ${rubik.className}`}
            >
              ¿Cómo se determinan las tarifas de alquiler de llaves de torque?
            </h1>
          </ScrollAnimation>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:w-4/5">
            <ScrollAnimation to={"left"} delay={200}>
              <i
                className="fa-regular fa-handshake text-5xl md:text-8xl text-yellow-300"
                aria-hidden="true"
              ></i>
            </ScrollAnimation>
            <ScrollAnimation to={"right"} delay={400}>
              <p className="text-sm md:text-lg text-gray-300 text-center md:text-start">
                Las tarifas de alquiler varían según el tiempo de uso y el
                modelo de llave de torque seleccionado. A medida que aumenta la
                duración del alquiler, los precios se reducen proporcionalmente.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation to={"bottom"} className="text-center">
            <span
              className={`text-lg md:text-2xl font-bold text-red-700 ${rubik.className}`}
            >
              Rubros a los que realizamos alquiler
            </span>
          </ScrollAnimation>
          <div className="flex flex-wrap gap-7 justify-center w-full">
            {sector.map(({ title, img }, key) => (
              <ScrollAnimation
                key={key}
                to={"bottom"}
                delay={key * 100}
                className="relative h-60 w-full md:w-[31.71%] overflow-hidden bg-black/70 cursor-default rounded-lg shadow-lg shadow-black/80 duration-500 hover:scale-[1.01] hover:-translate-y-1.5"
              >
                <Image
                  src={img}
                  alt="Mantenimiento"
                  fill
                  className="object-cover"
                />
                <div className="absolute flex top-0 bottom-0 left-0 right-0 opacity-0 duration-500 bg-black/70 p-7 hover:opacity-100">
                  <span className="text-3xl font-semibold text-yellow-700 text-center m-auto">
                    {title}
                  </span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
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
                  alt="Mantenimiento"
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
