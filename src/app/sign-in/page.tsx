import SignInButton from "@/components/auth/SignInButton";
import { getUserSession } from "@/components/utils/getUserSession";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getUserSession();
  if (session) {
    if (session.user?.email == process.env.ADMIN_EMAIL) {
      redirect("/admin");
    } else {
      redirect("/");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-lvh">
      <h1 className="text-3xl font-semibold mb-10">Sign in as Admin</h1>
      <SignInButton />
    </div>
  );
}
