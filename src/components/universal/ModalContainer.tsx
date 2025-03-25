"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  closeModal: () => void;
  minWidth?: string;
  header: string;
};

export default function ModalContainer({
  children,
  closeModal,
  minWidth,
  header,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        target.tagName !== "BUTTON"
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  useEffect(() => {
    // Disable scrolling when modal mounts
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when modal unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="z-20 fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-neutral-950 bg-opacity-75">
      <div
        style={{ minWidth: minWidth ?? "400px" }}
        ref={modalRef}
        className="flex max-h-[600px] min-w-[700px] max-w-[900px] flex-col gap-8 overflow-auto rounded-md bg-neutral-800 px-6 py-6"
      >
        <p className="text-center text-2xl">{header}</p>
        {children}
      </div>
    </div>
  );
}
