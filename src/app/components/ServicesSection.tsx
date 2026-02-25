"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const services = [
  {
    num: "001",
    title: "mee Ads.",
    desc: "Performance Ads und Recruiting Clips, die konvertieren \u2014 nicht nur gefallen. Datengetrieben produziert, kontinuierlich optimiert.",
    icon: "/assets/step1.svg",
  },
  {
    num: "002",
    title: "mee Content.",
    desc: "Erkl\u00E4rvideos, Imagefilme und Produktvideos \u2014 Content der erkl\u00E4rt, \u00FCberzeugt und bleibt. High-End-Qualit\u00E4t, wiederverwendbar.",
    icon: "/assets/step2.svg",
  },
  {
    num: "003",
    title: "mee Socials.",
    desc: "Social Media Management von Strategie bis Posting \u2014 dein Kanal, unser Antrieb. Community-Management inklusive.",
    icon: "/assets/step3.svg",
  },
];

export default function ServicesSection() {
  const ref = useScrollAnimation();

  return (
    <section className="services-section dark-section grid-bg" id="leistungen" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <span className="section-label fade-up">Leistungen</span>
          <h2 className="fade-up stagger-1">Marketing. <span className="accent">madebymee.</span></h2>
        </div>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className={`service-card fade-up stagger-${i + 1}`}>
                <span className="service-num">{s.num}</span>
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={44}
                  height={44}
                  className="service-icon"
                />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
