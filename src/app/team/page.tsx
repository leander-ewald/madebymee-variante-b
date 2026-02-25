"use client";
import { useState } from "react";
import Image from "next/image";

const members = [
  {
    name: "Leander Ewald",
    role: "Content & Storytelling",
    desc: "Leander kümmert sich um Strategie & Beratung.",
    email: "leander@talentsuite.io",
    photo: "/assets/Leander.png",
    bio: "hat seine Passion in der Content Creation gefunden. Schon früh haben ihn Videographie, Schnitt und Storytelling mehr interessiert als klassischer Konsum. Heute denkt er in Hooks, Formaten und Bildern — mit einem Gefühl dafür, was auf Social Media wirklich hängenbleibt.",
  },
  {
    name: "Robert Engel",
    role: "Marketing & HR",
    desc: "Robert sorgt für technische Umsetzung & Qualität.",
    email: "Robert@talentsuite.io",
    photo: "/assets/Robert.png",
    bio: "hat bereits Werbebudgets im Wert von mehreren Mio. € verantwortet und lebt Performance-Ads. Er versteht, wie Kampagnen funktionieren, warum der erste Eindruck im Feed über Erfolg oder Totalausfall entscheidet — und wie man Content so baut, dass er nicht einfach ausgespielt, sondern genutzt wird.",
  },
  {
    name: "Lukas Mühlhof",
    role: "Vertrieb & Kommunikation",
    desc: "Lukas bringt kreative Ideen in Foto & Video.",
    email: "Lukas@talentsuite.io",
    photo: "/assets/Lukas.png",
    bio: "kommt aus dem Vertrieb und hat seit über Jahren nichts anderes gemacht, als Menschen von Angeboten zu überzeugen — am Telefon, im Termin, auf Messen. Er weiß, welche Botschaften wirklich ziehen und wie man sie so formuliert, dass sie nicht nach Werbung klingen, sondern nach echter Chance.",
  },
];

const keyPoints = [
  { title: "Trust Gap", desc: "indem außen sichtbar wird, wie gut ihr tatsächlich seid, statt dass es nur im Gespräch erzählt wird." },
  { title: "Sichtbarkeit", desc: "mit Videos, Fotos und Social-Media-Auftritten, durch die man online nicht mehr an eurem Betrieb vorbeikommt." },
  { title: "Mitarbeitermangel", desc: "durch Recruiting-ADS und Social-Content, der die Menschen anspricht, die du wirklich im Team haben willst." },
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Header */}
      <section className="team-page-header">
        <div className="container-custom">
          <h1>
            Let <span className="accent">mee</span> entertain you
          </h1>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-page-grid">
        <div className="container-custom">
          <div className="row g-4 justify-content-center">
            {members.map((m, i) => (
              <div key={i} className="col-md-4">
                <div className="team-card">
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

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container-custom">
          <h2 className="text-center mb-5">Unsere <span className="accent">Gründer</span></h2>
          <div className="row g-5">
            <div className="col-lg-5">
              <h3 className="mb-3">Vom Betrieb in den Feed</h3>
              <p>
                Wir geben deinem Unternehmen den Auftritt, den eure Qualität verdient — und holen euch
                raus aus 08/15-Anzeigen rein in die Feeds eurer Wunschmitarbeiter und Kunden. Hinter
                madebymee stehen drei Gründer aus Vertrieb, Performance-Ads und Content Creation.
              </p>
              <div className="mt-4">
                {keyPoints.map((kp, i) => (
                  <div key={i} className="mb-3">
                    <strong style={{ color: "var(--blue)" }}>{kp.title}</strong> — {kp.desc}
                  </div>
                ))}
              </div>
              <p className="mt-4" style={{ fontSize: "0.95rem" }}>
                Wir arbeiten jung im Kopf, klar in der Ansprache und professionell in der Umsetzung.
                Wenn dein Unternehmen bereit ist, die alte Anzeigen-Welt hinter sich zu lassen und dort
                sichtbar zu werden, wo Aufmerksamkeit heute wirklich passiert, dann sollten wir
                miteinander reden.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="founder-bio">
                <ul className="nav founder-tabs mb-4">
                  {members.map((m, i) => (
                    <li key={i} className="nav-item">
                      <button
                        className={`nav-link ${activeTab === i ? "active" : ""}`}
                        onClick={() => setActiveTab(i)}
                      >
                        {m.name.split(" ")[0]}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="d-flex align-items-start gap-4">
                  <Image
                    src={members[activeTab].photo}
                    alt={members[activeTab].name}
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%", objectFit: "cover", border: "3px solid var(--blue)" }}
                  />
                  <div>
                    <h4 style={{ fontSize: "1.3rem", marginBottom: 4 }}>{members[activeTab].name}</h4>
                    <div style={{ color: "var(--blue)", fontSize: "0.9rem", marginBottom: 12 }}>
                      {members[activeTab].role}
                    </div>
                    <p>{members[activeTab].bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
