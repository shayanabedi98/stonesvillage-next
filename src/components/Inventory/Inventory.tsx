"use client";

import { inventoryList } from "./inventoryList";
import Image from "next/image";
import { useState } from "react";
import Onyx from "./Onyx";
import Porcelain from "./Porcelain";
import Marble from "./Marble";
import Filter from "./Filter";
import BackUp from "./BackUp";

export default function Inventory() {
  const [bigMode, setBigMode] = useState(false);
  const [img, setImg] = useState("");
  const [filter, setFilter] = useState({
    all: true,
    onyx: false,
    porcelain: false,
    marble: false,
  });

  const handleFilter = (clicked: string) => {
    setFilter({
      all: clicked == "all",
      onyx: clicked == "onyx",
      porcelain: clicked == "porcelain",
      marble: clicked == "marble",
    });
  };

  const handleClickItem = (img: string) => {
    setBigMode(true);
    setImg(img);
  };

  return (
    <div className="mb-div">
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
            width={900}
            height={800}
            className="max-w-[800px] max-h-[90%] rounded-lg"
          />
        </div>
      )}
      <div className="flex justify-center gap-10 mt-div">
        <Filter
          content="All"
          value="all"
          handleFilter={handleFilter}
          condition={filter.all}
        />
        <Filter
          content="Onyx"
          value="onyx"
          handleFilter={handleFilter}
          condition={filter.onyx}
        />
        <Filter
          content="Porcelain"
          value="porcelain"
          handleFilter={handleFilter}
          condition={filter.porcelain}
        />
        <Filter
          content="Marble"
          value="marble"
          handleFilter={handleFilter}
          condition={filter.marble}
        />
      </div>
      <p className="text-center mt-content text-2xl">
        Showing{" "}
        <span className="font-bold">
          {filter.all && "all"}
          {filter.onyx && "Onyx"}
          {filter.porcelain && "Porcelain"}
          {filter.marble && "Marble"}
        </span>{" "}
        stone slabs currently in stock.
      </p>
      {/* <Filter content="Quartz" value="quartz" handleFilter={handleFilter} /> */}
      {(filter.onyx || filter.all) && (
        <Onyx
          handleClickItem={handleClickItem}
          inventoryList={inventoryList}
          position="-60px -90px"
        />
      )}
      {(filter.porcelain || filter.all) && (
        <Porcelain
          handleClickItem={handleClickItem}
          inventoryList={inventoryList}
          position="-85px -90px"
        />
      )}
      {(filter.marble || filter.all) && (
        <Marble
          handleClickItem={handleClickItem}
          inventoryList={inventoryList}
          position="-90px -120px"
        />
      )}
      <BackUp />
    </div>
  );
}
