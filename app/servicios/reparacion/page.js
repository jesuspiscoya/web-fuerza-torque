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
  const repairs = [
    {
      title: "Servicio",
      subtitle: "Reparación de llaves de torque neumáticas",
      desc: "Nuestro equipo realiza un diagnóstico completo, ajusta y calibra los mecanismos internos, y reemplaza cualquier pieza desgastada. Garantizamos un funcionamiento preciso y eficiente de tu herramienta, asegurando que mantenga su rendimiento óptimo en todo momento.",
      img: "/images/reparacion-llaves-torque.webp",
      background: "bg-blue-gray-800",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Reparación de herramientas eléctricas",
      desc: "Nuestro servicio incluye la revisión de motores, el reemplazo de piezas dañadas y la restauración de circuitos internos. Nos aseguramos de que tu herramienta vuelva a tener un rendimiento fiable y seguro, prolongando su vida útil con repuestos originales y de alta calidad.",
      img: "/images/reparacion-herramientas-electricas.webp",
      background: "bg-blue-gray-900",
      inverted: true,
    },
    {
      title: "Servicio",
      subtitle: "Reparación de llaves de impacto neumáticas",
      desc: "Ofrecemos reparación integral de llaves de impacto neumáticas, con diagnóstico de fallos, limpieza a fondo y ajuste de los mecanismos de impacto. Reemplazamos piezas internas como pistones y anillos de seguridad, asegurando que la herramienta recupere toda su potencia y funcionalidad para trabajos pesados.",
      img: "/images/reparacion-llaves-impacto.webp",
      background: "bg-gray-900",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Reparación de gata hidráulica pesadas",
      desc: "Realizamos un diagnóstico completo del sistema hidráulico, revisando y ajustando bombas, válvulas, mangueras y sellos. Nuestro equipo se asegura de que tu gata recupere su capacidad máxima de carga, operando con seguridad y fiabilidad para trabajos exigentes.",
      img: "/images/raparacion-gata-pesada.webp",
      background: "bg-blue-gray-800",
      inverted: true,
    },
    {
      title: "Servicio",
      subtitle: "Reparación de cilindros hidráulicos",
      desc: "Realizamos una evaluación detallada de sus componentes. Reemplazamos sellos, juntas y vástagos dañados, y revisamos el sistema de presión para garantizar que el cilindro funcione con la máxima eficacia.",
      img: "/images/reparacion-cilindros-hidraulicos.webp",
      background: "bg-blue-gray-900",
      inverted: false,
    },
  ];

  return (
    <>
      <NavBar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/images/bg-reparacion.webp')` }}
      >
        <div className="w-full h-full bg-black/80 flex justify-center items-center">
          <ScrollAnimation to="top">
            <h1
              className={`text-4xl md:text-6xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Reparación
            </h1>
          </ScrollAnimation>
        </div>
      </div>
      {repairs.map((item, key) => (
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
