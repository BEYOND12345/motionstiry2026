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
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(["atomic", "trudi", "giraffe", "mosaic", "good2pay", "infoview", "heyyou", "cart-share", "uclusion"]));

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <div className="grain-overlay" />
      <CustomCursor />

      <div id="main-content" className="split-container">
        {/* Left Side: Messaging & Story */}
        <aside className="split-left relative">
          <header id="top">
            <div className="flex items-center justify-start mb-24">
              <nav className="flex items-center gap-10">
                {[
                  { label: "Work", href: "#work" },
                  { label: "About", href: "#profile" },
                  { label: "Blog", href: "/blog/" },
                  { label: "Start a Project", href: "#contact" },
                ].map(item => (
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

            <div className="mb-32" id="work">
              <h1 className="text-display mb-10">
                Complex<br />
                Made<br />
                Simple.
              </h1>
              <p className="text-body max-w-md mb-12">
                Motion design for ideas that are hard to explain. I work with SaaS companies, agencies, and nonprofits, turning complex products and missions into something people immediately get.
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
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-12">
                  <img src="/daniel-neale.jpg" alt="Daniel Neale" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-heading mb-10">Daniel Neale</h3>
                <p className="text-body mb-6">
                  Director, founder, and occasional creative producer. Trained as a graphic designer, built a career in motion design, now working as a creative director. 15 years and 500+ projects deep.
                </p>
                <p className="text-body mb-6">
                  That depth means I can read a brief and see minutes of detailed animation before anything hits the timeline. I draw from every project I've done: SaaS platforms, government campaigns, nonprofits, startups. I apply what works.
                </p>
                <p className="text-body mb-12">
                  I'm a passionate, obsessive storyteller who loves turning dry, complex subjects into something clear and engaging. Also a father, a surfer, and a big-time animal lover. I put everything into the work.
                </p>
                <div className="flex gap-12">
                  <a href="https://www.behance.net/danielneale" className="text-metadata border-b border-black/5 pb-2 hover:border-black transition-colors" target="_blank" rel="noopener">Behance</a>
                  <a href="https://vimeo.com/motionstory" className="text-metadata border-b border-black/5 pb-2 hover:border-black transition-colors" target="_blank" rel="noopener">Vimeo</a>
                </div>
              </div>
            </section>

            {/* Who I Work With */}
            <section id="clients" className="mb-48">
              <span className="text-metadata mb-10 block">Who I Work With</span>
              <div className="grid grid-cols-1 gap-16">
                {[
                  { title: "Startups & Early-Stage", desc: "Homepage heroes, launch explainers, and the first product story that has to land before a login. Built for pre-launch to Series A.", href: "/startups/" },
                  { title: "SaaS & Tech Companies", desc: "Product demos, platform explainers, onboarding animation. I help software companies show what they've built, clearly.", href: "/saas-tech/" },
                  { title: "Agencies & Studios", desc: "Senior motion design production when your team needs capacity. White label or direct. Reliable delivery, no hand-holding required.", href: "/agencies/" },
                  { title: "Causes & Nonprofits", desc: "Motion design for missions that matter. When the stakes are real and the brief needs to cut through noise, not add to it.", href: "/causes/" }
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

            {/* Results / Testimonials */}
            <section className="mb-48">
              <span className="text-metadata mb-10 block">Results</span>
              <div className="space-y-16">
                <div>
                  <p className="text-body text-lg md:text-xl leading-relaxed font-display tracking-tight mb-6">
                    "62% completion rate. 21% view rate. For a video about bins, we're astounded. Long-term asset for our business."
                  </p>
                  <div>
                    <p className="font-display font-medium text-sm">Lee Bright</p>
                    <p className="text-metadata">Marketing Lead, Method Recycling</p>
                  </div>
                </div>
                <div>
                  <p className="text-body text-lg md:text-xl leading-relaxed font-display tracking-tight mb-6">
                    "40,000 views on YouTube, which increased brand perception and reputation."
                  </p>
                  <div>
                    <p className="font-display font-medium text-sm">Simon Lehman</p>
                    <p className="text-metadata">Marketing Manager, Acodis</p>
                  </div>
                </div>
                <div>
                  <p className="text-body text-lg md:text-xl leading-relaxed font-display tracking-tight mb-6">
                    "Working with Daniel was incredible. Easy to brainstorm, pivot ideas, and collaborate at each stage. 10/10 would use again."
                  </p>
                  <div>
                    <p className="font-display font-medium text-sm">Matty Sirois</p>
                  </div>
                </div>
                <div>
                  <p className="text-body text-lg md:text-xl leading-relaxed font-display tracking-tight mb-6">
                    "Creative, efficient, and seamless. Daniel grasped our core message and crafted something that resonated with our audience immediately."
                  </p>
                  <div>
                    <p className="font-display font-medium text-sm">Kris Deep</p>
                    <p className="text-metadata">Founder, Pulseee</p>
                  </div>
                </div>
                <div>
                  <p className="text-body text-lg md:text-xl leading-relaxed font-display tracking-tight mb-6">
                    "Without this video, our campaign would have never reached such a huge audience. The road user charge has now been approved in SA and VIC. Daniel's work was pivotal."
                  </p>
                  <div>
                    <p className="font-display font-medium text-sm">Michael Player</p>
                    <p className="text-metadata">Director of Communications, Infrastructure Australia</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Clients */}
            <section className="mb-48">
              <span className="text-metadata mb-10 block">Clients</span>
              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {[
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
                ].map(name => (
                  <span
                    key={name}
                    className="font-display text-sm md:text-base font-medium tracking-tight opacity-30"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </section>

            {/* Blog */}
            <section className="mb-48">
              <span className="text-metadata mb-6 block">Thinking</span>
              <p className="text-body mb-8">
                How to make complex ideas land. When to use video. What most demos get wrong.
              </p>
              <a
                href="/blog/"
                className="group flex items-center gap-4"
              >
                <span className="text-accent text-2xl">→</span>
                <span className="text-nav-item">Read the blog</span>
              </a>
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
                    placeholder="What are you working on? What's the challenge?"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-black/10 py-6 focus:outline-none focus:border-black transition-colors text-body resize-none"
                  />
                </div>
                <button className="group/btn relative overflow-hidden w-full py-8 border border-black/10 hover:border-black transition-all duration-500">
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
                  <a href="/services/" className="text-body !text-sm hover:text-black transition-colors">Services</a>
                  <a href="/startups/" className="text-body !text-sm hover:text-black transition-colors">Startups</a>
                  <a href="/product-demo-videos/" className="text-body !text-sm hover:text-black transition-colors">Product Demo Videos</a>
                  <a href="/technology-videos/" className="text-body !text-sm hover:text-black transition-colors">Technology Videos</a>
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
                <span className="text-metadata">Motion Story. Complexity Explained.</span>
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
                      isExpanded={expandedIds.has(project.id)}
                      onToggle={() => setExpandedIds(prev => {
                        const next = new Set(prev);
                        if (next.has(project.id)) next.delete(project.id);
                        else next.add(project.id);
                        return next;
                      })}
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
