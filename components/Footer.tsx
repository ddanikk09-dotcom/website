"use client";

const footerLinks = [
  { label: "Start", href: "#start" },
  { label: "Projekty", href: "#projekty" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Kontakt", href: "#kontakt" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/webby_danilo" },
  { label: "Facebook", href: "https://www.facebook.com/share/14wkNYjgSDf/" },
];

export default function Footer() {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 24px 32px",
      }}
      role="contentinfo"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#start"
              onClick={(e) => { e.preventDefault(); scroll("#start"); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
                aria-hidden="true"
              >
                D
              </span>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", letterSpacing: "-0.02em" }}>
                Daniło Website
              </span>
            </a>
            <p style={{ fontSize: "0.85rem", color: "rgba(226,228,240,0.35)", maxWidth: "220px", lineHeight: 1.6 }}>
              Nowoczesne strony internetowe dla małych firm.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Nawigacja stopki">
            <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scroll(l.href); }}
                    style={{
                      color: "rgba(226,228,240,0.45)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(226,228,240,0.45)"; }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(226,228,240,0.45)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(226,228,240,0.45)"; }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "24px",
            fontSize: "0.8rem",
            color: "rgba(226,228,240,0.25)",
            textAlign: "center",
          }}
        >
          © 2026 Daniło Website. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
