"use client";

import GalleryItem from "./GalleryItem";

export default function GalleryList() {
  const gallery = [
    { src: "/assets/gallery/item1.jpg" },
    { src: "/assets/gallery/item2.jpg" },
    { src: "/assets/gallery/item3.jpg" },
    { src: "/assets/gallery/item4.jpg" },
    { src: "/assets/gallery/item5.jpg" },
    { src: "/assets/gallery/item6.jpg" },
    { src: "/assets/gallery/item7.jpg" },
    { src: "/assets/gallery/item8.jpg" },
    { src: "/assets/gallery/item9.jpg" },
    { src: "/assets/gallery/item10.jpg" },
    { src: "/assets/gallery/item11.jpg" },
    { src: "/assets/gallery/item12.jpg" },
    { src: "/assets/gallery/item13.jpg" },
    { src: "/assets/gallery/item14.jpg" },
    { src: "/assets/gallery/item15.jpg" },
    { src: "/assets/gallery/item16.jpg" },
    { src: "/assets/gallery/item17.jpg" },
    { src: "/assets/gallery/item18.jpg" },
    { src: "/assets/gallery/item19.jpg" },
    { src: "/assets/gallery/item20.jpg" },
    { src: "/assets/gallery/item21.jpg" },
    { src: "/assets/gallery/item22.jpg" },
    { src: "/assets/gallery/item23.jpg" },
  ];

  return (
    <div className="my-div w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 ">
      {gallery.map((item, index) => {
        return <GalleryItem src={item.src} key={index} />;
      })}
    </div>
  );
}
