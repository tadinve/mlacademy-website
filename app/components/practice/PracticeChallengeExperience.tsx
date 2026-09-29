'use client';

import { useMemo, useState } from 'react';
import type { PracticeChallenge, ChallengeOptionId } from '../../../lib/practiceChallenges';
import { trackEvent } from '../../../lib/analytics';

type PracticeChallengeExperienceProps = {
  challenge: PracticeChallenge;
  showTakeaway?: boolean;
};

export function PracticeChallengeExperience({
  challenge,
  showTakeaway = false,
}: PracticeChallengeExperienceProps) {
  const [selected, setSelected] = useState<ChallengeOptionId | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const selectedOption = useMemo(
    () => challenge.options.find((option) => option.id === selected) ?? null,
    [challenge.options, selected],
  );

  const isCorrect = submitted && selected === challenge.correctAnswer;

  const handleSelect = (optionId: ChallengeOptionId) => {
    if (submitted) {
      return;
    }

    if (!hasStarted) {
      setHasStarted(true);
      trackEvent('challenge_start', {
        challenge_id: challenge.id,
      });
    }

    setSelected(optionId);
  };

  const handleSubmit = () => {
    if (!selected || submitted) {
      return;
    }

    setSubmitted(true);
    trackEvent('challenge_answer_submit', {
      challenge_id: challenge.id,
      selected_answer: selected,
      correct_answer: challenge.correctAnswer,
      is_correct: selected === challenge.correctAnswer,
    });
    trackEvent('challenge_explanation_view', {
      challenge_id: challenge.id,
      selected_answer: selected,
    });
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
    setHasStarted(false);
  };

  return (
    <div className={submitted ? 'grid gap-8 lg:grid-cols-[1.1fr_0.9fr]' : 'max-w-4xl'}>
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Scenario</p>
        {!submitted && (
          <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{challenge.prompt}</p>
        )}
        <p className="mt-4 text-lg leading-8 text-slate-100">{challenge.scenario}</p>
        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{challenge.question}</p>

        <fieldset className="mt-8 space-y-4">
          <legend className="sr-only">Select the best design option</legend>
          {challenge.options.map((option) => {
            const checked = selected === option.id;
            const stateClass = submitted
              ? option.id === challenge.correctAnswer
                ? 'border-emerald-400/60 bg-emerald-500/10'
                : checked
                  ? 'border-rose-400/45 bg-rose-500/10'
                  : 'border-white/10 bg-white/5'
              : checked
                ? 'border-sky-300/50 bg-sky-400/10'
                : 'border-white/10 bg-white/5';

            return (
              <label
                key={option.id}
                className={`flex cursor-pointer gap-4 rounded-2xl border p-4 transition-colors ${stateClass} ${submitted ? 'cursor-default' : 'hover:border-sky-300/35'}`}
              >
                <input
                  type="radio"
                  name={`${challenge.id}-challenge`}
                  value={option.id}
                  checked={checked}
                  onChange={() => handleSelect(option.id)}
                  disabled={submitted}
                  className="mt-1 h-4 w-4 border-slate-400 bg-transparent text-sky-400 focus:ring-sky-300"
                />
                <span className="block text-sm leading-7 text-slate-100 md:text-base">
                  <span className="mr-2 font-semibold text-sky-200">{option.id}.</span>
                  {option.title}
                </span>
              </label>
            );
          })}
        </fieldset>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!selected || submitted}
            className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
          >
            Submit answer
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-300 hover:text-sky-100"
          >
            Reset challenge
          </button>
        </div>
      </div>

      {submitted && (
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-white">Result and explanations</h3>

          <div
            className={`mt-6 rounded-2xl border p-5 ${isCorrect ? 'border-emerald-400/45 bg-emerald-500/10' : 'border-amber-300/35 bg-amber-500/10'}`}
            aria-live="polite"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Feedback</p>
            <h4 className="mt-3 text-xl font-semibold text-white">
              {isCorrect ? challenge.correctHeading : challenge.incorrectHeading}
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">{selectedOption?.explanation}</p>
          </div>

          {showTakeaway && (
            <div className="mt-6 rounded-2xl border border-sky-300/20 bg-slate-950/35 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Architectural takeaway</p>
              <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">{challenge.takeaway}</p>
            </div>
          )}

          <div className="mt-6 space-y-4">
            {challenge.options.map((option) => (
              <div key={option.id} className="rounded-2xl border border-white/8 bg-slate-950/30 p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-sky-200">
                    {option.id}
                  </span>
                  <p className="text-sm font-semibold text-white md:text-base">{option.title}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">{option.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}