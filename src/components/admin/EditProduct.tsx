"use client";

import ImageUploader from "../universal/ImageUploader";
import { useEffect, useState } from "react";
import ModalContainer from "../universal/ModalContainer";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { indexToColor, stoneColors } from "../utils/colorDecoder";
import { GoPlus } from "react-icons/go";
import { Posts } from "@/app/admin/page";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useWatchForChanges } from "@/context/WatchForChanges";
import { fractionalInches } from "./PostProduct";

type FormData = {
  image: string | File | null;
  name: string;
  stoneType: string;
  color: string;
  description: string | null;
  height: number;
  heightFraction: string;
  widthFraction: string;
  width: number;
};

const stoneTypes = [
  "Onyx",
  "Marble",
  "Quartz",
  "Porcelain",
  "Granite",
  "Dekton",
];

export default function EditProduct({ product }: { product?: Posts }) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    image: product ? product.image : null,
    name: product ? product.name : "",
    stoneType: product ? product.stoneType : stoneTypes[0],
    color:
      product && typeof product.color == "number"
        ? indexToColor(product.color)
        : stoneColors[0],
    description: product ? product.description : "",
    height: product ? product.height : 1,
    heightFraction: product ? product.heightFraction : fractionalInches[0],
    width: product ? product.width : 1,
    widthFraction: product ? product.widthFraction : fractionalInches[0],
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
      image: product ? product.image : null,
      name: product ? product.name : "",
      stoneType: product ? product.stoneType : stoneTypes[0],
      color:
        product && typeof product.color == "number"
          ? indexToColor(product.color)
          : stoneColors[0],
      description: product ? product.description : "",
      height: product ? product.height : 1,
      heightFraction: product ? product.heightFraction : fractionalInches[0],
      width: product ? product.width : 1,
      widthFraction: product ? product.widthFraction : fractionalInches[0],
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
      imageFormData.append("id", product!.id);
      const res = await fetch("/api/uploads/product", {
        method: "DELETE",
        body: imageFormData,
      });

      if (res.ok) {
        await fetch("/api/post", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: product?.id }),
        });

        toast.success("Deleted product!");
        closeModal();
        setProducstChangeCounter((prev) => prev + 1);
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
      const res = await fetch("/api/post", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, id: product?.id }),
      });

      if (res.ok) {
        const data = await res.json();
        const imageFormData = new FormData();
        imageFormData.append("image", formData.image!);
        imageFormData.append("id", data.id);
        await fetch("/api/uploads/product", {
          method: "POST",
          body: imageFormData,
        });

        toast.success("Updated Product!");
        setProducstChangeCounter((prev) => prev + 1);
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
            <div className="flex gap-2 w-full">
              <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="height"
                    className="text-sm text-bg-color-light"
                  >
                    Height - Inches
                  </label>
                  <input
                    className="w-full h-9 px-2 outline-none text-sm rounded-md"
                    required
                    type="number"
                    step={1}
                    min={1}
                    max={300}
                    name="height"
                    value={formData.height}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/3">
                  <label
                    htmlFor="heightFraction"
                    className="text-sm text-bg-color-light"
                  >
                    Fractional
                  </label>
                  <select
                    className="w-full h-9 px-2 outline-none text-sm rounded-md"
                    required
                    name="heightFraction"
                    value={formData.heightFraction}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  >
                    {fractionalInches.map((f, index) => (
                      <option key={index} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="width"
                    className="text-sm text-bg-color-light"
                  >
                    Width - Inches
                  </label>
                  <input
                    className="w-full h-9 px-2 outline-none text-sm rounded-md"
                    required
                    type="number"
                    step={1}
                    min={1}
                    max={300}
                    name="width"
                    value={formData.width}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/3">
                  <label
                    htmlFor="widthFraction"
                    className="text-sm text-bg-color-light"
                  >
                    Fractional
                  </label>
                  <select
                    className="w-full h-9 px-2 outline-none text-sm rounded-md"
                    required
                    name="widthFraction"
                    value={formData.widthFraction}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  >
                    {fractionalInches.map((f, index) => (
                      <option key={index} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
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
    </>
  );
}
