"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import Logo from "./Logo";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const desktop = window.matchMedia("(min-width: 900px)");
    const onBreakpoint = () => desktop.matches && setMenuOpen(false);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <a href="#top" aria-label="SAMOTECH Services Inc. home" className={styles.brand}>
          <Logo height={56} />
        </a>

        <nav aria-label="Primary" className={styles.desktopNav}>
          <div className={styles.links}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className={styles.cta}>
            Book a Consultation
          </a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className={styles.mobileCta}>
            Book a Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
