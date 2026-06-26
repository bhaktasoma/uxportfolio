import { Link } from "react-router-dom";
import Stats from "../components/Stats.jsx";
import TestimonialCarousel from "../components/TestimonialCarousel.jsx";
import { SOCIAL } from "../data/site.js";
import teamPhoto from "../assets/images/leadership/1_leadership.png";

const managingUpTestimonials = [
  {
    quote:
      "Soma is an outstanding collaborator who excels at bridging the gap between design and engineering. She challenges her team to think critically about delivering high-value customer outcomes while maintaining consistent, scalable design patterns.",
    name: "Sean Fuller",
    title: "Software Engineering Manager",
  },
  {
    quote:
      "Her team was highly collaborative in allowing cross-functional contributions to the design system while ensuring that any new components went through a strict governance process and could scale.",
    name: "Simon Lo",
    title: "Director, Product Design at ServiceNow",
  },
];

const buildingTeamsTestimonials = [
  {
    quote:
      "I asked her to take on building a company-wide design system and assume a people leadership role at the same time. She delivered Quix and inspired not just her direct reports, but the entire UX organization.",
    name: "Michael Kopcsak",
    title: "VP of Experience Design (XD), Gap Inc. · former manager at Equinix",
  },
  {
    quote:
      "She integrates design, research, and content into the product lifecycle, fostering a collaborative and innovative product trio mindset. Her strategic approach makes her an invaluable asset to any organization.",
    name: "Greg Martin",
    title: "Senior Manager, UX Content & Documentation, Automation Anywhere",
  },
];

const howILeadTestimonials = [
  {
    quote:
      "Working under her greatly elevated my abilities. Soma led by example, pushing the boundaries of design and making complex problems look easy. She knows how to put trust in her reports, but manages closely when necessary.",
    name: "Charles Andari",
    title: "UX, AWS · former direct report at Equinix",
  },
  {
    quote:
      "She builds strong relationships with product leaders across departments, fostering partnerships that enhance project success and alignment. Soma is dedicated to creating opportunities for growth and recognition within the organization.",
    name: "Richa Kulkarni",
    title: "Senior UX Designer · former direct report at Equinix",
  },
  {
    quote:
      "Soma is both a very considered design leader and a caring people manager. She always got to the most essential details when reviewing my work, deftly and without hesitation. She has a knack for getting to 'good' quickly, and is one of the most optimistic people I have ever met.",
    name: "Ryder Booth",
    title: "Experience Design · former direct report at Equinix",
  },
];

