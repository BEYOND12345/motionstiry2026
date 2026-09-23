import { useState, useEffect, useMemo, useRef, type ReactNode, type RefObject } from "react";
import { motion } from "framer-motion";
import { sortProjectsShowcaseFirst, type Project } from "../data/projects";
import {
  HERO_LEDE,
  HOME_APPROACH,
  HOME_CLOSE,
  HOME_MAKE,
  HOME_MAKE_CLOSE,
  HOME_MAKE_LEAD,
  HOME_ME,
  HOME_PORTFOLIO_INTRO,
} from "../data/site-copy";
import ClientTicker from "./ClientTicker";
import WorkCard, { projectToWorkCard } from "./WorkCard";

/** Full archive — strongest pieces first, then everything else. */
const PORTFOLIO = sortProjectsShowcaseFirst();

/** Seconds per project so a long archive still rolls slowly. */
const REEL_SECONDS_PER_PROJECT = 9;

function splitReelColumns(projects: Project[]) {
  const left: Project[] = [];
  const right: Project[] = [];
  projects.forEach((project, i) => {
    (i % 2 === 0 ? left : right).push(project);
  });
  return [left, right] as const;
}

const CLIENT_ROW_A = [
  "United Nations",
  "TransferWise",
  "Schoolbox",
  "RSPCA",
  "Red Cross",
  "NSW Government",
  "Wipster",
];

const CLIENT_ROW_B = [
  "Smokeball",
  "Aon",
  "UTS",
  "Cotton Australia",
  "Oovvuu",
  "IPA",
  "Method Recycling",
];

const HOME_QUOTES = [
  {
    quote: "62% completion. 21% view rate. For a video about bins.",
    name: "Lee Bright",
    company: "Method Recycling",
  },
  {
    quote:
      "It felt like Motion Story was part of our team, even though we were both sitting at the other end of the globe.",
    name: "Simon Lehmann",
    company: "Acodis",
  },
  {
    quote:
      "The video has surpassed 40k views, and two years later it remains our best performing piece of content.",
    name: "Jefferson Nova",
    company: "Google review",
  },
  {
    quote: "There are a lot of motion designers out there but not many who think like Dan does.",
    name: "Troy Cornelius",
    company: "Google review",
  },
] as const;

const HOME_MENU = [
  { label: "Work", href: "/work/" },
  { label: "Process", href: "/process/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
] as const;

const FORMAT_DWELL_MS = 3400;
const QUOTE_DWELL_MS = 4800;
const BEAT_FILL_MS = 5200;

function useReduceMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduceMotion;
}

function useCycle(count: number, dwellMs: number) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReduceMotion();

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.3)),
      { threshold: [0.2, 0.3, 0.55] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || !inView || count < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, dwellMs);
    return () => window.clearInterval(id);
  }, [count, dwellMs, paused, inView, reduceMotion]);

  return { rootRef, active, setActive, paused, setPaused, reduceMotion };
}

function useReadingBeat() {
  const [active, setActive] = useState<string | null>(null);
  const reduceMotion = useReduceMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const pick = () => {
      const beats = [...document.querySelectorAll<HTMLElement>("[data-hp-beat]")];
      const left = document.querySelector<HTMLElement>(".split-left");
      const stacked = !left || getComputedStyle(left).display === "contents";
      const viewTop = stacked ? 0 : left.getBoundingClientRect().top;
      const viewH = stacked ? window.innerHeight : left.clientHeight;
      const line = viewTop + viewH * 0.38;
      let best: string | null = null;
      let bestDist = Infinity;
      let entered = false;
      for (const el of beats) {
        const top = el.getBoundingClientRect().top;
        const isIn = top <= line + 56;
        const dist = Math.abs(top - line);
        if (isIn) {
          if (!entered || dist < bestDist) {
            entered = true;
            bestDist = dist;
            best = el.dataset.hpBeat ?? null;
          }
        } else if (!entered && dist < bestDist) {
          bestDist = dist;
          best = el.dataset.hpBeat ?? null;
        }
      }
      setActive((prev) => (prev === best ? prev : best));
    };

    const left = document.querySelector<HTMLElement>(".split-left");
    pick();
    left?.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      left?.removeEventListener("scroll", pick);
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [reduceMotion]);

  return { active, reduceMotion };
}

function FocusBar({ play }: { play: boolean }) {
  if (!play) return null;
  return <span className="hp-focus-bar" aria-hidden="true" />;
}

