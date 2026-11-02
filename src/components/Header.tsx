"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const openRef = useRef(open);
  openRef.current = open;
  const path = usePathname();

  // Hides on scroll-down, returns on scroll-up (translateY(-100%), .3s ease-in-out)
  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 120 && !openRef.current);
      last = y;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { document.body.classList.toggle("menu-open", open); }, [open]);

  return (
    <header className="header">
      <div className="header__wrap" data-hidden={hidden}>
        <div className="header__container">
          <Link href="/" className="header__logo" aria-label="ANAWAK">ANAWAK</Link>
          <nav className="header__nav" aria-label="Main">
            <div className="header__links">
              {navLinks.map((l) => <Link key={l.label} href={l.href} className="header__link">{l.label}</Link>)}
            </div>
            <div className="header__buttons">
              <Link href="/enquire" className="header__cta">Private Consultation</Link>
              <button type="button" className="header__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
                <span /><span />
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="drawer" data-open={open}>
        {navLinks.map((l) => <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
        <Link href="/enquire" onClick={() => setOpen(false)}>Private Consultation</Link>
      </div>
    </header>
  );
}
