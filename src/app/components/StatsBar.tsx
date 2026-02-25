"use client";
import { useEffect, useState, useRef } from "react";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-number">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { number: 50, suffix: "+", label: "Produktionen" },
  { number: 14, suffix: "+", label: "Kunden" },
  { number: 2, suffix: "M+", label: "Views generiert" },
];

export default function StatsBar() {
  return (
    <section className="stats-section">
      <div className="container-custom">
        <div className="row g-4">
          {stats.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className="stat-item">
                <AnimatedNumber target={s.number} suffix={s.suffix} />
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
