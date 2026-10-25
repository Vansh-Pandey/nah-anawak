import Link from "next/link";
import { legal } from "@/lib/data";

function Socials({ items }: { items: string[] }) {
  return (
    <ul className="flex items-center">
      {items.map((s, i) => (
        <li key={s} className={i ? "before:mx-[9px] before:text-[#ddd] before:content-['/'] pc:before:mx-[11px]" : ""}>
          <Link href="#" className="text-[11px] leading-none transition-opacity hover:opacity-60 pc:text-[13px]">{s}</Link>
        </li>
      ))}
    </ul>
  );
}

function Ext() {
  return <i className="relative block size-2.5 -translate-y-[.3em] rounded-[1px] border-[1.5px] border-current pc:size-4" />;
}

function Brand({ name, socials, children }: { name: string; socials?: string[]; children?: React.ReactNode }) {
  return (
    <li className="flex flex-col gap-[18px] border-b border-black/10 py-6 first:pt-0 last:border-b-0 last:pb-0 pc:gap-5 pc:pb-9 pc:py-0 pc:first:pt-0 pc:last:pb-0">
      <Link href="#" className="inline-flex items-center gap-3 text-[18px] font-bold leading-none pc:gap-[18px] pc:text-[24px]">{name}<Ext /></Link>
      {socials && <Socials items={socials} />}
      {children}
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col gap-14 bg-white px-6 pt-[65px] pb-[60px] text-black pc:flex-row pc:items-start pc:justify-between pc:gap-10 pc:px-20 pc:pt-20 pc:pb-[100px]">
        <div className="flex flex-col gap-4 pc:gap-6">
          <Link href="#" className="text-[30px] font-bold leading-none tracking-[.1em] transition-opacity hover:opacity-70">NOTA</Link>
          <Socials items={["Instagram", "X"]} />
        </div>
        <ul className="flex w-full flex-col pc:ml-auto pc:w-auto pc:min-w-0 pc:flex-[0_600px] pc:gap-9">
          <Brand name="NOT A HOTEL" socials={["Instagram", "X", "YouTube"]} />
          <Brand name="NOT A GARAGE" socials={["Instagram", "X"]} />
          <Brand name="NOT A HOUSE" />
          <Brand name="NOT A CITY">
            <ul className="flex flex-col gap-4 pc:gap-5 pc:pt-2.5">
              {["NOT A MUSEUM:", "JAPA VALLEY:"].map((g) => (
                <li key={g} className="flex items-center text-[11px] leading-none pc:text-[13px]">
                  <span className="min-w-[91px] whitespace-nowrap font-medium pc:min-w-[109px]">{g}</span>
                  <Socials items={["Instagram", "X"]} />
                </li>
              ))}
            </ul>
          </Brand>
        </ul>
      </div>
      <div className="flex flex-col items-center px-5 pb-[60px] pc:px-0 pc:pb-20">
        <div className="flex w-full flex-wrap gap-x-6 gap-y-4 border-b border-white/20 py-10 pc:gap-x-8 pc:gap-y-5 pc:border-t pc:px-20 pc:py-12">
          {legal.map((l) => <Link key={l} href="#" className="whitespace-nowrap text-[11px] transition-opacity hover:opacity-80 pc:text-[12px]">{l}</Link>)}
        </div>
        <p className="mt-6 text-[11px] text-muted pc:mt-10 pc:text-[12px]">Design replica for study — placeholder content. © 2026</p>
      </div>
    </footer>
  );
}
