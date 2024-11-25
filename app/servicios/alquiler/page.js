import { rubik } from "@/app/fonts";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";

export default function page() {
  const images = [
    { img: "/images/herramientas.webp" },
    { img: "/images/bg-reparacion.webp" },
    { img: "/images/slider-herramientas.webp" },
    { img: "/images/slider-asesoria.webp" },
  ];
  const services = [
    {
      title: "Soluciones",
      subtitle: "Obras eventuales",
      desc: "Si necesitas equipos solo para proyectos puntuales, el alquiler es la opción ideal.",
      img: "/images/alquiler-obras-eventuales.webp",
      background: "bg-blue-gray-900",
      inverted: false,
    },
    {
      title: "Soluciones",
      subtitle: "Herramientas de respaldo temporales",
      desc: "Disponemos de equipos para cubrir cualquier contingencia, manteniendo la continuidad de tu trabajo sin interrupciones.",
      img: "/images/alquiler-herramientas-temporales.webp",
      background: "bg-blue-gray-800",
      inverted: true,
    },
    {
      title: "Soluciones",
      subtitle: "Aumento de capacidad productiva a corto plazo",
      desc: "Si enfrentas picos de demanda, tenemos las herramientas que necesitas para expandir tu capacidad de manera inmediata.",
      img: "/images/alquiler-aumento-capacidad.webp",
      background: "bg-gray-900",
      inverted: false,
    },
    {
      title: "Soluciones",
      subtitle: "Falta de presupuesto para compra de material",
      desc: "Si no cuentas con el presupuesto necesario para adquirir nuevos equipos, el alquiler te permite acceder a maquinaria de calidad sin incurrir en grandes gastos.",
      img: "/images/alquiler-falta-presupuesto.webp",
      background: "bg-blue-gray-800",
      inverted: true,
    },
    {
      title: "Soluciones",
      subtitle: "Disponibilidad inmediata de herramientas",
      desc: "Gracias a nuestra amplia disponibilidad, puedes contar con los equipos que necesitas de forma rápida y sin demoras.",
      img: "/images/alquiler-disponibilidad-inmediata.webp",
      background: "bg-blue-gray-900",
      inverted: false,
    },
  ];
  const sector = [
    { title: "Construcción e Industria", img: "/images/construccion.webp" },
    { title: "Minería", img: "/images/mineria.webp" },
    { title: "Generación Eléctrica", img: "/images/eolica.webp" },
    { title: "Naviera", img: "/images/naviero.webp" },
    { title: "Maquinaria", img: "/images/maquinaria.webp" },
  ];
  const rent = [
    { bgColor: "bg-yellow-600", color: "text-black", title: "Alquiler diario" },
    { bgColor: "bg-gray-800", color: "text-white", title: "Alquiler semanal" },
    { bgColor: "bg-white", color: "text-black", title: "Alquiler mensual" },
    {
      bgColor: "bg-blue-gray-900",
      color: "text-white",
      title: "Alquiler anual",
    },
    { bgColor: "bg-yellow-700", color: "text-white", title: "Alquiler venta" },
  ];

  return (
    <>
      <NavBar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/bg-alquiler.webp')` }}
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
      <div className="p-7 md:p-16 bg-blue-gray-700">
        <div className="container flex flex-col gap-10">
          <ScrollAnimation to="left">
            <h1
              className={`text-center text-3xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Modalidades de alquiler
            </h1>
          </ScrollAnimation>
          <div className="flex flex-wrap justify-center">
            {rent.map(({ bgColor, color, title }, key) => (
              <ScrollAnimation
                key={key}
                to="bottom"
                delay={key * 100}
                className="w-80 md:w-[22rem] cursor-pointer"
              >
                <div
                  className={`${bgColor} ${color} h-full content-center text-center text-3xl font-extrabold px-10 py-20 ${rubik.className}`}
                >
                  {title}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      {services.map((item, key) => (
        <Content key={key} element={item} />
      ))}
      <div className="p-7 md:p-16 bg-gradient-to-t to-black from-blue-gray-900">
        <div className="container flex flex-col items-center gap-10 md:gap-20">
          <ScrollAnimation to="top">
            <h1
              className={`text-yellow-700 text-2xl md:text-5xl text-center font-bold ${rubik.className}`}
            >
              ¿Cómo se determinan las tarifas de alquiler de llaves de torque?
            </h1>
          </ScrollAnimation>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:w-4/5">
            <ScrollAnimation to="left" delay={200}>
              <i
                className="fa-regular fa-handshake text-5xl md:text-8xl text-yellow-300"
                aria-hidden="true"
              ></i>
            </ScrollAnimation>
            <ScrollAnimation to="right" delay={400}>
              <p className="text-sm md:text-lg text-gray-300 text-center md:text-start">
                Las tarifas de alquiler varían según el tiempo de uso y el
                modelo de llave de torque seleccionado. A medida que aumenta la
                duración del alquiler, los precios se reducen proporcionalmente.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation to="bottom" className="text-center">
            <span
              className={`text-lg md:text-2xl font-bold text-white ${rubik.className}`}
            >
              Rubros a los que realizamos alquiler
            </span>
          </ScrollAnimation>
          <div className="flex flex-wrap gap-7 justify-center w-full">
            {sector.map(({ title, img }, key) => (
              <ScrollAnimation
                key={key}
                to="bottom"
                delay={key * 100}
                className="relative h-60 w-full md:w-[31.71%] overflow-hidden bg-black/70 cursor-default rounded-lg shadow-lg shadow-black/80 duration-500 hover:scale-[1.01] hover:-translate-y-1.5"
              >
                <Image src={img} alt={title} fill className="object-cover" />
                <div className="absolute flex top-0 bottom-0 left-0 right-0 opacity-0 duration-500 bg-black/70 p-5 md:p-10 hover:opacity-100">
                  <span className="text-2xl md:text-3xl font-bold text-yellow-700 text-center m-auto">
                    {title}
                  </span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="p-7 md:p-16 bg-blue-gray-900">
        <div className="container text-center flex flex-col gap-8 md:gap-10">
          <ScrollAnimation to="left">
            <h1
              className={`text-3xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Galería
            </h1>
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
      </div> */}
      <Footer />
    </>
  );
}
