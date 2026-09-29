/**
 * Canonical vertical landing config — one structure for every service/audience page.
 */

export type VerticalCase = {
  title: string;
  client: string;
  link: string;
  vimeoId: string;
  vimeoHash?: string;
  tags?: string;
  body: string;
};

export type VerticalWeave = {
  after: number;
  headline?: string;
  mark?: string;
  text?: string | string[];
  quote?: {
    text: string;
    name: string;
    role: string;
  };
  /** Full-width portrait row, same photo treatment as the freelance intro. */
  portrait?: boolean;
  /** Full-width quote with more air than a grid cell. */
  wide?: boolean;
  cta?: boolean;
  ctaLabel?: string;
};

export type VerticalLandingConfig = {
  seo: {
    titleTag: string;
    metaDescription: string;
    canonicalPath: string;
  };
  eyebrow: string;
  headline: string[];
  lede: string | string[];
  /** Close after the work grid */
  ctaNote?: string | string[];
  /** Unique hero film — must not also appear in `cases` */
  heroVideo: {
    vimeoId: string;
    vimeoHash?: string;
    title: string;
  };
  /** Hero reel. When set with two or more films, cycles these instead of the single heroVideo. */
  heroCarousel?: {
    vimeoId: string;
    vimeoHash?: string;
    title: string;
    client?: string;
  }[];
  tickerLabel?: string;
  tickerRowA: string[];
  tickerRowB: string[];
  workEyebrow?: string;
  cases: VerticalCase[];
  /** Story bands: claim, one idea, quote, director, range, then the rest of the work. */
  storyLed?: boolean;
  story?: {
    idea?: {
      headline: string | string[];
      mark?: string;
      text: string | string[];
      film: VerticalCase;
    };
    quote: {
      text: string;
      name: string;
      role: string;
    };
    director?: {
      headline: string | string[];
      text: string | string[];
    };
    range: {
      headline: string | string[];
      mark?: string;
      text: string | string[];
      films: VerticalCase[];
    };
    close: {
      headline: string;
      mark?: string;
      text: string | string[];
      ctaLabel: string;
    };
  };
  /** Film grid with titled asides beside the work. */
  workLed?: boolean;
  /** Hide the photo row under the ticker. Use a portrait weave instead. */
  hideMe?: boolean;
  /** Title and copy above the first films. */
  workIntro?: {
    headline: string;
    mark?: string;
    text?: string | string[];
  };
  weaves?: VerticalWeave[];
  value: {
    headline: string;
    body: string | string[];
  };
  benefits: {
    headline: string;
    items: string[];
  };
  quote: {
    text: string;
    name: string;
    role: string;
  };
  faqs: { question: string; answer: string }[];
  links: { href: string; eyebrow: string; label: string }[];
};
