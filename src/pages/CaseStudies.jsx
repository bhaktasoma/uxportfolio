import { Link } from "react-router-dom";
import { cases } from "../data/cases.js";

export default function CaseStudies() {
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow">Selected work</p>
        <h1>
          Case <em>studies</em>.
        </h1>
        <p className="lead">
          Four stories of UX as a business driver, from founding products and design systems to
          reshaping how teams grow and how customers buy.
        </p>
      </section>

      <section className="section wrap">
        <div className="cards">
          {cases.map((c) => (
            <article className="card" key={c.slug}>
              <span className="year">
                {c.year} · {c.company} · {c.role}
              </span>
              <h3>{c.title}</h3>
              <p className="role">{c.summary}</p>
              <span className="go">
                Read case study <span className="arrow" aria-hidden="true">→</span>
              </span>
              <Link className="stretch" to={`/case-studies/${c.slug}`} aria-label={`Read: ${c.title}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
