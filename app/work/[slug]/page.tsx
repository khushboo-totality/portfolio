import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Cover from "@/components/Cover";
import { FadeUp, Line, SplitText } from "@/components/Reveal";
import Contact from "@/components/Contact";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} — Case study` : "Not found" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const i = projects.findIndex((x) => x.slug === params.slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <main>
      <Link href="/" className="fixed left-4 top-4 z-50 rounded-full bg-ink px-4 py-2 text-sm text-paper ring-1 ring-ink transition-colors hover:bg-paper hover:text-ink md:left-10 md:top-6">
        ← Back
      </Link>
      <section className="px-4 pb-12 pt-32 md:px-10 md:pt-44">
        <FadeUp className="mb-6 text-sm uppercase tracking-[0.2em] text-mute">
          {[p.category, p.year].filter(Boolean).join(" — ")}
        </FadeUp>
        <SplitText as="h1" text={p.title} className="block text-[15vw] font-medium leading-[0.9] tracking-tightest md:text-[10vw]" />
        <FadeUp delay={0.3} className="mt-8 max-w-2xl font-serif text-2xl italic text-mute md:text-3xl">
          {p.summary}
        </FadeUp>
        {p.url && (
          <FadeUp delay={0.4} className="mt-8">
            <a href={p.url} target="_blank" rel="noopener noreferrer" data-cursor="Visit" className="inline-block rounded-full bg-ink px-5 py-2.5 text-sm text-paper ring-1 ring-ink transition-colors hover:bg-paper hover:text-ink">
              Visit live site ↗
            </a>
          </FadeUp>
        )}
      </section>

      <FadeUp className="px-4 md:px-10">
        <div className="aspect-[16/9] overflow-hidden rounded-sm">
          <Cover id={p.slug} palette={p.palette} shape={p.shape} className="h-full w-full grayscale" />
        </div>
      </FadeUp>

      <section className="grid gap-12 px-4 py-24 md:grid-cols-[1fr_2fr] md:px-10 md:py-32">
        <FadeUp className="space-y-6 text-sm">
          {p.role && <div><p className="text-mute">Role</p><p className="mt-1 text-lg">{p.role}</p></div>}
          {p.stack.length > 0 && <div><p className="text-mute">Stack</p><p className="mt-1 text-lg">{p.stack.join(", ")}</p></div>}
        </FadeUp>
        <div className="space-y-8 text-xl leading-relaxed md:text-2xl">
          {p.body.map((t, k) => <FadeUp key={k} delay={k * 0.1}><p>{t}</p></FadeUp>)}
          <div className="grid gap-8 pt-8 sm:grid-cols-2">
            {p.results.map((r, k) => (
              <FadeUp key={r.label} delay={k * 0.1}>
                <Line />
                <div className="mt-6 font-serif text-6xl font-medium italic tracking-tight text-ink">{r.value}</div>
                <p className="mt-2 text-base text-mute">{r.label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Link href={`/work/${next.slug}`} data-cursor="Next" className="group block border-t border-line px-4 py-20 md:px-10 md:py-32">
        <p className="text-sm uppercase tracking-[0.2em] text-mute">Next project</p>
        <p className="mt-4 text-[12vw] font-medium leading-none tracking-tightest transition-colors duration-500 group-hover:text-mute md:text-[8vw]">
          {next.title} →
        </p>
      </Link>

      <Contact />
    </main>
  );
}
