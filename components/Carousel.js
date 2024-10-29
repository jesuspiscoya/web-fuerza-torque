import Image from "next/image";

export default function Carousel() {
  const brands = [
    { title: "Tarjeta 1", img: "/images/logo1.png" },
    { title: "Tarjeta 2", img: "/images/logo2.png" },
    { title: "Tarjeta 3", img: "/images/logo3.png" },
    { title: "Tarjeta 4", img: "/images/logo4.jpg" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex whitespace-nowrap animate-carousel">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="rounded-lg bg-white border-2 border-yellow-600 shadow-lg shadow-blue-gray-700 h-24 w-44 p-4 mr-6 md:h-32 md:w-60 md:py-5 md:px-6 md:mr-12 flex flex-shrink-0 cursor-pointer"
          >
            <Image
              src={brand.img}
              alt={brand.title}
              width={1000}
              height={1000}
              className="max-h-28 m-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
