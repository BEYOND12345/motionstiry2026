import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { sortProjectsShowcaseFirst, type Project } from "../data/projects";
import { HERO_LEDE, PROFILE_LEDE, WHY_ME } from "../data/site-copy";
import ClientTicker from "./ClientTicker";
import WorkCard, { projectToWorkCard } from "./WorkCard";
import { GOOGLE_RATING } from "../data/reviews";

/** Full archive — strongest pieces first, then everything else. */
const PORTFOLIO = sortProjectsShowcaseFirst();

/** Seconds per project so a long archive still rolls slowly. */
const REEL_SECONDS_PER_PROJECT = 11;

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

const AUDIENCES = [
  { title: "SaaS & Tech", desc: "SaaS motion graphic explainer videos — product on screen, story first.", href: "/saas-explainer-videos/" },
  { title: "Agencies & Studios", desc: "White label or collaborative creative direction — senior craft without another production layer.", href: "/agencies/" },
  { title: "Startups", desc: "Launch explainers and the first product story that has to land before a login.", href: "/startups/" },
  { title: "Causes & Nonprofits", desc: "Mission work with clarity, not noise.", href: "/causes/" },
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

/** Slow vertical reel of showcase work — pause on hover or when a film plays. */
function WorkVerticalCarousel({ projects }: { projects: Project[] }) {
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const loop = useMemo(() => [...projects, ...projects], [projects]);
  const durationSec = Math.max(60, projects.length * REEL_SECONDS_PER_PROJECT);
  const frozen = paused || playing;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const card = (project: Project, key: string, loading: "eager" | "lazy") => (
    <WorkCard
      key={key}
      {...projectToWorkCard(project)}
      loading={loading}
      meta={project.index}
      className="w-full shrink-0"
      heading="p"
      onPlay={() => {
        setPlaying(true);
        setPaused(true);
      }}
    />
  );

  if (reduceMotion) {
    return (
      <div className="space-y-10 px-4 pb-16 md:px-12 lg:px-14">
        {projects.map((project) => card(project, project.id, "lazy"))}
      </div>
    );
  }

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
      <div className="hp-work-reel-viewport h-full overflow-hidden">
        <div
          className="hp-work-reel-track flex flex-col gap-10 px-4 py-8 md:gap-12 md:px-12 lg:px-14"
          style={{
            animation: `hp-work-reel-up ${durationSec}s linear infinite`,
            animationPlayState: frozen ? "paused" : "running",
          }}
        >
          {loop.map((project, i) => card(project, `${project.id}-${i}`, i < 4 ? "eager" : "lazy"))}
        </div>
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
          <header id="top">
            <div className="mb-10" id="work">
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
              <a
                href="/work/"
                className="text-nav-item group relative mt-10 flex items-center gap-4"
              >
                <span className="text-2xl text-accent">→</span>
                See all work
              </a>
            </div>
          </header>

          <div className="divide-y divide-black/10 border-t border-black/10">
            <section id="profile" className="py-8">
              <span className="mb-5 block text-metadata">Profile</span>
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full md:h-16 md:w-16">
                  <img src="/daniel-neale.jpg" alt="Daniel Neale" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-bold tracking-tight md:text-xl">Daniel Neale</h3>
                  <p className="text-body max-w-md">
                    {PROFILE_LEDE}
                  </p>
                </div>
              </div>
            </section>

            <section id="why" className="py-8">
              <span className="mb-5 block text-metadata">Why me</span>
              <div className="max-w-md space-y-4">
                <p className="font-display text-base font-medium leading-snug tracking-tight md:text-lg">
                  {WHY_ME.lead}
                </p>
                <p className="text-body">
                  {WHY_ME.body}
                </p>
                <p className="text-body">
                  {WHY_ME.close}
                </p>
                <p className="text-body !text-sm text-black/50">
                  {WHY_ME.aside}
                </p>
              </div>
            </section>

            <section id="clients" className="py-8">
              <span className="mb-4 block text-metadata">Who I Work With</span>
              <div className="fold max-w-xl">
                {AUDIENCES.map((client) => (
                  <details key={client.href} className="fold-item">
                    <summary>{client.title}</summary>
                    <div className="fold-body">
                      <p className="mb-3">{client.desc}</p>
                      <p>
                        <a href={client.href} className="border-b border-black/20 transition-colors hover:border-black">
                          See work →
                        </a>
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="py-8">
              <blockquote className="mb-4 max-w-lg font-display text-base font-medium leading-snug tracking-tight md:text-lg">
                “62% completion rate. 21% view rate. For a video about bins, we're astounded. Long-term asset for our business.”
              </blockquote>
              <p className="mb-0.5 font-display text-sm font-medium">Lee Bright</p>
              <p className="mb-4 text-metadata">Marketing Lead, Method Recycling</p>
              <p className="text-metadata">
                <span className="text-accent">★★★★★</span> {GOOGLE_RATING.score} on Google · {GOOGLE_RATING.count} reviews
                <span className="mx-2 opacity-30">·</span>
                <a href="/reviews/" className="border-b border-black/15 transition-colors hover:border-black">
                  All reviews →
                </a>
              </p>
            </section>

            <section className="py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <span className="mb-1 block text-metadata">Thinking</span>
                  <p className="text-body max-w-sm">
                    How complex ideas land. When to use video. What demos get wrong.
                  </p>
                </div>
                <a href="/blog/" className="group flex shrink-0 items-center gap-3">
                  <span className="text-xl text-accent">→</span>
                  <span className="text-metadata transition-colors group-hover:text-black">Read the blog</span>
                </a>
              </div>
            </section>

            <section id="contact" className="py-8">
              <span className="mb-6 block text-metadata">Start a Project</span>
              <form className="space-y-6" action="https://formspree.io/f/xaqlpada" method="POST">
                <input type="hidden" name="_next" value="https://motionstory.com.au/thank-you/" />
                <div className="group">
                  <label htmlFor="hp-name" className="mb-2 block text-metadata transition-colors group-focus-within:text-black">Name</label>
                  <input
                    id="hp-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="text-body w-full border-b border-black/10 bg-transparent py-3 transition-colors focus:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  />
                </div>
                <div className="group">
                  <label htmlFor="hp-email" className="mb-2 block text-metadata transition-colors group-focus-within:text-black">Email</label>
                  <input
                    id="hp-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="text-body w-full border-b border-black/10 bg-transparent py-3 transition-colors focus:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  />
                </div>
                <div className="group">
                  <label htmlFor="hp-message" className="mb-2 block text-metadata transition-colors group-focus-within:text-black">Tell me about your project</label>
                  <textarea
                    id="hp-message"
                    name="message"
                    placeholder="What are you working on? What's the challenge?"
                    rows={3}
                    required
                    className="text-body w-full resize-none border-b border-black/10 bg-transparent py-3 transition-colors focus:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  />
                </div>
                <button className="group/btn relative w-full overflow-hidden border border-black/15 py-4 transition-all duration-500 hover:border-black">
                  <span className="text-metadata relative z-10">Send it through</span>
                  <div className="absolute inset-0 translate-y-full bg-black/[0.02] transition-transform duration-500 group-hover/btn:translate-y-0" />
                </button>
              </form>
            </section>
          </div>

          <footer className="mt-8 border-t border-black/10 bg-white pb-6 pt-8">
            <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <span className="mb-3 block text-metadata">Work</span>
                <div className="flex flex-col gap-1.5">
                  <a href="/work/" className="text-body !text-sm transition-colors hover:text-black">All work</a>
                  <a href="/explainer-videos/" className="text-body !text-sm transition-colors hover:text-black">Explainer videos</a>
                  <a href="/saas-explainer-videos/" className="text-body !text-sm transition-colors hover:text-black">SaaS motion graphics</a>
                  <a href="/product-demo-videos/" className="text-body !text-sm transition-colors hover:text-black">Product demo videos</a>
                  <a href="/product-launch-video/" className="text-body !text-sm transition-colors hover:text-black">Product launch videos</a>
                  <a href="/motion-graphics/" className="text-body !text-sm transition-colors hover:text-black">Motion graphics</a>
                </div>
              </div>
              <div>
                <span className="mb-3 block text-metadata">Industries</span>
                <div className="flex flex-col gap-1.5">
                  <a href="/finance-explainer-videos/" className="text-body !text-sm transition-colors hover:text-black">Fintech</a>
                  <a href="/cybersecurity-explainer-videos/" className="text-body !text-sm transition-colors hover:text-black">Cybersecurity</a>
                  <a href="/startups/" className="text-body !text-sm transition-colors hover:text-black">Startups</a>
                  <a href="/technology-videos/" className="text-body !text-sm transition-colors hover:text-black">Technology</a>
                  <a href="/agencies/" className="text-body !text-sm transition-colors hover:text-black">Agencies</a>
                  <a href="/causes/" className="text-body !text-sm transition-colors hover:text-black">Causes & nonprofits</a>
                </div>
              </div>
              <div>
                <span className="mb-3 block text-metadata">Studio</span>
                <div className="flex flex-col gap-1.5">
                  <a href="/about/" className="text-body !text-sm transition-colors hover:text-black">About</a>
                  <a href="/process/" className="text-body !text-sm transition-colors hover:text-black">Process</a>
                  <a href="/reviews/" className="text-body !text-sm transition-colors hover:text-black">Reviews</a>
                  <a href="/blog/" className="text-body !text-sm transition-colors hover:text-black">Blog</a>
                  <a href="/book/" className="text-body !text-sm transition-colors hover:text-black">Book a call</a>
                  <a href="/contact/" className="text-body !text-sm transition-colors hover:text-black">Start a project</a>
                </div>
              </div>
              <div>
                <span className="mb-3 block text-metadata">Connect</span>
                <div className="flex flex-col gap-1.5">
                  <a href="https://vimeo.com/wearemotionstory" className="text-body !text-sm transition-colors hover:text-black" target="_blank" rel="noopener">Vimeo</a>
                  <a href="https://www.linkedin.com/in/danielneale" className="text-body !text-sm transition-colors hover:text-black" target="_blank" rel="noopener">LinkedIn</a>
                  <a href="https://www.behance.net/motion_story" className="text-body !text-sm transition-colors hover:text-black" target="_blank" rel="noopener">Behance</a>
                  <a href="https://dribbble.com/motionstory" className="text-body !text-sm transition-colors hover:text-black" target="_blank" rel="noopener">Dribbble</a>
                </div>
                <p className="text-body !text-sm mt-3">Byron Bay, NSW</p>
                <p className="text-body !text-sm">Australia</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <a href="#top" className="text-metadata transition-colors hover:text-black">Back to Top</a>
              <span className="text-metadata"><span className="brand-mark text-[13px]">Motion Story</span><span className="text-accent">.</span> Complexity Explained.</span>
            </div>
          </footer>
        </aside>

        <main className="split-right flex flex-col" id="portfolio">
          <div className="flex shrink-0 flex-col gap-1 border-b border-black/10 px-4 py-6 md:px-12 lg:px-14">
            <span className="block text-metadata">Portfolio</span>
            <span className="text-metadata opacity-35">
              Rolling through · hover to pause · click to play
            </span>
          </div>

          <div className="min-h-0 flex-1">
            <WorkVerticalCarousel projects={PORTFOLIO} />
          </div>

          <div className="shrink-0 border-t border-black/10 px-4 py-6 md:px-12 lg:px-14">
            <a
              href="/work/"
              className="text-metadata border-b border-black/20 pb-1 transition-colors hover:border-black"
            >
              Browse the full portfolio →
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
