import Image from "next/image";

export default function Hero({ content }: { content: string }) {
  return (
    <div>
      <div className="text-bg-color-light h-lvh sm:h-[500px] relative">
        <Image
          priority
          className="w-full h-full object-cover"
          src="/assets/other/hero.webp"
          alt=""
          height={700}
          width={1300}
        />
        <div className="absolute w-full h-full top-0 flex items-center justify-center bg-[rgba(0,0,0,0.75)]">
          <h1 className="relative -top-20 font-semibold text-4xl lg:text-7xl">
            {content}
          </h1>
        </div>
      </div>
    </div>
  );
}
