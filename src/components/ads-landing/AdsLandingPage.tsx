import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from 'react';
import { getAdsPortfolio } from '../../data/ads-landing/portfolio';
import type { AdsLandingConfig, AdsProject } from '../../data/ads-landing/types';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

function trackBookCall() {
  pushEvent('book_call', { event_category: 'conversion' });
}

function trackGenerateLead() {
  pushEvent('generate_lead', { event_category: 'conversion' });
}

function HeroVideo({
  vimeoId,
  title,
  posterUrl,
}: {
  vimeoId: string;
  title: string;
  posterUrl?: string;
}) {
  const [playing, setPlaying] = useState(false);
  /** Desktop muted loop only — mobile stays poster-first for data, battery, and calm first paint */
  const [allowPreview, setAllowPreview] = useState(false);
  const poster = posterUrl ?? `https://vumbnail.com/${vimeoId}.jpg`;

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
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
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
      />
      {allowPreview && (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover opacity-90"
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
  project: AdsLandingConfig['projects'][number];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
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
        className="relative w-full max-w-5xl aspect-video bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 bg-black/55 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm hover:text-white md:-top-12 md:right-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none"
        >
          Close
        </button>
        <iframe
          src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`${project.client} — ${project.result}`}
        />
      </div>
    </div>
  );
}

function ContactForm({ config }: { config: AdsLandingConfig }) {
  const ids = {
    name: useId(),
    email: useId(),
    company: useId(),
    brief: useId(),
  };

  function onSubmit(_e: FormEvent<HTMLFormElement>) {
    trackGenerateLead();
  }

  return (
    <form
      id="brief"
      action={config.formspreeAction}
      method="POST"
      onSubmit={onSubmit}
      className="mt-14 scroll-mt-28 space-y-10 border-t border-black/10 pt-12 sm:mt-16 sm:pt-14 md:scroll-mt-32"
    >
      <input type="hidden" name="_next" value={config.thankYouUrl} />
      <input type="hidden" name="_subject" value={`Ads brief — ${config.serviceKeyword}`} />

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
          What are you trying to explain?
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
        Send brief
      </button>
    </form>
  );
}

function PrimaryBookCta({
  href,
  label,
  className = '',
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={trackBookCall}
      className={`inline-flex min-h-[52px] w-full max-w-md items-center justify-center bg-black px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80 sm:w-auto sm:min-w-[260px] sm:px-10 sm:text-[12px] sm:tracking-[0.16em] ${className}`}
    >
      {label}
    </a>
  );
}

