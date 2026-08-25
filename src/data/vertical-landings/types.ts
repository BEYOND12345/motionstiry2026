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

export type VerticalLandingConfig = {
  seo: {
    titleTag: string;
    metaDescription: string;
    canonicalPath: string;
  };
  eyebrow: string;
  headline: string[];
  lede: string;
  tickerLabel?: string;
  tickerRowA: string[];
  tickerRowB: string[];
  workEyebrow?: string;
  cases: VerticalCase[];
  value: {
    headline: string;
    body: string;
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
