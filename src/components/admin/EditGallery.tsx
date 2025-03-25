"use client";

import ImageUploader from "../universal/ImageUploader";
import { useEffect, useState } from "react";
import ModalContainer from "../universal/ModalContainer";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { indexToColor, stoneColors } from "../utils/colorDecoder";
import { GoPlus } from "react-icons/go";
import { GalleryPosts, Posts } from "@/app/admin/page";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useWatchForChanges } from "@/context/WatchForChanges";

type FormData = {
  image: string | File | null;
  description: string | null;
};

export default function EditGallery({
  galleryPost,
}: {
  galleryPost?: GalleryPosts;
}) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    image: galleryPost ? galleryPost.image : null,
    description: galleryPost ? galleryPost.description : "",
  });
  const { setGalleryChangeCounter } = useWatchForChanges();

  const handleImageChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, image: file as string | File | null }));
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setFormData({
      image: galleryPost ? galleryPost.image : null,
      description: galleryPost ? galleryPost.description : "",
    });
    setShowModal(false);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      setIsLoading(false);
      return;
    }

    try {
      const imageFormData = new FormData();
      imageFormData.append("id", galleryPost!.id);
      const res = await fetch("/api/uploads/gallery", {
        method: "DELETE",
        body: imageFormData,
      });

      if (res.ok) {
        await fetch("/api/gallery", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: galleryPost?.id }),
        });

        toast.success("Deleted product!");
        closeModal();
        setGalleryChangeCounter((prev) => prev + 1);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!formData.image) {
      toast.error("Please upload an image.");
      return;
    }

    try {
      const res = await fetch("/api/gallery", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, id: galleryPost?.id }),
      });

      if (res.ok) {
        const data = await res.json();
        const imageFormData = new FormData();
        imageFormData.append("image", formData.image!);
        imageFormData.append("id", data.id);
        await fetch("/api/uploads/gallery", {
          method: "POST",
          body: imageFormData,
        });

        toast.success("Updated Product!");
        setGalleryChangeCounter((prev) => prev + 1);
        setShowModal(false);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="transition lg:group-hover:opacity-100 lg:opacity-0 absolute bottom-0 bg-bg-color-light py-1 px-2 rounded-t-md flex gap-5 p-2">
        <button disabled={isLoading} onClick={() => setShowModal(true)}>
          <MdEdit className="text-bg-color-dark text-xl" />
        </button>
        <button disabled={isLoading} onClick={handleDelete}>
          <IoMdTrash className="text-red-500 text-xl" />
        </button>
      </div>
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
                  : process.env.NEXT_PUBLIC_CDN_URL! + formData.image
              }
            />
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
    </>
  );
}
