import { createImage } from "./createImage";

export async function getCroppedImg(imageSrc: string, pixelCrop: any) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return null;

  // Use original image dimensions or a specific maximum size
  // const maxSize = Math.max(image.width, image.height);
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  // Scale the crop coordinates to match the original image size
  canvas.width = pixelCrop.width * scaleX;
  canvas.height = pixelCrop.height * scaleY;

  ctx.drawImage(
    image,
    pixelCrop.x * scaleX,
    pixelCrop.y * scaleY,
    pixelCrop.width * scaleX,
    pixelCrop.height * scaleY,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return new Promise<Blob | null>((resolve) => {
    canvas.toBlob(
      (blob) => resolve(blob), 
      "image/jpeg",
      0.95  // Quality parameter (0-1)
    );
  });
}