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
    body: 'A paid problem-solving session. An hour or a day, depending on the size of it. You bring the mess. We map out what\'s actually wrong and what to do about it.',
  },
  {
    title: 'I build it',
    body: 'Not a report. Not a deck of recommendations you file away. The actual thing: the website, the video, the prototype, the funnel.',
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
    description: 'Working prototypes, not mockups. Built by someone who ships apps.',
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
    answer: 'A launch plan. And I build the assets, not just the plan.',
  },
  {
    quote: "People still don't get what we do.",
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

function FadeUp({
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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({
  href = BOOKING,
  tone = 'accent',
  className = '',
}: {
  href?: string;
  tone?: 'accent' | 'ink' | 'light';
  className?: string;
}) {
  const tones = {
    accent: 'bg-accent text-white hover:brightness-110',
    ink: 'bg-white text-black hover:bg-white/90',
    light: 'bg-black text-white hover:bg-black/85',
  };
  return (
    <a
      href={href}
      className={`inline-flex min-h-[52px] items-center justify-center rounded-[10px] px-8 py-4 text-[15px] font-medium tracking-[-0.01em] transition duration-150 ease-out hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0 ${tones[tone]} ${className}`}
    >
      {CTA_LABEL}
    </a>
  );
}

export default function CreativeBusinessLanding() {
  const reduce = useReducedMotion();

  return (
    <div className="cbd-page min-h-screen bg-[#F6F6F4] text-[#0A0A0A] selection:bg-accent selection:text-white">
      <style>{`
        .cbd-page {
          --cbd-paper: #F6F6F4;
          --cbd-ink: #0A0A0A;
          --cbd-muted: rgba(10, 10, 10, 0.62);
          --cbd-line: rgba(10, 10, 10, 0.14);
        }
        .cbd-page::before {
          content: '';
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 80;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }
        .cbd-hero {
          background:
            radial-gradient(90% 70% at 85% 20%, rgba(255, 0, 0, 0.18), transparent 55%),
            radial-gradient(60% 50% at 10% 90%, rgba(255, 255, 255, 0.06), transparent 50%),
            linear-gradient(165deg, #141414 0%, #0A0A0A 48%, #050505 100%);
        }
        .cbd-cap {
          position: relative;
          overflow: hidden;
          isolation: isolate;
                  background: #FFFFFF;
          border: 1px solid rgba(10, 10, 10, 0.1);
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cbd-cap::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #FF0000;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cbd-cap:hover {
          border-color: rgba(10, 10, 10, 0.28);
          transform: translateY(-2px);
          box-shadow: 0 18px 40px -28px rgba(10, 10, 10, 0.45);
        }
        .cbd-cap:hover::before {
          transform: scaleY(1);
        }
        .cbd-mirror-row {
          transition: background-color 0.2s ease;
        }
        .cbd-mirror-row:hover {
          background: rgba(255, 0, 0, 0.035);
        }
        .cbd-product {
          background:
            linear-gradient(145deg, #161616 0%, #0A0A0A 100%);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cbd-product:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 50px -24px rgba(255, 0, 0, 0.35);
        }
        @media (prefers-reduced-motion: reduce) {
          .cbd-cap,
          .cbd-cap::before,
          .cbd-product {
            transition: none !important;
          }
          .cbd-cap:hover,
          .cbd-product:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Header on dark hero */}
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-6">
          <a href="/" className="brand-mark text-lg tracking-tight text-white">
            Motion Story<span className="text-accent">.</span>
          </a>
          <a
            href={BOOKING}
            className="inline-flex min-h-[44px] items-center text-[14px] font-medium tracking-[-0.01em] text-white/55 transition-colors hover:text-white"
          >
            Book a session
          </a>
        </div>
      </header>

      {/* HERO — full-bleed ink plane */}
      <section className="cbd-hero relative min-h-[92vh] overflow-hidden text-white">
        <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-6xl items-end gap-10 px-5 pb-16 pt-28 md:grid-cols-12 md:gap-8 md:px-8 md:pb-20 md:pt-32">
          <div className="md:col-span-7 lg:col-span-7">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                Creative business designer
              </p>
              <h1 className="max-w-[11ch] font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-balance">
                What's holding your business back?
              </h1>
              <p className="mt-6 max-w-[22ch] font-display text-[clamp(1.35rem,2.8vw,2rem)] font-medium leading-[1.2] tracking-[-0.02em] text-white/72">
                I can bring your vision to life.
              </p>
            </motion.div>

            <motion.ul
              className="mt-10 space-y-3"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {SPEED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-snug tracking-[-0.01em] text-white/78 md:text-[16px]">
                  <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-12"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-[14px] tracking-[-0.01em] text-white/45">
                Work directly with a creative business designer. 20 years of it.
              </p>
              <PrimaryButton tone="accent" />
            </motion.div>
          </div>

          <motion.div
            className="relative md:col-span-5 lg:col-span-5"
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <img
                src="/daniel-neale.jpg"
                alt="Dan Neale, creative business designer"
                className="h-full w-full object-cover grayscale-[20%] contrast-[1.05]"
                width={900}
                height={1125}
                loading="eager"
                fetchPriority="high"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/55">
                  Dan Neale
                </p>
                <p className="mt-1 font-display text-lg font-medium tracking-tight text-white">
                  Byron Bay · Worldwide
                </p>
              </div>
              <div
                className="absolute left-0 top-0 h-1 w-16 bg-accent md:h-1.5 md:w-20"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative border-b border-[color:var(--cbd-line)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">How it works</p>
                <h2 className="max-w-[14ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                  One person. One session. Then it gets built.
                </h2>
              </div>
              <p className="max-w-sm text-[16px] leading-relaxed text-[color:var(--cbd-muted)] md:text-right md:text-[17px]">
                Most people sell you advice or sell you production. I do both, which is why this is simple.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 gap-0 border-t border-[color:var(--cbd-line)] md:grid-cols-3">
            {STEPS.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.06}>
                <div className="border-b border-[color:var(--cbd-line)] py-10 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <p className="font-display text-[4.5rem] font-bold leading-none tracking-[-0.05em] text-accent/20" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-[28ch] text-[15px] leading-relaxed text-[color:var(--cbd-muted)]">
                    {step.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I CAN BUILD */}
      <section className="relative bg-[#E9E9E6] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">What I can build</p>
            <h2 className="max-w-[12ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              From idea to the actual thing.
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.04}>
                <article className="cbd-cap flex h-full flex-col rounded-[18px] p-8 md:p-9">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-[12px] bg-accent/10">
                    <card.Icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-[1.35rem] font-bold tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--cbd-muted)]">{card.description}</p>
                  <p className="mt-auto pt-8 text-[12px] font-medium uppercase tracking-[0.12em] text-black/35">
                    {card.outcome}
                  </p>
                </article>
              </FadeUp>
            ))}

            <FadeUp delay={0.2}>
              <article className="flex h-full flex-col rounded-[18px] border border-dashed border-black/20 bg-transparent p-8 md:p-9">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-[12px] bg-black/5">
                  <MessageCircleQuestion className="h-6 w-6 text-black/40" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-[1.35rem] font-bold tracking-tight text-black/70">Something else? Ask.</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--cbd-muted)]">
                  If the problem doesn't fit a box, bring it anyway.
                </p>
                <a
                  href={BOOKING}
                  className="mt-auto inline-flex min-h-[48px] items-center gap-2 pt-8 text-[15px] font-medium tracking-[-0.01em] text-accent transition-opacity hover:opacity-80"
                >
                  {CTA_LABEL}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </article>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* IS THIS YOU */}
      <section className="border-y border-[color:var(--cbd-line)] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Is this you?</p>
            <h2 className="max-w-[12ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              If this sounds familiar.
            </h2>
          </FadeUp>

          <div className="mt-14 border-t border-[color:var(--cbd-line)]">
            {MIRRORS.map((row, i) => (
              <FadeUp key={row.quote} delay={i * 0.03}>
                <div className="cbd-mirror-row grid grid-cols-1 gap-5 border-b border-[color:var(--cbd-line)] py-9 md:grid-cols-12 md:gap-8 md:py-11">
                  <p className="font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium italic leading-[1.25] tracking-[-0.02em] text-[#0A0A0A] md:col-span-6">
                    “{row.quote}”
                  </p>
                  <div className="md:col-span-6 md:pl-4">
                    <p className="text-[16px] leading-relaxed text-[color:var(--cbd-muted)] md:text-[17px]">{row.answer}</p>
                    <a
                      href="#book"
                      className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-[14px] font-medium tracking-[-0.01em] text-accent transition-opacity hover:opacity-80"
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

      {/* PROOF */}
      <section className="bg-[#0A0A0A] py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Proof</p>
            <h2 className="max-w-[14ch] font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Concept to shipped product. Same hands.
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <FadeUp key={product.name} delay={i * 0.06}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cbd-product group flex h-full flex-col rounded-[18px] border border-white/10 p-8 md:p-10"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[14px] bg-accent/15 ring-1 ring-accent/30">
                    <product.Icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-3xl font-bold tracking-tight">{product.name}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-white/55">{product.body}</p>
                  <span className="mt-auto inline-flex min-h-[48px] items-center gap-2 pt-10 text-[15px] font-medium tracking-[-0.01em] text-white/80 transition-colors group-hover:text-accent">
                    Visit
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-16 border-t border-white/10 pt-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35">
              20 years of client work through Motion Story
            </p>
            <p className="mt-5 max-w-4xl font-display text-[clamp(1.1rem,2vw,1.45rem)] font-medium leading-snug tracking-tight text-white/50">
              {CLIENT_STRIP.join('  ·  ')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeUp>
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/daniel-neale.jpg"
                    alt="Dan Neale"
                    className="h-full w-full object-cover"
                    width={640}
                    height={800}
                    loading="lazy"
                  />
                  <div className="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden="true" />
                </div>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Why I do this</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                  I think like a builder, not a supplier.
                </h2>
                <div className="mt-7 max-w-prose space-y-5 text-[17px] leading-[1.65] text-[color:var(--cbd-muted)] md:text-lg">
                  <p>
                    I'm building my own products alongside this work. So I don't think like a supplier waiting for a
                    brief. I think like someone who's had to solve the same problems you're solving.
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

      {/* FINAL CTA */}
      <section id="book" className="scroll-mt-24 relative overflow-hidden bg-accent py-24 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(80% 60% at 20% 0%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(70% 50% at 90% 100%, rgba(0,0,0,0.25), transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 text-center md:px-8">
          <FadeUp>
            <h2 className="mx-auto max-w-[14ch] font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white text-balance">
              Tell me what's holding you back.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-white/80">
              Book a problem-solving session and let's work out what to do about it.
            </p>
            <div className="mt-10 flex justify-center">
              <PrimaryButton tone="ink" />
            </div>
          </FadeUp>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#F6F6F4] py-10">
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
