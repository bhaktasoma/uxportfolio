import { Link } from "react-router-dom";
import Stats from "../components/Stats.jsx";
import { cases } from "../data/cases.js";

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow">UX Design Leader · 15+ years</p>
        <h1>
          Hi, I'm Soma — an entrepreneurial, inclusive <em>design leader</em>.
        </h1>
        <p className="lead">
          I balance product thinking with user-centered design so every decision, big or small,
          creates meaningful impact for the business and the people it serves.
        </p>
        <div className="btn-row">
          <Link className="btn" to="/case-studies">
            View case studies
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="now-heading">
        <p className="eyebrow">What I'm doing now</p>
        <h2 id="now-heading" className="prose mt-sm">
          Leading UX for Equinix's Cloud&nbsp;Edge Infrastructure business.
        </h2>
        <div className="flow prose mt-md">
          <p>
            I built the UX function from the ground up, launched new products, and founded a
            company-wide design system that delivered{" "}
            <strong className="text-accent">$1.5M in ROI within six months</strong>. My global team
            of 10 specialists spans product design, research, and content strategy.
          </p>
          <p>
            Over 15 years in UX, I've worked across startups and Fortune 500 companies — shaping
            products and design teams alongside incredible talent.
          </p>
        </div>

        <div className="mt-lg">
          <Stats
            items={[
              { num: "$1.5M", label: "Design-system ROI in 6 months" },
              { num: "15+", label: "Years leading UX" },
              { num: "10", label: "UX specialists led globally" },
              { num: "4", label: "0→1 products shipped" },
            ]}
          />
        </div>
      </section>

      <section className="section wrap" aria-labelledby="work-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-heading" className="mt-sm">
          Case studies
        </h2>
        <div className="cards mt-lg">
          {cases.map((c) => (
            <article className="card" key={c.slug}>
              <span className="year">
                {c.year} · {c.company}
              </span>
              <h3>{c.title}</h3>
              <p className="role">{c.cardRole}</p>
              <span className="go">
                Read case study <span className="arrow" aria-hidden="true">→</span>
              </span>
              <Link className="stretch" to={`/case-studies/${c.slug}`} aria-label={`Read: ${c.title}`} />
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap" aria-labelledby="cta-heading">
        <div className="prose">
          <p className="eyebrow">Let's build together</p>
          <h2 id="cta-heading" className="mt-sm">
            What excites me most is collaboration.
          </h2>
          <p className="mt-md">
            Bringing diverse teams together to solve complex problems and uncover potential in
            products, people, and processes. It's not just about what we build, but how we build it
            together — that's where the magic happens.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/contact">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
