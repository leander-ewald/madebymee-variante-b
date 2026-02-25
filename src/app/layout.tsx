import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BootstrapJS from "./components/BootstrapJS";

const helvetica = localFont({
  src: [
    { path: "../../public/fonts/HelveticaNeueRoman.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueMedium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueBold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueHeavy.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-helvetica",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "madebymee — Content, der wirkt",
  description:
    "madebymee ist deine Video-Agentur für Performance Ads, Social Media Content, Erklärvideos und Imagefilme.",
  openGraph: {
    title: "madebymee — Content, der wirkt",
    description: "Video-Agentur für Performance Ads, Social Media & Imagefilme",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${helvetica.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BootstrapJS />
      </body>
    </html>
  );
}
