import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Slider from "@/components/Slider";
import Image from "next/image";
import { caveat, caveat_brush, rubik } from "./fonts";
import Link from "next/link";

export default function Home() {
  const slider = [
    {
      img: "/images/herramientas.jpg",
      title: "Alquiler de Herramientas Hidráulicas y Neumáticas",
      description:
        "Ahorra en costos y espacio con una amplia gama de herramientas neumáticas en alquiler para todo tipo de proyectos, ideal para profesionales y aficionados",
    },
    {
      img: "/images/industrias.jpg",
      title: "Mantenimiento Especializado",
      description:
        "Nuestros expertos realizan un mantenimiento preventivo y correctivo para asegurar el máximo rendimiento y durabilidad de tus herramientas",
    },
    {
      img: "/images/industrias2.jpg",
      title: "Reparación Rápida y Eficiente",
      description:
        "Ofrecemos servicios de reparación rápida y efectiva, con piezas de alta calidad y un servicio al cliente excepcional",
    },
    {
      img: "/images/asesoria.jpg",
      title: "Asesoría Personalizada",
      description:
        "¿No sabes qué herramienta necesitas? Nuestro equipo te ofrece asesoría personalizada para encontrar la solución perfecta según tus requerimientos y presupuesto",
    },
  ];
  const services = [
    {
      title: "Mantenimiento",
      description:
        "Realizamos mantenimientos profesionales de tipo preventivo, correctivo y predictivo",
      image: "/images/mantenimiento2.jpg",
      url: "/servicios",
    },
    {
      title: "Reparación",
      description: "Reparamos todo tipo de equipos y herramientas mayores.",
      image: "/images/industrias2.jpg",
      url: "/servicios",
    },
    {
      title: "Alquiler",
      description:
        "Alquilamos herramientas y equipos de alta calidad de marcas reconocidas.",
      image: "/images/herramientas.webp",
      url: "/servicios",
    },
  ];
  const year = new Date().getFullYear();

  return (
    <>
      <Slider pharagraph={slider} height={"h-screen"} />
      <Navbar />
      <div className="bg-gradient-to-t to-gray-900 from-blue-gray-900 text-center p-7 md:p-16">
        <ScrollAnimation to="top">
          <span
            className={`text-yellow-700
           font-semibold ${rubik.className}`}
          >
            Más de {year - 2020} años de experiencia
          </span>
        </ScrollAnimation>
        <ScrollAnimation to="left" delay={300}>
          <h1
            className={`text-3xl md:text-4xl text-white font-bold mt-4 mb-10 md:mb-14 ${rubik.className}`}
          >
            Nuestros Servicios
          </h1>
        </ScrollAnimation>
        <div className="flex flex-col justify-center md:flex-row gap-10">
          {services.map((service, index) => (
            <ScrollAnimation
              to="bottom"
              key={index}
              className="flex flex-col gap-5 md:gap-10 text-center items-center"
              delay={index * 100 + 300}
            >
              <div className="relative overflow-hidden hover:scale-[1.02] hover:-translate-y-2 duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-80"
                />
                <div className="absolute opacity-0 pt-52 hover:pt-10 hover:opacity-100 flex flex-col gap-5 bg-black/80 top-0 bottom-0 justify-center items-center text-center duration-500 p-10 text-sm">
                  <h1 className="text-red-700 font-semibold text-xl">
                    {service.title}
                  </h1>
                  <p className="text-gray-400">{service.description}</p>
                  <Link
                    href={service.url}
                    className="text-white hover:text-yellow-700 font-semibold duration-500 px-3 py-1 rounded-lg"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      <div className="relative flex min-h-screen md:overflow-hidden">
        <div className="parallax-bg" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75">
          <div className="container flex flex-col py-7 md:flex-row md:gap-10 text-center items-center h-full">
            <ScrollAnimation to="left" className="w-full md:text-start">
              <h1
                className={`text-5xl md:text-8xl text-yellow-700 md:text-white px-20 ${caveat.className}`}
              >
                ¿Qué hacemos?
              </h1>
            </ScrollAnimation>
            <ScrollAnimation
              to="bottom"
              className="w-full text-center p-8 md:px-14 flex flex-col justify-center md:bg-black/80 rounded-3xl md:ring-1 md:shadow-2xl md:shadow-black"
            >
              <h1 className="hidden md:block text-xl md:text-2xl font-bold text-yellow-700">
                SOLUCIONES
              </h1>
              <div className="hidden md:block h-0.5 bg-red-600 w-28 mx-auto mt-1 mb-5"></div>
              <p className="text-gray-300 text-sm">
                <strong>FUERZA Y TOQUE COMPANY</strong> se destaca como un líder
                en el mercado, brindando herramientas y servicios especializados
                de gran calidad.
              </p>
              <div className="flex flex-col md:flex-row mt-9 gap-7 md:gap-10">
                <div className="rounded-2xl shadow-lg shadow-blue-gray-700 bg-blue-gray-900 border-2 border-yellow-300 w-full p-6 md:py-10 md:px-6 hover:scale-105 duration-500 hover:shadow-md">
                  <i
                    className="fa-solid fa-medal fa-2xl text-white"
                    aria-hidden="true"
                  ></i>
                  <h2
                    className={`text-yellow-700 text-2xl my-4 font-semibold ${caveat.className}`}
                  >
                    Alta Calidad
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Nuestros servicios se distinguen por su excelencia y alta
                    calidad, con el compromiso de garantizar trabajos seguros y
                    precisos
                  </p>
                </div>
                <div className="rounded-2xl shadow-lg shadow-blue-gray-700 bg-blue-gray-900 border-2 border-yellow-300 w-full p-6 md:py-10 md:px-6 hover:scale-105 duration-500 hover:shadow-md">
                  <i
                    className="fa-solid fa-helmet-safety fa-2xl text-red-700"
                    aria-hidden="true"
                  ></i>
                  <h2
                    className={`text-yellow-700 text-2xl my-4 font-semibold ${caveat.className}`}
                  >
                    Confianza y Servicio
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Nuestro equipo especializado está capacitado para
                    proporcionar un servicio personalizado a nuestros clientes
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="relative bg-blue-gray-900 overflow-hidden py-14 md:py-28">
        <div className="parallax-bg-2 top-14 bottom-14 md:top-28 md:bottom-28" />
        <div className="relative h-full bg-black/80 text-yellow-50 w-full py-20 md:py-24">
          <div className="container flex flex-col gap-7">
            <ScrollAnimation to="right">
              <div className="flex flex-col items-center text-center md:items-start">
                <h1 className="text-xl md:text-2xl font-bold text-yellow-700">
                  NUESTRAS MARCAS
                </h1>
                <div className="h-0.5 bg-red-600 w-40 md:w-52 mt-1 mb-5"></div>
              </div>
            </ScrollAnimation>
            <Carousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
