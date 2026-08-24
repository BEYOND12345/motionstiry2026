import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { getShowcaseProjects, type Project } from "../data/projects";
import ClientTicker from "./ClientTicker";
import { GOOGLE_RATING } from "../data/reviews";

const SHOWCASE = getShowcaseProjects();

const CLIENT_ROW_A = [
  "United Nations",
  "RSPCA",
  "Red Cross",
  "NSW Government",
  "Wipster",
];

const CLIENT_ROW_B = [
  "Aon",
  "UTS",
  "Cotton Australia",
  "Oovvuu",
  "IPA",
  "Method Recycling",
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

function WorkCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group w-full shrink-0 text-left"
      aria-label={`Play ${project.client}: ${project.title}`}
    >
      <div className="relative aspect-video overflow-hidden bg-black/[0.04]">
        <img
          src={`https://vumbnail.com/${project.vimeoId}.jpg`}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/28" />
        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-black/15 backdrop-blur-[2px]">
          <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4 px-0.5">
        <div className="min-w-0">
          <p className="font-display text-lg font-bold tracking-tight md:text-xl">{project.client}</p>
          <p className="mt-1 line-clamp-1 text-[14px] leading-relaxed text-black/45">{project.description}</p>
        </div>
        <span className="text-metadata shrink-0 opacity-30">{project.index}</span>
      </div>
    </button>
  );
}

/** Slow vertical reel of showcase work — always visible, pause on hover. */
function WorkVerticalCarousel({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (project: Project) => void;
}) {
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const loop = useMemo(() => [...projects, ...projects], [projects]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return (
      <div className="space-y-10 px-4 pb-16 md:px-12 lg:px-14">
        {projects.map((project) => (
          <WorkCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="hp-work-reel relative h-full min-h-[70vh] lg:min-h-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-white to-transparent" />

      <div className="hp-work-reel-viewport h-full overflow-hidden">
        <div
          className="hp-work-reel-track flex flex-col gap-10 px-4 py-8 md:gap-12 md:px-12 lg:px-14"
          style={{
            animation: "hp-work-reel-up 90s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {loop.map((project, i) => (
            <WorkCard
              key={`${project.id}-${i}`}
              project={project}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkLightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const hash = project.vimeoHash ? `h=${project.vimeoHash}&` : "";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.client} video`}
      onClick={onClose}
    >
      <div
        className="relative aspect-video w-full max-w-5xl bg-black"
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
          src={`https://player.vimeo.com/video/${project.vimeoId}?${hash}autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`${project.client} — ${project.title}`}
        />
      </div>
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 hidden text-center md:block">
        <p className="font-display text-lg font-bold text-white">{project.client}</p>
        <a
          href={`/casestudy/${project.slug}/`}
          className="pointer-events-auto mt-2 inline-block text-[13px] text-white/60 underline-offset-4 hover:text-white hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          View case study →
        </a>
      </div>
    </div>
  );
}

export default function Homepage() {
  const [lightbox, setLightbox] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <style>{`
        @keyframes hp-work-reel-up {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, -50%, 0); }
        }
        @media (min-width: 1025px) {
          .hp-work-reel {
            height: 100%;
          }
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
        {/* Left: agency story */}
        <aside className="split-left relative">
          <header id="top">
            <div className="mb-16 flex items-center justify-start">
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
              <p className="text-body mb-8 max-w-md">
                Small studio, big impact. I help SaaS companies and agencies distill hard ideas into clear animation and design — storytelling that brings the vision to life. You work directly with me, not a production chain.
              </p>
              <ClientTicker
                label="Clients"
                compact
                rowA={CLIENT_ROW_A}
                rowB={CLIENT_ROW_B}
              />
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
              <div className="mb-5 flex items-start gap-5">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full md:h-16 md:w-16">
                  <img src="/daniel-neale.jpg" alt="Daniel Neale" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-bold tracking-tight md:text-xl">Daniel Neale</h3>
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
                      <a href="/creative-business-designer/" className="border-b border-black/20 transition-colors hover:border-black">
                        Creative business designer →
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
                    className="text-body w-full border-b border-black/10 bg-transparent py-3 transition-colors focus:border-black focus:outline-none"
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
                    className="text-body w-full border-b border-black/10 bg-transparent py-3 transition-colors focus:border-black focus:outline-none"
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
                    className="text-body w-full resize-none border-b border-black/10 bg-transparent py-3 transition-colors focus:border-black focus:outline-none"
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
            <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <span className="mb-3 block text-metadata">Connect</span>
                <div className="flex flex-col gap-1.5">
                  <a href="https://vimeo.com/wearemotionstory" className="text-body !text-sm transition-colors hover:text-black" target="_blank" rel="noopener">Vimeo</a>
                  <a href="https://www.linkedin.com/company/motionstory" className="text-body !text-sm transition-colors hover:text-black" target="_blank" rel="noopener">LinkedIn</a>
                  <a href="https://www.behance.net/motionstory" className="text-body !text-sm transition-colors hover:text-black" target="_blank" rel="noopener">Behance</a>
                </div>
              </div>
              <div>
                <span className="mb-3 block text-metadata">Work</span>
                <div className="flex flex-col gap-1.5">
                  <a href="/saas-explainer-videos/" className="text-body !text-sm transition-colors hover:text-black">SaaS explainer videos</a>
                  <a href="/product-demo-videos/" className="text-body !text-sm transition-colors hover:text-black">Product demo videos</a>
                  <a href="/services/" className="text-body !text-sm transition-colors hover:text-black">Services</a>
                  <a href="/agencies/" className="text-body !text-sm transition-colors hover:text-black">Agencies</a>
                  <a href="/causes/" className="text-body !text-sm transition-colors hover:text-black">Causes</a>
                </div>
              </div>
              <div>
                <span className="mb-3 block text-metadata">Studio</span>
                <p className="text-body !text-sm">Byron Bay, NSW</p>
                <p className="text-body !text-sm mb-2">Australia</p>
                <div className="flex flex-col gap-1.5">
                  <a href="/about/" className="text-body !text-sm transition-colors hover:text-black">About</a>
                  <a href="/reviews/" className="text-body !text-sm transition-colors hover:text-black">Reviews</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <a href="#top" className="text-metadata transition-colors hover:text-black">Back to Top</a>
              <span className="text-metadata"><span className="brand-mark text-[13px]">Motion Story</span><span className="text-accent">.</span> Complexity Explained.</span>
            </div>
          </footer>
        </aside>

        {/* Right: living portfolio reel */}
        <main className="split-right flex flex-col" id="portfolio">
          <div className="flex shrink-0 flex-col gap-1 border-b border-black/10 px-4 py-6 md:px-12 lg:px-14">
            <span className="block text-metadata">Portfolio</span>
            <span className="text-metadata opacity-35">
              Rolling through · hover to pause · click to play
            </span>
          </div>

          <div className="min-h-0 flex-1">
            <WorkVerticalCarousel projects={SHOWCASE} onSelect={setLightbox} />
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

      {lightbox ? <WorkLightbox project={lightbox} onClose={() => setLightbox(null)} /> : null}
    </div>
  );
}
