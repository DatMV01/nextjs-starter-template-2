"use client";

import {  useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: new URLSearchParams(window.location.search).get("callbackUrl") ?? "/dashboard",
      redirect: false,
    });

    if (result?.error) {
      setError("Email hoặc mật khẩu không chính xác.");
      setIsLoading(false);
      return;
    }

    window.location.assign(result?.url ?? "/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <section className="w-full max-w-md rounded-xl border bg-background p-8 shadow-sm">
        <div className="mb-8 space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Welcome back</p>
          <h1 className="text-3xl font-semibold tracking-tight">Đăng nhập</h1>
          <p className="text-sm text-muted-foreground">Nhập email và mật khẩu để tiếp tục.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block space-y-2 text-sm font-medium" htmlFor="email">
            Email: admin@example.com
            <input
              autoComplete="email"
              className="h-10 w-full rounded-md border bg-background px-3 font-normal outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              defaultValue={email}
            />
          </label>

          <label className="block space-y-2 text-sm font-medium" htmlFor="password">
            Mật khẩu:
            <input
              autoComplete="current-password"
              className="h-10 w-full rounded-md border bg-background px-3 font-normal outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              defaultValue={password}
            />
          </label>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          <Button className="w-full" disabled={isLoading} type="submit">
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </form>
      </section>
    </main>
  );
}
