import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function Home() {
  redirect('/dashboard');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  );
}
