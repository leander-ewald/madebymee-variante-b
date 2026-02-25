"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const problems = [
  {
    title: "Keine Sichtbarkeit",
    text: "Starke Leistung, aber online findet euch kaum jemand — Content wirkt zufällig statt geplant — und potenzielle Kunden landen bei Mitbewerbern, bevor sie euch überhaupt wahrnehmen.",
  },
  {
    title: "Marketing ohne Wirkung",
    text: 'Ihr postet, schaltet Ads oder probiert \u201Eein bisschen was\u201C aus \u2014 aber es kommt kaum messbar etwas zur\u00FCck \u2014 weil Werbeanzeigen fehlen, die Botschaft nicht treffen und ohne Performance-Fokus kein konstanter Lead-Flow entsteht.',
  },
  {
    title: "Mitarbeitermangel",
    text: "Offene Stellen, aber kaum qualifizierte Bewerbungen — Budget versickert in Stellenportalen, Print & Co. — während eure Zielgruppe längst am Smartphone entscheidet und ihr im Feed nicht stattfindet.",
  },
];

export default function ProblemSection() {
  const ref = useScrollAnimation();

  return (
    <section className="problem-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">KOMMT DIR DAS <span className="accent">BEKANNT VOR?</span></h2>
        </div>
        <div className="row g-4">
          {problems.map((p, i) => (
            <div key={i} className="col-md-4">
              <div className={`problem-card fade-up stagger-${i + 1}`}>
                <div className="card-number">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
