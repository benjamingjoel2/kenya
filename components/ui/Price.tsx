"use client";

import { useCurrency } from "@/components/layout/CurrencyProvider";
import { formatPrice } from "@/lib/currency";

/** Renders a base-USD amount in the visitor's selected currency. */
export function Price({ usd, className }: { usd: number; className?: string }) {
  const { currency } = useCurrency();
  return (
    <span className={className} data-price-usd={usd}>
      {formatPrice(usd, currency)}
    </span>
  );
}
