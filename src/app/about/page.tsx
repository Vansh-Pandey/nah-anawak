import type { Metadata } from "next";
import Image from "next/image";
import { InfoCenter } from "@/components/HomeSections";
import { Facts, SubHero } from "@/components/Blocks";
import Paras from "@/components/Paras";
import { companyProfile, groupSites } from "@/lib/data";

export const metadata: Metadata = { title: "About us — ANAWAK" };

const get = (k: string) => companyProfile.fields.find(([f]) => f === k)![1];

export default function AboutPage() {
  return (
    <>
      <SubHero image="/anawak/waterfront.jpg" note="About us" title="ANAWAK is not only selling property. ANAWAK is curating a life without compromise." />
      <Paras
        lines={[
          "Every home represents a carefully selected opportunity to live with greater freedom, security, prosperity, and global connectivity.",
          "Whether for investment, family legacy, or a second home, ANAWAK serves as a trusted advisor guiding you toward an exceptional international lifestyle.",
          "Live Beyond Ownership.",
        ]}
      />

      <section className="csec csec--dark">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">Company</h2>
          <p className="csec__lead" data-scroll="normal">{companyProfile.lead}</p>
          <div className="nums" data-scroll="normal">
            <div>
              <p className="nums__t">Capital</p>
              <p className="nums__v">{get("Capital").split(" (")[0]}</p>
              <p className="nums__s">({get("Capital").split(" (")[1]}</p>
            </div>
            <div>
              <p className="nums__t">Total Assets</p>
              <p className="nums__v">{get("Total Assets").split(" (")[0]}</p>
              <p className="nums__s">({get("Total Assets").split(" (")[1]}</p>
            </div>
          </div>
          <Facts dark rows={companyProfile.fields.filter(([k]) => k !== "Capital" && k !== "Total Assets")} />
        </div>
      </section>

      <section className="csec csec--white" id="jwd">
        <div className="csec__in">
          <h2 className="csec__title" data-scroll="normal">One group. Many extraordinary worlds.</h2>
          <p className="csec__lead" data-scroll="normal">
            ANAWAK stands within a constellation of destinations and partners that share one standard of quality.
          </p>
          <div className="cgrid">
            {groupSites.map((g) => (
              <a className="citem" key={g.name} href={g.url} target="_blank" rel="noreferrer" data-scroll="normal">
                <div className="citem__img"><Image src={g.image} alt={g.name} fill sizes="(min-width:769px) 420px, 100vw" /></div>
                <h3 className="citem__t">{g.name}</h3>
                <p className="citem__d">{g.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <InfoCenter
        id="contact"
        note="Private Consultation"
        title="Own your place in one of the world's most extraordinary lifestyles."
        desc="Our advisors welcome you for a private, unhurried conversation — in English or Japanese — about residences, legacy, and life."
        cta="Arrange a Consultation"
        href="/enquire"
        image="/anawak/bikini2_image.webp"
      />
    </>
  );
}
