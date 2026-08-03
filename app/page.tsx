import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  );
}
