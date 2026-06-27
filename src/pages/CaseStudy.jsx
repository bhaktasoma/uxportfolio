import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Stats from "../components/Stats.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import { cases, getCase } from "../data/cases.js";
import TeamBuildingDiagram from "../components/diagrams/TeamBuildingDiagram.jsx";
import AIWorkflowDiagram from "../components/diagrams/AIWorkflowDiagram.jsx";

const DIAGRAMS = {
  "team-building": TeamBuildingDiagram,
  "ai-workflow": AIWorkflowDiagram,
};

function Block({ block }) {
  if (block.h2) return <h2>{block.h2}</h2>;
  if (block.h3) return <h3>{block.h3}</h3>;
  if (block.callout) return <div className="callout">{block.callout}</div>;
  if (block.note)
    return (
      <p className="cs-note">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 7.2v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="8" cy="4.9" r=".9" fill="currentColor" />
        </svg>
        <span>{block.note}</span>
      </p>
    );
  if (block.ul)
    return (
      <ul>
        {block.ul.map((li, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: li }} />
        ))}
      </ul>
    );
  if (block.p) return <p dangerouslySetInnerHTML={{ __html: block.p }} />;
  if (block.quote)
    return (
      <blockquote className="cs-quote">
        <p dangerouslySetInnerHTML={{ __html: block.quote }} />
        <cite>
          {block.quoteName}
          {block.quoteRole && <span>{block.quoteRole}</span>}
        </cite>
      </blockquote>
    );
  return null;
}

function Feature({ feature }) {
  const Diagram = DIAGRAMS[feature.diagram];
  return (
    <>
      <div className="prose flow">
        <h2>{feature.h2}</h2>
        <p dangerouslySetInnerHTML={{ __html: feature.p }} />
        {feature.p2 && <p dangerouslySetInnerHTML={{ __html: feature.p2 }} />}
      </div>
      <figure className="cs-diagram">
        {Diagram && <Diagram />}
        {feature.caption && <figcaption>{feature.caption}</figcaption>}
      </figure>
    </>
  );
}

