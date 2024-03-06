"use client";
import { useEffect, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

export default function BackUp() {
  const [windowY, setWindowY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, [windowY]);

  return (
    <div>
      {windowY > 800 && (
        <div
          className="bg-accent-color rounded-full cursor-pointer shadow-md h-10 w-10 fixed bottom-12 right-12 text-3xl flex items-center justify-center "
          onClick={() => {
            window.scrollTo({ top: 800, behavior: "smooth" });
            setWindowY(800);
          }}
        >
          <IoArrowUpOutline className="" />
        </div>
      )}
    </div>
  );
}
