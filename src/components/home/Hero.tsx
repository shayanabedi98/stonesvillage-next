"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const bgArr = [
    "/assets/other/homebg1.webp",
    "/assets/other/homebg5.webp",
    "/assets/other/homebg3.webp",
    "/assets/other/homebg6.webp",
  ];

  const [bgIndex, setBgIndex] = useState(0);
  // State to manage the opacity
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fading out the image before changing it
      setOpacity(0);
      // Use a timeout to change the image after it has faded out
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % bgArr.length);
        // Fade in the new image
        setOpacity(1);
      }, 1500); // Adjust this value to match your fade transition duration
    }, 9000);
    return () => clearInterval(interval);
  }, [bgArr.length]);

  return (
    <div className=" overflow-hidden h-[720px] sm:h-[900px] 2xl:h-[980px] shadow-2xl">
      <AnimatePresence>
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 h-[720px] sm:h-[900px] 2xl:h-[980px] w-full z-[-1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgArr[bgIndex]})`,
            // backgroundSize: "cover",
          }}
        >
          {/* <Image priority src={bgArr[bgIndex]} layout="fill" objectFit="cover" alt="" className="transform "/> */}
        </motion.div>
      </AnimatePresence>
      <div className="bg-black bg-opacity-15 flex flex-col items-center gap-16 justify-center text-center text-white font-semibold h-[720px] sm:h-[900px] 2xl:h-[980px]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          Supply, Design, Fabricate, Install
        </h1>
        <h2 className="text-2xl sm:text-3xl 2xl:text-4xl max-w-[80%]">
          Elevate Your Space with Stones Village
        </h2>
        <Link
          href="/inventory"
          className="bg-[#d3b443] hover:bg-bg-color-dark transition duration-200 ease-in-out py-4 px-7 lg:px-8 lg:py-6 text-lg lg:text-xl rounded-md shadow-xl"
        >
          <button>View Inventory</button>
        </Link>
      </div>
    </div>
  );
}
