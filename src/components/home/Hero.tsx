"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const bgArr = [
    "/assets/other/homebg1.jpg",
    "/assets/other/homebg2.jpg",
    "/assets/other/homebg3.jpg",
    "/assets/other/homebg4.jpg",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgArr.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen overflow-hidden shadow-2xl">
      <AnimatePresence>
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 h-full w-full z-[-1]"
          style={{
            backgroundImage: `url(${bgArr[bgIndex]})`,
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>
      <div className="flex flex-col items-center gap-24 justify-center text-center text-white font-semibold h-screen">
        <h1 className="text-7xl">Supply, Design, Fabricate, Install</h1>
        <h2 className="text-5xl">Elevate Your Space with Stones Village</h2>
        <Link
          href="/inventory"
          className="bg-none border-8 border-accent-color hover:bg-accent-color transition duration-200 ease-in-out py-5 px-8 text-xl rounded-md shadow-xl"
        >
          <button>View Inventory</button>
        </Link>
      </div>
    </div>
  );
}