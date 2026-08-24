/**
 * Bold dual-row client ticker — shared trust signal for homepage + landings.
 * Pause on hover/focus. Respects prefers-reduced-motion.
 */

type ClientTickerProps = {
  rowA: string[];
  rowB: string[];
  label?: string;
  /** Slightly denser for the homepage left column */
  compact?: boolean;
  align?: "left" | "center";
};

function TickerRow({
  items,
  reverse = false,
  duration = 48,
  compact = false,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
  compact?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="ms-ticker-mask relative overflow-hidden py-2.5 sm:py-3">
      <div
        className={`ms-ticker-track flex w-max items-center gap-0 ${reverse ? "ms-ticker-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center">
            <span
              className={`ms-ticker-name font-display font-bold tracking-tight ${
                compact
                  ? "text-[1.15rem] sm:text-[1.35rem]"
                  : "text-[1.35rem] sm:text-[1.6rem] md:text-[1.85rem]"
              }`}
            >
              {name}
            </span>
            <span
              className={`ms-ticker-dot ${compact ? "mx-4 sm:mx-5" : "mx-5 sm:mx-7 md:mx-8"}`}
              aria-hidden="true"
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ClientTicker({
  rowA,
  rowB,
  label = "Trusted by",
  compact = false,
  align = "left",
}: ClientTickerProps) {
  return (
    <section
      className={`ms-ticker ${compact ? "ms-ticker-compact" : ""}`}
      aria-label={label}
    >
      <style>{`
        .ms-ticker-name { color: rgba(10, 10, 10, 0.72); }
        .ms-ticker-dot { color: #FF0000; opacity: 0.9; }
        .ms-ticker-mask {
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .ms-ticker.ms-ticker-compact .ms-ticker-mask {
          /* Harder right fade so the reel never crowds the portfolio gutter */
          mask-image: linear-gradient(90deg, #000 0%, #000 82%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 82%, transparent 100%);
        }
        .ms-ticker-track {
          animation: ms-ticker-scroll 48s linear infinite;
        }
        .ms-ticker-track.ms-ticker-reverse {
          animation-name: ms-ticker-scroll-reverse;
        }
        .ms-ticker:hover .ms-ticker-track,
        .ms-ticker:focus-within .ms-ticker-track {
          animation-play-state: paused;
        }
        @keyframes ms-ticker-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes ms-ticker-scroll-reverse {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ms-ticker-track {
            animation: none !important;
            transform: none !important;
            flex-wrap: wrap;
            width: 100% !important;
            max-width: 100%;
            justify-content: flex-start;
            row-gap: 0.35rem;
          }
        }
      `}</style>
      {label ? (
        <p
          className={`text-metadata mb-3 tracking-[0.16em] ${
            align === "center" ? "text-center" : ""
          }`}
        >
          {label}
        </p>
      ) : null}
      <div className={compact ? "space-y-0" : "-mx-1 space-y-0"}>
        <TickerRow items={rowA} duration={42} compact={compact} />
        <TickerRow items={rowB} reverse duration={52} compact={compact} />
      </div>
    </section>
  );
}
