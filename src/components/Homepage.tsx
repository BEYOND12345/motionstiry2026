import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ALL_PROJECTS,
  SHOWCASE_PROJECT_IDS,
  sortProjectsShowcaseFirst,
  type Project,
} from "../data/projects";
import VimeoEmbed from "./VimeoEmbed";
import { GOOGLE_RATING } from "../data/reviews";

const SHOWCASE_ORDERED = sortProjectsShowcaseFirst(ALL_PROJECTS);
/** Strongest pieces the reel cycles through — one open at a time */
const REEL_IDS = [...SHOWCASE_PROJECT_IDS];
const REEL_HOLD_MS = 7200;

const CLIENTS = [
  "United Nations",
  "RSPCA",
  "Red Cross",
  "NSW Government",
  "Wipster",
  "Aon",
  "UTS",
  "Cotton Australia",
  "Oovvuu",
  "IPA",
];

const AUDIENCES = [
  { title: "SaaS & Tech", desc: "SaaS explainer videos and product demo videos for complex software.", href: "/saas-explainer-videos/" },
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

const ProjectRow = ({
  project,
  isExpanded,
  onToggle,
  rowRef,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  rowRef?: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <div ref={rowRef} className="border-b border-border overflow-hidden" data-project-id={project.id}>
      <motion.div
        initial={false}
        animate={{ backgroundColor: isExpanded ? "rgba(0,0,0,0.02)" : "rgba(0,0,0,0)" }}
        className="project-row group !border-b-0"
        onClick={onToggle}
      >
        <span className="text-metadata w-8">{project.index}</span>
        <h3 className="text-project-title flex-1 transition-all duration-500">
          {project.title}
        </h3>
        <span className="text-metadata project-client hidden md:block opacity-40">{project.client}</span>
        <div className="flex items-center justify-end gap-8 min-w-[100px]">
          <motion.span
            animate={{ rotate: isExpanded ? 45 : 0 }}
            className="text-xl font-light opacity-20"
          >
            +
          </motion.span>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-4 md:px-16 pb-16">
              <VimeoEmbed
                vimeoId={project.vimeoId}
                vimeoHash={project.vimeoHash}
                title={project.title}
                className="mb-12"
                autoColor
                loading="eager"
              />

              <div className="max-w-2xl">
                <div className="mb-8">
                  <span className="text-metadata block mb-2">{project.category}</span>
                  <h4 className="text-heading">{project.title}</h4>
                </div>
                <p className="text-body mb-8">
                  {project.details}
                </p>
                <a
                  href={`/casestudy/${project.slug}/`}
                  className="text-metadata border-b border-black/20 pb-1 hover:border-black transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Case Study
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Homepage() {
  const [activeId, setActiveId] = useState<string | null>(REEL_IDS[0] ?? null);
  const [reelEnabled, setReelEnabled] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userControlled, setUserControlled] = useState(false);
  const portfolioRef = useRef<HTMLElement>(null);
  const rowRefs = useRef(new Map<string, HTMLDivElement>());
  const reelIndex = useRef(0);

  // Desktop + motion OK → enable the spotlight reel
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReelEnabled(desktop.matches && !reduce.matches);
    sync();
    desktop.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      desktop.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  // Advance through showcase pieces one at a time
  useEffect(() => {
    if (!reelEnabled || hoverPaused || userControlled) return;

    const tick = window.setInterval(() => {
      reelIndex.current = (reelIndex.current + 1) % REEL_IDS.length;
      setActiveId(REEL_IDS[reelIndex.current]);
    }, REEL_HOLD_MS);

    return () => window.clearInterval(tick);
  }, [reelEnabled, hoverPaused, userControlled]);

  // Ease the open project into view inside the right scroller
  useEffect(() => {
    if (!activeId || !reelEnabled) return;
    const scroller = portfolioRef.current;
    const row = rowRefs.current.get(activeId);
    if (!scroller || !row) return;

    const scrollToActive = () => {
      const scrollerRect = scroller.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      const offset = rowRect.top - scrollerRect.top + scroller.scrollTop - 72;
      scroller.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
    };

    // Once immediately, again after the accordion has opened
    scrollToActive();
    const t = window.setTimeout(scrollToActive, 450);
    return () => window.clearTimeout(t);
  }, [activeId, reelEnabled]);

  const setRowRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) rowRefs.current.set(id, el);
    else rowRefs.current.delete(id);
  }, []);

  const onToggle = (id: string) => {
    setUserControlled(true);
    setActiveId((prev) => (prev === id ? null : id));
    const idx = REEL_IDS.findIndex((rid) => rid === id);
    if (idx >= 0) reelIndex.current = idx;
  };

  const onPortfolioEnter = () => setHoverPaused(true);
  const onPortfolioLeave = () => {
    setHoverPaused(false);
    // Hand control back to the reel once the cursor leaves
    setUserControlled(false);
  };

  const reelRunning = reelEnabled && !hoverPaused && !userControlled;

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <div className="grain-overlay" />
      <CustomCursor />

      <div id="main-content" className="split-container">
        {/* Left Side: Messaging & Story */}
        <aside className="split-left relative">
          <header id="top">
            <div className="flex items-center justify-start mb-16">
              <nav className="flex items-center gap-10">
                {[
                  { label: "Work", href: "#work" },
                  { label: "About", href: "#profile" },
                  { label: "Blog", href: "/blog/" },
                  { label: "Start a Project", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-top-nav hover:text-black transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mb-10" id="work">
              <h1 className="text-display mb-6">
                Complex<br />
                Made<br />
                Simple.
              </h1>
              <p className="text-body max-w-md mb-6">
                Small studio, big impact. I help SaaS companies and agencies distill hard ideas into clear animation and design — storytelling that brings the vision to life. You work directly with me, not a production chain.
              </p>
              <p className="text-metadata mb-3">Clients</p>
              <p className="font-display text-[13px] md:text-sm font-medium tracking-tight text-black/40 leading-relaxed mb-8">
                {CLIENTS.join(" · ")}
              </p>
              <a
                href="/work/"
                className="text-nav-item relative group flex items-center gap-4"
              >
                <span className="text-accent text-2xl">→</span>
                See all work
              </a>
            </div>
          </header>

          {/* Continuous column — hairline sections, no orphan gaps */}
          <div className="divide-y divide-black/10 border-t border-black/10">
            <section id="profile" className="py-8">
              <span className="text-metadata mb-5 block">Profile</span>
              <div className="flex gap-5 items-start mb-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0">
                  <img src="/daniel-neale.jpg" alt="Daniel Neale" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold tracking-tight mb-1">Daniel Neale</h3>
                  <p className="text-body max-w-md">
                    Creative director. Making motion since 2010. Small studio, big impact — you work with me directly.
                  </p>
                </div>
              </div>
              <div className="fold max-w-xl">
                <details className="fold-item">
                  <summary>More about how I work</summary>
                  <div className="fold-body">
                    <p className="mb-3">
                      Fractional creative partner: storytelling, planning, and craft. SaaS, startups, agencies — any size, as long as the idea needs clarity.
                    </p>
                    <p className="mb-3">
                      <a href="/fractional-creative-director/" className="border-b border-black/20 hover:border-black transition-colors">
                        Fractional creative director sprints →
                      </a>
                    </p>
                    <p>
                      Obsessive about making dry subjects clear and watchable. Also a father, a surfer, and a big-time animal lover.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            <section id="clients" className="py-8">
              <span className="text-metadata mb-4 block">Who I Work With</span>
              <div className="fold max-w-xl">
                {AUDIENCES.map((client) => (
                  <details key={client.href} className="fold-item">
                    <summary>{client.title}</summary>
                    <div className="fold-body">
                      <p className="mb-3">{client.desc}</p>
                      <p>
                        <a href={client.href} className="border-b border-black/20 hover:border-black transition-colors">
                          See work →
                        </a>
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="py-8">
              <blockquote className="font-display text-base md:text-lg font-medium tracking-tight leading-snug mb-4 max-w-lg">
                “62% completion rate. 21% view rate. For a video about bins, we're astounded. Long-term asset for our business.”
              </blockquote>
              <p className="font-display font-medium text-sm mb-0.5">Lee Bright</p>
              <p className="text-metadata mb-4">Marketing Lead, Method Recycling</p>
              <p className="text-metadata">
                <span className="text-accent">★★★★★</span> {GOOGLE_RATING.score} on Google · {GOOGLE_RATING.count} reviews
                <span className="mx-2 opacity-30">·</span>
                <a href="/reviews/" className="border-b border-black/15 hover:border-black transition-colors">
                  All reviews →
                </a>
              </p>
            </section>

            <section className="py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <span className="text-metadata mb-1 block">Thinking</span>
                  <p className="text-body max-w-sm">
                    How complex ideas land. When to use video. What demos get wrong.
                  </p>
                </div>
                <a href="/blog/" className="group flex items-center gap-3 shrink-0">
                  <span className="text-accent text-xl">→</span>
                  <span className="text-metadata group-hover:text-black transition-colors">Read the blog</span>
                </a>
              </div>
            </section>

            <section id="contact" className="py-8">
              <span className="text-metadata mb-6 block">Start a Project</span>
              <form className="space-y-6" action="https://formspree.io/f/xaqlpada" method="POST">
                <input type="hidden" name="_next" value="https://motionstory.com.au/thank-you/" />
                <div className="group">
                  <label htmlFor="hp-name" className="text-metadata mb-2 block transition-colors group-focus-within:text-black">Name</label>
                  <input
                    id="hp-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-body"
                  />
                </div>
                <div className="group">
                  <label htmlFor="hp-email" className="text-metadata mb-2 block transition-colors group-focus-within:text-black">Email</label>
                  <input
                    id="hp-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-body"
                  />
                </div>
                <div className="group">
                  <label htmlFor="hp-message" className="text-metadata mb-2 block transition-colors group-focus-within:text-black">Tell me about your project</label>
                  <textarea
                    id="hp-message"
                    name="message"
                    placeholder="What are you working on? What's the challenge?"
                    rows={3}
                    required
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-body resize-none"
                  />
                </div>
                <button className="group/btn relative overflow-hidden w-full py-4 border border-black/15 hover:border-black transition-all duration-500">
                  <span className="text-metadata relative z-10">Send it through</span>
                  <div className="absolute inset-0 bg-black/[0.02] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </section>
          </div>

          <footer className="mt-8 border-t border-black/10 bg-white pt-8 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div>
                <span className="text-metadata mb-3 block">Connect</span>
                <div className="flex flex-col gap-1.5">
                  <a href="https://vimeo.com/wearemotionstory" className="text-body !text-sm hover:text-black transition-colors" target="_blank" rel="noopener">Vimeo</a>
                  <a href="https://www.linkedin.com/company/motionstory" className="text-body !text-sm hover:text-black transition-colors" target="_blank" rel="noopener">LinkedIn</a>
                  <a href="https://www.behance.net/motionstory" className="text-body !text-sm hover:text-black transition-colors" target="_blank" rel="noopener">Behance</a>
                </div>
              </div>
              <div>
                <span className="text-metadata mb-3 block">Work</span>
                <div className="flex flex-col gap-1.5">
                  <a href="/saas-explainer-videos/" className="text-body !text-sm hover:text-black transition-colors">SaaS explainer videos</a>
                  <a href="/product-demo-videos/" className="text-body !text-sm hover:text-black transition-colors">Product demo videos</a>
                  <a href="/services/" className="text-body !text-sm hover:text-black transition-colors">Services</a>
                  <a href="/agencies/" className="text-body !text-sm hover:text-black transition-colors">Agencies</a>
                  <a href="/causes/" className="text-body !text-sm hover:text-black transition-colors">Causes</a>
                </div>
              </div>
              <div>
                <span className="text-metadata mb-3 block">Studio</span>
                <p className="text-body !text-sm">Byron Bay, NSW</p>
                <p className="text-body !text-sm mb-2">Australia</p>
                <div className="flex flex-col gap-1.5">
                  <a href="/about/" className="text-body !text-sm hover:text-black transition-colors">About</a>
                  <a href="/reviews/" className="text-body !text-sm hover:text-black transition-colors">Reviews</a>
                </div>
              </div>
            </div>
            <div className="pt-5 border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <a href="#top" className="text-metadata hover:text-black transition-colors">Back to Top</a>
              <span className="text-metadata"><span className="brand-mark text-[13px]">Motion Story</span><span className="text-accent">.</span> Complexity Explained.</span>
            </div>
          </footer>
        </aside>

        {/* Right Side: Portfolio spotlight reel */}
        <main
          ref={portfolioRef}
          className="split-right"
          id="portfolio"
          onPointerEnter={onPortfolioEnter}
          onPointerLeave={onPortfolioLeave}
        >
          <div className="pt-12">
            <div className="px-4 md:px-16 py-8 border-b border-black/10 flex flex-col gap-2">
              <span className="text-metadata block">Portfolio</span>
              <span className="text-metadata opacity-30">
                {reelEnabled
                  ? reelRunning
                    ? "Playing through · hover to pause"
                    : "Paused · click a row to open"
                  : "Open any row to watch"}
              </span>
            </div>

            <div className="pb-24">
              <AnimatePresence mode="popLayout">
                {SHOWCASE_ORDERED.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProjectRow
                      project={project}
                      isExpanded={activeId === project.id}
                      onToggle={() => onToggle(project.id)}
                      rowRef={(el) => setRowRef(project.id, el)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="px-4 md:px-16 pb-12 border-b border-black/10">
              <a
                href="/work/"
                className="text-metadata border-b border-black/20 pb-1 hover:border-black transition-colors"
              >
                Browse the full portfolio →
              </a>
            </div>

            <section className="px-4 md:px-16 py-16 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <span className="text-metadata mb-5 block">What I Make</span>
                  <ul className="space-y-3">
                    {["Product Demos", "Platform Explainers", "Onboarding Animation", "Data Visualisation", "Campaign Motion"].map((item) => (
                      <li key={item} className="text-body !text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-metadata mb-5 block">Who It's For</span>
                  <ul className="space-y-3">
                    {["SaaS & Tech Companies", "Agencies & Studios", "Causes & Nonprofits", "Government & Data", "Startups"].map((item) => (
                      <li key={item} className="text-body !text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-12 border-t border-black/10">
                <span className="text-metadata mb-6 block">Start a Project</span>
                <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight uppercase mb-8">
                  Got something<br />
                  complex to explain?
                </h2>
                <a href="mailto:daniel@motionstory.com.au" className="font-display text-lg md:text-xl font-bold tracking-tight hover:opacity-50 transition-opacity border-b border-black/20 pb-3 break-all">
                  daniel@motionstory.com.au
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