function FormatList() {
  const { rootRef, active, setActive, paused, setPaused, reduceMotion } = useCycle(
    HOME_MAKE.length,
    FORMAT_DWELL_MS,
  );

  return (
    <ul
      ref={rootRef as RefObject<HTMLUListElement>}
      className={`hp-formats mt-8 ${paused ? "is-paused" : ""}`}
      onMouseLeave={() => setPaused(false)}
    >
      {HOME_MAKE.map((item, i) => {
        const on = reduceMotion || i === active;
        return (
          <li key={item.label}>
            <button
              type="button"
              className={`hp-focus-item ${on ? "is-on" : ""}`}
              aria-current={on ? "true" : undefined}
              onMouseEnter={() => {
                setPaused(true);
                setActive(i);
              }}
              onFocus={() => {
                setPaused(true);
                setActive(i);
              }}
            >
              <span className="hp-format-label">{item.label}</span>
              <span className="hp-format-line">{item.line}</span>
              <FocusBar play={on && !reduceMotion} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const HOME_PROOF = [HOME_QUOTES[2], HOME_QUOTES[1]] as const;

function QuoteList() {
  const { rootRef, active, setActive, paused, setPaused, reduceMotion } = useCycle(
    HOME_PROOF.length,
    QUOTE_DWELL_MS,
  );

  return (
    <div
      ref={rootRef as RefObject<HTMLDivElement>}
      className={`hp-quotes ${paused ? "is-paused" : ""}`}
      onMouseLeave={() => setPaused(false)}
    >
      {HOME_PROOF.map((item, i) => {
        const on = reduceMotion || i === active;
        return (
          <button
            key={item.name}
            type="button"
            className={`hp-focus-item hp-quote ${on ? "is-on" : ""}`}
            aria-current={on ? "true" : undefined}
            onMouseEnter={() => {
              setPaused(true);
              setActive(i);
            }}
            onFocus={() => {
              setPaused(true);
              setActive(i);
            }}
          >
            <span className="hp-quote-text">“{item.quote}”</span>
            <span className="hp-quote-meta">
              {item.name}
              <span className="mx-2 opacity-30">·</span>
              {item.company}
            </span>
            <FocusBar play={on && !reduceMotion} />
          </button>
        );
      })}
    </div>
  );
}

function Beat({
  id,
  active,
  reduceMotion,
  className,
  children,
}: {
  id: string;
  active: string | null;
  reduceMotion: boolean;
  className?: string;
  children: ReactNode;
}) {
  const on = reduceMotion || active === id;
  return (
    <div data-hp-beat={id} className={`hp-beat ${on ? "is-on" : ""} ${className ?? ""}`.trim()}>
      <FocusBar play={on && !reduceMotion} />
      {children}
    </div>
  );
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="cursor-dot hidden md:block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 35, stiffness: 300, mass: 0.3 }}
    />
  );
};

/** Two staggered vertical reels — pause on hover or when a film plays. */
function WorkVerticalCarousel({ projects }: { projects: Project[] }) {
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [left, right] = useMemo(() => splitReelColumns(projects), [projects]);
  const frozen = paused || playing;
  const durationLeft = Math.max(48, left.length * REEL_SECONDS_PER_PROJECT);
  const durationRight = Math.max(56, right.length * (REEL_SECONDS_PER_PROJECT + 2));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onPlay = () => {
    setPlaying(true);
    setPaused(true);
  };

  const card = (project: Project, key: string, loading: "eager" | "lazy") => (
    <WorkCard
      key={key}
      {...projectToWorkCard(project)}
      loading={loading}
      compact
      className="w-full shrink-0"
      heading="p"
      onPlay={onPlay}
    />
  );

  if (reduceMotion) {
    return (
      <div className="grid grid-cols-2 gap-4 px-3 pb-16 md:gap-5 md:px-5">
        {projects.slice(0, 10).map((project) => card(project, project.id, "eager"))}
      </div>
    );
  }

  const column = (items: Project[], direction: "up" | "down", durationSec: number) => {
    const loop = [...items, ...items];
    return (
      <div className="hp-work-reel-viewport min-h-0 flex-1 overflow-hidden">
        <div
          className="hp-work-reel-track flex flex-col gap-3 md:gap-5"
          style={{
            animation: `hp-work-reel-${direction} ${durationSec}s linear infinite`,
            animationPlayState: frozen ? "paused" : "running",
          }}
        >
          {loop.map((project, i) => card(project, `${direction}-${project.id}-${i}`, "eager"))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="hp-work-reel relative h-full min-h-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (!playing) setPaused(false);
      }}
      onPointerDown={() => setPaused(true)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!playing && !e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="flex h-full gap-2.5 px-3 sm:gap-4 md:gap-5 md:px-5">
        {column(left, "up", durationLeft)}
        {column(right, "down", durationRight)}
      </div>
    </div>
  );
}

export default function Homepage() {
  const { active: beat, reduceMotion } = useReadingBeat();

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <style>{`
        @keyframes hp-work-reel-up {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, -50%, 0); }
        }
        @keyframes hp-work-reel-down {
          from { transform: translate3d(0, -50%, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
        .hp-journal {
          width: 100%;
          max-width: 28rem;
        }
        @media (min-width: 1025px) {
          .hp-work-reel,
          .hp-work-reel-viewport {
            height: 100%;
          }
        }
        @media (max-width: 1024px) {
          .hp-journal {
            max-width: 36rem;
          }
          .hp-work-reel {
            height: min(60dvh, 640px);
          }
        }
        @media (max-width: 768px) {
          .hp-work-reel {
            height: min(58dvh, 500px);
          }
        }
        @media (max-width: 480px) and (max-height: 700px) {
          .hp-work-reel {
            height: min(50dvh, 360px);
          }
        }
        .hp-journal p {
          text-wrap: pretty;
        }
        .hp-formats,
        .hp-quotes {
          list-style: none;
        }
        .hp-focus-item,
        .hp-beat {
          position: relative;
        }
        .hp-focus-item {
          display: block;
          width: 100%;
          padding: 0.9rem 0 0.95rem;
          border: 0;
          border-top: 1px solid rgba(10, 10, 10, 0.1);
          background: none;
          text-align: left;
          cursor: pointer;
        }
        .hp-format-label {
          display: block;
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: rgba(10, 10, 10, 0.32);
          transition: color 0.5s ease;
        }
        .hp-format-line {
          display: block;
          margin-top: 0.25rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.5;
          color: rgba(10, 10, 10, 0.22);
          transition: color 0.5s ease;
        }
        .hp-focus-item.is-on .hp-format-label {
          color: #0a0a0a;
        }
        .hp-focus-item.is-on .hp-format-line {
          color: rgba(10, 10, 10, 0.55);
        }
        .hp-quote {
          padding: 1.15rem 0 1.2rem;
        }
        .hp-quote + .hp-quote {
          margin-top: 0.35rem;
        }
        .hp-quote-text {
          display: block;
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: -0.02em;
          color: rgba(10, 10, 10, 0.28);
          transition: color 0.5s ease;
        }
        .hp-quote-meta {
          display: block;
          margin-top: 0.75rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(10, 10, 10, 0.2);
          transition: color 0.5s ease;
        }
        .hp-quote.is-on .hp-quote-text {
          color: #0a0a0a;
        }
        .hp-quote.is-on .hp-quote-meta {
          color: rgba(10, 10, 10, 0.4);
        }
        .hp-beat {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
        }
        .hp-beat > p:first-of-type {
          grid-row: 1;
          grid-column: 1;
          padding-bottom: 0.5rem;
        }
        .hp-focus-bar {
          position: absolute;
          left: 0;
          top: auto;
          bottom: 0;
          height: 1.5px;
          width: 0;
          background: var(--color-accent, #e10600);
          pointer-events: none;
        }
        .hp-beat > .hp-focus-bar {
          grid-row: 1;
          grid-column: 1;
          align-self: end;
          position: relative;
        }
        .hp-focus-item .hp-focus-bar {
          animation: hp-focus-fill ${FORMAT_DWELL_MS}ms linear forwards;
        }
        .hp-quote .hp-focus-bar {
          animation-duration: ${QUOTE_DWELL_MS}ms;
        }
        .hp-beat .hp-focus-bar {
          animation: hp-focus-fill ${BEAT_FILL_MS}ms linear forwards;
        }
        .hp-formats.is-paused .hp-focus-bar,
        .hp-quotes.is-paused .hp-focus-bar {
          animation-play-state: paused;
        }
        @keyframes hp-focus-fill {
          from { width: 0; }
          to { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-format-label,
          .hp-quote-text { color: #0a0a0a; }
          .hp-format-line { color: rgba(10, 10, 10, 0.55); }
          .hp-quote-meta { color: rgba(10, 10, 10, 0.4); }
          .hp-focus-bar { display: none; }
        }
      `}</style>
      <div className="grain-overlay" />
      <CustomCursor />

      <div id="main-content" className="split-container">
        <aside className="split-left relative">
          <header id="top" className="hp-journal hp-hero">
            <h1 className="text-display">
              Complex<br />
              Made<br />
              Simple.
            </h1>
            <p className="hp-lede mt-5 font-display text-[1.2rem] font-medium leading-[1.4] tracking-tight sm:mt-7 sm:text-[1.35rem] md:text-[1.45rem] md:leading-[1.3]">
              {HERO_LEDE}
            </p>
            <div className="hp-logos mt-8 sm:mt-10">
              <ClientTicker
                compact
                label=""
                rowA={CLIENT_ROW_A}
                rowB={CLIENT_ROW_B}
              />
            </div>
          </header>

          <div className="hp-journal hp-story pb-4">
            <div className="hp-me mt-10 flex items-start gap-4 sm:mt-12 sm:gap-6 lg:mt-10">
              <a href="/about/" aria-label="Dan Neale" className="shrink-0 transition-opacity hover:opacity-60">
                <img
                  src="/daniel-neale.jpg"
                  alt="Dan Neale"
                  width={72}
                  height={72}
                  className="h-14 w-14 rounded-full object-cover object-[center_18%] sm:h-[4.5rem] sm:w-[4.5rem]"
                />
              </a>
              <p className="pt-0.5 font-display text-[1.125rem] font-medium leading-[1.4] tracking-tight sm:pt-1 sm:text-[1.2rem] sm:leading-snug">
                {HOME_ME}
              </p>
            </div>
            <Beat id="story" active={beat} reduceMotion={reduceMotion} className="mt-12 sm:mt-16">
              <p className="font-display text-[1.4rem] font-medium tracking-tight leading-[1.25] sm:text-[1.65rem] md:text-[1.85rem] md:leading-[1.2]">
                {HOME_APPROACH.lead}
              </p>
              <p className="mt-5 text-body text-[1.0625rem] leading-[1.65] text-black/70 sm:mt-6 sm:text-[1.05rem]">
                {HOME_APPROACH.body}
              </p>
              <p className="mt-4 text-body text-[1.0625rem] leading-[1.65] text-black/70 sm:mt-5 sm:text-[1.05rem]">
                {HOME_APPROACH.shape}
              </p>
            </Beat>
            <div className="mt-12">
              <p className="font-display text-xl font-medium tracking-tight">
                {HOME_MAKE_LEAD}
              </p>
              <FormatList />
              <p className="mt-8 text-body text-[1.05rem] leading-[1.65] text-black/70">
                {HOME_MAKE_CLOSE}
              </p>
            </div>
            <div className="mt-14">
              <QuoteList />
            </div>
            <Beat id="close" active={beat} reduceMotion={reduceMotion} className="mt-16 sm:mt-20">
              <p className="font-display text-[1.45rem] font-medium tracking-tight leading-[1.2] sm:text-[1.85rem] md:text-[2.1rem] md:leading-[1.15]">
                {HOME_CLOSE.lead}
              </p>
              <p className="mt-5 text-body text-[1.0625rem] leading-[1.65] text-black/70 sm:text-[1.05rem]">
                {HOME_CLOSE.body}
              </p>
              <p className="mt-4 text-body text-[1.0625rem] leading-[1.65] text-black/70 sm:mt-5 sm:text-[1.05rem]">
                {HOME_CLOSE.close}
              </p>
              <div className="mt-8">
                <a href="/book/" className="ms-btn">
                  Work with Dan
                </a>
              </div>
            </Beat>
          </div>

          <nav className="hp-nav mt-auto max-w-md pt-10 pb-1" aria-label="Studio">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {HOME_MENU.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[15px] tracking-tight text-black transition-opacity hover:opacity-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="split-right flex flex-col" id="portfolio">
          <h2 className="hp-work-kicker px-4 pb-2.5 font-display text-[1.05rem] font-medium tracking-tight text-black/80">
            {HOME_PORTFOLIO_INTRO}
          </h2>
          <div className="min-h-0 flex-1">
            <WorkVerticalCarousel projects={PORTFOLIO} />
          </div>
        </main>
      </div>
    </div>
  );
}
