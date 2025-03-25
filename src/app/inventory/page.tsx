import Hero from "@/components/universal/Hero";
import Inventory from "@/components/Inventory/Inventory";
import type { Metadata } from "next";
import InventoryList from "@/components/admin/InventoryList";
import { getUserSession } from "@/components/utils/getUserSession";
import { redirect } from "next/navigation";
import { prisma } from "../../../lib/prisma";
import Container from "@/components/universal/Container";
import Image from "next/image";
import SubHeader from "@/components/universal/SubHeader";

export const metadata: Metadata = {
  title: "Stones Village | Inventory",
  description:
    "Stones Village Inc. is a company that sells, supplies, fabricates, and installs stones for kitchens, bathrooms, vanity, and more. We have a wide variety of stones such as marble, onyx, quartz, and porcelain. We are located in the heart of the city of Vaughan, Ontario.",
  keywords:
    "stones, marble, onyx, porcelain, quartz, kitchen, vanity, countertops, slabs, supply, fabricate, install, vaughan",
};

export default async function InventoryPage() {
  const posts = await prisma.post.findMany({
    orderBy: [
      { stoneType: "asc" },
      {
        name: "asc",
      },
      {
        color: "asc",
      },
    ],
  });

  return (
    <div className="bg-bg-color-light">
      <Hero content="Inventory" />
      <Container>
        <div className="flex flex-col items-center text-bg-color-dark mt-content">
          <div className="flex flex-col-reverse gap-8 lg:gap-4 lg:flex-row justify-center items-center leading-loose">
            <div className="flex flex-col w-full">
              <h2 className="text-2xl max-xl:text-center mb-content font-semibold">
                Explore Nature&apos;s Masterpieces: Our Premium Stone Collection
              </h2>
              <p className="max-xl:text-center">
                Dive into our carefully curated inventory, where each stone
                speaks of nature&apos;s unparalleled beauty and grandeur.
                Presented in an organized grid, each square reveals a unique
                stone with its distinct patterns, colors, and textures crafted
                by nature over countless years. This layout is designed for easy
                exploration, enabling you to swiftly navigate and choose from
                the premium stones we have available. Whether you&apos;re aiming
                for a modern touch or a classic setting, our varied inventory is
                poised to meet your design desires.
              </p>
            </div>
            <div className="w-full justify-center lg:justify-end flex relative overflow-hidden">
              <Image
                src="/assets/other/inventory.webp"
                alt="Stone inventory showcase"
                width={500}
                height={500}
                className="object-cover w-[500px] h-[500px]"
              />
            </div>
          </div>
           <div className="mt-div">
           <SubHeader
              header="Our Collection"
              subheader="View our extensive inventory and find the perfect stone for you."
            />
           </div>
          <div className="my-content w-full">
            <InventoryList posts={posts} />
            {/* <Inventory /> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
