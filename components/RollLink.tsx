import Link from "next/link";

/** Text that rolls up to reveal a duplicate on hover. */
export default function RollLink({ href, children, className = "", external = false }: { href: string; children: string; className?: string; external?: boolean }) {
  const inner = (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full">{children}</span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0">{children}</span>
    </span>
  );
  const cls = `group inline-block ${className}`;
  return external ? (
    // mailto: must not open a new tab — that just leaves a blank one behind.
    <a href={href} {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })} className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}
