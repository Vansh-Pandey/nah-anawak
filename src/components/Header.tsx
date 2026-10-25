"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { menus, properties } from "@/lib/data";
import { Ph } from "./ui";

gsap.registerPlugin(ScrollTrigger);

type MenuKey = "lineup" | "about" | "related" | "company" | "lang" | null;

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [drawer, setDrawer] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const drawerRef = useRef(drawer);
  drawerRef.current = drawer;

  // Hide on scroll-down / show on scroll-up (translateY(-100%), .3s)
  useEffect(() => {
    let last = 0;
    const st = ScrollTrigger.create({
      start: 0, end: "max",
      onUpdate: (self) => {
        const y = self.scroll();
        setHidden(y > last && y > 120 && !drawerRef.current);
        last = y;
      },
    });
    // Header flips to the dark theme over dark sections
    const isOverDark = () =>
      Array.from(document.querySelectorAll("[data-header-dark]")).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= 30 && r.bottom >= 30;
      });
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-header-dark]")).map((el) =>
      ScrollTrigger.create({
        trigger: el, start: "top 30px", end: "bottom 30px",
        onToggle: () => setDark(document.querySelectorAll("[data-header-dark]").length > 0 && isOverDark()),
      }),
    );
    return () => { st.kill(); triggers.forEach((t) => t.kill()); };
  }, []);

  useEffect(() => { document.body.classList.toggle("menu-open", drawer); }, [drawer]);

  const t = dark ? "bg-panel text-white" : "bg-white/80 text-black";
  const drawerGroups: [string, string[]][] = [
    ["Residences", properties.map((p) => p.name)], ["The ANAWAK Standard", menus.about], ["JWD Group", menus.related], ["Company", menus.company],
  ];

  return (
    <header className={`fixed top-0 left-0 z-[1000] w-full transition-transform duration-300 ease-in-out ${hidden ? "-translate-y-full" : ""}`}>
      <div className={`relative z-[3] flex h-[var(--header-h)] items-center justify-between border-b border-line px-5 py-[13px] pc:px-12 pc:py-[15px] backdrop-blur-[100px] ${t}`}>
        <h1 className="text-[15px] font-bold leading-none tracking-[.14em]">
          <Link href="#top" className="transition-opacity duration-300 hover:opacity-80">ANAWAK</Link>
        </h1>

        <nav className="hidden pc:block ml-auto mr-9" onMouseLeave={() => setOpen(null)}>
          <ul className="flex items-center gap-[min(2.5vw,36px)]">
            {(["lineup", "about", "related", "company"] as const).map((k) => (
              <li key={k} onMouseEnter={() => setOpen(k)} className="relative flex items-center">
                <button type="button" className="h-[var(--header-h)] text-[12px] font-semibold leading-none tracking-[.02em]">
                  {{ lineup: "Residences", about: "The ANAWAK Standard", related: "JWD Group", company: "Company" }[k]}
                </button>
                <div className={`fixed left-0 w-full max-h-[calc(100vh-var(--header-h))] overflow-auto bg-white text-black px-12 pt-6 pb-[60px] shadow-[0_0_12px_#00000040] transition-[opacity,visibility] duration-200
                  ${open === k ? "visible opacity-100" : "invisible opacity-0 delay-100"}`} style={{ top: "var(--header-h)" }}>
                  <div className="mx-auto flex max-w-[1200px] items-center justify-between py-6">
                    <span className="text-[16px] font-medium tracking-[.04em]">{{ lineup: "Residences", about: "The ANAWAK Standard", related: "The World of JWD", company: "Company" }[k]}</span>
                    {k === "lineup" && <Link href="#lineup" className="text-[16px] font-medium tracking-[.04em] text-[var(--highlight)]">All residences</Link>}
                  </div>
                  {k === "lineup" && (
                    <ul className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
                      {properties.map((p) => <li key={p.id}><Link href="#lineup" className="block text-[12px] font-medium leading-normal"><div className="relative mb-2 aspect-[16/10] overflow-hidden rounded-lg"><Image src={p.hero} alt={p.name} fill sizes="200px" className="object-cover" /></div>{p.name}</Link></li>)}
                    </ul>
                  )}
                  {(k === "about" || k === "related") && (
                    <ul className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
                      {menus[k].map((x, i) => (
                        <li key={x}><Link href="#" className="block text-[12px] font-medium leading-normal">
                          <Ph h={(i * 37) % 360} className="mb-2 aspect-[16/10] rounded-lg" />{x}
                        </Link></li>
                      ))}
                    </ul>
                  )}
                  {k === "company" && (
                    <ul className="mx-auto flex max-w-[1200px] flex-wrap gap-x-10">
                      {menus.company.map((x) => <li key={x}><Link href="#" className="text-[12px] font-medium leading-[3]">{x}</Link></li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
            <li onMouseEnter={() => setOpen("lang")} className="relative flex items-center">
              <button type="button" className="h-[var(--header-h)] text-[12px] font-semibold leading-none tracking-[.02em]">🌐 English</button>
              <ul className={`absolute top-full left-1/2 -translate-x-1/2 rounded-b-lg bg-white p-6 text-black shadow-[0_0_12px_#00000040] transition-[opacity,visibility] duration-200 ${open === "lang" ? "visible opacity-100" : "invisible opacity-0"}`}>
                {["English", "日本語"].map((l) => <li key={l}><button type="button" className="whitespace-nowrap text-[12px] font-medium leading-[3]">{l}</button></li>)}
              </ul>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="#catalog" className="rounded-full bg-off px-[14px] py-[9px] text-[12px] font-medium leading-none text-ink transition-opacity duration-300 hover:opacity-80 pc:px-5 pc:py-3 pc:text-[13px]">
            Private Consultation
          </Link>
          <button
            type="button" aria-label="Menu" aria-expanded={drawer} onClick={() => setDrawer((d) => !d)}
            className="relative block size-5 pc:hidden"
          >
            <span className={`absolute left-0 h-px w-full bg-current transition-all duration-[400ms] ${drawer ? "top-[9px] rotate-45" : "top-[6px]"}`} />
            <span className={`absolute left-0 h-px w-full bg-current transition-all duration-[400ms] ${drawer ? "bottom-[10px] -rotate-45" : "bottom-[6px]"}`} />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div className={`fixed left-0 z-[2] w-full overflow-auto bg-black text-white transition-[opacity,visibility] duration-300 pc:hidden ${drawer ? "visible opacity-100" : "invisible opacity-0"}`}
        style={{ top: "calc(var(--header-h) - 1px)", height: "calc(100svh - var(--header-h) + 1px)" }}>
        <ul className="flex flex-col gap-[30px] px-6 pt-[60px] pb-[54px]">
          {drawerGroups.map(([g, list]) => (
            <li key={g}>
              <button type="button" onClick={() => setSub(sub === g ? null : g)} className="flex h-[30px] w-full items-center justify-between text-[16px] font-medium tracking-[.04em]">
                {g}<i className={`block size-[7px] border-t-[1.5px] border-r-[1.5px] border-current transition-transform ${sub === g ? "rotate-[135deg]" : "rotate-45"}`} />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ${sub === g ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden"><div className="flex flex-col gap-[14px] pt-[14px]">
                  {list.map((x) => <Link key={x} href="#" className="text-[13px] opacity-80">{x}</Link>)}
                </div></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
