"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  localeName,
  otherLocale,
  path,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";
import type { Dictionary } from "@/content/i18n";

type Props = {
  locale: Locale;
  /** Solo la rama `nav` del diccionario: el resto no viaja al cliente. */
  t: Dictionary["nav"];
};

export default function Navbar({ locale, t }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: t.home, href: path("home", locale) },
    { label: t.services, href: path("services", locale) },
    { label: t.portfolio, href: path("portfolio", locale) },
    { label: t.blog, href: path("blog", locale) },
    { label: t.contact, href: path("contact", locale) },
  ];

  const other = otherLocale(locale);
  const alternateHref = switchLocalePath(pathname ?? "/", other);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled ? "navbar-glass" : "navbar-transparent"
      }`}
      style={{ zIndex: 50 }}
    >
      <nav className="container-main flex items-center justify-between py-3 h-18" aria-label={t.ariaMain}>
        <Link href={path("home", locale)} className="flex items-center gap-2.5 group" aria-label={t.ariaLogo}>
          <Image
            src="/isotipo.svg"
            alt="Driva Dev"
            width={36}
            height={36}
            className="transition-transform group-hover:scale-110"
            priority
          />
          <span className="text-lg font-bold text-white leading-none">
            Driva<span className="text-principal">Dev</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-principal ${
                pathname === href
                  ? "text-principal border-b-2 border-principal pb-0.5"
                  : "text-white/65"
              }`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}

          {/* El cambio de idioma cruza dos root layouts, así que va con <a>:
              un <Link> intentaría una navegación de cliente que Next
              igualmente resuelve con recarga completa. */}
          <a
            href={alternateHref}
            hrefLang={other}
            className="flex items-center gap-1.5 text-sm font-medium text-white/65 hover:text-principal transition-colors"
            aria-label={t.switchLanguage}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            {other.toUpperCase()}
          </a>

          <Link href={path("contact", locale)} className="btn-primary !py-2.5 !px-6 !text-sm ml-1">
            {t.cta}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden navbar-glass border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-base font-medium ${pathname === href ? "text-principal" : "text-white/70"}`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <a
            href={alternateHref}
            hrefLang={other}
            className="flex items-center gap-2 text-base font-medium text-white/70"
            aria-label={t.switchLanguage}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            {localeName[other]}
          </a>
          <Link href={path("contact", locale)} className="btn-primary text-center mt-2">
            {t.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
