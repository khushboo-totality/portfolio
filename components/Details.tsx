import { education, experience, openTo, products, services, site, stackGroups } from "@/lib/data";
import { FadeUp, Line } from "./Reveal";
import RollLink from "./RollLink";
import LocalTime from "./LocalTime";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-12 md:px-8 lg:px-6">
      <FadeUp>
        <h2 className="mb-7 font-serif text-3xl italic">{title}</h2>
      </FadeUp>
      {children}
    </section>
  );
}

function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink">{t}</li>
      ))}
    </ul>
  );
}

/** Rest of the left pane: about, services, process, experience, products, stack, education, contact. */
export default function Details() {
  return (
    <div>
      <Block title="About">
        <FadeUp>
          <p className="max-w-md text-mute">{site.about}</p>
        </FadeUp>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {site.stats.map(([n, l], i) => (
            <FadeUp key={l} delay={i * 0.08}>
              <p className="text-3xl font-medium tracking-tight">{n}</p>
              <p className="mt-1 text-xs text-mute">{l}</p>
            </FadeUp>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {openTo.map((o, i) => (
            <FadeUp key={o.title} delay={i * 0.08} className="rounded-xl border border-line p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-green-400 font-semibold">Open to</p>
              <p className="mt-2 font-medium">{o.title}</p>
              <p className="mt-1 text-sm text-mute">{o.text}</p>
            </FadeUp>
          ))}
        </div>
      </Block>
      <div className="px-5 md:px-8 lg:px-6"><Line /></div>

      <Block title="What I do">
        <ul className="space-y-6">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.05}>
              <li className="group grid grid-cols-[2rem_1fr]">
                <span className="pt-0.5 text-xs text-mute">0{i + 1}</span>
                <div>
                  <p className="font-medium transition-colors duration-300 group-hover:text-mute">{s.title}</p>
                  <p className="mt-1 text-sm text-mute">{s.text}</p>
                </div>
              </li>
            </FadeUp>
          ))}
        </ul>
      </Block>
      <div className="px-5 md:px-8 lg:px-6"><Line /></div>

      <Block title="Experience">
        <ul>
          {experience.map((e, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <li className="border-b border-line text-sm">
                {/* Tap a role to expand its highlights; the current role starts open. */}
                <details className="group" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-3.5 [&::-webkit-details-marker]:hidden">
                    <span><span className="font-medium">{e.role}</span> <span className="text-mute">· {e.company}</span></span>
                    <span className="flex shrink-0 items-baseline gap-2 tabular-nums text-mute">
                      {e.period}
                      <span className="inline-block transition-transform group-open:text-lg duration-300 group-open:rotate-45 group-open:text-red-500">+</span>
                    </span>
                  </summary>
                  <ul className="list-disc space-y-1.5 pb-3 pl-5 text-mute">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <Chips items={e.stack} className="pb-4" />
                </details>
              </li>
            </FadeUp>
          ))}
        </ul>
      </Block>

      <div className="px-5 md:px-8 lg:px-6"><Line /></div>

      <Block title="Tech stack">
        <dl className="space-y-5">
          {stackGroups.map((g, i) => (
            <FadeUp key={g.label} delay={i * 0.05}>
              <dt className="text-xs uppercase tracking-[0.2em] text-mute">{g.label}</dt>
              <dd><Chips items={g.items} className="mt-2" /></dd>
            </FadeUp>
          ))}
        </dl>
      </Block>


      <footer className="mx-3 mb-3 mt-6 rounded-2xl bg-ink px-5 py-10 text-paper md:px-8 lg:mx-3 lg:px-6">
        <FadeUp>
          <p className="text-sm text-paper/50">Hiring, or have a project in mind?</p>
          <a href={`mailto:${site.email}`} className="group mt-3 inline-block text-3xl font-medium tracking-tight">
            {site.email}
            <span className="block h-px origin-left scale-x-0 bg-paper transition-transform duration-500 group-hover:scale-x-100" />
          </a>
        </FadeUp>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {site.socials.map((s) => <RollLink key={s.label} href={s.href} external>{s.label}</RollLink>)}
        </div>
        <div className="mt-10 flex justify-between border-t border-paper/15 pt-5 text-xs text-paper/50">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <LocalTime />
        </div>
      </footer>
    </div>
  );
}
