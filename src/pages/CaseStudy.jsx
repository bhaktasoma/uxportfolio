import { useParams, Link, Navigate } from "react-router-dom";
import Stats from "../components/Stats.jsx";
import { cases, getCase } from "../data/cases.js";

function Block({ block }) {
  if (block.h2) return <h2>{block.h2}</h2>;
  if (block.h3) return <h3>{block.h3}</h3>;
  if (block.callout) return <div className="callout">{block.callout}</div>;
  if (block.ul)
    return (
      <ul>
        {block.ul.map((li, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: li }} />
        ))}
      </ul>
    );
  if (block.p) return <p dangerouslySetInnerHTML={{ __html: block.p }} />;
  return null;
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = getCase(slug);
  if (!study) return <Navigate to="/case-studies" replace />;

  const idx = cases.findIndex((c) => c.slug === slug);
  const next = cases[(idx + 1) % cases.length];

  return (
    <article>
      <section className="cs-hero wrap">
        <Link className="backlink" to="/case-studies">
          <span aria-hidden="true">←</span> All case studies
        </Link>
        <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
          {study.company} · {study.year}
        </p>
        <h1 className="mt-sm">{study.title}</h1>
        <p className="lead mt-md">{study.lead}</p>
        <div className="cs-meta">
          {study.meta.map(([k, v]) => (
            <span key={k}>
              <strong>{k}:</strong>&nbsp;{v}
            </span>
          ))}
        </div>
      </section>

      <section className="wrap">
        <Stats items={study.stats} />
      </section>

      <section className="section wrap cs-body">
        <div className="prose flow">
          {study.sections.map((block, i) => (
            <Block block={block} key={i} />
          ))}
        </div>

        <hr className="divider" />
        <Link className="backlink" to={`/case-studies/${next.slug}`}>
          Next: {next.title} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </article>
  );
}
