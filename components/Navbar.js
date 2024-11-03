"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const items = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Servicios",
      link: "/servicios",
    },
    {
      name: "Herramientas",
      link: "/herramientas",
    },
    {
      name: "Nosotros",
      link: "/nosotros",
    },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = (e) => {
    // Cierra el menú si se hace clic fuera de él
    if (
      !menuRef.current.contains(e.target) &&
      !btnRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agrega un listener para el scroll
    window.addEventListener("scroll", handleScroll);
    // Agrega un listener para cerrar el menú al hacer clic fuera
    document.addEventListener("mousedown", closeMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isScrolled]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 text-lg text-white px-7 md:px-16 py-4 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-blue-gray-700" : "bg-transparent"
      }`}
    >
      {/* Navbar responsive mobile */}
      <div className="flex md:hidden justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo Company"
            width={1000}
            height={1000}
            className="w-24"
          />
        </Link>
        <button
          ref={btnRef}
          className="flex md:hidden text-white"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars fa-xl" aria-hidden="true"></i>
        </button>
        <div
          ref={menuRef}
          className={`flex flex-col absolute top-[3.9rem] left-0 right-0 bg-blue-gray-800 text-base transition-all duration-200 ease-in-out ${
            isOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-100 overflow-hidden"
          }`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="font-medium hover:text-red-500 hover:bg-blue-gray-700 transition duration-200 px-8 py-3"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="font-medium hover:text-red-500 hover:bg-blue-gray-700 transition duration-200 px-8 py-3"
          >
            Contacto
          </Link>
        </div>
      </div>
      {/* Navbar desktop */}
      <div className="container hidden md:flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo Company"
            className="w-28"
            width={1000}
            height={1000}
          />
        </Link>
        <ul className="flex gap-10">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="font-semibold hover:text-red-500 transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contacto"
          style={{ boxShadow: "0 3px 0 0 white" }}
          className="btn-contact bg-yellow-700 border-2 hover:bg-yellow-800 border-black rounded-full px-6 py-2 text-black font-medium transition duration-500 hover:text-white"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
