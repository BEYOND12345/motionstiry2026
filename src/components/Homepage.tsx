import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_PROJECTS, type Project } from "../data/projects";
import VimeoEmbed from "./VimeoEmbed";

// --- Components ---

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
  onToggle
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-border overflow-hidden">
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
          <span className="text-metadata">{project.year}</span>
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
                title={project.title}
                className="mb-12"
                autoColor
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
  const [expandedId, setExpandedId] = useState<string | null>("wipster");

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <div className="grain-overlay" />
      <CustomCursor />

      <div className="split-container">
        {/* Left Side: Messaging & Story */}
        <aside className="split-left relative">
          <header id="top">
            <div className="flex items-center justify-start mb-24">
              <nav className="flex items-center gap-10">
                {["Work", "Profile", "Contact"].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-top-nav hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mb-32" id="work">
              <h1 className="text-display mb-10">
                Motion<br />
                Story.
              </h1>
              <p className="text-body max-w-md mb-12">
                Motion design for ideas that are hard to explain. I work with SaaS companies, agencies, and nonprofits to turn complex products and missions into motion design that makes people understand — and care.
              </p>

              <a
                href="/work/"
                className="text-nav-item relative group flex items-center gap-4 mt-16"
              >
                <span className="text-accent text-2xl">→</span>
                See all work
              </a>
            </div>
          </header>

          <div className="space-y-32 mb-24">
            {/* Profile Section */}
            <section id="profile" className="mb-48">
              <span className="text-metadata mb-8 block">Profile</span>
              <div className="max-w-2xl">
                <div className="aspect-video overflow-hidden bg-gray-100 mb-12 flex items-center justify-center">
                  <span className="text-metadata opacity-30">Photo</span>
                </div>
                <h3 className="text-heading mb-10">Dan Neale</h3>
                <p className="text-body mb-12">
                  I'm a motion designer and creative director based in Byron Bay. Over the past decade I've made motion design for Employment Hero, Wipster, the United Nations, the RSPCA, and 50+ other organisations with something complex to explain. I take on a limited number of projects at a time. When I'm on your project, I'm on your project.
                </p>
                <div className="flex gap-12">
                  <a href="https://www.linkedin.com/in/danielneale" className="text-metadata border-b border-black/5 pb-2 hover:border-black transition-colors" target="_blank" rel="noopener">LinkedIn</a>
                  <a href="https://vimeo.com/motionstory" className="text-metadata border-b border-black/5 pb-2 hover:border-black transition-colors" target="_blank" rel="noopener">Vimeo</a>
                </div>
              </div>
            </section>

            {/* Who I Work With */}
            <section id="clients" className="mb-48">
              <span className="text-metadata mb-10 block">Who I Work With</span>
              <div className="grid grid-cols-1 gap-16">
                {[
                  { title: "SaaS & Tech Companies", desc: "Product demos, platform explainers, onboarding animation. I help software companies show what they've built — clearly.", href: "/saas-tech/" },
                  { title: "Agencies & Studios", desc: "Senior motion design production when your team needs capacity. White label or direct. Reliable delivery, no hand-holding required.", href: "/agencies/" },
                  { title: "Causes & Nonprofits", desc: "Motion design for missions that matter. When the communication isn't just marketing — it's the difference between someone understanding and someone not.", href: "/causes/" }
                ].map((client, i) => (
                  <a key={i} href={client.href} className="group block">
                    <h4 className="text-project-title mb-4 group-hover:opacity-70 transition-opacity">
                      {client.title}
                    </h4>
                    <p className="text-body max-w-md">
                      {client.desc}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="mb-48">
              <span className="text-metadata mb-10 block">Start a Project</span>
              <form className="space-y-12" action="https://formspree.io/f/xaqlpada" method="POST">
                <input type="hidden" name="_next" value="https://motionstory.com.au/thank-you/" />
                <div className="group">
                  <label htmlFor="hp-name" className="text-metadata mb-4 block transition-colors group-focus-within:text-black">Name</label>
                  <input
                    id="hp-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border-b border-black/10 py-6 focus:outline-none focus:border-black transition-colors text-body"
                  />
                </div>
                <div className="group">
                  <label htmlFor="hp-email" className="text-metadata mb-4 block transition-colors group-focus-within:text-black">Email</label>
                  <input
                    id="hp-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent border-b border-black/10 py-6 focus:outline-none focus:border-black transition-colors text-body"
                  />
                </div>
                <div className="group">
                  <label htmlFor="hp-message" className="text-metadata mb-4 block transition-colors group-focus-within:text-black">Tell me about your project</label>
                  <textarea
                    id="hp-message"
                    name="message"
                    placeholder="What are you working on? What's the timeline?"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-black/10 py-6 focus:outline-none focus:border-black transition-colors text-body resize-none"
                  />
                </div>
                <button className="group/btn relative w-full py-8 border border-black/10 hover:border-black transition-all duration-500">
                  <span className="text-metadata relative z-10">Send it through</span>
                  <div className="absolute inset-0 bg-black/[0.02] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </section>
          </div>

          <footer>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-12">
              <div>
                <span className="text-metadata mb-4 block">Connect</span>
                <div className="flex flex-col gap-2">
                  <a href="https://vimeo.com/motionstory" className="text-body !text-sm hover:text-black transition-colors" target="_blank" rel="noopener">Vimeo</a>
                  <a href="https://www.linkedin.com/company/motionstory" className="text-body !text-sm hover:text-black transition-colors" target="_blank" rel="noopener">LinkedIn</a>
                  <a href="https://www.behance.net/motionstory" className="text-body !text-sm hover:text-black transition-colors" target="_blank" rel="noopener">Behance</a>
                </div>
              </div>
              <div>
                <span className="text-metadata mb-4 block">Work</span>
                <div className="flex flex-col gap-2">
                  <a href="/saas-tech/" className="text-body !text-sm hover:text-black transition-colors">SaaS & Tech</a>
                  <a href="/agencies/" className="text-body !text-sm hover:text-black transition-colors">Agencies</a>
                  <a href="/causes/" className="text-body !text-sm hover:text-black transition-colors">Causes & Nonprofits</a>
                </div>
              </div>
              <div>
                <span className="text-metadata mb-4 block">Studio</span>
                <p className="text-body !text-sm text-black">Byron Bay, NSW</p>
                <p className="text-body !text-sm text-black">Australia</p>
              </div>
            </div>
            <div className="pt-8 border-t border-black/10 flex flex-col items-start gap-4">
              <a href="#top" className="text-metadata hover:text-black transition-colors">Back to Top</a>
              <div className="flex flex-col gap-1">
                <span className="text-metadata">Motion Story — Complexity Explained.</span>
              </div>
            </div>
          </footer>
        </aside>

        {/* Right Side: Work Listicle (Accordion) */}
        <main className="split-right" id="portfolio">
          <div className="pt-12">
            <div className="px-4 md:px-16 py-8 border-b border-black/10 flex flex-col gap-2">
              <span className="text-metadata">Featured Work</span>
              <span className="text-metadata opacity-30">
                {ALL_PROJECTS.length} Projects
              </span>
            </div>

            <div className="pb-32">
              <AnimatePresence mode="popLayout">
                {ALL_PROJECTS.map((project) => (
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
                      isExpanded={expandedId === project.id}
                      onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <section className="px-4 md:px-16 py-16 md:py-48 border-t border-black/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                <div>
                  <span className="text-metadata mb-8 block">What I Make</span>
                  <ul className="space-y-4">
                    {["Product Demos", "Platform Explainers", "Onboarding Animation", "Data Visualisation", "Campaign Motion"].map(item => (
                      <li key={item} className="text-body !text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-metadata mb-8 block">Who It's For</span>
                  <ul className="space-y-4">
                    {["SaaS & Tech Companies", "Agencies & Studios", "Causes & Nonprofits", "Government & Data", "Startups"].map(item => (
                      <li key={item} className="text-body !text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-24 border-t border-black/5">
                <span className="text-metadata mb-12 block">Start a Project</span>
                <h2 className="font-display text-2xl md:text-[32px] font-bold tracking-tight uppercase mb-16">
                  Got something<br />
                  complex to explain?
                </h2>
                <a href="mailto:daniel@motionstory.com.au" className="font-display text-lg md:text-2xl font-bold tracking-tight hover:opacity-50 transition-opacity border-b border-black/20 pb-4 break-all">
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
