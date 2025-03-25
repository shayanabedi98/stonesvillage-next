import { getUserSession } from "@/components/utils/getUserSession";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: Request) {
  // Check if request is from your website
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  const allowedOrigins = [`${process.env.NEXTAUTH_URL}`];

  const isValidOrigin = allowedOrigins.some(
    (allowed) => origin?.includes(allowed) || referer?.includes(allowed)
  );

  if (!isValidOrigin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const getGallery = await prisma.galleryPost.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(getGallery);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getUserSession();
  const { formData } = await req.json();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const postGallery = await prisma.galleryPost.create({
      data: {
        description: formData.description,
      },
    });

    return NextResponse.json(postGallery);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  const session = await getUserSession();
  const { formData, id } = await req.json();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const updateGallery = await prisma.galleryPost.update({
      where: { id },
      data: {
        description: formData.description || null,
      },
    });

    return NextResponse.json(updateGallery);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getUserSession();
  const { id } = await req.json();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const deleteGallery = await prisma.galleryPost.delete({
      where: { id },
    });

    return NextResponse.json(deleteGallery);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}