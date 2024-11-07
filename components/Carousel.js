import Image from "next/image";

export default function Carousel({ elements, rigth = false }) {
  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex whitespace-nowrap pb-5 ${
          !rigth ? "carousel-left" : "carousel-right"
        }`}
      >
        {[...elements, ...elements].map(({ url, img, title }, key) =>
          Boolean(url) ? (
            <a
              href={url}
              target="_blank"
              key={key}
              className="rounded-lg bg-white/40 shadow-lg shadow-blue-gray-800 h-24 w-44 p-4 mr-6 md:h-32 md:w-60 md:py-5 md:px-6 md:mr-12 flex cursor-pointer"
            >
              <Image
                src={img}
                alt={title}
                width={500}
                height={500}
                className="object-contain"
              />
            </a>
          ) : (
            <a
              key={key}
              className="rounded-lg bg-white/40 shadow-lg shadow-blue-gray-800 h-24 w-44 p-4 mr-6 md:h-32 md:w-60 md:py-5 md:px-6 md:mr-12 flex cursor-pointer"
            >
              <Image
                src={img}
                alt={title}
                width={500}
                height={500}
                className="object-contain"
              />
            </a>
          )
        )}
      </div>
    </div>
  );
}
