import Image from "next/image";

const logos = [
  "4D-Elements.svg", "BoehmKabel.svg", "cre8ify.svg", "Garant-Personal.svg",
  "Heizkurier.svg", "Investment-Guide.svg", "Just-Virtual-Food-Brands.svg",
  "lds-logo.svg", "lebenswert-iserlohn-logo.svg", "Logo_UME_RLK.svg",
  "Roosters-Logo.svg", "schalf-platz.svg", "Specht-Immobilien.svg", "logo_seite_coool.svg",
];

export default function ClientsSection() {
  const doubled = [...logos, ...logos];

  return (
    <section className="clients-section">
      <div className="clients-track">
        {doubled.map((logo, i) => (
          <Image
            key={i}
            src={`/client-logos/${logo}`}
            alt={logo.replace(/\.svg$/, "").replace(/-/g, " ")}
            width={120}
            height={32}
            style={{ height: 32, width: "auto" }}
          />
        ))}
      </div>
    </section>
  );
}
