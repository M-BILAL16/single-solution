"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  number: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    number: "250+",
    label: "PROJECTS DELIVERED",
    sublabel: "Tested automation, AI & software solutions",
  },
  {
    number: "12+",
    label: "ENTERPRISE CLIENTS",
    sublabel: "Partnered with scaling business operators",
  },
  {
    number: "92%",
    label: "CLIENT RETENTION",
    sublabel: "Compounding operational & revenue lift",
  },
  {
    number: "$300K+",
    label: "REVENUE ENABLED",
    sublabel: "Verified bottom-line customer impact",
  },
];

export function HeroStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        paddingTop: "clamp(32px, 5vw, 48px)",
        paddingBottom: "clamp(32px, 5vw, 48px)",
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-hairline)",
        borderBottom: "1px solid var(--border-hairline)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Subtle Top Meta Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.6875rem",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            VALIDATED SYSTEM PERFORMANCE
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--accent-primary)",
            }}
          >
            VERIFIED OPERATIONAL DATA
          </span>
        </div>

        {/* 4 Large Editorial Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "20px 0",
                borderTop: "2px solid var(--text-main)",
              }}
            >
              {/* Metric Counter */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 3.8vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--text-main)",
                  marginBottom: "12px",
                }}
              >
                {stat.number}
              </div>

              {/* Stat Labels */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7125rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-main)",
                  marginBottom: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-primary)",
                    display: "inline-block",
                  }}
                />
                <span>{stat.label}</span>
              </div>

              <p
                style={{
                  fontSize: "0.7125rem",
                  lineHeight: 1.45,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
