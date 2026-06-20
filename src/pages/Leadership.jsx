import { Link } from "react-router-dom";

export default function Leadership() {
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow">Leadership philosophy</p>
        <h1>
          People-first, <em>purpose-driven</em>.
        </h1>
        <p className="lead">
          I lead through partnership — co-creating a shared vision, empowering individuals, and
          nurturing a culture where everyone feels seen, heard, and valued. The best outcomes come
          from inclusive collaboration, clear intent, and user-centered focus.
        </p>
      </section>

      <section className="section wrap" aria-labelledby="principles-heading">
        <p className="eyebrow">Three guiding principles</p>
        <h2 id="principles-heading" className="mt-sm">
          How I lead
        </h2>
        <div className="grid-3 mt-lg">
          <div className="value">
            <span className="n">01</span>
            <h4>A people-centric approach</h4>
            <p>
              Effective leadership starts with genuine care and empathy. I mentor and develop
              high-performing UX professionals who can lead and inspire others, trust my team to own
              their work, and prioritize open communication and kindness to build trust for personal
              and collective growth.
            </p>
          </div>
          <div className="value">
            <span className="n">02</span>
            <h4>Purposeful work</h4>
            <p>
              I align individual roles with a larger mission. As a leader I advocate for
              customer-centric design rooted in real user needs, translating them into tangible
              business opportunities — because good design ultimately drives business success.
            </p>
          </div>
          <div className="value">
            <span className="n">03</span>
            <h4>Inclusion &amp; co-creation</h4>
            <p>
              A robust design ecosystem thrives on diversity and collaboration. I build diverse teams
              with complementary skills and backgrounds, and foster true collaboration among
              designers, PMs, and engineers — with customer feedback at every stage.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider wrap" />

      <section className="section wrap" aria-labelledby="teams-heading">
        <div className="prose">
          <p className="eyebrow">Leading inspired design teams</p>
          <h2 id="teams-heading" className="mt-sm">
            Cultivating where creativity thrives.
          </h2>
          <div className="flow mt-md">
            <p>
              Leading a design team goes beyond managing tasks and projects — it's about cultivating
              an environment where creativity thrives, empathy drives understanding, and innovation
              flourishes. I anchor team culture in five values: <em>Grow Together, Serve Others, Keep
              Your Promises, Open Your Mind &amp; Open Your Heart,</em> and <em>Build Bolder</em>.
            </p>
            <p>
              In early-stage organizations I prioritize hiring craft generalists who span multiple
              disciplines; as the organization matures, I tailor hires to specific functions.
              Operating within a matrix UX structure, we optimize resource allocation and foster
              cohesion that yields impactful results.
            </p>
          </div>
        </div>

        <div className="callout prose mt-lg">Listen. Learn. Align. Execute.</div>

        <div className="grid-3 mt-lg">
          <div className="value">
            <span className="n">→</span>
            <h4>Listening tour</h4>
            <p>
              Conversations across every organizational level to gather insights from diverse
              perspectives, then analyzing them to prioritize organizational, customer, and business
              challenges by significance and urgency.
            </p>
          </div>
          <div className="value">
            <span className="n">→</span>
            <h4>Organizational alignment</h4>
            <p>
              Understanding the product roadmap, business goals, and financials, then developing an
              ideal resourcing strategy — team size, skill sets, and phased implementation for
              systematic progress.
            </p>
          </div>
          <div className="value">
            <span className="n">→</span>
            <h4>Cross-functional DNA</h4>
            <p>
              Defining metrics for design operations, running envisioning workshops to refine
              strategic vision collaboratively, and fostering open problem-solving across departments.
            </p>
          </div>
        </div>

        <div className="flow prose mt-lg">
          <p>
            My approach to listening tours is best illustrated in my{" "}
            <Link to="/case-studies/design-at-scale">Design at Scale</Link> case study. Above all, I
            believe in building personal relationships within my team: encouraging inclusive
            collaboration, empowering ownership through collaborative goal-setting, supporting
            continuous development through mentorship, and celebrating contributions to reinforce a
            culture of belonging.
          </p>
          <p>
            By aligning design goals with organizational objectives and embracing shared values, we
            build resilient, innovative teams that not only meet but exceed user and business
            expectations. Together, we grow, serve, and build a brighter future.
          </p>
        </div>

        <div className="btn-row">
          <Link className="btn" to="/contact">
            Let's talk leadership
          </Link>
        </div>
      </section>
    </>
  );
}
