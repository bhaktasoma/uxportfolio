import { SOCIAL } from "../data/site.js";

export default function Contact() {
  const telHref = "tel:" + SOCIAL.phone.replace(/[^+\d]/g, "");
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow">Contact</p>
        <h1>
          Let's <em>connect</em>.
        </h1>
        <p className="lead">
          I'd love to connect for leadership opportunities, speaking engagements, workshop
          facilitation, podcast appearances, coaching, mentoring, and startup advising — or to answer
          questions about navigating your design career.
        </p>
        <div className="btn-row">
          <a className="btn" href={`mailto:${SOCIAL.email}`}>
            Email me
          </a>
          <a className="btn btn--ghost" href={SOCIAL.linkedin} target="_blank" rel="noopener">
            Connect on LinkedIn
          </a>
        </div>
      </section>

      <section className="section wrap">
        <div className="contact-grid">
          <div className="contact-item">
            <div className="k">Location</div>
            <div className="v">{SOCIAL.location}</div>
          </div>
          <div className="contact-item">
            <div className="k">Email</div>
            <div className="v">
              <a href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="k">Phone</div>
            <div className="v">
              <a href={telHref}>{SOCIAL.phone}</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="k">Elsewhere</div>
            <div className="v">
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
