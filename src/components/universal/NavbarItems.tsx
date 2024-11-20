"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  content: string;
  location: string;
};

export default function NavbarItems({ content, location }: Props) {
  const path = usePathname();

  return (
    <Link
      className={`flex justify-center border-b-2 lg:text-base hover:border-bg-color-light ${
        path == location ? "border-accent-color" : "border-transparent"
      } transition duration-200 ease-in-out`}
      href={location}
    >
      {content}
    </Link>
  );
}
