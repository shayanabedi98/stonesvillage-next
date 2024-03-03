import Discoverbeauty from "@/components/home/DiscoverBeauty";
import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import WhoAreWe from "@/components/home/WhoAreWe";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="px-44 flex flex-col items-center">
        <OurServices />
        <WhoAreWe />
        <Discoverbeauty />
      </div>
    </div>
  );
}
