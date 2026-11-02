"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { localePath } from "@/lib/i18n";
import { useLang } from "@/lib/locale";

/** next/link that keeps the visitor in their language (/ja/... for Japanese). */
export default function LLink({ href, ...rest }: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const lang = useLang();
  return <Link href={localePath(lang, href)} {...rest} />;
}
