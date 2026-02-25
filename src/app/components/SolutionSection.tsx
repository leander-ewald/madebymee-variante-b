"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const solutions = [
  {
    num: "001",
    title: "Organische Social Media Engine",
    text: "Wir \u00FCbernehmen euren Auftritt von A bis Z \u2014 Strategie, Skripting, Drehs vor Ort, Postproduktion und Posting \u2014 plus Community-Management f\u00FCr echtes Engagement, damit ihr dauerhaft sichtbar und relevant bleibt.",
  },
  {
    num: "002",
    title: "Performance Video Ads",
    text: "Wir produzieren Video-Creatives, die sofort Aufmerksamkeit ziehen \u2014 bewerten Hooks, Botschaften und Varianten datenbasiert \u2014 und skalieren als Performance-Kampagne, bis daraus konstant qualifizierte Anfragen werden.",
  },
  {
    num: "003",
    title: "Recruiting Ads",
    text: "Gemeinsam mit euch planen und produzieren wir Recruiting-Videos, die auffallen und im Kopf bleiben. Ausgespielt als Performance Ads, messbar an Bewerbungen statt Reichweite \u2014 und kontinuierlich optimiert.",
  },
];

export default function SolutionSection() {
  const ref = useScrollAnimation();

  return (
    <section className="solution-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <span className="section-label fade-up">Die L\u00F6sung</span>
          <h2 className="fade-up stagger-1">
            CONTENT, DER F\u00DCR DICH <span className="accent">arbeitet</span>
          </h2>
          <p className="section-subtitle fade-up stagger-2">
            Der n\u00E4chste Schritt ist einfacher als du denkst.
          </p>
        </div>
        <div className="row g-4">
          {solutions.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className={`solution-card fade-up stagger-${i + 1}`}>
                <span className="card-num">{s.num}</span>
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
