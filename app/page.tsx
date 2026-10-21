import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getSiteSettings, getProducts } from "@/lib/sanity";

export default async function Home() {
  const [settings, products] = await Promise.all([getSiteSettings(), getProducts()]);

  return (
    <>
      <Hero settings={settings} />
      <ProductGrid products={products} />
    </>
  );
}
