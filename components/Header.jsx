"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, contactDetails } from "@/data/site";

export default function Header() {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    // Native modal dialog contains focus and makes the page behind it inert.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function closeMenu() {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white backdrop-blur-md transition-colors ${scrolled ? "bg-accl-ink/95" : "bg-black/60"}`}>
        <div className={`mx-auto flex max-w-[1480px] items-center justify-between px-5 transition-all md:px-8 ${scrolled ? "py-2" : "py-4"}`}>
          <Link href="/" aria-label="Architect Samuel Alonge / Crystal Stairs Ltd home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border border-white/70 text-xs font-semibold">SA</span>
            <span className="text-xs uppercase tracking-[0.12em]">Crystal Stairs Ltd</span>
          </Link>
          <button ref={trigger} type="button" aria-expanded={open} aria-controls="site-navigation" aria-haspopup="dialog" onClick={() => setOpen(true)} className="flex min-h-11 items-center gap-3 px-2 text-xs uppercase tracking-[0.18em] hover:text-accl-warm">
            Menu <Menu size={22} aria-hidden="true" />
          </button>
        </div>
        <noscript><nav aria-label="Primary navigation" className="flex flex-wrap gap-4 px-5 pb-4 text-sm">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></noscript>
      </header>
      <dialog ref={dialog} id="site-navigation" aria-labelledby="menu-title" onCancel={closeMenu} onClose={() => setOpen(false)} className="navigation-dialog bg-accl-paper text-accl-ink">
        <div className="mx-auto flex min-h-full max-w-[1480px] flex-col px-5 py-5 md:px-8">
          <div className="flex items-center justify-between gap-4 border-b border-accl-line pb-5">
            <p id="menu-title" className="text-xs uppercase tracking-[0.14em]">Crystal Stairs Ltd</p>
            <button type="button" autoFocus onClick={closeMenu} aria-label="Close navigation" title="Close navigation" className="grid h-11 w-11 place-items-center hover:text-accl-brick"><X size={28} aria-hidden="true" /></button>
          </div>
          <div className="grid flex-1 items-center gap-10 py-8 md:grid-cols-[1.3fr_1fr] md:py-12">
            <nav aria-label="Primary navigation" className="grid">
              {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={closeMenu} className="flex items-baseline gap-5 border-b border-accl-line py-3 font-display text-4xl transition-colors hover:text-accl-brick md:text-6xl">
                <span className="font-sans text-xs text-accl-muted">{String(index + 1).padStart(2, "0")}</span>{item.label}
              </a>)}
            </nav>
            <div className="md:pl-12">
              <p className="section-label">Architect Samuel Alonge</p>
              <p className="mt-5 max-w-sm font-display text-3xl leading-snug">Architecture for buildings that must carry meaning.</p>
              <div className="mt-8 grid gap-4 text-sm">
                <a className="break-all hover:text-accl-brick" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                <a className="hover:text-accl-brick" href={`tel:${contactDetails.phone}`}>{contactDetails.phoneDisplay}</a>
                <a className="hover:text-accl-brick" href={`https://wa.me/${contactDetails.whatsapp}`}>WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
