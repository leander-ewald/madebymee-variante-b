"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const steps = [
  { num: "01", title: "Erstgespr\u00E4ch", desc: "Ziele, Status quo, Zielgruppe \u2014 und eine ehrliche Einsch\u00E4tzung, ob und wie wir euch helfen k\u00F6nnen." },
  { num: "02", title: "Konzept & Planung", desc: "Formate, Botschaften, Drehplanung \u2014 alles abgestimmt auf eure Marke und euer Budget." },
  { num: "03", title: "Produktion", desc: "Wir kommen zu euch, drehen vor Ort und setzen alles professionell um \u2014 ohne gro\u00DFen Aufwand f\u00FCr euch." },
  { num: "04", title: "Postproduktion", desc: "Schnitt, Color Grading, Motion Design \u2014 fertiger Content f\u00FCr Website, Social Media und Ads." },
  { num: "05", title: "Launch & Optimierung", desc: "Wir begleiten den Go-Live, messen die Performance und optimieren kontinuierlich f\u00FCr maximale Wirkung." },
];

export default function ProcessSteps() {
  const ref = useScrollAnimation();

  return (
    <section className="process-section dark-section grid-bg" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <span className="section-label fade-up">Unser Prozess</span>
          <h2 className="fade-up stagger-1">SO ARBEITEN <span className="accent">wir</span></h2>
          <p className="section-subtitle fade-up stagger-2">
            Von der Idee bis zum fertigen Content \u2014 in 5 klaren Schritten.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className={`process-step fade-up stagger-${i + 1}`}>
              <div className="step-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
