"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LLink from "./LLink";
import LangSwitch from "./LangSwitch";
import { navLinks } from "@/lib/data";
import { useLang } from "@/lib/locale";

export default function Header() {
  const lang = useLang();
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

  const cta = lang === "ja" ? "個別相談会" : "Private Consultation";

  return (
    <header className="header">
      <div className="header__wrap" data-hidden={hidden}>
        <div className="header__container">
          <LLink href="/" className="header__logo" aria-label="ANAWAK">ANAWAK</LLink>
          <nav className="header__nav" aria-label="Main">
            <div className="header__links">
              {navLinks.map((l) => <LLink key={l.href} href={l.href} className="header__link">{l.label[lang]}</LLink>)}
            </div>
            <div className="header__buttons">
              <LangSwitch className="langswitch--header" />
              <LLink href="/enquire" className="header__cta">{cta}</LLink>
              <button type="button" className="header__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
                <span /><span />
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="drawer" data-open={open}>
        {navLinks.map((l) => <LLink key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label[lang]}</LLink>)}
        <LLink href="/enquire" onClick={() => setOpen(false)}>{cta}</LLink>
        <LangSwitch className="langswitch--drawer" />
      </div>
    </header>
  );
}
