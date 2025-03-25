"use client";

import { useState } from "react";
import InventoryList from "./InventoryList";
import GalleryList from "../gallery/GalleryList";
import { GalleryPosts, Posts } from "@/app/admin/page";
import Gallery from "./Gallery";

type Props = {
  posts: Posts[];
  galleryPosts: GalleryPosts[];
};

export default function ContentContainer({ posts, galleryPosts }: Props) {
  const [shownPage, setShownPage] = useState("inventory");

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-10 w-full justify-center mb-10">
        <div
          className={`w-40 border-b-2 px-4 py-2 flex justify-center transition ${
            shownPage === "inventory"
              ? "text-bg-color-dark border-neutral-700"
              : "border-transparent"
          }`}
        >
          <button
            className="text-2xl font-semibold"
            onClick={() => setShownPage("inventory")}
          >
            Inventory
          </button>
        </div>
        <div
          className={`w-40 border-b-2 flex tranition border-neutral-500 justify-center px-4 py-2 ${
            shownPage === "gallery"
              ? "text-bg-color-dark  border-neutral-700"
              : "border-transparent"
          }`}
        >
          <button
            className="text-2xl font-semibold"
            onClick={() => setShownPage("gallery")}
          >
            Gallery
          </button>
        </div>
      </div>
      {shownPage === "inventory" ? (
        <InventoryList posts={posts} />
      ) : (
        // <GalleryList />
        <Gallery galleryPosts={galleryPosts} />
      )}
    </div>
  );
}
