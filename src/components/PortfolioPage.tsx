import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { ALL_PROJECTS } from "../data/projects";
import PageTransition, { FadeUp, SlideUp, AnimatedSection } from "./PageTransition";

export default function PortfolioPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="grain-overlay" />

      {/* Header */}
      <PageTransition className="pt-32 pb-16 px-8 max-w-7xl mx-auto">
        <SlideUp>
          <h1 className="font-display text-4xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            A decade of making<br />complexity look simple.
          </h1>
        </SlideUp>
        <FadeUp>
          <p className="text-body max-w-lg">
            Motion design for SaaS companies, platforms, agencies, and nonprofits. Every project here started with something hard to explain — and ended with something people actually watched.
          </p>
        </FadeUp>
      </PageTransition>

      {/* Project Count */}
      <div className="px-8 max-w-7xl mx-auto mb-16">
        <div className="border-b border-black/10 pb-6">
          <span className="text-metadata opacity-30">
            {ALL_PROJECTS.length} Projects
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
            {ALL_PROJECTS.map((project, i) => (
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
                  <span className="text-metadata opacity-40 shrink-0">{project.year}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <AnimatedSection className="border-t border-black/10 bg-black/[0.01]">
        <div className="max-w-6xl mx-auto px-8 py-32 text-center">
          <FadeUp>
            <span className="text-metadata mb-8 block">Start a Project</span>
          </FadeUp>
          <SlideUp>
            <p className="text-body max-w-xl mx-auto mb-12">
              "Motion design doesn't just explain your product — it makes people care about it before they've even tried it."
            </p>
          </SlideUp>
          <FadeUp>
            <a
              href="mailto:daniel@motionstory.com.au"
              className="font-display text-lg md:text-2xl font-bold tracking-tight hover:opacity-50 transition-opacity border-b border-black/20 pb-2 break-all"
            >
              daniel@motionstory.com.au
            </a>
          </FadeUp>
        </div>
      </AnimatedSection>
    </div>
  );
}
