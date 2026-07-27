/**
 * Google reviews for Motion Story.
 * Quotes are trimmed to the complete sentences visible in the review feed —
 * expand once full review text is available.
 */
export interface GoogleReview {
  name: string;
  quote: string;
}

export const GOOGLE_RATING = {
  score: '5.0',
  count: 10,
  source: 'Google',
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: 'Jefferson Nova',
    quote:
      'Wow, the video has surpassed 40k views, and two years later it remains our best performing piece of content.',
  },
  {
    name: 'Tate Shepherd',
    quote:
      'We had previous negative experiences with video agencies, which made me somewhat cautious. However, Dan stood out.',
  },
  {
    name: 'Troy Cornelius',
    quote:
      'Look there are a lot of motion designers out there but not many who think like Dan does.',
  },
  {
    name: 'Alexander Armer',
    quote:
      "Every animator we'd tried before just made something that looked good but still confused people.",
  },
  {
    name: 'Bobbi Borsenik',
    quote:
      'We bring Dan in when we need someone we can trust to just get on with it.',
  },
  {
    name: 'Josh Ryan',
    quote:
      'We just needed someone who could take a brief and run with it. Dan at Motion Story did exactly that.',
  },
  {
    name: 'Ashley Johnson',
    quote:
      "We don't have big budgets so every project has to count. Dan understood that.",
  },
  {
    name: 'Emiliano Harrison',
    quote:
      "Motion Story's work was truly exceptional — both highly creative and effective.",
  },
  {
    name: 'Mason Allport',
    quote:
      "In short, Motion Story's work was outstanding — very creative and effective.",
  },
  {
    name: 'Pulseee',
    quote:
      "Motion Story's delivery was absolutely impeccable — highly creative and efficient.",
  },
];

/** Strongest, most specific reviews for high-visibility placements. */
export const FEATURED_GOOGLE_REVIEWS: GoogleReview[] = GOOGLE_REVIEWS.slice(0, 6);

/** Verified client reviews (Clutch) — full attribution with role and company. */
export interface ClientReview {
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
}

export const VERIFIED_CLIENT_REVIEWS: ClientReview[] = [
  {
    quote:
      'It felt like Motion Story was part of our team, even though we were both sitting at the other end of the globe.',
    name: 'Simon Lehmann',
    role: 'Head of Marketing',
    company: 'Acodis',
    project: 'Animated explainer for a SaaS company',
  },
  {
    quote:
      'They went above and beyond the scope of work to get it right. They were passionate about the project.',
    name: 'Nicola Saltman',
    role: 'Senior Sustainability Engagement Officer',
    company: 'NSW Government',
    project: 'Animation for a solar schools program',
  },
  {
    quote: 'They continually demonstrated their understanding of our business.',
    name: 'Lee Bright',
    role: 'Marketing Team Lead',
    company: 'Method Recycling',
    project: 'Explainer video production',
  },
  {
    quote: "The quality of Motion Story's animation was spectacular.",
    name: 'Dave West',
    role: 'Founder',
    company: 'BatNav',
    project: 'Animated explainer and voiceover',
  },
  {
    quote: 'They were a solid team, and we were so pleased with their work.',
    name: 'Stephanie Lee',
    role: 'Wellbeing Project Advisor',
    company: 'Centre for Corporate Health',
    project: 'Series of 12+ animations on psychological health',
  },
  {
    quote:
      'They covered all of their bases and made sure that we were really happy at every stage of the project.',
    name: 'Mary & James Finnimore',
    role: 'CEO & Sales and Marketing Assistant',
    company: 'Technology management company',
    project: 'Two explainer videos',
  },
  {
    quote: 'Motion Story understood our vision, and they executed it the way I wanted them to do.',
    name: 'Omer Mohammad',
    role: 'Owner',
    company: 'Carta Coin',
    project: '90-second animated explainer',
  },
  {
    quote: 'They really thought about how they could best help us on our project.',
    name: 'Anthony Painter',
    role: 'Director of Operations',
    company: 'Ellus & Krue',
    project: 'Brand motion graphics for skincare',
  },
  {
    quote: 'They were very flexible to work within our available time frames.',
    name: 'Jessica Gatt',
    role: 'Managing Director',
    company: 'Logix Consulting',
    project: 'Educational animation for marine consulting',
  },
];
