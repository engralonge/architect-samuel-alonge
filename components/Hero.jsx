import Image from "next/image";
import { heroImageAlt } from "@/data/site";

export default function Hero({
  eyebrow = "Crystal Stairs Ltd",
  title,
  copy,
  image,
  align = "end",
  primaryCta,
  secondaryCta
}) {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-accl-ink text-white">
      <Image
        src={image}
        alt={heroImageAlt}
        fill
        sizes="100vw"
        quality={75}
        priority
        fetchPriority="high"
        className="absolute inset-0 h-full w-full scale-105 object-cover motion-safe:animate-heroDrift"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
      <div className={`relative z-10 mx-auto flex min-h-[88svh] max-w-[1480px] px-5 pb-16 pt-32 md:px-8 lg:pb-24 ${align === "center" ? "items-center" : "items-end"}`}>
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-accl-warm">{eyebrow}</p>
          <h1 className="font-display text-5xl leading-[0.98] md:text-7xl lg:text-8xl">{title}</h1>
          {copy ? <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">{copy}</p> : null}
          {(primaryCta || secondaryCta) ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {primaryCta ? (
                <a className="bg-accl-warm px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-accl-ink transition hover:bg-white" href={primaryCta.href}>
                  {primaryCta.label}
                </a>
              ) : null}
              {secondaryCta ? (
                <a className="border border-white/35 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-accl-warm hover:text-accl-warm" href={secondaryCta.href}>
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
