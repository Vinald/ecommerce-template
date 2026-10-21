import Link from "next/link";
import type { SanityProduct } from "@/lib/sanity";
import { formatPrice } from "@/lib/sanity";

export default function ProductCard({ product }: { product: SanityProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group rounded-2xl border border-[var(--color-primary)]/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className="flex aspect-square items-center justify-center rounded-xl text-center text-sm font-bold text-white/90"
        style={{ backgroundColor: product.colorway }}
      >
        {product.title}
      </div>
      <h3 className="mt-4 text-lg font-bold text-stone-900 group-hover:text-[var(--color-primary)]">
        {product.title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-[var(--color-accent)]">
        {formatPrice(product.priceCents)}
      </p>
    </Link>
  );
}
