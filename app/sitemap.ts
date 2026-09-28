import type { MetadataRoute } from 'next';

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
  '/past-classes',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `https://mlacademy.io${route}`,
    lastModified,
  }));
}