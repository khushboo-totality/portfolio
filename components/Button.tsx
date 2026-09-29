import Link from "next/link";

type Props = { href: string; children: string; variant?: "solid" | "ghost" };

/** Pill button with a fill that slides up on hover. */
export default function Button({ href, children, variant = "solid" }: Props) {
  const base =
    "group relative inline-flex h-10 items-center overflow-hidden rounded-full px-5 text-sm font-medium transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "border border-ink bg-ink text-paper hover:text-ink"
      : "border border-line text-ink hover:text-paper";
  const fill = variant === "solid" ? "bg-paper" : "bg-ink";
  const External = href.startsWith("mailto:") || href.startsWith("http");
  const inner = (
    <>
      <span className={`absolute inset-0 translate-y-full rounded-full ${fill} transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0`} />
      <span className="relative">{children}</span>
    </>
  );
  return External || href.startsWith("#") ? (
    <a href={href} className={`${base} ${styles}`}>{inner}</a>
  ) : (
    <Link href={href} className={`${base} ${styles}`}>{inner}</Link>
  );
}
