"use client";
import { createContext, useContext, useEffect, useRef, useState, type RefObject } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Desktop (≥1024px): two panes, each its own scroll container, so the wheel
 * scrolls whichever pane the pointer is over. Each pane gets its own Lenis.
 * Mobile: panes collapse into normal document flow with native scrolling.
 */
type Ctx = { desktop: boolean; rightPane: RefObject<HTMLElement> };
const SplitCtx = createContext<Ctx | null>(null);
export const useSplit = () => useContext(SplitCtx);

function useDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return desktop;
}

function usePaneLenis(ref: RefObject<HTMLElement>, enabled: boolean) {
  useEffect(() => {
    const wrapper = ref.current;
    if (!enabled || !wrapper) return;
    const lenis = new Lenis({
      wrapper,
      content: wrapper.firstElementChild as HTMLElement,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    let id = 0;
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, [ref, enabled]);
}

function PaneProgress({ pane }: { pane: RefObject<HTMLElement> }) {
  const { scrollYProgress } = useScroll({ container: pane });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden h-[3px] origin-left bg-ink lg:block"
    />
  );
}

export default function SplitLayout({
  left, right, mobileAfter,
}: { left: React.ReactNode; right: React.ReactNode; mobileAfter: React.ReactNode }) {
  const desktop = useDesktop();
  const leftRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLElement>(null);
  usePaneLenis(leftRef, desktop);
  usePaneLenis(rightRef, desktop);

  return (
    <SplitCtx.Provider value={{ desktop, rightPane: rightRef }}>
      <div className="lg:flex lg:h-[100dvh] lg:overflow-hidden">
        <div className="relative lg:w-[clamp(380px,33vw,520px)] lg:shrink-0">
          <PaneProgress pane={leftRef} />
          <aside ref={leftRef} className="lg:h-full lg:overflow-y-auto lg:overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div>{left}</div>
          </aside>
        </div>
        <div className="relative lg:flex-1">
          <PaneProgress pane={rightRef} />
          <main ref={rightRef} className="lg:h-full lg:overflow-y-auto lg:overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div>{right}</div>
          </main>
        </div>
        <div className="lg:hidden">{mobileAfter}</div>
      </div>
    </SplitCtx.Provider>
  );
}
