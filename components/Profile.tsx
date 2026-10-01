import Avatar from "./Avatar";
import { site, skills } from "@/lib/data";
import { SplitText, FadeUp } from "./Reveal";
import Button from "./Button";
import Marquee from "./Marquee";
import { OpenProfileButton } from "./MobileDrawer";

/** Top of the left pane: identity, intro, availability, CTA, skills ticker. */
export default function Profile({ inline = false }: { inline?: boolean }) {
  const d = 0.2; // small lead-in on first paint
  return (
    <section className="px-5 pb-10 pt-5 md:px-8 lg:px-6">
      <FadeUp delay={d} y={16} className="flex items-center gap-4">
        <Avatar name={site.name} />
        <div className="leading-tight">
          <p className="text-xl font-medium tracking-tight">{site.name}</p>
          <p className="text-sm text-mute">{site.role}</p>
        </div>
      </FadeUp>

      <h1 className="mt-10 text-[22px] font-medium leading-[1.25] tracking-tight md:text-2xl">
        <SplitText text={site.headline[0]} delay={d + 0.15} stagger={0.025} />{" "}
        <SplitText text={site.headline[1]} delay={d + 0.35} stagger={0.025} className="font-serif italic text-mute" />{" "}
        <SplitText text={site.headline[2]} delay={d + 0.55} stagger={0.025} />
      </h1>

      <FadeUp delay={d + 0.8} y={12} className="mt-8 flex items-center gap-2.5 text-sm text-mute">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
        </span>
        Taking on new projects
      </FadeUp>

      <FadeUp delay={d + 0.9} y={12} className="mt-6 flex flex-wrap gap-2">
        {inline ? (
          // Mobile home page: opens the profile drawer.
          <OpenProfileButton />
        ) : (
          // Desktop pane only — inside the mobile drawer just "See work" is shown.
          <span className="hidden lg:inline-flex"><Button href={`mailto:${site.email}`}>Get in touch</Button></span>
        )}
        <Button href="/#work" variant="ghost">See work ↓</Button>
      </FadeUp>

      <FadeUp delay={d + 1} className="mt-12 border-y border-line py-5">
        <Marquee items={skills} />
      </FadeUp>
    </section>
  );
}
