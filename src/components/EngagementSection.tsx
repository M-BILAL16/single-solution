"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Sparkles, Compass, MapPin } from "lucide-react";
import { useCursor } from "./CustomCursor";

export function EngagementSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { setCursorType } = useCursor();

  return (
    <section
      id="engagement"
      style={{
        position: "relative",
        paddingTop: "clamp(64px, 10vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 120px)",
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "780px", marginBottom: "48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span className="editorial-label">GET YOURSELF STARTED</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.4rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
              textTransform: "uppercase",
              wordBreak: "break-word",
            }}
          >
            THE MAP BEFORE <br />
            <span style={{ color: "var(--accent-primary)" }}>THE MILES.</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            Three ways to engage, each card is a real starting point — that can turn your idea into a reality within the next 60 Days.
          </p>
        </div>

        {/* Sequential Engagement Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
            marginBottom: "40px",
          }}
        >
          {/* STEP 01 */}
          <div
            onMouseEnter={() => {
              setHoveredCard(1);
              setCursorType("START");
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              setCursorType("");
            }}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(24px, 3.5vw, 36px)",
              border: "1px solid var(--border-hairline)",
              boxShadow: hoveredCard === 1 ? "var(--shadow-lg)" : "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
            }}
          >
            <div>
              {/* Header Meta */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "var(--text-muted)",
                  }}
                >
                  STEP 01
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "var(--accent-primary)",
                  }}
                >
                  FREE
                </span>
              </div>

              {/* Title & Subheading */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}
              >
                DISCOVERY CALL
              </h3>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--accent-primary)",
                  marginBottom: "14px",
                }}
              >
                FIND THE GAP
              </div>

              <p style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--text-secondary)", marginBottom: "20px" }}>
                In this discovery call we discover how your business works, learn about your problems and identify where AI and automation can create the biggest impact for you.
              </p>

              {/* Diagnostic Radar Graphic */}
              <div
                style={{
                  padding: "14px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-hairline)",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Compass size={16} color="var(--accent-primary)" />
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)" }}>
                  System scanning & leverage audit
                </div>
              </div>
            </div>

            <div>
              {/* Duration */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  marginBottom: "14px",
                }}
              >
                <Clock size={13} />
                <span>DURATION - 30 MINUTES</span>
              </div>

              {/* CTA Button */}
              <a
                href="#booking"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border-hairline)",
                  padding: "12px 18px",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7125rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "background-color 0.2s",
                }}
              >
                <span>START WITH DIAGNOSIS</span>
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* STEP 02 — RECOMMENDED */}
          <div
            onMouseEnter={() => {
              setHoveredCard(2);
              setCursorType("START");
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              setCursorType("");
            }}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(24px, 3.5vw, 36px)",
              border: "2px solid var(--accent-primary)",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {/* RECOMMENDED Badge */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                backgroundColor: "var(--accent-lime)",
                color: "#163300",
                fontFamily: "var(--font-display)",
                fontSize: "0.625rem",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "3px 10px",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Sparkles size={11} />
              <span>RECOMMENDED</span>
            </div>

            <div>
              {/* Header Meta */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "var(--accent-primary)",
                  }}
                >
                  STEP 02
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  $2,500
                </span>
              </div>

              {/* Title & Subheading */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}
              >
                AI AUDIT
              </h3>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--accent-primary)",
                  marginBottom: "14px",
                }}
              >
                PROPOSE THE ROADMAP
              </div>

              <p style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--text-secondary)", marginBottom: "20px" }}>
                We turn uncertainty into a clear proposal and roadmap. Identifying what to automate, where to start, and which specific changes will deliver the greatest savings in time and cost.
              </p>

              {/* Roadmap Visual */}
              <div
                style={{
                  padding: "14px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(27, 56, 255, 0.04)",
                  border: "1px solid rgba(27, 56, 255, 0.15)",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <MapPin size={16} color="var(--accent-primary)" />
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-primary)" }}>
                  High-leverage roadmap & ROI model
                </div>
              </div>
            </div>

            <div>
              {/* Duration */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "var(--accent-primary)",
                  marginBottom: "14px",
                }}
              >
                <Clock size={13} />
                <span>DURATION - 10 DAYS</span>
              </div>

              {/* CTA Button */}
              <a
                href="#booking"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "var(--accent-primary)",
                  color: "#FFFFFF",
                  padding: "14px 20px",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7125rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  boxShadow: "0 8px 20px rgba(27, 56, 255, 0.35)",
                  transition: "background-color 0.2s",
                }}
              >
                <span>GET A ROADMAP</span>
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* STEP 03 */}
          <div
            onMouseEnter={() => {
              setHoveredCard(3);
              setCursorType("START");
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              setCursorType("");
            }}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(24px, 3.5vw, 36px)",
              border: "1px solid var(--border-hairline)",
              boxShadow: hoveredCard === 3 ? "var(--shadow-lg)" : "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
            }}
          >
            <div>
              {/* Header Meta */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "var(--text-muted)",
                  }}
                >
                  STEP 03
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  $15K-50K
                </span>
              </div>

              {/* Title & Subheading */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}
              >
                BUILD & AUTOMATE
              </h3>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--accent-primary)",
                  marginBottom: "14px",
                }}
              >
                PAPER TO PRODUCT
              </div>

              <p style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--text-secondary)", marginBottom: "20px" }}>
                Once the plan is clear, execution becomes a matter of time. We then turn ideas into working systems that can start living and creating value in the real world.
              </p>

              {/* Working Pipeline Visual */}
              <div
                style={{
                  padding: "12px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-hairline)",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-display)",
                    color: "var(--text-main)",
                  }}
                >
                  <span>Plan</span>
                  <span style={{ color: "var(--accent-primary)" }}>→</span>
                  <span>Build</span>
                  <span style={{ color: "var(--accent-primary)" }}>→</span>
                  <span>Connect</span>
                  <span style={{ color: "var(--accent-primary)" }}>→</span>
                  <span style={{ color: "#00C853" }}>Live</span>
                </div>
              </div>
            </div>

            <div>
              {/* Duration */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  marginBottom: "14px",
                }}
              >
                <Clock size={13} />
                <span>DURATION - 45 DAYS APPROX.</span>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border-hairline)",
                  padding: "12px 18px",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7125rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "background-color 0.2s",
                }}
              >
                <span>BUILD THE SOLUTION</span>
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Engagement Flow Progress Connection Indicator */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            textAlign: "center",
            paddingTop: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-display)",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
            }}
          >
            <span>DISCOVER</span>
            <span style={{ color: "var(--accent-primary)" }}>↓</span>
            <span>ROADMAP</span>
            <span style={{ color: "var(--accent-primary)" }}>↓</span>
            <span>BUILD</span>
          </div>

          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              fontWeight: 800,
              color: "var(--text-main)",
              letterSpacing: "-0.01em",
            }}
          >
            FROM GAP <span style={{ color: "var(--accent-primary)" }}>TO WORKING SYSTEM.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
