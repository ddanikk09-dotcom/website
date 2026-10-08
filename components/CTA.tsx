"use client";

export default function CTA() {
  return (
    <section
      aria-label="Wezwanie do działania"
      style={{
        padding: "0 24px 96px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          borderRadius: "24px",
          padding: "clamp(48px, 8vw, 80px) clamp(32px, 6vw, 80px)",
          background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 100%)",
          border: "1px solid rgba(99,102,241,0.2)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "16px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Gotowy na nową stronę?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(226,228,240,0.6)",
            lineHeight: 1.7,
            maxWidth: "500px",
            margin: "0 auto 40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Opowiedz mi o swojej firmie, a przygotuję propozycję dopasowaną
          do Twoich potrzeb.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <button
            onClick={() =>
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
            }
            className="glow-btn"
            style={{
              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
              color: "#fff",
              border: "none",
              padding: "16px 40px",
              borderRadius: "14px",
              fontSize: "1.05rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "none";
            }}
          >
            Napisz do mnie
          </button>
          <p style={{ fontSize: "0.8rem", color: "rgba(226,228,240,0.35)" }}>
            Bezpłatny projekt demonstracyjny
          </p>
        </div>
      </div>
    </section>
  );
}
