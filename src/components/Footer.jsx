import { SOCIAL } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner wrap">
        <p>© {new Date().getFullYear()} Soma Bhakta · {SOCIAL.location}</p>
        <ul className="social">
          <li>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={`mailto:${SOCIAL.email}`}>Email ↗</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
