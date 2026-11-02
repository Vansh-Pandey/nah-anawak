import type { Metadata } from "next";
import { companyProfile } from "@/lib/data";

export const metadata: Metadata = { title: "Company Profile — ANAWAK" };

export default function CompanyProfilePage() {
  return (
    <section className="page">
      <p className="pd__kicker">Company Profile</p>
      <h1 className="page__title" style={{ marginTop: 16 }}>ANAWAK REAL ESTATE L.L.C.</h1>
      <p className="page__lead">{companyProfile.lead}</p>
      <dl className="dlist">
        {companyProfile.fields.map(([k, v]) => (
          <div className="dlist__row" key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
