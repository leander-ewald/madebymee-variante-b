"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const testimonials = [
  {
    company: "Iserlohn Roosters",
    industry: "Eishockey-Club, DEL",
    quote:
      "madebymee hat unsere Social-Media-Präsenz und VIP-Kommunikation auf ein neues Level gehoben. Vom Event Recap bis zur Business-Produktion — die Qualität und Geschwindigkeit haben uns überzeugt.",
    logo: "/client-logos/Roosters-Logo.svg",
  },
  {
    company: "Böhm Kabel",
    industry: "Industrieunternehmen, Hagen",
    quote:
      "Durch die Recruiting-Kampagne von madebymee haben wir endlich Bewerbungen von den richtigen Kandidaten erhalten. Die Videos treffen genau den Ton, der zu unserem Unternehmen passt.",
    logo: "/client-logos/BoehmKabel.svg",
  },
  {
    company: "Lebenswert Iserlohn",
    industry: "Wohn- & Lebenskonzept, Iserlohn",
    quote:
      "Endlich eine Agentur, die nicht nur schöne Inhalte produziert, sondern wirklich versteht, wie man eine Marke authentisch nach außen bringt. Professionell, kreativ und unkompliziert.",
    logo: "/client-logos/lebenswert-iserlohn-logo.svg",
  },
];

export default function TestimonialsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">Was unsere <span className="accent">Kunden sagen</span></h2>
          <p className="section-subtitle fade-up stagger-1">
            Geschäftsführer und Entscheider berichten über ihre Erfahrungen mit uns.
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4">
              <div className={`testimonial-card fade-up stagger-${i + 1}`}>
                <div className="quote-icon">&ldquo;</div>
                <div className="quote-text">{t.quote}</div>
                <div className="testimonial-author">
                  <Image src={t.logo} alt={t.company} width={100} height={36} style={{ height: 36, width: "auto" }} />
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
