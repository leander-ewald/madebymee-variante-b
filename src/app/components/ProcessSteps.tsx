"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const steps = [
  { num: "01", title: "Erstgespräch", desc: "Ziele, Status quo, Zielgruppe — und eine ehrliche Einschätzung, ob und wie wir euch helfen können." },
  { num: "02", title: "Konzept & Planung", desc: "Formate, Botschaften, Drehplanung — alles abgestimmt auf eure Marke und euer Budget." },
  { num: "03", title: "Produktion", desc: "Wir kommen zu euch, drehen vor Ort und setzen alles professionell um — ohne großen Aufwand für euch." },
  { num: "04", title: "Postproduktion", desc: "Schnitt, Color Grading, Motion Design — fertiger Content für Website, Social Media und Ads." },
  { num: "05", title: "Launch & Optimierung", desc: "Wir begleiten den Go-Live, messen die Performance und optimieren kontinuierlich für maximale Wirkung." },
];

export default function ProcessSteps() {
  const ref = useScrollAnimation();

  return (
    <section className="process-section dark-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">SO ARBEITEN <span className="accent">wir</span></h2>
          <p className="section-subtitle fade-up stagger-1">
            Von der Idee bis zum fertigen Content — in 5 klaren Schritten.
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
