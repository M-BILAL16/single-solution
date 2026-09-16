"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Workflow, Code2, LayoutDashboard, TrendingUp, Check, ArrowRight } from "lucide-react";
import { useCursor } from "./CustomCursor";

interface SolutionItem {
  id: string;
  number: string;
  name: string;
  headline: string;
  copy: string;
  icon: React.ElementType;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "ai_agents",
    number: "01",
    name: "AI AGENTS",
    headline: "Autonomous Task Execution",
    copy: "Handle routine tasks, support requests, and repetitive work automatically.",
    icon: Bot,
  },
  {
    id: "automation_systems",
    number: "02",
    name: "AUTOMATION SYSTEMS",
    headline: "End-to-End Orchestration",
    copy: "Connect your tools and processes, so work happens faster with less manual effort.",
    icon: Workflow,
  },
  {
    id: "custom_software",
    number: "03",
    name: "CUSTOM SOFTWARE",
    headline: "Engineered For Your Model",
    copy: "Build the exact tools your business needs when off-the-shelf systems fall short.",
    icon: Code2,
  },
  {
    id: "internal_dashboards",
    number: "04",
    name: "INTERNAL DASHBOARDS",
    headline: "Single Operational Truth",
    copy: "Give yourself and team the insights they need to monitor performance and act quickly.",
    icon: LayoutDashboard,
  },
  {
    id: "growth_marketing",
    number: "05",
    name: "GROWTH & MARKETING",
    headline: "High-Intent Pipeline",
    copy: "Use SEO, AI search, paid campaigns, and conversion-focused tools to drive sales.",
    icon: TrendingUp,
  },
];

