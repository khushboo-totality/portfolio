# Portfolio — Next.js + Tailwind + Framer Motion

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

**Edit content:** everything (name, projects, services, experience, socials) is in `lib/data.ts`.
**Colours / fonts:** `tailwind.config.ts` and `app/layout.tsx`.
**Real project images:** replace `<Cover />` in `components/Work.tsx` and `app/work/[slug]/page.tsx` with `next/image`.

## Animations
- Preloader counter (once per session) → `components/Preloader.tsx`
- Page transitions → `app/template.tsx`
- Smooth scroll (Lenis) → `components/SmoothScroll.tsx`
- Custom cursor with labels (`data-cursor="View"`) → `components/Cursor.tsx`
- Masked word reveals, fade-ups, drawn lines → `components/Reveal.tsx`
- Hero scroll parallax + skills marquee → `components/Hero.tsx`
- Clip-path image reveal + parallax + hover zoom → `components/Work.tsx`
- Scroll-scrubbed word highlight → `components/About.tsx`
- Accordion → `components/Services.tsx`
- Magnetic CTA, rolling links, live clock, footer parallax → `components/Contact.tsx`
