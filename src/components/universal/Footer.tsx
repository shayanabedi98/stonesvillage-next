import Image from "next/image";
import Link from "next/link";
import FooterItems from "./FooterItems";

export default function Footer() {
  return (
    <div className="flex flex-col gap-6 bg-[rgba(20,20,20,1)] py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          className="w-10"
          src="/assets/other/sv-cube.png"
          alt=""
          height={40}
          width={100}
        />
        <Image
          className="w-32"
          src="/assets/other/sv-name.png"
          alt=""
          height={20}
          width={100}
        />
      </div>
      <div className="hidden md:flex justify-center gap-6 text-sm">
        <FooterItems location="/" content="Home" />
        <FooterItems location="/inventory" content="Inventory" />
        <FooterItems location="/gallery" content="Gallery" />
        <FooterItems location="/about" content="About Us" />
        <FooterItems location="/contact" content="Contact" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-xs gap-6">
        <Link href="mailto:info@stonesvillage.net">info@stonesvillage.net</Link>
        <Link
          href="https://www.google.com/maps/place/Stones+Village+Inc./@43.8153578,-79.5431827,13z/data=!3m1!5s0x882b3b02cc447315:0x43a46dcfac7c3a47!4m6!3m5!1s0x882b2fe60e9cb40b:0x2e2e691d0deb630e!8m2!3d43.804261!4d-79.5259192!16s%2Fg%2F11t6z5961k?entry=tts"
          target="_blank"
        >
          8111 Jane St Unit No. 9
        </Link>
        <Link href="tel:+14372375062">437-237-5062</Link>
      </div>
      <div className="flex justify-center text-[10px]">
        <p>
          Copyright © {new Date().getFullYear()} <Link className="font-semibold" href='https://pantheras.ca' target="_blank">Pantheras Digital Marketing</Link>,{" "}
          <span className="text-accent-color">Stones Village Inc.</span>
        </p>
      </div>
    </div>
  );
}
