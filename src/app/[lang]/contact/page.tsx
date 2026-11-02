import type { Metadata } from "next";
import EnquirePage from "../enquire/page";
import { tr } from "@/lib/i18n";
import { getLang, type LangParams } from "@/lib/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const t = tr(await getLang(params));
  return { title: t("Contact us — ANAWAK", "お問い合わせ — ANAWAK") };
}

export default EnquirePage;
