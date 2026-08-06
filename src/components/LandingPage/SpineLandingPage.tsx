import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { vimeoIdFrom } from './types';
import type { SpineCase, SpineLandingConfig } from './spine-types';

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

function trackBookCallClick(slug: string) {
  pushEvent('book_call_click', { event_category: 'conversion', slug });
}

function StoryFilm({
  videoUrl,
  title,
  posterUrl,
  vimeoHash,
  priority = false,
}: {
  videoUrl: string;
  title: string;
  posterUrl?: string;
  vimeoHash?: string;
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [allowPreview, setAllowPreview] = useState(false);
  const id = vimeoIdFrom(videoUrl);
  const hashQuery = vimeoHash ? `h=${vimeoHash}&` : '';
  const poster = posterUrl ?? `https://vumbnail.com/${id}.jpg`;

  useEffect(() => {
    if (!priority) return;
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const sync = () => setAllowPreview(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [priority]);

  return (
    <div className="spine-film relative aspect-video w-full overflow-hidden rounded-[10px]">
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${id}?${hashQuery}autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      ) : (
        <>
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority={priority ? 'high' : 'auto'}
            loading={priority ? 'eager' : 'lazy'}
            width={1280}
            height={720}
          />
          {allowPreview && (
            <iframe
              src={`https://player.vimeo.com/video/${id}?${hashQuery}background=1&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`}
              className="absolute inset-0 h-full w-full scale-[1.02] opacity-90"
              allow="autoplay; fullscreen"
              title={`${title} preview`}
              loading="eager"
              tabIndex={-1}
            />
          )}
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(8,8,8,0.22)] transition-colors hover:bg-[rgba(8,8,8,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Play: ${title}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/85 bg-[rgba(8,8,8,0.28)] shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:h-16 sm:w-16">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
            </span>
          </button>
        </>
      )}
    </div>
  );
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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function TickerRow({
  items,
  reverse = false,
  duration = 48,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className="spine-ticker-mask relative overflow-hidden py-3 sm:py-3.5">
      <div
        className={`spine-ticker-track flex w-max items-center gap-0 ${reverse ? 'spine-ticker-reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center">
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

/** Offset row: always top-aligned. Film side alternates. */
function OffsetRow({
  flip,
  muted,
  copy,
  film,
  id,
}: {
  flip?: boolean;
  muted?: boolean;
  copy: ReactNode;
  film: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={muted ? 'spine-band-fog' : 'spine-band-paper'}>
      <div
        className={`mx-auto grid max-w-7xl items-start gap-8 px-5 py-12 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-16`}
      >
        <div className={`min-w-0 lg:col-span-5 ${flip ? 'lg:order-2' : 'lg:order-1'}`}>
          <Reveal>{copy}</Reveal>
        </div>
        <div className={`min-w-0 lg:col-span-7 ${flip ? 'lg:order-1' : 'lg:order-2'}`}>
          <Reveal delay={0.05}>{film}</Reveal>
        </div>
      </div>
    </section>
  );
}

function ProofRow({ project, index }: { project: SpineCase; index: number }) {
  const num = String(index + 1).padStart(2, '0');
  const flip = index % 2 === 1;

  return (
    <OffsetRow
      flip={flip}
      muted={flip}
      film={
        <StoryFilm
          videoUrl={project.videoUrl}
          vimeoHash={project.vimeoHash}
          title={`${project.client}: ${project.useCase}`}
        />
      }
      copy={
        <div>
          <p className="spine-eyebrow text-accent">{num}</p>
          <h3 className="mt-3 font-display text-[1.75rem] font-bold tracking-tight text-[color:var(--spine-ink)] sm:text-[2.15rem] lg:text-[2.5rem]">
            {project.client}
          </h3>
          <p className="spine-lede mt-3 max-w-[22ch] font-display text-[1.05rem] font-medium leading-[1.25] tracking-tight sm:text-[1.2rem]">
            {project.useCase}
          </p>
          {project.outcome ? (
            <p className="spine-body mt-5 max-w-sm text-[14px] leading-[1.55] sm:text-[15px]">
              {project.outcome}
            </p>
          ) : null}
          {project.body ? (
            <p className="spine-body mt-3 max-w-sm text-[14px] leading-[1.55] sm:text-[15px]">
              {project.body}
            </p>
          ) : null}
        </div>
      }
    />
  );
}

export default function SpineLandingPage({ config }: { config: SpineLandingConfig }) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const reduce = useReducedMotion();
  const onBook = () => trackBookCallClick(config.slug);

  useEffect(() => {
    pushEvent('page_view', { slug: config.slug, page: config.seo.canonicalPath });
  }, [config.slug, config.seo.canonicalPath]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = BOOKING_PATH;
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const heroCta = document.getElementById('hero-cta');
    const finalCta = document.getElementById('final-cta');
    if (!heroCta || !finalCta) return;
    let heroOut = false;
    let finalIn = false;
    const sync = () => setStickyVisible(heroOut && !finalIn);
    const heroIo = new IntersectionObserver(
      ([entry]) => {
        heroOut = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        sync();
      },
      { threshold: 0 }
    );
    const finalIo = new IntersectionObserver(
      ([entry]) => {
        finalIn = entry.isIntersecting;
        sync();
      },
      { threshold: 0.12 }
    );
    heroIo.observe(heroCta);
    finalIo.observe(finalCta);
    return () => {
      heroIo.disconnect();
      finalIo.disconnect();
    };
  }, []);

  return (
    <div
      className="spine-landing overflow-x-clip"
      style={
        {
          ['--landing-accent' as string]: config.accentColor,
          ['--spine-accent' as string]: config.accentColor,
        } as CSSProperties
      }
    >
      <style>{`
        .spine-landing {
          --spine-ink: #0a0a0a;
          --spine-ink-soft: #141414;
          --spine-paper: #ffffff;
          --spine-fog: #f4f4f4;
          --spine-line: rgba(10, 10, 10, 0.08);
          --spine-line-strong: rgba(10, 10, 10, 0.12);
          --spine-eyebrow: rgba(10, 10, 10, 0.38);
          --spine-body: rgba(10, 10, 10, 0.52);
          --spine-lede: rgba(10, 10, 10, 0.68);
          --spine-cta: #0a0a0a;
          background: var(--spine-paper);
          color: var(--spine-ink);
        }
        .spine-landing .spine-band-paper { background: var(--spine-paper); }
        .spine-landing .spine-band-fog { background: var(--spine-fog); }
        .spine-landing .spine-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--spine-eyebrow);
        }
        .spine-landing .spine-eyebrow.text-accent { color: var(--spine-accent); }
        .spine-landing .spine-body { color: var(--spine-body); }
        .spine-landing .spine-lede { color: var(--spine-lede); }
        .spine-landing .spine-film {
          background: var(--spine-ink-soft);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.04) inset,
            0 18px 40px -28px rgba(10, 10, 10, 0.45);
        }
        .spine-landing .spine-btn-ink {
          background: var(--spine-cta);
          color: #fff;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06) inset;
        }
        .spine-landing .spine-btn-ink:hover { opacity: 0.88; }
        .spine-landing .spine-ticker-name { color: rgba(10, 10, 10, 0.58); }
        .spine-landing .spine-ticker-dot { color: var(--spine-accent); opacity: 0.85; }
        .spine-landing .spine-rule { border-color: var(--spine-line); }
        .spine-landing .site-cta {
          background:
            radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255, 255, 255, 0.06), transparent 52%),
            linear-gradient(180deg, #131313 0%, #0a0a0a 45%, #070707 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }
        .spine-ticker-mask {
          mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
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

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--spine-line)] bg-white/92 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 lg:px-12">
          <a href="/" className="brand-mark text-[1.1rem] tracking-tight text-[color:var(--spine-ink)] sm:text-xl">
            Motion Story.
          </a>
          <a
            href={BOOKING_PATH}
            onClick={onBook}
            className="hidden text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--spine-body)] transition-colors hover:text-[color:var(--spine-ink)] md:inline"
          >
            Book a call
          </a>
        </div>
      </header>

      <main
        id="main-content"
        className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-[calc(4.25rem+env(safe-area-inset-top))] md:pb-0 md:pt-[4.75rem]"
      >
        {/* 1. Hero: compact, top-aligned, video balanced */}
        <section>
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 pt-8 pb-10 sm:gap-10 sm:px-6 sm:pt-10 sm:pb-12 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pt-12 lg:pb-14">
            <motion.div
              className="min-w-0 lg:col-span-5"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="spine-eyebrow mb-4">{config.hero.eyebrow}</p>
              <h1 className="font-display text-[clamp(2.1rem,4.8vw,3.75rem)] font-bold leading-[0.95] tracking-tight text-[color:var(--spine-ink)]">
                {config.hero.h1}
              </h1>
              <p className="spine-body mt-5 max-w-sm text-[15px] leading-[1.5] sm:text-[16px]">
                {config.hero.subhead}
              </p>
              <div id="hero-cta" className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                <a
                  href={BOOKING_PATH}
                  onClick={onBook}
                  className="spine-btn-ink inline-flex min-h-[48px] items-center justify-center rounded-[10px] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-opacity sm:text-[12px]"
                >
                  {config.hero.primaryCta}
                </a>
                <a
                  href="#work"
                  className="inline-flex min-h-[44px] items-center text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--spine-eyebrow)] transition-colors hover:text-[color:var(--spine-ink)]"
                >
                  {config.hero.secondaryCta} →
                </a>
              </div>
            </motion.div>

            <motion.div
              className="min-w-0 lg:col-span-7"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <StoryFilm
                videoUrl={config.hero.videoSrc}
                title={config.hero.h1}
                posterUrl={config.hero.posterUrl}
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* 2. Client ticker: two bold moving rows */}
        <section className="spine-band-fog border-y border-[color:var(--spine-line)]" aria-label={config.trustStrip.line}>
          <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-6 sm:pt-9 lg:px-12">
            <p className="spine-eyebrow text-center tracking-[0.18em]">
              {config.trustStrip.line}
            </p>
          </div>
          <div className="mt-5 space-y-0 pb-7 sm:mt-6 sm:pb-8">
            <TickerRow items={config.trustStrip.rowA} duration={42} />
            <TickerRow items={config.trustStrip.rowB} reverse duration={52} />
          </div>
        </section>

        {/* 3. Value: one centered line */}
        <section className="spine-band-fog border-y border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
            <Reveal>
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--spine-ink)] text-balance">
                {config.value.headline}
              </h2>
              {config.value.body ? (
                <p className="spine-body mx-auto mt-5 max-w-xl text-[16px] leading-[1.55] sm:text-[17px]">
                  {config.value.body}
                </p>
              ) : null}
            </Reveal>
          </div>
        </section>

        {/* 4. Work: alternating offset, top-aligned */}
        <div id="work" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 pt-14 sm:px-6 sm:pt-16 lg:px-12 lg:pt-20">
            <Reveal>
              <p className="spine-eyebrow mb-3">{config.proof.eyebrow}</p>
              <h2 className="max-w-[16ch] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--spine-ink)]">
                {config.proof.headline}
              </h2>
            </Reveal>
          </div>
          <div className="mt-4 sm:mt-6">
            {config.proof.cases.map((project, i) => (
              <ProofRow key={project.client + project.videoUrl} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* 5. Plan */}
        <section id="plan" className="scroll-mt-24 border-y border-[color:var(--spine-line)]">
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
                    <p className="spine-body mt-2.5 text-[15px] leading-[1.5]">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. Testimonial: quiet, on its own */}
        <section className="border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-2xl px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
            <Reveal>
              <blockquote>
                <p className="font-display text-[1.25rem] font-medium leading-[1.35] tracking-tight text-[color:var(--spine-ink)] sm:text-[1.5rem]">
                  “{config.testimonial.quote}”
                </p>
                <footer className="mt-6 text-[11px] uppercase tracking-[0.12em] text-[color:var(--spine-eyebrow)]">
                  {config.testimonial.name} · {config.testimonial.company}
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* 7. Close: director + book / brief link only */}
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
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
              {config.guide.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.8vw,2.65rem)] font-bold leading-[1.08] tracking-tight text-white">
              {config.success.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
              {config.guide.body}
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href={BOOKING_PATH}
                onClick={onBook}
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-[10px] bg-[color:var(--spine-accent,#FF0000)] px-8 py-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90 sm:w-auto sm:min-w-[200px] sm:text-[12px]"
              >
                Book a call
              </a>
              <a
                href="/contact/"
                className="inline-flex min-h-[44px] items-center text-[11px] font-medium uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white"
              >
                Send a brief →
              </a>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
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
                    className="flex w-full items-start justify-between gap-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--spine-ink)]"
                    aria-expanded={open}
                    onClick={() => setFaqOpen(open ? null : i)}
                  >
                    <span className="font-display text-[15px] font-bold tracking-tight text-[color:var(--spine-ink)] sm:text-base">
                      {faq.question}
                    </span>
                    <span className="mt-0.5 shrink-0 text-xl text-accent" aria-hidden="true">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  {open && (
                    <p className="spine-body max-w-xl pb-6 text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
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
          <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[color:var(--spine-eyebrow)]">
            Product demo videos for SaaS · Byron Bay
          </p>
          <p className="mt-2 text-[13px] text-[color:var(--spine-body)]">
            <a
              href="/saas-explainer-videos/"
              className="border-b border-black/15 transition-colors hover:border-[color:var(--spine-ink)] hover:text-[color:var(--spine-ink)]"
            >
              Looking for a SaaS explainer instead?
            </a>
          </p>
        </div>
      </footer>

      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--spine-line)] bg-white/95 px-3.5 pt-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-transform duration-300 md:hidden ${
          stickyVisible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
        }`}
        aria-hidden={!stickyVisible}
      >
        <a
          href={BOOKING_PATH}
          onClick={onBook}
          tabIndex={stickyVisible ? 0 : -1}
          className="spine-btn-ink flex min-h-[48px] w-full items-center justify-center rounded-[10px] px-4 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.14em]"
        >
          Book a call
        </a>
      </div>
    </div>
  );
}
