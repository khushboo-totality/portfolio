/** Pure-CSS infinite ticker with faded edges (no JS). */
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-8 whitespace-nowrap text-sm uppercase tracking-[0.18em] text-mute hover:[animation-play-state:paused]">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-8">
            {s}<span className="text-green-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
