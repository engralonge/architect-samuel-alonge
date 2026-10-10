"use client";

import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/site";

const DURATION = 7000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [available, setAvailable] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const region = useRef(null);
  const slide = heroSlides[active];
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduced(preference.matches);
    updateMotion();
    preference.addEventListener("change", updateMotion);
    let inView = true;
    const updateVisibility = () => setAvailable(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateVisibility();
    }, { threshold: 0.25 });
    observer.observe(region.current);
    document.addEventListener("visibilitychange", updateVisibility);
    updateVisibility();
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  const playing = available && !paused && !reduced && !hovered && !focused;
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % heroSlides.length), DURATION);
    return () => window.clearTimeout(timer);
  }, [active, playing]);
  function choose(index) {
    setPaused(true);
    setActive((index + heroSlides.length) % heroSlides.length);
  }
  return (
    <section ref={region} aria-label="Dunamis Glory Dome views" aria-roledescription="carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }} className="relative min-h-[94svh] bg-accl-ink text-white">
      <div className="absolute inset-0 overflow-hidden">
        {/* Preserve native dimensions until high-resolution originals arrive. */}
        {heroSlides.map((image, index) => <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={`(max-width: ${image.width}px) 100vw, ${image.width}px`} quality={80} priority={index === 0} aria-hidden={index !== active} style={{ maxWidth: image.width, maxHeight: image.height }} className={`absolute right-0 top-24 h-auto w-full object-contain transition-opacity duration-1000 motion-reduce:transition-none md:top-28 ${index === active ? "opacity-100" : "opacity-0"}`} />)}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
      </div>
      <div className="relative mx-auto flex min-h-[94svh] max-w-[1480px] flex-col justify-end px-5 pb-5 pt-24 md:px-8 md:pb-9 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-accl-warm">Crystal Stairs Ltd / Architecture Consulting</p>
          <h1 className="font-display text-[32px] leading-[1.05] sm:text-5xl lg:text-7xl">Landmark architectural vision, led by Architect Samuel Alonge.</h1>
          <p className="mt-5 max-w-2xl text-base leading-6 text-white/90 md:text-lg md:leading-7">We shape timeless, functional spaces through disciplined design, meticulous construction thinking, and a clear path from concept to built reality.</p>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-7">
            <a href="#contact" className="bg-accl-warm px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-accl-ink transition hover:bg-white">Start a Consultation</a>
            <a href="#work" className="border border-white/60 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white hover:text-accl-ink">Study the Work</a>
          </div>
        </div>
        <div className="mt-6 grid gap-2 border-t border-white/30 pt-4 md:mt-14 md:grid-cols-[1fr_auto] md:items-end md:gap-5">
          <div>
            <p aria-live={paused ? "polite" : "off"} aria-atomic="true" className="text-sm">{slide.title} <span className="text-white/75">/ {slide.view}</span></p>
            <a href={slide.href} className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] hover:text-accl-warm">View project <ArrowRight size={15} aria-hidden="true" /></a>
            <div className="mt-1 flex max-w-xs gap-2" role="group" aria-label="Choose project view">
              {heroSlides.map((image, index) => <button key={image.src} type="button" title={image.view} aria-label={`Show ${image.view.toLowerCase()}`} aria-pressed={index === active} onClick={() => choose(index)} className="flex h-11 flex-1 items-center">
                <span className="relative h-0.5 w-full overflow-hidden bg-white/35"><span key={`${active}-${index}`} className={`absolute inset-y-0 left-0 bg-white ${index === active ? "w-full" : "w-0"}`} style={index === active && playing ? { animation: `slideProgress ${DURATION}ms linear both` } : undefined} /></span>
              </button>)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" title="Previous view" aria-label="Previous view" onClick={() => choose(active - 1)} className="hero-control"><ArrowLeft size={20} aria-hidden="true" /></button>
            <button type="button" title={paused || reduced ? "Play slideshow" : "Pause slideshow"} aria-label={paused || reduced ? "Play slideshow" : "Pause slideshow"} disabled={reduced} onClick={() => setPaused(!paused)} className="hero-control disabled:opacity-40">{paused || reduced ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}</button>
            <button type="button" title="Next view" aria-label="Next view" onClick={() => choose(active + 1)} className="hero-control"><ArrowRight size={20} aria-hidden="true" /></button>
            <a href="#profile" title="Explore profile" aria-label="Explore profile" className="hero-control ml-auto md:ml-5"><ArrowDown size={20} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
