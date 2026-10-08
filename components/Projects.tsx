"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    title: "Barber & Co.",
    category: "Barber Shop",
    desc: "Elegancka strona dla miejskiego barbershopu — system rezerwacji, galeria fryzur, cennik i dane kontaktowe.",
    tags: ["Rezerwacje", "Galeria", "Cennik"],
    colors: ["#1a1a2e", "#16213e", "#0f3460"],
    accent: "#e94560",
    icon: "✂️",
  },
  {
    num: "02",
    title: "AutoShine Studio",
    category: "Car Detailing",
    desc: "Premium strona dla studia detailingu — efektowne prezentacje usług, przed/po, pakiety cenowe.",
    tags: ["Premium", "Usługi", "Pakiety"],
    colors: ["#0a0a0a", "#111", "#1a1a1a"],
    accent: "#f59e0b",
    icon: "🚗",
  },
  {
    num: "03",
    title: "Trattoria Bella",
    category: "Restauracja",
    desc: "Apetyczna strona restauracji z menu, możliwością rezerwacji stolika i galerią dań.",
    tags: ["Menu", "Rezerwacja", "Galeria"],
    colors: ["#1a0a00", "#2a1200", "#1a0a00"],
    accent: "#ef4444",
    icon: "🍽️",
  },
  {
    num: "04",
    title: "Glow Beauty Studio",
    category: "Salon Kosmetyczny",
    desc: "Nowoczesna strona salonu kosmetycznego z ofertą zabiegów, cenami i formularzem zapisu.",
    tags: ["Zabiegi", "Zapisy", "Cennik"],
    colors: ["#1a0a1a", "#2a0a2a", "#1a0a1a"],
    accent: "#ec4899",
    icon: "💅",
  },
  {
    num: "05",
    title: "MotoFix Serwis",
    category: "Mechanik",
    desc: "Solidna strona warsztatu samochodowego z zakresem usług, cennikiem i kontaktem.",
    tags: ["Usługi", "Kontakt", "Zaufanie"],
    colors: ["#0a0f1a", "#0d1526", "#0a0f1a"],
    accent: "#3b82f6",
    icon: "🔧",
  },
  {
    num: "06",
    title: "Usługi Wiśniewscy",
    category: "Lokalna Firma",
    desc: "Prosta i skuteczna strona dla lokalnej firmy usługowej — oferta, o nas, kontakt.",
    tags: ["Oferta", "O nas", "Kontakt"],
    colors: ["#071a0f", "#0a2415", "#071a0f"],
    accent: "#10b981",
    icon: "🏢",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".proj-card").forEach((el, i) => {
              el.style.opacity = "0";
              el.style.transform = "translateY(30px)";
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projekty"
      ref={sectionRef}
      className="section-pad"
      aria-label="Projekty"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Heading */}
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
            Portfolio
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
            Moje projekty
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(226,228,240,0.55)", maxWidth: "480px" }}>
            Przykładowe projekty stworzone dla różnych branż.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="proj-grid"
        >
          {projects.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project: p }: { project: (typeof projects)[0] }) {
  return (
    <article
      className="proj-card glass"
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${p.accent}20`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Visual preview */}
      <div
        style={{
          height: "200px",
          background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Mini browser mockup inside */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "75%",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "10px 10px 0 0",
            border: `1px solid ${p.accent}30`,
            borderBottom: "none",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "6px 10px",
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
              <span key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{ padding: "12px 10px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ height: "7px", width: "80%", background: "rgba(255,255,255,0.12)", borderRadius: "4px" }} />
            <div style={{ height: "5px", width: "60%", background: "rgba(255,255,255,0.07)", borderRadius: "4px" }} />
            <div style={{ height: "20px", width: "50%", background: `${p.accent}40`, borderRadius: "4px", marginTop: "4px" }} />
          </div>
        </div>

        {/* Num + icon */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: p.accent,
              background: `${p.accent}18`,
              border: `1px solid ${p.accent}30`,
              borderRadius: "100px",
              padding: "3px 10px",
            }}
          >
            {p.num}
          </span>
        </div>
        <span
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            fontSize: "1.5rem",
          }}
          aria-hidden="true"
        >
          {p.icon}
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: "20px" }}>
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: p.accent,
            marginBottom: "6px",
          }}
        >
          {p.category}
        </p>
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "8px",
            letterSpacing: "-0.02em",
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(226,228,240,0.55)",
            lineHeight: 1.6,
            marginBottom: "16px",
          }}
        >
          {p.desc}
        </p>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
          {p.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "100px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(226,228,240,0.6)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <button
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            background: `${p.accent}15`,
            border: `1px solid ${p.accent}30`,
            color: p.accent,
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = `${p.accent}25`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = `${p.accent}15`;
          }}
          aria-label={`Zobacz projekt ${p.title}`}
        >
          Zobacz projekt
        </button>
      </div>
    </article>
  );
}
