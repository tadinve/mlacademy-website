import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PracticeChallengeExperience } from '../../components/practice/PracticeChallengeExperience';
import {
  getPracticeChallengeBySlug,
  getPracticeChallengeIndex,
  practiceChallenges,
} from '../../../lib/practiceChallenges';
import { siteUrl } from '../../../lib/site';

type PracticeChallengePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return practiceChallenges.map((challenge) => ({ slug: challenge.slug }));
}

export function generateMetadata({ params }: PracticeChallengePageProps): Metadata {
  const challenge = getPracticeChallengeBySlug(params.slug);

  if (!challenge) {
    return {};
  }

  return {
    title: `${challenge.title} | Agentic Architect Lab by ML Academy`,
    description: challenge.description,
    alternates: {
      canonical: siteUrl(`/practice/${challenge.slug}`),
    },
    openGraph: {
      title: `${challenge.title} | Agentic Architect Lab by ML Academy`,
      description: challenge.description,
      url: siteUrl(`/practice/${challenge.slug}`),
      siteName: 'ML Academy',
      type: 'website',
    },
  };
}

export default function PracticeChallengePage({ params }: PracticeChallengePageProps) {
  const challenge = getPracticeChallengeBySlug(params.slug);

  if (!challenge) {
    notFound();
  }

  const currentIndex = getPracticeChallengeIndex(challenge.slug);
  const nextChallenge = currentIndex >= 0 ? practiceChallenges[currentIndex + 1] : undefined;

  return (
    <main className="pb-20 pt-8 md:pt-12">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(13,25,47,0.96),rgba(10,16,31,0.92))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sky-100">
            Practice challenge
          </span>
          <span>{challenge.topic}</span>
          <span>{challenge.difficulty}</span>
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl">
          {challenge.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{challenge.description}</p>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          Original scenario-based practice challenge for Agentic Architect Lab. This is not an official certification question.
        </p>
      </section>

      <section className="mt-10 rounded-[2rem] border border-sky-400/15 bg-[linear-gradient(180deg,rgba(10,19,36,0.94),rgba(10,16,28,0.94))] p-6 shadow-[0_24px_64px_rgba(5,12,25,0.4)] md:p-8 lg:p-10">
        <PracticeChallengeExperience challenge={challenge} showTakeaway />
      </section>

      <section className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/practice"
          className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-300 hover:text-sky-100"
        >
          Back to practice
        </Link>
        {nextChallenge ? (
          <Link
            href={`/practice/${nextChallenge.slug}`}
            className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
          >
            Next challenge: {nextChallenge.title}
          </Link>
        ) : (
          <Link
            href="/practice"
            className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
          >
            Return to challenge collection
          </Link>
        )}
      </section>
    </main>
  );
}