"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation({
  children,
  to,
  className = "",
  delay = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  var direction = null;

  const handleScroll = () => {
    const rect = ref.current.getBoundingClientRect();
    const position = window.innerHeight - 100;

    if (rect.top > position && rect.bottom > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  switch (to) {
    case "left":
      direction = "-translate-x-20";
      break;
    case "right":
      direction = "-translate-x-20 md:translate-x-20";
      break;
    case "top":
      direction = "-translate-y-20";
      break;
    case "bottom":
      direction = "translate-y-20";
      break;
  }

  return (
    <div
      ref={ref}
      className={`transform duration-1000 ${
        isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${direction}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
