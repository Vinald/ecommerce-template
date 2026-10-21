import type { SanityProduct } from "@/lib/sanity";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }: { products: SanityProduct[] }) {
  if (products.length === 0) return null;

  return (
    <section id="shop" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-stone-900">The Collection</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
