import { Link } from "react-router-dom";
import { SOCIAL } from "../data/site.js";
import profilePhoto from "../assets/images/profile.jpg";

// Leadership-track roles, shown as featured cards.
const leadership = [
  {
    period: "2025 — Present",
    role: "Head of UX",
    companies: [{ name: "Cybersecurity Startup (stealth mode)" }],
    summary:
      "Built the design function from the ground up and am leading UX strategy for a new AI-powered, mathematically rigorous Cyber Defense Management Platform from 0 to 1. Co-created POCs with 12 design partners to shape the investor-facing product narrative behind our eight-figure seed round, hired and ramped a 4-designer team to run parallel POC tracks, and embedded AI into the design-to-dev workflow (tokenized design system, MCP server, Figma/GitHub/Claude integration) to boost team efficiency. Though still seed-stage and in stealth, we're on track to hit a seven-figure ARR target this year.",
    teamBuildingLink: true,
    caseStudySlug: "cyber-defense-platform",
    also: {
      role: "Adjunct Professor (seasonal)",
      companies: [
        { name: "UCSC Silicon Valley Extension", url: "https://www.ucsc-extension.edu/silicon-valley" },
        { name: "Baskin Engineering", url: "https://www.soe.ucsc.edu/" },
      ],
      summary:
        "Also teaching Collaborative Design: Enhancing UX with AI at UCSC Silicon Valley Extension, and mentoring MS HCI students at Baskin Engineering since Oct 2024.",
    },
  },
  {
    period: "2020 — 2024",
    role: "Head of UX Design & Research, Cloud Edge",
    companies: [{ name: "Equinix", url: "https://www.equinix.com/" }],
    summary:
      "Led UX strategy for a $160M Cloud Edge Infrastructure portfolio, scaled a global team of 10, and founded Quix, Equinix's company-wide design system ($1.5M ROI in six months).",
    teamBuildingLink: true,
    caseStudySlug: "design-at-scale",
  },
  {
    period: "2019 — 2020",
    role: "Founding UX Leader",
    companies: [{ name: "Harness", url: "https://www.harness.io/" }],
    summary:
      "First UX hire, reporting to the CTO. Bootstrapped the UX function during a stretch of 5× company-wide ARR growth, launching Cloud Cost Management to GA with 70+ customers in six months.",
    caseStudySlug: "cloud-cost",
  },
];

// Earlier individual-contributor roles, bundled as prior experience.
const priorExperience = {
  period: "2010 — 2019",
  summary:
    "Led UX across Veritas, McAfee, Vera, and 8x8, driving 30% adoption growth and a 40% Series A-to-B funding lift at Vera, and a 35% efficiency gain with +25 NPS at 8x8. Earlier, I built BaseHealth's UX function from seed to Series C, plus research roles at Samsung UX Lab and NetApp.",
};

