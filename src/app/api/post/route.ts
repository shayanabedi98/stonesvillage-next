import { getUserSession } from "@/components/utils/getUserSession";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { colorDecoder } from "@/components/utils/colorDecoder";

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
      },
    });

    return NextResponse.json(createPost);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
