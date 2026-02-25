"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const problems = [
  {
    title: "Keine Sichtbarkeit",
    text: "Starke Leistung, aber online findet euch kaum jemand \u2014 Content wirkt zuf\u00E4llig statt geplant \u2014 und potenzielle Kunden landen bei Mitbewerbern, bevor sie euch \u00FCberhaupt wahrnehmen.",
    icon: "bi-eye-slash",
  },
  {
    title: "Marketing ohne Wirkung",
    text: 'Ihr postet, schaltet Ads oder probiert \u201Eein bisschen was\u201C aus \u2014 aber es kommt kaum messbar etwas zur\u00FCck \u2014 weil Werbeanzeigen fehlen, die Botschaft nicht treffen und ohne Performance-Fokus kein konstanter Lead-Flow entsteht.',
    icon: "bi-graph-down",
  },
  {
    title: "Mitarbeitermangel",
    text: "Offene Stellen, aber kaum qualifizierte Bewerbungen \u2014 Budget versickert in Stellenportalen, Print & Co. \u2014 w\u00E4hrend eure Zielgruppe l\u00E4ngst am Smartphone entscheidet und ihr im Feed nicht stattfindet.",
    icon: "bi-people",
  },
];

export default function ProblemSection() {
  const ref = useScrollAnimation();

  return (
    <section className="problem-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <span className="section-label fade-up">Das Problem</span>
          <h2 className="fade-up stagger-1">KOMMT DIR DAS <span className="accent">bekannt vor?</span></h2>
        </div>
        <div className="row g-4">
          {problems.map((p, i) => (
            <div key={i} className="col-md-4">
              <div className={`problem-card fade-up stagger-${i + 1}`}>
                <div className="card-number">0{i + 1}</div>
                <i className={`bi ${p.icon} card-icon`} />
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
