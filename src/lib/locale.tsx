"use client";
import { createContext, useContext } from "react";
import { tr, type Locale } from "./i18n";

const Ctx = createContext<Locale>("en");

export function LocaleProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return <Ctx.Provider value={lang}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** Client-side `t("English", "日本語")`. */
export function useT() {
  return tr(useContext(Ctx));
}
