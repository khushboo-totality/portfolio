"use client";
import { useEffect, useState, type RefObject } from "react";
import { motion } from "framer-motion";

const OPEN_EVENT = "profile:open";
// Lives in /public — replace the file to update the download.
const RESUME = "/Khushboo_Yadav_Resume.pdf";

/** Pill button (same look as Button) that opens the drawer from anywhere on the page. */
export function OpenProfileButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="group relative inline-flex h-10 items-center overflow-hidden rounded-full border border-ink bg-ink px-5 text-sm font-medium text-paper transition-colors duration-300 hover:text-ink"
    >
      <span className="absolute inset-0 translate-y-full rounded-full bg-paper transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0" />
      <span className="relative">Profile</span>
    </button>
  );
}

/**
 * Below 1024px: a full-screen panel that slides in from the right, opened by a
 * floating "Profile" tab on the right edge and closed by the ✕ at the top.
 * At ≥1024px it is a plain block — pass `className` to size it, or `lg:hidden` to drop it.
 */
export default function MobileDrawer({
  children, className = "", asideRef, before,
}: {
  children: React.ReactNode;
  className?: string;
  asideRef?: RefObject<HTMLElement>;
  before?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  useEffect(() => {
    const on = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, on);
    return () => window.removeEventListener(OPEN_EVENT, on);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // The tab stays hidden until the work section scrolls into view (pages without one show it always).
  const [reached, setReached] = useState(false);
  useEffect(() => {
    const work = document.getElementById("work");
    if (!work) { setReached(true); return; }
    const on = () => setReached(work.getBoundingClientRect().top <= window.innerHeight * 0.5);
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  const show = reached && !open;

  return (
    <>
      <div
        className={`relative bg-paper max-lg:fixed max-lg:inset-0 max-lg:z-[60] max-lg:transition-[transform,visibility] max-lg:duration-500 max-lg:ease-[cubic-bezier(.22,1,.36,1)] ${open ? "max-lg:translate-x-0" : "max-lg:invisible max-lg:translate-x-full"} ${className}`}
      >
        {before}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-full bg-ink text-paper lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <aside
          ref={asideRef}
          // In-page links (e.g. "See work") close the drawer.
          onClick={(e) => { if ((e.target as HTMLElement).closest('a[href*="#"]')) setOpen(false); }}
          className="h-full overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div>{children}</div>
        </aside>
        {/* Floating resume download, pinned to the panel's bottom-right corner. */}
        <a
          href={RESUME}
          download
          data-cursor="Save"
          className="absolute bottom-10 right-4 z-30 inline-flex h-11 items-center gap-2 rounded-full bg-green-400 px-4 text-sm font-medium text-paper shadow-xl ring-1 ring-green-400 transition-colors duration-300 hover:bg-paper hover:text-green-400"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
          </svg>
          {/* Resume */}
        </a>
      </div>

      {/* Floating tab on the right edge, nudging + pulsing to draw the eye. */}
      <div className={`fixed right-0 top-1/2 z-50 -translate-y-1/2 transition-opacity duration-300 lg:hidden ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open profile"
          animate={{ x: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="relative block"
        >
          {/* <span className="absolute inset-0 animate-ping rounded-l-xl bg-ink opacity-30" /> */}
          <span className="relative flex items-center gap-2 rounded-l-xl bg-ink px-2.5 py-4 text-xs font-medium uppercase tracking-[0.2em] text-paper shadow-xl [writing-mode:vertical-rl]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            Profile
          </span>
        </motion.button>
      </div>
    </>
  );
}
