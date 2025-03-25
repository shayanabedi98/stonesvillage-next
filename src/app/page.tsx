import Discoverbeauty from "@/components/home/DiscoverBeauty";
import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import Reviews from "@/components/home/Reviews";
import WhoAreWe from "@/components/home/WhoAreWe";
import Container from "@/components/universal/Container";

export default async function Home() {
  return (
    <div className="">
      <Hero />
      <Container>
        <div className="flex flex-col items-center">
          <OurServices />
          <WhoAreWe />
          <Discoverbeauty />
          <Reviews />
        </div>
      </Container>
    </div>
  );
}
