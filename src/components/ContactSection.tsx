"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { useCursor } from "./CustomCursor";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    whatAreYouBuilding: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setCursorType } = useCursor();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        paddingTop: "clamp(64px, 10vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 120px)",
        backgroundColor: "var(--bg-surface)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div className="container">
        {/* Main Headline */}
        <div style={{ maxWidth: "860px", marginBottom: "48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span className="editorial-label">GET IN TOUCH</span>
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
            YOUR NEXT CHAPTER <br />
            DESERVES THE <br />
            <span style={{ color: "var(--accent-primary)", fontStyle: "italic" }}>
              BEST PARTNER.
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            Tell us what you&apos;re trying to Build. We&apos;ll come back with a plan.
          </p>
        </div>

        {/* Split Layout: Left Project Inquiry, Right Book Consultation */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "stretch",
            marginBottom: "56px",
          }}
        >
          {/* Left: Project Inquiry Form */}
          <div
            style={{
              backgroundColor: "var(--bg-primary)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-hairline)",
              padding: "clamp(24px, 4vw, 40px)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div style={{ marginBottom: "28px" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: "var(--accent-primary)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                PROJECT INQUIRY
              </span>
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                TELL US WHAT YOU&apos;RE TRYING TO BUILD
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "32px 20px",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(0, 200, 83, 0.08)",
                  border: "1px solid rgba(0, 200, 83, 0.25)",
                  textAlign: "center",
                }}
              >
                <CheckCircle2 size={36} color="#00C853" style={{ margin: "0 auto 12px" }} />
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111215", marginBottom: "6px" }}>
                  INQUIRY RECEIVED
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                  We are reviewing your details and will come back with an actionable proposal.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-main)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    FULL NAME
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: "100%",
                      padding: "12px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1.5px solid rgba(17, 18, 21, 0.15)",
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      color: "var(--text-main)",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label
                    htmlFor="workEmail"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-main)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    WORK EMAIL
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: "100%",
                      padding: "12px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1.5px solid rgba(17, 18, 21, 0.15)",
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      color: "var(--text-main)",
                      outline: "none",
                    }}
                  />
                </div>

                {/* What Are You Building */}
                <div>
                  <label
                    htmlFor="whatAreYouBuilding"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-main)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    WHAT ARE YOU BUILDING?
                  </label>
                  <textarea
                    id="whatAreYouBuilding"
                    required
                    rows={3}
                    value={formData.whatAreYouBuilding}
                    onChange={(e) => setFormData({ ...formData, whatAreYouBuilding: e.target.value })}
                    placeholder="Describe your current bottleneck, friction points, or growth goals..."
                    style={{
                      width: "100%",
                      padding: "12px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1.5px solid rgba(17, 18, 21, 0.15)",
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      color: "var(--text-main)",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "var(--text-main)",
                    color: "#FFFFFF",
                    padding: "16px 28px",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: "6px",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <span>{isSubmitting ? "SENDING..." : "SEND INQUIRY"}</span>
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </div>

          {/* Right: Book a Consultation */}
          <div
            id="booking"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              border: "2px solid var(--accent-primary)",
              padding: "clamp(24px, 4vw, 40px)",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {/* 30 MIN Badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "var(--accent-lime)",
                color: "#163300",
                fontFamily: "var(--font-display)",
                fontSize: "0.6875rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                padding: "4px 12px",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Clock size={13} />
              <span>30 MIN</span>
            </div>

            <div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: "var(--accent-primary)",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                BOOK A CONSULTATION
              </span>

              <h3
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  marginBottom: "8px",
                }}
              >
                30-MINUTE WORKING SESSION
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  marginBottom: "24px",
                }}
              >
                Skip the form. Pick a time and we&apos;ll walk through your goals and constraints to a working system.
              </p>

              {/* Calendly Slots Mockup */}
              <div
                style={{
                  padding: "20px",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-hairline)",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "14px",
                  }}
                >
                  <Calendar size={18} color="var(--accent-primary)" />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.7125rem",
                      fontWeight: 800,
                      color: "var(--text-main)",
                    }}
                  >
                    SELECT A TIME ON CALENDLY
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                    gap: "8px",
                  }}
                >
                  {["Morning Session", "Afternoon Session", "Direct Discovery"].map((slot) => (
                    <div
                      key={slot}
                      style={{
                        padding: "8px 6px",
                        borderRadius: "6px",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid var(--border-hairline)",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        textAlign: "center",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Schedule CTA */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCursorType("BOOK")}
              onMouseLeave={() => setCursorType("")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "var(--accent-primary)",
                color: "#FFFFFF",
                padding: "16px 28px",
                borderRadius: "9999px",
                fontFamily: "var(--font-display)",
                fontSize: "0.875rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow: "0 10px 24px rgba(27, 56, 255, 0.35)",
              }}
            >
              <span>SCHEDULE A CALL</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Final Leverage Metaphor Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "24px 32px",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "var(--bg-primary)",
            border: "1px solid var(--border-hairline)",
          }}
        >
          {/* Metaphor */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 800,
              letterSpacing: "0.06em",
            }}
          >
            <span style={{ color: "#FF3B30" }}>PROBLEM</span>
            <span style={{ color: "var(--text-muted)" }}>↓</span>
            <span style={{ color: "var(--accent-primary)" }}>PLAN</span>
            <span style={{ color: "var(--text-muted)" }}>↓</span>
            <span style={{ color: "#00C853" }}>SOLUTION</span>
          </div>

          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "0.04em",
              color: "var(--text-main)",
            }}
          >
            READY WHEN YOU ARE.
          </div>
        </div>
      </div>
    </section>
  );
}
