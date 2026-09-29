"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gallery, projects, type Tile } from "@/lib/data";
import Cover from "./Cover";
import Button from "./Button";
import { useSplit } from "./SplitLayout";

/** Right pane: two-column masonry of project cards and art tiles. */
export default function Gallery() {
  return (
    <section id="work" className="p-2 lg:p-3 lg:pl-0">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:gap-3">
        {(["left", "right"] as const).map((col, c) => (
          <div key={col} className="flex flex-col gap-2 lg:gap-3">
            {gallery[col].map((t, i) => <TileCard key={i} tile={t} delay={i < 2 ? 1.9 + c * 0.12 + i * 0.1 : 0} />)}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-16">
        <Button href="mailto:hello@tejas.dev">Start a project</Button>
      </div>
    </section>
  );
}

function TileCard({ tile, delay }: { tile: Tile; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const split = useSplit();
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  // Only tiles visible on first paint wait for the preloader; later ones reveal immediately.
  const [wait, setWait] = useState(delay);
  useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().top > window.innerHeight) setWait(0);
  }, []);
  // Parallax against whichever element is scrolling: the right pane on desktop, the window on mobile.
  const { scrollYProgress } = useScroll({
    target: ref,
    container: split?.desktop ? split.rightPane : undefined,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const project = tile.kind === "project" ? projects.find((p) => p.slug === tile.slug) : undefined;
  const art = project
    ? { id: project.slug, palette: project.palette, shape: project.shape }
    : tile.kind === "art" ? { id: tile.id, palette: tile.palette, shape: tile.shape } : null;
  if (!art) return null;

  const body = (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-xl bg-line"
      style={{ aspectRatio: tile.ratio }}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay: wait, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="absolute -inset-y-[8%] inset-x-0" style={{ y }}>
        {/* Greyscale at rest, original colour on hover. */}
        <Cover {...art} className="h-full w-full grayscale transition-[transform,filter] duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 group-hover:grayscale-0" />
      </motion.div>
      {project && (
        // Caption hidden until hover on pointer devices; always shown on touch.
        <div className="transition-opacity duration-500 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute inset-x-4 bottom-3.5 flex items-end justify-between text-paper transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:group-hover:translate-y-0">
            <span className="text-lg font-medium tracking-tight">{project.title}</span>
            <span className="text-xs">{project.category} →</span>
          </div>
        </div>
      )}
    </motion.div>
  );

  return project ? (
    <Link href={`/work/${project.slug}`} data-cursor="View" className="group block">{body}</Link>
  ) : (
    <div className="group">{body}</div>
  );
}
