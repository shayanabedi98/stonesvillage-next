import Image from "next/image";

export default function Hero({ content }: { content: string }) {
  return (
    <div>
      <div className="h-[550px] lg:h-[600px] relative">
        <Image
          priority
          className="w-full h-full object-cover"
          src="/assets/other/hero.webp"
          alt=""
          height={700}
          width={1300}
        />
        <div className="absolute w-full h-full top-0 flex items-center justify-center bg-[rgba(0,0,0,0.75)]">
          <h1 className="font-semibold text-4xl lg:text-7xl">{content}</h1>
        </div>
      </div>
    </div>
  );
}
