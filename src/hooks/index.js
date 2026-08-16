import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------------------
   useScrollReveal
   Fades elements carrying the `.reveal` class into view once. Runs a single
   observer for the whole page rather than one per component.
--------------------------------------------------------------------------- */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return undefined;

    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ---------------------------------------------------------------------------
   useNavState
   Returns whether the page has scrolled past the hero, and which section is
   currently in view (drives the active nav link).
--------------------------------------------------------------------------- */
export function useNavState(sectionIds) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return { scrolled, active };
}

/* ---------------------------------------------------------------------------
   useParallax
   Gentle vertical drift on the hero image. Transform-only, rAF-throttled, and
   switched off entirely for reduced-motion users and small screens.
--------------------------------------------------------------------------- */
export function useParallax(strength = 0.18) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (prefersReducedMotion() || window.matchMedia('(max-width: 768px)').matches) {
      return undefined;
    }

    let frame = 0;
    const update = () => {
      const offset = Math.min(window.scrollY, window.innerHeight) * strength;
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      frame = 0;
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      node.style.transform = '';
    };
  }, [strength]);

  return ref;
}
