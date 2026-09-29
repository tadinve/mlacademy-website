export const SITE_ORIGIN = 'https://www.mlacademy.io';

export function siteUrl(path: string) {
  return `${SITE_ORIGIN}${path}`;
}