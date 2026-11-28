"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sparkle, Sun, X } from "lucide-react";
import { personal } from "@/data/personal";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("sobre");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // O tema escuro é o padrão; o claro só aparece se o visitante escolher.
    const savedTheme = localStorage.getItem("portfolio-theme");
    const shouldUseDark = savedTheme !== "light";

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
          <span className="brand-text">
            <strong>Desenvolvedor back-end</strong>
            <small>Engenharia de Computação</small>
          </span>
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
        <div className={`nav-content${menuOpen ? " is-open" : ""}`} id="primary-navigation">
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
          {personal.availability && (
            <a className="nav-availability" href="#contato" onClick={closeMenu}>
              {personal.availability}
              <Sparkle size={13} aria-hidden="true" />
            </a>
          )}
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
