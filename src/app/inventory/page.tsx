import Hero from "@/components/universal/Hero";
import Inventory from "@/components/Inventory/Inventory";

export default function InventoryPage() {
    return (
        <div className="bg-bg-color-light">
            <Hero content="Inventory"/>
            <Inventory />
        </div>
    )
}