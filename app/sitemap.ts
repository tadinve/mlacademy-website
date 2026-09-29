import type { MetadataRoute } from 'next';
import { practiceChallenges } from '../lib/practiceChallenges';
import { siteUrl } from '../lib/site';

const routes = [
  '/',
  '/about',
  '/blogs',
  '/blogs/getting-started-with-agentic-design',
  '/courses',
  '/courses/agentic-design-patterns',
  '/courses/build-llm-from-scratch',
  '/courses/model-context-protocol',
  '/courses/natural-language-processing',
  '/courses/slm-finetuning',
  '/practice',
  '/past-classes',
  ...practiceChallenges.map((challenge) => `/practice/${challenge.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: siteUrl(route),
    lastModified,
  }));
}