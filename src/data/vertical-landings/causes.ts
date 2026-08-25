import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
} from './helpers';

export const causesVerticalLanding: VerticalLandingConfig = {
  seo: {
    titleTag: 'Stories for Charities & Nonprofits | Motion Story',
    metaDescription:
      'Charity and nonprofit explainer videos that get to the heart of complex problems. Educate, inspire, and raise support. Dan Neale, Motion Story.',
    canonicalPath: '/causes/',
  },
  eyebrow: 'Causes & nonprofits',
  headline: ['Stories for charities', '& nonprofits.'],
  lede: "Start sharing what you care about, who you help, and the success stories you've created. Together we craft inspirational films that get to the heart of the complex problems you're up against.",
  heroVideo: {
    vimeoId: '540393117',
    title: 'United Nations / Plastic Waste Data',
  },
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('redcross', {
      tags: 'Nonprofit, Covid, explainer',
      body: 'IFRC workers could see COVID-19 vaccines were not reaching remote communities. We framed the story like a wildlife documentary — humans in the spotlight — so the equity message could not be ignored.',
    }),
    verticalCase('rspca-giving', {
      tags: 'Charity, animals, explainer, character animation',
      body: 'RSPCA NSW and Workplace Giving Australia needed to explain the scheme to companies and employees. Playful animation showed the impact on animals and why it is a win-win.',
    }),
    verticalCase('cotton-australia', {
      tags: 'Non-profit, farming, explainer',
      body: 'Cotton Australia wanted to share eco-friendly farming improvements of the past 30 years. A story from planting to harvest, highlighting farmers caring for the land.',
    }),
    verticalCase('rspca-cats', {
      tags: 'Charity, cats, explainer, character animation',
      body: 'Changing how pet owners care for cats is hard. We told it from a cat lover’s point of view — dangers of roaming, and how cats thrive indoors and in enclosures.',
    }),
    verticalCase('acir', {
      tags: 'Food waste, data storytelling',
      body: 'Food waste data turned into a visual narrative that drives awareness and action across the supply chain.',
    }),
    verticalCase('nsw-gov', {
      tags: 'Government, reform, explainer',
      body: 'A complex reform made clear for a huge public audience — social-ready and praised for how clear the message is.',
    }),
    verticalCase('solar-my-school', {
      tags: 'Education, energy, cause',
      body: 'Empowering schools through solar — a mission story that makes the benefit obvious to parents, staff, and partners.',
    }),
    verticalCase('ipa', {
      tags: 'Policy, advocacy, explainer',
      body: 'Electric car road tax explained so the campaign could reach a huge audience and support approval in SA and VIC.',
    }),
  ],
  value: {
    headline: 'Create an emotion.',
    body: 'With an emotive visual story, you can truly connect with individuals and bring about collective action — and show donors how their support is put to good use.',
  },
  benefits: {
    headline: 'Create positive change',
    items: [
      'Educate the public on your cause',
      'Inspire people to spread awareness',
      'Raise more donations',
    ],
  },
  quote: {
    text: 'This video gave us the ability to explain a complex reform and without it, our campaign would have never reached such a huge audience.',
    name: 'Michael Player',
    role: 'Director of Communications, Infrastructure Australia',
  },
  faqs: VERTICAL_CORE_FAQS,
  links: [
    { href: '/explainer-videos/', eyebrow: 'Explainers', label: 'Explainer videos →' },
    { href: '/agencies/', eyebrow: 'Agencies', label: 'Agency partnerships →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
