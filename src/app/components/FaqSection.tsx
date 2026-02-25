"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const faqs = [
  {
    q: "Funktioniert das auch für unseren Betrieb — egal ob Industrie, Handwerk oder Dienstleistung?",
    a: "Ja. Entscheidend ist nicht eure Branche, sondern, wen ihr erreichen wollt — und die sind heute am Smartphone. Wir schauen uns euren Betrieb, eure Zielgruppe und eure Stärken an und übersetzen das in Content, der zu euch passt, nicht zu irgendeinem Trend.",
  },
  {
    q: "Wie viel Zeit benötige ich für die Zusammenarbeit?",
    a: "Von deiner Seite benötigen wir: ein fokussiertes Erstgespräch, ein bis drei Drehtage — an denen du nicht anwesend sein musst, und final eine Freigabe. Das heißt: möglichst wenig Aufwand für dich, maximale Wirkung für euren Auftritt!",
  },
  {
    q: "Können wir mit euren Videos und Kampagnen wirklich messbar mehr Bewerbungen oder Anfragen erzielen?",
    a: "Wir versprechen keine Fantasie-Zahlen, sondern bringen deine Chancen auf ein Maximum. Mit gutem Content und passenden Kampagnen steigern wir eure Sichtbarkeit bei den richtigen Menschen und sehen in den Zahlen, was passiert: Reichweite, Klicks, Bewerbungen und Anfragen.",
  },
  {
    q: "Wie läuft die Zusammenarbeit mit euch ab?",
    a: "Erstgespräch → Konzept & Planung → Produktion → Postproduktion & Abliefern → Feedback → Optional laufende Betreuung. Wir halten euch in jedem Schritt auf dem Laufenden und arbeiten transparent.",
  },
];

export default function FaqSection() {
  const ref = useScrollAnimation();

  return (
    <section className="faq-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">FAQ</h2>
          <p className="section-subtitle fade-up stagger-1">Häufig gestellte Fragen.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion fade-up stagger-2" id="faqAccordion">
              {faqs.map((f, i) => (
                <div key={i} className="faq-item accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-${i}`}
                      aria-expanded={i === 0}
                    >
                      {f.q}
                    </button>
                  </h2>
                  <div
                    id={`faq-${i}`}
                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
