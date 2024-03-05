import Image from "next/image";
import Link from "next/link";
import NavbarItems from "./NavbarItems";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex justify-between px-24 py-4 fixed top-0 left-0 right-0 w-full bg-[rgba(20,20,20,0.85)] h-24 shadow-md z-[1]">
      <div className="flex items-center w-1/3">
        <Link className="flex items-center gap-2" href="/">
          <Image
            className="w-14"
            priority
            src="/assets/other/sv-cube.png"
            alt=""
            height={200}
            width={200}
          />
          <Image
            className="w-[230px] h-full"
            priority
            src="/assets/other/sv-name.png"
            alt=""
            height={200}
            width={200}
          />
        </Link>
      </div>
      <div className="flex items-center gap-1 w-1/3 justify-center">
        <NavbarItems location="/" content="Home" />
        <NavbarItems location="/inventory" content="Inventory" />
        <NavbarItems location="/gallery" content="Gallery" />
        <NavbarItems location="/about" content="About Us" />
        <NavbarItems location="/contact" content="Contact" />
      </div>
      <div className="flex items-center justify-center w-1/3 gap-10">
        <Link target="_blank" href="https://www.instagram.com/stonesvillage/">
          <FaInstagram className="text-3xl hover:text-accent-color transition duration-200 ease-in-out" />
        </Link>
        <Link href="/contact/#mail">
          <MdMailOutline className="text-3xl hover:text-accent-color transition duration-200 ease-in-out" />
        </Link>
      </div>
    </div>
  );
}
