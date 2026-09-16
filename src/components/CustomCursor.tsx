"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

type CursorType = "" | "EXPLORE" | "VIEW" | "DRAG" | "BOOK" | "START" | "FIND";

interface CursorContextProps {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
}

const CursorContext = createContext<CursorContextProps>({
  cursorType: "",
  setCursorType: () => {},
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(pointer: fine)").matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) {
    return <CursorContext.Provider value={{ cursorType, setCursorType }}>{children}</CursorContext.Provider>;
  }

  const hasLabel = Boolean(cursorType);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
      {isVisible && (
        <motion.div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            pointerEvents: "none",
            zIndex: 99999,
          }}
        >
          <motion.div
            animate={{
              width: hasLabel ? 76 : 10,
              height: hasLabel ? 76 : 10,
              backgroundColor: hasLabel ? "#1B38FF" : "#111215",
              color: "#FFFFFF",
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 450, damping: 28 }}
            style={{
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: hasLabel
                ? "0 12px 30px rgba(27, 56, 255, 0.45)"
                : "0 0 0 2px rgba(255, 255, 255, 0.8)",
            }}
          >
            {hasLabel && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.15 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  userSelect: "none",
                }}
              >
                {cursorType}
              </motion.span>
            )}
          </motion.div>
        </motion.div>
      )}
    </CursorContext.Provider>
  );
}
