export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (x: string): x is Locale => x === "en" || x === "ja";

/** A string that exists in both languages. */
export type Txt = { en: string; ja: string };
export const T = (en: string, ja: string): Txt => ({ en, ja });

/** `t("English", "日本語")` for inline copy. */
export const tr = (l: Locale) => (en: string, ja: string) => (l === "ja" ? ja : en);

/** English lives at the site root, Japanese under /ja. Only absolute paths are prefixed. */
export function localePath(l: Locale, path: string): string {
  if (l === "en" || !path.startsWith("/")) return path;
  return path === "/" ? "/ja" : `/ja${path}`;
}

/** Remove a leading /en or /ja so a path can be re-prefixed for another language. */
export function stripLocale(path: string): string {
  return path.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";
}

/** "USD 483,500 (JPY 75,000,000)" -> ["USD 483,500", "JPY 75,000,000)"] */
export function splitParen(s: string): [string, string] {
  const m = s.match(/^(.*?)\s*[(（](.*)$/);
  return m ? [m[1], m[2]] : [s, ""];
}
