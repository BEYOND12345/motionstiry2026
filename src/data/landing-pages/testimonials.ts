import type { LandingPageConfig } from '../../components/LandingPage/types';

type Testimonial = LandingPageConfig['testimonial'];

/** Approved client quotes used across Ads landings — mix per page. */
export const TESTIMONIAL_ACODIS: Testimonial = {
  quote: '40,000 views on YouTube, which increased brand perception and reputation.',
  name: 'Simon Lehman',
  role: 'Marketing Manager',
  company: 'Acodis',
};

export const TESTIMONIAL_METHOD: Testimonial = {
  quote:
    '62% completion rate. 21% view rate. For a video about bins, we are pretty astounded. This will be a long-term asset for our business.',
  name: 'Lee Bright',
  role: 'Marketing Lead',
  company: 'Method Recycling',
};

export const TESTIMONIAL_AMSED: Testimonial = {
  quote: 'What would normally take hours to explain now takes 90 seconds.',
  name: 'AMSED',
  role: 'Client',
  company: 'AMSED',
};
