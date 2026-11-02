"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Site-wide scroll reveal: fadeInUp (0.8s, 32px) for every [data-scroll="normal"] element. */
export default function Effects() {
  const path = usePathname();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-scroll="normal"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power1.inOut", scrollTrigger: { trigger: el, start: "top 90%", once: true } },
        );
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [path]);
  return null;
}
