import InventoryHeader from "./InventoryHeader";

interface Item {
  src: string;
  name: string;
}

type Props = {
  handleClickItem: (src: string) => void;
  inventoryList: {
    porcelain: {
      white: Item[];
      dark: Item[];
    };
  };
  position: string;
};

export default function Porcelain({
  handleClickItem,
  inventoryList,
  position,
}: Props) {
  return (
    <div className="mt-div">
      <InventoryHeader content="Porcelain" />
      <div className="grid grid-cols-3 gap-10 mt-content">
        {/* white */}
        {inventoryList.porcelain.white.map((item: Item, index: number) => {
          return (
            <div
              onClick={() => handleClickItem(item.src)}
              key={index}
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: "800px",
                backgroundPosition: position,
              }}
              className="w-96 h-64 object-cover rounded-lg cursor-pointer shadow-md hover:scale-[1.02] transition duration-200 ease-in-out"
            >
              <p className="bg-accent-color w-28 font-semibold text-center">
                {item.name}
              </p>
            </div>
          );
        })}
        {/* dark */}
        {inventoryList.porcelain.dark.map((item: Item, index: number) => {
          return (
            <div
              onClick={() => handleClickItem(item.src)}
              key={index}
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: "800px",
                backgroundPosition: position,
              }}
              className="w-96 h-64 object-cover rounded-lg cursor-pointer shadow-md hover:scale-[1.02] transition duration-200 ease-in-out"
            >
              <p className="bg-accent-color w-28 font-semibold text-center">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
