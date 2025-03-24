import Image from "next/image";

export default function InventoryList({
  posts,
}: {
  posts: {
    id: string;
    name: string;
    stoneType: string;
    color: number;
    image: string | null;
  }[];
}) {
  return (
    <div>
      <h1>Inventory List</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <Image
              src={process.env.NEXT_PUBLIC_CDN_URL! + post.image}
              alt=""
              width={500}
              height={500}
            />
            <p>{post.name}</p>
            <p>{post.stoneType}</p>
            <p>{post.color}</p>
            <p>{process.env.NEXT_PUBLIC_CDN_URL! + post.image}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
