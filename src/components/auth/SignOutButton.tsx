"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="min-w-40 justify-center bg-bg-color-light lg:hover:opacity-85 transition rounded-full text-bg-color-dark flex gap-2 items-center py-3 px-4"
    >
      Emergency Sign Out
    </button>
  );
}
