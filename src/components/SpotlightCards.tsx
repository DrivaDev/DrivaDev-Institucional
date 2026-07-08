"use client";

import { useEffect } from "react";

/**
 * Efecto spotlight: sigue el cursor sobre cualquier tarjeta con la clase
 * `.card-project` o `.glass-card` y expone su posición como variables CSS
 * (--mouse-x / --mouse-y). El render visual vive en globals.css.
 *
 * Usa delegación en document para cubrir tarjetas montadas dinámicamente
 * sin adjuntar un listener por tarjeta.
 */
export default function SpotlightCards() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>(".card-project, .glass-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("mousemove", handleMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}
