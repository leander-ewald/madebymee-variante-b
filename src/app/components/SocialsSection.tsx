"use client";
import { useRef } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

const reels = Array.from({ length: 7 }, (_, i) =>
  `https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%20${i + 1}.mp4`
);

export default function SocialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useScrollAnimation();

  const scroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  return (
    <section className="socials-section" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <span className="section-label fade-up">Social Reels</span>
          <h2 className="fade-up stagger-1">SOCIALS. <span className="accent">madebymee.</span></h2>
          <p className="section-subtitle fade-up stagger-2">Reels, die deine Marke sichtbar machen</p>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="reel-grid" ref={scrollRef}>
          {reels.map((url, i) => (
            <div key={i} className="reel-item">
              <video
                src={url}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                onMouseLeave={(e) => {
                  const v = e.target as HTMLVideoElement;
                  v.pause();
                  v.currentTime = 0;
                }}
              />
            </div>
          ))}
        </div>
        <div className="container-custom d-flex gap-3 mt-4 justify-content-center">
          <button
            onClick={() => scroll(-1)}
            className="btn-outline-custom"
            style={{ padding: "10px 18px", fontSize: "1.1rem", borderWidth: 1 }}
            aria-label="Zur\u00FCck"
          >
            <i className="bi bi-arrow-left" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="btn-outline-custom"
            style={{ padding: "10px 18px", fontSize: "1.1rem", borderWidth: 1 }}
            aria-label="Weiter"
          >
            <i className="bi bi-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
