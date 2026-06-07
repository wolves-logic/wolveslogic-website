'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, duration = 1400 }: { value: string; duration?: number }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) { setDisplay(value); return; }
    const target = parseFloat(match[1].replace(/,/g, ''));
    const suffix = match[2];

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          setDisplay(`${current}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(`${match[1]}${suffix}`);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
