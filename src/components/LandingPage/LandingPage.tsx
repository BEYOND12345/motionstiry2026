import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { vimeoIdFrom, type LandingPageConfig } from './types';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Shared Formspree endpoint for Ads landing briefs */
const FORMSPREE_ACTION = 'https://formspree.io/f/xaqlpada';
const BOOKING_PATH = '/book/';
const THANK_YOU_URL = 'https://motionstory.com.au/thank-you/';

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

function trackGenerateLead(slug: string) {
  pushEvent('generate_lead', { event_category: 'conversion', slug });
}

function HeroVideo({
  loopSrc,
  fullSrc,
  title,
  posterUrl,
}: {
  loopSrc: string;
  fullSrc: string;
  title: string;
  posterUrl?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [allowPreview, setAllowPreview] = useState(false);
  const loopId = vimeoIdFrom(loopSrc);
  const fullId = vimeoIdFrom(fullSrc);
  const poster = posterUrl ?? `https://vumbnail.com/${loopId}.jpg`;

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const sync = () => setAllowPreview(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const frameClass =
    'relative aspect-video w-full overflow-hidden bg-black md:aspect-[2.35/1]';

  if (playing) {
    return (
      <div className={frameClass}>
        <iframe
          src={`https://player.vimeo.com/video/${fullId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      {allowPreview && (
        <iframe
          src={`https://player.vimeo.com/video/${loopId}?background=1&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`}
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
        className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={`Play full video: ${title}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/90 bg-black/20 backdrop-blur-[2px] sm:h-16 sm:w-16 md:h-20 md:w-20">
          <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
        </span>
      </button>
    </div>
  );
}

function Lightbox({
  project,
  onClose,
}: {
  project: LandingPageConfig['featuredWork']['projects'][number];
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const vimeoId = vimeoIdFrom(project.videoUrl);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], iframe, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.client} video`}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative aspect-video w-full max-w-5xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 bg-black/55 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:-top-12 md:right-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none"
        >
          Close
        </button>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`${project.client} — ${project.oneLineResult}`}
        />
      </div>
    </div>
  );
}

function ContactForm({
  config,
}: {
  config: LandingPageConfig;
}) {
  const ids = {
    name: useId(),
    email: useId(),
    company: useId(),
    brief: useId(),
  };
  const [error, setError] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.preventDefault();
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    trackGenerateLead(config.slug);
  }

  return (
    <form
      id="brief"
      action={FORMSPREE_ACTION}
      method="POST"
      onSubmit={onSubmit}
      noValidate
      className="mt-14 scroll-mt-28 space-y-10 border-t border-black/10 pt-12 sm:mt-16 sm:pt-14 md:scroll-mt-32"
    >
      <input type="hidden" name="_next" value={THANK_YOU_URL} />
      <input type="hidden" name="_subject" value={`Ads brief — ${config.slug}`} />

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor={ids.name} className="mb-3 block text-[11px] font-medium uppercase tracking-[0.14em] text-black/50">
            Name
          </label>
          <input
            id={ids.name}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border-b border-black/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-black"
          />
        </div>
        <div>
          <label htmlFor={ids.email} className="mb-3 block text-[11px] font-medium uppercase tracking-[0.14em] text-black/50">
            Work email
          </label>
          <input
            id={ids.email}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border-b border-black/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-black"
          />
        </div>
      </div>

      <div>
        <label htmlFor={ids.company} className="mb-3 block text-[11px] font-medium uppercase tracking-[0.14em] text-black/50">
          Company
        </label>
        <input
          id={ids.company}
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="w-full border-b border-black/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-black"
        />
      </div>

      <div>
        <label htmlFor={ids.brief} className="mb-3 block text-[11px] font-medium uppercase tracking-[0.14em] text-black/50">
          {config.form.textareaLabel}
        </label>
        <textarea
          id={ids.brief}
          name="message"
          required
          rows={5}
          className="w-full resize-y border-b border-black/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-black"
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[48px] w-full items-center justify-center bg-black px-8 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80 sm:w-auto"
      >
        {config.form.submitButtonLabel}
      </button>
    </form>
  );
}

export default function LandingPage({ config }: { config: LandingPageConfig }) {
  const [lightbox, setLightbox] = useState<LandingPageConfig['featuredWork']['projects'][number] | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [stickyVisible, setStickyVisible] = useState(false);

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

  const onBook = () => trackBookCallClick(config.slug);
  const middleLines = config.middleGround.headline.split(/(?<=\.)\s+/).filter(Boolean);

  return (
    <div
      className="overflow-x-clip bg-white text-black"
      style={{ ['--landing-accent' as string]: config.accentColor }}
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-12">
          <a href="/" className="font-display text-[1.15rem] font-bold tracking-tight sm:text-xl">
            Motion Story.
          </a>
          <a
            href={BOOKING_PATH}
            onClick={onBook}
            className="hidden text-[11px] font-medium uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black md:inline"
          >
            Book a call
          </a>
        </div>
      </header>

      <main id="main-content" className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
        {/* 1. Hero */}
        <section className="pt-[calc(5.5rem+env(safe-area-inset-top))] md:pt-28 lg:pt-32">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-12">
            <h1 className="font-display text-[clamp(2.15rem,6.8vw,6rem)] font-bold leading-[0.95] tracking-tight sm:leading-[0.9]">
              {config.hero.h1}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.65] text-black/50 sm:mt-6 sm:text-[17px] md:text-[18px]">
              {config.hero.subhead}
            </p>
          </div>

          <div className="mt-8 px-5 sm:mt-10 sm:px-6 md:mt-12 md:px-0">
            <HeroVideo
              loopSrc={config.hero.videoSrc}
              fullSrc={config.hero.fullShowreelUrl}
              title={config.hero.h1}
              posterUrl={config.hero.posterUrl}
            />
          </div>
        </section>

        <section id="hero-cta" className="mx-auto max-w-7xl px-5 pt-12 sm:px-6 sm:pt-14 lg:px-12 lg:pt-16">
          <div className="flex flex-col items-center gap-4 border-t border-black/8 pt-10 sm:gap-5 sm:pt-12 md:flex-row md:justify-center md:gap-10 md:pt-14">
            <a
              href={BOOKING_PATH}
              onClick={onBook}
              className="inline-flex min-h-[52px] w-full max-w-md items-center justify-center bg-black px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80 sm:w-auto sm:min-w-[260px] sm:px-10 sm:text-[12px] sm:tracking-[0.16em]"
            >
              Book a 20-minute project call
            </a>
            <a
              href="#brief"
              className="inline-flex min-h-[44px] items-center text-[11px] font-medium uppercase tracking-[0.14em] text-black/40 transition-colors hover:text-black sm:text-[12px] sm:tracking-[0.16em]"
            >
              Send a brief
            </a>
          </div>
        </section>

        {/* 2. Trust strip */}
        <section className="mx-auto mt-16 max-w-7xl px-5 sm:mt-20 sm:px-6 md:mt-28 lg:px-12">
          <div className="border-y border-black/8 py-12 sm:py-14 md:py-16">
            <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-black/35 sm:mb-10 sm:text-[11px] sm:tracking-[0.18em]">
              {config.trustStrip.line}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-10 sm:gap-y-5 md:gap-x-14 md:gap-y-6">
              {config.trustStrip.logos.map((logo) => (
                <li key={logo.alt} className="flex items-center justify-center">
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6 w-auto opacity-35 grayscale sm:h-7 md:h-8"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-display text-[13px] font-medium tracking-tight text-black/28 sm:text-sm md:text-[15px]">
                      {logo.alt}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Core sell */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
          <p className="max-w-4xl font-display text-[1.4rem] font-medium leading-[1.28] tracking-tight sm:text-[1.75rem] sm:leading-[1.25] lg:text-[2.5rem] lg:leading-[1.18]">
            {config.coreSell.leadCopy}
          </p>
          <div className="mt-12 grid gap-px bg-black/8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {config.coreSell.proofPoints.map((point) => (
              <div key={point.title} className="bg-white p-7 sm:p-8 md:p-10">
                <h2 className="font-display text-lg font-bold tracking-tight">{point.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-black/50 sm:mt-4">{point.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Middle ground */}
        <section className="bg-black text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:gap-12 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-20 lg:gap-28 lg:px-12 lg:py-36">
            <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5">
              {middleLines.map((line, i) => (
                <p
                  key={line}
                  className={`font-display text-[2.15rem] font-bold tracking-tight sm:text-4xl lg:text-6xl ${
                    i > 0 ? 'text-white/30' : ''
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="max-w-lg self-center text-[15px] leading-[1.7] text-white/60 sm:text-[17px] lg:text-[18px]">
              {config.middleGround.body}
            </p>
          </div>
        </section>

        {/* 5. Featured work — exactly 3 */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 sm:mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Featured work
            </h2>
            <span className="text-[10px] uppercase tracking-[0.16em] text-black/35 sm:text-[11px]">
              Three pieces
            </span>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
            {config.featuredWork.projects.map((project) => (
              <button
                key={project.videoUrl + project.client}
                type="button"
                onClick={() => setLightbox(project)}
                className="group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <div className="relative aspect-video overflow-hidden bg-black/[0.04]">
                  <img
                    src={project.thumbnail}
                    alt={`${project.client} project`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
                  <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-black/15">
                    <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
                  </span>
                </div>
                <p className="mt-5 font-display text-lg font-bold tracking-tight">{project.client}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-black/50">{project.oneLineResult}</p>
              </button>
            ))}
          </div>
        </section>

        {/* 6. Testimonial */}
        <section className="border-y border-black/8 bg-black/[0.015]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
            <blockquote className="font-display text-[1.4rem] font-medium leading-[1.28] tracking-tight sm:text-[1.75rem] sm:leading-[1.25] lg:text-[2.75rem] lg:leading-[1.15]">
              “{config.testimonial.quote}”
            </blockquote>
            <footer className="mt-10 sm:mt-12">
              <p className="font-display text-sm font-bold tracking-tight">{config.testimonial.name}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-black/40">
                {config.testimonial.role}, {config.testimonial.company}
              </p>
            </footer>
          </div>
        </section>

        {/* 7. Process */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28">
          <h2 className="mb-10 font-display text-2xl font-bold tracking-tight sm:mb-12 md:text-3xl lg:text-4xl">
            Owned end to end
          </h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {config.process.steps.map((step, i) => (
              <li key={step.label} className="border-t border-black/12 pt-6">
                <span className="text-[11px] uppercase tracking-[0.16em] text-black/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-4 font-display text-lg font-bold tracking-tight lg:text-xl">{step.label}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-black/50">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 8. FAQ */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
          <h2 className="mb-10 font-display text-2xl font-bold tracking-tight sm:mb-12">Questions</h2>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {config.faq.items.map((faq, i) => {
              const open = faqOpen === i;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-5 py-5 text-left sm:gap-8 sm:py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    aria-expanded={open}
                    onClick={() => setFaqOpen(open ? null : i)}
                  >
                    <span className="font-display text-[15px] font-bold tracking-tight sm:text-base md:text-lg">
                      {faq.question}
                    </span>
                    <span className="mt-0.5 shrink-0 text-xl text-black/25" aria-hidden="true">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  {open && (
                    <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-black/50 sm:pb-7">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. Final CTA + form */}
        <section
          id="final-cta"
          className="mx-auto max-w-3xl scroll-mt-28 px-5 pb-24 pt-8 sm:px-6 sm:pb-28 sm:pt-10 md:scroll-mt-32 lg:px-12 lg:pb-40"
        >
          <h2 className="font-display text-[1.85rem] font-bold tracking-tight sm:text-3xl lg:text-5xl">
            {config.finalCta.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-black/50 sm:mt-5 sm:text-[16px]">
            {config.finalCta.formIntro}
          </p>
          <a
            href={BOOKING_PATH}
            onClick={onBook}
            className="mt-8 inline-flex min-h-[52px] w-full max-w-md items-center justify-center bg-black px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80 sm:mt-10 sm:w-auto sm:min-w-[260px] sm:px-10 sm:text-[12px]"
          >
            Book a 20-minute project call
          </a>
          <ContactForm config={config} />
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="border-t border-black/10 px-5 py-12 pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-14 md:pb-14 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-display text-lg font-bold tracking-tight">Motion Story.</p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-black/35">
            Featured on Behance · Clutch-awarded
          </p>
          <p className="mt-2 text-[13px] text-black/35">Not currently hiring — briefs only.</p>
        </div>
      </footer>

      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-3.5 pt-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-transform duration-300 md:hidden ${
          stickyVisible && !lightbox ? 'translate-y-0' : 'pointer-events-none translate-y-full'
        }`}
        aria-hidden={!stickyVisible || !!lightbox}
      >
        <a
          href={BOOKING_PATH}
          onClick={onBook}
          tabIndex={stickyVisible && !lightbox ? 0 : -1}
          className="flex min-h-[48px] w-full items-center justify-center bg-black px-4 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white"
        >
          Book a project call
        </a>
      </div>

      {lightbox && <Lightbox project={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}
