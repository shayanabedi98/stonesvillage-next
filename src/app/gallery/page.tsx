import GalleryList from "@/components/gallery/GalleryList";
import Hero from "@/components/universal/Hero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stones Village | Gallery",
  description: "Stones Village Inc. is a company that sells, supplies, fabricates, and installs stones for kitchens, bathrooms, vanity, and more. We have a wide variety of stones such as marble, onyx, quartz, and porcelain. We are located in the heart of the city of Vaughan, Ontario.",
  keywords: "stones, marble, onyx, porcelain, quartz, kitchen, vanity, countertops, slabs, supply, fabricate, install, vaughan",
};

export default function Gallery() {
  return (
    <main className="bg-bg-color-light">
      <Hero content="Gallery" />
      <div className="px-6 sm:px-16 lg:px-32 xl:px-44 flex flex-col items-center text-bg-color-dark mt-content">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-10 leading-loose">
          <div>
            <Image
              className="object-cover w-72 h-72 sm:h-96 sm:w-96 shadow-md"
              priority
              src="/assets/gallery/item20.jpg"
              alt=""
              height={600}
              width={600}
            />
          </div>
          <div className="flex flex-col xl:w-1/2">
            <h2 className="text-2xl mb-content font-semibold">
              Crafting Elegance: A Dynamic Showcase of Stone Mastery
            </h2>
            <p>
              Our gallery is a vibrant showcase of our expertise in stone
              fabrication and supply for kitchens and beyond, featuring a
              handpicked selection of our finest projects. Continuously updated
              with our latest work, it reflects the evolution of our
              craftsmanship and the diversity of our materials. From the elegant
              allure of marble to the unique charm of onyx, each piece promises
              a glimpse into the potential of your space, and this is just the
              beginning there&apos;s always more to come, ensuring our gallery
              remains a beacon of inspiration and innovation.
            </p>
          </div>
        </div>
        <GalleryList />
      </div>
    </main>
  );
}
