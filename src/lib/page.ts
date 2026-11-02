import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, tr, type Locale } from "./i18n";

export type LangParams = { params: Promise<{ lang: string }> };

/** Resolve and validate the [lang] route parameter. */
export async function getLang(params: LangParams["params"]): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

/** `export const generateMetadata = titleMeta("English title", "日本語タイトル")` */
export function titleMeta(en: string, ja: string) {
  return async ({ params }: LangParams): Promise<Metadata> => {
    const lang = await getLang(params);
    return { title: tr(lang)(en, ja) };
  };
}
