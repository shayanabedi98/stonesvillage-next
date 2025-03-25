import { getUserSession } from "@/components/utils/getUserSession";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { colorDecoder } from "@/components/utils/colorDecoder";

export async function GET() {
  const session = await getUserSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
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

    return NextResponse.json(posts);
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
    const createPost = await prisma.post.create({
      data: {
        name: formData.name,
        stoneType: formData.stoneType,
        color: colorDecoder(formData.color),
        description: formData.description || null,
      },
    });

    return NextResponse.json(createPost);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const session = await getUserSession();
  const { formData, id } = await req.json();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const updatePost = await prisma.post.update({
      where: { id },
      data: {
        name: formData.name,
        stoneType: formData.stoneType,
        color: colorDecoder(formData.color),
        description: formData.description || null,
      },
    });

    return NextResponse.json(updatePost);
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
    const deletePost = await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json(deletePost);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
