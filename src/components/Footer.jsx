import { SOCIAL } from "../data/site.js";
import ContactBar from "./ContactBar.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner wrap">
        <div className="footer-contact">
          <p className="eyebrow">Get in touch</p>
          <ContactBar variant="footer" />
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} Soma Bhakta · {SOCIAL.location}
        </p>
      </div>
    </footer>
  );
}
