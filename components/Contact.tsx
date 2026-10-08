"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section
      id="kontakt"
      className="section-pad"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }}
        className="contact-grid"
      >
        <div>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#818cf8", marginBottom: "12px" }}>Kontakt</p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Skontaktuj się <span className="gradient-text">ze mną</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(226,228,240,0.55)", lineHeight: 1.7, marginBottom: "40px" }}>
            Napisz do mnie — odpiszę szybko.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
            {[
              { label: "Instagram", href: "https://instagram.com/TWOJ_PROFIL" },
              { label: "Facebook", href: "https://facebook.com/TWOJ_PROFIL" },
              { label: "Email", href: "mailto:TWOJ@EMAIL.PL" },
            ].map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 18px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(226,228,240,0.7)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
                <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(99,102,241,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#818cf8", flexShrink: 0, fontSize: "0.75rem", fontWeight: 700 }}>
                  {s.label.slice(0, 2)}
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          {sent ? (
            <div style={{ borderRadius: "20px", padding: "48px 32px", background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", textAlign: "center" as const }}>
              <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Wiadomosc wyslana!</p>
              <p style={{ fontSize: "0.9rem", color: "rgba(226,228,240,0.5)" }}>Odpisze najszybciej jak to mozliwe.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              style={{ borderRadius: "20px", padding: "32px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column" as const, gap: "16px" }} noValidate>
              <div>
                <label htmlFor="cn" style={{ display: "block", fontSize: "0.8rem", color: "rgba(226,228,240,0.5)", marginBottom: "6px" }}>Imie / Firma</label>
                <input id="cn" type="text" placeholder="Jan Kowalski" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "14px 16px", color: "#fff", fontSize: "0.95rem", fontFamily: "inherit", outline: "none" }} />
              </div>
              <div>
                <label htmlFor="ce" style={{ display: "block", fontSize: "0.8rem", color: "rgba(226,228,240,0.5)", marginBottom: "6px" }}>Email</label>
                <input id="ce" type="email" placeholder="jan@firma.pl" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "14px 16px", color: "#fff", fontSize: "0.95rem", fontFamily: "inherit", outline: "none" }} />
              </div>
              <div>
                <label htmlFor="cm" style={{ display: "block", fontSize: "0.8rem", color: "rgba(226,228,240,0.5)", marginBottom: "6px" }}>Wiadomosc</label>
                <textarea id="cm" placeholder="Opowiedz mi o swojej firmie..." required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "14px 16px", color: "#fff", fontSize: "0.95rem", fontFamily: "inherit", outline: "none", resize: "none" as const }} />
              </div>
              <button type="submit" className="glow-btn"
                style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", border: "none", padding: "14px", borderRadius: "12px", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer" }}>
                Wyslij wiadomosc
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`@media(max-width:860px){.contact-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}
