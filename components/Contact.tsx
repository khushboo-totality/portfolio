"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/data";
import Magnetic from "./Magnetic";
import RollLink from "./RollLink";
import { SplitText } from "./Reveal";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat("en-GB", { timeZone: site.timezone, hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer ref={ref} id="contact" className="overflow-hidden bg-ink text-paper">
      <motion.div style={{ y }} className="flex min-h-[100svh] flex-col justify-between px-4 pb-8 pt-24 md:px-10 md:pt-32">
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-paper/50">Have a project in mind?</p>
          <SplitText
            as="h2"
            text="Let's build something solid."
            className="block max-w-[14ch] text-[13vw] font-medium leading-[0.9] tracking-tightest md:text-[8vw]"
          />
          <div className="mt-12">
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                data-cursor="Say hi"
                className="group relative inline-flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-paper bg-paper text-lg font-medium text-ink md:h-48 md:w-48"
              >
                <span className="absolute inset-0 translate-y-full rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0" />
                <span className="relative transition-colors duration-500 group-hover:text-paper">Get in touch</span>
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-paper/15 pt-8 text-sm md:grid-cols-4">
          <div>
            <p className="mb-2 text-paper/40">Email</p>
            <RollLink href={`mailto:${site.email}`} external>{site.email}</RollLink>
          </div>
          <div>
            <p className="mb-2 text-paper/40">Socials</p>
            <div className="flex flex-col gap-1">
              {site.socials.map((s) => <RollLink key={s.label} href={s.href} external>{s.label}</RollLink>)}
            </div>
          </div>
          <div>
            <p className="mb-2 text-paper/40">Local time</p>
            <p className="tabular-nums">{time} IST — {site.location}</p>
          </div>
          <div className="md:text-right">
            <p className="mb-2 text-paper/40">©{new Date().getFullYear()}</p>
            <button
              onClick={() => {
                const l = (window as unknown as { lenis?: { scrollTo: (n: number) => void } }).lenis;
                l ? l.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="underline-offset-4 hover:underline"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
