"use client";
import { useRef } from "react";

const reels = Array.from({ length: 7 }, (_, i) =>
  `https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%20${i + 1}.mp4`
);

export default function SocialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="socials-section">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2>SOCIALS. <span className="accent">madebymee.</span></h2>
          <p className="section-subtitle">Reels, die deine Marke sichtbar machen</p>
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
            style={{ padding: "10px 20px", fontSize: "1.2rem" }}
            aria-label="Zurück"
          >
            <i className="bi bi-arrow-left" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="btn-outline-custom"
            style={{ padding: "10px 20px", fontSize: "1.2rem" }}
            aria-label="Weiter"
          >
            <i className="bi bi-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
