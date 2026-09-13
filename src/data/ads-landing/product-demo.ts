import type { AdsLandingConfig } from './types';
import { saasTechLanding } from './saas-tech';

export const productDemoLanding: AdsLandingConfig = {
  ...saasTechLanding,
  path: '/product-demo-videos/',
  title: 'Product Demo Videos | Motion Story',
  description:
    'Animated product demo videos that show your software in action — no login required. Built for landing pages, sales decks, and onboarding.',
  serviceKeyword: 'Product Demo Videos',
  h1: 'Product Demo Videos That Actually Explain It',
  subhead:
    'Work directly with the creative director. 20 years of senior craft — no account managers, no handoffs, no juniors.',
  heroVimeoId: '866174146',
  heroVideoTitle: 'Product demo showreel',
  projects: [
    {
      client: 'Trudi',
      result: 'Demo walkthrough without a login or screen-recording mess.',
      vimeoId: '866174146',
    },
    {
      client: 'Wipster',
      result: 'Product overview sales teams can send with confidence.',
      vimeoId: '648360270',
    },
    {
      client: 'Good2Pay',
      result: 'Paperless invoicing shown clearly, end to end.',
      vimeoId: '448704979',
    },
  ],
  testimonial: {
    quote:
      '62% completion rate. 21% view rate. For a video about bins, we are pretty astounded. This will be a long-term asset for our business.',
    name: 'Lee Bright',
    role: 'Marketing Lead',
    company: 'Method Recycling',
  },
};
