"use client";
import LLink from "@/components/LLink";
import { useT } from "@/lib/locale";

export default function NotFound() {
  const t = useT();
  return (
    <div className="nf">
      <h1>404</h1>
      <p>{t("This page could not be found.", "お探しのページが見つかりませんでした。")}</p>
      <LLink className="btn btn--blue" href="/">{t("Back to ANAWAK", "ANAWAKに戻る")}</LLink>
    </div>
  );
}
