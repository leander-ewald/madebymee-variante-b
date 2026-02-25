"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const faqs = [
  {
    q: "Funktioniert das auch f\u00FCr unseren Betrieb \u2014 egal ob Industrie, Handwerk oder Dienstleistung?",
    a: "Ja. Entscheidend ist nicht eure Branche, sondern, wen ihr erreichen wollt \u2014 und die sind heute am Smartphone. Wir schauen uns euren Betrieb, eure Zielgruppe und eure St\u00E4rken an und \u00FCbersetzen das in Content, der zu euch passt, nicht zu irgendeinem Trend.",
  },
  {
    q: "Wie viel Zeit ben\u00F6tige ich f\u00FCr die Zusammenarbeit?",
    a: "Von deiner Seite ben\u00F6tigen wir: ein fokussiertes Erstgespr\u00E4ch, ein bis drei Drehtage \u2014 an denen du nicht anwesend sein musst, und final eine Freigabe. Das hei\u00DFt: m\u00F6glichst wenig Aufwand f\u00FCr dich, maximale Wirkung f\u00FCr euren Auftritt!",
  },
  {
    q: "K\u00F6nnen wir mit euren Videos und Kampagnen wirklich messbar mehr Bewerbungen oder Anfragen erzielen?",
    a: "Wir versprechen keine Fantasie-Zahlen, sondern bringen deine Chancen auf ein Maximum. Mit gutem Content und passenden Kampagnen steigern wir eure Sichtbarkeit bei den richtigen Menschen und sehen in den Zahlen, was passiert: Reichweite, Klicks, Bewerbungen und Anfragen.",
  },
  {
    q: "Wie l\u00E4uft die Zusammenarbeit mit euch ab?",
    a: "Erstgespr\u00E4ch \u2192 Konzept & Planung \u2192 Produktion \u2192 Postproduktion & Abliefern \u2192 Feedback \u2192 Optional laufende Betreuung. Wir halten euch in jedem Schritt auf dem Laufenden und arbeiten transparent.",
  },
];

export default function FaqSection() {
  const ref = useScrollAnimation();

  return (
    <section className="faq-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <span className="section-label fade-up">H\u00E4ufige Fragen</span>
          <h2 className="fade-up stagger-1">FAQ</h2>
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
