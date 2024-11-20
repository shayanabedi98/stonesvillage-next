"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  src: string;
};

export default function GalleryItem({ src }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <Image
        src={src}
        priority
        alt=""
        className={`lg:hover:scale-105 transition shadow-lg h-72 w-72 lg:w-80 lg:h-80 rounded-sm 2xl:h-96 2xl:w-96 object-cover ${
          isLoading ? "blur-[2px]" : ""
        }`}
        width={700}
        height={700}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <AiOutlineLoading3Quarters className="text-3xl loading text-white" />
        </div>
      )}
    </div>
  );
}
