"use client";

import React from "react";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "var(--bg-primary)",
        paddingTop: "clamp(80px, 10vw, 120px)",
        paddingBottom: "48px",
        overflow: "hidden",
      }}
    >
      {/* Subtle 5-Node Schematic Connecting to SINGLE SOLUTION */}
      <div
        style={{
          position: "relative",
          maxWidth: "1100px",
          margin: "0 auto 72px auto",
          padding: "24px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-hairline)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.6875rem",
            fontWeight: 800,
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
            textAlign: "center",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          CONNECTED CONVERGENCE
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          {["AI AGENTS", "AUTOMATION", "SOFTWARE", "DASHBOARDS", "GROWTH"].map((node) => (
            <div
              key={node}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                fontWeight: 800,
                padding: "8px 16px",
                borderRadius: "9999px",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--border-hairline)",
                color: "var(--text-secondary)",
              }}
            >
              {node}
            </div>
          ))}
        </div>

        {/* Central Convergence Node */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "var(--accent-primary)",
              color: "#FFFFFF",
              fontFamily: "var(--font-display)",
              fontSize: "0.875rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              boxShadow: "0 6px 18px rgba(27, 56, 255, 0.35)",
            }}
          >
            SINGLE SOLUTION
          </div>
        </div>
      </div>

      <div className="container">
        {/* Main Footer Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "340px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "var(--text-main)",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: "var(--accent-primary)",
                  display: "inline-block",
                }}
              />
              <span>SINGLE SOLUTION</span>
            </div>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
              One digital partner for every growth problem — websites, automations, AI and the systems in between.
            </p>
          </div>

          {/* Column: GET STARTED */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7125rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "var(--text-main)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              GET STARTED
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <a href="#booking" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  Schedule a Call
                </a>
              </li>
              <li>
                <a href="#engagement" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  Get your AI Audit
                </a>
              </li>
              <li>
                <a href="#contact" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  Send a Query
                </a>
              </li>
            </ul>
          </div>

          {/* Column: SOLUTIONS */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7125rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "var(--text-main)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              SOLUTIONS
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <a href="#solutions" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  Automation Systems
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  Internal Dashboards
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  Growth & Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Column: COMPANY */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7125rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "var(--text-main)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              COMPANY
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <a href="#process" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column: CONTACT US */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7125rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "var(--text-main)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              CONTACT US
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a
                href="tel:+17744616388"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                }}
              >
                <Phone size={16} color="var(--accent-primary)" />
                <span>+1 (774) 461-6388</span>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                <MapPin size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  123 Innovation Drive, Suite 400 <br />
                  San Francisco, CA 94103
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "32px",
            borderTop: "1px solid var(--border-hairline)",
            fontSize: "0.875rem",
            color: "var(--text-muted)",
          }}
        >
          <div>© 2026 Single Solution. All rights reserved.</div>

          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ color: "var(--text-muted)" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "var(--text-muted)" }}>
              Terms
            </a>
            <a href="#" style={{ color: "var(--text-muted)" }}>
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
