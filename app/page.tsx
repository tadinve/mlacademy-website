import type { Metadata } from "next";
import Image from "next/image";
import { FeaturedChallenge } from "./components/home/FeaturedChallenge";
import { TrackedResourceLink } from "./components/home/TrackedResourceLink";
import {
  closingCtas,
  faqs,
  featuredResources,
  guidedLearningLinks,
  learningPaths,
} from "./components/home/homepageContent";

export const metadata: Metadata = {
  title: "Agentic Architect Lab by MLacademy",
  description:
    "Practice architecture decisions, study real agent patterns, and learn how to build secure, reliable AI systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agentic Architect Lab by MLacademy",
    description:
      "Build the judgment behind production AI agents with practical challenges and guided learning resources.",
    url: "https://mlacademy.io/",
    siteName: "MLacademy",
    type: "website",
    images: [
      {
        url: "/images/banners/growtika-nGoCBxiaRO0-unsplash.jpg",
        width: 2048,
        height: 1365,
        alt: "Abstract neural network illustration for Agentic Architect Lab by MLacademy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Architect Lab by MLacademy",
    description:
      "Build the judgment behind production AI agents with practical challenges and guided learning resources.",
    images: ["/images/banners/growtika-nGoCBxiaRO0-unsplash.jpg"],
  },
};

const instructorHighlights = [
  "Strategic AI consultant with a long track record in data and enterprise systems.",
  "Teaches through practical scenarios focused on design, debugging, security, and deployment.",
  "Shares course materials and class archives that connect architecture ideas to implementation choices.",
];

export default function Home() {
  return (
    <main className="pb-20 pt-8 md:pt-12">
      <section className="mb-8 grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(13,25,47,0.96),rgba(10,16,31,0.92))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100">
            Agentic Architect Lab by MLacademy
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Build the judgment behind production AI agents.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Practice architecture decisions, understand agent failures, and learn to build secure,
            reliable systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-3 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              href="/#featured-challenge"
            >
              Try a free challenge
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-base font-semibold text-slate-100 transition-colors hover:border-sky-300 hover:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              href="/#featured-resources"
            >
              Explore learning resources
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6 shadow-[0_16px_48px_rgba(0,0,0,0.28)] lg:self-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">Challenge preview</p>
          <p className="mt-4 text-lg font-medium leading-8 text-white">
            An agent is ready to place an order. A manager must approve it first. Where would you enforce that rule?
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="rounded-xl border border-white/8 bg-white/5 px-4 py-3">Review the scenario.</div>
            <div className="rounded-xl border border-white/8 bg-white/5 px-4 py-3">Choose the strongest design.</div>
            <div className="rounded-xl border border-white/8 bg-white/5 px-4 py-3">Reveal the explanation after you submit.</div>
          </div>
        </div>
      </section>

      <section
        id="featured-challenge"
        className="scroll-mt-32 rounded-[2rem] border border-sky-400/15 bg-[linear-gradient(180deg,rgba(10,19,36,0.94),rgba(10,16,28,0.94))] p-6 shadow-[0_24px_64px_rgba(5,12,25,0.4)] md:p-8 lg:p-10"
      >
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Featured challenge</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Where should approval actually be enforced?
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
            Try this free architecture challenge. No sign-up required.
          </p>
        </div>
        <FeaturedChallenge />
      </section>

      <section id="learning-paths" className="scroll-mt-32 mt-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Learning paths</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Choose a practical way in.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
            Start from the foundations, practice architecture choices, or go deeper into build-and-debug workflows.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <article
              key={path.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">{path.kicker}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{path.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{path.description}</p>
              <a
                className="mt-6 inline-flex items-center text-sm font-semibold text-sky-200 hover:text-sky-100"
                href={path.href}
              >
                {path.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="featured-resources" className="scroll-mt-32 mt-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Featured resources</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Public materials you can use right now.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
            Explore articles, course materials, and class recordings to put these ideas into practice.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredResources.map((resource) => (
            <TrackedResourceLink
              key={resource.title}
              href={resource.href}
              eventLabel={resource.eventLabel}
              className="group block rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.24)] transition-transform hover:-translate-y-1 hover:border-sky-300/30"
              target={resource.target}
              rel={resource.rel}
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sky-100">
                  {resource.format}
                </span>
                <span>{resource.level}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white group-hover:text-sky-100">{resource.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">{resource.description}</p>
              <p className="mt-5 text-sm font-semibold text-sky-200">Outcome: {resource.outcome}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-sky-200">{resource.cta}</span>
            </TrackedResourceLink>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_55%)]" />
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src="/images/team/venkatesh.webp"
              alt="Venkatesh Tadinada"
              width={480}
              height={600}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 28vw"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Instructor</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Learn with Venkatesh Tadinada.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Agentic Architect Lab draws from MLacademy&apos;s existing instruction and public materials to help developers and
            cloud architects build better judgment around real system decisions.
          </p>
          <ul className="mt-8 space-y-4">
            {instructorHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-300 md:text-base">
                <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-sky-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <TrackedResourceLink
            href="/about"
            eventLabel="instructor_intro"
            className="mt-8 inline-flex items-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-300 hover:text-sky-100"
          >
            Read the instructor background
          </TrackedResourceLink>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.24)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Guided learning</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Keep practicing beyond the homepage.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
            Browse the public course catalog and past class archive to continue studying agentic design concepts. Some
            courses are available now; others are listed as planned offerings rather than active enrollments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {guidedLearningLinks.map((link) => (
              <TrackedResourceLink
                key={link.title}
                href={link.href}
                eventLabel={link.eventLabel}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-sky-400 hover:text-slate-950"
              >
                {link.title}
              </TrackedResourceLink>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.24)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">FAQ</p>
          <div className="mt-6 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/8 bg-slate-950/35 p-5">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] border border-sky-400/20 bg-[linear-gradient(180deg,rgba(12,22,40,0.9),rgba(9,15,27,0.95))] p-8 shadow-[0_24px_64px_rgba(5,12,25,0.42)] md:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Next step</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Start with one architecture decision, then follow the path that fits your background.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
            The sample challenge and selected public resources are free. Use them to practice now, then continue into
            guided course materials and past classes when you&apos;re ready.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {closingCtas.map((cta) => (
            <a
              key={cta.title}
              href={cta.href}
              className={cta.primary
                ? "inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-sky-300"
                : "inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-300 hover:text-sky-100"
              }
            >
              {cta.title}
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-white/10 pt-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold text-white">Agentic Architect Lab by MLacademy</p>
            <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
              MLacademy&apos;s practical home for architecture challenges, guided learning, and scenario-based agent systems study.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
              For enterprise consulting and training, visit{" "}
              <a
                href="https://www.cloudkarya.com/"
                className="font-semibold text-sky-200 hover:text-sky-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                CloudKarya
              </a>
              .
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-200">
            <a href="/#featured-challenge" className="hover:text-sky-100">Practice</a>
            <a href="/#learning-paths" className="hover:text-sky-100">Learn</a>
            <a href="/courses" className="hover:text-sky-100">Courses</a>
            <a href="/about" className="hover:text-sky-100">About</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}