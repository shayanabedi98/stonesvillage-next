"use client";

import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  children: React.ReactNode;
  closeModal: () => void;
  minWidth?: string;
  header: string;
};

export default function CropperModal({
  children,
  closeModal,
  minWidth,
  header,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="z-20 text-bg-color-light fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-neutral-950 bg-opacity-75">
      <div
        style={{ minWidth: minWidth ?? "400px" }}
        ref={modalRef}
        className="flex relative max-h-[80vh] min-w-[700px] max-w-[900px] flex-col gap-8 overflow-auto rounded-md bg-neutral-800 px-6 py-6"
      >
        <button onClick={closeModal}>
          <IoClose className="absolute top-1 right-1 lg:hover:bg-neutral-700 rounded-full transition text-4xl p-1" />
        </button>
        <p className="text-center text-2xl">{header}</p>
        {children}
      </div>
    </div>
  );
}
