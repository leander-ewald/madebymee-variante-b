import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div>
        <h1>404</h1>
        <p>Diese Seite wurde nicht gefunden.</p>
        <Link href="/" className="btn-primary-custom">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
