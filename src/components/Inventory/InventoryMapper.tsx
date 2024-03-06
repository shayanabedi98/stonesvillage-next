// "use client";

// import { inventoryList } from "./inventoryList";

// interface Item {
//   src: string;
//   name: string;
// }

// export default function InventoryMapper({
//   num,
//   stone,
//   color,
//   position,
//   handleClickItem,
// }: {
//   num: number;
//   stone: "onyx" | "porcelain" | "marble" | "quartz";
//   color:
//     | "red"
//     | "other"
//     | "brown"
//     | "white"
//     | "grey"
//     | "green"
//     | "dark"
//     | "black";
//   position: string;
//   handleClickItem: any;
// }) {
//   return (
//     <div className="grid grid-cols-3 gap-10">
//       {inventoryList[num][stone][color].map((item: Item, index: number) => {
//         return (
//             <div
//               onClick={() => handleClickItem(item.src)}
//               key={index}
//               style={{
//                 backgroundImage: `url(${item.src})`,
//                 backgroundSize: "800px",
//                 backgroundPosition: position,
//               }}
//               className="w-96 h-64 object-cover rounded-lg cursor-pointer shadow-md hover:scale-[1.02] transition duration-200 ease-in-out"
//             >
//               <p className="bg-accent-color w-28 font-semibold text-center">
//                 {item.name}
//               </p>
//             </div>
//         );
//       })}
//     </div>
//   );
// }
