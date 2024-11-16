import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import { rubik } from "@/app/fonts";

export default function Content({ element }) {
  return (
    <div className={`p-7 md:p-16 ${element.background}`}>
      <div
        className={`container flex flex-col  ${
          element.inverted ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 md:gap-14`}
      >
        <div className="flex flex-col text-center md:text-left gap-4 md:gap-5 w-full">
          <ScrollAnimation to={`${element.inverted ? "right" : "left"}`}>
            <span
              className={`md:text-lg font-bold text-red-700 ${rubik.className}`}
            >
              {element.title}
            </span>
          </ScrollAnimation>
          <ScrollAnimation
            to={`${element.inverted ? "right" : "left"}`}
            delay={200}
          >
            <h1
              className={`text-3xl md:text-4xl font-bold text-yellow-700 ${rubik.className}`}
            >
              {element.subtitle}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation
            to={`${element.inverted ? "right" : "left"}`}
            delay={400}
          >
            <p className="text-gray-300 text-sm md:text-base">{element.desc}</p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          to="bottom"
          className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden shadow-lg shadow-black/85 hover:-translate-y-1.5 duration-500"
        >
          <div className="relative w-full h-full">
            <Image
              src={element.img}
              alt={element.title}
              fill
              className="object-cover"
            />
          </div>
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={200}
            height={200}
            className={`absolute ${
              element.inverted ? "right-4" : "left-4"
            } bottom-4 rounded-md bg-white/65 object-cover w-24 p-1.5`}
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}
