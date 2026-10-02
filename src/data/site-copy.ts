/**
 * Sitewide positioning copy. Homepage + default meta should stay in sync here.
 */

export const SITE_TITLE = "Motion Story | Freelance Motion Graphic Designer | Byron Bay";

/** Primary SERP / Open Graph description (~155 chars). */
export const SITE_DESCRIPTION =
  "Dan Neale is a freelance motion graphic designer in Byron Bay. He helps teams explain products and complex ideas through design and animation.";

/** Organization schema / longer about line. */
export const SITE_DESCRIPTION_LONG =
  "Dan Neale is a freelance motion graphic designer in Byron Bay. He helps teams explain products and complex ideas, from the story through storyboard, design and animation.";

export const HERO_LEDE =
  "I'm Dan, a freelance motion graphic designer. I help teams explain products and complex ideas.";

export const HOME_HERO_BODY =
  "Whether you are explaining a product, a service, a process, a new direction or something people need to understand, I help find the story and bring it to life.";

export const HOME_ARC = "Ideas. Story. Design. Motion.";

export const HOME_ME =
  "I work out what needs to be said, then take it through storyboard, design and animation. If the brief is already clear, I can execute that too.";

export const HOME_PROBLEM = {
  lead: "You have something worth explaining.",
  mid: "Sometimes the hard part is not what you have built or what you are trying to do. It is helping other people understand why it matters.",
  body: "That might mean explaining a complex service, introducing a new product, helping people navigate change, bringing a campaign to life, or making a technical idea clear enough for anyone to grasp.",
  close: "That is where I come in.",
} as const;

export const HOME_APPROACH = {
  lead: "Tell your product story.",
  body: "A good product story helps people understand what you have made, how it works, why it matters and what it can do for them.",
  shape:
    "Whether it is a physical product, a digital platform, a new feature or a complex service, I work out the clearest way to bring it to life with your team.",
} as const;

export const HOME_MAKE_LEAD = "Your product story can take many forms.";

export const HOME_MAKE_CLOSE = "The right format depends on what you are trying to communicate.";

export const HOME_MAKE = [
  { label: "Product demos", line: "Show what it does, how it works and why it matters." },
  { label: "Explainers", line: "Make a complicated idea clear." },
  { label: "UI and in app animation", line: "Bring the product experience to life." },
  { label: "Onboarding", line: "Help people know what to do next and get value sooner." },
  { label: "Launch films", line: "Give something new a strong introduction." },
  { label: "Sales, pitch and presentation content", line: "Help customers, partners and investors understand the value quickly." },
  { label: "Social content", line: "Turn an idea into something people want to watch." },
] as const;

export const HOME_PORTFOLIO_INTRO = "Some things I've made clear.";

export const HOME_RELATIONSHIP = {
  lead: "A creative partner when you need one.",
  body: "I work with teams, founders and agencies. Bring me in for a single project, involve me early when an idea needs shaping, or keep me close when you need experienced creative support.",
} as const;

export const HOME_CLOSE = {
  lead: "Have an important message to get across?",
  body: "I can help work out the story and bring it together through design and animation.",
  close: "You work with me from the first conversation through to the finished film.",
} as const;

export const PROFILE_LEDE =
  "I'm Dan, a freelance motion graphic designer. I help teams explain products and complex ideas.";

export const ABOUT_HEADLINE = "You work with me.";

export const ABOUT_INTRO =
  "I'm Dan, a freelance motion graphic designer.";

export const ABOUT_LEDE = [
  "I help teams explain products and complex ideas. That can start with the story, or with a brief you already have.",
  "Storyboard, design and animation stay with me. When a film needs another specialist, I bring in someone I trust and I direct that work.",
  "Motion Story is the practice. It is not a large team.",
] as const;

export const ABOUT_SUPPORT = "Directly. From the idea to the film.";

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
    line: "Show what a product actually does, without forcing someone through a 40 slide deck.",
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
    line: "Work out where video can actually be useful across your marketing, sales and product journey, not just make one video and disappear.",
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
  lead: "I'm not a pair of hands. I'm an idea person. Designer, director, entrepreneur. I think about the business first, then I make the film that sells it.",
  body: "I've built my own products, including SMASH Invoices. I know what it feels like when the thing is good and nobody can explain it yet. I work with tech. I use AI when it enables the idea, never as a substitute for one.",
  close:
    "Startups bring me in like a teammate. We find the story, I get it on paper, we turn the project around. Big ideas. No production maze.",
  aside:
    "Father, surfer, big-time animal lover. Obsessive about making dry subjects clear and watchable.",
} as const;
