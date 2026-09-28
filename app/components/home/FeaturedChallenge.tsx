'use client';

import { useMemo, useState } from 'react';
import { trackEvent } from '../../../lib/analytics';

type OptionId = 'A' | 'B' | 'C' | 'D';

type ChallengeOption = {
  id: OptionId;
  title: string;
  explanation: string;
};

const options: ChallengeOption[] = [
  {
    id: 'A',
    title: 'Put the approval rule in the agent’s system instructions.',
    explanation:
      'Instructions can guide behavior, but they do not reliably enforce authorization when the agent still has access to a directly callable submission tool.',
  },
  {
    id: 'B',
    title: 'Ask a second agent to review the purchase order before submission.',
    explanation:
      'A second agent can add review context, but agent review alone is not a trusted enforcement boundary for a side effect like ERP submission.',
  },
  {
    id: 'C',
    title:
      'Enforce the approval rule in the trusted submission service, validating that approval is from an authorized manager and applies to the exact order version.',
    explanation:
      'This is the correct design. The trusted service must block submission unless authorization is valid before the side effect occurs. If material order details change, the earlier approval must no longer apply.',
  },
  {
    id: 'D',
    title: 'Hide the submit button in the user interface until a manager clicks Approve.',
    explanation:
      'A hidden button can improve the interface, but it does not protect a callable tool or API. Enforcement has to live at the trusted service boundary, not only in the UI.',
  },
];

const correctAnswer: OptionId = 'C';

export function FeaturedChallenge() {
  const [selected, setSelected] = useState<OptionId | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const selectedOption = useMemo(
    () => options.find((option) => option.id === selected) ?? null,
    [selected],
  );

  const isCorrect = submitted && selected === correctAnswer;

  const handleSelect = (optionId: OptionId) => {
    if (submitted) {
      return;
    }

    if (!hasStarted) {
      setHasStarted(true);
      trackEvent('challenge_start', {
        challenge_id: 'procurement-approval-boundary',
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
      challenge_id: 'procurement-approval-boundary',
      selected_answer: selected,
      correct_answer: correctAnswer,
      is_correct: selected === correctAnswer,
    });
    trackEvent('challenge_explanation_view', {
      challenge_id: 'procurement-approval-boundary',
      selected_answer: selected,
    });
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
    setHasStarted(false);
  };

  return (
    <div className={submitted ? "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" : "max-w-4xl"}>
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Scenario</p>
        {!submitted && (
          <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
            An agent is ready to place an order. A manager must approve it first. Where would you enforce that rule?
          </p>
        )}
        <p className="mt-4 text-lg leading-8 text-slate-100">
          A procurement agent has prepared a $12,400 purchase order. Company policy requires manager approval
          for orders over $10,000. The agent can call an ERP submission tool. Which design best ensures the
          order cannot be submitted without valid approval?
        </p>

        <fieldset className="mt-8 space-y-4">
          <legend className="sr-only">Select the best design option</legend>
          {options.map((option) => {
            const checked = selected === option.id;
            const stateClass = submitted
              ? option.id === correctAnswer
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
                  name="featured-challenge"
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
              {isCorrect ? 'Correct: enforce authorization at the trusted submission boundary.' : 'Not quite: enforce the rule where the side effect is actually allowed or blocked.'}
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
              {selectedOption?.explanation}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {options.map((option) => (
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