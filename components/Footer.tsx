import type { SanitySiteSettings } from "@/lib/sanity";

export default function Footer({ settings }: { settings: SanitySiteSettings }) {
  return (
    <footer className="border-t border-[var(--color-primary)]/10 bg-[var(--color-primary-dark)] text-stone-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm sm:flex-row sm:justify-between">
        <p className="font-bold text-white">{settings.shopName}</p>
        <p>{settings.email}</p>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-stone-400">
        {settings.shopName}. All rights reserved.
      </p>
    </footer>
  );
}
