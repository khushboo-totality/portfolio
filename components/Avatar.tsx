"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const SRC = "/khushboo.jpeg";

/** Face-cropped profile thumbnail; click opens the full photo in a lightbox. */
export default function Avatar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    // Capture + stop, so Escape closes only the lightbox and not the drawer behind it.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.stopImmediatePropagation();
      setOpen(false);
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View photo of ${name}`}
        data-cursor="View"
        className="relative h-16 w-16 shrink-0 cursor-zoom-in overflow-hidden rounded-xl bg-line"
      >
        {/* Full-length 768×1344 photo, cropped to the face: `width` is the zoom,
            `left`/`top` slide the photo (more negative = further left / up). */}
        <Image
          src={SRC} alt={name} width={768} height={1344} sizes="160px" priority
          className="absolute h-auto max-w-none"
          style={{ width: "230%", left: "-65%", top: "-40%" }}
        />
      </button>

      {/* Portalled to <body> so transformed ancestors (drawer, reveals) can't clip it. */}
      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Photo of ${name}`}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[100] grid cursor-zoom-out place-items-center bg-black/85 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0.92, y: 16 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={SRC} alt={name} width={768} height={1344} sizes="(min-width: 640px) 480px, 90vw"
                  className="h-auto max-h-[88dvh] w-auto max-w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close photo"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-paper text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
