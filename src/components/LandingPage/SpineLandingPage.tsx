import { useEffect, type ReactNode } from 'react';
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

function asParas(value?: string | string[]) {
  if (!value) return [];
  return (Array.isArray(value) ? value : [value]).filter(Boolean);
}

function markPhrase(text: string, phrase?: string) {
  if (!phrase || !text.includes(phrase)) return text;
  const at = text.indexOf(phrase);
  return (
    <>
      {text.slice(0, at)}
      <span className="spine-mark">{phrase}</span>
      {text.slice(at + phrase.length)}
    </>
  );
}

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

function caseToCard(project: SpineCase, quiet = false) {
  return {
    vimeoId: project.videoUrl,
    vimeoHash: project.vimeoHash,
    title: `${project.client} / ${project.useCase}`,
    client: project.client,
    description: quiet ? '' : project.outcome || project.body || project.useCase,
    href: project.slug ? `/casestudy/${project.slug}/` : '/work/',
  };
}

export default function SpineLandingPage({ config }: { config: SpineLandingConfig }) {
  const onBook = () => trackBookCallClick(config.slug);
  const cases = config.proof.cases;
  const quote = config.testimonial;
  const h1Lines = Array.isArray(config.hero.h1) ? config.hero.h1 : [config.hero.h1];
  const h1Text = h1Lines.join(' ');
  const heroLede = asParas(config.hero.subhead);
  const guideBody = asParas(config.guide.body);
  const valueBody = asParas(config.value.body);
  const planBody = asParas(config.plan.body);
  const proofIntro = asParas(config.proof.intro);
  const stakesBody = asParas(config.stakes.body);
  const closeBody = asParas(config.success.body);
  const showPlan = Boolean(config.plan.headline) && (planBody.length > 0 || config.plan.steps.length > 0);
  const workLed = Boolean(config.proof.workLed);
  const faqs = workLed ? config.faq.items.slice(0, 4) : config.faq.items;

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
        <a href="/" className="brand-mark text-[0.775rem] leading-none">
          MotionStory.
        </a>
      </header>

      <main id="main-content" className="spine-studio mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <header className="spine-hero grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-5">
            <h1 className="font-display text-[clamp(2.15rem,4.6vw,3.6rem)] font-medium leading-[1.05] tracking-tight text-balance">
              {h1Lines.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {markPhrase(line, workLed ? 'easy to understand' : undefined)}
                </span>
              ))}
            </h1>
            <div className="mt-5 max-w-[34rem] space-y-[0.3rem]">
              {heroLede.map((para) => (
                <p key={para} className="text-[1.0625rem] leading-[1.5] text-[#444]">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start gap-3">
              <a id="hero-cta" href={BOOKING_PATH} onClick={onBook} className="ms-btn">
                {config.hero.primaryCta}
              </a>
              {config.hero.secondaryCtaHref ? (
                <a href={config.hero.secondaryCtaHref} className="border-b border-black/20 pb-0.5 text-[0.875rem]">
                  {config.hero.secondaryCta}
                </a>
              ) : null}
            </div>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <VimeoEmbed
              vimeoId={config.hero.videoSrc}
              vimeoHash={config.hero.videoHash}
              title={h1Text}
              loading="eager"
              className="rounded-xl"
            />
          </div>
        </header>

        <section className={workLed ? 'mt-10 sm:mt-12' : 'mt-12 sm:mt-16'} aria-label={config.trustStrip.line}>
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
          <div className="min-w-0 max-w-[40rem] pt-0.5">
            <p className="font-display text-[1.2rem] font-medium leading-[1.22] tracking-tight">
              {config.guide.headline}
            </p>
            {guideBody.length > 0 ? (
              <div className="copy-run">
                {guideBody.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            ) : null}
            {!workLed ? (
              <p className="mt-3 text-[0.875rem] tracking-tight text-black/55">
                {config.guide.name}
                <span className="mx-2 opacity-30">·</span>
                {config.guide.role}
              </p>
            ) : null}
          </div>
        </section>

        {valueBody.length > 0 ? (
          <section className="mt-14 max-w-xl sm:mt-16">
            <p className="font-display text-[1.4rem] font-medium leading-[1.2] tracking-tight sm:text-[1.65rem]">
              {config.value.headline}
            </p>
            {valueBody.length > 0 ? (
              <div className="copy-run copy-run-lg">
                {valueBody.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {showPlan ? (
          <section className="mt-14 max-w-xl sm:mt-16">
            <p className="font-display text-[1.4rem] font-medium tracking-tight sm:text-[1.65rem]">
              {config.plan.headline}
            </p>
            {planBody.length > 0 ? (
              <div className="copy-run copy-run-lg">
                {planBody.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            ) : null}
            {config.plan.steps.length > 0 ? (
              <ul className="mt-8">
                {config.plan.steps.map((step) => (
                  <li key={step.label} className="border-t border-black/10 py-3.5">
                    <p className="font-display text-[1.05rem] font-medium tracking-tight">{step.label}</p>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-black/55">{step.body}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        <section id="work" className={workLed ? 'mt-14 sm:mt-16' : 'mt-16 sm:mt-20'}>
          {config.proof.headline ? (
            <p className="font-display text-[1.4rem] font-medium leading-[1.2] tracking-tight sm:text-[1.65rem]">
              {config.proof.headline}
            </p>
          ) : null}
          {proofIntro.length > 0 ? (
            <div className="copy-run copy-run-lg max-w-xl">
              {proofIntro.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          ) : null}
          <div
            className={`work-grid ${config.proof.headline || proofIntro.length ? 'mt-8' : ''} ${
              workLed ? 'spine-work-led' : ''
            }`}
          >
            {(() => {
              const weaves = config.proof.weaves ?? [];
              const gridCases = workLed || weaves.length > 0 ? cases : cases.slice(0, 6);
              const nodes: ReactNode[] = [];

              gridCases.forEach((project, i) => {
                nodes.push(
                  <WorkCard
                    key={project.videoUrl}
                    {...caseToCard(project)}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                );
                if (i === 1 && !workLed) {
                  nodes.push(
                    <blockquote key="quote" className="work-grid-break">
                      <p className="font-display text-[1.2rem] font-medium leading-[1.35] tracking-tight sm:text-[1.4rem]">
                        “{quote.quote}”
                      </p>
                      <footer className="mt-3 text-[0.875rem] text-black/55">
                        {quote.name}
                        <span className="mx-2 opacity-30">·</span>
                        {quote.company}
                      </footer>
                    </blockquote>
                  );
                }
                const weave = weaves.find((item) => item.after === i + 1);
                if (weave?.quote) {
                  nodes.push(
                    <blockquote key={`quote-${weave.after}`} className="spine-aside self-start">
                      <p className="font-display text-[1.2rem] font-medium leading-[1.35] tracking-tight sm:text-[1.35rem]">
                        “{weave.quote.text}”
                      </p>
                      <footer className="mt-3 text-[0.875rem] text-black/55">
                        {weave.quote.name === weave.quote.company
                          ? weave.quote.name
                          : `${weave.quote.name} · ${weave.quote.company}`}
                      </footer>
                    </blockquote>
                  );
                } else if (weave) {
                  const weaveParas = asParas(weave.text).slice(0, 2);
                  const lastWeave = !weaves.some((item) => item.after > weave.after);
                  const ctaHere = workLed && lastWeave && !config.success.headline && closeBody.length === 0;
                  nodes.push(
                    <div key={`weave-${weave.after}`} className="spine-aside self-start">
                      {weave.headline ? (
                        <p className="spine-break-title">{markPhrase(weave.headline, weave.mark)}</p>
                      ) : null}
                      {weaveParas.map((para) => (
                        <p key={para} className="spine-break-copy">
                          {para}
                        </p>
                      ))}
                      {ctaHere ? (
                        <div className="mt-7">
                          <a id="final-cta" href={BOOKING_PATH} onClick={onBook} className="ms-btn">
                            {config.hero.primaryCta}
                          </a>
                        </div>
                      ) : null}
                    </div>
                  );
                }
              });
              return nodes;
            })()}
          </div>
        </section>

        {stakesBody.length > 0 ? (
          <section className="mt-16 max-w-xl sm:mt-20">
            <p className="font-display text-[1.4rem] font-medium leading-[1.2] tracking-tight sm:text-[1.65rem]">
              {config.stakes.headline}
            </p>
            <div className="copy-run copy-run-lg">
              {stakesBody.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </section>
        ) : null}

        {config.success.headline || closeBody.length > 0 ? (
          <section id="final-cta" className="mt-16 max-w-xl sm:mt-20">
            {config.success.headline ? (
              <p className="font-display text-[1.45rem] font-medium leading-[1.2] tracking-tight sm:text-[1.85rem]">
                {markPhrase(config.success.headline, workLed ? 'finished film' : undefined)}
              </p>
            ) : null}
            {closeBody.length > 0 ? (
              <div className="copy-run copy-run-lg">
                {closeBody.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            ) : null}
            <div className="mt-8">
              <a href={BOOKING_PATH} onClick={onBook} className="ms-btn">
                {config.hero.primaryCta}
              </a>
            </div>
          </section>
        ) : null}

        {faqs.length > 0 ? (
          <section className="mt-16 max-w-2xl sm:mt-20">
            <div className="fold">
              {faqs.map((faq) => (
                <details key={faq.question} className="fold-item">
                  <summary>{faq.question}</summary>
                  <div className="fold-body">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ) : null}
      </main>

      {!config.siteFooter ? (
        <footer className="px-5 pb-10 sm:px-8 lg:px-12">
          <p className="brand-mark text-[0.775rem] leading-none">MotionStory.</p>
          {config.footerLine ? (
            <p className="mt-3 text-[0.875rem] text-black/40">{config.footerLine}</p>
          ) : null}
        </footer>
      ) : null}
    </div>
  );
}
