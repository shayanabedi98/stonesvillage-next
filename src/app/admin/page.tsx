import SignOutButton from "@/components/auth/SignOutButton";
import { getUserSession } from "@/components/utils/getUserSession";
import { redirect } from "next/navigation";
import { prisma } from "../../../lib/prisma";
import ContentContainer from "@/components/admin/ContentContainer";
import Container from "@/components/universal/Container";

export type Posts = {
  id: string;
  name: string;
  stoneType: string;
  description: string | null;
  image: string | null;
  color: string | number;
  createdAt: Date;
};

export type GalleryPosts = {
  id: string;
  description: string | null;
  image: string | null;
  createdAt: Date;
};

export default async function AdminPage() {
  const session = await getUserSession();

  if (!session) {
    redirect("/sign-in");
  }

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

  const galleryPosts = await prisma.galleryPost.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return (
    <div className="min-h-lvh mt-20 mb-32">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-10">Admin Page</h1>
          <ContentContainer posts={posts} galleryPosts={galleryPosts} />
          {/* <SignOutButton /> */}

          {/* <InventoryList posts={posts} /> */}
        </div>
      </Container>
    </div>
  );
}