export default function Home() {
  return (
    <>
      <section className="hero hero--split wrap">
        <div className="hero-copy">
          <p className="eyebrow">Head of UX · Cybersecurity · 15+ years</p>
          <h1>
            Hi! I'm Soma, an entrepreneurial, driven, and inclusive <em>design leader</em>.
          </h1>
          <div className="flow mt-md">
            <p className="lead">
              I'm currently Head of UX at a cybersecurity startup, where I built the design function
              from the ground up and am leading a new <strong className="text-accent">AI-powered
              security product</strong> from 0 to 1.
            </p>
            <p className="lead">
              Before that, I led UX strategy for{" "}
              <strong className="text-accent">Equinix's $160M Cloud Edge Infrastructure portfolio</strong>,
              scaling a global team of 10 and founding Quix, the company's design system, which
              delivered $1.5M in ROI within six months and was adopted by 50+ designers.
            </p>
            <p className="lead">
              Over 15 years in UX, I've worked across startups and Fortune 500 companies, including
              Harness, where I was founding UX hire during a stretch of{" "}
              <strong className="text-accent">5× company-wide ARR growth</strong>, embedding Lean UX
              and Design Thinking into Enterprise SaaS, Cloud, DevSecOps, and AI/ML products.
            </p>
          </div>
          <div className="btn-row mt-lg">
            <Link className="btn" to="/case-studies">
              View case studies
            </Link>
            <a className="btn btn--ghost" href={`mailto:${SOCIAL.email}`}>
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src={profilePhoto} alt="Soma Bhakta standing on a forest bridge" />
        </div>
      </section>

      <section className="section wrap" aria-labelledby="journey-heading">
        <p className="eyebrow">My journey</p>
        <h2 id="journey-heading" className="mt-sm">
          15+ years building and leading UX teams.
        </h2>
        <ol className="timeline mt-lg">
          {leadership.map((step) => (
            <li className="timeline-item timeline-item--featured" key={step.period}>
              <span className="timeline-period">{step.period}</span>
              <h4>
                {step.role}{" "}
                <span className="timeline-company">
                  ·{" "}
                  {step.companies.map((c, i) => (
                    <span key={c.name}>
                      {i > 0 && ", "}
                      {c.name}
                      {c.url && (
                        <a
                          className="timeline-link"
                          href={c.url}
                          target="_blank"
                          rel="noopener"
                          aria-label={`${c.name} website`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                            <path d="M7 17 17 7M9 7h8v8" />
                          </svg>
                        </a>
                      )}
                    </span>
                  ))}
                </span>
              </h4>
              <p>{step.summary}</p>
              {(step.caseStudySlug || step.teamBuildingLink) && (
                <p className="timeline-meta-links">
                  {step.caseStudySlug && (
                    <Link to={`/case-studies/${step.caseStudySlug}`}>View case study →</Link>
                  )}
                  {step.teamBuildingLink && (
                    <Link to="/leadership">How I build teams →</Link>
                  )}
                </p>
              )}
              {step.also && (
                <p className="timeline-also">
                  <strong>{step.also.role}</strong>
                  {" · "}
                  {step.also.companies.map((c, i) => (
                    <span key={c.name}>
                      {i > 0 && ", "}
                      {c.name}
                      {c.url && (
                        <a
                          className="timeline-link"
                          href={c.url}
                          target="_blank"
                          rel="noopener"
                          aria-label={`${c.name} website`}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                            <path d="M7 17 17 7M9 7h8v8" />
                          </svg>
                        </a>
                      )}
                    </span>
                  ))}
                  {" — "}
                  {step.also.summary}
                </p>
              )}
            </li>
          ))}

          <li className="timeline-item">
            <span className="timeline-period">{priorExperience.period}</span>
            <h4>Prior Experience</h4>
            <p>{priorExperience.summary}</p>
          </li>
        </ol>
      </section>

      <section className="section wrap" aria-labelledby="orgs-heading">
        <p className="eyebrow">How I build orgs</p>
        <h2 id="orgs-heading" className="mt-sm">
          Org design scales with the business, not before it.
        </h2>
        <p className="mt-md prose">
          In early-stage orgs I hire craft generalists who can cover multiple disciplines; as the
          team matures, I tailor hires to specific functions and move to a matrix structure to
          optimize resourcing. Every org decision starts from the product roadmap and financials,
          not headcount targets, so team size, skill mix, and rollout are phased to where the
          business actually is.
        </p>
        <div className="mt-md">
          <Link to="/leadership">Read my full leadership philosophy →</Link>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="testimonials-heading">
        <p className="eyebrow">What people say</p>
        <h2 id="testimonials-heading" className="mt-sm">
          From the people I've worked with.
        </h2>
        <div className="grid-2 mt-lg">
          <blockquote className="testimonial">
            <p>
              "Soma is a gifted leader who fosters collaboration and innovation within global,
              diverse, cross-functional teams. Her influence extended beyond individual projects,
              embedding a culture of design thinking across the organization and elevating our
              design maturity."
            </p>
            <cite>
              Rajah Kalipatnapu
              <span>Google · AI &amp; Cloud Executive, Board Advisor</span>
            </cite>
          </blockquote>
          <blockquote className="testimonial">
            <p>
              "Soma is a transformative design leader who brings clarity, cohesion, and strategy to
              every challenge. Above all, she is a people-first leader who uplifts her team, fosters
              collaboration, and ensures UX has a visible, valued voice across the organization."
            </p>
            <cite>
              Keith Fafel
              <span>VP, Product at WP Engine</span>
            </cite>
          </blockquote>
          <blockquote className="testimonial">
            <p>
              "She has both a relentless focus on what users really need AND an uncanny ability to
              look at problems from angles no one else on the product team can see, incredibly
              effective for delivering value to customers and the business."
            </p>
            <cite>
              Stephen Wolf
              <span>Empathic Leader · Strategic Listener</span>
            </cite>
          </blockquote>
        </div>
        <div className="mt-md">
          <a href="https://www.linkedin.com/in/somabhakta/" target="_blank" rel="noopener">
            Read more recommendations on LinkedIn →
          </a>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="closing-heading">
        <div className="prose">
          <p className="eyebrow">What drives me</p>
          <h2 id="closing-heading" className="mt-sm">
            Collaboration is where the magic happens.
          </h2>
          <p className="mt-md">
            What excites me most is collaboration, bringing diverse teams together to solve complex
            problems and uncover potential in products, people, and processes. For me, UX leadership
            is about fostering creativity, driving innovation, and creating environments where ideas
            flourish and teams thrive. It's not just about what we build but how we build it
            together, that's where the magic happens.
          </p>
          <div className="btn-row mt-lg">
            <a className="btn" href={`mailto:${SOCIAL.email}`}>
              Let's talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
