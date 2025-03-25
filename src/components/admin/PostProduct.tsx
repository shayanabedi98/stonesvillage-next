"use client";

import ImageUploader from "../universal/ImageUploader";
import { useEffect, useState } from "react";
import ModalContainer from "../universal/ModalContainer";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { stoneColors } from "../utils/colorDecoder";
import { GoPlus } from "react-icons/go";
import { Posts } from "@/app/admin/page";
import { useWatchForChanges } from "@/context/WatchForChanges";

type FormData = {
  image: string | File | null;
  name: string;
  stoneType: string;
  color: string;
  description: string | null;
};

const stoneTypes = [
  "Onyx",
  "Marble",
  "Quartz",
  "Porcelain",
  "Granite",
  "Dekton",
];

export default function PostProduct({}) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    image: null,
    name: "",
    stoneType: stoneTypes[0],
    color: stoneColors[0],
    description: "",
  });
  const { setProducstChangeCounter } = useWatchForChanges();

  const handleImageChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, image: file as string | File | null }));
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setFormData({
      name: "",
      image: null,
      color: stoneColors[0],
      stoneType: stoneTypes[0],
      description: "",
    });
    setShowModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) {
      toast.error("Please upload an image.");
      return;
    }
    setIsLoading(true);
    try {
      const res1 = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (res1.ok) {
        const data = await res1.json();
        const imageFormData = new FormData();
        imageFormData.append("image", formData.image!);
        imageFormData.append("id", data.id);
        await fetch("/api/uploads/product", {
          method: "POST",
          body: imageFormData,
        });

        toast.success("Post successful!");
        closeModal();
        setProducstChangeCounter((prev) => prev + 1);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-sm:w-full">
      <button
        className="max-sm:w-full bg-bg-color-dark border-2 border-bg-color-dark text-bg-color-light flex items-center gap-2 py-1 px-2 rounded-md lg:hover:opacity-85 transition"
        onClick={() => setShowModal(true)}
      >
        <GoPlus />
        Add Product
      </button>
      {showModal && (
        <ModalContainer header="Post Image" closeModal={closeModal}>
          <form
            className="flex flex-col items-center gap-3 text-bg-color-dark"
            onSubmit={handleSubmit}
          >
            <ImageUploader
              onChange={handleImageChange}
              initialValue={
                formData?.image instanceof File
                  ? URL.createObjectURL(formData.image)
                  : formData?.image
              }
            />
            <div className="flex-col flex gap-1 w-full">
              <label htmlFor="name" className="text-sm text-bg-color-light">
                Name
              </label>
              <input
                required
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                type="text"
                name="name"
                value={formData.name}
                className="w-full h-9 px-2 outline-none text-sm rounded-md"
                placeholder="Name"
              />
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="color" className="text-sm text-bg-color-light">
                  Color
                </label>
                <select
                  className="w-full h-9 px-2 outline-none text-sm rounded-md"
                  required
                  name="color"
                  value={formData.color}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  {stoneColors.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-1 flex-col w-full">
                <label
                  htmlFor="stoneType"
                  className="text-sm text-bg-color-light"
                >
                  Stone Type
                </label>
                <select
                  className="w-full h-9 px-2 outline-none text-sm rounded-md"
                  required
                  name="stoneType"
                  value={formData.stoneType}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  {stoneTypes.map((t, index) => (
                    <option key={index} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-col flex gap-1 w-full">
              <label
                htmlFor="description"
                className="text-sm text-bg-color-light"
              >
                Description
              </label>
              <textarea
                required
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                name="description"
                value={formData.description!}
                className="w-full py-1 h-24 px-2 outline-none text-sm rounded-md resize-none"
                placeholder="Description"
              />
            </div>
            <button
              className="w-full h-9 px-2  bg-neutral-950 text-bg-color-light rounded-md"
              disabled={isLoading}
              type="submit"
            >
              Create
            </button>
          </form>
        </ModalContainer>
      )}
    </div>
  );
}
