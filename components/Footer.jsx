import Link from "next/link";
import { navItems, socialLinks } from "@/data/site";
import ContactDetails from "@/components/ContactDetails";
import { ArrowRight, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accl-ink text-white">
      <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8 lg:py-24">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.32em] text-accl-warm">Crystal Stairs Ltd</p>
          <h2 className="max-w-xl font-display text-4xl leading-tight md:text-5xl">
            Timeless spaces, functional beauty.
          </h2>
          <Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-accl-warm text-sm text-accl-warm hover:text-white">Start a consultation <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>

        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-white/50">Explore</p>
          <div className="grid gap-3 text-sm text-white/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-accl-warm">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-white/50">Contact</p>
          <address className="not-italic leading-7 text-white/75">
            Architect Samuel Alonge<br />
            Crystal Stairs Ltd<br />
          </address>
          <ContactDetails />
          <div className="mt-7 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-white/55">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="flex min-h-11 items-center gap-3 text-white/80 transition hover:text-accl-warm">
                <AtSign size={18} aria-hidden="true" />{item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-xs text-white/75 md:px-8">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Crystal Stairs Ltd / Architect Samuel Alonge.</span>
          <span>Architecture consulting for buildings that must carry meaning.</span>
        </div>
      </div>
    </footer>
  );
}
