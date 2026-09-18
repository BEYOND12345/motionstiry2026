import type { Project } from "../data/projects";
import VimeoEmbed from "./VimeoEmbed";

export type WorkCardData = {
  vimeoId: string;
  vimeoHash?: string;
  title: string;
  client: string;
  description: string;
  href: string;
};

type WorkCardProps = WorkCardData & {
  loading?: "eager" | "lazy";
  meta?: string;
  className?: string;
  heading?: "h2" | "p";
  onPlay?: () => void;
};

export function projectToWorkCard(project: Project): WorkCardData {
  return {
    vimeoId: project.vimeoId,
    vimeoHash: project.vimeoHash,
    title: project.title,
    client: project.client,
    description: project.description,
    href: `/casestudy/${project.slug}/`,
  };
}

export default function WorkCard({
  vimeoId,
  vimeoHash,
  title,
  client,
  description,
  href,
  loading = "lazy",
  meta,
  className = "",
  heading: Heading = "h2",
  onPlay,
}: WorkCardProps) {
  return (
    <article className={`work-card ${className}`.trim()}>
      <VimeoEmbed
        vimeoId={vimeoId}
        vimeoHash={vimeoHash}
        title={title}
        loading={loading}
        className="rounded-xl"
        onPlay={onPlay}
      />
      <a href={href} className="work-card-meta">
        <div className="min-w-0">
          <Heading className="work-card-client">{client}</Heading>
          <p className="work-card-desc">{description}</p>
        </div>
        {meta ? <span className="work-card-aside">{meta}</span> : null}
      </a>
    </article>
  );
}
