"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";
import { useCursor } from "./CustomCursor";

interface Transformation {
  id: string;
  problem: string;
  solution: string;
  impactMetric: string;
  problemDetail: string;
  solutionDetail: string;
}

const TRANSFORMATIONS: Transformation[] = [
  {
    id: "manual",
    problem: "MANUAL WORK",
    solution: "AUTOMATION",
    impactMetric: "85% reduction in repetitive hours",
    problemDetail: "Tedious spreadsheet transfers, invoice sorting, and manual handoffs eating executive time.",
    solutionDetail: "Autonomous background workflows and webhook relays running silently 24/7.",
  },
  {
    id: "sales",
    problem: "SALES GAP",
    solution: "PERFORMANCE MARKETING",
    impactMetric: "+4 new enterprise clients closed",
    problemDetail: "High traffic with leaky conversion funnels and unquantified pipeline dropout.",
    solutionDetail: "Precision intent targeting, conversion-optimized funnels, and programmatic outbound.",
  },
  {
    id: "systems",
    problem: "DISCONNECTED SYSTEMS",
    solution: "CENTRAL INTEGRATION",
    impactMetric: "Zero data latency across tools",
    problemDetail: "Fragmented CRM, ERP, and communication tools requiring redundant double-entry.",
    solutionDetail: "Unified real-time API mesh syncing customer, financial, and operational records.",
  },
];

export function ClaritySection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const { setCursorType } = useCursor();

  const handleSelectTransformation = (index: number) => {
    setIsScanning(true);
    setActiveTab(index);
    setTimeout(() => setIsScanning(false), 500);
  };

  const current = TRANSFORMATIONS[activeTab];

  return (
    <section
      id="clarity"
      style={{
        position: "relative",
        paddingTop: "clamp(64px, 10vw, 110px)",
        paddingBottom: "clamp(64px, 10vw, 110px)",
        backgroundColor: "var(--bg-surface)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "780px", marginBottom: "48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span className="editorial-label">CLARITY BEFORE COMPLEXITY</span>
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
            FIND THE <br />
            <span style={{ color: "var(--accent-primary)" }}>LEVERAGE FIRST.</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            We see the whole business, find the highest-leverage gap, then apply the right solution.
          </p>
        </div>

        {/* Stage 1: UNDERSTAND YOUR BUSINESS */}
        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-hairline)",
            padding: "clamp(24px, 4vw, 40px)",
            marginBottom: "36px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          {/* Stage 1 Top Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "16px",
              paddingBottom: "24px",
              borderBottom: "1px solid var(--border-hairline)",
              marginBottom: "28px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--accent-primary)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                STAGE 01 — UNDERSTAND
              </span>
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                YOUR BUSINESS
              </h3>
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                maxWidth: "380px",
                margin: 0,
              }}
            >
              See the whole system before prescribing a move. Single Solution diagnoses before prescribing.
            </p>
          </div>

          {/* Transformation Selectors */}
          <div style={{ marginBottom: "24px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6875rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                display: "block",
                marginBottom: "12px",
              }}
            >
              IDENTIFY THE OPPORTUNITY
            </span>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "12px",
              }}
            >
              {TRANSFORMATIONS.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectTransformation(idx)}
                    onMouseEnter={() => setCursorType("FIND")}
                    onMouseLeave={() => setCursorType("")}
                    style={{
                      textAlign: "left",
                      padding: "16px 20px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: isActive ? "#FFFFFF" : "rgba(17, 18, 21, 0.03)",
                      border: isActive ? "2px solid var(--accent-primary)" : "1px solid var(--border-hairline)",
                      boxShadow: isActive ? "var(--shadow-md)" : "none",
                      transition: "all 0.2s ease",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.6875rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        color: isActive ? "var(--accent-primary)" : "var(--text-muted)",
                      }}
                    >
                      TRANSFORMATION 0{idx + 1}
                    </span>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                        fontWeight: 800,
                        color: "var(--text-main)",
                      }}
                    >
                      <span style={{ color: isActive ? "#FF3B30" : "inherit" }}>{item.problem}</span>
                      <ArrowRight size={14} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      <span style={{ color: isActive ? "var(--accent-primary)" : "inherit" }}>
                        {item.solution}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Transformation Stage Canvas */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-hairline)",
              padding: "clamp(20px, 3vw, 32px)",
              overflow: "hidden",
            }}
          >
            {/* Laser Scanning Line Animation */}
            <AnimatePresence>
              {isScanning && (
                <motion.div
                  initial={{ left: "0%", opacity: 1 }}
                  animate={{ left: "100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background: "linear-gradient(to bottom, #1B38FF, #D4FF00)",
                    boxShadow: "0 0 16px #1B38FF",
                    zIndex: 20,
                    pointerEvents: "none",
                  }}
                />
              )}
            </AnimatePresence>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                alignItems: "center",
              }}
            >
              {/* Diagnosed Bottleneck */}
              <div
                style={{
                  padding: "20px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(255, 59, 48, 0.04)",
                  border: "1.5px dashed rgba(255, 59, 48, 0.35)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: "#D32F2F",
                    marginBottom: "8px",
                  }}
                >
                  DIAGNOSED BOTTLENECK
                </div>

                <h4
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#111215",
                    marginBottom: "8px",
                  }}
                >
                  {current.problem}
                </h4>

                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                  {current.problemDetail}
                </p>
              </div>

              {/* Transition Indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  padding: "8px",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-primary)",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px rgba(27, 56, 255, 0.35)",
                  }}
                >
                  <RefreshCw size={18} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-primary)" }}>
                  REORGANIZES TO
                </div>
              </div>

              {/* Deployed High-Leverage Solution */}
              <div
                style={{
                  padding: "20px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(27, 56, 255, 0.04)",
                  border: "1.5px solid rgba(27, 56, 255, 0.25)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: "var(--accent-primary)",
                    marginBottom: "8px",
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>TARGETED INTERVENTION</span>
                </div>

                <h4
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--accent-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {current.solution}
                </h4>

                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "12px", lineHeight: 1.5 }}>
                  {current.solutionDetail}
                </p>

                <div
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                    backgroundColor: "rgba(212, 255, 0, 0.4)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {current.impactMetric}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage 2: EXECUTE THE RIGHT SOLUTION */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            padding: "24px 32px",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "var(--bg-primary)",
            border: "1px solid var(--border-hairline)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6875rem",
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent-primary)",
                display: "block",
                marginBottom: "4px",
              }}
            >
              STAGE 02 — EXECUTE
            </span>
            <h3
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              THE RIGHT SOLUTION
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: "4px 0 0 0" }}>
              A focused combination built around the opportunity.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 800,
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>CLARITY</span>
            <ArrowRight size={18} color="var(--accent-primary)" />
            <span style={{ color: "var(--accent-primary)" }}>ACTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
