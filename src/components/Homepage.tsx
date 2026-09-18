import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { sortProjectsShowcaseFirst, type Project } from "../data/projects";
import { HERO_LEDE } from "../data/site-copy";
import ClientTicker from "./ClientTicker";
import WorkCard, { projectToWorkCard } from "./WorkCard";
import { GOOGLE_RATING } from "../data/reviews";

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
      `}</style>
      <div className="grain-overlay" />
      <CustomCursor />

      <div id="main-content" className="split-container">
        <aside className="split-left relative">
          <header id="top" className="mb-10">
            <h1 className="text-display mb-6">
              Complex<br />
              Made<br />
              Simple.
            </h1>
            <p className="text-body mb-8 max-w-md">
              {HERO_LEDE}
            </p>
            <div className="max-w-md pr-24 lg:pr-0">
              <ClientTicker
                label="Clients"
                compact
                rowA={CLIENT_ROW_A}
                rowB={CLIENT_ROW_B}
              />
            </div>
            <blockquote className="mt-10 max-w-md">
              <p className="font-display text-base font-medium leading-snug tracking-tight md:text-lg">
                “62% completion. 21% view rate. For a video about bins.”
              </p>
              <p className="mt-3 text-metadata">
                Lee Bright, Method Recycling
                <span className="mx-2 opacity-30">·</span>
                <span className="text-accent">★★★★★</span> {GOOGLE_RATING.score}
              </p>
            </blockquote>
            <a
              href="/work/"
              className="text-nav-item group relative mt-10 flex items-center gap-4"
            >
              <span className="text-2xl text-accent">→</span>
              See all work
            </a>
            <p className="mt-8 text-body max-w-md">
              <a href="/about/" className="border-b border-black/20 transition-colors hover:border-black">
                Dan Neale
              </a>
              <span className="mx-2 opacity-30">·</span>
              Byron Bay
            </p>
          </header>

          <nav className="mt-auto border-t border-black/10 pt-8 pb-6" aria-label="Studio pages">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-body !text-sm max-w-md">
              <a href="/saas-explainer-videos/" className="transition-colors hover:text-black">SaaS</a>
              <a href="/explainer-videos/" className="transition-colors hover:text-black">Explainers</a>
              <a href="/product-demo-videos/" className="transition-colors hover:text-black">Demos</a>
              <a href="/motion-graphics/" className="transition-colors hover:text-black">Motion</a>
              <a href="/startups/" className="transition-colors hover:text-black">Startups</a>
              <a href="/agencies/" className="transition-colors hover:text-black">Agencies</a>
              <a href="/about/" className="transition-colors hover:text-black">About</a>
              <a href="/process/" className="transition-colors hover:text-black">Process</a>
              <a href="/contact/" className="transition-colors hover:text-black">Start a project</a>
            </div>
          </nav>
        </aside>

        <main className="split-right flex flex-col" id="portfolio">
          <div className="min-h-0 flex-1">
            <WorkVerticalCarousel projects={PORTFOLIO} />
          </div>
        </main>
      </div>
    </div>
  );
}
