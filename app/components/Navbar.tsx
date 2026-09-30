'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/practice', label: 'Practice' },
    { href: '/#learning-paths', label: 'Learn' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[rgba(8,17,32,0.82)] shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" prefetch={false} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo/MLA-logo.png"
                alt="ML Academy"
                width={180}
                height={60}
                sizes="180px"
                quality={80}
                className="h-11 w-auto brightness-0 invert"
                priority
              />
              <div className="hidden sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">MLacademy</p>
                <p className="text-sm font-semibold text-white">Agentic Architect Lab</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={false}
                  className="rounded-lg px-3 py-2 text-base font-medium text-slate-200 transition-colors hover:text-sky-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/#featured-challenge"
              prefetch={false}
              className="inline-flex items-center rounded-xl bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
            >
              Try a challenge
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 transition-colors hover:bg-white/10 hover:text-sky-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-300"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div id="mobile-menu" className={`${isMenuOpen ? 'block mobile-menu' : 'hidden'} md:hidden`}>
        <div className="space-y-1 border-t border-white/10 bg-[rgba(8,17,32,0.94)] px-3 pb-4 pt-3 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              className="block rounded-md px-3 py-2 text-lg font-medium text-slate-100 transition-colors hover:bg-white/10 hover:text-sky-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#featured-challenge"
            prefetch={false}
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-sky-400 px-4 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-sky-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Try a challenge
          </Link>
        </div>
      </div>
    </nav>
  );
}