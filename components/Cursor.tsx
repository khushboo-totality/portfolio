"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Dot cursor that grows into a labelled disc over [data-cursor] elements.
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor], a, button");
      setLabel(t?.dataset.cursor ?? null);
      setHover(!!t);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;
  const size = label ? 96 : hover ? 44 : 12;
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] flex items-center justify-center rounded-full bg-paper text-[11px] font-medium uppercase tracking-widest text-ink mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: size, height: size, opacity: hover && !label ? 0.35 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {label && (
        <motion.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          {label}
        </motion.span>
      )}
    </motion.div>
  );
}
