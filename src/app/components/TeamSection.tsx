"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const members = [
  {
    name: "Leander Ewald",
    role: "Co-Founder — Strategie & Beratung",
    desc: "Leander kümmert sich um Strategie & Beratung.",
    phone: "+4917647514132",
    email: "leander@talentsuite.io",
    photo: "/assets/Leander.png",
  },
  {
    name: "Robert Engel",
    role: "Co-Founder — Marketing & HR",
    desc: "Robert sorgt für technische Umsetzung & Qualität.",
    phone: "+491713846619",
    email: "robert@talentsuite.io",
    photo: "/assets/Robert.png",
  },
  {
    name: "Lukas Mühlhof",
    role: "Co-Founder — Vertrieb & Kommunikation",
    desc: "Lukas bringt kreative Ideen in Foto & Video.",
    phone: "+4917635406689",
    email: "lukas@talentsuite.io",
    photo: "/assets/Lukas.png",
  },
];

export default function TeamSection() {
  const ref = useScrollAnimation();

  return (
    <section className="team-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">TEAM. <span className="accent">madebymee.</span></h2>
        </div>
        <div className="row g-4 justify-content-center">
          {members.map((m, i) => (
            <div key={i} className="col-md-4">
              <div className={`team-card fade-up stagger-${i + 1}`}>
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={120}
                  height={120}
                  className="team-photo"
                />
                <h3>{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p>{m.desc}</p>
                <div className="team-contact">
                  <a href={`tel:${m.phone}`}>
                    <i className="bi bi-telephone me-1" /> {m.phone}
                  </a>
                  <br />
                  <a href={`mailto:${m.email}`}>
                    <i className="bi bi-envelope me-1" /> {m.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
