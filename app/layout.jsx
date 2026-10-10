import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactDetails, profile } from "@/data/site";
import { deploymentRobots, pageMetadata, siteUrl } from "@/lib/metadata";

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
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  ...pageMetadata("Architect Samuel Alonge | Crystal Stairs Ltd", "Architecture consulting for buildings that must carry meaning, led by Architect Samuel Alonge of Crystal Stairs Ltd.", "/"),
  robots: deploymentRobots()
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
          "@id": `${siteUrl}/#practice`,
          telephone: contactDetails.phone, email: contactDetails.email, image: new URL(profile.portrait, siteUrl).href,
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
