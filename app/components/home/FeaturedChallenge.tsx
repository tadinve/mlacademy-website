import { getPracticeChallengeBySlug } from '../../../lib/practiceChallenges';
import { PracticeChallengeExperience } from '../practice/PracticeChallengeExperience';

function getFeaturedPracticeChallenge() {
  const challenge = getPracticeChallengeBySlug('purchase-order-approval');

  if (!challenge) {
    throw new Error('Missing featured practice challenge content.');
  }

  return challenge;
}

const featuredPracticeChallenge = getFeaturedPracticeChallenge();

export function FeaturedChallenge() {
  return <PracticeChallengeExperience challenge={featuredPracticeChallenge} />;
}