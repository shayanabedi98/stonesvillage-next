import Discoverbeauty from "@/components/home/DiscoverBeauty";
import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import Reviews from "@/components/home/Reviews";
import WhoAreWe from "@/components/home/WhoAreWe";

export default async function Home() {
  return (
    <div className="">
      <Hero />
      <div className="px-6 sm:px-16 lg:px-32 xl:px-44 flex flex-col items-center">
        <OurServices />
        <WhoAreWe />
        <Discoverbeauty />
        <Reviews />
      </div>
    </div>
  );
}
