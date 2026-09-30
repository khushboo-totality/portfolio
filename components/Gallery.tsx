"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gallery, projects, site, type Tile } from "@/lib/data";
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
            {gallery[col].map((t, i) => <TileCard key={i} tile={t} delay={i < 2 ? 0.2 + c * 0.12 + i * 0.1 : 0} />)}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-16">
        <Button href={`mailto:${site.email}`}>Start a project</Button>
      </div>
    </section>
  );
}

function TileCard({ tile, delay }: { tile: Tile; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const split = useSplit();
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  // Only tiles visible on first paint get a staggered delay; later ones reveal immediately.
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
  const y = useTransform(scrollYProgress, [0, 1], ["-1%", "1%"]);

  const project = tile.kind === "project" ? projects.find((p) => p.slug === tile.slug) : undefined;
  const art = project
    ? { id: project.slug, palette: project.palette, shape: project.shape }
    : tile.kind === "art" ? { id: tile.id, palette: tile.palette, shape: tile.shape } : null;
  if (!art) return null;
  const images = project?.images;
  const sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw";

  const body = (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-xl bg-line"
      style={{ aspectRatio: tile.ratio }}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay: wait, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="absolute -inset-y-[1%] inset-x-0" style={{ y }}>
        {images ? (
          <>
            {/* Desktop shot (top of page), revealed on hover. */}
            <Image
              src={images.desktop} alt="" fill sizes={sizes}
              className="object-cover object-top"
            />
            {/* Home-page shot is the first look; fades away on hover. */}
            <Image
              src={images.pre} alt={project!.title} fill sizes={sizes}
              className="object-cover object-top transition-opacity duration-700 ease-[cubic-bezier(.22,1,.36,1)] [@media(hover:hover)]:group-hover:opacity-0"
            />
          </>
        ) : (
          // Greyscale at rest, original colour on hover.
          <Cover {...art} className="h-full w-full grayscale transition-[transform,filter] duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 group-hover:grayscale-0" />
        )}
      </motion.div>
      {images && (
        // Mobile shot (top of page) in a phone frame, slides in on hover.
        <div className="pointer-events-none absolute right-3 top-3 hidden aspect-[9/19] h-[68%] translate-y-4 overflow-hidden rounded-[1.25rem] border-[5px] border-ink bg-ink opacity-0 shadow-2xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:hover)]:block">
          <div className="relative h-full w-full overflow-hidden rounded-[0.9rem]">
            <Image
              src={images.mobile} alt="" fill sizes="200px"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}
      {project && (
        // Whole card opens the case study; caption links below sit above it.
        <Link href={`/work/${project.slug}`} data-cursor="View" aria-label={`${project.title} case study`} className="absolute inset-0 z-10" />
      )}
      {project && (
        // Caption hidden until hover on pointer devices; always shown on touch.
        <div className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute inset-x-4 bottom-3.5 flex items-end justify-between text-paper transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:group-hover:translate-y-0">
            {project.url ? (
              <>
                <a href={project.url} target="_blank" rel="noopener noreferrer" data-cursor="Visit" className="pointer-events-auto text-lg font-medium tracking-tight hover:underline">
                  {project.title}
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer" data-cursor="Visit" aria-label={`Visit ${project.title} website`} className="pointer-events-auto grid h-8 w-8 place-items-center rounded-full bg-paper/15 ring-1 ring-paper/40 backdrop-blur transition-colors hover:bg-paper hover:text-ink">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </>
            ) : (
              <span className="text-lg font-medium tracking-tight">{project.title}</span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );

  return <div className="group">{body}</div>;
}
