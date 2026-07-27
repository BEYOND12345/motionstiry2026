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
