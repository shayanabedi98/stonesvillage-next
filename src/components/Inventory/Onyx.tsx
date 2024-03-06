import InventoryHeader from "./InventoryHeader";

interface Item {
  src: string;
  name: string;
}

type Props = {
  handleClickItem: (src: string) => void;
  inventoryList: {
    onyx: {
      red: Item[];
      white: Item[];
      brown: Item[];
      green: Item[];
      other: Item[];
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
      <InventoryHeader content="Onyx" />
      <div className="grid grid-cols-3 gap-10 mt-content ">
        {/* red */}
        {inventoryList.onyx.red.map((item: Item, index: number) => {
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
        {/* brown */}
        {inventoryList.onyx.brown.map((item: Item, index: number) => {
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
        {/* green */}
        {inventoryList.onyx.green.map((item: Item, index: number) => {
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
        {/* white */}
        {inventoryList.onyx.white.map((item: Item, index: number) => {
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
        {/* other */}
        {inventoryList.onyx.other.map((item: Item, index: number) => {
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
