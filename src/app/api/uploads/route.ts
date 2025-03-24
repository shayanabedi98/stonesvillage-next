import { getUserSession } from "@/components/utils/getUserSession";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { prisma } from "../../../../lib/prisma";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function POST(req: Request) {
  const session = await getUserSession();
  const formData = await req.formData();
  const image = formData.get("image");
  const id = formData.get("id");

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (image && image instanceof File) {
      const post = await prisma.post.findUnique({
        where: { id: id as string },
        select: { image: true },
      });

      if (post && post.image) {
        const fileKeyToRemove = post.image;

        const deleteParams = {
          Bucket: process.env.AWS_BUCKET_NAME!,
          Key: fileKeyToRemove,
        };

        // Delete the image from S3
        await s3.send(new DeleteObjectCommand(deleteParams));
      }

      // Now to Add the new image
      // Convert the file to a Buffer
      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Create a unique key for the file in S3
      const fileKeyToAdd = `uploads/${Date.now()}-${image.name}`;

      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileKeyToAdd,
        Body: buffer,
        ContentType: image.type,
      };

      // Upload the image to S3
      await s3.send(new PutObjectCommand(uploadParams));

      // Save the file key (not a signed URL) to your database
      const updatedPost = await prisma.post.update({
        where: { id: id as string },
        data: { image: fileKeyToAdd },
      });

      return NextResponse.json(updatedPost);
    }
    console.log("No image file provided");
  } catch (error) {
    console.error(error);
    return new Response("Upload failed", { status: 500 });
  }
}
