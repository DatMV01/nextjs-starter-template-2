import { encode } from "next-auth/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authorizeCredentials } from "@/features/auth/auth";

const sessionMaxAge = 30 * 24 * 60 * 60;

async function loginAction(formData: FormData) {
  "use server";

  const user = await authorizeCredentials({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!user || !process.env.NEXTAUTH_SECRET) {
    redirect("/login-severside?error=invalid-credentials");
  }

  const sessionToken = await encode({
    token: {
      sub: user.id,
      email: user.email,
      name: user.name,
    },
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: sessionMaxAge,
  });

  const cookieStore = await cookies();
  const useSecureCookie = process.env.NODE_ENV === "production" || process.env.NEXTAUTH_URL?.startsWith("https://");

  cookieStore.set({
    name: useSecureCookie ? "__Secure-next-auth.session-token" : "next-auth.session-token",
    value: sessionToken,
    httpOnly: true,
    sameSite: "lax",
    secure: useSecureCookie,
    path: "/",
    maxAge: sessionMaxAge,
  });

  redirect("/dashboard");
}

export default async function LoginServerSidePage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <section className="w-full max-w-md rounded-xl border bg-background p-8 shadow-sm">
        <div className="mb-8 space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Server Action</p>
          <h1 className="text-3xl font-semibold tracking-tight">Đăng nhập server-side</h1>
          <p className="text-sm text-muted-foreground">Form được xử lý bởi Server Action của Next.js.</p>
        </div>

        <form action={loginAction} className="space-y-5">
          <label className="block space-y-2 text-sm font-medium" htmlFor="email">
            Email
            <input
              autoComplete="email"
              className="h-10 w-full rounded-md border bg-background px-3 font-normal outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
              id="email"
              name="email"
              required
              type="email"
              defaultValue="admin@example.com"
            />
          </label>

          <label className="block space-y-2 text-sm font-medium" htmlFor="password">
            Mật khẩu
            <input
              autoComplete="current-password"
              className="h-10 w-full rounded-md border bg-background px-3 font-normal outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
              id="password"
              name="password"
              required
              type="password"
              defaultValue="123456"
            />
          </label>

          {error ? <p className="text-sm text-destructive">Email hoặc mật khẩu không chính xác.</p> : null}

          <Button className="w-full" type="submit">
            Đăng nhập
          </Button>
        </form>
      </section>
    </main>
  );
}
