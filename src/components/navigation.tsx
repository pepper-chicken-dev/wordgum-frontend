import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';
import { UserMenu } from './user-menu';

export async function Navigation() {
  const session = await auth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="WordBeetle Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="font-bold text-xl">WordBeetle</span>
        </Link>

        <div className="flex items-center gap-4">
          {session?.user !== null && session?.user !== undefined ? (
            <UserMenu session={session} />
          ) : (
            <Button asChild variant="ghost">
              <Link href="/login">ログイン</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
