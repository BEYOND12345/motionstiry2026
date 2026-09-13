export interface AdsLogo {
  name: string;
  /** Optional logo image. Falls back to typographic mark. */
  src?: string;
}

export interface AdsProofPoint {
  title: string;
  body: string;
}

export interface AdsProject {
  client: string;
  result: string;
  vimeoId: string;
  thumbnailAlt?: string;
}

export interface AdsTestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface AdsFaq {
  question: string;
  answer: string;
}

export interface AdsLandingConfig {
  /** URL path, e.g. /saas-tech/ */
  path: string;
  title: string;
  description: string;
  serviceKeyword: string;

  h1: string;
  subhead: string;

  /** Primary booking CTA destination */
  bookingUrl: string;
  bookingLabel: string;
  /** Shorter label for the mobile sticky bar (defaults to “Book a project call”) */
  stickyBookingLabel?: string;
  secondaryCtaLabel: string;

  /** Hero showreel — Vimeo ID for muted loop + click-to-play */
  heroVimeoId: string;
  heroPosterUrl?: string;
  heroVideoTitle: string;

  trustLine: string;
  logos: AdsLogo[];

  coreSell: string;
  proofPoints: AdsProofPoint[];

  middleGround: {
    leftLabel: string;
    rightLabel: string;
    body: string;
  };

  projects: AdsProject[];
  testimonial: AdsTestimonial;

  processSteps: string[];
  faqs: AdsFaq[];

  finalCtaHeading: string;
  finalCtaSubhead: string;

  formspreeAction: string;
  thankYouUrl: string;

  accent?: string;
}
