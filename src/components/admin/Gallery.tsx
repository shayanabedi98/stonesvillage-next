"use client";

import { GalleryPosts } from "@/app/admin/page";
import { useWatchForChanges } from "@/context/WatchForChanges";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PostGallery from "./PostGallery";
import EditGallery from "./EditGallery";
import { FaEye } from "react-icons/fa";

export default function Gallery({
  galleryPosts,
}: {
  galleryPosts: GalleryPosts[];
}) {
  const [gallery, setGallery] = useState<GalleryPosts[]>(galleryPosts);
  //   const [filter, setFilter] = useState({
  //     search: "",
  //   });
  const path = usePathname();
  const { galleryChangeCounter } = useWatchForChanges();

  // Add this function to group posts by stone type

  //   const handleChange = (name: string, value: string) => {
  //     setFilter((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setGallery(data);
    };

    fetchData();
  }, [galleryChangeCounter]);

  if (gallery.length === 0) {
    return <p className="text-center mt-10 text-lg">No images found</p>;
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex justify-center">
        {path == "/admin" && <PostGallery />}
      </div>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 place-items-center max-[850px]:grid-cols-1 lg:gap-x-16 lg:gap-y-16 gap-x-10 gap-y-10 mt-8">
        {gallery.map((g: GalleryPosts) => (
          <div
            key={g.id}
            className="flex relative duration-200 max-[440px]:w-72 max-[440px]:h-72 w-96 h-96 justify-center items-center group"
          >
            <Link
              href={process.env.NEXT_PUBLIC_CDN_URL! + g.image}
              target="_blank"
              className="backdrop-blur-[1px] flex gap-1 items-center text-bg-color-light justify-center rounded-md absolute h-9 w-20 transition backdrop-brightness-[50%] opacity-0 group-hover:opacity-100"
            >
              <FaEye />
              View
            </Link>
            <Image
              src={process.env.NEXT_PUBLIC_CDN_URL! + g.image}
              alt={`${g.description}`}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            {path === "/admin" && <EditGallery galleryPost={g} />}
          </div>
        ))}
      </div>
    </div>
  );
}
