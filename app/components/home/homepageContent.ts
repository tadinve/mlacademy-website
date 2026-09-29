export type LearningPath = {
  kicker: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export type FeaturedResource = {
  title: string;
  description: string;
  outcome: string;
  format: string;
  level: string;
  href: string;
  cta: string;
  eventLabel: string;
  target?: string;
  rel?: string;
};

export type GuidedLearningLink = {
  title: string;
  href: string;
  eventLabel: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const learningPaths: LearningPath[] = [
  {
    kicker: "Foundations",
    title: "Learn the foundations.",
    description:
      "Start with the core ideas behind autonomous systems, agent behavior, and architectural patterns before you scale up complexity.",
    href: "/blogs/getting-started-with-agentic-design",
    cta: "Start with the intro article",
  },
  {
    kicker: "Architecture practice",
    title: "Practice architecture decisions.",
    description:
      "Compare realistic tradeoffs across approvals, retries, tool usage, and shared-state scenarios in the practice collection.",
    href: "/practice",
    cta: "Explore practice challenges",
  },
  {
    kicker: "Build and debug",
    title: "Build and debug agents.",
    description:
      "Study public course materials and class archives to connect architecture decisions with implementation patterns and failure modes.",
    href: "/past-classes",
    cta: "Browse the class archive",
  },
];

export const featuredResources: FeaturedResource[] = [
  {
    title: "Getting Started with Agentic Design",
    description:
      "A substantive article introducing autonomy, goal-oriented behavior, and multi-agent architecture patterns.",
    outcome: "Understand the core vocabulary and system traits used throughout the lab.",
    format: "Article",
    level: "Foundational",
    href: "/blogs/getting-started-with-agentic-design",
    cta: "Read the article",
    eventLabel: "resource_getting_started_article",
  },
  {
    title: "Agentic Design Patterns Course Overview",
    description:
      "A guided overview of the primary course page, with learning goals, structure, and links to public supporting materials.",
    outcome: "See how architecture topics progress from fundamentals to capstone work.",
    format: "Course overview",
    level: "Intermediate",
    href: "/courses/agentic-design-patterns",
    cta: "Open the overview",
    eventLabel: "resource_agentic_course_overview",
  },
  {
    title: "Course Introduction PDF",
    description:
      "A downloadable introduction and syllabus resource for the agentic design course materials.",
    outcome: "Review the course framing, structure, and prerequisites at your own pace.",
    format: "PDF",
    level: "Foundational to intermediate",
    href: "/Introduction.pdf",
    cta: "Open the PDF",
    eventLabel: "resource_intro_pdf",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    title: "Past Class Archive",
    description:
      "A public archive page for completed classes, slides, notebooks, homework, and other materials already published on the site.",
    outcome: "Find reusable class material from completed sessions in one place.",
    format: "Archive",
    level: "Mixed",
    href: "/past-classes",
    cta: "Browse the archive",
    eventLabel: "resource_past_classes_archive",
  },
];

export const guidedLearningLinks: GuidedLearningLink[] = [
  {
    title: "Explore courses",
    href: "/courses",
    eventLabel: "guided_learning_courses",
  },
  {
    title: "Browse past classes",
    href: "/past-classes",
    eventLabel: "guided_learning_past_classes",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Who is this for?",
    answer:
      "Developers, cloud architects, and certification candidates who want to make better design decisions around AI agents and the systems that support them.",
  },
  {
    question: "What should I know before I start?",
    answer:
      "A working knowledge of programming and software architecture is helpful. The public materials on this homepage are designed to be approachable even if you are still building experience with agentic systems.",
  },
  {
    question: "What is free today?",
    answer:
      "The sample challenge and the selected public resources featured on this homepage are free to explore right now.",
  },
  {
    question: "How does the learning approach work?",
    answer:
      "The lab combines scenario-based architecture practice with public course materials and class archives so you can connect abstract guidance to practical implementation choices.",
  },
];

export const closingCtas = [
  {
    title: "Try a free challenge",
    href: "/#featured-challenge",
    primary: true,
  },
  {
    title: "Explore learning resources",
    href: "/#featured-resources",
    primary: false,
  },
];