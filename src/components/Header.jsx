import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV, RESUME_URL } from "../data/site.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Primary">
        <Link className="brand" to="/" onClick={close}>
          <span className="brand-mark" aria-hidden="true">SB</span>
          <span className="brand-name">Soma Bhakta</span>
        </Link>

        <div className="nav-actions">
          <ThemeToggle />

          <ul className={`nav-links${open ? " open" : ""}`} id="nav-menu">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} onClick={close}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a className="nav-cta" href={RESUME_URL} target="_blank" rel="noopener" onClick={close}>
                Résumé
              </a>
            </li>
          </ul>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