function Lightbox({ lightbox, onClose, onNavigate }) {
  if (!lightbox) return null;
  const { items, index } = lightbox;
  const item = items[index];
  const hasMultiple = items.length > 1;

  const prev = (e) => {
    e.stopPropagation();
    onNavigate((index - 1 + items.length) % items.length);
  };
  const next = (e) => {
    e.stopPropagation();
    onNavigate((index + 1) % items.length);
  };
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev(e);
    else if (e.key === "ArrowRight") next(e);
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      {hasMultiple && (
        <button className="lightbox-arrow lightbox-arrow--prev" aria-label="Previous image" onClick={prev}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18 9 12l6-6" />
          </svg>
        </button>
      )}
      <img src={item.src} alt={item.alt} onClick={(e) => e.stopPropagation()} />
      {hasMultiple && (
        <button className="lightbox-arrow lightbox-arrow--next" aria-label="Next image" onClick={next}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
      {hasMultiple && (
        <div className="lightbox-dots" onClick={(e) => e.stopPropagation()}>
          {items.map((it, i) => (
            <button
              key={it.alt || i}
              className={`carousel-dot${i === index ? " is-active" : ""}`}
              aria-label={`Show image ${i + 1}`}
              onClick={() => onNavigate(i)}
            >
              <span className="carousel-dot-mark" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Group consecutive plain blocks into prose runs, keeping feature blocks (diagram + intro) standalone
// so diagrams can break out wider than the text column, Medium-article style.
function groupSections(sections) {
  const groups = [];
  for (const block of sections) {
    if (block.feature) {
      groups.push({ type: "feature", feature: block.feature });
    } else if (block.image) {
      groups.push({ type: "image", image: block });
    } else if (block.imagePair) {
      groups.push({ type: "imagePair", pair: block });
    } else if (block.atGlance) {
      groups.push({ type: "atGlance", atGlance: block.atGlance });
    } else if (block.compare) {
      groups.push({ type: "compare", compare: block.compare });
    } else if (block.video) {
      groups.push({ type: "video", video: block });
    } else if (block.carousel) {
      groups.push({ type: "carousel", carousel: block.carousel });
    } else {
      const last = groups[groups.length - 1];
      if (last && last.type === "prose") last.blocks.push(block);
      else groups.push({ type: "prose", blocks: [block] });
    }
  }
  return groups;
}

export default function CaseStudy() {
  const { slug } = useParams();
  const [lightbox, setLightbox] = useState(null);

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
        {groupSections(study.sections).map((group, i) =>
          group.type === "feature" ? (
            <Feature feature={group.feature} key={i} />
          ) : group.type === "atGlance" ? (
            <div className="grid-3 mt-lg cs-at-glance" key={i}>
              {group.atGlance.map((item, j) => (
                <div className="value" key={j}>
                  <span className="n">{item.n}</span>
                  <h4>{item.title}</h4>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
          ) : group.type === "compare" ? (
            <figure className="cs-compare" key={i}>
              <table>
                <thead>
                  <tr>
                    <th>{group.compare.label || ""}</th>
                    {group.compare.cols.map((col, c) => (
                      <th key={c}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {group.compare.rows.map((row, r) => (
                    <tr key={r}>
                      <td>{row[0]}</td>
                      {row.slice(1).map((cell, c) => (
                        <td key={c}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {group.compare.caption && <figcaption>{group.compare.caption}</figcaption>}
            </figure>
          ) : group.type === "carousel" ? (
            <div className={`cs-gallery${group.carousel.full !== false ? " cs-gallery--full" : ""}`} key={i}>
              {group.carousel.heading && <h3>{group.carousel.heading}</h3>}
              <ImageCarousel
                items={group.carousel.items}
                onImageClick={(item, idx) =>
                  setLightbox({
                    items: group.carousel.items.map((it) => ({ src: it.src, alt: it.alt || "" })),
                    index: idx,
                  })
                }
              />
            </div>
          ) : group.type === "image" ? (
            <figure className={`cs-diagram${group.image.compact ? " cs-diagram--compact" : ""}`} key={i}>
              <button
                className={`cs-diagram-zoom${group.image.compact ? "" : " cs-diagram-zoom--full"}${group.image.large ? " cs-diagram-zoom--lg" : ""}`}
                style={group.image.maxWidth ? { maxWidth: group.image.maxWidth } : undefined}
                onClick={() => setLightbox({ items: [{ src: group.image.image, alt: group.image.alt || "" }], index: 0 })}
                aria-label="View full size"
              >
                <img src={group.image.image} alt={group.image.alt || ""} />
              </button>
              {group.image.caption && <figcaption>{group.image.caption}</figcaption>}
            </figure>
          ) : group.type === "imagePair" ? (
            <figure className="cs-diagram cs-diagram--pair" key={i}>
              <div className={`cs-diagram-pair-row${group.pair.stack ? " cs-diagram-pair-row--stack" : ""}`}>
                {group.pair.imagePair.map((item, j) => (
                  <div className="cs-diagram-pair-item" key={j}>
                    <button
                      className="cs-diagram-zoom"
                      onClick={() =>
                        setLightbox({
                          items: group.pair.imagePair.map((p) => ({ src: p.image, alt: p.alt || "" })),
                          index: j,
                        })
                      }
                      aria-label="View full size"
                    >
                      <img src={item.image} alt={item.alt || ""} />
                    </button>
                    {item.caption && <figcaption>{item.caption}</figcaption>}
                  </div>
                ))}
              </div>
              {group.pair.caption && <figcaption>{group.pair.caption}</figcaption>}
            </figure>
          ) : group.type === "video" ? (
            <figure className="cs-diagram cs-video" key={i}>
              <div className="cs-video-frame">
                <iframe
                  src={group.video.video}
                  title={group.video.caption || "Video"}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              {group.video.caption && <figcaption>{group.video.caption}</figcaption>}
            </figure>
          ) : (
            <div className="prose flow" key={i}>
              {group.blocks.map((block, j) => (
                <Block block={block} key={j} />
              ))}
            </div>
          )
        )}

        {study.gallery && (
          <div className="cs-gallery mt-lg">
            {study.gallery.heading && <h2>{study.gallery.heading}</h2>}
            {study.gallery.intro && <p className="prose">{study.gallery.intro}</p>}
            <ImageCarousel
              items={study.gallery.items}
              onImageClick={(item, idx) =>
                setLightbox({
                  items: study.gallery.items.map((it) => ({ src: it.src, alt: it.alt || "" })),
                  index: idx,
                })
              }
            />
          </div>
        )}

        <Link className="backlink mt-lg" to={`/case-studies/${next.slug}`}>
          Next: {next.title} <span aria-hidden="true">→</span>
        </Link>
      </section>

      <Lightbox
        lightbox={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={(newIndex) => setLightbox((lb) => ({ ...lb, index: newIndex }))}
      />
    </article>
  );
}
