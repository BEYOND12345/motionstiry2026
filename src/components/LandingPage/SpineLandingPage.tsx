import { useEffect } from 'react';
import ClientTicker from '../ClientTicker';
import VimeoEmbed from '../VimeoEmbed';
import WorkCard from '../WorkCard';
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

function caseToCard(project: SpineCase) {
  return {
    vimeoId: project.videoUrl,
    vimeoHash: project.vimeoHash,
    title: `${project.client} / ${project.useCase}`,
    client: project.client,
    description: project.outcome || project.body || project.useCase,
    href: project.slug ? `/casestudy/${project.slug}/` : '/work/',
  };
}

export default function SpineLandingPage({ config }: { config: SpineLandingConfig }) {
  const onBook = () => trackBookCallClick(config.slug);
  const cases = config.proof.cases;
  const quote = config.testimonial;

  useEffect(() => {
    pushEvent('page_view', { slug: config.slug, page: config.seo.canonicalPath });
  }, [config.slug, config.seo.canonicalPath]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = BOOKING_PATH;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <div className="grain-overlay" />

      <header className="px-5 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-8 lg:px-12">
        <a href="/" className="brand-mark text-[1.1rem] sm:text-xl">
          MotionStory.
        </a>
      </header>

      <main id="main-content" className="spine-studio mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <header className="spine-hero grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-5">
            <h1 className="font-display text-[clamp(2.15rem,4.6vw,3.6rem)] font-medium leading-[1.05] tracking-tight text-balance">
              {config.hero.h1}
            </h1>
            <p className="mt-5 max-w-[34rem] font-display text-[1.15rem] font-medium leading-[1.4] tracking-tight text-black/80 sm:text-[1.25rem]">
              {config.hero.subhead}
            </p>
            <div className="mt-8">
              <a
                id="hero-cta"
                href={BOOKING_PATH}
                onClick={onBook}
                className="ms-btn"
              >
                {config.hero.primaryCta}
              </a>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <VimeoEmbed
              vimeoId={config.hero.videoSrc}
              title={config.hero.h1}
              loading="eager"
              className="rounded-xl"
            />
          </div>
        </header>

        <section className="mt-12 sm:mt-16" aria-label={config.trustStrip.line}>
          <ClientTicker
            compact
            label=""
            rowA={config.trustStrip.rowA}
            rowB={config.trustStrip.rowB}
          />
        </section>

        <section className="mt-12 flex items-start gap-4 sm:mt-16 sm:gap-6">
          <img
            src={config.guide.photoSrc}
            alt={config.guide.name}
            width={72}
            height={72}
            className="dan-photo dan-photo-md"
          />
          <div className="min-w-0 pt-0.5">
            <p className="font-display text-[1.125rem] font-medium leading-[1.4] tracking-tight sm:text-[1.2rem]">
              {config.guide.headline} {config.guide.body}
            </p>
            <p className="mt-2 text-[0.8125rem] tracking-tight text-black/40">
              {config.guide.name}
              <span className="mx-2 opacity-30">·</span>
              {config.guide.role}
            </p>
          </div>
        </section>

        <section className="mt-14 max-w-xl sm:mt-16">
          <p className="font-display text-[1.4rem] font-medium tracking-tight sm:text-[1.65rem]">
            {config.plan.headline}
          </p>
          <ul className="mt-8">
            {config.plan.steps.map((step) => (
              <li key={step.label} className="border-t border-black/10 py-3.5">
                <p className="font-display text-[1.05rem] font-medium tracking-tight">{step.label}</p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-black/55">{step.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="mt-16 sm:mt-20">
          <p className="font-display text-[1.4rem] font-medium tracking-tight sm:text-[1.65rem]">
            {config.proof.headline}
          </p>
          <div className="work-grid mt-8">
            {cases.slice(0, 2).map((project, i) => (
              <WorkCard key={project.videoUrl} {...caseToCard(project)} loading={i === 0 ? 'eager' : 'lazy'} />
            ))}

            <blockquote className="work-grid-break">
              <p className="font-display text-[1.2rem] font-medium leading-[1.35] tracking-tight sm:text-[1.4rem]">
                “{quote.quote}”
              </p>
              <footer className="mt-3 text-[0.8125rem] text-black/40">
                {quote.name}
                <span className="mx-2 opacity-30">·</span>
                {quote.company}
              </footer>
            </blockquote>

            {cases.slice(2, 6).map((project) => (
              <WorkCard key={project.videoUrl} {...caseToCard(project)} />
            ))}
          </div>
        </section>

        <section id="final-cta" className="mt-16 max-w-xl sm:mt-20">
          <p className="font-display text-[1.45rem] font-medium leading-[1.2] tracking-tight sm:text-[1.85rem]">
            {config.success.headline}
          </p>
          {config.success.body ? (
            <p className="mt-5 text-[1.05rem] leading-[1.65] text-black/70">{config.success.body}</p>
          ) : null}
          <div className="mt-8">
            <a href={BOOKING_PATH} onClick={onBook} className="ms-btn">
              {config.hero.primaryCta}
            </a>
          </div>
        </section>

        <section className="mt-16 max-w-2xl sm:mt-20">
          <div className="fold">
            {config.faq.items.map((faq) => (
              <details key={faq.question} className="fold-item">
                <summary>{faq.question}</summary>
                <div className="fold-body">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-5 pb-10 sm:px-8 lg:px-12">
        <p className="brand-mark text-lg">MotionStory.</p>
        {config.footerLine ? (
          <p className="mt-3 text-[0.875rem] text-black/40">{config.footerLine}</p>
        ) : null}
      </footer>
    </div>
  );
}
