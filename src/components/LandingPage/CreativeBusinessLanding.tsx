import { useReducedMotion, motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowDown,
  ArrowRight,
  Check,
  Cpu,
  Film,
  Globe,
  Lightbulb,
  MessageCircleQuestion,
  Smartphone,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';

const BOOKING = '/book/';
const CTA_LABEL = 'Book a problem-solving session';

const SPEED_ITEMS = [
  'Website live in days',
  'Pitch deck and video ready before your next meeting',
  'App prototype in your hands in a fortnight',
  'Sales funnel built in two weeks',
  'A rough idea turned into something real, fast',
] as const;

const STEPS = [
  {
    title: 'We talk',
    body: 'A paid problem-solving session — an hour or a day, depending on the size of it. You bring the mess. We map out what\'s actually wrong and what to do about it.',
  },
  {
    title: 'I build it',
    body: 'Not a report. Not a deck of recommendations you file away. The actual thing — the website, the video, the prototype, the funnel.',
  },
  {
    title: 'You get on with running your business',
    body: 'One contact. No agency, no committee, no six-week onboarding.',
  },
] as const;

type Capability = {
  title: string;
  description: string;
  outcome: string;
  Icon: LucideIcon;
};

const CAPABILITIES: Capability[] = [
  {
    title: 'Software & app prototyping',
    description: 'Working prototypes, not mockups — built by someone who ships apps.',
    outcome: 'Working prototype in a fortnight',
    Icon: Smartphone,
  },
  {
    title: 'Video & motion graphics',
    description: 'Explainers, product demos, brand films, and launch content.',
    outcome: 'Ready before your next meeting',
    Icon: Film,
  },
  {
    title: 'Websites',
    description: 'Fast, sharp, built to convert. Days, not months.',
    outcome: 'Live in days',
    Icon: Globe,
  },
  {
    title: 'Automation & technical problem-solving',
    description: 'Quotes, funnels, and manual work eating your week. Usually solvable.',
    outcome: 'Hours back in your week',
    Icon: Wrench,
  },
  {
    title: 'Big ideas & strategy',
    description: 'Positioning, launch plans, and briefs sharp enough for a bigger agency.',
    outcome: 'Clear next move',
    Icon: Lightbulb,
  },
];

const MIRRORS = [
  {
    quote: "I've got an idea but nothing to show for it.",
    answer: 'A short sprint and you walk away with a live site and a story that makes it sound real.',
  },
  {
    quote: "I'm pitching for money and I'm not ready.",
    answer: 'Deck and video, done before the meeting.',
  },
  {
    quote: "I've built it but nobody knows about it.",
    answer: 'A launch plan — and I build the assets, not just the plan.',
  },
  {
    quote: 'People still don\'t get what we do.',
    answer: 'Video content strategy, then I make the videos.',
  },
  {
    quote: "I know what's next but I've got no time to work it out.",
    answer: 'A working session and a clear roadmap. What to do, in what order, what it costs.',
  },
] as const;

const PRODUCTS = [
  {
    name: 'Freewheel',
    body: 'Cycling tour and navigation app.',
    href: 'https://freewheeltours.com/',
    Icon: Cpu,
  },
  {
    name: 'SMASH Invoices',
    body: 'Voice-to-invoice app for tradies.',
    href: 'https://smashinvoices.com/',
    Icon: Smartphone,
  },
] as const;

const CLIENT_STRIP = [
  'United Nations',
  'TransferWise',
  'Atomic',
  'Wipster',
  'Method',
  'Amex',
  'AWS',
  'NSW Government',
] as const;

function FadeUp({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({ href = BOOKING, className = '' }: { href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-lg bg-accent px-8 py-4 text-[15px] font-medium tracking-[-0.01em] text-white transition duration-150 ease-out hover:-translate-y-px hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0 ${className}`}
    >
      {CTA_LABEL}
    </a>
  );
}

export default function CreativeBusinessLanding() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-black selection:bg-accent selection:text-white">
      {/* Minimal brand bar */}
      <header className="border-b border-black/8 bg-[#FAFAF8]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="/" className="brand-mark text-lg tracking-tight">
            Motion Story<span className="text-accent">.</span>
          </a>
          <a
            href={BOOKING}
            className="text-[14px] font-medium tracking-[-0.01em] text-black/55 transition-colors hover:text-black"
          >
            Book a session
          </a>
        </div>
      </header>

      {/* 3.1 HERO */}
      <section className="flex min-h-[85vh] items-center">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <FadeUp>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
              Creative business designer
            </p>
            <h1 className="max-w-[16ch] font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl md:leading-[1.05]">
              What's holding your business back?
            </h1>
            <p className="mt-5 max-w-[28ch] font-display text-xl font-medium tracking-tight text-black/55 md:text-2xl">
              I can bring your vision to life.
            </p>

            <ul className="mt-10 flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-2.5">
              {SPEED_ITEMS.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-start gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2.5 text-[14px] leading-snug tracking-[-0.01em] text-black/80 md:items-center"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent md:mt-0" strokeWidth={1.5} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-[14px] tracking-[-0.01em] text-black/50 md:text-[15px]">
              Work directly with a creative business designer. 20 years of it.
            </p>
            <div className="mt-4">
              <PrimaryButton />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 3.2 HOW IT WORKS */}
      <section className="border-t border-black/8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">How it works</p>
            <h2 className="max-w-[18ch] font-display text-3xl font-bold tracking-tight md:text-4xl">
              One person. One session. Then it gets built.
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-black/60 md:text-lg">
              Most people sell you advice or sell you production. I do both, which is why this is simple.
            </p>
          </FadeUp>

          <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => (
              <FadeUp key={step.title}>
                <div className="relative">
                  {i < STEPS.length - 1 && (
                    <div
                      className="pointer-events-none absolute top-8 right-[-1.25rem] hidden h-px w-8 bg-black/15 md:block lg:right-[-1.5rem] lg:w-10"
                      aria-hidden="true"
                    />
                  )}
                  <p className="font-display text-5xl font-bold text-accent/25" aria-hidden="true">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-black/60">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3.3 WHAT I CAN BUILD */}
      <section className="border-t border-black/8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">What I can build</p>
            <h2 className="max-w-[16ch] font-display text-3xl font-bold tracking-tight md:text-4xl">
              From idea to the actual thing.
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((card) => (
              <FadeUp key={card.title}>
                <article className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition duration-150 ease-out hover:border-accent/40 hover:shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <card.Icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-black/65">{card.description}</p>
                  <p className="mt-auto pt-6 text-[13px] font-medium tracking-[-0.01em] text-black/40">
                    {card.outcome}
                  </p>
                </article>
              </FadeUp>
            ))}

            <FadeUp>
              <article className="flex h-full flex-col rounded-2xl border border-dashed border-black/15 bg-transparent p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
                  <MessageCircleQuestion className="h-6 w-6 text-black/45" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-black/70">Something else? Ask.</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-black/50">
                  If the problem doesn't fit a box, bring it anyway.
                </p>
                <a
                  href={BOOKING}
                  className="mt-auto inline-flex min-h-[44px] items-center gap-2 pt-6 text-[14px] font-medium tracking-[-0.01em] text-accent transition-opacity hover:opacity-80"
                >
                  {CTA_LABEL}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </article>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3.4 IS THIS YOU? */}
      <section className="border-t border-black/8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">Is this you?</p>
            <h2 className="max-w-[14ch] font-display text-3xl font-bold tracking-tight md:text-4xl">
              If this sounds familiar.
            </h2>
          </FadeUp>

          <div className="mt-12">
            {MIRRORS.map((row) => (
              <FadeUp key={row.quote}>
                <div className="grid grid-cols-1 gap-4 border-b border-black/10 py-8 last:border-b-0 md:grid-cols-2 md:gap-10 md:py-9">
                  <p className="font-display text-xl italic leading-snug tracking-tight text-black/85">
                    “{row.quote}”
                  </p>
                  <div>
                    <p className="text-[16px] leading-relaxed text-black/65 md:text-[17px]">{row.answer}</p>
                    <a
                      href="#book"
                      className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-medium tracking-[-0.01em] text-accent transition-opacity hover:opacity-80"
                    >
                      Book a session
                      <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 PROOF */}
      <section className="border-t border-black/8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">Proof</p>
            <h2 className="max-w-[18ch] font-display text-3xl font-bold tracking-tight md:text-4xl">
              Concept to shipped product. Same hands.
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <FadeUp key={product.name}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition duration-150 ease-out hover:border-accent/40 hover:shadow-md"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                    <product.Icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{product.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-black/60">{product.body}</p>
                  <span className="mt-auto inline-flex min-h-[44px] items-center gap-1.5 pt-6 text-[14px] font-medium tracking-[-0.01em] text-black/70 transition-colors group-hover:text-accent">
                    Visit
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/40">
              20 years of client work through Motion Story
            </p>
            <p className="mt-4 max-w-3xl text-[14px] leading-relaxed tracking-[-0.01em] text-black/45 md:text-[15px]">
              {CLIENT_STRIP.join(' · ')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 3.6 WHY I DO THIS */}
      <section className="border-t border-black/8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
              <div className="md:col-span-3">
                <div className="aspect-[4/5] max-w-[200px] overflow-hidden">
                  <img
                    src="/daniel-neale.jpg"
                    alt="Dan Neale"
                    className="h-full w-full object-cover"
                    width={400}
                    height={500}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">Why I do this</p>
                <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  I think like a builder, not a supplier.
                </h2>
                <div className="mt-6 max-w-prose space-y-5 text-base leading-relaxed text-black/65 md:text-lg">
                  <p>
                    I'm building my own products alongside this work. So I don't think like a supplier waiting for a
                    brief — I think like someone who's had to solve the same problems you're solving.
                  </p>
                  <p>
                    I'd rather spend my time with people building real things than making another corporate video. If
                    that's you, we'll get on.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 3.7 FINAL CTA */}
      <section id="book" className="scroll-mt-24 border-t border-black/8 bg-accent/[0.06] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Tell me what's holding you back.
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-black/60 md:text-lg">
              Book a problem-solving session and let's work out what to do about it.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton />
            </div>
          </FadeUp>
        </div>
      </section>

      <footer className="border-t border-black/8 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="brand-mark text-base tracking-tight">
            Motion Story<span className="text-accent">.</span>
          </p>
          <p className="text-[13px] tracking-[-0.01em] text-black/40">Creative business design · Byron Bay</p>
        </div>
      </footer>
    </div>
  );
}
