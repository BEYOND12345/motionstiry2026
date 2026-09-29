import { useEffect, useMemo, useState } from "react";
import VimeoEmbed from "./VimeoEmbed";

export type HeroFilm = {
  vimeoId: string;
  vimeoHash?: string;
  title: string;
  client?: string;
};

const REEL_SECONDS_PER_PROJECT = 9;

type Props = {
  films: HeroFilm[];
  className?: string;
};

function splitRows(films: HeroFilm[]) {
  const top: HeroFilm[] = [];
  const bottom: HeroFilm[] = [];
  films.forEach((film, i) => {
    (i % 2 === 0 ? top : bottom).push(film);
  });
  return [top, bottom] as const;
}

export default function HeroFilmCarousel({ films, className = "" }: Props) {
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [top, bottom] = useMemo(() => splitRows(films), [films]);
  const frozen = paused || playing;
  const durationTop = Math.max(48, top.length * REEL_SECONDS_PER_PROJECT);
  const durationBottom = Math.max(56, bottom.length * (REEL_SECONDS_PER_PROJECT + 2));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onPlay = () => {
    setPlaying(true);
    setPaused(true);
  };

  const card = (film: HeroFilm, key: string, loading: "eager" | "lazy") => (
    <div key={key} className="hero-reel-card">
      <VimeoEmbed
        vimeoId={film.vimeoId}
        vimeoHash={film.vimeoHash}
        title={film.title}
        loading={loading}
        className="rounded-xl"
        compact
        onPlay={onPlay}
      />
      {film.client ? <span className="hero-reel-name">{film.client}</span> : null}
    </div>
  );

  if (!films.length) return null;

  if (reduceMotion) {
    return (
      <div className={`hero-reel ${className}`.trim()} aria-label="Explainer work">
        <div className="hero-reel-static">{films.slice(0, 4).map((film) => card(film, film.vimeoId, "eager"))}</div>
      </div>
    );
  }

  const row = (items: HeroFilm[], direction: "left" | "right", durationSec: number) => {
    if (!items.length) return null;
    const loop = [...items, ...items];
    return (
      <div className="hero-reel-viewport">
        <div
          className="hero-reel-track"
          style={{
            animation: `hero-reel-${direction} ${durationSec}s linear infinite`,
            animationPlayState: frozen ? "paused" : "running",
          }}
        >
          {loop.map((film, i) => card(film, `${direction}-${film.vimeoId}-${i}`, "eager"))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`hero-reel ${className}`.trim()}
      aria-label="Explainer work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (!playing) setPaused(false);
      }}
      onPointerDown={() => setPaused(true)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!playing && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="hero-reel-rows">
        {row(top, "left", durationTop)}
        {row(bottom, "right", durationBottom)}
      </div>
      <style>{`
        .hero-reel {
          container-type: inline-size;
          min-width: 0;
        }
        .hero-reel-rows {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .hero-reel-viewport {
          overflow: hidden;
        }
        .hero-reel-track {
          display: flex;
          gap: 0.75rem;
          width: max-content;
        }
        .hero-reel-card {
          position: relative;
          flex: 0 0 calc((100cqw - 0.75rem) / 2);
        }
        .hero-reel-name {
          position: absolute;
          left: 0.55rem;
          right: 0.55rem;
          bottom: 0.45rem;
          z-index: 20;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fff;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.55);
          pointer-events: none;
        }
        .hero-reel-static {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        @keyframes hero-reel-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes hero-reel-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
        @media (min-width: 900px) {
          .hero-reel-rows,
          .hero-reel-track,
          .hero-reel-static {
            gap: 1rem;
          }
          .hero-reel-card {
            flex-basis: calc((100cqw - 1rem) / 2);
          }
        }
      `}</style>
    </div>
  );
}
