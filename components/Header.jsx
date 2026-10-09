"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center border border-white/70 text-[11px] font-semibold tracking-[0.26em] transition group-hover:bg-white group-hover:text-accl-ink">
            SA
          </span>
          <span className="hidden text-xs uppercase tracking-[0.28em] sm:block">
            Crystal Stairs Ltd
          </span>
        </Link>

        <button
          className="grid h-11 w-11 place-items-center border border-white/30 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-5 bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-accl-warm ${pathname === item.href ? "text-accl-warm" : "text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`grid overflow-hidden bg-accl-ink/95 transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="grid gap-1 px-5 pb-5 text-sm uppercase tracking-[0.18em]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/10 py-4 text-white transition hover:text-accl-warm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
