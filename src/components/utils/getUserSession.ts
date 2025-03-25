import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function getUserSession() {
  const session = await getServerSession(authOptions);
  return session;
}
