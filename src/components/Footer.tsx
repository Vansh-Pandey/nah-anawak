import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <section className="footer__section">
          <h3 className="footer__heading">Company</h3>
          <div className="footer__inner">
            <Link className="footer__link" href="/company-profile">Company Profile</Link>
            <Link className="footer__link" href="/#about">About JWD Group</Link>
            <Link className="footer__link" href="/#jwd">The World of JWD</Link>
            <Link className="footer__link" href="/properties">Residences</Link>
          </div>
        </section>
        <section className="footer__section">
          <h3 className="footer__heading">Contact us</h3>
          <div className="footer__inner">
            <Link className="footer__link" href="/enquire">Private Consultation</Link>
            <Link className="footer__link" href="/#portfolio">Request the Portfolio</Link>
            <Link className="footer__link" href="/enquire">Enquire</Link>
          </div>
        </section>
      </div>
      <section className="footer__bottom">
        <nav className="footer__nav" aria-label="Legal">
          <Link className="footer__small" href="/company-profile">Company Profile</Link>
          <Link className="footer__small" href="#">Privacy</Link>
          <Link className="footer__small" href="#">Terms</Link>
        </nav>
        <div className="footer__left">
          <Link href="/" className="footer__logo" aria-label="ANAWAK">ANAWAK</Link>
          <span className="footer__copy">© 2026 ANAWAK · JWD Group. All rights reserved.</span>
          <p className="footer__legal">
            ANAWAK REAL ESTATE L.L.C. · Trade License No. 1124264 · RERA / ORN No. 1162605 · Office M34, AL MAMZAR BLDG, Hor Al Anz, Dubai, UAE
          </p>
        </div>
      </section>
    </footer>
  );
}
