export type SpineCase = {
  client: string;
  useCase: string;
  body: string;
  outcome: string;
  videoUrl: string;
  /** Privacy hash for unlisted Vimeo videos */
  vimeoHash?: string;
  posterUrl?: string;
  slug?: string;
};

/** StoryBrand-shaped landing config */
export type SpineLandingConfig = {
  slug: string;
  seo: {
    titleTag: string;
    metaDescription: string;
    canonicalPath: string;
  };
  /** Character + desire — hero wants X */
  hero: {
    eyebrow: string;
    h1: string | string[];
    subhead: string;
    videoSrc: string;
    videoHash?: string;
    fullShowreelUrl: string;
    posterUrl?: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryCtaHref?: string;
  };
  trustStrip: {
    line: string;
    /** Two ticker rows (bold marquee) */
    rowA: string[];
    rowB: string[];
  };
  /** Centered value statement (not a “problem” label) */
  value: {
    headline: string;
    body: string | string[];
  };
  /** Optional problem section (StoryBrand: external / internal / philosophical) */
  problem?: {
    eyebrow: string;
    headline: string;
    items: { label: string; body: string }[];
  };
  /** Guide — empathy + authority */
  guide: {
    eyebrow: string;
    headline: string;
    body: string | string[];
    name: string;
    role: string;
    photoSrc: string;
  };
  /** Plan — three clear steps */
  plan: {
    eyebrow: string;
    headline: string;
    body?: string | string[];
    steps: { label: string; body: string }[];
  };
  /** Success proof — films that show the win */
  proof: {
    eyebrow: string;
    headline: string;
    intro?: string | string[];
    note?: string;
    /** Title, one line, or a quote sitting beside a film */
    weaves?: {
      after: number;
      headline?: string;
      mark?: string;
      text?: string | string[];
      quote?: { text: string; name: string; company: string };
    }[];
    /** Work leads. Copy sits beside films. */
    workLed?: boolean;
    cases: SpineCase[];
  };
  /** Use the site footer instead of the Ads wordmark */
  siteFooter?: boolean;
  /** Failure / stakes — what to avoid */
  stakes: {
    eyebrow: string;
    headline: string;
    body: string | string[];
  };
  /** Optional footer blurb under the wordmark */
  footerLine?: string;
  /** Success vision before CTA */
  success: {
    headline: string;
    body: string | string[];
  };
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
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
    redirectTo: '/thank-you';
  };
  accentColor: string;
};
