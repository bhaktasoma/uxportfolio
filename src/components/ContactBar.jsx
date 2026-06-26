import { SOCIAL } from "../data/site.js";

const ICONS = {
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 7 8.5-7" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4h3.2l1.4 4.6-2 1.6a12.6 12.6 0 0 0 6.2 6.2l1.6-2L19 16v3.2c0 .9-.7 1.7-1.6 1.6A16 16 0 0 1 3.4 5.6 1.6 1.6 0 0 1 5 4z" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V21H17.4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
    </svg>
  ),
};

export default function ContactBar({ variant = "default" }) {
  const telHref = "tel:" + SOCIAL.phone.replace(/[^+\d]/g, "");
  const items = [
    { key: "email", label: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
    { key: "phone", label: SOCIAL.phone, href: telHref },
    { key: "linkedin", label: "LinkedIn", href: SOCIAL.linkedin, external: true },
  ];

  return (
    <ul className={`contact-bar${variant === "footer" ? " contact-bar--footer" : ""}`}>
      {items.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener" : undefined}
          >
            <span className="contact-bar__icon" aria-hidden="true">
              {ICONS[item.key]}
            </span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
