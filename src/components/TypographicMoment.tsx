"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const WORDS = [
  { word: "UNDERSTAND.", highlight: false },
  { word: "IDENTIFY.", highlight: false },
  { word: "EXECUTE.", highlight: true },
  { word: "IMPACT.", highlight: false },
];

export function TypographicMoment() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        paddingTop: "clamp(60px, 9vw, 110px)",
        paddingBottom: "clamp(60px, 9vw, 110px)",
        backgroundColor: "var(--bg-surface)",
        borderBottom: "1px solid var(--border-hairline)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(8px, 1.5vw, 18px)",
            maxWidth: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.6875rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "4px",
            }}
          >
            THE CONTINUOUS CYCLE
          </span>

          {WORDS.map((item, idx) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0.2, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 6vw, 5.4rem)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: item.highlight ? "var(--accent-primary)" : "var(--text-main)",
                userSelect: "none",
                wordBreak: "break-word",
              }}
            >
              {item.word}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
