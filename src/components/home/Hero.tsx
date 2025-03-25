"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../universal/Container";

export default function Hero() {
  const bgArr = [
    "/assets/other/homebg5.webp",
    "/assets/other/homebg1.webp",
    "/assets/other/homebg6.webp",
    "/assets/other/homebg3.webp",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % bgArr.length);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [bgArr.length]);

  return (
    <div
      className="overflow-hidden relative"
      style={{ height: "calc(100vh - 96px)" }}
    >
      <div
        className="absolute inset-0 w-full h-full z-[-1] duration-1000 transition"
        style={{ transform: `translateX(-${bgIndex * 100}%)` }}
      >
        {bgArr.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background ${index}`}
            layout="fill"
            objectFit="cover"
            className={``}
          />
        ))}
      </div>

      <div className="bg-black bg-opacity-20 w-full h-full flex items-center justify-center">
        <Container>
          <div
            className={`flex relative -top-10 flex-col items-center gap-16 justify-center text-center text-white font-semibold h-full w-full transition duration-300 ${
              bgIndex === 0 || bgIndex === 2 ? "text-black" : ""
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
              Welcome to Stones Village
            </h1>
            <h2 className="text-2xl 2xl:text-3xl max-w-[80%]">
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
