"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarItems from "./NavbarItems";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 96) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex sticky top-0 w-full ${
          isScrolled ? "bg-[rgba(20,20,20,0.85)]" : "bg-[rgb(20,20,20)]"
        } h-24 text-bg-color-light shadow-md z-[1] backdrop-blur-md`}
      >
        <Container>
          <div className="flex justify-between w-full h-full items-center">
            <div className="flex items-end">
              <Link className="flex relative top-1 items-center gap-2" href="/">
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
            <div className="hidden lg:flex items-end gap-6 justify-end">
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
                  <FaInstagram className="text-2xl hover:text-accent-color transition duration-200 ease-in-out" />
                </Link>
                <Link href="/contact/#mail">
                  <MdMailOutline className="text-2xl hover:text-accent-color transition duration-200 ease-in-out" />
                </Link>
              </div>
            </div>

            <div
              className="flex items-end lg:hidden text-2xl pb-1"
              onClick={() => setIsMobile(true)}
            >
              <RxHamburgerMenu />
            </div>
          </div>
        </Container>
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
    </>
  );
}
