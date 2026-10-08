"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Strony internetowe",
    desc: "Nowoczesne strony internetowe dopasowane do charakteru Twojej firmy — od projektu po uruchomienie.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Landing Pages",
    desc: "Proste i skuteczne strony stworzone z myślą o pozyskiwaniu klientów i prezentacji oferty.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="6" width="6" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="6" width="6" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Responsywny design",
    desc: "Strona będzie dobrze wyglądać i działać na telefonie, tablecie i komputerze — bez kompromisów.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Opieka nad stroną",
    desc: "Pomoc w aktualizacjach, poprawkach i dalszym rozwoju strony — tak żebyś mógł skupić się na biznesie.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".svc-card").forEach((el, i) => {
              el.style.opacity = "0";
              el.style.transform = "translateY(24px)";
              setTimeout(() => {
                el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 80);
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
      id="uslugi"
      ref={sectionRef}
      className="section-pad"
      aria-label="Usługi"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
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
            Oferta
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              maxWidth: "600px",
            }}
          >
            Co mogę zrobić{" "}
            <span className="gradient-text">dla Twojej firmy?</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="svc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({
  service: s,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isLast = index === services.length - 1;

  return (
    <div
      className={`svc-card glass ${isLast ? "last-svc" : ""}`}
      style={{
        borderRadius: "16px",
        padding: "28px",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.3)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "rgba(99,102,241,0.1)",
          border: "1px solid rgba(99,102,241,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#818cf8",
          marginBottom: "20px",
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {s.icon}
      </div>
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
        }}
      >
        {s.title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "rgba(226,228,240,0.55)", lineHeight: 1.65 }}>
        {s.desc}
      </p>
    </div>
  );
}
