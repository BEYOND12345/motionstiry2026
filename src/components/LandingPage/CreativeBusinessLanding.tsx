import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  SESSION_FROM,
  creativeBusinessDesignerOffer,
  type CreativeBusinessOfferConfig,
} from '../../data/landing-pages/creative-business-designer';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const BOOKING_PATH = '/book/';

function pushEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function TickerRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="spine-ticker-mask relative overflow-hidden py-3 sm:py-3.5">
      <div className={`spine-ticker-track flex w-max items-center gap-0 ${reverse ? 'spine-ticker-reverse' : ''}`}>
        {doubled.map((name, i) => (
          <span key={`${name}-${i}`} className="inline-flex items-center">
            <span className="spine-ticker-name font-display text-[1.35rem] font-bold tracking-tight sm:text-[1.6rem] md:text-[1.85rem]">
              {name}
            </span>
            <span className="spine-ticker-dot mx-5 sm:mx-7 md:mx-8" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

type Props = {
  config?: CreativeBusinessOfferConfig;
};

export default function CreativeBusinessLanding({
  config = creativeBusinessDesignerOffer,
}: Props) {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [stickyVisible, setStickyVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onBook = () => {
    pushEvent('book_call_click', {
      event_category: 'conversion',
      slug: config.slug,
    });
  };

  const accentStyle = {
    '--spine-accent': config.accentColor,
  } as CSSProperties;

  return (
    <div className="spine-landing min-h-screen bg-[color:var(--spine-fog)] text-[color:var(--spine-ink)]" style={accentStyle}>
      <style>{`
        .spine-landing {
          --spine-ink: #0a0a0a;
          --spine-fog: #f7f7f5;
          --spine-eyebrow: rgba(10, 10, 10, 0.55);
          --spine-body: rgba(10, 10, 10, 0.72);
          --spine-line: rgba(10, 10, 10, 0.1);
          --spine-cta: #0a0a0a;
          --spine-radius-control: 10px;
        }
        .spine-landing .spine-eyebrow {
          font-family: var(--font-sans);
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--spine-eyebrow);
        }
        .spine-landing .spine-body {
          font-size: 17px;
          line-height: 1.55;
          letter-spacing: -0.011em;
          color: var(--spine-body);
        }
        .spine-landing .spine-band-fog {
          background:
            radial-gradient(120% 80% at 50% 0%, rgba(255, 0, 0, 0.03), transparent 55%),
            #fafafa;
        }
        .spine-landing .spine-btn-ink {
          background: var(--spine-cta);
          color: #fff;
          border-radius: var(--spine-radius-control);
          transition: opacity 0.2s ease;
        }
        .spine-landing .spine-btn-ink:hover { opacity: 0.9; }
        .spine-landing .spine-btn-label {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        .spine-landing .spine-link-quiet {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--spine-body);
          transition: color 0.2s ease;
        }
        .spine-landing .spine-link-quiet:hover { color: var(--spine-ink); }
        .spine-landing .spine-ticker-name { color: rgba(10, 10, 10, 0.62); }
        .spine-landing .spine-ticker-dot { color: var(--spine-accent); opacity: 0.9; }
        .spine-landing .spine-glass {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          border-bottom: 0.5px solid rgba(10, 10, 10, 0.08);
        }
        .spine-landing .spine-glass-bar {
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          border-top: 0.5px solid rgba(10, 10, 10, 0.08);
        }
        .spine-landing .site-cta {
          background:
            radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255, 255, 255, 0.06), transparent 52%),
            linear-gradient(180deg, #131313 0%, #0a0a0a 45%, #070707 100%);
          border-top: 0.5px solid rgba(255, 255, 255, 0.08);
        }
        .spine-landing .spine-btn-accent {
          background: var(--spine-accent, #FF0000);
          color: #fff;
          border-radius: var(--spine-radius-control);
          transition: opacity 0.2s ease;
        }
        .spine-landing .spine-btn-accent:hover { opacity: 0.92; }
        .spine-ticker-mask {
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .spine-ticker-track {
          animation: spine-ticker-scroll 48s linear infinite;
        }
        .spine-ticker-track.spine-ticker-reverse {
          animation-name: spine-ticker-scroll-reverse;
        }
        @keyframes spine-ticker-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes spine-ticker-scroll-reverse {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .spine-ticker-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <header className="spine-glass fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 lg:px-12">
          <a href="/" className="brand-mark text-[1.1rem] tracking-tight text-[color:var(--spine-ink)] sm:text-xl">
            Motion Story.
          </a>
          <a
            href={BOOKING_PATH}
            onClick={onBook}
            className="spine-link-quiet hidden min-h-[44px] items-center md:inline-flex"
          >
            Book a session
          </a>
        </div>
      </header>

      <main
        id="main-content"
        className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-[calc(4.25rem+env(safe-area-inset-top))] md:pb-0 md:pt-[4.75rem]"
      >
        <section>
          <div className="mx-auto grid max-w-7xl items-end gap-8 px-5 pt-8 pb-10 sm:gap-10 sm:px-6 sm:pt-10 sm:pb-12 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pt-12 lg:pb-14">
            <motion.div
              className="min-w-0 lg:col-span-7"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="spine-eyebrow mb-4">{config.hero.eyebrow}</p>
              <h1 className="font-display text-[clamp(2.25rem,5vw,3.85rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[color:var(--spine-ink)] text-balance">
                {config.hero.h1}
              </h1>
              <p className="mt-5 max-w-[28ch] font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium leading-[1.25] tracking-[-0.02em] text-[color:var(--spine-ink)]">
                {config.hero.subhead}
              </p>
              <p className="spine-body mt-5 max-w-[36ch]">
                Work directly with a creative business designer. 20 years of it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={BOOKING_PATH}
                  onClick={onBook}
                  className="spine-btn-ink spine-btn-label inline-flex min-h-[48px] items-center justify-center px-7 py-3.5"
                >
                  {config.hero.primaryCta}
                </a>
                <span className="text-[14px] tracking-[-0.01em] text-[color:var(--spine-eyebrow)]">
                  {SESSION_FROM}
                </span>
              </div>
              <a href="#plan" className="spine-link-quiet mt-5 inline-flex min-h-[44px] items-center">
                {config.hero.secondaryCta} ↓
              </a>
            </motion.div>

            <motion.div
              className="min-w-0 lg:col-span-5"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-black/[0.04]">
                <img
                  src={config.guide.photoSrc}
                  alt={config.guide.name}
                  className="h-full w-full object-cover"
                  width={720}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <p className="spine-eyebrow mt-4 !normal-case !tracking-[-0.01em]">
                {config.guide.name} · Byron Bay
              </p>
            </motion.div>
          </div>
        </section>

        <section className="spine-band-fog border-y border-[color:var(--spine-line)]" aria-label={config.trustStrip.line}>
          <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-6 sm:pt-9 lg:px-12">
            <p className="spine-eyebrow text-center tracking-[0.18em]">{config.trustStrip.line}</p>
          </div>
          <div className="mt-5 space-y-0 pb-7 sm:mt-6 sm:pb-8">
            <TickerRow items={config.trustStrip.rowA} />
            <TickerRow items={config.trustStrip.rowB} reverse />
          </div>
        </section>

        <section className="spine-band-fog border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
            <Reveal>
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--spine-ink)] text-balance">
                {config.value.headline}
              </h2>
              <p className="spine-body mx-auto mt-5 max-w-xl text-[16px] leading-[1.55] sm:text-[17px]">
                {config.value.body}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
            <Reveal>
              <p className="spine-eyebrow mb-3">What that looks like</p>
              <ul className="mt-6 max-w-3xl divide-y divide-[color:var(--spine-line)] border-y border-[color:var(--spine-line)]">
                {config.outcomes.map((item) => (
                  <li
                    key={item}
                    className="py-4 font-display text-[clamp(1.2rem,2.4vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.022em] text-[color:var(--spine-ink)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
            <Reveal>
              <p className="spine-eyebrow mb-3">{config.problem.eyebrow}</p>
              <h2 className="max-w-[18ch] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--spine-ink)]">
                {config.problem.headline}
              </h2>
            </Reveal>
            <div className="mt-10 divide-y divide-[color:var(--spine-line)] border-y border-[color:var(--spine-line)]">
              {config.problem.items.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.04}>
                  <div className="grid gap-3 py-7 md:grid-cols-[minmax(12rem,20rem)_1fr] md:gap-10 md:py-8">
                    <h3 className="font-display text-[17px] font-semibold tracking-[-0.015em] text-[color:var(--spine-ink)] md:text-[18px]">
                      “{item.label}”
                    </h3>
                    <p className="spine-body max-w-xl !text-[16px]">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="guide" className="scroll-mt-24 border-b border-[color:var(--spine-line)]">
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-14 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-20">
            <Reveal className="lg:col-span-4">
              <div className="aspect-[4/5] overflow-hidden bg-black/[0.04]">
                <img
                  src={config.guide.photoSrc}
                  alt={config.guide.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={640}
                  height={800}
                />
              </div>
              <p className="spine-eyebrow mt-4 !normal-case !tracking-[-0.01em]">
                {config.guide.name} · {config.guide.role}
              </p>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={0.05}>
              <p className="spine-eyebrow mb-3">{config.guide.eyebrow}</p>
              <h2 className="max-w-[18ch] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--spine-ink)]">
                {config.guide.headline}
              </h2>
              <p className="spine-body mt-5 max-w-xl !text-[17px]">{config.guide.body}</p>
            </Reveal>
          </div>
        </section>

        <section id="plan" className="scroll-mt-24 border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
            <Reveal>
              <p className="spine-eyebrow mb-4">{config.plan.eyebrow}</p>
              <h2 className="max-w-[16ch] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--spine-ink)]">
                {config.plan.headline}
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-0 border-t border-[color:var(--spine-line)] md:grid-cols-3">
              {config.plan.steps.map((step, i) => (
                <Reveal key={step.label} delay={i * 0.05}>
                  <li className="border-b border-[color:var(--spine-line)] py-7 md:border-b-0 md:border-r md:px-8 md:py-9 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                    <p className="spine-eyebrow text-accent">0{i + 1}</p>
                    <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-[color:var(--spine-ink)] sm:text-2xl">
                      {step.label}
                    </h3>
                    <p className="spine-body mt-2.5 !text-[15px] !leading-[1.5]">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={BOOKING_PATH}
                  onClick={onBook}
                  className="spine-btn-ink spine-btn-label inline-flex min-h-[48px] items-center justify-center px-7 py-3.5"
                >
                  {config.hero.primaryCta}
                </a>
                <span className="text-[14px] tracking-[-0.01em] text-[color:var(--spine-eyebrow)]">
                  {SESSION_FROM}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="build" className="scroll-mt-24 border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
            <Reveal>
              <p className="spine-eyebrow mb-3">What I can build</p>
              <h2 className="max-w-[16ch] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--spine-ink)]">
                From idea to the actual thing.
              </h2>
            </Reveal>
            <div className="mt-10 divide-y divide-[color:var(--spine-line)] border-y border-[color:var(--spine-line)]">
              {config.builds.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.03}>
                  <div className="grid gap-3 py-7 md:grid-cols-[minmax(12rem,18rem)_1fr] md:gap-10 md:py-8">
                    <h3 className="font-display text-[18px] font-semibold tracking-[-0.015em] text-[color:var(--spine-ink)]">
                      {item.label}
                    </h3>
                    <p className="spine-body max-w-xl !text-[16px]">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="spine-band-fog border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
            <Reveal>
              <p className="spine-eyebrow mb-4">{config.stakes.eyebrow}</p>
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--spine-ink)] text-balance">
                {config.stakes.headline}
              </h2>
              <p className="spine-body mx-auto mt-5 max-w-xl text-[16px] leading-[1.55] sm:text-[17px]">
                {config.stakes.body}
              </p>
            </Reveal>
          </div>
        </section>

        <section id="proof" className="scroll-mt-24 border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
            <Reveal>
              <p className="spine-eyebrow mb-3">Proof</p>
              <h2 className="max-w-[20ch] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--spine-ink)]">
                Client work. And my own products.
              </h2>
              <p className="spine-body mt-5 max-w-xl !text-[17px]">
                Twenty years of client work through Motion Story for tech companies, brands, and agencies. And I build my own things.
              </p>
            </Reveal>
            <div className="mt-10 max-w-2xl divide-y divide-[color:var(--spine-line)] border-y border-[color:var(--spine-line)]">
              {config.products.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 py-7 transition-opacity hover:opacity-70"
                >
                  <span className="font-display text-2xl font-bold tracking-tight text-[color:var(--spine-ink)]">
                    {item.name}
                  </span>
                  <span className="spine-body !text-[16px]">{item.body}</span>
                  <span className="text-[14px] font-medium tracking-[-0.01em] text-[color:var(--spine-ink)]">
                    Visit →
                  </span>
                </a>
              ))}
            </div>
            <p className="spine-body mt-8 max-w-xl !text-[16px]">
              Concept to shipped product, both of them. Same hands.
            </p>
          </div>
        </section>

        <section className="border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
            <Reveal>
              <p className="spine-eyebrow mb-3">{config.why.eyebrow}</p>
              <h2 className="max-w-[16ch] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--spine-ink)]">
                {config.why.headline}
              </h2>
              <div className="mt-6 max-w-xl space-y-5">
                {config.why.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="spine-body !text-[17px]">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-2xl px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
            <Reveal>
              <blockquote>
                <p className="font-display text-[1.25rem] font-medium leading-[1.35] tracking-tight text-[color:var(--spine-ink)] sm:text-[1.5rem]">
                  “{config.testimonial.quote}”
                </p>
                <footer className="mt-6 text-[14px] tracking-[-0.01em] text-[color:var(--spine-eyebrow)]">
                  {config.testimonial.name}
                  <span className="text-[color:var(--spine-body)]"> · {config.testimonial.company}</span>
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        <section id="final-cta" className="site-cta">
          <div className="mx-auto max-w-xl scroll-mt-24 px-5 py-16 text-center sm:px-6 sm:py-20 md:scroll-mt-28 lg:py-24">
            <div className="mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/15 sm:h-24 sm:w-24">
              <img
                src={config.guide.photoSrc}
                alt={config.guide.name}
                className="h-full w-full object-cover"
                loading="lazy"
                width={96}
                height={96}
              />
            </div>
            <p className="text-[13px] font-medium tracking-[-0.01em] text-white/50">{config.guide.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(1.85rem,3.8vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.022em] text-white text-balance">
              {config.success.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-[36ch] text-[17px] leading-[1.47] tracking-[-0.011em] text-white/62">
              {config.success.body}
            </p>
            <p className="mt-3 text-[14px] tracking-[-0.01em] text-white/40">{SESSION_FROM}</p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
              <a
                href={BOOKING_PATH}
                onClick={onBook}
                className="spine-btn-accent spine-btn-label inline-flex min-h-[48px] w-full max-w-xs items-center justify-center px-8 py-3.5 text-center sm:w-auto sm:min-w-[200px]"
              >
                Book a session
              </a>
              <a
                href="mailto:daniel@motionstory.com.au"
                className="inline-flex min-h-[44px] items-center text-[15px] font-medium tracking-[-0.01em] text-white/55 transition-colors hover:text-white"
              >
                Or email me directly
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
          <h2 className="mb-7 font-display text-2xl font-bold tracking-tight text-[color:var(--spine-ink)]">
            Questions
          </h2>
          <div className="divide-y divide-[color:var(--spine-line)] border-y border-[color:var(--spine-line)]">
            {config.faq.items.map((faq, i) => {
              const open = faqOpen === i;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    className="flex min-h-[52px] w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--spine-ink)]"
                    aria-expanded={open}
                    onClick={() => setFaqOpen(open ? null : i)}
                  >
                    <span className="font-display text-[17px] font-semibold tracking-[-0.015em] text-[color:var(--spine-ink)]">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg leading-none text-accent"
                      aria-hidden="true"
                    >
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  {open && <p className="spine-body max-w-xl pb-6 !text-[16px]">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer px-5 py-10 pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-12 md:pb-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="brand-mark text-lg tracking-tight text-[color:var(--spine-ink)]">
            Motion Story<span className="text-accent">.</span>
          </p>
          <p className="mt-3 text-[14px] tracking-[-0.01em] text-[color:var(--spine-eyebrow)]">{config.footerLine}</p>
          <p className="mt-2 text-[15px] text-[color:var(--spine-body)]">
            <a
              href="/services/"
              className="border-b border-black/15 transition-colors hover:border-[color:var(--spine-ink)] hover:text-[color:var(--spine-ink)]"
            >
              See all services
            </a>
          </p>
        </div>
      </footer>

      <div
        className={`spine-glass-bar fixed inset-x-0 bottom-0 z-50 px-3.5 pt-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] transition-transform duration-300 md:hidden ${
          stickyVisible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
        }`}
        aria-hidden={!stickyVisible}
      >
        <a
          href={BOOKING_PATH}
          onClick={onBook}
          tabIndex={stickyVisible ? 0 : -1}
          className="spine-btn-ink spine-btn-label flex min-h-[48px] w-full items-center justify-center px-4 py-3.5 text-center"
        >
          Book a session
        </a>
      </div>
    </div>
  );
}
