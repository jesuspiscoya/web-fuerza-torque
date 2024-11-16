"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Form from "@/components/Form";
import Image from "next/image";
import { rubik } from "../fonts";

export default function page() {
  const contact = [
    {
      icon: "fas fa-phone-alt",
      text: "+51 948 911 431",
    },
    {
      icon: "fas fa-envelope",
      text: "servicios@fuerzaytorque.com.pe",
    },
    {
      icon: "fas fa-map-marker-alt",
      text: "Lt 14. Residencial Las Orquideas Etapa 1, Ventanilla Callao - Perú",
    },
  ];

  return (
    <>
      <NavBar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/images/bg-contacto.webp')` }}
      >
        <div className="w-full h-full bg-black/80 flex justify-center items-center">
          <ScrollAnimation to="top">
            <h1
              className={`text-4xl md:text-6xl font-bold text-yellow-700 ${rubik.className}`}
            >
              Contacto
            </h1>
          </ScrollAnimation>
        </div>
      </div>
      <div className="bg-gradient-to-t to-black from-blue-gray-900">
        <div className="container flex flex-col md:flex-row gap-8 md:gap-24 p-7 md:p-16">
          <div className="relative w-full rounded-xl overflow-hidden shadow-xl shadow-black/80 hover:-translate-y-1.5 duration-500">
            <div className="relative w-full h-full">
              <Image
                src="/images/img-contactanos.webp"
                alt="Contacto"
                fill
                className="object-cover"
              />
            </div>
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={200}
              height={200}
              className="absolute bottom-4 right-4 rounded-md bg-white/65 object-cover w-24 p-1.5"
            />
          </div>
          <div className="flex flex-col gap-8 w-full text-center md:text-start">
            <div className="flex flex-col gap-2">
              <span className={`font-bold text-red-700 ${rubik.className}`}>
                Contáctenos
              </span>
              <h1
                className={`text-3xl md:text-4xl font-bold text-yellow-700 ${rubik.className}`}
              >
                Envíe su consulta
              </h1>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <div className="bg-black/85">
        <div className="container flex flex-col gap-8 p-7 md:p-16">
          <span className={`font-bold text-red-700 text-xl ${rubik.className}`}>
            Información de contacto
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {contact.map(({ icon, text }, key) => (
              <div
                key={key}
                className="flex flex-col justify-center text-center rounded-md gap-3 bg-gray-300 px-6 py-10 hover:scale-[1.01] hover:-translate-y-2 shadow-lg shadow-black hover:shadow-yellow-500/60 duration-500 cursor-default"
              >
                <div>
                  <i
                    className={`${icon} text-yellow-800 fa-xl`}
                    aria-hidden="true"
                  ></i>
                  <hr className="mt-3 mx-auto border-red-500 w-20" />
                </div>
                <span
                  className={`break-words font-medium text-blue-gray-800 ${rubik.className}`}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
          <h1
            className={`text-3xl md:text-4xl font-bold text-yellow-700 ${rubik.className}`}
          >
            ¿Dónde nos encontramos?
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3902.8562707960896!2d-77.10943982493984!3d-11.984445588247505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU5JzA0LjAiUyA3N8KwMDYnMjQuNyJX!5e0!3m2!1ses!2spe!4v1731728267031!5m2!1ses!2spe"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-xl shadow-black"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
