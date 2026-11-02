"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LLink from "./LLink";
import { groupSites } from "@/lib/data";
import { useLang, useT } from "@/lib/locale";

/** Sticky full-height information panel with a photographic background (reference: Creators). */
export function InfoLeft({ id, note, title, desc, cta, href, image, loop }: {
  id: string; note: string; title: string; desc: string; cta: string; href: string; image: string; loop?: boolean;
}) {
  return (
    <section className="info" id={id}>
      <div className="info__container">
        {loop ? (
          <div className="info__loop" style={{ backgroundImage: `url(${image})` }} />
        ) : (
          <div className="info__bg"><Image src={image} alt="" fill sizes="100vw" /></div>
        )}
        <div className="info__mask" />
        <div className="info__footMsg">
          <span className="info__note" data-scroll="normal">{note}</span>
          <div className="info__frame" data-scroll="normal">
            <h2 className="info__title">{title}</h2>
            <div className="info__right">
              <p className="info__desc">{desc}</p>
              <LLink className="info__btn" href={href}>{cta}</LLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Sticky panel with centred copy over a darkened photo (reference: Concierge / Club House). */
export function InfoCenter({ id, note, title, desc, cta, href, image }: {
  id: string; note: string; title: string; desc: string; cta: string; href: string; image: string;
}) {
  return (
    <section className="info" id={id}>
      <div className="info__container" data-center="true">
        <div className="info__bg"><Image src={image} alt="" fill sizes="100vw" /></div>
        <div className="info__mask" />
        <div className="center__section">
          <div className="center__frame" data-scroll="normal">
            <span className="info__note">{note}</span>
            <h2 className="info__title">{title}</h2>
            <p className="info__desc">{desc}</p>
          </div>
          <LLink className="info__btn" href={href}>{cta}</LLink>
        </div>
      </div>
    </section>
  );
}

/** Group companies slider + portfolio card (reference: News + digital catalog). */
export function GroupSection() {
  const t = useT();
  const lang = useLang();
  const track = useRef<HTMLDivElement>(null);
  const [nav, setNav] = useState({ prev: false, next: false });
  useEffect(() => {
    const el = track.current!;
    const update = () => setNav({ prev: el.scrollLeft > 2, next: el.scrollLeft + el.clientWidth < el.scrollWidth - 2 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const go = (d: number) => track.current?.scrollBy({ left: d * (track.current.clientWidth * 0.7), behavior: "smooth" });

  return (
    <section className="news" id="jwd">
      <div className="news__container">
        <h2 className="news__title" data-scroll="normal">{t("The World of JWD", "JWDの世界")}</h2>
        <div className="news__cards">
          <div className="slider" data-scroll="normal">
            <div className="slider__track" ref={track}>
              {groupSites.map((s) => (
                <div className="slider__slide" key={s.name}>
                  <a className="ncard" href={s.url} target="_blank" rel="noreferrer">
                    <div className="ncard__bg">
                      <Image src={s.image} alt={s.name} fill sizes="(min-width:769px) 660px, 268px" />
                      <div className="ncard__shade" />
                    </div>
                    <div className="ncard__wrap">
                      <div>
                        <h3 className="ncard__title">{s.name}</h3>
                        <p className="ncard__title ncard__desc">{s.description[lang]}</p>
                      </div>
                      <div className="ncard__cta"><span className="ncard__btn">{t("Learn more", "詳しく見る")}</span></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <button type="button" className="slider__nav" data-dir="-1" data-show={nav.prev} aria-label={t("Previous", "前へ")} onClick={() => go(-1)}><i /></button>
            <button type="button" className="slider__nav" data-dir="1" data-show={nav.next} aria-label={t("Next", "次へ")} onClick={() => go(1)}><i /></button>
          </div>
        </div>
        <div className="catalog" id="portfolio" data-scroll="normal">
          <div className="catalog__img"><Image src="/properties/seahorse/11.jpg" alt="" fill sizes="(min-width:769px) 480px, 100vw" /></div>
          <div className="catalog__body">
            <div className="catalog__text">
              <h3>{t("REQUEST THE ANAWAK PORTFOLIO", "ANAWAKポートフォリオを請求する")}</h3>
              <p>
                {t(
                  "Each residence is selected for its architecture, its waterfront, and its enduring value — never merely for its price.",
                  "すべての邸宅は、建築、ウォーターフロントの立地、そして永続的な価値基準によって選定されており、単なる価格のみで選ばれることはありません。",
                )}
              </p>
            </div>
            <LLink className="btn btn--blue" href="/enquire">{t("Request now", "今すぐ請求")}</LLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhoWeAre() {
  const t = useT();
  return (
    <section className="who" id="about">
      <div className="who__container">
        <div className="info__bg"><Image src="/anawak/waterfront.jpg" alt="" fill sizes="100vw" /></div>
        <div className="who__panel">
          <div className="who__text" data-scroll="normal">
            <span className="who__note">{t("WHO WE ARE", "私たちについて")}</span>
            <h2 className="who__title">{t("ANAWAK is curating a life without compromise", "ANAWAKは、妥協のない極上の日常をデザインします")}</h2>
            <p className="who__desc">
              {t(
                "Every home represents a carefully selected opportunity to live with greater freedom, security, prosperity, and global connectivity. Whether for investment, family legacy, or a second home, ANAWAK serves as a trusted advisor guiding you toward an exceptional international lifestyle.",
                "すべての住まいは、より大きな自由、安全、繁栄、そしてグローバルなつながりを持って生きるための、厳選された機会を表しています。投資、家族の遺産、あるいはセカンドハウスのいずれであっても、ANAWAKは信頼できるアドバイザーとして、卓越したインターナショナルなライフスタイルへとお客様を導きます。",
              )}
            </p>
          </div>
          <LLink className="who__btn" href="/company-profile">{t("Learn more", "詳しく見る")}</LLink>
        </div>
      </div>
    </section>
  );
}
