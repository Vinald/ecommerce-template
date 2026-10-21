import Link from "next/link";
import type { SanitySiteSettings } from "@/lib/sanity";

export default function Nav({ settings }: { settings: SanitySiteSettings }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-primary)]/10 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-[var(--color-primary-dark)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm text-white">
            W
          </span>
          {settings.shopName}
        </Link>
        <nav className="hidden gap-8 text-sm font-semibold text-stone-700 sm:flex">
          <Link href="/" className="hover:text-[var(--color-primary)]">
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}
