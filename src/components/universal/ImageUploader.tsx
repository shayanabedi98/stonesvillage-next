"use client";

import { useState, useRef } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "@/components/utils/cropImage";
import Image from "next/image";
import { MdOutlineRectangle, MdOutlineSquare } from "react-icons/md";

export default function ImageUploader({
  onChange,
  initialValue,
}: {
  onChange: (file: File | null) => void;
  initialValue?: string | ArrayBuffer | null;
}) {
  const [image, setImage] = useState<string | ArrayBuffer | null>(
    initialValue ?? null
  );
  const [croppedImage, setCroppedImage] = useState<File | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [showCropper, setShowCropper] = useState(false);
  const [aspect, setAspect] = useState(4 / 3);
  //   const [cropping, setCropping] = useState(false);

  // Add a ref for the file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onCropComplete = async (_: any, croppedAreaPixels: any) => {
    if (image) {
      const croppedBlob = await getCroppedImg(
        image as string,
        croppedAreaPixels
      );
      if (croppedBlob) {
        const croppedFile = new File([croppedBlob], "cropped-image.jpg", {
          type: "image/jpeg",
        });
        setCroppedImage(croppedFile);
        onChange(croppedFile); // Call onChange when image is cropped
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
      setShowCropper(true);
    }
  };

  // Modify the remove image button click handler
  const handleRemoveImage = () => {
    setImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedImage(null);
    onChange(null); // Call onChange when image is removed
    // Reset the file input value
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCropComplete = async () => {
    if (croppedImage) {
      setImage(URL.createObjectURL(croppedImage));
      setShowCropper(false);
    }
  };

  const handleAspect = (aspect: number) => {
    setAspect(aspect);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto flex flex-col items-center gap-8 self-start">
        <Image
          src={image ? image.toString() : "/assets/other/default.webp"}
          alt=""
          width={400}
          height={300}
          className="border-2 object-cover rounded-md"
        />
        {!image && (
          <label className="flex h-16 w-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 transition-colors hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center px-2 py-6">
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>
      {image && showCropper && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-72 w-72">
            <Cropper
              crop={crop}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              image={typeof image === "string" ? image : ""}
              aspect={aspect}
              zoom={zoom}
              zoomSpeed={0.2}
            />
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => handleAspect(4 / 3)}>
              <MdOutlineRectangle />
            </button>
            <button type="button" onClick={() => handleAspect(1)}>
              <MdOutlineSquare />
            </button>
            <button type="button" onClick={() => handleAspect(3 / 4)}>
              <MdOutlineRectangle className="rotate-90" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleCropComplete}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Done
          </button>
        </div>
      )}
      {image && !showCropper && (
        <button
          type="button"
          onClick={handleRemoveImage}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
        >
          Remove Image
        </button>
      )}
    </div>
  );
}
