import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

export const metadata = {
  metadataBase: new URL("https://architect-samuel-alonge.vercel.app"),
  title: "Architect Samuel Alonge | Crystal Stairs Ltd",
  description:
    "Premium architecture consulting for buildings that must carry meaning, led by Architect Samuel Alonge of Crystal Stairs Ltd.",
  openGraph: {
    title: "Architect Samuel Alonge | Crystal Stairs Ltd",
    description: "Landmark architectural vision, disciplined design, and meticulous construction thinking.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-accl-paper font-sans text-accl-ink antialiased">
        <a href="#main-content" className="fixed left-4 top-4 z-[60] -translate-y-24 bg-white px-5 py-3 text-accl-ink focus:translate-y-0">Skip to content</a>
        <Header />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "ProfessionalService",
          name: "Crystal Stairs Ltd", url: "https://architect-samuel-alonge.vercel.app",
          founder: { "@type": "Person", name: "Architect Samuel Alonge", jobTitle: "Architect" },
          sameAs: ["https://www.instagram.com/crystalstairs_ltd/"],
          serviceType: ["Architectural Design", "Construction Advisory", "Landmark Strategy"]
        }) }} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
