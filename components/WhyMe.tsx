"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Nowoczesny design",
    desc: "Strony dopasowane do współczesnych standardów — estetyczne, przejrzyste i profesjonalne.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 7h6M9 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Responsywność",
    desc: "Idealne działanie na każdym urządzeniu — telefonie, tablecie i komputerze.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Szybkość",
    desc: "Lekka i szybka strona — ładuje się błyskawicznie, co przekłada się na lepsze wyniki.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Indywidualne podejście",
    desc: "Każdy projekt tworzę z myślą o konkretnej firmie i jej klientach — bez gotowych szablonów.",
  },
];

export default function WhyMe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".why-item").forEach((el, i) => {
              el.style.opacity = "0";
              el.style.transform = "translateX(-20px)";
              setTimeout(() => {
                el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                el.style.opacity = "1";
                el.style.transform = "translateX(0)";
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
      id="dlaczego"
      ref={sectionRef}
      className="section-pad"
      aria-label="Dlaczego Daniło Website"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="why-grid"
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#818cf8",
              marginBottom: "16px",
            }}
          >
            Dlaczego ja?
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
          >
            Dlaczego warto ze mną{" "}
            <span className="gradient-text">współpracować?</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(226,228,240,0.55)",
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            Tworzę strony, które nie tylko dobrze wyglądają — ale przede wszystkim
            działają i przynoszą klientów. Każdy projekt to osobna historia.
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
            Porozmawiajmy
          </button>
        </div>

        {/* Right — reasons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {reasons.map((r, i) => (
            <div
              key={i}
              className="why-item glass"
              style={{
                borderRadius: "14px",
                padding: "20px 24px",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#818cf8",
                  flexShrink: 0,
                }}
              >
                {r.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(226,228,240,0.5)", lineHeight: 1.6 }}>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