function WorkCard({
  project,
  onSelect,
}: {
  project: AdsProject;
  onSelect: (project: AdsProject) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group w-[72vw] max-w-[320px] shrink-0 text-left sm:w-[300px] sm:max-w-none md:w-[340px]"
    >
      <div className="relative aspect-video overflow-hidden bg-black/[0.04]">
        <img
          src={`https://vumbnail.com/${project.vimeoId}.jpg`}
          alt={project.thumbnailAlt ?? `${project.client} project`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-black/15">
          <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
        </span>
      </div>
      <p className="mt-4 font-display text-base font-bold tracking-tight md:text-lg">{project.client}</p>
      <p className="mt-1.5 line-clamp-2 text-[14px] leading-relaxed text-black/50">{project.result}</p>
    </button>
  );
}

function WorkMarquee({
  projects,
  onSelect,
}: {
  projects: AdsProject[];
  onSelect: (project: AdsProject) => void;
}) {
  const [paused, setPaused] = useState(false);
  const loop = useMemo(() => [...projects, ...projects], [projects]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16 md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16 md:w-24" />

      <div className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] md:overflow-hidden [&::-webkit-scrollbar]:hidden">
        <div
          className="ads-work-marquee-track flex w-max gap-5 px-5 py-1 sm:gap-7 sm:px-6 md:gap-8 md:px-0 md:pr-5 lg:px-0"
          style={{
            animation: 'ads-marquee 120s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {loop.map((project, i) => (
            <WorkCard
              key={`${project.vimeoId}-${i}`}
              project={project}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdsLandingPage({ config }: { config: AdsLandingConfig }) {
  const [lightbox, setLightbox] = useState<AdsProject | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [stickyVisible, setStickyVisible] = useState(false);
  const accent = config.accent ?? '#FF0000';
  const stickyRef = useRef<HTMLAnchorElement>(null);
  const stickyLabel = config.stickyBookingLabel ?? 'Book a project call';
  const portfolio = useMemo(() => getAdsPortfolio(config.projects), [config.projects]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = config.bookingUrl;
    document.head.appendChild(link);
  }, [config.bookingUrl]);

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
    <div className="overflow-x-clip bg-white text-black" style={{ ['--ads-accent' as string]: accent }}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-12">
          <a href="/" className="font-display text-[1.15rem] font-bold tracking-tight sm:text-xl">
            Motion Story.
          </a>
          <a
            href={config.bookingUrl}
            onClick={trackBookCall}
            className="hidden text-[11px] font-medium uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black md:inline"
          >
            Book a call
          </a>
        </div>
      </header>

      <main
        id="main-content"
        className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0"
      >
        {/* 1. Hero — copy centered, video becomes a full-bleed desktop plane */}
        <section className="pt-[calc(5.5rem+env(safe-area-inset-top))] md:pt-28 lg:pt-32">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-12">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-black/40 sm:mb-6 sm:text-[11px] sm:tracking-[0.2em]">
              {config.serviceKeyword}
            </p>
            <h1 className="font-display text-[clamp(2.15rem,6.8vw,6rem)] font-bold leading-[0.95] tracking-tight sm:leading-[0.9]">
              {config.h1}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.65] text-black/50 sm:mt-6 sm:text-[17px] md:text-[18px]">
              {config.subhead}
            </p>
          </div>

          {/* Mobile: inset. md+: edge-to-edge cinematic showreel */}
          <div className="mt-8 px-5 sm:mt-10 sm:px-6 md:mt-12 md:px-0">
            <HeroVideo
              vimeoId={config.heroVimeoId}
              title={config.heroVideoTitle}
              posterUrl={config.heroPosterUrl}
            />
          </div>
        </section>

        {/* CTA band — separated from hero so the first viewport stays calm */}
        <section id="hero-cta" className="mx-auto max-w-7xl px-5 pt-12 sm:px-6 sm:pt-14 lg:px-12 lg:pt-16">
          <div className="flex flex-col items-center gap-4 border-t border-black/8 pt-10 sm:gap-5 sm:pt-12 md:flex-row md:justify-center md:gap-10 md:pt-14">
            <PrimaryBookCta href={config.bookingUrl} label={config.bookingLabel} />
            <a
              href="#brief"
              className="inline-flex min-h-[44px] items-center text-[11px] font-medium uppercase tracking-[0.14em] text-black/40 transition-colors hover:text-black sm:text-[12px] sm:tracking-[0.16em]"
            >
              {config.secondaryCtaLabel}
            </a>
          </div>
        </section>

        {/* 2. Trust strip */}
        <section className="mx-auto mt-16 max-w-7xl px-5 sm:mt-20 sm:px-6 md:mt-28 lg:px-12">
          <div className="border-y border-black/8 py-12 sm:py-14 md:py-16">
            <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-black/35 sm:mb-10 sm:text-[11px] sm:tracking-[0.18em]">
              {config.trustLine}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-10 sm:gap-y-5 md:gap-x-14 md:gap-y-6">
              {config.logos.map((logo) => (
                <li key={logo.name} className="flex items-center justify-center">
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-6 w-auto opacity-35 grayscale sm:h-7 md:h-8"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-display text-[13px] font-medium tracking-tight text-black/28 sm:text-sm md:text-[15px]">
                      {logo.name}
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
            {config.coreSell}
          </p>
          <div className="mt-12 grid gap-px bg-black/8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {config.proofPoints.map((point) => (
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
              <p className="font-display text-[2.15rem] font-bold tracking-tight sm:text-4xl lg:text-6xl">
                {config.middleGround.leftLabel}
              </p>
              <p className="font-display text-[2.15rem] font-bold tracking-tight text-white/30 sm:text-4xl lg:text-6xl">
                {config.middleGround.rightLabel}
              </p>
            </div>
            <p className="max-w-lg self-center text-[15px] leading-[1.7] text-white/60 sm:text-[17px] lg:text-[18px]">
              {config.middleGround.body}
            </p>
          </div>
        </section>

        {/* 5. Featured work — slow full-bleed marquee of the full portfolio */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-end justify-between gap-x-6 gap-y-2 px-5 sm:mb-12 sm:px-6 lg:px-12">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Featured work
            </h2>
            <span className="text-[10px] uppercase tracking-[0.16em] text-black/35 sm:text-[11px]">
              Selected films · hover to pause
            </span>
          </div>
          <WorkMarquee projects={portfolio} onSelect={setLightbox} />
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
            {config.processSteps.map((step, i) => (
              <li key={step} className="border-t border-black/12 pt-6">
                <span className="text-[11px] uppercase tracking-[0.16em] text-black/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-4 font-display text-lg font-bold tracking-tight lg:text-xl">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 8. FAQ */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
          <h2 className="mb-10 font-display text-2xl font-bold tracking-tight sm:mb-12">Questions</h2>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {config.faqs.map((faq, i) => {
              const open = faqOpen === i;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-5 py-5 text-left sm:gap-8 sm:py-6"
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

        {/* 9–10. Final CTA + form */}
        <section
          id="final-cta"
          className="mx-auto max-w-3xl scroll-mt-28 px-5 pb-24 pt-8 sm:px-6 sm:pb-28 sm:pt-10 md:scroll-mt-32 lg:px-12 lg:pb-40"
        >
          <h2 className="font-display text-[1.85rem] font-bold tracking-tight sm:text-3xl lg:text-5xl">
            {config.finalCtaHeading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-black/50 sm:mt-5 sm:text-[16px]">
            {config.finalCtaSubhead}
          </p>
          <PrimaryBookCta href={config.bookingUrl} label={config.bookingLabel} className="mt-8 sm:mt-10" />
          <ContactForm config={config} />
        </section>
      </main>

      <footer className="border-t border-black/10 px-5 py-12 pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-14 md:pb-14 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-lg font-bold tracking-tight">Motion Story.</p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-black/35">
              Featured on Behance · Clutch-awarded
            </p>
            <p className="mt-2 text-[13px] text-black/35">Not currently hiring — briefs only.</p>
          </div>
          <a
            href={config.bookingUrl}
            onClick={trackBookCall}
            className="inline-flex min-h-[44px] items-center text-[11px] uppercase tracking-[0.16em] text-black/45 transition-colors hover:text-black"
          >
            Book a project call
          </a>
        </div>
      </footer>

      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-3.5 pt-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-transform duration-300 md:hidden ${
          stickyVisible && !lightbox ? 'translate-y-0' : 'pointer-events-none translate-y-full'
        }`}
        aria-hidden={!stickyVisible || !!lightbox}
      >
        <a
          ref={stickyRef}
          href={config.bookingUrl}
          onClick={trackBookCall}
          tabIndex={stickyVisible && !lightbox ? 0 : -1}
          className="flex min-h-[48px] w-full items-center justify-center bg-black px-4 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white"
        >
          {stickyLabel}
        </a>
      </div>

      {lightbox && <Lightbox project={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}
