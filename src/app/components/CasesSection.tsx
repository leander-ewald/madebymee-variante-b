"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const cases = [
  {
    title: "Tag der Investoren",
    type: "Event Recap",
    thumb: "/assets/thumbnails/tag-der-investoren.jpg",
    video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longform%20Tag%20der%20Investoren.mp4",
  },
  {
    title: "Iserlohn Roosters",
    type: "VIP Promotion",
    thumb: "/assets/thumbnails/roosters-vip.jpg",
    video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longfrom%20Roosters%20VIP%20HQ.mp4",
  },
  {
    title: "Black Week",
    type: "Black Friday Promotion",
    thumb: "/assets/thumbnails/black-week.jpg",
    video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longform%20Black%20Week%20HQ.mp4",
  },
  {
    title: "911 Carrera",
    type: "Creative Project",
    thumb: "/assets/thumbnails/911-carrera.jpg",
    video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longform%20911%20Carrera%20HQ.mp4",
  },
  {
    title: "Iserlohn Roosters",
    type: "Social Media Production",
    thumb: "/assets/thumbnails/business-roosters.jpg",
    video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longfrom%20Business%20Roosters%20HQ.mp4",
  },
  {
    title: "Böhm Kabel",
    type: "Recruiting AD",
    thumb: "/assets/thumbnails/boehm-jobspotting.jpg",
    video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longform%20Bo%CC%88hm%20Jobspotting%20HQ.mp4",
  },
];

export default function CasesSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const ref = useScrollAnimation();

  return (
    <section className="cases-section dark-section" id="referenzen" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">CASES. <span className="accent">madebymee.</span></h2>
          <p className="section-subtitle fade-up stagger-1">
            Ein Auszug erfolgreicher Projekte, die wir für unsere Kunden umgesetzt haben.
          </p>
        </div>
        <div className="row g-3">
          {cases.map((c, i) => (
            <div key={i} className="col-md-4">
              <div
                className={`case-card fade-up stagger-${(i % 3) + 1}`}
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              >
                {activeIdx === i ? (
                  <video
                    src={c.video}
                    autoPlay
                    controls
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <>
                    <Image src={c.thumb} alt={c.title} fill style={{ objectFit: "cover" }} />
                    <div className="case-overlay">
                      <h3>{c.title}</h3>
                      <span>{c.type}</span>
                    </div>
                    <div className="case-play">
                      <i className="bi bi-play-fill" />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
