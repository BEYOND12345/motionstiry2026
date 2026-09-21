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
  "I help organisations turn complex ideas into clear, compelling visual stories.";

export const HOME_HERO_BODY =
  "Whether you are explaining a product, a service, a process, a new direction or something people need to understand, I help find the story and bring it to life.";

export const HOME_ARC = "Ideas. Story. Design. Motion.";

export const HOME_DIRECT = "You work directly with me.";

export const HOME_ME =
  "This is me. I'm the one you work with. This is the work I do — and I love working with complex companies.";

export const HOME_PROBLEM = {
  lead: "You have something worth explaining.",
  mid: "Sometimes the hard part is not what you have built or what you are trying to do. It is helping other people understand why it matters.",
  body: "That might mean explaining a complex service, introducing a new product, helping people navigate change, bringing a campaign to life, or making a technical idea clear enough for anyone to grasp.",
  close: "That is where I come in.",
} as const;

export const HOME_APPROACH = {
  lead: "We start with the story.",
  body: "Before we make anything, we work out what needs to be said and the clearest way to say it.",
  shape:
    "I can help shape the idea, find the story, develop the creative direction and storyboard the work before moving into design and animation.",
  result:
    "The result might be a product story, an explainer, launch content, onboarding, a campaign, internal communications or something entirely different.",
  close: "The format follows the communication problem.",
} as const;

export const HOME_PORTFOLIO_INTRO = "Some things I've made clear.";

export const HOME_RELATIONSHIP = {
  lead: "A creative partner when you need one.",
  body: "I work directly with teams, founders and agencies.",
  more: "You can bring me in for a single project, involve me early when an idea needs shaping, or keep me close when you need experienced creative support.",
  close: "From the first conversation through to the finished work, you work with me.",
} as const;

export const HOME_CLOSE = {
  lead: "What are you trying to explain?",
  body: "Bring me the product, the service, the rough idea, the pitch deck, the technical detail or the problem.",
  close: "We will work out what it needs to become.",
} as const;

export const PROFILE_LEDE =
  "Independent motion designer and director. Making brands move since 2010. Small studio, big impact: work directly with me.";

/** About — plug-in studio, not a freelance animator. */
export const ABOUT_HEADLINE = "The creative studio you can plug into your team.";

export const ABOUT_INTRO =
  "I'm Dan, a creative director and motion designer with years of big-studio experience.";

export const ABOUT_LEDE = [
  "I help companies and agencies turn complex products, ideas and technology into clear visual stories — from the first idea and creative direction through to design and animation.",
  "I work directly with your team, whether you need help shaping the story, developing a concept, creating a storyboard, producing a product demo or simply getting the work made.",
  "Motion Story is deliberately small. You get the experience and capability of a much bigger studio, without the layers.",
] as const;

export const ABOUT_SUPPORT = "Big-studio experience. Small-studio relationship.";

export const ABOUT_HELP_HEADING = "What I can help with";

export const ABOUT_HELP = [
  {
    label: "Ideas & creative direction",
    line: "Find the story and work out what needs to be said.",
  },
  {
    label: "Story & design",
    line: "Shape the message, storyboard the idea and create the visual direction.",
  },
  {
    label: "Motion & production",
    line: "Turn it into finished films, product demos, explainers, launch content and social.",
  },
  {
    label: "Ongoing creative support",
    line: "Plug me into your team whenever you need specialist creative and motion capability.",
  },
] as const;

export const ABOUT_CLOSE_HEADING = "You don't need to have it all figured out.";

export const ABOUT_CLOSE = [
  "Bring me the product, the pitch deck, the rough idea or the problem.",
  "We'll work out what it needs to become.",
] as const;

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
