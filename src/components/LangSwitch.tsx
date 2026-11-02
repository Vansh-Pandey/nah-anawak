"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, stripLocale, type Locale } from "@/lib/i18n";
import { useLang } from "@/lib/locale";

const labels: Record<Locale, string> = { en: "EN", ja: "日本語" };

/** Switches the current page to the other language (English at /…, Japanese at /ja/…). */
export default function LangSwitch({ className = "" }: { className?: string }) {
  const lang = useLang();
  const base = stripLocale(usePathname() || "/");
  return (
    <div className={`langswitch ${className}`} role="group" aria-label="Language">
      {(["en", "ja"] as const).map((l) => (
        <Link key={l} href={localePath(l, base)} hrefLang={l} lang={l} aria-current={l === lang ? "true" : undefined} data-active={l === lang}>
          {labels[l]}
        </Link>
      ))}
    </div>
  );
}
