import { useState } from "react";

interface VimeoEmbedProps {
  vimeoId: string;
  title: string;
  className?: string;
  autoColor?: boolean;
  loadImmediately?: boolean;
  loading?: "eager" | "lazy";
}

export default function VimeoEmbed({
  vimeoId,
  title,
  className = "",
  autoColor = false,
  loadImmediately = false,
  loading = "lazy",
}: VimeoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(loadImmediately);

  return (
    <div className={`relative aspect-video bg-gray-100 overflow-hidden ${className}`}>
      {!isLoaded && (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-10"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://vumbnail.com/${vimeoId}.jpg`}
            alt={title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover/play:grayscale-0 group-hover/play:scale-100 ${autoColor ? 'grayscale-0 scale-100' : 'grayscale scale-105'}`}
            loading={loading}
          />
          <div className="absolute inset-0 bg-black/10 group-hover/play:bg-black/20 transition-colors duration-500" />
          <div className="relative w-16 h-16 rounded-full border border-white flex items-center justify-center opacity-80 group-hover/play:opacity-100 transition-opacity duration-500">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </button>
      )}
      {isLoaded && (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?${loadImmediately ? "" : "autoplay=1&"}title=0&byline=0&portrait=0`}
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
