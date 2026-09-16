"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCursor } from "./CustomCursor";

const NAV_LINKS = [
  { name: "Process", href: "#process" },
  { name: "Solutions", href: "#solutions" },
  { name: "Get Started", href: "#engagement" },
  { name: "Impact", href: "#impact" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          padding: scrolled ? "10px 14px" : "18px 20px",
          transition: "padding 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <nav
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: scrolled ? "min(1080px, 95%)" : "min(1280px, 96%)",
            borderRadius: scrolled ? "9999px" : "16px",
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(251, 251, 250, 0.88)",
            boxShadow: scrolled
              ? "0 10px 30px -8px rgba(17, 18, 21, 0.1), 0 1px 3px rgba(17, 18, 21, 0.04)"
              : "0 2px 10px rgba(17, 18, 21, 0.03)",
            borderColor: scrolled ? "rgba(17, 18, 21, 0.12)" : "rgba(17, 18, 21, 0.06)",
            border: "1px solid",
            padding: scrolled ? "8px 12px 8px 20px" : "10px 14px 10px 22px",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Brand Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-display)",
              fontSize: "0.95rem",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              color: "var(--text-main)",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "2.5px",
                background: "var(--accent-primary)",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(27, 56, 255, 0.5)",
              }}
            />
            <span>SINGLE SOLUTION</span>
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "2px",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => {
              const isHovered = hoveredLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    position: "relative",
                    padding: "6px 12px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7125rem",
                    fontWeight: 600,
                    color: isHovered ? "var(--text-main)" : "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ position: "relative", zIndex: 2 }}>{link.name}</span>
                  {isHovered && (
                    <motion.div
                      layoutId="nav-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(17, 18, 21, 0.06)",
                        borderRadius: "9999px",
                        zIndex: 1,
                      }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action & CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href="#booking"
              onMouseEnter={() => setCursorType("BOOK")}
              onMouseLeave={() => setCursorType("")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "var(--accent-primary)",
                color: "#FFFFFF",
                padding: scrolled ? "9px 16px" : "11px 20px",
                borderRadius: "9999px",
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow: "0 6px 16px -2px rgba(27, 56, 255, 0.4)",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
              }}
            >
              <span>SCHEDULE A CALL</span>
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(17, 18, 21, 0.05)",
                color: "var(--text-main)",
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "70px",
              left: "14px",
              right: "14px",
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 20px 40px -10px rgba(17, 18, 21, 0.2)",
              border: "1px solid rgba(17, 18, 21, 0.1)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "10px 14px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-main)",
                  borderBottom: "1px solid rgba(17, 18, 21, 0.05)",
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                backgroundColor: "var(--accent-primary)",
                color: "#FFFFFF",
                padding: "12px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.875rem",
                textAlign: "center",
              }}
            >
              SCHEDULE A CALL ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
