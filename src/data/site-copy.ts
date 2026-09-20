/**
 * Sitewide positioning copy. Homepage + default meta should stay in sync here.
 */

export const SITE_TITLE = "Motion Story | SaaS Motion Graphic Explainer Videos | Byron Bay";

/** Primary SERP / Open Graph description (~155 chars). */
export const SITE_DESCRIPTION =
  "SaaS motion graphic explainer videos for new products. Product on screen, story first. Dan Neale, Byron Bay. Work directly with the director.";

/** Organization schema / longer about line. */
export const SITE_DESCRIPTION_LONG =
  "SaaS motion graphic explainer videos for new software products. Dan Neale: independent motion designer and director. Product on screen, story first. Small studio, Byron Bay; clients worldwide.";

export const HERO_LEDE =
  "I turn complex ideas, products and technology into clear, compelling visual stories.";

export const HOME_ARC = ["Ideas", "Story", "Design", "Animation"] as const;

export const HOME_DIRECT = "You work with me.";

export const HOME_PROBLEM = {
  lead: "You've built something worth understanding.",
  mid: "But sometimes the hardest part isn't building it. It's explaining it.",
  body: "Whether it's a new product, a complicated process, a piece of technology or an idea that doesn't fit neatly into a sentence — people need to understand it before they can care about it.",
  close: "That's where I come in.",
} as const;

export const HOME_APPROACH = {
  lead: "We start with the idea, not the animation.",
  body: "I'll get inside what you're trying to communicate, work with you to find the story, develop the creative direction and storyboard the idea before we start making anything.",
  close: "Then I'll design and animate it — or bring in the right specialists when the project needs them.",
} as const;

export const HOME_APPROACH_ARC = [
  "Understand",
  "Ideate",
  "Story",
  "Storyboard",
  "Design",
  "Motion",
] as const;

export const HOME_MAKE_LEAD = "What we make depends on what you're trying to achieve.";

export const HOME_MAKE = [
  { label: "Product demos", line: "Show how it works." },
  { label: "Explainers", line: "Make complicated ideas clear." },
  { label: "Onboarding", line: "Help people understand what to do next." },
  { label: "Launch films", line: "Give something new a strong introduction." },
  { label: "Social content", line: "Turn ideas into content people actually want to watch." },
  { label: "Visual stories", line: "When there isn't an obvious format yet, we'll work out the right way to tell it." },
] as const;

export const HOME_MESSY = {
  lead: "You don't need to have the answer before you call me.",
  items: [
    "The product.",
    "The pitch deck.",
    "The rough idea.",
    "The technical documentation.",
    "The problem.",
  ],
  close: "We'll figure out the best way to tell the story together.",
} as const;

export const HOME_AUDIENCE = {
  lead: "For teams, founders and agencies.",
  body: "I work directly with marketing and product teams, founders and creative agencies — either taking a project from concept through to delivery or plugging into an existing team when specialist creative and motion capability is needed.",
  tags: ["Marketing teams", "Founders & product teams", "Creative agencies"],
} as const;

export const HOME_PORTFOLIO_INTRO = "Some things I've made clear.";

export const HOME_RELATIONSHIP = {
  lead: "Need a creative partner, not just a production supplier?",
  body: "You can bring me in for one project, or keep me close as your go-to creative studio whenever something needs explaining, demonstrating or promoting.",
  direct: "You work directly with me from the first idea through to the final piece.",
  close: "Big-studio experience. Small-studio relationship.",
} as const;

export const HOME_CLOSE = {
  lead: "What are you trying to explain?",
  body: "Tell me what you've got. We'll figure out what it needs to become.",
} as const;

export const PROFILE_LEDE =
  "Independent motion designer and director. Making brands move since 2010. Small studio, big impact: work directly with me.";

/** About — plug-in studio, not a freelance animator. */
export const ABOUT_HEADLINE = "The creative studio you can plug into your team.";

