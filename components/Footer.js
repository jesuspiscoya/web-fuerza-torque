import Image from "next/image";

export default function Footer() {
  const products = [
    { name: "Herramientas hidráulicas", url: "/herramientas" },
    { name: "Herramientas neumáticas", url: "/herramientas" },
    { name: "Herramientas eléctricas", url: "/herramientas" },
  ];
  const services = [
    { name: "Mantenimiento", url: "/servicios" },
    { name: "Reparación", url: "/servicios" },
    { name: "Alquiler", url: "/servicios" },
  ];
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#051029f6] text-white text-center flex flex-col gap-8 md:gap-20 px-8 py-7 md:pb-7 md:pt-9 md:px-16">
      <div className="container flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-7 md:gap-0">
          <Image
            src="/images/logo-white.png"
            alt="Logo de la empresa"
            width={1000}
            height={1000}
            className="h-16 w-auto md:h-20 my-auto object-cover"
          />
          <div className="flex gap-7">
            <a
              href="#"
              target="_blank"
              className="font-medium transition-colors duration-500 hover:text-blue-400"
            >
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="font-medium transition-colors duration-500 hover:text-red-500"
            >
              <i className="fa-brands fa-youtube fa-2xl"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=51948911431&text=Hola!%F0%9F%91%8B%20Necesito%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios."
              target="_blank"
              className="font-medium transition-colors duration-500 hover:text-[#3ae44b]"
            >
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end gap-6 max-w-56">
          <h1 className="text-lg font-semibold text-red-700 cursor-default">
            Productos
          </h1>
          {products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              className="text-sm transition-colors duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
            >
              {product.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex flex-col items-end gap-6 max-w-56">
          <h1 className="text-lg font-semibold text-red-700 cursor-default">
            Servicios
          </h1>
          {services.map((service, index) => (
            <a
              key={index}
              href={service.url}
              className="text-sm transition-colors duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
            >
              {service.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col md:items-end gap-6 md:max-w-56 cursor-default">
          <h1 className="text-lg font-semibold text-red-700">Contáctanos</h1>
          <div className="md:text-end">
            <i className="fa-solid fa-phone me-2"></i>
            <span className="text-[0.85rem] md:text-sm">+51 948 911 431</span>
          </div>
          <div className="md:text-end">
            <i className="fa-solid fa-map-marker-alt me-2"></i>
            <span className="text-[0.85rem] md:text-sm">
              Lt 14. residencial Las Orquideas etapa 1, Callao - Perú
            </span>
          </div>
          <div className="md:text-end">
            <i className="fa-solid fa-clock me-2"></i>
            <span className="text-[0.85rem] md:text-sm">
              L-V de 08:00 am a 06:00 pm
              <br />
              Sáb. de 09:00 am a 12:00 pm
            </span>
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row gap-7 justify-between cursor-default">
        <div className="flex flex-col md:text-start">
          <span className="text-xs">
            <strong>FUERZA & TORQUE COMPANY E.I.R.L. RUC 20606757311</strong>
          </span>
          <span className="text-xs">
            © Copyright {year} | Todos los derechos reservados
          </span>
        </div>
        <span className="text-xs">
          Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/jesuspiscoya/"
            target="_blank"
            className="text-red-700 hover:text-yellow-700 transition-colors duration-500"
          >
            <strong>Jesus Piscoya</strong>
          </a>
        </span>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=51948911431&text=Hola!%F0%9F%91%8B%20Necesito%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios."
        target="_blank"
        className="fixed bottom-5 right-5 md:bottom-10 md:right-11 bg-gradient-to-t from-green-800 to-green-500 p-1 rounded-lg shadow-lg shadow-black/60 transition-all duration-500"
      >
        <div className="relative h-9 w-9">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            }
            alt="WhatsApp"
            fill
          />
        </div>
      </a>
    </footer>
  );
}
