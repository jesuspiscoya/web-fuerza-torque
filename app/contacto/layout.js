import { poppins } from "../fonts";
import Script from "next/script";
import "../globals.css";

export const metadata = {
  title: "Contacto - Fuerza y Torque Company",
  description:
    "Servicios de alquiler, mantenimiento y reparación de herramientas de torque, hidráulicas y neumáticas.",
  icons: {
    icon: "/logo.png",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.className}>
      <head>
        <Script
          src="https://kit.fontawesome.com/f271c886fb.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
