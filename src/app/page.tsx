import Discoverbeauty from "@/components/home/DiscoverBeauty";
import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import Reviews from "@/components/home/Reviews";
import WhoAreWe from "@/components/home/WhoAreWe";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";


export default async function Home() {

  const session = await getServerSession(authOptions)
  return (
    <main className="">
      <Hero />
      <div className="text-5xl border-red-500 border-2">
        {session?.user?.name}
      </div>
      <div className="px-6 sm:px-16 lg:px-32 xl:px-44 flex flex-col items-center">
        <OurServices />
        <WhoAreWe />
        <Discoverbeauty />
        <Reviews />
      </div>
    </main>
  );
}
