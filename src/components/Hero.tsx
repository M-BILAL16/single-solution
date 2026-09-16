"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  Clock,
  Unplug,
  TrendingDown,
  Sparkles,
  Workflow,
  Code2,
  Database,
  Layers,
  Users,
  TrendingUp,
  Sliders,
  CheckCircle2
} from "lucide-react";
import { useCursor } from "./CustomCursor";

interface BusinessNode {
  id: string;
  name: string;
  category: "OPERATIONS" | "ARCHITECTURE" | "GROWTH" | "CUSTOMER";
  icon: React.ElementType;
  isFriction: boolean;
  frictionTag?: "BOTTLENECK" | "DELAY" | "FRICTION" | "OPPORTUNITY";
  subtext: string;
  diagnosedProblem: string;
  solutionFix: string;
  leverageImpact: string;
}

const BUSINESS_NODES: BusinessNode[] = [
  {
    id: "manual_work",
    name: "MANUAL WORK",
    category: "OPERATIONS",
    icon: Clock,
    isFriction: true,
    frictionTag: "BOTTLENECK",
    subtext: "35+ team hrs/wk lost",
    diagnosedProblem: "Repetitive copy-pasting, manual invoicing, and spreadsheet handoffs drain executive bandwidth.",
    solutionFix: "Deploy custom autonomous agents & workflow automation to eliminate manual tasks entirely.",
    leverageImpact: "Reclaims 80%+ operational time instantly",
  },
  {
    id: "disconnected",
    name: "DISCONNECTED SYSTEMS",
    category: "ARCHITECTURE",
    icon: Unplug,
    isFriction: true,
    frictionTag: "DELAY",
    subtext: "Data silos & sync lags",
    diagnosedProblem: "Fragmented tools (CRM, ERP, billing) don't speak to each other, creating blind spots and errors.",
    solutionFix: "Build a central integration mesh syncing client, finance, and operational records in real-time.",
    leverageImpact: "Zero communication latency across platforms",
  },
  {
    id: "sales_gap",
    name: "SALES GAP",
    category: "GROWTH",
    icon: TrendingDown,
    isFriction: true,
    frictionTag: "FRICTION",
    subtext: "High funnel dropout",
    diagnosedProblem: "Acquisition traffic fails to convert into paying deals due to clunky buyer touchpoints.",
    solutionFix: "Engineer high-intent landing funnels, algorithmic retargeting, and frictionless checkout flows.",
    leverageImpact: "+62% revenue acceleration",
  },
  {
    id: "operations",
    name: "OPERATIONS",
    category: "OPERATIONS",
    icon: Sliders,
    isFriction: false,
    subtext: "Team rhythm & execution",
    diagnosedProblem: "Operational processes requiring structured standardization.",
    solutionFix: "Internal operating architecture tuned for startup velocity and enterprise rigor.",
    leverageImpact: "Smooth predictable project delivery",
  },
  {
    id: "automation",
    name: "AUTOMATION",
    category: "OPERATIONS",
    icon: Workflow,
    isFriction: false,
    subtext: "Background relays",
    diagnosedProblem: "Manual tasks waiting to be connected into automated pipelines.",
    solutionFix: "Event-driven webhooks and AI agents handling workflows 24/7.",
    leverageImpact: "Continuous background throughput",
  },
  {
    id: "software",
    name: "SOFTWARE",
    category: "ARCHITECTURE",
    icon: Code2,
    isFriction: false,
    subtext: "Tailored digital tools",
    diagnosedProblem: "Off-the-shelf software imposing frustrating workflow constraints.",
    solutionFix: "Custom bespoke software crafted around your specific business model.",
    leverageImpact: "Complete architectural freedom & scalability",
  },
  {
    id: "data",
    name: "DATA",
    category: "ARCHITECTURE",
    icon: Database,
    isFriction: false,
    subtext: "Single source of truth",
    diagnosedProblem: "Unorganized business metrics scattered across disparate tools.",
    solutionFix: "Real-time telemetry dashboards providing instant operational clarity.",
    leverageImpact: "Decisions backed by live intelligence",
  },
  {
    id: "marketing",
    name: "MARKETING",
    category: "GROWTH",
    icon: Sparkles,
    isFriction: false,
    subtext: "Demand generation",
    diagnosedProblem: "Inconsistent organic & paid customer acquisition volume.",
    solutionFix: "Multi-channel SEO, AI search optimization, and conversion-engineered campaigns.",
    leverageImpact: "Predictable pipeline inflow",
  },
  {
    id: "sales",
    name: "SALES",
    category: "GROWTH",
    icon: TrendingUp,
    isFriction: false,
    subtext: "Closing & deal velocity",
    diagnosedProblem: "Pipeline friction delaying deal closure and contracts.",
    solutionFix: "Streamlined sales conversion tools and automated client onboarding.",
    leverageImpact: "Shortened closing cycles & higher contract size",
  },
  {
    id: "customers",
    name: "CUSTOMERS",
    category: "CUSTOMER",
    icon: Users,
    isFriction: false,
    subtext: "Retention & expansion",
    diagnosedProblem: "Client churn caused by post-purchase service gaps.",
    solutionFix: "Automated client communication loops and delightful digital platforms.",
    leverageImpact: "92% client retention rate",
  },
];

