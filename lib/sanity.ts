import { cache } from "react";
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "vxcg49sd",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

export type SanitySiteSettings = {
  shopName: string;
  tagline: string;
  email: string;
};

export type SanityProduct = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  priceCents: number;
  colorway: string;
  order: number;
};

const fallbackSiteSettings: SanitySiteSettings = {
  shopName: "Your Shop Name",
  tagline: "Add a tagline in Sanity Studio to replace this placeholder.",
  email: "",
};

export const getSiteSettings = cache(async (): Promise<SanitySiteSettings> => {
  const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
  return data ?? fallbackSiteSettings;
});

export const getProducts = cache(async (): Promise<SanityProduct[]> => {
  return sanityClient.fetch(
    `*[_type == "product"] | order(order asc){ _id, title, "slug": slug.current, description, priceCents, colorway, order }`
  );
});

export const getProductBySlug = cache(async (slug: string): Promise<SanityProduct | null> => {
  const data = await sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0]{ _id, title, "slug": slug.current, description, priceCents, colorway, order }`,
    { slug }
  );
  return data ?? null;
});

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
