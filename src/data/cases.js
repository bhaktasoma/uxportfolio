// Case study content. `summary` is used on cards; `sections` renders the detail page.
// Block types: { h2 }, { h3 }, { p }  (p/li strings may contain <strong>, <em>, <a>),
//              { ul: [...] }, { callout },
//              { feature: { h2, p, diagram, caption } } — intro text followed by a full-width diagram.
//              { image, alt, caption } — standalone full-width image.

import awsWasteBanner from "../assets/images/CE/1_ce.png";
import relativityQuote from "../assets/images/CE/41_ce.png";
import quixCover from "../assets/images/quix/cover_quix.jpeg";
import quixCost from "../assets/images/quix/1_quix.png";
import quixBuildBuy from "../assets/images/quix/5_quix.png";
import quixModels from "../assets/images/quix/7_quix.png";
import quixHats from "../assets/images/quix/9_quix.png";
import quixGovernance from "../assets/images/quix/12_quix.png";
import quixRelay from "../assets/images/quix/14_quix.png";
import quixMetrics from "../assets/images/quix/21_quix.png";
import quixROI from "../assets/images/quix/22_quix.png";
import quixWorkshop from "../assets/images/quix/16_quix.png";
import quixRetro from "../assets/images/quix/17_quix.png";
import quixGalleryHero from "../assets/images/quix/components/23_component.png";
import quixGalleryLogo from "../assets/images/quix/components/01_component.png";
import quixGalleryColors from "../assets/images/quix/components/02_component.png";
import quixGalleryTokens from "../assets/images/quix/components/04_component.png";
import quixGalleryToggle from "../assets/images/quix/components/05_component.png";
import quixGallerySelect from "../assets/images/quix/components/06_component.png";
import quixGalleryPhone from "../assets/images/quix/components/10_component.png";
import quixGalleryCard from "../assets/images/quix/components/12_component.png";
import quixGalleryBadge from "../assets/images/quix/components/17_component.png";
import quixGalleryBreadcrumbs from "../assets/images/quix/components/15_component.png";

