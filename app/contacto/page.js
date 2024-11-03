"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { rubik } from "../fonts";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es requerido.";
    if (!formData.lastname)
      newErrors.lastname = "Los apellidos son requeridos.";
    if (!formData.email) {
      newErrors.email = "El correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (!formData.phone) newErrors.phone = "El teléfono es requerido.";
    if (!formData.company) newErrors.company = "La empresa es requerida.";
    if (!formData.subject) newErrors.subject = "El asunto es requerido.";
    if (!formData.message) newErrors.message = "El mensaje es requerido.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else if (!captchaValue) {
      alert("Por favor, completa el reCAPTCHA");
    } else {
      // Aquí colocar el captchaValue de la API para la verificación.
      // Ejemplo: await fetch('/api/submit', { method: 'POST', body: JSON.stringify({ captchaValue }) });

      setErrors({});
      console.log("Formulario enviado", formData);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="h-80 md:h-[25rem] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/images/contacto.webp')` }}
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
          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={"/images/contactanos.jpg"}
              alt="Contacto"
              width={1000}
              height={1000}
              className="object-cover h-full"
            />
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={500}
              height={500}
              className="absolute bottom-4 right-4 rounded-md bg-white/65 object-cover w-24 p-2"
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <Input
                    maxLength={100}
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={Boolean(errors.name)}
                    placeholder="Ingrese su nombre"
                    className="rounded-none focus:!border-t-0 py-3.5 text-white"
                    color="light-blue"
                    containerProps={{ className: "h-auto" }}
                    labelProps={{
                      className:
                        "!leading-[4.1] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px] after:-translate-x-[0.1px]",
                    }}
                  />
                  {errors.name && (
                    <div className="flex gap-2 text-sm text-red-500 mt-3">
                      <i
                        className="fa-solid fa-circle-exclamation"
                        aria-hidden="true"
                      ></i>
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    maxLength={100}
                    label="Apellidos"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    error={Boolean(errors.lastname)}
                    placeholder="Ingrese sus apellidos"
                    className="rounded-none focus:!border-t-0 py-3.5 text-white"
                    color="light-blue"
                    labelProps={{
                      className:
                        "!leading-[4.1] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
                    }}
                    containerProps={{ className: "h-auto" }}
                  />
                  {errors.lastname && (
                    <div className="flex gap-2 text-sm text-red-500 mt-3">
                      <i
                        className="fa-solid fa-circle-exclamation"
                        aria-hidden="true"
                      ></i>
                      {errors.lastname}
                    </div>
                  )}
                </div>
              </div>
              <Input
                maxLength={100}
                label="Correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                placeholder="Ingrese su correo electrónico"
                className="rounded-none focus:!border-t-0 py-3.5 text-white"
                color="light-blue"
                labelProps={{
                  className:
                    "!leading-[4.1] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
                }}
                containerProps={{ className: "h-auto" }}
                icon={
                  <i
                    className="fas fa-envelope text-blue-gray-100"
                    aria-hidden="true"
                  ></i>
                }
              />
              {errors.email && (
                <div className="flex gap-2 text-sm text-red-500 -mt-2">
                  <i
                    className="fa-solid fa-circle-exclamation"
                    aria-hidden="true"
                  ></i>
                  {errors.email}
                </div>
              )}
              <Input
                maxLength={100}
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={Boolean(errors.phone)}
                placeholder="Ingrese su teléfono"
                className="rounded-none focus:!border-t-0 py-3.5 text-white"
                color="light-blue"
                labelProps={{
                  className:
                    "!leading-[4.1] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
                }}
                containerProps={{ className: "h-auto" }}
                icon={
                  <i
                    className="fas fa-phone-alt text-blue-gray-100"
                    aria-hidden="true"
                  ></i>
                }
              />
              {errors.phone && (
                <div className="flex gap-2 text-sm text-red-500 -mt-2">
                  <i
                    className="fa-solid fa-circle-exclamation"
                    aria-hidden="true"
                  ></i>
                  {errors.phone}
                </div>
              )}
              <Input
                maxLength={12}
                label="Empresa"
                name="company"
                value={formData.company}
                onChange={handleChange}
                error={Boolean(errors.company)}
                placeholder="Ingrese su empresa"
                className="rounded-none focus:!border-t-0 py-3.5 text-white"
                color="light-blue"
                labelProps={{
                  className:
                    "!leading-[4.1] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.2px] after:!rounded-none after:-translate-y-[0.2px]",
                }}
                containerProps={{ className: "h-auto" }}
                icon={
                  <i
                    className="fa-solid fa-building text-blue-gray-100"
                    aria-hidden="true"
                  ></i>
                }
              />
              {errors.company && (
                <div className="flex gap-2 text-sm text-red-500 -mt-2">
                  <i
                    className="fa-solid fa-circle-exclamation"
                    aria-hidden="true"
                  ></i>
                  {errors.company}
                </div>
              )}
              <Input
                maxLength={100}
                label="Asunto"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={Boolean(errors.subject)}
                placeholder="Ingrese asunto"
                className="rounded-none focus:!border-t-0 py-3.5 text-white"
                color="light-blue"
                labelProps={{
                  className:
                    "!leading-[4.1] peer-focus:!leading-none before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
                }}
                containerProps={{ className: "h-auto" }}
                icon={
                  <i
                    className="fa-solid fa-marker text-blue-gray-100"
                    aria-hidden="true"
                  ></i>
                }
              />
              {errors.subject && (
                <div className="flex gap-2 text-sm text-red-500 -mt-2">
                  <i
                    className="fa-solid fa-circle-exclamation"
                    aria-hidden="true"
                  ></i>
                  {errors.subject}
                </div>
              )}
              <Textarea
                label="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={Boolean(errors.message)}
                className="rounded-none focus:!border-t-0 text-white"
                color="light-blue"
                labelProps={{
                  className:
                    "before:!rounded-none before:-translate-y-[0.4px] after:!rounded-none after:-translate-y-[0.4px]",
                }}
              />
              {errors.message && (
                <div className="flex gap-2 text-sm text-red-500 -mt-2">
                  <i
                    className="fa-solid fa-circle-exclamation"
                    aria-hidden="true"
                  ></i>
                  {errors.message}
                </div>
              )}
              {/* <ReCAPTCHA
                sitekey="TU_CLAVE_DE_SITIO"
                onChange={(value) => setCaptchaValue(value)}
              /> */}
              <Button
                variant="gradient"
                className={`flex items-center justify-center text-base gap-3 w-44 mx-auto md:mx-0 duration-500 ${rubik.className} `}
                color="light-blue"
                type="submit"
              >
                Enviar
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black/90">
        <div className="container flex flex-col gap-8 p-7 md:p-16">
          <span className={`font-bold text-red-700 text-xl ${rubik.className}`}>
            Información de contacto
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {contact.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center text-center rounded-md gap-3 bg-gray-300 px-6 py-10 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-yellow-500/60 shadow-lg duration-500"
              >
                <div>
                  <i
                    className={`${item.icon} text-yellow-800 fa-xl`}
                    aria-hidden="true"
                  ></i>
                  <hr className="mt-3 mx-auto border-red-500 w-20" />
                </div>
                <span
                  className={`break-words font-medium text-blue-gray-800 ${rubik.className}`}
                >
                  {item.text}
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d488.11643880994455!2d-77.123032!3d-11.840068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d43f1bea44a1%3A0x1aa5fa6c53783cf!2sLas%20Orqu%C3%ADdeas%2C%20Ventanilla%2007076!5e0!3m2!1ses-419!2spe!4v1730611685276!5m2!1ses-419!2spe"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
