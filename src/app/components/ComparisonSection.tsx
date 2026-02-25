"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const features = [
  { label: "Strategie & Konzept", mbm: true, free: false, house: true, stock: false },
  { label: "Professionelle Produktion", mbm: true, free: true, house: false, stock: false },
  { label: "Performance-Optimierung", mbm: true, free: false, house: false, stock: false },
  { label: "Schnelle Lieferung (3 Tage)", mbm: true, free: false, house: true, stock: true },
  { label: "Skalierbar & flexibel", mbm: true, free: false, house: false, stock: true },
  { label: "Authentischer Content", mbm: true, free: true, house: true, stock: false },
  { label: "Messbare Ergebnisse", mbm: true, free: false, house: false, stock: false },
];

function Check() {
  return <span className="check"><i className="bi bi-check-lg" /></span>;
}
function Cross() {
  return <span className="cross"><i className="bi bi-x-lg" /></span>;
}

export default function ComparisonSection() {
  const ref = useScrollAnimation();

  return (
    <section className="comparison-section dark-section" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="fade-up">WARUM. <span className="accent">madebymee.</span></h2>
          <p className="section-subtitle fade-up stagger-1">
            Der direkte Vergleich zeigt den Unterschied.
          </p>
        </div>
        <div className="table-responsive fade-up stagger-2">
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th className="active-col">madebymee</th>
                <th>Freelancer</th>
                <th>In-House</th>
                <th>Stock Content</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i}>
                  <td>{f.label}</td>
                  <td>{f.mbm ? <Check /> : <Cross />}</td>
                  <td>{f.free ? <Check /> : <Cross />}</td>
                  <td>{f.house ? <Check /> : <Cross />}</td>
                  <td>{f.stock ? <Check /> : <Cross />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
