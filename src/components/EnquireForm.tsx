"use client";
import { useState } from "react";
import { interests } from "@/lib/data";

/** Same fields and validation as the ANAWAK consultation form (which simulates sending — no backend is wired). */
export default function EnquireForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Full name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setDone(true);
    }, 1000);
  };

  if (done) {
    return (
      <div className="form">
        <h2 className="pd__h2">Request Received</h2>
        <p className="page__lead" style={{ marginTop: 0 }}>
          Thank you for reaching out. A specialist from our private advisory team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <label>
        Full Name
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" />
        {errors.name && <em>{errors.name}</em>}
      </label>
      <label>
        Email Address
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
        {errors.email && <em>{errors.email}</em>}
      </label>
      <label>
        Area of Interest
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can our advisors help you? (Optional)" />
      </label>
      <button type="submit" className="btn btn--blue" disabled={sending}>
        {sending ? "Sending Request..." : "Submit Booking Request"}
      </button>
    </form>
  );
}
