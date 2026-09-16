"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCursor } from "./CustomCursor";

export function ImpactSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const { setCursorType } = useCursor();

  return (
    <section
      id="impact"
      style={{
        position: "relative",
        paddingTop: "clamp(64px, 10vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 120px)",
        backgroundColor: "var(--bg-surface)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "780px", marginBottom: "56px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span className="editorial-label">OUR IMPACT</span>
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
            OUTCOMES THAT <br />
            <span style={{ color: "var(--accent-primary)" }}>MOVED THE NUMBER.</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            A glimpse into how we partner with operators to ship measurable transformation.
          </p>
        </div>

        {/* 3 Bespoke Editorial Case Studies */}
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {/* CASE STUDY 01: Phoenix Trader Funding */}
          <div
            onMouseEnter={() => {
              setHoveredProject("phoenix");
              setCursorType("VIEW");
            }}
            onMouseLeave={() => {
              setHoveredProject(null);
              setCursorType("");
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "center",
              paddingBottom: "48px",
              borderBottom: "1px solid var(--border-hairline)",
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "var(--accent-primary)",
                  }}
                >
                  FINTECH
                </span>
                <span style={{ color: "var(--border-hairline)" }}>•</span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "var(--text-muted)",
                  }}
                >
                  PROJECT 01
                </span>
              </div>

              {/* Number Metric */}
              <div style={{ marginBottom: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3.2rem, 5.5vw, 4.8rem)",
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                    color: "var(--text-main)",
                    display: "block",
                  }}
                >
                  62%
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent-primary)",
                  }}
                >
                  REVENUE INCREASED
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  lineHeight: 1.25,
                }}
              >
                Phoenix Trader Funding - 62% revenue increased compared to 2025
              </h3>

              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: "20px" }}>
                Seamless and enjoyable software is the heart of customer retention and sales. From the first time creating the platform, Phoenix Trader Funding in 2024, to launching its 2.0 in 2026, the revenue of the platform has increased with our engineering role at the core of it.
              </p>

              {/* Capabilities */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                {["STRATEGY", "DESIGN", "ENGINEERING"].map((cap) => (
                  <span
                    key={cap}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      padding: "5px 12px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-hairline)",
                      color: "var(--text-main)",
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="https://phoenixtraderfunding.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7125rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  color: "var(--accent-primary)",
                }}
              >
                <span>VIEW PROJECT</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            {/* Right Visual */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border-hairline)",
                boxShadow: "var(--shadow-lg)",
                aspectRatio: "16 / 10",
                minHeight: "260px",
                backgroundColor: "#0D1117",
              }}
            >
              <Image
                src="/images/phoenix-trader.jpg"
                alt="Phoenix Trader Funding Platform UI"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* CASE STUDY 02: United School Supplies */}
          <div
            onMouseEnter={() => {
              setHoveredProject("uss");
              setCursorType("VIEW");
            }}
            onMouseLeave={() => {
              setHoveredProject(null);
              setCursorType("");
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "center",
              paddingBottom: "48px",
              borderBottom: "1px solid var(--border-hairline)",
            }}
          >
            {/* Left Visual */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border-hairline)",
                boxShadow: "var(--shadow-lg)",
                aspectRatio: "16 / 10",
                minHeight: "260px",
                backgroundColor: "#F8FAFC",
              }}
            >
              <Image
                src="/images/united-school.jpg"
                alt="United School Supplies Case Study"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Right Content */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "var(--accent-primary)",
                  }}
                >
                  EDUCATION
                </span>
                <span style={{ color: "var(--border-hairline)" }}>•</span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "var(--text-muted)",
                  }}
                >
                  PROJECT 02
                </span>
              </div>

              {/* Number Metric */}
              <div style={{ marginBottom: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3.2rem, 5.5vw, 4.8rem)",
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                    color: "var(--text-main)",
                    display: "block",
                  }}
                >
                  17%
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent-primary)",
                  }}
                >
                  NEW CLIENTS ADDED
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  lineHeight: 1.25,
                }}
              >
                United School Supplies - 4 new enterprise level clients compared to 2025
              </h3>

              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: "20px" }}>
                Sales has two parts, knowing who will be interested in your product and how to reach them. Once those two steps are complete and combined with a quality experience, everything starts converting into the number we all love. That&apos;s what our marketing team did for USS, and it resulted in more clients for the business.
              </p>

              {/* Capabilities */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["PERFORMANCE MARKETING", "SALES CAMPAIGN"].map((cap) => (
                  <span
                    key={cap}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      padding: "5px 12px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-hairline)",
                      color: "var(--text-main)",
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CASE STUDY 03: Signs NY */}
          <div
            onMouseEnter={() => {
              setHoveredProject("signs");
              setCursorType("VIEW");
            }}
            onMouseLeave={() => {
              setHoveredProject(null);
              setCursorType("");
            }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Top Text Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "28px",
                alignItems: "end",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      color: "var(--accent-primary)",
                    }}
                  >
                    RETAIL
                  </span>
                  <span style={{ color: "var(--border-hairline)" }}>•</span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      color: "var(--text-muted)",
                    }}
                  >
                    PROJECT 03
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                      fontWeight: 900,
                      lineHeight: 0.95,
                      letterSpacing: "-0.04em",
                      color: "var(--text-main)",
                    }}
                  >
                    32%
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.875rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent-primary)",
                    }}
                  >
                    ORGANIC TRAFFIC UPLIFT
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Signs NY - 32% traffic increased
                </h3>
              </div>

              <div>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.55, color: "var(--text-secondary)", marginBottom: "14px" }}>
                  Signs NY was tricky, as the customer of the business is not your ordinary street traffic, so we came up with a unique strategy that can result into ROI without burning thousands in marketing. As a result year on year traffic is seeing a rise.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["SEO", "AEO", "ENGINEERING"].map((cap) => (
                    <span
                      key={cap}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.6875rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        padding: "5px 12px",
                        borderRadius: "9999px",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border-hairline)",
                        color: "var(--text-main)",
                      }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Full-width Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(260px, 35vw, 440px)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border-hairline)",
                boxShadow: "var(--shadow-lg)",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Image
                src="/images/signs-ny.jpg"
                alt="Signs NY Case Study"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Impact Transition Statement with Oversized Background Typography */}
        <div
          style={{
            position: "relative",
            marginTop: "80px",
            padding: "clamp(36px, 6vw, 64px) 24px",
            textAlign: "center",
            overflow: "hidden",
            borderRadius: "var(--radius-xl)",
            backgroundColor: "var(--bg-primary)",
            border: "1px solid var(--border-hairline)",
          }}
        >
          {/* Contained Background Watermarks */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
              fontWeight: 900,
              color: "rgba(17, 18, 21, 0.03)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              overflow: "hidden",
              zIndex: 0,
            }}
          >
            <span>62%</span>
            <span>17%</span>
            <span>32%</span>
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "var(--text-main)",
                maxWidth: "760px",
                margin: "0 auto",
                wordBreak: "break-word",
              }}
            >
              FIND THE GAP. <br />
              <span style={{ color: "var(--accent-primary)" }}>BUILD THE FIX.</span> <br />
              MOVE THE NUMBER.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
