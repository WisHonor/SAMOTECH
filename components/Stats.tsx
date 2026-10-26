"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";

const stats = [
  { label: "Years in federal IM/IT", format: (p: number) => String(Math.round(25 * p)) },
  { label: "IT tools evaluated and approved, valued at over $10M", format: (p: number) => `${Math.round(100 * p)}+` },
  { label: "Employees and critical systems migrated during COVID-19", format: (p: number) => String(Math.round(800 * p)) },
  { label: "Treasury Board submission supported, approved June 2026", format: (p: number) => `$${(103.9 * p).toFixed(1)}M` },
];

const DURATION_MS = 1600;

// Counts the figures up from zero the first time the row scrolls into view.
export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const el = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduced || !("IntersectionObserver" in window)) return;

    let raf = 0;
    setProgress(0);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / DURATION_MS);
          setProgress(1 - Math.pow(1 - p, 3));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} data-reveal className={styles.stats}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <div className={styles.statValue}>{stat.format(progress)}</div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
