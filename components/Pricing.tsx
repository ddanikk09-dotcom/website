"use client";

import { useEffect, useRef } from "react";

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".price-anim").forEach((el, i) => {
              el.style.opacity = "0";
              el.style.transform = "translateY(20px)";
              setTimeout(() => {
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
            });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="cena"
      ref={sectionRef}
      className="section-pad"
      aria-label="Cennik"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          className="price-anim"
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: "12px",
          }}
        >
          Wycena
        </p>
        <h2
          className="price-anim"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "16px",
          }}
        >
          Ile kosztuje strona?
        </h2>
        <p
          className="price-anim"
          style={{
            fontSize: "1.05rem",
            color: "rgba(226,228,240,0.55)",
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
        >
          Każdy projekt jest inny. Cena zależy od zakresu strony, funkcji i
          potrzeb firmy.
        </p>

        {/* Big price block */}
        <div
          className="price-anim glass"
          style={{
            borderRadius: "24px",
            padding: "48px 40px",
            border: "1px solid rgba(99,102,241,0.2)",
            position: "relative",
            overflow: "hidden",
            marginBottom: "24px",
          }}
        >
          {/* Background gradient */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(226,228,240,0.4)",
              marginBottom: "12px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Model cenowy
          </p>
          <p
            className="gradient-text"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              marginBottom: "8px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Wycena indywidualna
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(226,228,240,0.45)",
              lineHeight: 1.6,
              position: "relative",
              zIndex: 1,
              maxWidth: "400px",
              margin: "0 auto 32px",
            }}
          >
            Opowiedz mi o swojej firmie, a przygotuję dopasowaną wycenę bez żadnych zobowiązań.
          </p>

          <button
            onClick={() =>
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
            }
            className="glow-btn"
            style={{
              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
              color: "#fff",
              border: "none",
              padding: "14px 32px",
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity 0.2s, transform 0.2s",
              position: "relative",
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "none";
            }}
          >
            Zapytaj o wycenę
          </button>
        </div>

        <p
          className="price-anim"
          style={{ fontSize: "0.875rem", color: "rgba(226,228,240,0.35)" }}
        >
          Bezpłatna konsultacja · Bez zobowiązań
        </p>
      </div>
    </section>
  );
}
