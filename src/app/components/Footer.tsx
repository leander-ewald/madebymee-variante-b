import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-custom">
        {/* Brand Statement (LemonAds-inspired) */}
        <div className="footer-statement">
          <h3>Content produzieren. <span className="accent">Einmal. Immer nutzen.</span></h3>
          <p>
            High-End Video Ads, wiederverwendbarer Content und messbare Ergebnisse
            f&uuml;r dein Unternehmen.
          </p>
          <a href="#kontakt" className="btn-primary-custom">
            <i className="bi bi-telephone" /> Termin buchen
          </a>
        </div>

        {/* Middle: Logo + Social */}
        <div className="footer-mid">
          <Image src="/MBMEE-Logo-white.png" alt="madebymee" width={130} height={26} />
          <div className="footer-social">
            <a href="https://www.instagram.com/madebymee.de/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://www.linkedin.com/company/madebymee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} madebymee GbR. Alle Rechte vorbehalten.</span>
          <div className="footer-links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutzerkl&auml;rung</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
