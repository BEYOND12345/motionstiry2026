import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ClientTicker from '../ClientTicker';
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
    <div className="spine-film relative aspect-video w-full overflow-hidden">
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
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/32 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Play: ${title}`}
          >
            <span className="spine-play flex h-[56px] w-[56px] items-center justify-center rounded-full sm:h-[64px] sm:w-[64px]">
              <span className="ml-0.5 h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-white sm:border-y-[10px] sm:border-l-[16px]" />
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
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
          <p className="spine-lede mt-3 max-w-[28ch] font-display text-[1.1rem] font-medium leading-[1.28] tracking-[-0.018em] sm:text-[1.25rem]">
            {project.useCase}
          </p>
          {project.outcome ? (
            <p className="spine-body mt-5 max-w-[38ch] !text-[15px] !leading-[1.5]">
              {project.outcome}
            </p>
          ) : null}
          {project.body ? (
            <p className="spine-body mt-3 max-w-[38ch] !text-[15px] !leading-[1.5]">
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
          /* Semantic palette — contrast tuned for ≥4.5:1 body on paper */
          --spine-ink: #0a0a0a;
          --spine-ink-soft: #111111;
          --spine-paper: #ffffff;
          --spine-fog: #f5f5f7;
          --spine-line: rgba(10, 10, 10, 0.08);
          --spine-line-strong: rgba(10, 10, 10, 0.14);
          --spine-eyebrow: rgba(10, 10, 10, 0.48);
          --spine-body: rgba(10, 10, 10, 0.66);
          --spine-lede: rgba(10, 10, 10, 0.78);
          --spine-cta: #0a0a0a;
          --spine-radius: 14px;
          --spine-radius-control: 980px;
          background: var(--spine-paper);
          color: var(--spine-ink);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .spine-landing .spine-band-paper { background: var(--spine-paper); }
        .spine-landing .spine-band-fog { background: var(--spine-fog); }
        .spine-landing .spine-eyebrow {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: none;
          color: var(--spine-eyebrow);
        }
        .spine-landing .spine-eyebrow.text-accent { color: var(--spine-accent); }
        .spine-landing .spine-body {
          color: var(--spine-body);
          font-size: 17px;
          line-height: 1.47;
          letter-spacing: -0.011em;
        }
        .spine-landing .spine-lede {
          color: var(--spine-lede);
          letter-spacing: -0.015em;
        }
        .spine-landing .spine-film {
          border-radius: var(--spine-radius);
          background: var(--spine-ink-soft);
          box-shadow:
            0 0 0 0.5px rgba(10, 10, 10, 0.06),
            0 2px 4px rgba(10, 10, 10, 0.04),
            0 22px 44px -20px rgba(10, 10, 10, 0.28);
        }
        .spine-landing .spine-play {
          border: 0.5px solid rgba(255, 255, 255, 0.55);
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.35) inset,
            0 10px 28px rgba(0, 0, 0, 0.28);
          transition: transform 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.22s ease;
        }
        .spine-landing button:hover .spine-play {
          transform: scale(1.04);
          background: rgba(255, 255, 255, 0.26);
        }
        .spine-landing .spine-btn-ink {
          background: var(--spine-cta);
          color: #fff;
          border-radius: var(--spine-radius-control);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08) inset;
          transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .spine-landing .spine-btn-ink:hover { opacity: 0.9; }
        .spine-landing .spine-btn-ink:active { transform: scale(0.985); }
        .spine-landing .spine-btn-label {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
          text-transform: none;
        }
        .spine-landing .spine-link-quiet {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
          text-transform: none;
          color: var(--spine-body);
          transition: color 0.2s ease;
        }
        .spine-landing .spine-link-quiet:hover { color: var(--spine-ink); }
        .spine-landing .spine-rule { border-color: var(--spine-line); }
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
          transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .spine-landing .spine-btn-accent:hover { opacity: 0.92; }
        .spine-landing .spine-btn-accent:active { transform: scale(0.985); }
        @media (prefers-reduced-motion: reduce) {
          .spine-landing .spine-play,
          .spine-landing .spine-btn-ink,
          .spine-landing .spine-btn-accent {
            transition: none !important;
          }
        }
        @media (prefers-contrast: more) {
          .spine-landing {
            --spine-eyebrow: rgba(10, 10, 10, 0.72);
            --spine-body: rgba(10, 10, 10, 0.86);
            --spine-lede: rgba(10, 10, 10, 0.92);
            --spine-line: rgba(10, 10, 10, 0.22);
          }
          .spine-landing .spine-glass,
          .spine-landing .spine-glass-bar {
            background: rgba(255, 255, 255, 0.94);
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
              {config.hero.primaryCta}
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
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="spine-eyebrow mb-4">{config.hero.eyebrow}</p>
              <h1 className="font-display text-[clamp(2.25rem,5vw,3.85rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[color:var(--spine-ink)] text-balance">
                {config.hero.h1}
              </h1>
              <p className="spine-body mt-5 max-w-[34ch]">
                {config.hero.subhead}
              </p>
              <div id="hero-cta" className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={BOOKING_PATH}
                  onClick={onBook}
                  className="spine-btn-ink spine-btn-label inline-flex min-h-[48px] items-center justify-center px-7 py-3.5"
                >
                  {config.hero.primaryCta}
                </a>
                <a
                  href="#work"
                  className="spine-link-quiet inline-flex min-h-[44px] items-center"
                >
                  {config.hero.secondaryCta}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="min-w-0 lg:col-span-7"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: [0.25, 0.1, 0.25, 1] }}
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

        {/* 2. Client ticker: shared bold dual-row trust signal */}
        <section className="spine-band-fog border-y border-[color:var(--spine-line)] px-0 py-8 sm:py-9">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <ClientTicker
              label={config.trustStrip.line}
              rowA={config.trustStrip.rowA}
              rowB={config.trustStrip.rowB}
              align="center"
            />
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

        {/* 4. Problem (optional StoryBrand beat) */}
        {config.problem ? (
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
                    <div className="grid gap-3 py-7 md:grid-cols-[minmax(12rem,18rem)_1fr] md:gap-10 md:py-8">
                      <h3 className="font-display text-[17px] font-semibold tracking-[-0.015em] text-[color:var(--spine-ink)] md:text-[18px]">
                        {item.label}
                      </h3>
                      <p className="spine-body max-w-xl !text-[16px] !leading-[1.55]">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* 5. Guide: empathy + authority */}
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
              <h2 className="max-w-[16ch] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--spine-ink)]">
                {config.guide.headline}
              </h2>
              <p className="spine-body mt-5 max-w-xl !text-[17px] !leading-[1.55]">
                {config.guide.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 6. Plan */}
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
                <a href="#work" className="spine-link-quiet inline-flex min-h-[44px] items-center">
                  {config.hero.secondaryCta}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. Stakes / failure */}
        <section className="spine-band-fog border-b border-[color:var(--spine-line)]">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
            <Reveal>
              <p className="spine-eyebrow mb-4">{config.stakes.eyebrow}</p>
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--spine-ink)] text-balance">
                {config.stakes.headline}
              </h2>
              {config.stakes.body ? (
                <p className="spine-body mx-auto mt-5 max-w-xl text-[16px] leading-[1.55] sm:text-[17px]">
                  {config.stakes.body}
                </p>
              ) : null}
            </Reveal>
          </div>
        </section>

        {/* 8. Success proof */}
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

        {/* 9. Testimonial */}
        <section className="border-y border-[color:var(--spine-line)]">
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

        {/* 10. Close: director + book */}
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
            <p className="text-[13px] font-medium tracking-[-0.01em] text-white/50">
              {config.guide.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.85rem,3.8vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.022em] text-white text-balance">
              {config.success.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-[36ch] text-[17px] leading-[1.47] tracking-[-0.011em] text-white/62">
              {config.success.body || config.guide.body}
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
              <a
                href={BOOKING_PATH}
                onClick={onBook}
                className="spine-btn-accent spine-btn-label inline-flex min-h-[48px] w-full max-w-xs items-center justify-center px-8 py-3.5 text-center sm:w-auto sm:min-w-[180px]"
              >
                {config.hero.primaryCta}
              </a>
              <a
                href="/contact/"
                className="inline-flex min-h-[44px] items-center text-[15px] font-medium tracking-[-0.01em] text-white/55 transition-colors hover:text-white"
              >
                Send a brief
              </a>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
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
                  {open && (
                    <p className="spine-body max-w-xl pb-6 !text-[16px]">
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
          <p className="mt-3 text-[14px] tracking-[-0.01em] text-[color:var(--spine-eyebrow)]">
            {config.footerLine ?? 'Product demo videos for SaaS · Byron Bay'}
          </p>
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
          {config.hero.primaryCta}
        </a>
      </div>
    </div>
  );
}
