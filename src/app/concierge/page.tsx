import type { Metadata } from "next";
import Image from "next/image";
import { InfoCenter } from "@/components/HomeSections";
import { SubHero } from "@/components/Blocks";
import Paras from "@/components/Paras";
import { pillars, services } from "@/lib/data";

export const metadata: Metadata = { title: "Concierge — ANAWAK" };

export default function ConciergePage() {
  return (
    <>
      <SubHero
        image="/anawak/villas.jpg"
        title="Advisory, at your service"
        cta={{ label: "Private Consultation", href: "/enquire" }}
      />
      <Paras
        lines={[
          "Every home represents a carefully selected opportunity to live with greater freedom, security, prosperity, and global connectivity.",
          "ANAWAK serves as a trusted advisor guiding you toward an exceptional international lifestyle.",
        ]}
      />
      <section className="csec">
        <div className="csec__in svc">
          <div className="svc__list">
            <h2 className="csec__title" data-scroll="normal">How we support you</h2>
            {services.map((s) => (
              <section className="svc__item" key={s.title} data-scroll="normal">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
          <div className="svc__media" data-scroll="normal">
            <Image src="/properties/seahorse/5.jpg" alt="" fill sizes="(min-width:769px) 40vw, 100vw" />
          </div>
        </div>
      </section>
      <section className="csec csec--white">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">The ANAWAK Standard</h2>
          <div className="cgrid">
            {pillars.map((p) => (
              <section className="citem" key={p.title} data-scroll="normal">
                <div className="citem__img"><Image src={p.image} alt={p.title} fill sizes="(min-width:769px) 420px, 100vw" /></div>
                <h3 className="citem__t">{p.title}</h3>
                <p className="citem__d">{p.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <InfoCenter
        id="about"
        note="About us"
        title="ANAWAK is curating a life without compromise."
        desc="A discreet, guided path — refined over years of serving international families."
        cta="Learn more"
        href="/about"
        image="/anawak/waterfront.jpg"
      />
    </>
  );
}
