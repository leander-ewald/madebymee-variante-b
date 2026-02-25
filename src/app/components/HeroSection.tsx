"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [typed, setTyped] = useState("");
  const word = "CONTENT";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= word.length) {
        setTyped(word.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 200);
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
          <span className="typed-cursor">|</span>
          <br />
          madebymee.
        </h1>
        <p>
          Performance Ads, Social Media Content und Videoproduktion — alles aus einer Hand.
        </p>
        <a href="#kontakt" className="btn-primary-custom">
          <i className="bi bi-telephone" /> Termin buchen
        </a>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
