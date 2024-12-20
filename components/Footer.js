import Image from "next/image";

export default function Footer() {
  const socialNetworks = [
    {
      icon: "fa-facebook",
      color: "text-blue-400",
      url: "https://www.facebook.com/p/Fuerza-Torque-Company-100087431933831/",
    },
    {
      icon: "fa-whatsapp",
      color: "text-[#3ae44b]",
      url: "https://api.whatsapp.com/send?phone=51948911431&text=Hola!%F0%9F%91%8B%20Necesito%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios.",
    },
  ];
  const products = [
    { name: "Herramientas de Torque", url: "/herramientas" },
    { name: "Bombas Hidráulicas", url: "/herramientas" },
    { name: "Llaves de Impacto", url: "/herramientas" },
    { name: "Otras Herramientas", url: "/herramientas" },
  ];
  const services = [
    { name: "Alquiler", url: "/servicios/alquiler" },
    { name: "Reparación", url: "/servicios/reparacion" },
    { name: "Mantenimiento", url: "/servicios/mantenimiento" },
  ];
  const contact = [
    { name: "+51 948 911 431", icon: "fa-phone" },
    {
      name: "Calle Las Magnolias, Mz D lt 15, Urb. Las Orquídeas",
      icon: "fa-map-marker-alt",
    },
    {
      name: "L-V de 08:00 am a 06:00 pm\nSáb. de 09:00 am a 12:00 pm",
      icon: "fa-clock",
    },
  ];
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#051029f6] text-white text-center flex flex-col gap-8 md:gap-20 px-8 py-7 md:pb-7 md:pt-9 md:px-16">
      <div className="container flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col justify-center items-center gap-7 md:gap-14">
          <Image
            src="/images/logo-white.webp"
            alt="Logo de la empresa"
            width={500}
            height={500}
            className="h-16 w-auto md:h-20"
          />
          <div className="flex gap-7">
            {socialNetworks.map(({ icon, color, url }, key) => (
              <a
                key={key}
                href={url}
                target="_blank"
                className={`font-medium duration-500 hover:${color}`}
              >
                <i
                  className={`fa-brands ${icon} fa-2xl`}
                  aria-hidden="true"
                ></i>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-20">
          <div className="hidden md:flex flex-col items-end gap-6">
            <h1 className="text-lg font-semibold text-yellow-700 cursor-default">
              Servicios
            </h1>
            {services.map(({ name, url }, key) => (
              <a
                key={key}
                href={url}
                className="text-sm duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
              >
                {name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex flex-col text-end gap-6">
            <h1 className="text-lg font-semibold text-yellow-700 cursor-default">
              Productos
            </h1>
            {products.map(({ name, url }, key) => (
              <a
                key={key}
                href={url}
                className="text-sm duration-500 pb-1 hover:text-yellow-600 ring-bottom"
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:items-end gap-6 md:max-w-60 cursor-default">
            <h1 className="text-lg font-semibold text-yellow-700">Contáctanos</h1>
            {contact.map(({ name, icon }, key) => (
              <div key={key} className="md:text-end">
                <i className={`fa-solid ${icon} me-2`} aria-hidden="true"></i>
                <span className="text-[0.85rem] md:text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row gap-7 justify-between cursor-default">
        <div className="flex flex-col md:text-start gap-2 md:gap-0">
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
            className="text-yellow-700 hover:text-yellow-700 duration-500"
          >
            <strong>Jesus Piscoya</strong>
          </a>
        </span>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=51948911431&text=Hola!%F0%9F%91%8B%20Necesito%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios."
        target="_blank"
        className="fixed bottom-5 right-5 md:bottom-8 md:right-9 bg-gradient-to-t from-green-800 to-green-500 p-1 rounded-lg shadow-lg shadow-black/70"
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
