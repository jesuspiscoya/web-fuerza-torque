"use client";

import { lilita_one } from "@/app/fonts";
import { useEffect, useState } from "react";

export default function Slider({ pharagraph, height }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % pharagraph.length);
        setIsVisible(true);
      }, 700);
    }, 8000);

    setIntervalId(id);
  };

  const nextSlide = () => {
    startInterval();
    setIsVisible(false);
    setTimeout(
      () => {
        setCurrentSlide((prev) => (prev + 1) % pharagraph.length);
        setIsVisible(true);
      },
      pharagraph.some((item) => item.title) ? 700 : 0
    );
  };

  const prevSlide = () => {
    startInterval();
    setIsVisible(false);
    setTimeout(
      () => {
        setCurrentSlide(
          (prev) => (prev - 1 + pharagraph.length) % pharagraph.length
        );
        setIsVisible(true);
      },
      pharagraph.some((item) => item.title) ? 700 : 0
    );
  };

  useEffect(() => {
    setIsVisible(true);
    startInterval();
  }, []);

  return (
    <div className={`${height} overflow-hidden`}>
      <div
        className="transition-transform duration-500 flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {pharagraph.map((item, index) => (
          <div
            key={index}
            className={`relative ${height} w-full flex-shrink-0 bg-cover bg-center`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {item.title ? (
              <div className="absolute grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4 text-gray-300 flex flex-col gap-12">
                  <h1
                    className={`text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-700 transition-all duration-1000 ${
                      lilita_one.className
                    } ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-y-20"
                    }`}
                  >
                    {item.title}
                  </h1>
                  <p
                    className={`text-base md:text-xl font-medium transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white rounded-full px-3 py-1.5 hover:bg-gray-800/50 transition-colors duration-500"
        onClick={prevSlide}
      >
        <i className="fa-solid fa-angle-left fa-lg" aria-hidden="true"></i>
      </button>
      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white rounded-full px-3 py-1.5 hover:bg-gray-800/50 transition-colors duration-500"
        onClick={nextSlide}
      >
        <i className="fa-solid fa-angle-right fa-lg" aria-hidden="true"></i>
      </button>
    </div>
  );
}
