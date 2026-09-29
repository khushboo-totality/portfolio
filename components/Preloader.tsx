"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/data";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorageSafe()) { setDone(true); return; }
    document.documentElement.style.overflow = "hidden";
    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 9));
      setCount(n);
      if (n === 100) {
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          document.documentElement.style.overflow = "";
          try { sessionStorage.setItem("loaded", "1"); } catch {}
        }, 350);
      }
    }, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col justify-between bg-ink p-6 text-paper md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex justify-between text-sm uppercase tracking-widest text-paper/60">
            <span>{site.name}</span>
            <span>Portfolio ©{new Date().getFullYear()}</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="font-serif text-2xl italic text-paper/70 md:text-4xl">Loading the work</span>
            <span className="text-[22vw] font-medium leading-[0.8] tracking-tightest md:text-[14vw]">
              {count}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function sessionStorageSafe() {
  try { return sessionStorage.getItem("loaded") === "1"; } catch { return false; }
}
