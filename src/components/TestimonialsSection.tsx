"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCursor } from "./CustomCursor";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Their high level of capability made them a real pleasure to work with. They provided useful suggestions along the way that helped to improve the overall outcome of our project.",
    name: "STEVE BENKO",
    role: "Co-Founder",
    company: "United School Supplies",
    image: "/images/steve-benko.jpg",
  },
  {
    quote:
      "With 12 hours difference in time, communication was not affected as they were always very responsive to any questions or concerns i may have had. If you want quality, then hire them. You'll be in great hands.",
    name: "SABRINA MCDONALD",
    role: "Founder",
    company: "City Eats CA",
    image: "/images/sabrina-mcdonald.jpg",
  },
  {
    quote:
      "It's beautiful to see quality work without structural flaws or dirty shortcuts. They listen well to the feedback which is crucial for good software.",
    name: "VAN DYKE",
    role: "Founder",
    company: "Bloodwork Blueprint",
    image: "/images/van-dyke.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { setCursorType } = useCursor();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        paddingTop: "clamp(64px, 10vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 120px)",
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-hairline)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "780px", marginBottom: "48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span className="editorial-label">WHAT PEOPLE SAID ABOUT US</span>
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
            OPERATORS WHO <br />
            CHOSE US — <br />
            <span style={{ color: "var(--accent-primary)" }}>AND STAYED.</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            Everybody loves praise and appreciation, so we always document ours.
          </p>
        </div>

        {/* Editorial Testimonial Card */}
        <div
          onMouseEnter={() => setCursorType("DRAG")}
          onMouseLeave={() => setCursorType("")}
          style={{
            position: "relative",
            backgroundColor: "#FFFFFF",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-hairline)",
            boxShadow: "var(--shadow-lg)",
            padding: "clamp(24px, 4vw, 48px)",
            minHeight: "380px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top Meta Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            {/* 5-Star Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
              ))}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  marginLeft: "8px",
                  color: "var(--text-main)",
                }}
              >
                5.0 VERIFIED OPERATOR RATING
              </span>
            </div>

            {/* Slide Counter */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7125rem",
                fontWeight: 800,
                color: "var(--text-muted)",
              }}
            >
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </div>
          </div>

          {/* Quote */}
          <div style={{ position: "relative", marginBottom: "32px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <blockquote
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.15rem, 2.2vw, 1.65rem)",
                    fontWeight: 600,
                    lineHeight: 1.45,
                    letterSpacing: "-0.015em",
                    color: "var(--text-main)",
                    margin: 0,
                    wordBreak: "break-word",
                  }}
                >
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Meta & Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
              paddingTop: "20px",
              borderTop: "1px solid var(--border-hairline)",
            }}
          >
            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  position: "relative",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--accent-primary)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="50px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    color: "var(--text-main)",
                  }}
                >
                  {current.name}
                </div>
                <div style={{ fontSize: "0.7125rem", color: "var(--text-secondary)" }}>
                  {current.role}, {current.company}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-hairline)",
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-hairline)",
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
