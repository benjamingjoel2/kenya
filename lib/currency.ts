import { currencies, exchangeRates, type CurrencyCode } from "@/config/site";

export function convert(usd: number, code: CurrencyCode) {
  const value = usd * exchangeRates[code];
  // Round to friendly marketing numbers.
  if (code === "KES") return Math.round(value / 100) * 100;
  if (value >= 1000) return Math.round(value / 10) * 10;
  return Math.round(value);
}

export function formatPrice(usd: number, code: CurrencyCode) {
  const amount = convert(usd, code);
  const { symbol, locale } = currencies[code];
  const n = new Intl.NumberFormat(locale === "de-DE" ? "en-GB" : locale, { maximumFractionDigits: 0 }).format(amount);
  return code === "KES" ? `${symbol} ${n}` : `${symbol}${n}`;
}
