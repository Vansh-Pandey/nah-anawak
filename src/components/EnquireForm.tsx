"use client";
import { useState } from "react";
import { interests } from "@/lib/data";
import { useLang, useT } from "@/lib/locale";

/** Same fields and validation as the ANAWAK consultation form (which simulates sending — no backend is wired). */
export default function EnquireForm() {
  const t = useT();
  const lang = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(0);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = t("Full name is required.", "お名前を入力してください。");
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = t("Please enter a valid email address.", "有効なメールアドレスを入力してください。");
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
        <h2 className="pd__h2">{t("Request Received", "送信完了")}</h2>
        <p className="page__lead" style={{ marginTop: 0 }}>
          {t(
            "Thank you for reaching out. A specialist from our private advisory team will contact you shortly.",
            "お問い合わせを受け付けました。担当アドバイザーより折り返しご連絡いたします。",
          )}
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <label>
        {t("Full Name", "お名前")}
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("Enter your full name", "フルネームをご入力ください")} />
        {errors.name && <em>{errors.name}</em>}
      </label>
      <label>
        {t("Email Address", "メールアドレス")}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("Enter your email address", "連絡先メールアドレスをご入力ください")} />
        {errors.email && <em>{errors.email}</em>}
      </label>
      <label>
        {t("Area of Interest", "ご興味のある案件")}
        <select value={interest} onChange={(e) => setInterest(Number(e.target.value))}>
          {interests.map((i, idx) => (
            <option key={i.en} value={idx}>{i[lang]}</option>
          ))}
        </select>
      </label>
      <label>
        {t("Message", "ご相談内容")}
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t("How can our advisors help you? (Optional)", "ご質問、ご要望などがございましたらご記入ください（任意）")} />
      </label>
      <button type="submit" className="btn btn--blue" disabled={sending}>
        {sending ? t("Sending Request...", "送信中...") : t("Submit Booking Request", "相談会を予約する")}
      </button>
    </form>
  );
}
