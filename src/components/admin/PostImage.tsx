"use client";

import ImageUploader from "../universal/ImageUploader";
import { useEffect, useState } from "react";
import ModalContainer from "../universal/ModalContainer";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { stoneColors } from "../utils/colorDecoder";

type FormData = {
  image: string | File | null;
  name: string;
  stoneType: string;
  color: string;
};

const stoneTypes = [
  "Onyx",
  "Marble",
  "Quartz",
  "Porcelain",
  "Granite",
  "Dekton",
];

export default function PostImage({
  fetchMethod,
}: {
  fetchMethod: "POST" | "PATCH";
}) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    image: null,
    name: "",
    stoneType: "",
    color: "",
  });
  const router = useRouter();

  const handleImageChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, image: file as string | File | null }));
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setFormData({ name: "", image: null, color: "", stoneType: "" });
    setShowModal(false);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) {
      toast.error("Please upload an image.");
      return;
    }
    setIsLoading(true);
    try {
      const res1 = await fetch("/api/post", {
        method: fetchMethod,
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
        await fetch("/api/uploads", {
          method: fetchMethod,
          body: imageFormData,
        });

        toast.success("Account setup successful!");
        closeModal();
        router.refresh();
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button className="border" onClick={() => setShowModal(true)}>
        Make a post
      </button>
      {showModal && (
        <ModalContainer header="Post Image" closeModal={closeModal}>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              required
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="text"
              name="name"
              value={formData.name}
            />
            <select
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
            <select
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
            <ImageUploader
              onChange={handleImageChange}
              initialValue={
                formData?.image instanceof File
                  ? URL.createObjectURL(formData.image)
                  : formData?.image
              }
            />
            <button disabled={isLoading} type="submit">
              Create
            </button>
          </form>
        </ModalContainer>
      )}
    </div>
  );
}
