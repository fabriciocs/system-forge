export const motion = {
  duration: {
    fast: 120,
    base: 180,
    slow: 240,
    reduced: 1,
  },
  prefersReducedMotion(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  transitionDuration(): string {
    return `${this.prefersReducedMotion() ? this.duration.reduced : this.duration.base}ms`;
  },
};
