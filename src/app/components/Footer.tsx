import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="footer-top">
          <Image src="/MBMEE-Logo-white.png" alt="madebymee" width={140} height={28} />
          <div className="footer-links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutzerklärung</Link>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright &copy; {new Date().getFullYear()} madebymee GbR. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
