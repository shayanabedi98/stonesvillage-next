import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/../lib/prisma";

const CustomPrismaAdapter = PrismaAdapter(prisma) as any;

export const authOptions: AuthOptions = {
  adapter: CustomPrismaAdapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const allowedEmail = process.env.ADMIN_EMAIL as string;
      if (user.email !== allowedEmail) {
        throw new Error("Unauthorized email");
      }
      return true;
    },
  },
  pages: {
    error: "/sign-in",
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
