import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center animate-spin rounded-full p-10 h-40 w-40 border-t-2 border-b-2 border-accent-color">
        <Image height={200} width={200} src="/assets/other/sv-cube.png" alt="" priority />
      </div>
    </div>
  );
}