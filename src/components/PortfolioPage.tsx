import { ALL_PROJECTS, sortProjectsShowcaseFirst } from "../data/projects";
import WorkCard, { projectToWorkCard } from "./WorkCard";

const ORDERED_PROJECTS = sortProjectsShowcaseFirst(ALL_PROJECTS);

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-32 pb-10 px-8 max-w-5xl mx-auto">
        <span className="text-metadata mb-8 block">Work</span>
        <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-10 max-w-4xl">
          The work.<br />Start here.
        </h1>
        <p className="text-body max-w-lg mb-8">
          Selected films for SaaS, platforms, agencies, and causes.
        </p>
      </div>

      <div className="px-8 max-w-5xl mx-auto mb-12">
        <div className="border-b border-black/10 pb-6">
          <span className="text-metadata opacity-30">
            {ORDERED_PROJECTS.length} films · strongest first
          </span>
        </div>
      </div>

      <div className="px-8 max-w-5xl mx-auto pb-24">
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
