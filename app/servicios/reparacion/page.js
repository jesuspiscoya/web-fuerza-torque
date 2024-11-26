import { rubik } from "@/app/fonts";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";

export default function page() {
  const repairs = [
    {
      title: "Servicio",
      subtitle: "Reparación de llaves de torque neumáticas",
      desc: "Nuestros técnicos expertos realizan un diagnóstico detallado, reparando componentes como válvulas, reguladores y mecanismos internos para asegurar un funcionamiento preciso y seguro. Nos encargamos de restaurar la potencia y fiabilidad de tus herramientas, minimizando tiempos de inactividad y garantizando un rendimiento óptimo.",
      img: "/images/reparacion-llaves-torque.webp",
      background: "bg-blue-gray-800",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Reparación de herramientas eléctricas",
      desc: "Realizamos una inspección exhaustiva de los componentes internos, como motores, interruptores y cables, y nos encargamos de la reparación o reemplazo de partes dañadas.",
      img: "/images/reparacion-herramientas-electricas.webp",
      background: "bg-blue-gray-900",
      inverted: true,
    },
    {
      title: "Servicio",
      subtitle: "Reparación de llaves de impacto neumáticas",
      desc: "Realizamos reparaciones completas de estos equipos, desde la revisión de sus mecanismos internos hasta la sustitución de piezas desgastadas como rotores y martillos. Aseguramos que tus llaves de impacto recuperen su capacidad de trabajo.",
      img: "/images/reparacion-llaves-impacto.webp",
      background: "bg-gray-900",
      inverted: false,
    },
    {
      title: "Servicio",
      subtitle: "Reparación de gata hidráulica pesadas",
      desc: "Reparamos gatas hidráulicas pesadas, una herramienta esencial para el levantamiento de cargas pesadas. Nuestro servicio incluye la inspección de componentes clave, como bombas, válvulas y sellos, y la reparación de cualquier daño o desgaste.",
      img: "/images/raparacion-gata-pesada.webp",
      background: "bg-blue-gray-800",
      inverted: true,
    },
    {
      title: "Servicio",
      subtitle: "Reparación de cilindros hidráulicos",
      desc: "Nos especializamos en la reparación de cilindros hidráulicos, componentes críticos para sistemas de alta presión. Diagnóstico, desmontaje, limpieza y reemplazo de piezas dañadas son parte de nuestro servicio integral. Tras la reparación, realizamos pruebas de presión y funcionamiento para garantizar que tus cilindros hidráulicos operen de forma eficiente y segura.",
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
      <Footer />
    </>
  );
}
