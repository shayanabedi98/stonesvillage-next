import Hero from "@/components/universal/Hero";
import Image from "next/image";
import type { Metadata } from "next";
import Gallery from "@/components/admin/Gallery";
import { prisma } from "../../../lib/prisma";
import SubHeader from "@/components/universal/SubHeader";

export const metadata: Metadata = {
  title: "Stones Village | Gallery",
  description:
    "Stones Village Inc. is a company that sells, supplies, fabricates, and installs stones for kitchens, bathrooms, vanity, and more. We have a wide variety of stones such as marble, onyx, quartz, and porcelain. We are located in the heart of the city of Vaughan, Ontario.",
  keywords:
    "stones, marble, onyx, porcelain, quartz, kitchen, vanity, countertops, slabs, supply, fabricate, install, vaughan",
};

export default async function GalleryPage() {
  const galleryPosts = await prisma.galleryPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-bg-color-light max-xl:text-center">
      <Hero content="Gallery" />
      <div className="px-6 sm:px-16 lg:px-32 xl:px-44 flex flex-col items-center text-bg-color-dark mt-content">
        <div className="flex flex-col-reverse gap-8 lg:gap-4 lg:flex-row-reverse justify-center items-center leading-loose">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl max-xl:text-center mb-content font-semibold">
              Explore Nature&apos;s Masterpieces: Our Premium Stone Collection
            </h2>
            <p className="max-xl:text-center">
              Dive into our carefully curated inventory, where each stone speaks
              of nature&apos;s unparalleled beauty and grandeur. Presented in an
              organized grid, each square reveals a unique stone with its
              distinct patterns, colors, and textures crafted by nature over
              countless years. This layout is designed for easy exploration,
              enabling you to swiftly navigate and choose from the premium
              stones we have available. Whether you&apos;re aiming for a modern
              touch or a classic setting, our varied inventory is poised to meet
              your design desires.
            </p>
          </div>
          <div className="w-full justify-center lg:justify-start flex relative overflow-hidden">
            <Image
              src="/assets/other/discover2.jpg"
              alt="Stone inventory showcase"
              width={500}
              height={500}
              className="object-cover w-[500px] h-[500px]"
            />
          </div>
        </div>
        <div className="mt-div">
          <SubHeader
            header="Our Portfolio"
            subheader="Here we display all of our recent work"
          />
        </div>
        <div className="my-content w-full">
          <Gallery galleryPosts={galleryPosts} />
        </div>
      </div>
    </div>
  );
}
