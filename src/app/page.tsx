import Hero from "@/components/Hero";
import PropertiesSection from "@/components/Properties";
import { InfoLeft, InfoCenter, GroupSection, WhoWeAre } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Hero>
      <PropertiesSection />
      <InfoLeft
        id="standard"
        note="The ANAWAK Standard"
        title="Trust. Lifestyle. Legacy."
        desc="Three principles guide every residence we curate — and every relationship we build."
        cta="Learn more"
        href="/#journey"
        image="/anawak/lifestyle-pool.jpg"
      />
      <InfoCenter
        id="journey"
        note="The Ownership Journey"
        title="From first conversation to family legacy."
        desc="A discreet, guided path — refined over years of serving international families."
        cta="Private Consultation"
        href="/enquire"
        image="/anawak/bikini2_image.webp"
      />
      <InfoCenter
        id="tour"
        note="The Inspection Tour"
        title="Walk the city before you own it."
        desc="Six days of seminars, private property tours, and a taste of the life you're considering. Departs every Sunday."
        cta="Reserve Your Seat"
        href="/enquire"
        image="/anawak/desert.jpg"
      />
      <GroupSection />
      <WhoWeAre />
      </Hero>
    </>
  );
}
