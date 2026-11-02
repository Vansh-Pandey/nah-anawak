import type { Metadata } from "next";
import Image from "next/image";
import { SubHero } from "@/components/Blocks";
import { groupIntro, groupSites } from "@/lib/data";

export const metadata: Metadata = { title: "The World of JWD — ANAWAK" };

export default function JwdGroupPage() {
  return (
    <>
      <SubHero image="/anawak/group-wdwc.jpg" note="The World of JWD" title={groupIntro.title} lead={groupIntro.desc} />
      <section className="csec white">
        <div className="csec__in">
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
    </>
  );
}
