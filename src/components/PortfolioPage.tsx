import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { ALL_PROJECTS, sortProjectsShowcaseFirst } from "../data/projects";
import { GOOGLE_RATING } from "../data/reviews";
import PageTransition, { FadeUp, SlideUp, AnimatedSection } from "./PageTransition";

const ORDERED_PROJECTS = sortProjectsShowcaseFirst(ALL_PROJECTS);

export default function PortfolioPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="grain-overlay" />

      {/* Header */}
      <div className="bg-black text-white">
        <PageTransition className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
          <SlideUp>
            <h1 className="font-display text-4xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
              The work.<br />Start here.
            </h1>
          </SlideUp>
          <FadeUp>
            <p className="text-body !text-white/60 max-w-lg mb-10">
              Selected films for SaaS, platforms, agencies, and causes. Every project started with something hard to explain — and ended with something people actually watched.
            </p>
            <a href="/reviews/" className="text-metadata !text-white/40 hover:!text-white transition-colors">
              <span className="text-accent">★★★★★</span> {GOOGLE_RATING.score} on Google · {GOOGLE_RATING.count} reviews →
            </a>
          </FadeUp>
        </PageTransition>
      </div>

      {/* Project Count */}
      <div className="px-8 max-w-7xl mx-auto mt-16 mb-16">
        <div className="border-b border-black/10 pb-6">
          <span className="text-metadata opacity-30">
            Strongest pieces first
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-8 max-w-7xl mx-auto pb-32">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
          >
            {ORDERED_PROJECTS.map((project, i) => (
              <motion.a
                key={project.id}
                href={`/casestudy/${project.slug}/`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group block"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="aspect-video bg-gray-100 overflow-hidden mb-6 relative"
                  style={{ viewTransitionName: `project-${project.slug}` }}
                >
                  <img
                    src={`https://vumbnail.com/${project.vimeoId}.jpg`}
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      hoveredId === project.id ? "grayscale-0 scale-100" : "grayscale scale-105"
                    )}
                    loading="lazy"
                  />
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                    hoveredId === project.id ? "opacity-100 bg-black/20" : "opacity-0"
                  )}>
                    <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[10px] border-l-white border-b-[7px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-lg font-medium tracking-tight mb-1 group-hover:opacity-70 transition-opacity">
                      {project.title}
                    </h2>
                    <p className="text-body text-sm line-clamp-1">{project.description}</p>
                  </div>
                  <span className="text-metadata opacity-40 shrink-0">{project.category}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA — red rule on site footer below separates statement from utility */}
      <AnimatedSection className="site-cta">
        <div className="max-w-6xl mx-auto px-8 py-28 md:py-32 text-center">
          <FadeUp>
            <span className="text-metadata !text-white/40 mb-8 block">Start a Project</span>
          </FadeUp>
          <SlideUp>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-10">
              Got something complex<br />to explain?
            </h2>
          </SlideUp>
          <FadeUp>
            <a
              href="mailto:daniel@motionstory.com.au"
              className="font-display text-lg md:text-2xl font-bold tracking-tight border-b border-white/25 pb-2 hover:border-accent transition-colors break-all"
            >
              daniel@motionstory.com.au <span className="text-accent">→</span>
            </a>
          </FadeUp>
        </div>
      </AnimatedSection>
    </div>
  );
}