export default function Leadership() {
  return (
    <>
      <section className="hero hero--split wrap">
        <div className="hero-copy">
          <p className="eyebrow">Leadership philosophy</p>
          <h1>
            People-first, <em>purpose-driven</em>.
          </h1>
          <div className="flow mt-md">
            <p className="lead">
              I co-create the vision with my team instead of handing it down, and give people
              real ownership over how we get there. The clearest sign it's working is when
              someone on my team pushes back on my own idea, and turns out to be right.
            </p>
          </div>
          <div className="callout prose mt-lg">
            The best design happens when every voice has room to shape it. That's why I run a
            listening tour before I write a roadmap.
          </div>
        </div>
        <div className="hero-portrait">
          <img src={teamPhoto} alt="Soma Bhakta with the Quix design system team at Equinix" />
        </div>
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
              I mentor designers and researchers into leaders, give my team ownership over their
              work, and build trust through direct, honest communication. People who feel trusted
              do their best work.
            </p>
          </div>
          <div className="value">
            <span className="n">02</span>
            <h4>Purposeful work</h4>
            <p>
              I tie every design decision to a business outcome. If a project can't tell me which
              metric it's supposed to move, it isn't ready to start.
            </p>
          </div>
          <div className="value">
            <span className="n">03</span>
            <h4>Inclusion &amp; co-creation</h4>
            <p>
              I build teams with complementary skills, then treat design, PM, and engineering as
              one team, pulling customer feedback into every stage instead of saving it for a
              final review.
            </p>
          </div>
        </div>
        <div className="callout prose mt-lg">Listen. Learn. Align. Execute.</div>
        <div className="testimonial-spotlight mt-lg">
          <p className="eyebrow" style={{ textAlign: "center" }}>What it's like to work with me</p>
          <TestimonialCarousel items={howILeadTestimonials} />
        </div>
      </section>

      <section className="section wrap" aria-labelledby="proof-heading">
        <p className="eyebrow">Proven at scale</p>
        <h2 id="proof-heading" className="mt-sm">
          The track record behind the principles.
        </h2>
        <p className="mt-md prose">
          Every principle above is the operating system behind the same scope I describe on{" "}
          <Link to="/">my About page</Link>: structuring a design org into Strategic Research,
          Product Design, and Business Design verticals as a founding Head of UX, and leading UX
          strategy for a $160M cloud infrastructure portfolio as a Senior UX Design Manager.
        </p>
        <div className="mt-lg">
          <Stats
            items={[
              { num: "$160M", label: "Portfolio led at Equinix" },
              { num: "$30M", label: "Seed round shaped by my POCs" },
              { num: "12", label: "Design partners co-created with" },
              { num: "5×", label: "ARR growth driven at Harness" },
            ]}
          />
        </div>
      </section>

      <section className="section wrap" aria-labelledby="managing-up-heading">
        <div className="managing-up-grid">
          <div>
            <p className="eyebrow">Managing up and across</p>
            <h2 id="managing-up-heading" className="mt-sm">
              Leadership without direct authority.
            </h2>
            <div className="flow mt-md prose">
              <p>
                At Equinix, some of my most consequential leadership happened above and beside me
                on the org chart. Quix didn't get funded because I asked nicely, it got funded
                because I pitched SVPs, VPs, and Directors a business case before a single
                component shipped: projected ROI, a governance model their teams could adopt
                without bottlenecking on mine, and a rollout plan they could see their own
                roadmaps in. That sponsorship is the reason Quix landed at{" "}
                <strong className="text-accent">$1.5M in ROI within six months</strong>, adopted
                by <strong className="text-accent">50+ designers</strong> across{" "}
                <strong className="text-accent">10+ products</strong>: the budget and the buy-in
                arrived before the system did.
              </p>
              <p>
                That work was anchored in building a strong{" "}
                <strong className="text-accent">product trio culture</strong>,
                design, product, and engineering operating as equal partners rather than design
                executing someone else's brief. Getting that trio to function well across a
                matrix org, with leaders who didn't report to me, is the kind of influence that
                doesn't show up on an org chart but is exactly how cross-functional strategy
                actually gets done.
              </p>
              <p>
                That same managing-up muscle is what let me stand up Equinix's UX design system
                function from scratch in the first place, detailed in my{" "}
                <Link to="/case-studies/design-at-scale">Design at Scale</Link> case study.
              </p>
            </div>
          </div>
          <TestimonialCarousel items={managingUpTestimonials} />
        </div>
      </section>

      <section className="section wrap" aria-labelledby="building-heading">
        <div className="managing-up-grid">
          <div>
            <p className="eyebrow">Building teams, every way</p>
            <h2 id="building-heading" className="mt-sm">
              I hire for the stage the org is in.
            </h2>
            <div className="flow mt-md prose">
              <p>
                I've built teams that span <strong>research, design, and content</strong>, not
                just visual design, because a design org without research and content is half a
                function. That's included standing up an <strong>internship program</strong> and
                converting interns into full-time hires, and knowing when to bring in an{" "}
                <strong>agency, external studio, or contractor</strong> to flex budget without
                losing quality or momentum.
              </p>
              <p>
                I've hired across the full seniority arc, from early-career designers through
                senior, principal, and strategist-level talent, and I've played a pivotal role in
                hiring beyond design too: engineers, product managers, and other functional
                leaders who shaped the teams I worked alongside.
              </p>
            </div>
          </div>
          <TestimonialCarousel items={buildingTeamsTestimonials} />
        </div>
      </section>

      <section className="section wrap">
        <div className="prose">
          <p className="eyebrow">Let's talk</p>
          <h2 className="mt-sm">What's next for me.</h2>
          <p className="mt-md">
            I've built and scaled individual-contributor teams across disciplines, seniority
            levels, and hiring models, and led through influence across executive stakeholders I
            didn't manage. The next chapter I'm looking for is leading other people leaders,
            scaling a design org through managers, not just through me.
          </p>
        </div>

        <div className="btn-row mt-lg">
          <a className="btn" href={`mailto:${SOCIAL.email}`}>
            Let's talk leadership
          </a>
        </div>
      </section>
    </>
  );
}
