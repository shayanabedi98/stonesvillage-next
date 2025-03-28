"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../universal/Container";

export default function Hero() {
  const bgArr = [
    "/assets/other/homebg5.webp",
    "/assets/other/homebg8.webp",
    "/assets/other/homebg7.webp",
    "/assets/other/homebg9.webp",
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsTransitioning(true);

      // Change image after fade out completes
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % bgArr.length);
        // Start fade in
        setIsTransitioning(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [bgArr.length]);

  return (
    <div
      className="overflow-hidden relative"
      style={{ height: "calc(100lvh - 96px)" }}
    >
      <div className="absolute inset-0 w-full h-full z-[-1] bg-bg-color-dark">
        {bgArr.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === bgIndex
                ? isTransitioning
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Background ${index}`}
              height={1080}
              width={1920}
              quality={100}
              priority
              className="object-cover object-bottom h-full w-full"
            />
          </div>
        ))}
      </div>

      <div
        className={`bg-black transition duration-1000 w-full h-full flex items-center justify-center ${
          bgIndex === 0 || bgIndex === 2 || bgIndex === 1
            ? "bg-opacity-35"
            : "bg-opacity-20"
        }`}
      >
        <Container>
          <div
            className={`flex relative -top-10 flex-col items-center gap-16 justify-center text-center text-white font-semibold h-full w-full transition duration-300`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
              Welcome to Stones Village
            </h1>
            <h2 className="text-2xl 2xl:text-3xl max-sm:text-lg sm:max-w-[80%]">
              Supply &bull; Design &bull; Fabricate &bull; Install
            </h2>
            <Link
              href="/inventory"
              className="bg-neutral-900 text-bg-color-light py-4 px-6 rounded-full text-lg lg:hover:bg-neutral-800 transition"
            >
              <button>View Inventory</button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
