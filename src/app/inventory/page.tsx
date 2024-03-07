import Hero from "@/components/universal/Hero";
import Inventory from "@/components/Inventory/Inventory";

export default function InventoryPage() {
  return (
    <main className="bg-bg-color-light">
      <Hero content="Inventory" />
      <div className="px-44 flex flex-col items-center text-bg-color-dark mt-content">
        <div className="flex justify-center items-center gap-10 leading-loose">
          <div className="flex flex-col w-1/2">
            <h2 className="text-2xl mb-content font-semibold">
              Explore Nature&apos;s Masterpieces: Our Premium Stone Collection
            </h2>
            <p className="">
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
            className="h-96 w-96 shadow-md"
            style={{
              backgroundImage: "url(/assets/inventory/onyx/other/svo-24.webp)",
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
