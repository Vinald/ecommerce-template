import type { SanitySiteSettings } from "@/lib/sanity";

export default function Hero({ settings }: { settings: SanitySiteSettings }) {
  return (
    <section className="texture-grain relative overflow-hidden bg-[var(--color-primary)] px-6 py-24 text-white">
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-25 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6">
        <span className="rounded-full bg-[var(--color-accent)] px-4 py-1 text-sm font-bold">
          Small batch, hand poured
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          {settings.tagline}
        </h1>
        <a
          href="#shop"
          className="rounded-full bg-white px-6 py-3 text-base font-bold text-[var(--color-primary-dark)] shadow-lg hover:bg-stone-100"
        >
          Shop the Collection
        </a>
      </div>
    </section>
  );
}
