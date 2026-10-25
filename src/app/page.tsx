import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  Manifesto,
  Lineup,
  Features,
  BrandFilm,
  CatalogCta,
  News,
  Stories,
  Movies,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Manifesto />
        <Lineup />
        <Features />
        <BrandFilm />
        <CatalogCta />
        <News />
        <Stories />
        <Movies />
      </main>
      <Footer />
    </>
  );
}
