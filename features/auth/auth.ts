import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export async function authorizeCredentials(credentials: { email?: unknown; password?: unknown }) {
  const email = credentials.email;
  const password = credentials.password;

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    email !== "admin@example.com" ||
    password !== "123456"
  ) {
    return null;
  }

  return {
    id: email,
    email,
    name: email.split("@")[0],
  };
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Email and password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await authorizeCredentials(credentials ?? {});

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],
};
