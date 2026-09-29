import type { Metadata } from 'next';
import Link from 'next/link';
import { practiceChallenges } from '../../lib/practiceChallenges';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Practice Challenges | Agentic Architect Lab by MLacademy',
  description:
    'Work through five original scenario-based architecture challenges on tool safety, retries, shared state, authorization, and idempotency.',
  alternates: {
    canonical: siteUrl('/practice'),
  },
  openGraph: {
    title: 'Practice Challenges | Agentic Architect Lab by MLacademy',
    description:
      'Work through five original scenario-based architecture challenges on tool safety, retries, shared state, authorization, and idempotency.',
    url: siteUrl('/practice'),
    siteName: 'MLacademy',
    type: 'website',
  },
};

export default function PracticeIndexPage() {
  return (
    <main className="pb-20 pt-8 md:pt-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(13,25,47,0.96),rgba(10,16,31,0.92))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Practice collection</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl">
          Build architectural judgment one challenge at a time.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Work through five original practice scenarios on trusted boundaries, tool safety, retries,
          shared state, and side-effect control.
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          These are original scenario-based practice questions for Agentic Architect Lab. They are not
          official certification questions.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {practiceChallenges.map((challenge, index) => (
          <article
            key={challenge.slug}
            className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sky-100">
                Challenge {index + 1}
              </span>
              <span>{challenge.topic}</span>
              <span>{challenge.difficulty}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">{challenge.title}</h2>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-300 md:text-base">{challenge.description}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{challenge.prompt}</p>
            <Link
              href={`/practice/${challenge.slug}`}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
            >
              Open challenge
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}