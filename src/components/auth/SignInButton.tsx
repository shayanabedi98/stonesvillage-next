"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/admin" })}
      className="min-w-40 bg-neutral-400 lg:hover:opacity-85 transition rounded-full text-bg-color-dark flex gap-2 items-center py-3 px-4"
    >
      <FaGoogle className="text-xl" />
      Sign in with Google
    </button>
  );
}
