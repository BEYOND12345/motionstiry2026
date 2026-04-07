import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import VimeoEmbed from "./VimeoEmbed";
import PageTransition, { FadeUp, SlideUp, AnimatedSection } from "./PageTransition";

interface Props {
  project: Project;
  allProjects: Project[];
}

export default function CaseStudyPage({ project, allProjects }: Props) {
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  const relatedProjects = allProjects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="grain-overlay" />

      {/* Hero Video */}
      <PageTransition className="pt-20">
        <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-metadata">{project.category}</span>
            </div>
          </FadeUp>
          <SlideUp>
            <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-4">
              {project.title}
            </h1>
          </SlideUp>
          <FadeUp>
            <p className="text-body max-w-2xl mt-6 mb-12">
              {project.description}
            </p>
          </FadeUp>
        </div>

        <FadeUp className="max-w-6xl mx-auto px-8 mb-16">
          <div style={{ viewTransitionName: `project-${project.slug}` }}>
            <VimeoEmbed
              vimeoId={project.vimeoId}
              title={project.title}
            />
          </div>
        </FadeUp>

        {project.secondaryVimeoId && (
          <FadeUp className="max-w-6xl mx-auto px-8 mb-16">
            <span className="text-metadata mb-6 block">Additional Video</span>
            <VimeoEmbed
              vimeoId={project.secondaryVimeoId}
              title={`${project.title}: Secondary`}
            />
          </FadeUp>
        )}
      </PageTransition>

      {/* Project Details */}
      <AnimatedSection className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <FadeUp className="md:col-span-2">
            <span className="text-metadata mb-8 block">About the Project</span>
            <p className="text-body text-lg leading-relaxed">
              {project.details}
            </p>
          </FadeUp>
          <FadeUp>
            <div className="mb-12">
              <span className="text-metadata mb-4 block">Client</span>
              <p className="font-display text-lg font-medium">{project.client}</p>
            </div>
            <div className="mb-12">
              <span className="text-metadata mb-4 block">Category</span>
              <p className="font-display text-lg font-medium">{project.category}</p>
            </div>
            <div>
              <span className="text-metadata mb-4 block">Studio</span>
              <p className="font-display text-lg font-medium">Motion Story</p>
              <p className="text-body text-sm">Byron Bay, NSW</p>
            </div>
          </FadeUp>
        </div>
      </AnimatedSection>

      {/* Navigation */}
      <AnimatedSection className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-2 gap-8">
          <FadeUp>
            <a href={`/casestudy/${prevProject.slug}/`} className="group block">
              <span className="text-metadata mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">← Previous</span>
              <span className="font-display text-xl font-medium group-hover:text-black/70 transition-colors">
                {prevProject.title}
              </span>
            </a>
          </FadeUp>
          <FadeUp>
            <a href={`/casestudy/${nextProject.slug}/`} className="group block text-right">
              <span className="text-metadata mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">Next →</span>
              <span className="font-display text-xl font-medium group-hover:text-black/70 transition-colors">
                {nextProject.title}
              </span>
            </a>
          </FadeUp>
        </div>
      </AnimatedSection>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <AnimatedSection className="border-t border-black/10">
          <div className="max-w-6xl mx-auto px-8 py-24">
            <FadeUp>
              <span className="text-metadata mb-10 block">Related Projects</span>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map(rp => (
                <FadeUp key={rp.id}>
                  <a href={`/casestudy/${rp.slug}/`} className="group block">
                    <div className="aspect-video overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={`https://vumbnail.com/${rp.vimeoId}.jpg`}
                        alt={rp.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>
                    <p className="font-display text-base font-medium group-hover:opacity-60 transition-opacity">{rp.title}</p>
                    <p className="text-metadata opacity-50">{rp.client}</p>
                  </a>
                </FadeUp>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* CTA */}
      <AnimatedSection className="border-t border-black/10 bg-black/[0.01]">
        <div className="max-w-6xl mx-auto px-8 py-32 text-center">
          <FadeUp>
            <span className="text-metadata mb-8 block">Start a Project</span>
          </FadeUp>
          <SlideUp>
            <h2 className="font-display text-3xl md:text-6xl font-bold tracking-tight mb-12">
              Got something complex<br />to explain?
            </h2>
          </SlideUp>
          <FadeUp>
            <div className="flex flex-col items-center gap-6">
              <a
                href="/contact/"
                className="inline-block px-12 py-5 border border-black hover:bg-black hover:text-white transition-all duration-300 text-metadata"
              >
                Start a Project
              </a>
              <a href="mailto:daniel@motionstory.com.au" className="text-metadata text-accent hover:opacity-60 transition-opacity">daniel@motionstory.com.au</a>
            </div>
          </FadeUp>
        </div>
      </AnimatedSection>
    </div>
  );
}
