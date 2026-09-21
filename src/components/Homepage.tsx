import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { sortProjectsShowcaseFirst, type Project } from "../data/projects";
import {
  HERO_LEDE,
  HOME_APPROACH,
  HOME_CLOSE,
  HOME_HERO_BODY,
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

function PullQuote({
  quote,
  name,
  company,
}: {
  quote: string;
  name: string;
  company: string;
}) {
  return (
    <blockquote className="hp-pull">
      <p className="font-display text-[1.2rem] font-medium leading-snug tracking-tight md:text-[1.3rem]">
        “{quote}”
      </p>
      <footer className="mt-3 text-metadata text-black/40">
        {name}
        <span className="mx-2 opacity-30">·</span>
        {company}
      </footer>
    </blockquote>
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
          className="hp-work-reel-track flex flex-col gap-5"
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
      className="hp-work-reel relative h-full min-h-[70vh] lg:min-h-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (!playing) setPaused(false);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!playing && !e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="flex h-full gap-4 px-3 md:gap-5 md:px-5">
        {column(left, "up", durationLeft)}
        {column(right, "down", durationRight)}
      </div>
    </div>
  );
}

export default function Homepage() {
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
        @media (min-width: 1025px) {
          .hp-work-reel,
          .hp-work-reel-viewport {
            height: 100%;
          }
        }
        @media (max-width: 1024px) {
          .hp-work-reel {
            height: min(78vh, 720px);
          }
        }
        .hp-journal {
          max-width: 28rem;
        }
        .hp-journal p {
          text-wrap: pretty;
        }
        .hp-pull {
          border-left: 1.5px solid var(--color-accent, #e10600);
          padding-left: 1.15rem;
        }
      `}</style>
      <div className="grain-overlay" />
      <CustomCursor />

      <div id="main-content" className="split-container">
        <aside className="split-left relative">
          <header id="top" className="hp-journal">
            <h1 className="text-display">
              Complex<br />
              Made<br />
              Simple.
            </h1>
            <p className="mt-7 font-display text-[1.35rem] font-medium leading-[1.3] tracking-tight md:text-[1.45rem]">
              {HERO_LEDE}
            </p>
            <p className="mt-5 text-body text-[1.05rem] leading-[1.65] text-black/70">
              {HOME_HERO_BODY}
            </p>
            <div className="mt-10 pr-16 lg:pr-0">
              <ClientTicker
                compact
                label=""
                rowA={CLIENT_ROW_A}
                rowB={CLIENT_ROW_B}
              />
            </div>
            <div className="mt-10 flex items-start gap-6">
              <a href="/about/" aria-label="Dan Neale" className="shrink-0 transition-opacity hover:opacity-60">
                <img
                  src="/daniel-neale.jpg"
                  alt="Dan Neale"
                  width={72}
                  height={72}
                  className="h-[4.5rem] w-[4.5rem] rounded-full object-cover object-[center_18%]"
                />
              </a>
              <p className="font-display text-[1.2rem] font-medium leading-snug tracking-tight pt-1">
                {HOME_ME}
              </p>
            </div>
          </header>

          <div className="hp-journal pb-4">
            <p className="mt-16 font-display text-[1.65rem] font-medium tracking-tight leading-[1.2] md:text-[1.85rem]">
              {HOME_APPROACH.lead}
            </p>
            <p className="mt-6 text-body text-[1.05rem] leading-[1.65] text-black/70">
              {HOME_APPROACH.body}
            </p>
            <p className="mt-5 text-body text-[1.05rem] leading-[1.65] text-black/70">
              {HOME_APPROACH.shape}
            </p>
            <p className="mt-12 font-display text-xl font-medium tracking-tight">
              {HOME_MAKE_LEAD}
            </p>
            <ul className="mt-8">
              {HOME_MAKE.map((item) => (
                <li key={item.label} className="border-t border-black/10 py-3.5">
                  <p className="font-display text-[1.05rem] font-medium tracking-tight">{item.label}</p>
                  <p className="mt-1 text-body text-[0.95rem] leading-relaxed text-black/55">{item.line}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-body text-[1.05rem] leading-[1.65] text-black/70">
              {HOME_MAKE_CLOSE}
            </p>
            <div className="mt-14">
              <PullQuote {...HOME_QUOTES[2]} />
            </div>

            <div className="mt-14">
              <PullQuote {...HOME_QUOTES[1]} />
            </div>

            <p className="mt-20 font-display text-[1.85rem] font-medium tracking-tight leading-[1.15] md:text-[2.1rem]">
              {HOME_CLOSE.lead}
            </p>
            <p className="mt-5 text-body text-[1.05rem] leading-[1.65] text-black/70">
              {HOME_CLOSE.body}
            </p>
            <p className="mt-5 text-body text-[1.05rem] leading-[1.65] text-black/70">
              {HOME_CLOSE.close}
            </p>
            <div className="mt-8">
              <a href="/book/" className="ms-btn">
                Work with Dan
              </a>
            </div>
          </div>

          <nav className="mt-auto max-w-md pt-10 pb-1" aria-label="Studio">
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
          <h2 className="px-5 pb-3 font-display text-xl font-medium tracking-tight lg:sr-only">
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
