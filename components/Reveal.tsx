"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Splits text into words that slide up from a mask, staggered. */
export function SplitText({
  text, className = "", delay = 0, stagger = 0.06, as: Tag = "span", once = true,
}: { text: string; className?: string; delay?: number; stagger?: number; as?: "span" | "h1" | "h2" | "p"; once?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });
  const words = text.split(" ");
  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 4 }}
            animate={inView ? { y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: delay + i * stagger }}
          >
            {w}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Generic fade-up on scroll. */
export function FadeUp({
  children, delay = 0, className = "", y = 40,
}: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Horizontal rule that draws itself in. */
export function Line({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px origin-left bg-line ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease }}
    />
  );
}
