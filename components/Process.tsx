"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Kontakt",
    desc: "Piszesz do mnie i opowiadasz o swojej firmie — czym się zajmujesz, czego potrzebujesz.",
    color: "#6366f1",
  },
  {
    num: "02",
    title: "Projekt",
    desc: "Przygotowuję bezpłatny projekt demonstracyjny, żebyś mógł zobaczyć jak może wyglądać Twoja strona.",
    color: "#8b5cf6",
  },
  {
    num: "03",
    title: "Realizacja",
    desc: "Po akceptacji projektu tworzę kompletną stronę internetową — responsywną, szybką i gotową do działania.",
    color: "#a78bfa",
  },
  {
    num: "04",
    title: "Publikacja",
    desc: "Uruchamiam stronę, dbam o jej ustawienia i przygotowuję ją do działania w internecie.",
    color: "#c4b5fd",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".step-card").forEach((el, i) => {
              el.style.opacity = "0";
              el.style.transform = "translateY(24px)";
              setTimeout(() => {
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
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

  return (
    <section
      id="jak-dzialm"
      ref={sectionRef}
      className="section-pad"
      aria-label="Jak działam"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#818cf8",
              marginBottom: "12px",
            }}
          >
            Proces
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Jak działam?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(226,228,240,0.5)", maxWidth: "440px", margin: "0 auto" }}>
            Prosty i przejrzysty proces — od pierwszego kontaktu do gotowej strony.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Horizontal line desktop */}
          <div
            aria-hidden="true"
            className="timeline-line"
            style={{
              position: "absolute",
              top: "40px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.3) 20%, rgba(139,92,246,0.3) 50%, rgba(196,181,253,0.3) 80%, transparent 100%)",
              zIndex: 0,
            }}
          />

          <div
            className="steps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="step-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "0",
                }}
              >
                {/* Circle */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle at center, ${step.color}18 0%, transparent 70%)`,
                    border: `1px solid ${step.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "28px",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${step.color}25, ${step.color}10)`,
                      border: `1px solid ${step.color}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        color: step.color,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(226,228,240,0.5)",
                    lineHeight: 1.65,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .timeline-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
