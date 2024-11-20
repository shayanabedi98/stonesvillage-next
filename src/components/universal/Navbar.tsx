"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarItems from "./NavbarItems";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <nav className="flex justify-between px-6 pb-6 lg:px-10 fixed top-0 left-0 right-0 w-full bg-[rgba(20,20,20,0.85)] h-24 shadow-md z-[1] backdrop-blur-md">
        <div className="flex items-end w-1/3">
          <Link className="flex items-center gap-2" href="/">
            <Image
              className="w-10"
              priority
              src="/assets/other/sv-cube.png"
              alt=""
              height={50}
              width={50}
            />
            <Image
              className="min-w-32"
              priority
              src="/assets/other/sv-name.png"
              alt=""
              height={25}
              width={180}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-end gap-6 w-2/3 justify-end">
          <NavbarItems location="/" content="Home" />
          <NavbarItems location="/inventory" content="Inventory" />
          <NavbarItems location="/gallery" content="Gallery" />
          <NavbarItems location="/about" content="About Us" />
          <NavbarItems location="/contact" content="Contact" />
          <div className="h-10 w-[2px] bg-bg-color-light"></div>
          <div className="hidden lg:flex items-center justify-center gap-4">
            <Link
              target="_blank"
              href="https://www.instagram.com/stonesvillage/"
            >
              <FaInstagram className="text-3xl hover:text-accent-color transition duration-200 ease-in-out" />
            </Link>
            <Link href="/contact/#mail">
              <MdMailOutline className="text-3xl hover:text-accent-color transition duration-200 ease-in-out" />
            </Link>
          </div>
        </div>

        <div
          className="flex items-end lg:hidden text-2xl"
          onClick={() => setIsMobile(true)}
        >
          <RxHamburgerMenu />
        </div>
      </nav>
      <AnimatePresence>
        {isMobile && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2 }}
            className="fixed z-10 font-semibold text-xl text-bg-color-dark flex px-6 py-9 flex-col items-end gap-6 top-0 left-0 w-full h-full bg-accent-color"
          >
            <MdClose
              className="text-2xl border-2 border-bg-color-dark rounded-sm"
              onClick={() => setIsMobile(false)}
            />
            <Link
              href="/"
              className="text-xl mt-10"
              onClick={() => setIsMobile(false)}
            >
              Home
            </Link>
            <Link
              href="/inventory"
              className=""
              onClick={() => setIsMobile(false)}
            >
              Inventory
            </Link>
            <Link
              href="/gallery"
              className=""
              onClick={() => setIsMobile(false)}
            >
              Gallery
            </Link>
            <Link href="/about" className="" onClick={() => setIsMobile(false)}>
              About us
            </Link>
            <Link
              href="/contact"
              className=""
              onClick={() => setIsMobile(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
