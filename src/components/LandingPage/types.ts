export type LandingPageConfig = {
  slug: string;
  seo: {
    titleTag: string;
    metaDescription: string;
    canonicalPath: string;
  };
  hero: {
    h1: string;
    subhead: string;
    /** Muted looped hero clip — Vimeo ID or player URL */
    videoSrc: string;
    /** Full video on click — Vimeo ID or player URL */
    fullShowreelUrl: string;
    /** Optional poster; defaults to Vimeo thumbnail */
    posterUrl?: string;
  };
  trustStrip: {
    line: string;
    logos: { src: string; alt: string }[];
  };
  coreSell: {
    leadCopy: string;
    proofPoints: { title: string; body: string }[];
  };
  middleGround: {
    headline: string;
    body: string;
  };
  featuredWork: {
    projects: {
      thumbnail: string;
      client: string;
      oneLineResult: string;
      videoUrl: string;
    }[];
  };
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };
  process: {
    steps: { label: string; body: string }[];
  };
  faq: {
    items: { question: string; answer: string }[];
  };
  finalCta: {
    headline: string;
    formIntro: string;
  };
  form: {
    textareaLabel: string;
    submitButtonLabel: string;
    /** Hardcoded conversion redirect — do not change */
    redirectTo: '/thank-you';
  };
  accentColor: string;
};

/** Extract a Vimeo ID from a bare ID or player/watch URL. */
export function vimeoIdFrom(src: string): string {
  const trimmed = src.trim();
  if (/^\d+$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match?.[1] ?? trimmed;
}
