import type { Metadata } from "next";
import Link from "next/link";
import EnquireForm from "@/components/EnquireForm";

export const metadata: Metadata = { title: "Private Consultation — ANAWAK" };

export default function EnquirePage() {
  return (
    <div className="enq">
      <div className="enq__title" data-scroll="normal">
        <p className="enq__sub">get in touch</p>
        <h1 className="enq__h">Make it yours. <br />Take the next step.</h1>
        <p className="enq__lead">Arrange a private consultation with our wealth advisors.</p>
      </div>
      <div className="enq__cards">
        <div className="enq__card" data-scroll="normal">
          <div className="enq__text">
            <h3 className="enq__ct">Request the Portfolio</h3>
            <p className="enq__cx">Each residence is selected for its architecture, its waterfront, and its enduring value — never merely for its price.</p>
          </div>
          <Link className="enq__link" href="#form">Request now</Link>
        </div>
        <div className="enq__card" data-scroll="normal">
          <div className="enq__text">
            <h3 className="enq__ct">Private Consultation</h3>
            <p className="enq__cx">Our advisors welcome you for a private, unhurried conversation — in English or Japanese.</p>
          </div>
          <Link className="enq__link" href="#form">I&apos;m interested</Link>
        </div>
      </div>
      <div className="enq__form" id="form">
        <EnquireForm />
      </div>
      <p className="enq__office">
        ANAWAK REAL ESTATE L.L.C. · Office M34, AL MAMZAR BLDG, Hor Al Anz · Trade License No. 1124264 · RERA / ORN No. 1162605
      </p>
    </div>
  );
}
