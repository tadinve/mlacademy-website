'use client';

import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';
import { trackEvent } from '../../../lib/analytics';

type TrackedResourceLinkProps = {
  href: string;
  eventLabel: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export function TrackedResourceLink({
  href,
  eventLabel,
  className,
  children,
  target,
  rel,
}: TrackedResourceLinkProps) {
  const handleClick = (_event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent('resource_click', {
      resource_label: eventLabel,
      resource_href: href,
    });
  };

  const isExternal = href.startsWith('http') || href.endsWith('.pdf') || Boolean(target);

  if (isExternal) {
    return (
      <a href={href} className={className} onClick={handleClick} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} prefetch={false}>
      {children}
    </Link>
  );
}