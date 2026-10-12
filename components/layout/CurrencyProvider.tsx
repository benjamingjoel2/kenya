"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { baseCurrency, currencies, type CurrencyCode } from "@/config/site";

const STORAGE_KEY = "sn-currency";

type Ctx = { currency: CurrencyCode; setCurrency: (c: CurrencyCode) => void };
const CurrencyContext = createContext<Ctx>({ currency: baseCurrency, setCurrency: () => {} });

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(baseCurrency);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved in currencies) setCurrencyState(saved as CurrencyCode);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* storage unavailable */
    }
  }, []);

  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>;
}

export const useCurrency = () => useContext(CurrencyContext);
