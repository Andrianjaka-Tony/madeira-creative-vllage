"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Signature Retreats", href: "#" },
  { label: "Sport Breaks", href: "#" },
  { label: "Corporate Camps", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{ backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent" }}
    >
      <div className="px-6 md:px-10 xl:px-16 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="#" className="flex-none">
          <p className="text-white font-bold text-sm leading-tight tracking-tight">Madeira Creative</p>
          <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Village</p>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4 flex-none">
          <a href="#book" className="text-white/80 hover:text-white text-sm transition-colors">
            Contact
          </a>
          <a
            href="#book"
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            style={{ backgroundColor: "#c9a84c", color: "#fff" }}
          >
            Corporate Inquiries
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/95`}
        style={{ maxHeight: menuOpen ? 400 : 0 }}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            <a href="#book" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white text-sm transition-colors">
              Contact
            </a>
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="text-center px-5 py-2.5 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#c9a84c", color: "#fff" }}
            >
              Corporate Inquiries
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
