import Image from "next/image";
import { inventoryList } from "./inventoryList";

export default function Inventory() {
  return (
    <div>
      <div>
        <h2>Onyx</h2>
        <div>
          {inventoryList[0].onyx?.brown.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  priority
                  src={item.src}
                  alt={item.alt}
                  height={600}
                  width={600}
                  className="w-96 h-96 object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
