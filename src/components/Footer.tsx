import Link from "next/link";
import { legal, properties } from "@/lib/data";

function Ext() {
  return <i className="relative block size-2.5 -translate-y-[.3em] rounded-[1px] border-[1.5px] border-current pc:size-4" />;
}

function Brand({ name, href = "#", ext = false, children }: { name: string; href?: string; ext?: boolean; children?: React.ReactNode }) {
  return (
    <li className="flex flex-col gap-[18px] border-b border-black/10 py-6 first:pt-0 last:border-b-0 last:pb-0 pc:gap-5 pc:pb-9 pc:py-0 pc:first:pt-0 pc:last:pb-0">
      <Link href={href} className="inline-flex items-center gap-3 text-[18px] font-bold leading-none pc:gap-[18px] pc:text-[24px]">{name}{ext && <Ext />}</Link>
      {children}
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col gap-14 bg-white px-6 pt-[65px] pb-[60px] text-black pc:flex-row pc:items-start pc:justify-between pc:gap-10 pc:px-20 pc:pt-20 pc:pb-[100px]">
        <div className="flex flex-col gap-4 pc:gap-6">
          <Link href="#" className="text-[30px] font-bold leading-none tracking-[.1em] transition-opacity hover:opacity-70">JWD GROUP</Link>
          <p className="max-w-[360px] text-[12px] leading-[1.8] text-black/70">
            Curating a gateway to an elevated way of life. Exceptional waterfront residences and investment opportunities, presented by JWD Group.
          </p>
        </div>
        <ul className="flex w-full flex-col pc:ml-auto pc:w-auto pc:min-w-0 pc:flex-[0_600px] pc:gap-9">
          <Brand name="ANAWAK" href="#top" />
          <Brand name="Japan Worldlink DWC" href="https://worldlinkdwc.com/" ext />
          <Brand name="JWD INVESTMENT" href="https://jwdinvestment.com/" ext />
          <Brand name="JWD Luna Travel & Tourism LLC" href="https://www.dubai-trip.ae/" ext />
          <Brand name="The Heart of Europe" href="#lineup">
            <ul className="flex flex-col gap-4 pc:gap-5 pc:pt-2.5">
              {properties.map((p) => (
                <li key={p.id} className="text-[11px] font-medium leading-none pc:text-[13px]">{p.name}</li>
              ))}
            </ul>
          </Brand>
        </ul>
      </div>
      <div className="flex flex-col items-center px-5 pb-[60px] pc:px-0 pc:pb-20">
        <div className="flex w-full flex-wrap gap-x-6 gap-y-4 border-b border-white/20 py-10 pc:gap-x-8 pc:gap-y-5 pc:border-t pc:px-20 pc:py-12">
          {legal.map((l) => <Link key={l} href="#" className="whitespace-nowrap text-[11px] transition-opacity hover:opacity-80 pc:text-[12px]">{l}</Link>)}
        </div>
        <p className="mt-6 text-center text-[11px] leading-[1.8] text-muted pc:mt-10 pc:text-[12px]">
          © 2026 ANAWAK · JWD Group. All rights reserved.
          <br />
          ANAWAK REAL ESTATE L.L.C. · Trade License No. 1124264 · RERA / ORN No. 1162605 · Office M34, AL MAMZAR BLDG, Hor Al Anz
        </p>
      </div>
    </footer>
  );
}
