"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  closeModal: () => void;
  header: string;
};

export default function ModalContainer({
  children,
  closeModal,
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
        ref={modalRef}
        className="flex relative max-h-[700px] max-lg:-top-10 max-lg:max-h-[550px] w-full sm:min-w-[700px] max-w-[600px] flex-col gap-8 overflow-auto rounded-md bg-neutral-800 text-bg-color-light px-6 py-6"
      >
        <p className="text-center text-2xl">{header}</p>
        {children}
      </div>
    </div>
  );
}
