"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="header-logo">
          <Image src="/MBMEE-Logo.png" alt="madebymee" width={160} height={32} priority />
        </Link>

        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <a href="/#referenzen" onClick={closeMenu}>Portfolio</a>
          <a href="/#leistungen" onClick={closeMenu}>Leistungen</a>
          <Link href="/team" onClick={closeMenu}>Team</Link>
          <a href="/#kontakt" className="nav-cta" onClick={closeMenu}>Kontakt</a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
        </button>
      </div>
    </header>
  );
}