export function SolutionsToolkit() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const { setCursorType } = useCursor();
  const current = SOLUTIONS[activeIdx];

  return (
    <section
      id="solutions"
      style={{
        position: "relative",
        paddingTop: "clamp(64px, 10vw, 110px)",
        paddingBottom: "clamp(64px, 10vw, 110px)",
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "780px", marginBottom: "48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span className="editorial-label">OUR PROCESS</span>
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
            FROM INSIGHT <br />
            <span style={{ color: "var(--accent-primary)" }}>TO IMPACT.</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            A repeatable tool kit designed for enterprise complexity and startup speed.
          </p>
        </div>

        {/* Master-Detail Interactive System */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {/* Left: 5 Solution Selectors */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {SOLUTIONS.map((sol, idx) => {
              const isSelected = activeIdx === idx;
              const Icon = sol.icon;

              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => {
                    setActiveIdx(idx);
                    setCursorType("EXPLORE");
                  }}
                  onMouseLeave={() => setCursorType("")}
                  style={{
                    textAlign: "left",
                    padding: "20px 24px",
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: isSelected ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                    border: isSelected ? "2px solid var(--accent-primary)" : "1px solid var(--border-hairline)",
                    boxShadow: isSelected ? "var(--shadow-md)" : "none",
                    transition: "all 0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          color: isSelected ? "var(--accent-primary)" : "var(--text-muted)",
                        }}
                      >
                        {sol.number}
                      </span>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          letterSpacing: "-0.01em",
                          color: "var(--text-main)",
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        {sol.name}
                      </h3>
                    </div>

                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: isSelected ? "rgba(27, 56, 255, 0.1)" : "rgba(17, 18, 21, 0.04)",
                        color: isSelected ? "var(--accent-primary)" : "var(--text-muted)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                      color: isSelected ? "var(--text-secondary)" : "var(--text-muted)",
                      margin: 0,
                    }}
                  >
                    {sol.copy}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Architecture Simulation Canvas */}
          <div
            onMouseEnter={() => setCursorType("EXPLORE")}
            onMouseLeave={() => setCursorType("")}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-hairline)",
              padding: "clamp(24px, 3.5vw, 36px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "var(--shadow-lg)",
              minHeight: "460px",
              overflow: "hidden",
            }}
          >
            {/* Top Status */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--border-hairline)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent-primary)",
                }}
              >
                LIVE ARCHITECTURE SIMULATION
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#00C853",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#00C853",
                  }}
                />
                ACTIVE
              </span>
            </div>

            {/* Dynamic Visual Content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 0",
              }}
            >
              <AnimatePresence mode="wait">
                {activeIdx === 0 && (
                  /* AI AGENTS VISUAL */
                  <motion.div
                    key="ai_agents"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 800, color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                        INCOMING
                      </span>
                      {["REQUEST", "TASK", "QUESTION", "ACTION"].map((item) => (
                        <div
                          key={item}
                          style={{
                            padding: "6px 10px",
                            backgroundColor: "var(--bg-primary)",
                            border: "1px solid var(--border-hairline)",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "var(--text-secondary)",
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        padding: "20px 14px",
                        borderRadius: "16px",
                        background: "linear-gradient(135deg, #1B38FF 0%, #0E28E0 100%)",
                        color: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 10px 24px rgba(27, 56, 255, 0.35)",
                        textAlign: "center",
                      }}
                    >
                      <Bot size={28} />
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "0.7125rem", fontWeight: 800 }}>
                        AI AGENT
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 800, color: "#00C853", letterSpacing: "0.1em" }}>
                        COMPLETED
                      </span>
                      {["Resolved in 1.2s", "Database Synced", "Ticket Closed", "Client Notified"].map((item) => (
                        <div
                          key={item}
                          style={{
                            padding: "6px 10px",
                            backgroundColor: "rgba(0, 200, 83, 0.08)",
                            border: "1px solid rgba(0, 200, 83, 0.2)",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#007833",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <Check size={12} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeIdx === 1 && (
                  /* AUTOMATION SYSTEMS VISUAL */
                  <motion.div
                    key="automation_systems"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", width: "100%" }}>
                      {["CRM", "BILLING", "SUPPORT", "INVENTORY"].map((tool) => (
                        <div
                          key={tool}
                          style={{
                            padding: "8px 16px",
                            borderRadius: "8px",
                            backgroundColor: "var(--bg-primary)",
                            border: "1px solid var(--border-hairline)",
                            fontFamily: "var(--font-display)",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "var(--text-main)",
                          }}
                        >
                          {tool}
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "var(--accent-primary)",
                        color: "#FFFFFF",
                        padding: "10px 20px",
                        borderRadius: "9999px",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.7125rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        boxShadow: "0 8px 20px rgba(27, 56, 255, 0.3)",
                      }}
                    >
                      <Check size={14} />
                      <span>CONNECTED — ZERO MANUAL HANDOFFS</span>
                    </div>
                  </motion.div>
                )}

                {activeIdx === 2 && (
                  /* CUSTOM SOFTWARE VISUAL */
                  <motion.div
                    key="custom_software"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%", display: "flex", flexDirection: "column", gap: "14px" }}
                  >
                    <div
                      style={{
                        padding: "16px",
                        borderRadius: "10px",
                        backgroundColor: "#111215",
                        color: "#FFFFFF",
                        fontFamily: "monospace",
                        fontSize: "0.7125rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ color: "var(--accent-lime)", marginBottom: "4px" }}>
                        {"// Custom Tooling Architecture"}
                      </div>
                      <div style={{ color: "#94a3b8" }}>
                        {"const system = new CustomPipeline();"}
                      </div>
                      <div style={{ color: "#38bdf8" }}>
                        {"await system.deployTailoredWorkflow();"}
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <div style={{ padding: "12px", borderRadius: "8px", backgroundColor: "var(--bg-primary)", border: "1px solid var(--border-hairline)" }}>
                        <div style={{ fontSize: "0.6875rem", fontWeight: 800, color: "#FF3B30", marginBottom: "2px" }}>
                          RIGID TEMPLATES
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                          Workarounds & limits
                        </div>
                      </div>
                      <div style={{ padding: "12px", borderRadius: "8px", backgroundColor: "rgba(27, 56, 255, 0.05)", border: "1px solid rgba(27, 56, 255, 0.25)" }}>
                        <div style={{ fontSize: "0.6875rem", fontWeight: 800, color: "var(--accent-primary)", marginBottom: "2px" }}>
                          CUSTOM BUILT
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "var(--accent-primary)", fontWeight: 600 }}>
                          Exact operational fit
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeIdx === 3 && (
                  /* INTERNAL DASHBOARDS VISUAL */
                  <motion.div
                    key="internal_dashboards"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%", display: "flex", flexDirection: "column", gap: "14px" }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                      <div style={{ padding: "10px", backgroundColor: "var(--bg-primary)", borderRadius: "8px", border: "1px solid var(--border-hairline)" }}>
                        <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "var(--text-muted)", display: "block" }}>
                          UPTIME
                        </span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
                          99.9%
                        </span>
                      </div>
                      <div style={{ padding: "10px", backgroundColor: "var(--bg-primary)", borderRadius: "8px", border: "1px solid var(--border-hairline)" }}>
                        <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "var(--text-muted)", display: "block" }}>
                          SPEED
                        </span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 800, color: "var(--accent-primary)" }}>
                          140ms
                        </span>
                      </div>
                      <div style={{ padding: "10px", backgroundColor: "var(--bg-primary)", borderRadius: "8px", border: "1px solid var(--border-hairline)" }}>
                        <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "var(--text-muted)", display: "block" }}>
                          STATUS
                        </span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 800, color: "#00C853" }}>
                          LIVE
                        </span>
                      </div>
                    </div>

                    <div style={{ padding: "14px", backgroundColor: "var(--bg-primary)", borderRadius: "8px", border: "1px solid var(--border-hairline)" }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 800, color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>
                        MULTI-STREAM ACTIVITY SIGNALS
                      </span>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "48px" }}>
                        {[35, 60, 45, 80, 65, 95, 85, 100].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              flex: 1,
                              height: `${h}%`,
                              backgroundColor: i === 7 ? "var(--accent-primary)" : "rgba(27, 56, 255, 0.25)",
                              borderRadius: "3px 3px 0 0",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeIdx === 4 && (
                  /* GROWTH & MARKETING VISUAL */
                  <motion.div
                    key="growth_marketing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "16px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 1 140px" }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 800, color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                        CHANNELS
                      </span>
                      {["SEO", "AI SEARCH", "PAID CAMPAIGNS", "CONVERSION"].map((channel) => (
                        <div
                          key={channel}
                          style={{
                            padding: "6px 10px",
                            backgroundColor: "var(--bg-primary)",
                            border: "1px solid var(--border-hairline)",
                            borderRadius: "6px",
                            fontFamily: "var(--font-display)",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "var(--text-main)",
                          }}
                        >
                          {channel}
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <ArrowRight size={20} color="var(--accent-primary)" />
                      <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "var(--accent-primary)" }}>
                        CONVERGES
                      </span>
                    </div>

                    <div
                      style={{
                        flex: "1 1 140px",
                        padding: "24px 16px",
                        borderRadius: "14px",
                        backgroundColor: "var(--accent-primary)",
                        color: "#FFFFFF",
                        textAlign: "center",
                        boxShadow: "0 10px 24px rgba(27, 56, 255, 0.35)",
                      }}
                    >
                      <span style={{ fontSize: "0.6875rem", fontWeight: 800, letterSpacing: "0.12em", color: "rgba(255, 255, 255, 0.8)", display: "block", marginBottom: "2px" }}>
                        DESTINATION
                      </span>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 800 }}>
                        SALES
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom State Caption */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                paddingTop: "14px",
                borderTop: "1px solid var(--border-hairline)",
              }}
            >
              <span style={{ fontSize: "0.7125rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                {current.headline}
              </span>

              <a
                href="#engagement"
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
                <span>Deploy Solution</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
