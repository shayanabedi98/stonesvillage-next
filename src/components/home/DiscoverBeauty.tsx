import Image from "next/image";
import Link from "next/link";
import SubHeader from "../universal/SubHeader";

export default function Discoverbeauty() {
  return (
    <div className="flex flex-col mt-div items-center">
      <SubHeader
        header="Discover Beauty"
        subheader="Explore our projects and see the beauty we create."
      />
      <div className="mt-16 xl:mt-content flex flex-col gap-8 lg:gap-4 lg:flex-row items-center justify-center">
        <div className="flex justify-center lg:justify-start w-full">
          <Image
            className="w-[500px] h-[500px] object-cover shadow-xl"
            src="/assets/other/kitchen.jpg"
            alt=""
            width={700}
            height={700}
          />
        </div>
        <div className="flex flex-col justify-center items-center leading-loose gap-10 w-full">
          <p className="max-lg:text-center">
            Check out our Instagram for a peek at our latest projects and the
            beauty we create. Follow us for updates, inspiration, and to see our
            stone craftsmanship in action. Let&apos;s connect and start
            envisioning your dream space together! Stay tuned for
            behind-the-scenes looks at our projects, tips on selecting the
            perfect stone, and exclusive offers. Join our community of design
            enthusiasts and let&apos;s create something beautiful together.
          </p>
          <div className="flex gap-4">
            <Link
              target="_blank"
              href="https://www.instagram.com/stonesvillage/"
              className="w-40 flex justify-center bg-neutral-900 text-bg-color-light py-4 px-6 rounded-full text-lg lg:hover:bg-neutral-800 transition"
            >
              <button>Follow</button>
            </Link>
            <Link
              href="/contact"
              className="w-40 flex justify-center bg-neutral-900 text-bg-color-light py-4 px-6 rounded-full text-lg lg:hover:bg-neutral-800 transition"
            >
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
