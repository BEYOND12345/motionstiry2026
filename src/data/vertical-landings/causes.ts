import type { VerticalLandingConfig } from './types';
import {
  VERTICAL_CORE_FAQS,
  VERTICAL_TICKER_A,
  VERTICAL_TICKER_B,
  verticalCase,
  verticalFilm,
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
  lede: 'Films that get to the heart of the problem. Who you help, why it matters, and why people should get behind you.',
  ctaNote:
    'Who do you help, and why should someone care? I can turn that into a film people will watch.',
  heroVideo: {
    vimeoId: '540393117',
    title: 'United Nations / Plastic Waste Data',
  },
  heroCarousel: [
    verticalFilm('united-nations'),
    verticalFilm('amsed'),
    verticalFilm('solar-my-school'),
    verticalFilm('neat-streets'),
    verticalFilm('ipa'),
    verticalFilm('lxrp'),
    verticalFilm('method-recycling'),
    verticalFilm('meltwater'),
  ],
  tickerLabel: 'Trusted by teams who need clarity',
  tickerRowA: VERTICAL_TICKER_A,
  tickerRowB: VERTICAL_TICKER_B,
  cases: [
    verticalCase('redcross', {
      tags: 'Nonprofit, Covid, explainer',
      body: 'IFRC workers could see COVID-19 vaccines were not reaching remote communities. I framed it like a wildlife documentary, with people in the spotlight, so the equity point was clear.',
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
      body: 'Changing how pet owners care for cats is hard. I told it from a cat lover’s point of view: the dangers of roaming, and how cats thrive indoors and in enclosures.',
    }),
    verticalCase('acir', {
      tags: 'Food waste, data storytelling',
      body: 'Food waste data turned into a visual narrative that drives awareness and action across the supply chain.',
    }),
    verticalCase('nsw-gov', {
      tags: 'Government, reform, explainer',
      body: 'A complex reform made clear for a huge public audience. Social ready and praised for how clear the message is.',
    }),
  ],
  value: {
    headline: 'Who you help, and why it matters.',
    body: 'I look for the person in the story, then make the problem and the next step clear enough to watch.',
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
    { href: '/freelance-motion-graphic-designer/', eyebrow: 'Motion', label: 'Motion graphics →' },
    { href: '/work/', eyebrow: 'Portfolio', label: 'See all work →' },
  ],
};
