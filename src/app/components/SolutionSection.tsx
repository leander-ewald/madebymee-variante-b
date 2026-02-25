"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const solutions = [
  {
    title: "Organische Social Media Engine",
    text: "Wir übernehmen euren Auftritt von A bis Z — Strategie, Skripting, Drehs vor Ort, Postproduktion und Posting — plus Community-Management für echtes Engagement, damit ihr dauerhaft sichtbar und relevant bleibt.",
  },
  {
    title: "Performance Video Ads, die Anfragen bringen",
    text: "Wir produzieren Video-Creatives, die sofort Aufmerksamkeit ziehen — bewerten Hooks, Botschaften und Varianten datenbasiert — und skalieren als Performance-Kampagne, bis daraus konstant qualifizierte Anfragen werden.",
  },
  {
    title: "Recruiting Ads, die Bewerbungen liefern",
    text: "Gemeinsam mit euch planen und produzieren wir Recruiting-Videos, die auffallen und im Kopf bleiben. Ausgespielt als Performance Ads, messbar an Bewerbungen statt Reichweite — und kontinuierlich optimiert, bis regelmäßig passende Kandidaten reinkommen.",
  },
];

export default function SolutionSection() {
  const ref = useScrollAnimation();

  return (
    <section className="solution-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">
            DER NÄCHSTE SCHRITT IST <span className="accent">einfacher als du denkst</span>
          </h2>
          <p className="section-subtitle fade-up stagger-1">
            Die Lösung: Content, der für dich arbeitet.
          </p>
        </div>
        <div className="row g-4">
          {solutions.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className={`solution-card fade-up stagger-${i + 1}`}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 fade-up stagger-4">
          <a href="#kontakt" className="btn-primary-custom">
            <i className="bi bi-telephone" /> Termin buchen
          </a>
        </div>
      </div>
    </section>
  );
}
