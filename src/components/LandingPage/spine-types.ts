export type SpineCase = {
  client: string;
  useCase: string;
  body: string;
  outcome: string;
  videoUrl: string;
  /** Privacy hash for unlisted Vimeo videos */
  vimeoHash?: string;
  posterUrl?: string;
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
    h1: string;
    subhead: string;
    videoSrc: string;
    fullShowreelUrl: string;
    posterUrl?: string;
    primaryCta: string;
    secondaryCta: string;
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
    body: string;
  };
  /** Guide — empathy + authority */
  guide: {
    eyebrow: string;
    headline: string;
    body: string;
    name: string;
    role: string;
    photoSrc: string;
  };
  /** Plan — three clear steps */
  plan: {
    eyebrow: string;
    headline: string;
    steps: { label: string; body: string }[];
  };
  /** Success proof — films that show the win */
  proof: {
    eyebrow: string;
    headline: string;
    cases: SpineCase[];
  };
  /** Failure / stakes — what to avoid */
  stakes: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  /** Success vision before CTA */
  success: {
    headline: string;
    body: string;
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
