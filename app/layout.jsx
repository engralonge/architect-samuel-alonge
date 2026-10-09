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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
