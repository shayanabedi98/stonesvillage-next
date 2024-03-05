import Hero from "@/components/universal/Hero";
import Inventory from "@/components/Inventory/Inventory";

export default function InventoryPage() {
  return (
    <main className="bg-bg-color-light ">
      <Hero content="Inventory" />
      <div className="px-44 flex flex-col items-center text-bg-color-dark">
        <Inventory />
      </div>
    </main>
  );
}
