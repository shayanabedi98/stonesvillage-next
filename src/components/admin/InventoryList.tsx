"use client";

import { Posts } from "@/app/admin/page";
import Image from "next/image";
import PostProduct from "./PostProduct";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EditProduct from "./EditProduct";
import { useWatchForChanges } from "@/context/WatchForChanges";
import { FaEye } from "react-icons/fa";

export default function InventoryList({ posts }: { posts: Posts[] }) {
  const [inventory, setInventory] = useState<Posts[]>(posts);
  const [filter, setFilter] = useState({
    search: "",
  });
  const path = usePathname();
  const { productsChangeCounter } = useWatchForChanges();

  // Add this function to group posts by stone type
  const groupedInventory = () => {
    const filteredInventory = inventory.filter((post) => {
      const searchTerm = filter.search.toLowerCase();
      return (
        post.name.toLowerCase().includes(searchTerm) ||
        post.stoneType.toLowerCase().includes(searchTerm)
      );
    });

    return filteredInventory.reduce(
      (groups: { [key: string]: Posts[] }, post) => {
        const group = post.stoneType;
        groups[group] = groups[group] ?? [];
        groups[group].push(post);
        return groups;
      },
      {}
    );
  };

  const handleChange = (name: string, value: string) => {
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/post");
      const data = await res.json();
      setInventory(data);
    };

    fetchData();
  }, [productsChangeCounter]);

  const groupedResults = groupedInventory();
  const hasResults = Object.keys(groupedResults).length > 0;

  return (
    <div className="flex flex-col w-full gap-4">
      <div
        className={`flex gap-4 justify-center items-center ${
          path == "/admin" ? " max-sm:flex-col" : ""
        }`}
      >
        <div className="flex relative max-sm:w-full">
          <CiSearch className="absolute left-1 top-2 text-bg-color-dark text-xl" />
          <input
            className="py-1 h-9 outline-none placeholder:text-neutral-600 text-sm pl-8 pr-4 w-full sm:w-96 border-2 text-bg-color-dark bg-bg-color-light border-neutral-600 rounded-md bg-"
            type="text"
            value={filter.search}
            autoComplete="off"
            placeholder="Search"
            name="search"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        {path == "/admin" && <PostProduct />}
      </div>

      {!hasResults ? (
        <p className="text-center mt-10 text-lg">No products found</p>
      ) : (
        Object.entries(groupedResults).map(([stoneType, posts]) => (
          <div key={stoneType} className="mb-4 mt-8">
            <h2 className={`text-2xl text-center font-semibold mb-8`}>
              {stoneType}
            </h2>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 place-items-center max-[850px]:grid-cols-1 lg:gap-x-16 lg:gap-y-16 gap-x-10 gap-y-10">
              {posts.map((post: Posts) => (
                <div
                  key={post.id}
                  className="flex relative duration-200 max-[440px]:w-72 max-[440px]:h-72 w-96 h-96 justify-center items-center group"
                >
                  <Link
                    href={process.env.NEXT_PUBLIC_CDN_URL! + post.image}
                    target="_blank"
                    className="backdrop-blur-[1px] flex gap-1 items-center text-bg-color-light justify-center rounded-md absolute h-9 w-12 transition backdrop-brightness-[50%] opacity-0 group-hover:opacity-100"
                  >
                    <FaEye />
                  </Link>
                  <Image
                    src={process.env.NEXT_PUBLIC_CDN_URL! + post.image}
                    alt={`${post.name} - ${post.description || ""}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className={`w-32 h-7 group-hover:h-16 transition-all duration-300 absolute flex flex-col items-center justify-start bg-bg-color-dark text-sm shadow-lg text-bg-color-light top-0 rounded-b-md px-2`}
                  >
                    <span className="font-medium relative top-1">{post.name}</span>
                    <div className="h-0 group-hover:h-auto overflow-hidden group-hover:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs">
                      <p>
                        Height: {post.height}&prime;&prime;{" "}
                        {post.heightFraction !== "--" ? post.heightFraction : ""}
                      </p>
                      <p>
                        Width: {post.width}&prime;&prime;{" "}
                        {post.widthFraction !== "--" ? post.widthFraction : ""}
                      </p>
                    </div>
                  </div>
                  {/* <div
                    className={`text-xs opacity-0 group-hover:opacity-100 transition absolute flex items-center flex-col justify-center backdrop-blur-[5px] backdrop-brightness-50 text-bg-color-light bottom-0 min-w-32  px-2 py-1 ${
                      path == "/admin" ? "left-0 rounded-tr-md" : "rounded-t-md"
                    }`}
                  >
                    <p className={``}>
                      Height: {post.height}&prime;&prime;{" "}
                      {post.heightFraction !== "--" ? post.heightFraction : ""}
                    </p>
                    <p className={``}>
                      Width: {post.width}
                      &prime;&prime;{" "}
                      {post.widthFraction !== "--" ? post.widthFraction : ""}
                    </p>
                  </div> */}
                  {path === "/admin" && <EditProduct product={post} />}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
