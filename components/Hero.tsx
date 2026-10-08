"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".anim-child").forEach((el, i) => {
              el.style.animationDelay = `${i * 0.12}s`;
              el.classList.add("animate-fade-up");
            });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="start"
      ref={sectionRef}
      aria-label="Sekcja powitalna"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "68px",
      }}
    >
      {/* Background blobs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <div
          className="animate-blob"
          style={{
            position: "absolute",
            top: "-10%",
            left: "20%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="animate-blob"
          style={{
            position: "absolute",
            bottom: "-5%",
            right: "10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            animationDelay: "4s",
          }}
        />
        {/* Grid lines */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left — text */}
        <div>
          {/* Badge */}
          <div
            className="anim-child"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#6366f1",
                boxShadow: "0 0 6px rgba(99,102,241,0.8)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#a5b4fc",
                textTransform: "uppercase",
              }}
            >
              Web Development · Design
            </span>
          </div>

          {/* Headline */}
          <h1
            className="anim-child"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Nowoczesna strona{" "}
            <span className="gradient-text">dla Twojej firmy.</span>
          </h1>

          {/* Sub */}
          <p
            className="anim-child"
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(226,228,240,0.65)",
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            Tworzę nowoczesne, szybkie i responsywne strony internetowe
            dla małych firm i lokalnych biznesów.
          </p>

          {/* Buttons */}
          <div
            className="anim-child"
            style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}
          >
            <button
              onClick={() => scroll("#projekty")}
              className="glow-btn"
              style={{
                background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                color: "#fff",
                border: "none",
                padding: "14px 28px",
                borderRadius: "12px",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "none";
              }}
            >
              Zobacz projekty
            </button>
            <button
              onClick={() => scroll("#kontakt")}
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "14px 28px",
                borderRadius: "12px",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLButtonElement).style.transform = "none";
              }}
            >
              Napisz do mnie
            </button>
          </div>

          {/* Free demo note */}
          <div
            className="anim-child"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7.5" stroke="#6366f1" strokeOpacity="0.5" />
              <path d="M5.5 8.5L7 10L10.5 6.5" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: "0.85rem", color: "rgba(226,228,240,0.45)" }}>
              Bezpłatny projekt demonstracyjny
            </span>
          </div>
        </div>

        {/* Right — mockup */}
        <div
          className="anim-child animate-float hero-mockup"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <BrowserMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase" }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="white" strokeOpacity="0.5" />
          <rect x="7" y="4" width="2" height="5" rx="1" fill="white">
            <animate attributeName="y" values="4;12;4" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding-top: 48px !important;
          }
          .hero-mockup {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}

function BrowserMockup() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "520px",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(99,102,241,0.25)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.05), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(99,102,241,0.12)",
        background: "#0d0d1f",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          background: "#111127",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
            <span key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.05)",
            borderRadius: "6px",
            padding: "5px 12px",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          twoja-firma.pl
        </div>
      </div>

      {/* Page content mockup */}
      <div style={{ padding: "28px 24px", background: "#0d0d1f" }}>
        {/* Nav mockup */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div style={{ width: "80px", height: "10px", background: "rgba(99,102,241,0.5)", borderRadius: "5px" }} />
          <div style={{ display: "flex", gap: "10px" }}>
            {[48, 40, 52, 44].map((w, i) => (
              <div key={i} style={{ width: `${w}px`, height: "7px", background: "rgba(255,255,255,0.1)", borderRadius: "4px" }} />
            ))}
          </div>
        </div>

        {/* Hero mockup */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ width: "60%", height: "12px", background: "rgba(99,102,241,0.3)", borderRadius: "6px", marginBottom: "10px" }} />
          <div style={{ width: "80%", height: "22px", background: "rgba(255,255,255,0.18)", borderRadius: "6px", marginBottom: "8px" }} />
          <div style={{ width: "70%", height: "22px", background: "rgba(255,255,255,0.12)", borderRadius: "6px", marginBottom: "18px" }} />
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ width: "100px", height: "34px", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius: "8px" }} />
            <div style={{ width: "80px", height: "34px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }} />
          </div>
        </div>

        {/* Cards mockup */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {[
            { h: 80, accent: true },
            { h: 80, accent: false },
            { h: 80, accent: false },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                height: `${card.h}px`,
                background: card.accent ? "rgba(99,102,241,0.08)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${card.accent ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "10px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: "5px",
              }}
            >
              <div style={{ width: "70%", height: "6px", background: "rgba(255,255,255,0.15)", borderRadius: "3px" }} />
              <div style={{ width: "90%", height: "5px", background: "rgba(255,255,255,0.07)", borderRadius: "3px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
