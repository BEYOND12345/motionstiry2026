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
  "When something is hard to explain, I make it obvious. You work with me.";

export const PROFILE_LEDE =
  "Independent motion designer and director. Making brands move since 2010. Small studio, big impact: work directly with me.";

/** About hero — studio range, one person. */
export const ABOUT_LEDE =
  "A full studio — strategy, design, illustration, animation — in one person. I come in like a consultant and turn the project around.";

export const ABOUT_HELP = [
  { label: "Product demos", line: "The product on screen. Story first." },
  { label: "Video strategy", line: "What to make, for whom, and why." },
  { label: "Design", line: "Look and feel that belongs to the brand." },
  { label: "Illustration", line: "Custom work. Not a template." },
  { label: "Animation direction", line: "I own the film from idea to delivery." },
] as const;

export const ABOUT_HIRE = [
  "I think about the business, then I make the film.",
  "I've shipped my own products. I know the brief.",
  "One person. No production maze.",
] as const;

export const WHY_ME = {
  lead: "I'm not a pair of hands. I'm an idea person — designer, director, entrepreneur. I think about the business first, then I make the film that sells it.",
  body: "I've built my own products, including SMASH Invoices. I know what it feels like when the thing is good and nobody can explain it yet. I work with tech. I use AI when it enables the idea — never as a substitute for one.",
  close:
    "Startups bring me in like a teammate. We find the story, I get it on paper, we turn the project around. Big ideas. No production maze.",
  aside:
    "Father, surfer, big-time animal lover. Obsessive about making dry subjects clear and watchable.",
} as const;
