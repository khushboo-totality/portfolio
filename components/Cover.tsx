type CoverProps = {
  id: string;
  palette: [string, string];
  shape: "orbit" | "grid" | "wave" | "stack";
  className?: string;
};

/** Generated abstract art — swap for next/image with real screenshots/photos later. */
export default function Cover({ id, palette: [a, b], shape, className = "" }: CoverProps) {
  return (
    <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill={`url(#g-${id})`} />
      <g fill="none" stroke="#FFFFFF" strokeOpacity=".45" strokeWidth="1.5">
        {shape === "orbit" && [70, 140, 210, 280, 350].map((r) => <circle key={r} cx="400" cy="400" r={r} />)}
        {shape === "grid" &&
          Array.from({ length: 9 }).map((_, i) => (
            <g key={i}>
              <line x1={i * 100} y1="0" x2={i * 100} y2="800" />
              <line x1="0" y1={i * 100} x2="800" y2={i * 100} />
            </g>
          ))}
        {shape === "wave" &&
          Array.from({ length: 10 }).map((_, i) => (
            <path key={i} d={`M0 ${220 + i * 40} C 220 ${120 + i * 40}, 580 ${340 + i * 40}, 800 ${220 + i * 40}`} />
          ))}
        {shape === "stack" &&
          Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={220 + i * 20} y={220 + i * 20} width="320" height="260" rx="12" />
          ))}
      </g>
      <circle cx="400" cy="400" r="48" fill="#FFFFFF" fillOpacity=".9" />
    </svg>
  );
}
