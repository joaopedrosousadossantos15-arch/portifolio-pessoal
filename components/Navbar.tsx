"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Interesses", href: "#interesses" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("sobre");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(shouldUseDark);
    document.documentElement.dataset.theme = shouldUseDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );

    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark">JP.</span>
          <span>Portfólio pessoal</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div
          className={`nav-content${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <div className="nav-links">
            {links.map(({ label, href }) => (
              <a
                className={activeSection === href.slice(1) ? "is-active" : ""}
                href={href}
                key={href}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </div>
          <a className="nav-contact" href="#contato" onClick={closeMenu}>
            Vamos conversar <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Ativar tema claro" : "Ativar tema escuro"}
            title={darkMode ? "Tema claro" : "Tema escuro"}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
