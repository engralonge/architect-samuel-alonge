"use client";

import NativeImage from "@/components/NativeImage";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trapDialogFocus } from "@/lib/dialog-focus";

export default function ProjectGallery({ images, title }) {
  const [active, setActive] = useState(null);
  const dialog = useRef(null);
  const opener = useRef(null);
  const isOpen = active !== null;
  const image = images[active ?? 0];
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);
  function close() {
    dialog.current?.close();
    setActive(null);
    opener.current?.focus({ preventScroll: true });
  }
  function step(delta) {
    setActive((value) => (value + delta + images.length) % images.length);
  }
  if (!images.length) return null;
  return (
    <>
      <div style={{ "--gallery-width": "723px" }} className="native-gallery mx-auto grid w-full items-start gap-8 md:grid-cols-2">
        {images.map((photo, index) => <figure key={photo.src} className={index === 0 ? "md:col-span-2" : ""}>
          <button type="button" aria-haspopup="dialog" aria-label={`Open gallery image ${index + 1}: ${photo.alt}`} onClick={(event) => { opener.current = event.currentTarget; setActive(index); }} style={{ maxWidth: photo.width }} className="group relative block w-full text-left">
            <NativeImage src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={`(max-width: ${photo.width}px) 100vw, ${photo.width}px`} className="transition-opacity group-hover:opacity-90" />
            <span className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center bg-accl-ink/90 text-white"><Expand size={18} aria-hidden="true" /></span>
          </button>
          {photo.caption ? <figcaption className="mt-3 text-sm text-accl-muted">{photo.caption}</figcaption> : null}
        </figure>)}
      </div>
      <dialog ref={dialog} aria-labelledby="gallery-title" onCancel={close} onClose={() => setActive(null)} onKeyDown={(event) => {
        trapDialogFocus(event);
        if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); step(1); }
      }} className="navigation-dialog bg-accl-ink text-white">
        <div className="flex min-h-full flex-col px-5 py-5 md:px-8">
          <div className="flex items-center justify-between gap-5 border-b border-white/20 pb-4">
            <h2 id="gallery-title" className="text-sm">{title}</h2>
            <button type="button" autoFocus onClick={close} aria-label="Close gallery" title="Close gallery" className="hero-control"><X size={24} aria-hidden="true" /></button>
          </div>
          <div className="flex flex-1 items-center justify-center py-8">
            <NativeImage src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={`(max-width: ${image.width}px) 100vw, ${image.width}px`} style={{ "--viewport-height": "65dvh" }} className="object-scale-down" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-4">
            <p role="status" aria-live="polite" aria-atomic="true" className="max-w-xl text-sm leading-6">{(active ?? 0) + 1} / {images.length} <span className="text-white/80">{image.alt}</span></p>
            {images.length > 1 ? <div className="flex gap-3"><button type="button" onClick={() => step(-1)} aria-label="Previous gallery image" title="Previous image" className="hero-control"><ArrowLeft size={20} aria-hidden="true" /></button><button type="button" onClick={() => step(1)} aria-label="Next gallery image" title="Next image" className="hero-control"><ArrowRight size={20} aria-hidden="true" /></button></div> : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