export const ABOUT_LEDE =
  "Complex technology needs a clear story. I help technology companies and agencies turn complicated products, ideas and technology into clear visual stories — from strategy and concept through to design and animation.";

export const ABOUT_SUPPORT = "Big-studio experience. One-to-one collaboration.";

export const ABOUT_MODES = [
  { label: "Think", line: "Strategy · Ideas · Story · Creative Direction" },
  { label: "Shape", line: "Messaging · Scripts · Storyboards · Design" },
  { label: "Make", line: "Motion · Animation · Product Demos · Films" },
] as const;

export const ABOUT_STEPS = [
  "What are we actually trying to say?",
  "What's the story?",
  "How should we show it?",
  "Now let's animate it.",
] as const;

export const ABOUT_ARC = ["Idea", "Storyboard", "Design", "Motion"] as const;

export const ABOUT_BUILT_FOR =
  "That's what Motion Story is built for.";

export const ABOUT_PLUG = [
  {
    label: "Product storytelling",
    line: "Turn complicated products and technology into stories people can understand.",
  },
  {
    label: "Explainers",
    line: "Make difficult ideas, systems and processes simple and visual.",
  },
  {
    label: "Product demos",
    line: "Show what a product actually does — without forcing someone through a 40-slide deck.",
  },
  {
    label: "Launch films",
    line: "Give new products, features and companies a compelling visual introduction.",
  },
  {
    label: "Creative direction",
    line: "Help shape the idea, story, visual language and execution before production begins.",
  },
  {
    label: "Video strategy",
    line: "Work out where video can actually be useful across your marketing, sales and product journey — not just make one video and disappear.",
  },
] as const;

export const ABOUT_MESSY = [
  "A product deck.",
  "A Figma file.",
  "A technical document.",
  "A founder's voice note.",
  "A half-written script.",
  "Or just a problem you need to solve.",
] as const;

export const ABOUT_CASES = [
  {
    id: "trudi",
    problem: "AI property management is hard to show.",
    did: "Walked tenant comms, maintenance and reporting as real workflows.",
    result: "A demo people can follow.",
  },
  {
    id: "atomic",
    problem: "In-app messages look like spam.",
    did: "Showed native, useful cards inside existing apps.",
    result: "The product, not a pitch.",
  },
  {
    id: "mosaic",
    problem: "Strategic data planning is abstract.",
    did: "Distilled the workflow into one narrative.",
    result: "Strategy and execution, aligned.",
  },
  {
    id: "acodis",
    problem: "AI extraction is invisible.",
    did: "Visualised the machine for lay people.",
    result: "Technical value you can see.",
  },
  {
    id: "wipster",
    problem: "Review sits across too many tools.",
    did: "Connected review, approval and delivery in one story.",
    result: "Collaboration that feels simple.",
  },
  {
    id: "giraffe",
    problem: "City-planning software, three audiences.",
    did: "One film for architecture, development and government.",
    result: "One story they can share.",
  },
  {
    id: "method-recycling",
    problem: "A workplace bin that had to perform.",
    did: "Told the product as a story.",
    result: "62% completion. 21% view rate.",
  },
  {
    id: "heyyou",
    problem: "Food ordering needed to feel obvious.",
    did: "Put browse, order-ahead and skip-the-queue on screen.",
    result: "The journey in one tap.",
  },
] as const;

export const WHY_ME = {
  lead: "I'm not a pair of hands. I'm an idea person — designer, director, entrepreneur. I think about the business first, then I make the film that sells it.",
  body: "I've built my own products, including SMASH Invoices. I know what it feels like when the thing is good and nobody can explain it yet. I work with tech. I use AI when it enables the idea — never as a substitute for one.",
  close:
    "Startups bring me in like a teammate. We find the story, I get it on paper, we turn the project around. Big ideas. No production maze.",
  aside:
    "Father, surfer, big-time animal lover. Obsessive about making dry subjects clear and watchable.",
} as const;
