import Image from "next/image";
import Link from "next/link";

export default function Discoverbeauty() {
  return (
    <div className="flex flex-col mt-div items-center">
      <h3 className="text-3xl">Discover Beauty</h3>
      <div className="mt-content flex items-center justify-center">
        <div className="flex justify-center items-center w-1/2">
          <div className="grid grid-cols-2 shadow-2xl gap-2 border-2 p-2">
            <Image
              className="object-cover w-52 h-52"
              src="/assets/other/discover1.jpg"
              alt=""
              height={200}
              width={200}
            />
            <Image
              className="object-cover w-52 h-52"
              src="/assets/other/discover2.jpg"
              alt=""
              height={200}
              width={200}
            />
            <Image
              className="object-cover w-52 h-52"
              src="/assets/other/discover3.jpg"
              alt=""
              height={200}
              width={200}
            />
            <Image
              className="object-cover w-52 h-52"
              src="/assets/other/discover4.jpg"
              alt=""
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 px-20 leading-loose gap-10">
          <p>
            Stones Village invites you to our Instagram page, where a portfolio
            of diverse and transformative projects awaits. Over here, you&apos;ll
            find a showcase of our commitment to excellence in stone
            craftsmanship. Follow us for a steady stream of inspiration,
            updates, and a glimpse into the artistry that defines every project.
            Connect with us on Instagram, so you can start envisioning the
            possibilities for your own space today!
          </p>
          <Link
            target="_blank"
            href="https://www.instagram.com/stonesvillage/"
            className="bg-neutral-800 text-accent-color font-semibold py-5 px-8 text-xl rounded-md shadow-xl"
          >
            <button className="w-40">Follow Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
