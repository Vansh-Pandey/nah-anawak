import type { Metadata } from "next";
import EnquireForm from "@/components/EnquireForm";

export const metadata: Metadata = { title: "Private Consultation — ANAWAK" };

export default function EnquirePage() {
  return (
    <section className="page">
      <p className="pd__kicker">Private Consultation</p>
      <h1 className="page__title" style={{ marginTop: 16 }}>Request a Consultation</h1>
      <p className="page__lead">Arrange a private consultation with our wealth advisors.</p>
      <EnquireForm />
    </section>
  );
}
