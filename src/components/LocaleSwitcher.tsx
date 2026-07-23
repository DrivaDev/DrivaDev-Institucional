"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeName, switchLocalePath, type Locale } from "@/lib/i18n";

function GlobeIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

type Props = {
  /** Idioma que se está viendo. */
  locale: Locale;
  /** `aria-label` del botón que abre la lista. */
  label: string;
  /** El menú móvil abre hacia arriba y ocupa todo el ancho. */
  variant?: "desktop" | "mobile";
};

/**
 * Botón que despliega la lista de idiomas. Cada opción apunta a la misma
 * página en el otro idioma —o a la sección más cercana, si esa página todavía
 * no está traducida— y no a la home.
 *
 * Los enlaces son `<a>` y no `<Link>` a propósito: cambiar de idioma cruza los
 * dos root layouts, así que Next resuelve la navegación con una recarga
 * completa de todas formas.
 */
export default function LocaleSwitcher({ locale, label, variant = "desktop" }: Props) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic afuera o con Escape: si no, el panel queda abierto
  // tapando el contenido después de que el foco ya se fue a otra parte.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isMobile = variant === "mobile";

  return (
    <div ref={containerRef} className={`relative ${isMobile ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`flex items-center gap-1.5 font-medium transition-colors hover:text-principal ${
          isMobile ? "text-base text-white/70 w-full" : "text-sm text-white/65"
        }`}
      >
        <GlobeIcon className="w-4 h-4" />
        {isMobile ? localeName[locale] : locale.toUpperCase()}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={label}
          className={`absolute navbar-glass border border-white/10 rounded-xl py-1.5 min-w-40 overflow-hidden ${
            isMobile ? "bottom-full mb-2 left-0 w-full" : "top-full mt-3 right-0"
          }`}
          style={{ zIndex: 60 }}
        >
          {locales.map((option) => {
            const current = option === locale;
            return (
              <a
                key={option}
                role="menuitem"
                href={switchLocalePath(pathname, option)}
                hrefLang={option}
                lang={option}
                aria-current={current ? "true" : undefined}
                className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-white/10 ${
                  current ? "text-principal font-medium" : "text-white/70"
                }`}
              >
                {localeName[option]}
                {current && (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