export const cases = [
  {
    slug: "cyber-defense-platform",
    year: "2025",
    company: "Cybersecurity Startup (stealth mode)",
    role: "Head of UX (Founding)",
    title: "Building UX From 0→1 for an AI-Powered Cyber Defense Platform",
    summary:
      "Founding Head of UX at a stealth cybersecurity startup, co-created investor-facing POCs that helped secure a $30M seed round, built a 4-designer team, and embedded AI into the design-to-dev workflow.",
    cardRole: "Head of UX (Founding), helped secure a $30M seed round.",
    lead:
      "As the founding Head of UX at a stealth-mode cybersecurity startup, I'm building the design function from scratch, shaping the product narrative that helped close a $30M seed round, and embedding AI into how my team designs and ships.",
    meta: [
      ["Role", "Head of UX (Founding)"],
      ["Focus", "0→1 product strategy, AI-augmented design ops"],
      ["Stage", "Seed, stealth mode"],
      ["Company", "80+ employees globally"],
    ],
    stats: [
      { num: "$30M", label: "Seed round shaped by investor-facing POCs" },
      { num: "12", label: "Design partners co-creating POCs" },
      { num: "4", label: "Designers hired to run parallel tracks" },
      { num: "$1M", label: "ARR targeted this year" },
    ],
    sections: [
      { h2: "At a glance" },
      { p: "We're building an AI-powered, mathematically rigorous Cyber Defense Management Platform, still in stealth and seed-stage, moving with the urgency of a company that already has a category to defend. I joined pre-product as the founding Head of UX, with a mandate to build the design function from the ground up and make UX a driver of both the product and the fundraising story." },
      { callout: "I'm light on screens and company specifics in this write-up since we're still in stealth, but the process, the decisions, and the numbers below are exactly how it played out." },
      {
        atGlance: [
          {
            n: "Challenge",
            title: "Pre-product, no design org, three different buyers",
            p: "I joined before a single screen shipped, with a mandate to build the design function from zero and make UX double as the fundraising story, for CISOs, NetSec engineers, and InfoSec teams who all read the same threat data differently.",
          },
          {
            n: "Approach",
            title: "Co-create with design partners, then automate the win",
            p: "I pressure-tested every concept against 12 real design partners' workflows, hired a 4-designer team fast enough to run those tracks in parallel, and built a tokenized design system that let the product trio prototype and ship at sprint speed without losing quality.",
          },
          {
            n: "Impact",
            title: "A seed round closed, an org and company built to outlast it",
            p: "Those investor-facing POCs directly contributed to closing our $30M seed round. The company has since grown to 80+ employees globally, and the three-vertical design org I built has the platform on track to hit $1M ARR this year.",
          },
        ],
      },
      { h2: "The opportunity" },
      { p: "Cyber defense tooling has historically traded usability for rigor; security teams accept clunky workflows because the alternative is worse coverage. Our bet was that a rigorous platform didn't have to be hard to use, and that UX could be a differentiator CISOs and investors would all notice." },
      { p: "We tested that bet before we had a sales team or a GA product. I co-created proof-of-concepts with <strong>12 design partners</strong>, pressure-testing our earliest concepts against their real workflows and threat models. Those POCs became the centerpiece of our investor narrative and were a direct contributor to closing our <strong>$30M seed round</strong>." },
      { h2: "Who we're designing for" },
      { p: "Our design partners spanned the security org chart end to end: <strong>CISOs</strong> who needed board-ready risk posture, <strong>NetSec engineers</strong> configuring defenses, and <strong>InfoSec teams</strong> owning compliance. Three different relationships with the same threat data, which is exactly why research had to lead every POC, not follow it." },
      { h2: "Building the team" },
      { p: "Running 12 design-partner POCs in parallel with no existing design org meant hiring had to happen fast and well. I hired and ramped a <strong>4-designer team</strong> early, splitting ownership across POC tracks so each partner relationship had a dedicated point of contact, while I kept the product narrative, design principles, and quality bar consistent across all four." },
      {
        feature: {
          h2: "Maturing the design function: three verticals",
          p: "A founding design hire who only ships screens caps the function's value early. As we've grown, I've structured the design org into three verticals so it matures alongside the business, not after it: <strong>Strategic Research</strong>, grounded in our CISO, NetSec, and InfoSec partners plus ongoing market and competitive analysis, <strong>Product Design</strong>, running the 0→1 POC tracks, and <strong>Business Design</strong>, where the design team partners with the CEO and Sales to lead brand strategy, sales decks, and the investor pitch itself, treating go-to-market storytelling as a design problem, not a marketing afterthought.",
          p2: "Business Design is also where I'm building a different muscle in my designers: not just craft, but the judgment to connect a user problem or a market gap to a real business case. I expect this vertical to grow into a dedicated GTM and PLG design practice as we scale.",
          diagram: "team-building",
          caption: "Three verticals, one design function, converging into the seed round and this year's ARR target.",
        },
      },
      {
        feature: {
          h2: "Embedding AI into the design-to-dev workflow",
          p: "Our design thinking workshops didn't stop at static mockups. With the product trio, design, PM, and engineering, we built interactive HTML prototypes wired to real data and walked our design partners through them live. Their reactions became the next agile sprint's backlog instead of a research readout nobody reads, and the patterns that held up got automated straight into the platform.",
          diagram: "ai-workflow",
          caption: "Design thinking workshop prototypes get validated with design partners, then flow into a tokenized atomic design system that moves with code in both directions before shipping.",
        },
      },
      { p: "That speed only holds up if design and code stay in sync both ways. I led and inspired the team to build a <strong>tokenized atomic design system</strong> and deployed it through an <strong>MCP server</strong> connected to Figma, GitHub, Claude, and VS Code, so a token change shows up in code automatically, and a component built in code can be pulled back into Figma without anyone redrawing it by hand. That loop is what let the product trio prototype and validate at sprint speed without trading away the quality bar once things actually shipped to production." },
      { h2: "Early traction" },
      { p: "We're still seed-stage and in stealth, but we're on track to hit <strong>$1M ARR</strong> this year, and the company has grown past <strong>80 employees globally</strong> since that seed round closed, early validation that design-partner-led UX and a rigorous platform compound rather than compete." },
      { h2: "What I'm learning" },
      { p: "This is my fourth time building a design function from zero, after Harness, BaseHealth, and the early UX work at Equinix's Cloud Edge business, and the same lesson holds every time: at this stage, UX's job isn't just the product, it's the story. The POCs that convinced design partners to commit their time are the same artifacts that convinced investors to commit their capital." },
    ],
  },

  {
    slug: "cloud-cost",
    year: "2020",
    company: "Harness",
    role: "Founding UX Leader",
    title: "Harnessing UX to Solve Cloud Cost Challenges",
    summary:
      "Took Cloud Cost Management from idea to GA in six months with a Lean UX, co-creation model, 85% CSAT, 92% task success, 70 customers by launch.",
    cardRole: "Founding UX Leader, idea to GA in six months, 85% CSAT.",
    lead:
      "As the first UX hire at Harness, I took Cloud Cost Management from idea to general availability in six months, defining a new category and proving UX could drive product strategy.",
    meta: [
      ["Role", "Founding UX Leader"],
      ["Focus", "Product strategy, research, data viz"],
      ["Method", "Lean UX & customer co-creation"],
    ],
    stats: [
      { num: "85%", label: "Customer satisfaction (NPS & usability)" },
      { num: "92%", label: "Task success in cost workflows" },
      { num: "3×", label: "Engagement in first two quarters" },
      { num: "70", label: "Customers by GA" },
    ],
    sections: [
      { h2: "Summary" },
      { p: "Cloud Cost Management (CCM) gave DevOps and FinOps teams granular visibility into cloud spending, actionable optimization insights, and automated governance to control costs, tracking real-time spend across AWS, GCP, and Azure without disrupting engineering workflows." },
      { p: "I led the UX strategy end to end. Using Lean UX, I defined the product design strategy, built a 25-customer co-creation panel, and partnered closely with the CTO, CEO, product, engineering, and sales teams to secure executive buy-in for a UX-driven approach. It became a key differentiator for Harness in DevOps." },
      { h2: "The problem" },
      { p: "As deployment responsibility “shifted left” to engineering teams on self-service CD platforms, developer velocity went up, and so did cloud spending. At AWS re:Invent 2019, the AWS Cloud Economics team noted that <strong>35% of cloud spend is waste</strong>. Meanwhile finance teams were invoiced every 30 days with no context for why costs rose, and when a CFO asked why, it typically took another 30 days, or never, for developers to investigate." },
      { callout: "Cloud consumers are 100% reactive to the teams who actually see the cost data. The people creating the spend can't see it." },
      { h2: "The process" },
      { p: "I took a high-level brief from the CTO and partnered with subject-matter experts on discovery. I introduced the <strong>Lean UX Canvas</strong> to define the early roadmap, built a Vision Deck, and socialized the concept across the org to build momentum." },
      { h3: "Customer-centric innovation" },
      { p: "Understanding that cost visibility was the major gap, I built a 25-customer panel and stood up Harness's first co-creation initiative. Deep research, competitive analysis, and usability studies surfaced clear pain points:" },
      { ul: [
        "Executives needed a single pane of glass across teams.",
        "Developers wanted granular insight per workload, environment, and customer.",
        "Finance lacked real-time visibility, leading to billing surprises every 30 days.",
        "Users wanted automated cost allocation without tagging overhead.",
        "Kubernetes cost tracking was a major, unsolved challenge.",
      ] },
      { h2: "Designing for the developer's context" },
      { p: "The first design challenge was understanding how developers think about cost data, then mapping that into a simple, one-page cost-exploration tool. I leaned on context mapping, persona assessment, competitive analysis, concept modeling, and data-visualization exploration." },
      { p: "Cloud providers reported costs daily or monthly, but developers needed <strong>hourly granularity</strong>, aggregation averaged out the spikes that signal inefficiency. For Kubernetes and ECS, I worked with SMEs to break total cost into utilized, idle, and unallocated spend across clusters, namespaces, workloads, and pods, so engineers could right-size proactively and find “zombie” workloads." },
      { p: "I also gave engineers situational awareness by correlating cloud events, deployments, manifest changes, autoscaling, with cost spikes, so a Kubernetes replica change from 2 to 3 became visible as a cost driver." },
      { h2: "Validating with users" },
      { p: "Across several rounds of design critique and task-based usability testing on a medium-fidelity prototype, I learned that users were lost in breadcrumbs, tabs, and filters; wanted to compare cost across namespaces and clusters; and struggled to find the “Group by” control. In response I flattened the information architecture, surfaced grouping options as visible tabs, moved filter parameters into a dropdown, and translated “single pane of glass” into a true one-page explorer." },
      { h2: "Impact: UX as a business driver" },
      { p: "By leveraging Lean UX, research-driven design, and a co-creation model, I helped establish CCM as a strategic differentiator, empowering engineering, finance, and DevOps with the visibility and control they needed." },
      { ul: [
        "<strong>85%</strong> customer satisfaction (NPS & usability feedback)",
        "<strong>92%</strong> task success rate in cost tracking & optimization",
        "<strong>60%</strong> improvement in cost allocation and savings for users",
        "<strong>3×</strong> increase in engagement in the first two quarters",
        "<strong>70 customers</strong> by GA, validating strong market demand",
      ] },
      { p: "One customer, Relativity, reduced cloud spend by 30–40% on a new microservice within 30 days, six-figure annualized savings, with 10–15 more microservices to onboard." },
      { h2: "What I learned" },
      { p: "Great UX isn't just design; it's a catalyst for product strategy and business success. User research shaped the right product. Data needed a story to become actionable. Cross-functional alignment created a seamless experience, and a frictionless onboarding 3×'d adoption. Most of all: real impact happens when you listen, adapt, and refine, turning a good product into a great one." },
    ],
  },

  {
    slug: "cloud-cost-v2",
    year: "2020",
    company: "Harness",
    role: "Founding UX Leader",
    title: "Democratizing Cloud Cost Visibility (v2 draft)",
    summary:
      "Took Cloud Cost Management from idea to GA in six months with a Lean UX, co-creation model, 85% CSAT, 92% task success, 70 customers by launch.",
    cardRole: "Founding UX Leader, idea to GA in six months, 85% CSAT.",
    lead:
      "As the first UX hire at Harness, I took Cloud Cost Management from idea to general availability in six months, defining a new category and proving UX could drive product strategy.",
    meta: [
      ["Role", "Founding UX Leader"],
      ["Focus", "Product strategy, research, data viz"],
      ["Method", "Lean UX & customer co-creation"],
    ],
    stats: [
      { num: "85%", label: "Customer satisfaction (NPS & usability)" },
      { num: "92%", label: "Task success in cost workflows" },
      { num: "3×", label: "Engagement in first two quarters" },
      { num: "70", label: "Customers by GA" },
    ],
    sections: [
      { h2: "Summary" },
      { p: "Cloud Cost Management (CCM) gave DevOps and FinOps teams granular visibility into cloud spending, actionable optimization insights, and automated governance to control costs, tracking real-time spend across AWS, GCP, and Azure without disrupting engineering workflows." },
      { p: "I led the UX strategy end to end. Using Lean UX, I defined the product design strategy, built a 25-customer co-creation panel, and partnered closely with the CTO, CEO, product, engineering, and sales teams to secure executive buy-in for a UX-driven approach. It became a key differentiator for Harness in DevOps." },
      { h2: "The problem" },
      { p: "As deployment responsibility “shifted left” to engineering teams on self-service CD platforms, developer velocity went up, and so did cloud spending. Finance teams were invoiced every 30 days with no context for why costs rose, and when a CFO asked why, it typically took another 30 days, or never, for developers to investigate." },
      {
        image: awsWasteBanner,
        alt: "AWS re:Invent 2019 session quoting the AWS Cloud Economics team: 35% of cloud spend is waste",
        caption: "AWS's own Cloud Economics team put a number on the problem at re:Invent 2019: 35% of cloud spend is waste.",
      },
      { callout: "Cloud consumers are 100% reactive to the teams who actually see the cost data. The people creating the spend can't see it." },
      { h2: "The process" },
      { p: "I took a high-level brief from the CTO and partnered with subject-matter experts on discovery. I introduced the <strong>Lean UX Canvas</strong> to define the early roadmap, built a Vision Deck, and socialized the concept across the org to build momentum." },
      { h3: "Customer-centric innovation" },
      { p: "Understanding that cost visibility was the major gap, I built a 25-customer panel and stood up Harness's first co-creation initiative. Deep research, competitive analysis, and usability studies surfaced clear pain points:" },
      { ul: [
        "Executives needed a single pane of glass across teams.",
        "Developers wanted granular insight per workload, environment, and customer.",
        "Finance lacked real-time visibility, leading to billing surprises every 30 days.",
        "Users wanted automated cost allocation without tagging overhead.",
        "Kubernetes cost tracking was a major, unsolved challenge.",
      ] },
      {
        feature: {
          h2: "Designing for the developer's context",
          p: "The first design challenge was understanding how developers think about cost data, then mapping that into a simple, one-page cost-exploration tool. Cost actually rolls up through several layers, cloud provider, service and application, environment, cluster and namespace, down to the individual workload, and developers needed to move between those layers without losing their place. For Kubernetes and ECS, I worked with SMEs to break total cost into <strong>utilized, idle, and unallocated</strong> spend at each layer, so engineers could right-size proactively and find “zombie” workloads instead of waiting for a monthly bill to tell them.",
          diagram: "cost-hierarchy",
          caption: "Cost rolls up from cloud provider down to individual pods; developers needed to move freely between every layer.",
        },
      },
      { p: "Cloud providers reported costs daily or monthly, but developers needed <strong>hourly granularity</strong>, aggregation averaged out the spikes that signal inefficiency. I also gave engineers situational awareness by correlating cloud events, deployments, manifest changes, autoscaling, with cost spikes, so a Kubernetes replica change from 2 to 3 became visible as a cost driver, not a mystery on next month's invoice." },
      { h2: "Validating with users" },
      { p: "Across several rounds of design critique and task-based usability testing on a medium-fidelity prototype, I learned that users were lost in breadcrumbs, tabs, and filters; wanted to compare cost across namespaces and clusters; and struggled to find the “Group by” control. In response I flattened the information architecture, surfaced grouping options as visible tabs, moved filter parameters into a dropdown, and translated “single pane of glass” into a true one-page explorer." },
      { h2: "Impact: UX as a business driver" },
      { p: "By leveraging Lean UX, research-driven design, and a co-creation model, I helped establish CCM as a strategic differentiator, empowering engineering, finance, and DevOps with the visibility and control they needed." },
      { ul: [
        "<strong>85%</strong> customer satisfaction (NPS & usability feedback)",
        "<strong>92%</strong> task success rate in cost tracking & optimization",
        "<strong>60%</strong> improvement in cost allocation and savings for users",
        "<strong>3×</strong> increase in engagement in the first two quarters",
        "<strong>70 customers</strong> by GA, validating strong market demand",
      ] },
      {
        image: relativityQuote,
        alt: "Quote from Shelby Lewin, Technical Product Manager at Relativity: during the first 30 days of implementation, we saw a noticeable change in our cloud spend across our engineering teams, with six-figure annualized savings",
        caption: "Shelby Lewin, Technical Product Manager at Relativity, on the impact within the first 30 days.",
      },
      { p: "Relativity had 10–15 more microservices lined up to onboard once that first one proved out the savings." },
      { h2: "What I learned" },
      { p: "User research didn't just validate the product, it pointed at a different one than the brief described: finance wanted a dashboard, but developers wouldn't act without hourly, workload-level detail, so I designed for the developer first and let the executive view roll up from that data rather than building two disconnected tools. The biggest adoption lever wasn't a feature at all, it was removing the tagging setup that sat between signup and a customer's first useful insight. This is also the project that taught me to treat finance, DevOps, and engineering as three different audiences reading the same number differently, a lesson I carried into every design system and platform I've built since." },
    ],
  },

  {
    slug: "design-at-scale",
    year: "2021",
    company: "Equinix",
    role: "Sr. UX Design Manager",
    title: "Design at Scale",
    summary:
      "Founded Quix, Equinix's first company-wide design system: $1.5M in actual savings, 40% faster delivery, adopted by 10+ teams and 34 designers and engineers.",
    cardRole: "Sr. UX Design Manager, founded Quix design system, $1.5M ROI.",
    lead:
      "I founded Quix, Equinix's first company-wide design system, streamlining design, cutting technical debt, and building a design-at-scale culture across three regions.",
    meta: [
      ["Role", "Sr. UX Design Manager / Founder"],
      ["Focus", "Design systems, governance, org-wide adoption"],
      ["Scale", "34 designers & engineers, 10+ product teams"],
    ],
    stats: [
      { num: "$1.5M", label: "Actual UX + engineering savings" },
      { num: "40%", label: "Faster development" },
      { num: "34", label: "Designers & engineers building on Quix" },
      { num: "10+", label: "Product teams adopted" },
    ],
    sections: [
      { h2: "At a glance" },
      { p: "Quix is the foundation of UX at Equinix now, the system every product team builds on for consistency, speed, and a shared language across design, product, and engineering. I built it from nothing: the strategy, the principles, the team, and the adoption, while securing the executive buy-in and funding to make it real." },
      {
        atGlance: [
          {
            n: "Challenge",
            title: "A siloed org, no shared design language",
            p: "Equinix was split across the US, Poland, and Singapore with too many portals, inconsistent UX, and engineering and product VPs who'd already watched company-wide initiatives like this fail before.",
          },
          {
            n: "Approach",
            title: "Listen first, prove the cost, then pilot",
            p: "I costed out what doing nothing was already costing us, ran the same listening tour with engineering that I ran with design, then shipped a lean pilot fast enough that skeptics could see value before committing.",
          },
          {
            n: "Impact",
            title: "A system the org kept choosing",
            p: "Quix became the default starting point for new Equinix products, not because anyone mandated it, but because teams kept opting back in once they saw what it saved them.",
          },
        ],
      },
      {
        image: quixCover,
        alt: "A conference room screen showing the pitch deck slide 'The New Normal for Design'",
        caption: "The pitch that became the system: presented to leadership before Quix had a single shipped component.",
      },
      { h2: "The first 90 days" },
      { p: "I joined as a Principal UX Designer, an influential but unproven role inside a large, regionally siloed organization spanning the US, Poland, and Singapore. I used Michael Watkins' <em>First 90 Days</em> framework, business orientation, stakeholder connection, expectation alignment, and cultural adaptation, to build institutional knowledge fast instead of waiting to earn it the slow way." },
      { p: "What I found: too many portals, inconsistent UX, almost no self-serve, and go-to-market velocity that lagged the market. Our Head of UX, Michael Kopcsak, framed the opportunity in three words that became the system's founding principles: <strong>Converged, Consistent, Coherent</strong>." },
      { h2: "What a design system costs you, if you don't have one" },
      { p: "Before I pitched a solution, I pitched the cost of doing nothing. I costed out one real design review cycle for Network Edge and Fabric: two review meetings, twenty people on each call, then several more hours of rework before a second round of the same. Total cost: <strong>$18,300</strong>, every time we needed alignment on just three design topics. Total repeatable value to Equinix from that spend: zero." },
      {
        image: quixCost,
        compact: true,
        alt: "Slide titled 'What is not having a Design System Costing us?' showing a $18,300 cost calculation and $0 repeatable value",
        caption: "The actual math behind one design review cycle, the slide that made inaction expensive to ignore. Click to enlarge.",
      },
      { h2: "Building the business case" },
      { p: "A design system is UX language, tooling, technology, process, and people, and people are the part that's hardest to design for. The real resistance wasn't technical, it was culture, trust, and commitment. I pitched a business story end to end: problem space, target users, the solution, the business model, early traction, an adoption strategy, the proposed team, and ROI, backed by real numbers on development cost and a clear build-vs-buy position." },
      { h2: "MVP strategy: value before components" },
      { p: "Most design systems start component by component, buttons first, everything else later. I went the other way. I mapped the transactional flows that showed up identically, and inconsistently, across every Equinix product: explore, search, view details, understand cost, add to cart, review, submit, track. Those end-to-end flows, not individual components, became the MVP, because that's where customers actually felt the inconsistency and where the business actually felt the cost." },
      { h2: "Build vs. buy" },
      { p: "Equinix's product teams ran on different front-end stacks, and the company was actively acquiring digital software companies running on different ones still. Betting on a single framework meant half the org couldn't adopt without a rewrite. We made a deliberate, framework-agnostic choice instead: <strong>Lit web components</strong>, authored once in Figma and shipped to Vue, React, Angular, Preact, Svelte, or vanilla JS without anyone rebuilding it by hand." },
      {
        image: quixBuildBuy,
        compact: true,
        alt: "Diagram showing Figma feeding eq-ds-components built on Lit web components, fanning out to Vue, React, Angular, Preact, Inferno, Svelte, and Vanilla JS",
        caption: "One source in Figma, one component library, every framework Equinix actually ran in production. Click to enlarge.",
      },
      { h2: "Team & operating model" },
      { p: "I didn't want to guess at governance, so I interviewed the teams behind Material Design, Fluent, Carbon, and AWS, looking at how they staffed and funded the work, not just how the components looked. Nathan Curtis's framework names four models, solitary, centralized, federated, and a cyclical hybrid of the last two, and I chose the hybrid deliberately: a core team acting as the control tower, with a federation of contributors across products and platforms feeding it and drawing from it." },
      {
        image: quixModels,
        compact: true,
        alt: "Diagram comparing solitary, centralized, federated, and cyclical team models for design systems",
        caption: "The model we chose, and the three we didn't, mapped against how design systems actually scale. Click to enlarge.",
      },
      { p: "The core team was thirteen people: four designers, five engineers, a front-end architect, an engineering lead, a content writer, and a researcher. I hired generalists with one or two deep specialties, system thinkers who were customer-focused, visually disciplined, and genuinely wanted to make other designers and engineers better. I led it as product owner and function leader, and at peak, the wider contributor base, six product designers and fifteen product engineers across the company, brought the total to <strong>34 people</strong> building on the same system." },
      {
        image: quixHats,
        compact: true,
        alt: "Five cards reading UX Leader, Product Owner, System Leader, Scrum Master, and DesignOps, labeled 'my different hats'",
        caption: "Founding a design system means wearing more than one hat. Most weeks, I wore all five. Click to enlarge.",
      },
      { h2: "Friendly governance: the 3Gs" },
      { p: "Creatives bristle at the word governance, so I built something friendlier instead, aligned to Equinix's “We Belong” value: the <strong>3Gs</strong>. A Guide core team set direction and arbitrated conflicts. Gurus, regional leads across APAC, EMEA, and AMER, supported local teams and signed off on quality. Guilds, organized by platform and business line, surfaced new patterns and contributed components back." },
      {
        image: quixGovernance,
        compact: true,
        alt: "Diagram of the 3Gs governance model: a central Guide team connected to regional Guru and platform Guild groups",
        caption: "Guide, Guru, Guild: governance that scaled across regions without becoming a bottleneck in any one of them. Click to enlarge.",
      },
      { p: "Contribution ran through three lanes, bug reports, new elements, and general feedback, each with its own owner and tool. Every new component moved through the same five-step relay before it shipped." },
      {
        image: quixRelay,
        compact: true,
        alt: "Five-step relay diagram: Define, Design, Develop, Document, Publish",
        caption: "Define, design, develop, document, publish: every component, from any team, moved through the same five steps before it counted as part of Quix. Click to enlarge.",
      },
      { h2: "Where the resistance actually was" },
      { p: "The pushback was never really about Quix, the component library was the easy part. It came from global engineering and product teams who'd never been asked to share ownership of how they built things before, and from VPs across both lines who'd watched company-wide initiatives like this fail the same way before. This is the same leadership without direct authority I describe on my <a href=\"/leadership\">Leadership page</a>: nobody who pushed back on Quix reported to me, and most of them outranked me." },
      { p: "I ran the same listening tour with engineering that I'd already run with design. The workshops surfaced the real friction underneath the surface objections: a genuinely new way of working, a new way of collaborating across regions, and real cultural differences in how our US, Polish, and Singaporean teams approached ownership and decision-making. None of that resolves with a better contribution checklist." },
      { p: "What actually moved the needle was smaller than any strategy deck. I gained alignment by understanding each team's pain points first and connecting Quix to their own professional goals, not just the company's roadmap. I built trust by listening before building anything, then shipped a lean pilot fast enough that skeptics could see real value before anyone asked them to commit. And the adoption held because it was anchored in evidence and shared ownership across engineering and design, not a mandate handed down from above." },
      {
        imagePair: [
          {
            image: quixWorkshop,
            alt: "Miro board showing an empathy map, design system principles workshop, and a naming workshop, with sections marked Pilot Test",
            caption: "Mapping pain points and voting on the system's name.",
          },
          {
            image: quixRetro,
            alt: "Miro retrospective board with feedback sorted into quadrants, action items, and a high-value, low-effort prioritization matrix",
            caption: "Retro feedback sorted by value and effort.",
          },
        ],
        caption: "Click either to enlarge.",
      },
      { h2: "Building an inclusive, transparent culture" },
      { p: "Trust was the actual deliverable, not a nice-to-have around the technical one. I ran design thinking workshops with the global UX and engineering teams to define the core team's own competencies before asking anyone else to adopt anything. We crowd-sourced the system's name instead of picking one ourselves, and ran retrospectives often enough that fixing the system became as normal as using it. Communication was just as deliberate: company-wide sprint demos, biweekly updates to cross-functional leaders, and dedicated channels so nobody had to guess where to go with a question." },
      {
        video: "https://www-ccv.adobe.io/v1/player/ccv/MPjXmstcyfg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        caption: "The Quix Release Update, presented by Jiyeon Park, a core team member and our resident DS evangelist.",
      },
      { p: "Jenny Seong, a founding member and our other DS evangelist, also published a series of video tutorials that made early adoption far smoother than any documentation page could on its own." },
      { h2: "Adoption, in the team's own numbers" },
      { p: "Within months of launch, the documentation hub was seeing hundreds of new users and tens of thousands of tracked events a month: real engineers and designers coming back to reference Quix, not just visiting once." },
      {
        image: quixMetrics,
        compact: true,
        alt: "Analytics dashboard showing Quix documentation site engagement metrics including new users, sessions, and event count",
        caption: "Quix documentation site engagement, pulled straight from the analytics, not estimated after the fact. Click to enlarge.",
      },
      { h2: "Return on investment" },
      { p: "Design systems are hard to sell to leadership on faith, so from day one I tracked ROI as real numbers, not a slide. Across UX and engineering combined, investment ran just over $1.3M against $1.395M in actual realized savings, with projected savings climbing to $2.7M as adoption keeps growing." },
      {
        image: quixROI,
        compact: true,
        alt: "Table showing Quix savings amount: UX investment $681,362 and actual saving $727,528; Dev investment $623,040 and actual saving $667,797; combined investment $1,304,402 and actual saving total $1,395,325",
        caption: "The actual savings math, tracked quarter over quarter, UX and engineering combined. Click to enlarge.",
      },
      { h3: "Key metrics" },
      { ul: [
        "Saved the company <strong>$1.5M in six months</strong> by cutting redundant design and development work.",
        "Reduced QA time for design and engineering by <strong>40%</strong>.",
        "Delivered a unified design system adopted across <strong>3 engineering frameworks</strong>, accelerating onboarding for 5+ acquired teams, cutting UI development time by 30%, and enabling scalable, consistent experiences without disrupting existing tech stacks.",
        "Adopted by <strong>10+ product teams</strong>, making Quix the company standard.",
        "Increased design consistency by <strong>60%</strong> within the first year of operation, improving usability and UI performance.",
      ] },
      { h2: "Lessons & growth" },
      { p: "I thrive at the intersection of strategy, design, technology, and business, because good design is good business. Shifting a global organization's culture takes a phased approach and the willingness to challenge the status quo while turning skeptics into champions, not adversaries. What stayed with me most: design, product, and engineering only move at this speed when they trust each other as one team, and psychological safety is what makes that trust possible in the first place." },
    ],
    gallery: {
      items: [
        { src: quixGalleryHero, alt: "Composite of Quix components and the Quix logo, including workspace navigation, data tables, and file upload" },
        { src: quixGalleryColors, alt: "Quix brand color palette with named reds, maroons, purples, violets, and blues" },
        { src: quixGalleryTokens, alt: "Quix color token tables for action and input components, showing default, hover, and active states" },
        { src: quixGalleryToggle, alt: "Quix Button Toggle component documentation with property table and live examples" },
        { src: quixGallerySelect, alt: "Quix Select component documentation with single, multi, and searchable variants" },
        { src: quixGalleryPhone, alt: "Quix Phone Input component documentation with default, active, and error states" },
        { src: quixGalleryCard, alt: "Quix Card component documentation with default, hover, and selectable states" },
        { src: quixGalleryBadge, alt: "Quix Badge component documentation with solid, outline, and light variants" },
        { src: quixGalleryBreadcrumbs, alt: "Quix Breadcrumbs component documentation showing an order and ticket history trail" },
      ],
    },
  },

  {
    slug: "career-growth",
    year: "2021",
    company: "Equinix",
    role: "Sr. UX Design Manager",
    title: "Designing a UX Career Growth Path",
    summary:
      "Built a structured UX career framework across design, research, and content, +30% satisfaction with career growth and a stronger talent pipeline.",
    cardRole: "Sr. UX Design Manager, +30% satisfaction with career growth.",
    lead:
      "As Equinix's UX team grew, designers, researchers, and writers lacked a clear path to progress. I designed a structured career framework that made growth transparent and strengthened the talent pipeline.",
    meta: [
      ["Role", "Sr. UX Design Manager"],
      ["Focus", "Career framework, team growth"],
      ["Partners", "UX leadership & HR"],
    ],
    stats: [
      { num: "+30%", label: "Satisfaction with career growth" },
      { num: "3", label: "UX streams covered" },
      { num: "5", label: "Competency themes defined" },
      { num: "45+", label: "UX professionals supported" },
    ],
    sections: [
      { h2: "Summary" },
      { p: "The existing framework was outdated and too broad, failing to reflect the unique skills and growth opportunities in UX. I took the initiative to design a structured UX Career Growth Path defining clear expectations, skill development, and leadership progression, helping individuals grow while strengthening Equinix's UX talent pipeline." },
      { p: "I partnered with another design leader to create the framework, worked closely with HR and leadership to integrate it into performance reviews and promotions, and brought it to life through mentorship programs, workshops, and feedback sessions, so it became a real tool, not just a document." },
      { h2: "The opportunity" },
      { p: "When I joined in late 2020, 45+ UX professionals were fragmented across product teams, working in silos as service providers. Interviewing every UX member in my first weeks surfaced two core pain points around growth and clarity. Equinix had a single generic framework for all disciplines that hadn't been updated in years, but UX is a broad, diverse field where people should be able to grow along their own interests and skills, and a strong UX org shouldn't have to look outside for its future senior talent." },
      { h2: "The design journey" },
      { p: "We treated this like a design challenge. After a comparative analysis of industry frameworks, learning from the good and the bad, we set our design principles, then defined the essential components of the framework." },
      { h3: "Competencies and skills" },
      { p: "We distinguished competencies (demonstrable groups of related strengths) from skills (individual proficiencies). We mapped competencies into five themes, <strong>Customer First / Product Understanding, Mastery of Craft, Business Acumen, Partnership / Leadership, and Impact</strong>, kept generic enough that designers, researchers, and writers could choose their own mastery path. Only “Mastery of Craft” differed per stream." },
      { h3: "Levels of expectation" },
      { p: "We defined clear levels expressing mastery, scope, complexity, and autonomy, deliberately framed as positive and motivational (“what you can do”) rather than a rating or score. For example, the <strong>Impact</strong> competency progresses from completing tasks on deadline (L1), to setting the quality bar for the team (L4), to being recognized as a thought leader whose work raises the industry standard (L7)." },
      { h3: "Dual-track" },
      { p: "Flat structures only work to a point. Ambitious, curious people want to progress, so we built a dual-track pathway, like engineering's IC and management ladders, letting people grow as craft masters or as people leaders, depending on what they want from their careers." },
      { h2: "Impact" },
      { ul: [
        "<strong>+30%</strong> increase in employee satisfaction with career growth",
        "Improved retention and engagement through clear growth opportunities",
        "A transparent, structured promotion process",
        "A culture of mentorship and continuous learning",
        "Stronger strategic influence by aligning career growth with business goals",
        "A scalable framework for long-term UX talent and leadership development",
      ] },
      { p: "We approached this as a design problem, validated the framework with HR and the business, and then with UX practitioners themselves, using it to build individual, actionable growth plans. Driving change in a global organization takes time, but the result was a motivating, transparent path that helps UX professionals push their own boundaries." },
    ],
  },

  {
    slug: "product-led-growth",
    year: "2022",
    company: "Equinix",
    role: "Sr. UX Design Manager",
    title: "Product-led Growth with Solution Builder",
    summary:
      "Turned a complex enterprise configurator into a product-led growth engine, 40% faster setup, 5 days cut from the sales cycle.",
    cardRole: "Sr. UX Design Manager, cut 5 days from the sales cycle.",
    lead:
      "Heading UX for Equinix's edge services, I shaped Solution Builder into a product-led growth engine, letting customers design, price, and validate end-to-end infrastructure solutions without friction.",
    meta: [
      ["Role", "Sr. UX Design Manager, Edge Services UX"],
      ["Focus", "GTM strategy, product-led growth"],
      ["Team", "Design, research, PM, engineering"],
    ],
    stats: [
      { num: "5 days", label: "Cut from the sales cycle" },
      { num: "40%", label: "Faster setup" },
      { num: "7 mo.", label: "Concept to GA" },
      { num: "0→1", label: "MVP delivered fast" },
    ],
    sections: [
      { h2: "Summary" },
      { p: "From day one the goal was to turn complexity into clarity, making it effortless for Solution Architects and Network Engineers to design, validate, and deploy cloud and network solutions without friction. This story focuses less on the build and more on the go-to-market strategy: how we used Solution Builder as a product-led growth tool." },
      { p: "As design leader I drove UX strategy, research, and execution while empowering my team to lead with a user-first mindset. By embedding research early and often through a “Research Interlock,” every interaction was intuitive and every decision data-informed." },
      { h2: "The context" },
      { p: "Equinix is a global digital infrastructure company operating 240+ IBX data centers across 70 metros. Its three primary digital products, <strong>Metal, Network Edge, and Fabric</strong>, let customers solve many use cases in one place (“Triple Play”). But that's only possible if the products are compatible from the back-end framework up through the user experience." },
      { h2: "The challenge" },
      { p: "Users had no way to plan end-to-end solutions, estimate prices, or deploy without sales help or conversations with Global Solution Architects. That's where we began conceptualizing a visual diagramming tool: <strong>Solution Builder</strong>, drag-and-drop Equinix network components with instant operational cost estimates, multi-currency, metro-based monthly pricing, and all Network Edge components." },
      { h2: "Product-led vs. sales-led growth" },
      { p: "In product-led growth, the product itself is the primary driver of acquisition and retention, every effort focused on letting users experience value as fast as possible. Where sales-led growth is linear (marketing → sales → implementation → success), PLG lets these activities happen in tandem, and sales becomes an expansion play." },
      { p: "At Harness I'd structured PLG with three questions, the business goal (acquire new customers), the user metric that reflects it (new-user-to-paid conversion), and the supporting metrics (active engagement, product usage). We then minimized sign-up inputs and built a free sandbox to show fast time-to-value." },
      { callout: "Do we even need a sign-up for a freemium experience? We can capture the lead for sales to follow up, without forcing commitment first." },
      { h2: "Applying PLG to the enterprise" },
      { p: "Bringing PLG to enterprise is challenging because of complexity and sophisticated power users, exactly where UX matters most. Equinix's traditional power users were network engineers, but modern applications on bare Metal invited DevOps and application developers who expect consumer-grade simplicity and transparency, and who like to try before they buy." },
      { p: "Like researching a car, comparing options, customizing, test-driving before any commitment (think Tesla's design-your-car flow or Amazon's “try before you buy”), Solution Builder lets users design infrastructure solutions with zero commitment, collaborate with sales or a Global Solution Architect, and order when ready. I improved on my earlier Harness approach by removing the sign-up gate from the freemium experience entirely." },
      { h2: "Impact" },
      { ul: [
        "<strong>0 → MVP</strong> fast, a fully functional first release in record time",
        "<strong>User-first by design</strong>, research drove every decision, reducing cognitive load",
        "<strong>40%</strong> faster setup for complex configurations",
        "An empowered team via the <strong>Research Interlock</strong> ritual",
        "A continuously evolving, outcome-driven experience shaped by post-launch feedback",
        "<strong>5 days</strong> cut from the sales cycle, a key differentiator driving enterprise adoption and revenue",
      ] },
      { p: "Reaching general availability with all Network Edge components in just seven months, the team is now advancing Solution Builder to add Metal components, order placement, and a fuller product-led growth motion." },
    ],
  },
];

export const getCase = (slug) => cases.find((c) => c.slug === slug);
