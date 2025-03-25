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
      <div className="flex flex-col items-center gap-4 relative -top-32">
        <h1 className="text-3xl font-semibold">Sign in as Admin</h1>
        <SignInButton />
      </div>
    </div>
  );
}
