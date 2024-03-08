import Hero from "@/components/universal/Hero";
import Inventory from "@/components/Inventory/Inventory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stones Village | Inventory",
  description: "Stones Village Inc. is a company that sells, supplies, fabricates, and installs stones for kitchens, bathrooms, vanity, and more. We have a wide variety of stones such as marble, onyx, quartz, and porcelain. We are located in the heart of the city of Vaughan, Ontario.",
  keywords: "stones, marble, onyx, porcelain, quartz, kitchen, vanity, countertops, slabs, supply, fabricate, install, vaughan",
};

export default function InventoryPage() {
  return (
    <main className="bg-bg-color-light">
      <Hero content="Inventory" />
      <div className="px-6 sm:px-16 lg:px-32 xl:px-44 flex flex-col items-center text-bg-color-dark mt-content">
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center gap-10 leading-loose">
          <div className="flex flex-col xl:w-1/2">
            <h2 className="text-2xl max-xl:text-center mb-content font-semibold">
              Explore Nature&apos;s Masterpieces: Our Premium Stone Collection
            </h2>
            <p className="max-xl:text-center">
              Dive into our carefully curated inventory, where each stone speaks
              of nature&apos;s unparalleled beauty and grandeur. Presented in an
              organized grid, each square reveals a unique stone with its
              distinct patterns, colors, and textures crafted by nature over
              countless years. This layout is designed for easy exploration,
              enabling you to swiftly navigate and choose from the premium
              stones we have available. Whether you&apos;re aiming for a modern touch
              or a classic setting, our varied inventory is poised to meet your
              design desires.
            </p>
          </div>
          <div
            className="h-72 w-72 lg:h-96 lg:w-96 shadow-md"
            style={{
              backgroundImage: "url(/assets/other/inventory.webp)",
              backgroundSize: "700px",
              backgroundPosition: "-40px -90px"
            }}
          ></div>
        </div>
        <Inventory />
      </div>
    </main>
  );
}
