import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, formatPrice } from "@/lib/sanity";
import BuyNowButton from "@/components/BuyNowButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">
          Back to the collection
        </Link>
        <div className="mt-6 grid gap-10 sm:grid-cols-2">
          <div
            className="flex aspect-square items-center justify-center rounded-2xl text-xl font-bold text-white/90"
            style={{ backgroundColor: product.colorway }}
          >
            {product.title}
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-stone-900">{product.title}</h1>
            <p className="mt-2 text-xl font-semibold text-[var(--color-accent)]">
              {formatPrice(product.priceCents)}
            </p>
            <p className="mt-4 text-stone-700">{product.description}</p>
            <div className="mt-8">
              <BuyNowButton slug={product.slug} title={product.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
