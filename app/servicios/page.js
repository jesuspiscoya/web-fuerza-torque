import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Slider from "@/components/Slider";
import Image from "next/image";
import { rubik } from "../fonts";

export default function Maintenance() {
  const images = [
    { img: "/images/herramientas.jpg" },
    { img: "/images/industrias.jpg" },
    { img: "/images/industrias2.jpg" },
    { img: "/images/asesoria.jpg" },
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
      <div className="p-7 md:p-16 bg-blue-gray-800">
        <div className="container flex flex-col md:flex-row gap-8 md:gap-14">
          <div className="flex flex-col text-center md:text-left gap-4 md:gap-5 w-full">
            <ScrollAnimation to="left" delay={200}>
              <span
                className={`md:text-lg font-bold text-red-700 ${rubik.className}`}
              >
                Servicio
              </span>
            </ScrollAnimation>
            <ScrollAnimation to="left" delay={400}>
              <h1
                className={`text-3xl md:text-4xl font-bold text-yellow-700 ${rubik.className}`}
              >
                Mantenimiento
              </h1>
            </ScrollAnimation>
            <ScrollAnimation to="left" delay={600}>
              <p className="text-sm text-gray-300">
                Contamos con el servicio técnico de mantenimiento de equipos
                manuales, neumáticos, hidráulicos y eléctrico que va más allá de
                lo que se ofrece actualmente, es un servicio técnico integral
                que tiene como principales objetivos la orientación al cliente,
                con atención personaliza y profesional.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            to="bottom"
            className="w-full h-72 md:h-96"
            delay={800}
          >
            <Slider pharagraph={images} height={"h-72 md:h-96"} />
          </ScrollAnimation>
        </div>
      </div>
      <div className="p-7 md:p-16 bg-blue-gray-900">
        <div className="container text-center flex flex-col gap-8 md:gap-10">
          <h1
            className={`text-4xl font-bold text-yellow-700 ${rubik.className}`}
          >
            Galería
          </h1>
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
