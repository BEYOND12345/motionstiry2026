import { ALL_PROJECTS, sortProjectsShowcaseFirst } from "../data/projects";
import { GOOGLE_RATING } from "../data/reviews";
import WorkCard, { projectToWorkCard } from "./WorkCard";

const ORDERED_PROJECTS = sortProjectsShowcaseFirst(ALL_PROJECTS);

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-32 pb-10 px-8 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
          The work.<br />Start here.
        </h1>
        <p className="text-body max-w-lg mb-8">
          Selected films for SaaS, platforms, agencies, and causes.
        </p>
        <a href="/reviews/" className="text-metadata hover:text-black transition-colors">
          <span className="text-accent">★★★★★</span> {GOOGLE_RATING.score} on Google · {GOOGLE_RATING.count} reviews →
        </a>
      </div>

      <div className="px-8 max-w-7xl mx-auto mb-12">
        <div className="border-b border-black/10 pb-6">
          <span className="text-metadata opacity-30">
            {ORDERED_PROJECTS.length} films · strongest first
          </span>
        </div>
      </div>

      <div className="px-8 max-w-7xl mx-auto pb-32">
        <div className="work-grid">
          {ORDERED_PROJECTS.map((project, i) => (
            <WorkCard
              key={project.id}
              {...projectToWorkCard(project)}
              loading={i < 4 ? "eager" : "lazy"}
              meta={project.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}
