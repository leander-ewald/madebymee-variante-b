"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const word = "CONTENT";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= word.length) {
        setTyped(word.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/showreel-poster.jpg"
      >
        <source
          src="https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Showreel%20LQ.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>
          <span className="typed-text">{typed}</span>
          {showCursor && <span className="typed-cursor">|</span>}
          <br />
          madebymee.
        </h1>
        <p className="hero-sub">
          Performance Ads, Social Media Content und Videoproduktion — alles aus einer Hand.
          Datengetrieben. Kreativ. Messbar.
        </p>
        <div className="hero-buttons">
          <a href="#referenzen" className="btn-primary-custom">
            <i className="bi bi-play-circle" /> Unsere Produktionen
          </a>
          <a href="#kontakt" className="btn-outline-light btn-outline-custom">
            <i className="bi bi-telephone" /> Termin buchen
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
