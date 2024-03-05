"use client";

import Image from "next/image";
import InventoryMapper from "./InventoryMapper";
import { useState } from "react";

export default function Inventory() {
  const [bigMode, setBigMode] = useState(false);
  const [img, setImg] = useState("");

  const handleClickItem = (img: string) => {
    setBigMode(true);
    setImg(img);
  };

  return (
    <div>
      {bigMode && (
        <div
          onClick={() => {
            setBigMode(false);
          }}
          className="fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.8)] w-full h-screen flex justify-center items-center cursor-pointer"
        >
          <Image
            priority
            src={img}
            alt=""
            width={1000}
            height={1000}
            className="w-[800px] rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col gap-10 mt-div ">
        <h2 className="text-3xl text-center font-semibold">Onyx</h2>
        <InventoryMapper
          handleClickItem={handleClickItem}
          num={0}
          stone={"onyx"}
          color={"brown"}
          position="-30px -90px"
        />
        <InventoryMapper
          handleClickItem={handleClickItem}
          num={0}
          stone={"onyx"}
          color={"green"}
          position="-60px -90px"
        />
        <InventoryMapper
          handleClickItem={handleClickItem}
          num={0}
          stone={"onyx"}
          color={"red"}
          position="-60px -90px"
        />
        <InventoryMapper
          handleClickItem={handleClickItem}
          num={0}
          stone={"onyx"}
          color={"white"}
          position="-60px -90px"
        />
        <InventoryMapper
          handleClickItem={handleClickItem}
          num={0}
          stone={"onyx"}
          color={"other"}
          position="-60px -90px"
        />
      </div>
    </div>
  );
}
