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
        className={`flex gap-4 items-center ${
          path == "/admin" ? "justify-center" : ""
        }`}
      >
        <div className="flex relative">
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
            <h2 className={`text-2xl font-semibold mb-4 ${path == "/admin" ? "text-center" : ""}`}>
              {stoneType}
            </h2>
            <div className="flex flex-wrap gap-10 justify-between">
              {posts.map((post: Posts) => (
                <div
                  key={post.id}
                  className="flex relative duration-200 w-96 h-96 justify-center items-center group"
                >
                  <Link
                    href={process.env.NEXT_PUBLIC_CDN_URL! + post.image}
                    target="_blank"
                    className="backdrop-blur-lg flex items-center text-bg-color-light justify-center rounded-md absolute h-9 w-20 border transition bg-bg-color-dark lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    View
                  </Link>
                  <Image
                    src={process.env.NEXT_PUBLIC_CDN_URL! + post.image}
                    alt={`${post.name} - ${post.description || ""}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <p className={`shadow-lg absolute text-sm text-bg-color-dark flex items-center justify-center ${path =="/admin" ? "bg-bg-color-light top-0 left-0 w-32 rounded-br-md px-2 py-1" : "-bottom-6"}`}>
                    {post.name}
                  </p>
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
