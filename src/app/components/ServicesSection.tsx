"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const services = [
  {
    title: "mee Ads.",
    desc: "Performance Ads und Recruiting Clips, die konvertieren — nicht nur gefallen.",
    icon: "/assets/step1.svg",
  },
  {
    title: "mee Content.",
    desc: "Erklärvideos, Imagefilme und Produktvideos — Content der erklärt, überzeugt und bleibt.",
    icon: "/assets/step2.svg",
  },
  {
    title: "mee Socials.",
    desc: "Social Media Management von Strategie bis Posting — dein Kanal, unser Antrieb.",
    icon: "/assets/step3.svg",
  },
];

export default function ServicesSection() {
  const ref = useScrollAnimation();

  return (
    <section className="services-section dark-section" id="leistungen" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">Marketing. <span className="accent">madebymee.</span></h2>
        </div>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className={`service-card fade-up stagger-${i + 1}`}>
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={48}
                  height={48}
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
