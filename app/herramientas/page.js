import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Slider from "@/components/Slider";
import Image from "next/image";
import { rubik } from "../fonts";

export default function Tools() {
  const images = [
    { img: "/images/herramientas.jpg" },
    { img: "/images/industrias.jpg" },
    { img: "/images/industrias2.jpg" },
    { img: "/images/asesoria.jpg" },
  ];

  return (
    <>
      <Navbar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: `url('/images/herramientas.webp')` }}
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
      <div className="p-7 md:p-16 bg-blue-gray-800">
        <div className="container flex flex-col md:flex-row gap-8 md:gap-14">
          <div className="flex flex-col text-center md:text-left gap-4 md:gap-5 w-full">
            <ScrollAnimation to="left" delay={200}>
              <span
                className={`md:text-lg font-bold text-red-700 ${rubik.className}`}
              >
                Producto
              </span>
            </ScrollAnimation>
            <ScrollAnimation to="left" delay={400}>
              <h1
                className={`text-3xl md:text-4xl font-bold text-yellow-700 ${rubik.className}`}
              >
                Herramientas Neumáticas
              </h1>
            </ScrollAnimation>
            <ScrollAnimation to="left" delay={600}>
              <p className="text-sm md:text-md text-gray-300">
                Ofrecemos una amplia gama de herramientas neumáticas de alta
                calidad, ideales para profesionales y aficionados del bricolaje
                que buscan eficiencia y precisión en sus trabajos. Nuestras
                herramientas están diseñadas para facilitar una variedad de
                aplicaciones, desde la construcción hasta la automoción.
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
            {[...images, ...images].map((item, index) => (
              <ScrollAnimation
                key={index}
                to="bottom"
                className="relative"
                delay={index * 100}
              >
                <Image
                  src={item.img}
                  alt="Herramientas"
                  width={1000}
                  height={1000}
                  className="h-48 w-full md:h-80 object-cover"
                />
                <div className="absolute hover:bg-black/50 duration-[600ms] top-0 bottom-0 left-0 right-0 cursor-pointer"></div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
