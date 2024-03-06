import GalleryList from "@/components/gallery/GalleryList";
import Hero from "@/components/universal/Hero";
import Image from "next/image";

export default function Gallery() {
  return (
    <main className="bg-bg-color-light">
      <Hero content="Gallery" />
      <div className="px-44 flex flex-col items-center text-bg-color-dark mt-content">
        <div className="flex justify-center items-center gap-10 leading-loose">
          <div>
            <Image
              className="object-cover w-96 h-96 shadow-md"
              priority
              src="/assets/gallery/item20.jpg"
              alt=""
              height={600}
              width={600}
            />
          </div>
          <div className="flex flex-col w-1/2">
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
              a glimpse into the potential of your space. And this is just the
              beginning – there's always more to come, ensuring our gallery
              remains a beacon of inspiration and innovation.
            </p>
          </div>
        </div>
        <GalleryList />
      </div>
    </main>
  );
}