export function Hero() {
  const [selectedId, setSelectedId] = useState<string>("manual_work");
  const { setCursorType } = useCursor();

  const activeNode = BUSINESS_NODES.find((n) => n.id === selectedId) || BUSINESS_NODES[0];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(90px, 13vw, 150px)",
        paddingBottom: "clamp(50px, 8vw, 84px)",
        overflow: "hidden",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "5%",
          width: "min(600px, 90vw)",
          height: "min(600px, 90vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 56, 255, 0.07) 0%, rgba(212, 255, 0, 0.04) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container">
        {/* Top Editorial Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "20px" }}
        >
          <span className="editorial-label">
            Single Solution — Business Diagnostic & Execution
          </span>
        </motion.div>

        {/* Hero Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2.3rem, 5.6vw, 5.4rem)",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            maxWidth: "1150px",
            marginBottom: "28px",
            wordBreak: "break-word",
          }}
        >
          MAKING YOUR BRAND <br />
          <span
            style={{
              color: "var(--accent-primary)",
              fontStyle: "italic",
              display: "inline-block",
            }}
          >
            IMPOSSIBLE
          </span>{" "}
          TO IGNORE.
        </motion.h1>

        {/* Supporting Copy & CTAs */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "28px",
            marginBottom: "48px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
              lineHeight: 1.55,
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: 0,
            }}
          >
            We identify which part of your business is costing you time and money, then we deploy tested solutions to fix it for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <a
              href="#engagement"
              onMouseEnter={() => setCursorType("START")}
              onMouseLeave={() => setCursorType("")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--accent-primary)",
                color: "#FFFFFF",
                padding: "14px 28px",
                borderRadius: "9999px",
                fontFamily: "var(--font-display)",
                fontSize: "0.875rem",
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                boxShadow: "0 10px 24px -4px rgba(27, 56, 255, 0.4)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <span>BUILD AND AUTOMATE</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>

            <a
              href="#solutions"
              onMouseEnter={() => setCursorType("EXPLORE")}
              onMouseLeave={() => setCursorType("")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-main)",
                padding: "14px 26px",
                borderRadius: "9999px",
                fontFamily: "var(--font-display)",
                fontSize: "0.875rem",
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                border: "1px solid var(--border-hairline)",
                boxShadow: "var(--shadow-sm)",
                transition: "transform 0.2s ease, background-color 0.2s ease",
              }}
            >
              <span>GROW AND ACQUIRE</span>
              <ArrowDownRight size={16} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>

        {/* -------------------------------------------------------------
            RE-ENGINEERED: BESPOKE INTERACTIVE BUSINESS SYSTEM BOARD
            ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-hairline)",
            boxShadow: "var(--shadow-xl)",
            overflow: "hidden",
          }}
        >
          {/* Top Board Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "14px",
              padding: "18px 24px",
              borderBottom: "1px solid var(--border-hairline)",
              backgroundColor: "rgba(250, 249, 246, 0.8)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#00C853",
                  display: "inline-block",
                  boxShadow: "0 0 10px #00C853",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-main)",
                }}
              >
                INTERACTIVE BUSINESS SYSTEM DIAGNOSTIC
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontSize: "0.7125rem",
                color: "var(--text-secondary)",
                fontWeight: 600,
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF3B30" }} />
                Identified Friction Zones
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--accent-primary)" }} />
                Subsystem Architecture
              </span>
            </div>
          </div>

          {/* Interactive Node Matrix */}
          <div
            style={{
              padding: "clamp(20px, 3vw, 32px)",
              backgroundColor: "#FAF9F6",
              borderBottom: "1px solid var(--border-hairline)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6875rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "16px",
              }}
            >
              CLICK OR HOVER ANY COMPONENT TO DIAGNOSE FRICTION
            </div>

            {/* Grid of 10 Distinct Interactive System Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                gap: "14px",
              }}
            >
              {BUSINESS_NODES.map((node) => {
                const isSelected = selectedId === node.id;
                const Icon = node.icon;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedId(node.id)}
                    onMouseEnter={() => {
                      setSelectedId(node.id);
                      setCursorType("FIND");
                    }}
                    onMouseLeave={() => setCursorType("")}
                    style={{
                      textAlign: "left",
                      padding: "16px 18px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: isSelected
                        ? node.isFriction ? "#FFF5F5" : "rgba(27, 56, 255, 0.05)"
                        : "#FFFFFF",
                      border: isSelected
                        ? node.isFriction ? "2px solid #FF3B30" : "2px solid var(--accent-primary)"
                        : node.isFriction ? "1px solid rgba(255, 59, 48, 0.3)" : "1px solid var(--border-hairline)",
                      boxShadow: isSelected
                        ? node.isFriction ? "0 8px 20px -4px rgba(255, 59, 48, 0.25)" : "0 8px 20px -4px rgba(27, 56, 255, 0.25)"
                        : "var(--shadow-sm)",
                      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "105px",
                    }}
                  >
                    {/* Top Row: Icon + Badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          backgroundColor: node.isFriction
                            ? isSelected ? "#FF3B30" : "rgba(255, 59, 48, 0.1)"
                            : isSelected ? "var(--accent-primary)" : "rgba(17, 18, 21, 0.05)",
                          color: isSelected
                            ? "#FFFFFF"
                            : node.isFriction ? "#FF3B30" : "var(--text-main)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Icon size={16} />
                      </div>

                      {/* Friction Pill */}
                      {node.isFriction && node.frictionTag && (
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "0.625rem",
                            fontWeight: 900,
                            letterSpacing: "0.08em",
                            backgroundColor: "#FF3B30",
                            color: "#FFFFFF",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            boxShadow: "0 2px 6px rgba(255, 59, 48, 0.3)",
                          }}
                        >
                          {node.frictionTag}
                        </span>
                      )}
                    </div>

                    {/* Bottom: Node Name & Subtext */}
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.875rem",
                          fontWeight: 800,
                          letterSpacing: "0.02em",
                          color: isSelected
                            ? node.isFriction ? "#D32F2F" : "var(--accent-primary)"
                            : "var(--text-main)",
                          marginBottom: "2px",
                        }}
                      >
                        {node.name}
                      </div>

                      <div
                        style={{
                          fontSize: "0.7125rem",
                          color: node.isFriction ? "#FF3B30" : "var(--text-muted)",
                          fontWeight: node.isFriction ? 700 : 500,
                        }}
                      >
                        {node.subtext}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dedicated Diagnostic Telemetry Panel */}
          <div
            style={{
              padding: "clamp(20px, 3vw, 28px) clamp(24px, 4vw, 36px)",
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Top diagnostic header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                borderBottom: "1px solid var(--border-hairline)",
                paddingBottom: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    backgroundColor: activeNode.isFriction ? "rgba(255, 59, 48, 0.1)" : "rgba(27, 56, 255, 0.08)",
                    color: activeNode.isFriction ? "#D32F2F" : "var(--accent-primary)",
                  }}
                >
                  {activeNode.isFriction ? "DIAGNOSED BOTTLENECK" : "SUBSYSTEM TELEMETRY"}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    margin: 0,
                    color: "var(--text-main)",
                  }}
                >
                  {activeNode.name}
                </h3>
              </div>

              {/* Core Philosophy Reveal */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.875rem",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  color: "var(--text-main)",
                }}
              >
                FIND THE GAP. <span style={{ color: "var(--accent-primary)" }}>FIX THE RIGHT THING.</span>
              </div>
            </div>

            {/* Diagnostic Content: Problem vs Solution */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                alignItems: "stretch",
              }}
            >
              {/* Problem Statement */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: activeNode.isFriction ? "rgba(255, 59, 48, 0.04)" : "var(--bg-primary)",
                  border: activeNode.isFriction ? "1px solid rgba(255, 59, 48, 0.2)" : "1px solid var(--border-hairline)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: activeNode.isFriction ? "#D32F2F" : "var(--text-muted)",
                    marginBottom: "6px",
                  }}
                >
                  SYSTEM FRICTION / INEFFICIENCY
                </div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>
                  {activeNode.diagnosedProblem}
                </p>
              </div>

              {/* Single Solution Targeted Intervention */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "rgba(27, 56, 255, 0.04)",
                  border: "1px solid rgba(27, 56, 255, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
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
                      marginBottom: "6px",
                    }}
                  >
                    <CheckCircle2 size={13} />
                    <span>SINGLE SOLUTION INTERVENTION</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>
                    {activeNode.solutionFix}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px solid rgba(27, 56, 255, 0.12)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--accent-primary)",
                    }}
                  >
                    {activeNode.leverageImpact}
                  </span>

                  <a
                    href="#clarity"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--accent-primary)",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>View Transformation</span>
                    <ArrowDownRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
