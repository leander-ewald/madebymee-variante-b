"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const testimonials = [
  {
    company: "Iserlohn Roosters",
    industry: "Eishockey-Club, DEL",
    quote:
      "madebymee hat unsere Social-Media-Pr\u00E4senz und VIP-Kommunikation auf ein neues Level gehoben. Vom Event Recap bis zur Business-Produktion \u2014 die Qualit\u00E4t und Geschwindigkeit haben uns \u00FCberzeugt.",
    logo: "/client-logos/Roosters-Logo.svg",
  },
  {
    company: "B\u00F6hm Kabel",
    industry: "Industrieunternehmen, Hagen",
    quote:
      "Durch die Recruiting-Kampagne von madebymee haben wir endlich Bewerbungen von den richtigen Kandidaten erhalten. Die Videos treffen genau den Ton, der zu unserem Unternehmen passt.",
    logo: "/client-logos/BoehmKabel.svg",
  },
  {
    company: "Lebenswert Iserlohn",
    industry: "Wohn- & Lebenskonzept, Iserlohn",
    quote:
      "Endlich eine Agentur, die nicht nur sch\u00F6ne Inhalte produziert, sondern wirklich versteht, wie man eine Marke authentisch nach au\u00DFen bringt. Professionell, kreativ und unkompliziert.",
    logo: "/client-logos/lebenswert-iserlohn-logo.svg",
  },
];

export default function TestimonialsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <span className="section-label fade-up">Kundenstimmen</span>
          <h2 className="fade-up stagger-1">Was unsere <span className="accent">Kunden sagen</span></h2>
          <p className="section-subtitle fade-up stagger-2">
            Gesch\u00E4ftsf\u00FChrer und Entscheider berichten \u00FCber ihre Erfahrungen mit uns.
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4">
              <div className={`testimonial-card fade-up stagger-${i + 1}`}>
                <div className="quote-icon">&ldquo;</div>
                <div className="quote-text">{t.quote}</div>
                <div className="testimonial-author">
                  <Image src={t.logo} alt={t.company} width={100} height={32} style={{ height: 32, width: "auto" }} />
                  <div className="author-info">
                    <strong>{t.company}</strong>
                    <span>{t.industry}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
