"use client";
import { useEffect, useState } from "react";
import { useT } from "@/lib/locale";

/**
 * First-load screen. It is part of the server HTML, so it shows immediately while the page,
 * fonts and images load, then fades out once everything has finished loading.
 */
export default function Loader() {
  const t = useT();
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let timer: number | undefined;
    const finish = () => {
      // keep it up briefly so it never just flickers
      timer = window.setTimeout(() => setHide(true), Math.max(0, 500 - (Date.now() - start)));
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const safety = window.setTimeout(() => setHide(true), 3500); // never block the page
    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(timer);
      window.clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (!hide) return;
    const timer = window.setTimeout(() => setGone(true), 700);
    return () => window.clearTimeout(timer);
  }, [hide]);

  if (gone) return null;
  return (
    <div className="loader" data-hide={hide} role="status" aria-live="polite" aria-label={t("Loading", "読み込み中")}>
      <span className="loader__logo">ANAWAK</span>
      <span className="loader__bar"><i /></span>
      <noscript>
        <style>{".loader{display:none!important}"}</style>
      </noscript>
    </div>
  );
}
