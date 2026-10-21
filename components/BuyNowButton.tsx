"use client";

import { useState } from "react";

export default function BuyNowButton({ slug, title }: { slug: string; title: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleClick() {
    setStatus("loading");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await response.json();
      if (!response.ok || !data.url) {
        setErrorMessage(data.error ?? "Checkout is not configured yet.");
        setStatus("error");
        return;
      }
      window.location.href = data.url;
    } catch {
      setErrorMessage("Something went wrong starting checkout.");
      setStatus("error");
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={status === "loading"}
        className="w-full rounded-full bg-[var(--color-accent)] px-6 py-3 font-bold text-white hover:brightness-95 disabled:opacity-60"
      >
        {status === "loading" ? "Starting checkout..." : `Buy ${title}`}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-700">{errorMessage}</p>
      )}
    </div>
  );
}
