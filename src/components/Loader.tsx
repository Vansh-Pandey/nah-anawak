"use client";
import { useEffect, useState } from "react";

/**
 * First-load screen. It is part of the server HTML, so it shows immediately while the page,
 * fonts and images load, then fades out once everything has finished loading.
 */
export default function Loader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let t: number | undefined;
    const finish = () => {
      // keep it up briefly so it never just flickers
      t = window.setTimeout(() => setHide(true), Math.max(0, 500 - (Date.now() - start)));
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const safety = window.setTimeout(() => setHide(true), 8000); // never block the page
    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(t);
      window.clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (!hide) return;
    const t = window.setTimeout(() => setGone(true), 700);
    return () => window.clearTimeout(t);
  }, [hide]);

  if (gone) return null;
  return (
    <div className="loader" data-hide={hide} role="status" aria-live="polite" aria-label="Loading">
      <span className="loader__logo">ANAWAK</span>
      <span className="loader__bar"><i /></span>
      <noscript>
        <style>{".loader{display:none!important}"}</style>
      </noscript>
    </div>
  );
}
