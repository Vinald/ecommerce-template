import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductBySlug, formatPrice } from "@/lib/sanity";

export async function POST(request: Request) {
  const { slug } = (await request.json()) as { slug?: string };

  if (!slug) {
    return NextResponse.json({ error: "missing product slug" }, { status: 400 });
  }

  const product = await getProductBySlug(slug);
  if (!product) {
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      {
        error:
          "Checkout is not configured yet. Set STRIPE_SECRET_KEY (a Stripe test mode key) to enable purchases.",
      },
      { status: 501 }
    );
  }

  const stripe = new Stripe(secretKey);
  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            description: `${product.description} (${formatPrice(product.priceCents)})`,
          },
          unit_amount: product.priceCents,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/products/${product.slug}?checkout=success`,
    cancel_url: `${origin}/products/${product.slug}?checkout=cancelled`,
  });

  return NextResponse.json({ url: session.url });
}
