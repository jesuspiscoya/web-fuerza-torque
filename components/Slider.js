"use client";

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
        className="duration-500 flex cursor-default"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {pharagraph.map(({ img, title, description }, key) => (
          <div
            key={key}
            className={`relative ${height} w-full flex-shrink-0 bg-cover bg-center`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute h-full w-full bg-black/75">
              <div className="container text-center h-full place-content-center text-gray-300 flex flex-col items-center gap-12">
                <h1
                  className={`text-3xl px-7 sm:text-4xl md:text-6xl font-extrabold uppercase text-yellow-700 duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-y-20"
                  }`}
                >
                  {title}
                </h1>
                <p
                  className={`text-base md:text-xl font-medium duration-1000 w-3/4 md:w-2/4 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 md:left-3.5 transform -translate-y-1/2 text-white rounded-full px-2.5 py-1 md:px-3 md:py-1.5 hover:bg-gray-800/50 duration-500"
        onClick={prevSlide}
      >
        <i className="fa-solid fa-angle-left fa-lg" aria-hidden="true"></i>
      </button>
      <button
        className="absolute top-1/2 right-2 md:right-3.5 transform -translate-y-1/2 text-white rounded-full px-2.5 py-1 md:px-3 md:py-1.5 hover:bg-gray-800/50 duration-500"
        onClick={nextSlide}
      >
        <i className="fa-solid fa-angle-right fa-lg" aria-hidden="true"></i>
      </button>
    </div>
  );
}
