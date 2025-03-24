import PostImage from "@/components/admin/PostImage";
import SignOutButton from "@/components/auth/SignOutButton";
import { getUserSession } from "@/components/utils/getUserSession";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getUserSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-lvh mt-44">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mb-10">Admin Page</h1>
        <SignOutButton />
        <PostImage fetchMethod="POST" />
      </div>
    </div>
  );
}
