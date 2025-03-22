"use client";

import { signIn } from "next-auth/react";
export default function SignInPage() {
  return (
    <div className="py-32">
      <button onClick={() => signIn("google")}>Sign in with google</button>
    </div>
  );
}
