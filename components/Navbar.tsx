"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Start", href: "#start" },
  { label: "Projekty", href: "#projekty" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Jak działam", href: "#jak-dzialm" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
          background: scrolled
            ? "rgba(7,7,15,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
        }}
        role="banner"
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          aria-label="Nawigacja główna"
        >
          {/* Logo */}
          <a
            href="#start"
            onClick={(e) => { e.preventDefault(); handleClick("#start"); }}
            style={{
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            aria-label="Daniło Website — przejdź na górę"
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
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              D
            </span>
            Daniło Website
          </a>

          {/* Desktop nav */}
          <ul
            style={{
              display: "flex",
              gap: "2px",
              listStyle: "none",
              alignItems: "center",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                  style={{
                    color: "rgba(226,228,240,0.7)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    padding: "7px 14px",
                    borderRadius: "8px",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(226,228,240,0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); handleClick("#kontakt"); }}
              className="hidden-mobile"
              style={{
                background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                color: "#fff",
                textDecoration: "none",
                padding: "9px 20px",
                borderRadius: "10px",
                fontSize: "0.875rem",
                fontWeight: 600,
                transition: "opacity 0.2s, box-shadow 0.2s",
                boxShadow: "0 0 16px rgba(99,102,241,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              Napisz do mnie
            </a>

            {/* Burger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={open}
              className="show-mobile"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "2px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "transform 0.25s, opacity 0.25s",
                  transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "2px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "opacity 0.25s",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "2px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "transform 0.25s",
                  transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            transition: "opacity 0.25s",
            opacity: open ? 1 : 0,
          }}
        />
        {/* panel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "min(320px, 90vw)",
            background: "rgba(10,10,22,0.97)",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "80px 28px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
          role="dialog"
          aria-label="Menu nawigacyjne"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
              style={{
                color: "rgba(226,228,240,0.8)",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                padding: "14px 16px",
                borderRadius: "10px",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(99,102,241,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(226,228,240,0.8)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); handleClick("#kontakt"); }}
            style={{
              marginTop: "16px",
              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 20px",
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Napisz do mnie
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
