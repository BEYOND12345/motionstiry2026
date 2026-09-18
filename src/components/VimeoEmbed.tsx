import { useState } from "react";
import { vimeoPosterUrl } from "../lib/vimeo";

interface VimeoEmbedProps {
  vimeoId: string;
  title: string;
  className?: string;
  autoColor?: boolean;
  loadImmediately?: boolean;
  loading?: "eager" | "lazy";
  /** Privacy hash for unlisted Vimeo videos */
  vimeoHash?: string;
  onPlay?: () => void;
  compact?: boolean;
}

export default function VimeoEmbed({
  vimeoId,
  title,
  className = "",
  autoColor = true,
  loadImmediately = false,
  loading = "lazy",
  vimeoHash,
  onPlay,
  compact = false,
}: VimeoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(loadImmediately);

  return (
    <div className={`relative aspect-video bg-black/[0.04] overflow-hidden ${className}`}>
      {!isLoaded && (
        <button
          onClick={() => {
            setIsLoaded(true);
            onPlay?.();
          }}
          className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-10"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={vimeoPosterUrl(vimeoId)}
            alt={title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/play:scale-[1.02] ${autoColor ? 'grayscale-0' : 'grayscale group-hover/play:grayscale-0 scale-[1.04]'}`}
            loading={loading}
          />
          <div className="absolute inset-0 bg-black/15 group-hover/play:bg-black/25 transition-colors duration-500" />
          <div className={`relative rounded-full border border-white/90 flex items-center justify-center opacity-90 group-hover/play:opacity-100 group-hover/play:scale-105 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-black/10 backdrop-blur-[2px] ${compact ? "h-9 w-9" : "h-14 w-14 md:h-16 md:w-16"}`}>
            <div className={`h-0 w-0 border-y-transparent border-l-white ml-0.5 ${compact ? "border-y-[5px] border-l-[8px]" : "border-y-[7px] border-l-[11px]"}`} />
          </div>
        </button>
      )}
      {isLoaded && (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?${vimeoHash ? `h=${vimeoHash}&` : ""}${loadImmediately ? "" : "autoplay=1&"}title=0&byline=0&portrait=0`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading={loading}
          title={title}
        />
      )}
    </div>
  );
}
