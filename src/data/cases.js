// Case study content. `summary` is used on cards; `sections` renders the detail page.
// Block types: { h2 }, { h3 }, { p }  (p/li strings may contain <strong>, <em>, <a>),
//              { ul: [...] }, { callout }, { note } — small grey icon, blends into a paragraph,
//              { compare: { label, cols: [...], rows: [[label, ...vals]], caption } } — Then vs Now table,
//              { feature: { h2, p, diagram, caption } } — intro text followed by a full-width diagram.
//              { image, alt, caption } — standalone full-width image.
//              { carousel: { heading, items: [{ src, alt, caption }] } } — full-width image carousel, click to enlarge.

import ceProblemLoop from "../assets/images/CE/6_ce.png";
import ceLeanCanvas from "../assets/images/CE/7_ce.png";
import cePainDiscovery from "../assets/images/CE/9_ce.png";
import ceCustomerQuotes from "../assets/images/CE/10_ce.png";
import cePersonas from "../assets/images/CE/11_ce.png";
import ceUtilizationConcept from "../assets/images/CE/21_ce.png";
import ceEventCorrelation from "../assets/images/CE/27_ce.png";
import ceIAFlatten from "../assets/images/CE/30_ce.png";
import ceFinalOverview from "../assets/images/CE/4_ce.png";
import ceScreenClusterExplorer from "../assets/images/CE/3_ce.png";
import ceScreenWorkloadEvents from "../assets/images/CE/5_ce.png";
import ceRelativityQuote from "../assets/images/CE/41_ce.png";
import ceCompetitiveLandscape from "../assets/images/CE/13_ce.png";
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
import dsAtomicSystem from "../assets/images/design-system-startup/01-atomic-design-system.jpg";
import dsBuildingSystem from "../assets/images/design-system-startup/02-building-the-system.jpg";
import dsContentSystem from "../assets/images/design-system-startup/03-content-design-system.jpg";
import dsFoundationContrast from "../assets/images/design-system-startup/04-foundation-contrast.jpg";
import dsComponentCustomization from "../assets/images/design-system-startup/05-component-customization.jpg";
import dsDesignPrinciples from "../assets/images/design-system-startup/06-design-principles.jpg";
import plgSolutionBuilder from "../assets/images/plg/1_plg.png";
import plgThreeProducts from "../assets/images/plg/2_plg.png";
import plgChallenges from "../assets/images/plg/3_plg.png";
import plgSalesLed from "../assets/images/plg/6_plg.png";
import plgCarJourney from "../assets/images/plg/9_plg.png";
import plgReimaginedObjective from "../assets/images/plg/12_plg.png";
import cpgCover from "../assets/images/CPG/cover_cpg.jpg";
import cpgPrinciples from "../assets/images/CPG/3_cpg.png";
import cpgWheel from "../assets/images/CPG/4_cpg.png";
import cpgLadder from "../assets/images/CPG/6_cpg.png";
import cpgImpactLevels from "../assets/images/CPG/7_cpg.png";
import cpgWipBoard from "../assets/images/CPG/9_cpg.png";

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
      { note: "I'm light on screens and company specifics in this write-up since we're still in stealth, but the process, the decisions, and the numbers below are exactly how it played out." },
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
    slug: "design-systems-ai-era",
    year: "2021–2025",
    company: "Cybersecurity Startup",
    role: "Head of UX",
    title: "A 10-Person Team, a 100-Person Problem",
    summary:
      "Founded two company-wide design systems five years apart: Quix at Equinix, and a tokenized, MCP-connected system at my current startup, built to solve a real capacity problem and along the way, change who a design system actually serves.",
    cardRole: "Head of UX, founded two design systems, five years and one AI shift apart.",
    lead:
      "I've founded a company-wide design system twice. Quix, at Equinix, solved a culture and governance problem. The one I'm building now started as a capacity problem: a 10-person team that couldn't keep up, and a fix that ended up changing who's allowed to build a prototype at all.",
    meta: [
      ["Role", "Head of UX / Founder"],
      ["Focus", "Design systems as AI infrastructure"],
      ["Span", "Equinix (2021) → current startup (2025)"],
    ],
    stats: [
      { num: "2", label: "Company-wide design systems founded" },
      { num: "4", label: "Tools wired into one MCP server: Figma, GitHub, Claude Code, VS Code" },
      { num: "10 → 100", label: "Effective exploration throughput, design and UI team to whole company" },
      { num: "2-way", label: "Design ↔ code sync, not a one-way handoff" },
    ],
    sections: [
      { h2: "At a glance" },
      { p: "I've built a company-wide design system from zero twice: <strong>Quix</strong> at Equinix in 2021, and a tokenized atomic design system at my current cybersecurity startup, run behind a design system <strong>MCP server</strong> wired into Figma, GitHub, Claude Code, and VS Code. Quix solved a culture and governance problem inside a company that already had hundreds of engineers. This one started smaller and more practical: a 10-person design and UI team couldn't keep up with a company racing toward a seed round, and the fix changed who gets to build a prototype." },
      {
        atGlance: [
          {
            n: "Challenge",
            title: "A 10-person team, three POC tracks, one seed round on the clock",
            p: "Twelve design partners across CISO, NetSec, and InfoSec needed parallel exploration, but every idea still routed through 4 designers and 6 UI developers. We couldn't hire our way out fast enough to matter.",
          },
          {
            n: "Approach",
            title: "Give the company a system it can build with directly",
            p: "I split ownership across UX designers and UI developers, then built a tokenized design system behind an MCP server so PMs, engineers, and founders could prototype against our real design language without waiting on us.",
          },
          {
            n: "Impact",
            title: "A 10-person team supporting a 100-person company's worth of exploration",
            p: "Most prototyping no longer routes through design and UI at all. That speed held up well enough to help close our $30M seed round, and it's reshaping what I think a design system is actually for.",
          },
        ],
      },
      { h2: "Two systems, two problems" },
      { p: "Quix existed to help designers and engineers find the right component, trust it, and contribute back to it, across a siloed, three-region company. The hardest problem was getting people to share ownership of how they built things." },
      { p: "This system exists for a wider, more mixed group: AI agents reading tokens directly, and PMs, engineers, and founders who don't have a design background but need a credible interface fast. I built for both on purpose, not as one blurred audience." },
      {
        compare: {
          label: "Dimension",
          cols: ["Quix (Equinix, 2021)", "This system (current startup, 2025)"],
          rows: [
            ["Primary challenge", "Alignment and governance across a siloed, three-region org.", "Capacity: 10 people, three parallel POC tracks, a seed round on the clock."],
            ["Primary consumer", "Designers and engineers, reading documentation.", "AI agents reading tokens directly, plus PMs and founders without design backgrounds."],
            ["Architecture", "Framework-agnostic web components, authored in Figma, a documentation hub.", "Tokenized atomic system behind an MCP server, wired into Figma, GitHub, Claude Code, VS Code."],
            ["What proved it worked", "34 people building on it, $1.5M in tracked savings, an ROI slide leadership trusted.", "Design-partner POCs that held up fast enough to help close a $30M seed round."],
          ],
        },
      },
      { h2: "The bottleneck" },
      { p: "Twelve design-partner POCs across three tracks, an investor narrative to build, and a platform to ship, all queued behind the same 10 people. This was a capacity problem before it was an AI problem. The question I asked wasn't how to build prototypes faster, it was who else in our 80-person company could be building them, if the system gave them something safe to build with." },
      {
        feature: {
          h2: "Democratizing exploration, not just production",
          p: "A PM sketching a flow, an engineer testing a concept, a founder mocking up an investor narrative, all of them can now generate a working HTML prototype against our real design language directly, without filing a ticket with design. That's the loop below for design-to-dev, but the reason I built it was capacity: it's what let a 10-person team support exploration closer to the scale of a <strong>100-person</strong> company.",
          diagram: "ai-workflow",
          caption: "The loop that turned a 4-designer, 6-UI-developer bottleneck into something the whole company could build against.",
        },
      },
      { h2: "Building it: ownership, then the bridge" },
      { p: "The first move was organizational. I started by listening to how our engineers had worked with design before, then built a collaboration model tight enough that the two teams operated as one, with ownership split deliberately: <strong>UX designers</strong> own system design, tokens, component structure, and documentation. <strong>UI developers</strong> own the coded components and built the <strong>MCP server</strong> itself, the layer connecting that system to Figma, GitHub, Claude Code, and VS Code. Each side owns the half they're best positioned to get right." },
      { p: "That split is what makes the system real. A token change in Figma reaches code without a ticket. A component built in code pulls back into Figma without anyone redrawing it. A designer, PM, or engineer can turn a prompt into a working prototype on our actual design language in the time it used to take to brief a mockup." },
      { h2: "Designing inside cybersecurity's constraints" },
      { p: "A generic model defaults to a generic consumer layout: generous whitespace, a handful of cards, low density. That's the wrong default for a security operations workflow, and a model won't guess its way out of it. It has to be told. Exposing our domain's actual constraints through the MCP server is what lets it build something an analyst would use." },
      {
        atGlance: [
          {
            n: "01",
            title: "Density over whitespace",
            p: "Analysts watch several data streams at once and can't afford to scroll. Our tokens include compact spacing and row-height variants, so a status table comes out dense by default.",
          },
          {
            n: "02",
            title: "Dark mode and alert color are constraints, not a theme",
            p: "Security interfaces run dark to reduce eye strain over long shifts, and alert colors have to clear contrast ratios that aren't negotiable. The model references the real token instead of guessing a shade, so a critical alert banner is correct the first time.",
          },
          {
            n: "03",
            title: "Layered, nested data",
            p: "Network logs and incident timelines need components nested inside other components, an alert inside a data row, a severity badge inside a timeline entry. Because the system is atomic, those relationships are defined once, so the model composes them correctly instead of flattening the layout.",
          },
        ],
      },
      { h2: "How my strategy as a leader evolved" },
      { p: "At Quix, my hardest job was cultural: proving the cost of doing nothing and earning trust across regions that had never shared ownership of tooling before. That playbook still works here. What changed is where I spend the bet. At Equinix, success was documentation engagement and adoption. Here, it's whether an agent reads our tokens correctly and whether a non-designer can prototype something credible without me in the room." },
      { p: "It changes my own job too. At Quix, leadership meant defending the right component decisions in review. Here, with a small team and a fast clock, my job is closer to writing the rules other people build by. If a PM can turn a prompt into a working prototype on our design language without me in the room, I've done my job before the meeting happens." },
      { h2: "Early impact" },
      { p: "We're still stealth, but the pattern holds: the product trio prototypes and validates with design partners at sprint speed without losing the quality bar once things ship, the same speed and rigor that helped this round of POCs contribute to closing our $30M seed round." },
      { h2: "What I believe now" },
      { p: "A design system used to be how you kept a growing product consistent and shipped it faster. Now it's the infrastructure that decides whether your company can use AI tooling at all, and whether the people around your product can turn an idea into something real without waiting on design. I built Quix to get a large company speaking one design language. I'm building this one so our tools can read that language too, not just our people." },
    ],
    gallery: {
      items: [
        { src: dsDesignPrinciples, alt: "Design Principles slide outlining a three-tiered framework: Functional First, Easy to Use, and Delightful" },
        { src: dsAtomicSystem, alt: "Atomic Design System slide showing the foundation-to-pages hierarchy: sub-atomic particles, atoms, molecules, organisms, templates, and pages" },
        { src: dsBuildingSystem, alt: "Building the Design System slide outlining four phases: research and benchmarking, define and scope, design and validate, stress test and iterate" },
        { src: dsContentSystem, alt: "Content Design System slide covering voice and tone principles, grammar and mechanics rules, and scaling through centralized content tokens" },
        { src: dsFoundationContrast, alt: "Foundation definition slide showing a primary color scale with contrast ratios for primary text on primary background" },
        { src: dsComponentCustomization, alt: "Component customization slide showing a dense data table component with organization, IP address, protocol, and compliance columns" },
      ],
    },
  },

  {
    slug: "cloud-cost",
    year: "2020",
    company: "Harness",
    role: "Founding UX Leader",
    title: "Research as the Pitch: Cloud Cost at Harness",
    summary:
      "Took Cloud Cost Management from idea to GA in six months on a research-led product strategy: a Lean UX Canvas that built the case, a 25-customer co-creation panel, and hands-on design leadership through 85% CSAT, 92% task success, and 70 customers by launch.",
    cardRole: "Founding UX Leader, research-led strategy, idea to GA in six months.",
    lead:
      "I joined Harness as its first UX hire, leading design for CI/CD, then Security Ops and Feature Flags. That vantage point surfaced cloud cost as a real, unowned opportunity. I used research, a Lean UX Canvas and early customer conversations, to build the case, pitched it with a Technical Lead partner to our CEO and CTO, and took Cloud Cost Management from a blank team to GA in six months.",
    meta: [
      ["Role", "Founding UX Leader → Product Strategist"],
      ["Focus", "Research-led strategy, generative research, co-creation, data viz"],
      ["Team", "PM, Engineering Lead, and SRE, plus a 25-customer co-creation panel"],
    ],
    stats: [
      { num: "25", label: "Customers in Harness's first co-creation panel" },
      { num: "85%", label: "Customer satisfaction (NPS & usability)" },
      { num: "3×", label: "Engagement in first two quarters" },
      { num: "70", label: "Customers by GA" },
    ],
    sections: [
      { h2: "At a glance" },
      {
        atGlance: [
          {
            n: "Challenge",
            title: "A problem nobody owned yet, surfaced from inside CI/CD",
            p: "Leading design across CI/CD, Security Ops, and Feature Flags gave me a view across the whole engineering workflow, and surfaced cloud cost as a real, unowned problem, not a request on my desk.",
          },
          {
            n: "Approach",
            title: "Make research the pitch, then keep it running as a co-creation loop",
            p: "With a Technical Lead partner, I built a Lean UX Canvas and ran early customer conversations to make the market gap undeniable to our CEO and CTO, then stood up a 25-customer co-creation panel and stayed hands-on in research straight through GA.",
          },
          {
            n: "Impact",
            title: "GA in six months, and a habit the team kept after I left",
            p: "Cloud Cost Management shipped with 85% CSAT, 92% task success, and 70 customers by GA. One of those customers cut six figures in annualized cloud spend within 30 days of turning it on.",
          },
        ],
      },
      {
        carousel: {
          items: [
            {
              src: ceScreenClusterExplorer,
              alt: "Cluster cost explorer screen showing total cost, cost breakdown, cost efficiency, and a cost trend chart across clusters",
              caption: "Cluster Cost Explorer: where a DevOps lead starts, total cost down to efficiency score.",
            },
            {
              src: ceFinalOverview,
              alt: "Cost Explorer overview dashboard showing total cloud cost, clusters cost, cost breakdown, cost efficiency, and top applications, clusters, and cloud accounts by spend",
              caption: "The Overview tab: every cloud, cluster, and account rolled into one pane of glass.",
            },
            {
              src: ceScreenWorkloadEvents,
              alt: "Workload event-to-cost correlation screen showing a cost spike linked to a Kubernetes deployment diff with replicas changed from 2 to 3",
              caption: "Drilling into a workload: the exact deployment diff behind a cost spike, not just a timestamp.",
            },
          ],
        },
      },
      { h2: "Where this started: inside CI/CD, not a roadmap meeting" },
      { p: "At Harness, I led design for CI/CD, our flagship DevOps platform, reporting directly to our CTO. My users were sophisticated and technical, field and internal engineers, so earning credibility meant learning the technology as deeply as I learned the people using it. As the org grew, I took on Security Ops and Feature Flags too, and leading design across all three surfaced the same complaint everywhere: nobody could see cloud cost rising until it was already too late to act on it." },
      { note: "Harness grew 5× in ARR company-wide across this stretch, CI/CD, Security Ops, Feature Flags, and Cloud Cost Management together. That's the context for the number on my career timeline, not a metric this product drove alone." },
      { h2: "The problem" },
      { p: "As deployment shifted left to engineering teams on self-service CD platforms, velocity went up and so did cloud spend. AWS put a number on it at re:Invent 2019: <strong>35% of cloud spend is waste</strong>. Finance was invoiced every 30 days with no context for why, and getting an answer from engineering took another 30 days, or never." },
      { callout: "Cloud consumers are 100% reactive to the teams who actually see the cost data. The people creating the spend can't see it." },
      {
        image: ceProblemLoop,
        compact: true,
        maxWidth: "80%",
        alt: "Diagram showing engineers deploying freely on CI/CD while the cloud bill rises 500%, taking the CFO 30 days to flag it and the engineer 30 more days to troubleshoot, captioned 35% of cloud spend is waste",
        caption: "The loop we were actually designing against: nobody saw the cost until it was already too late to act on it.",
      },
      { h2: "Making the case, then building the team" },
      { p: "Cloud cost wasn't on anyone's roadmap, so I partnered with a Technical Lead to size the opportunity, and we pitched our CEO and CTO directly: the market gap, the data and credibility advantage our CI/CD platform gave us, and a solution grounded in the workflow I'd already been living in across two other products. That pitch got us the headcount, not the other way around." },
      {
        image: ceCompetitiveLandscape,
        alt: "Competitive landscape analysis comparing cloud providers, startups, and established cost management vendors against what's missing, our strength, How might we questions, and resulting strategy: complete developer context and cost visibility, root cost analysis and recommendation, hourly time-to-know and governance",
        caption: "The research artifact behind the pitch: where every competitor was reactive and infrastructure-only, and where our CI/CD platform let us be neither.",
      },
      { p: "Buy-in is where the harder work started: no product, no PM, no engineering team yet, just the case we'd made. I helped bring on a Director of Product Management to turn the opportunity into a fundable roadmap, and an Engineering Lead and SRE to scope what was buildable in six months. What mattered more than headcount was keeping research and design a strategic partner once that team existed, not an execution layer brought in after the roadmap was set, the same habit I describe on my <a href=\"/leadership\">Leadership page</a>." },
      { p: "With the team formed, I brought that group into discovery rather than handing them a finished brief, built the pitch's Lean UX Canvas out into a full Vision Deck, and we socialized it across the org to build momentum before asking for more headcount or budget." },
      {
        quote:
          "We worked together on a new product from the inception, i.e. Continuous Efficiency [Cloud Cost Management]. Early on, she introduced the Lean Canvas approach, which was instrumental in defining the early roadmap of the product. She helped build and present the Vision Deck and posters to socialize the early ideas of the product. This greatly helped in building momentum. Soma championed user research for defining the product roadmap and user experience, and conducted many interview sessions with potential customers to validate concepts.",
        quoteName: "Puneet Saraswat",
        quoteRole: "Technical Lead at Harness, partnered on this product from day one · now Co-founder & CDO, Autoheal",
      },
      {
        image: ceLeanCanvas,
        compact: true,
        maxWidth: "667px",
        alt: "Diagram showing a Lean UX process moving from the brief through discovery and ideation to a vision and concept, then socialize, build, and validate toward a milestone release",
        caption: "The path from a self-initiated pitch to a shippable concept, with the team at every step, not just at the handoffs.",
      },
      { h3: "Customer-centric innovation" },
      { p: "Cost visibility was the gap nobody disputed, so I stood up a 25-customer panel, Harness's first co-creation initiative, running structured interviews, competitive teardowns, and affinity-diagramming sessions with our PM and customer service team. The same pain points surfaced again and again, from a lead systems engineer, a technical PM, and a VP of TechOps among others:" },
      {
        image: ceCustomerQuotes,
        compact: true,
        maxWidth: "667px",
        alt: "Three customer quote cards from a lead systems engineer, a technical PM, and a VP of TechOps, on overprovisioning, manual cost exporting, and wanting to charge cost back to individual teams",
        caption: "The panel's own words, not a summary of them. This is what we designed against.",
      },
      { ul: [
        "Executives needed a single pane of glass across teams.",
        "Developers wanted insight per workload, environment, and customer, not a rolled-up total.",
        "Finance lacked real-time visibility, leading to billing surprises every 30 days.",
        "Users wanted automated cost allocation without tagging overhead.",
        "Kubernetes cost tracking was a major, unsolved problem for almost everyone we talked to.",
      ] },
      { h2: "Designing for the developer's context" },
      { p: "The first challenge was understanding how developers think about cost, then mapping that into a simple, one-page exploration tool, through context mapping, five-stakeholder persona work, competitive analysis, and a lot of data-viz exploration before any of it became a screen." },
      {
        image: cePersonas,
        alt: "Table comparing five personas, engineer, DevOps, cloud center of excellence, CISO/CIO, and CFO, across responsibility, key duties, required content, cost pain, and why they care about cost",
        caption: "Five roles, five different relationships to the same number. None of them could be designed for the same way.",
      },
      { p: "Cloud providers reported cost daily or monthly, but developers needed <strong>hourly granularity</strong>, daily aggregation averaged out the spikes that actually signal inefficiency. With our SREs, I broke total cost into utilized, idle, and unallocated spend across clusters, namespaces, workloads, and pods, so engineers could right-size proactively instead of finding a “zombie” workload by accident months later." },
      {
        image: ceUtilizationConcept,
        compact: true,
        alt: "Cluster resource utilization map showing total cost split into allocated and unallocated, then further into utilized and idle spend",
        caption: "Total cost broken into the three numbers an engineer could actually act on.",
      },
      { p: "I also correlated cloud events, deployments, manifest changes, autoscaling, with cost spikes, so a Kubernetes replica change from 2 to 3 showed up as the cost driver it was, right next to the manifest line that caused it." },
      {
        image: ceEventCorrelation,
        alt: "Event-to-cost correlation chart with a cost spike linked to a Kubernetes deployment diff showing replicas changed from 2 to 3",
        caption: "The exact deployment diff behind a cost spike, not just a timestamp asking the engineer to go find it themselves.",
      },
      { h2: "Validating with users" },
      { p: "Task-based usability testing on a medium-fidelity prototype showed users lost in breadcrumbs, tabs, and filters, hunting for a buried “Group by” control instead of comparing cost across namespaces and clusters. I flattened the IA, surfaced grouping as visible tabs, moved filters into a dropdown, and turned “single pane of glass” into an actual one-page explorer instead of a slogan." },
      {
        image: ceIAFlatten,
        compact: true,
        alt: "Before and after navigation comparison: a seven-item flat menu versus a simplified three-item menu of Cost Explorer, Budgets, and Settings",
        caption: "What usability testing actually bought us: four fewer places to get lost before reaching the data.",
      },
      { h2: "Impact: UX as a business driver" },
      { p: "Lean UX and a trio that owned the outcome together made Cloud Cost Management a real differentiator for Harness in DevOps, not a feature checkbox next to competitors' tools." },
      { ul: [
        "<strong>85%</strong> customer satisfaction (NPS & usability feedback)",
        "<strong>92%</strong> task success rate in cost tracking and optimization",
        "<strong>60%</strong> improvement in cost allocation and savings for users",
        "<strong>3×</strong> increase in engagement in the first two quarters",
        "<strong>70 customers</strong> by GA, well ahead of where most new categories start",
      ] },
      { p: "I built the executive Overview dashboard as small, interconnected stories, total cost, breakdown, efficiency, top spenders, so a CFO or VP could get account health at a glance without exploring." },
      {
        image: ceFinalOverview,
        compact: true,
        alt: "Continuous Efficiency overview dashboard showing total cost, cost breakdown by cluster, and a cost trend chart",
        caption: "What shipped: the single-pane view the original research panel had been asking for from the start.",
      },
      { p: "One customer, Relativity, cut cloud spend 30 to 40% on a new microservice within 30 days, a six-figure annualized saving, with 10 to 15 more microservices lined up once that first one proved out." },
      {
        image: ceRelativityQuote,
        compact: true,
        maxWidth: "667px",
        alt: "Quote card from Shelby Lewin, Technical Product Manager at Relativity: during the first 30 days of implementation, we saw a noticeable change in our cloud spend across our engineering teams, with six-figure annualized savings",
        caption: "Shelby Lewin, Technical Product Manager at Relativity, on what that 30-day result actually felt like from the customer side.",
      },
      {
        quote:
          "Soma was one of the best UX designers I have come across. Most struggle in the enterprise software world primarily because it's too technical, but she was very comfortable with it. She learnt Harness quickly and hit the ground running from day one. She evangelized the UX standard within Harness, and her energy and passion were especially felt in the Continuous Efficiency [Cloud Cost Management] product. She led the user research, UI/UX design, and a lot of collaboration.",
        quoteName: "Rishi Singh",
        quoteRole: "CTO at Harness, managed Soma directly · now Founder, BaseRock.ai",
      },
      { h2: "What this taught me about research as a strategic tool" },
      { p: "The bigger first for me was proving research itself could be the strategic move, not a phase before the real work of design starts. The Lean UX Canvas and the 25-customer panel got us bought in, kept us honest about what we actually knew, and kept the product right once engineering started building and reality pushed back. UX isn't just what you build, it's how you evolve it: staying hands-on with customers and data through GA, not handing research off once the wireframes were done, is the habit I describe on my <a href=\"/leadership\">Leadership page</a>, and where I learned it holds up under real deadline pressure." },
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
        caption: "The actual math behind one design review cycle, the slide that made inaction expensive to ignore.",
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
        caption: "One source in Figma, one component library, every framework Equinix actually ran in production.",
      },
      { h2: "Team & operating model" },
      { p: "I didn't want to guess at governance, so I interviewed the teams behind Material Design, Fluent, Carbon, and AWS, looking at how they staffed and funded the work, not just how the components looked. Nathan Curtis's framework names four models, solitary, centralized, federated, and a cyclical hybrid of the last two, and I chose the hybrid deliberately: a core team acting as the control tower, with a federation of contributors across products and platforms feeding it and drawing from it." },
      {
        image: quixModels,
        compact: true,
        alt: "Diagram comparing solitary, centralized, federated, and cyclical team models for design systems",
        caption: "The model we chose, and the three we didn't, mapped against how design systems actually scale.",
      },
      { p: "The core team was thirteen people: four designers, five engineers, a front-end architect, an engineering lead, a content writer, and a researcher. I hired generalists with one or two deep specialties, system thinkers who were customer-focused, visually disciplined, and genuinely wanted to make other designers and engineers better. I led it as product owner and function leader, and at peak, the wider contributor base, six product designers and fifteen product engineers across the company, brought the total to <strong>34 people</strong> building on the same system." },
      {
        image: quixHats,
        compact: true,
        alt: "Five cards reading UX Leader, Product Owner, System Leader, Scrum Master, and DesignOps, labeled 'my different hats'",
        caption: "Founding a design system means wearing more than one hat. Most weeks, I wore all five.",
      },
      { h2: "Friendly governance: the 3Gs" },
      { p: "Creatives bristle at the word governance, so I built something friendlier instead, aligned to Equinix's “We Belong” value: the <strong>3Gs</strong>. A Guide core team set direction and arbitrated conflicts. Gurus, regional leads across APAC, EMEA, and AMER, supported local teams and signed off on quality. Guilds, organized by platform and business line, surfaced new patterns and contributed components back." },
      {
        image: quixGovernance,
        compact: true,
        alt: "Diagram of the 3Gs governance model: a central Guide team connected to regional Guru and platform Guild groups",
        caption: "Guide, Guru, Guild: governance that scaled across regions without becoming a bottleneck in any one of them.",
      },
      { p: "Contribution ran through three lanes, bug reports, new elements, and general feedback, each with its own owner and tool. Every new component moved through the same five-step relay before it shipped." },
      {
        image: quixRelay,
        compact: true,
        alt: "Five-step relay diagram: Define, Design, Develop, Document, Publish",
        caption: "Define, design, develop, document, publish: every component, from any team, moved through the same five steps before it counted as part of Quix.",
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
        caption: "Quix documentation site engagement, pulled straight from the analytics, not estimated after the fact.",
      },
      { h2: "Return on investment" },
      { p: "Design systems are hard to sell to leadership on faith, so from day one I tracked ROI as real numbers, not a slide. Across UX and engineering combined, investment ran just over $1.3M against $1.395M in actual realized savings, with projected savings climbing to $2.7M as adoption keeps growing." },
      {
        image: quixROI,
        compact: true,
        alt: "Table showing Quix savings amount: UX investment $681,362 and actual saving $727,528; Dev investment $623,040 and actual saving $667,797; combined investment $1,304,402 and actual saving total $1,395,325",
        caption: "The actual savings math, tracked quarter over quarter, UX and engineering combined.",
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
      "Co-designed a UX career framework across design, research, and content with Asako Nagata: +30% satisfaction with career growth and a stronger talent pipeline.",
    cardRole: "Sr. UX Design Manager, +30% satisfaction with career growth.",
    lead:
      "I'd felt what it's like to have no clear path to grow in UX, so when Equinix's UX team outgrew its one generic career framework, I co-designed a new one with Asako Nagata, a fellow design leader, instead of writing it alone and handing it down.",
    meta: [
      ["Role", "Sr. UX Design Manager"],
      ["Focus", "Career framework, team growth"],
      ["Partners", "Asako Nagata (co-design), UX leadership & HR"],
    ],
    stats: [
      { num: "+30%", label: "Satisfaction with career growth" },
      { num: "3", label: "UX streams covered" },
      { num: "5", label: "Competency themes defined" },
      { num: "45+", label: "UX professionals supported" },
    ],
    sections: [
      { h2: "At a glance" },
      {
        atGlance: [
          {
            n: "Challenge",
            title: "One generic framework, a UX team that had outgrown it",
            p: "45+ designers, researchers, and content folks were spread across product teams with no shared sense of how to grow. Equinix's one career framework covered every discipline the same way and hadn't been touched in years.",
          },
          {
            n: "Approach",
            title: "Co-design it, don't author it alone",
            p: "I built the framework with Asako Nagata rather than solo, benchmarked it against other companies' frameworks, and validated it with HR, leadership, and UX practitioners before calling it done.",
          },
          {
            n: "Impact",
            title: "A framework people actually used to plan their next move",
            p: "Satisfaction with career growth rose 30%, and the framework became the basis for individual growth plans across all three UX streams, not a document that sat in a wiki.",
          },
        ],
      },
      {
        image: cpgCover,
        alt: "A person seen from behind, looking out at a mountain range from a trail",
        caption: "What this project was really about: giving people a visible path, not just a destination.",
      },
      { h2: "The opportunity" },
      { p: "I joined Equinix's UX org in late 2020, when Michael Kopcsak, our Head of UX, had just hand-picked a few senior UX members, myself included, to form a UX leadership team and centralize a function that had been fragmented across product teams. I spent my first weeks interviewing every UX person I could. Two things came up again and again: people didn't know what growth looked like for them, and the one career framework Equinix had was generic across every discipline in the company, built for none of them in particular." },
      { p: "Early in my career, more than once, I asked a manager what separated me from the next level and got tenure as the answer, not a skill or a scope I could go build toward. UX is too broad a field for one generic ladder to fit designers, researchers, and content people equally well, and a UX org that wants senior talent shouldn't have to hire it from outside because it never grew its own." },
      { h2: "Building it with a partner, not alone" },
      { p: "I designed this with <strong>Asako Nagata</strong>, another design leader, rather than writing a framework by myself and asking the team to adopt it. We benchmarked other companies' career frameworks first, kept what worked, and dropped what didn't fit UX's mix of craft and ambiguity. Working through it as a pair also meant neither of us had to be the sole author the rest of the org was reacting to." },
      {
        image: cpgPrinciples,
        compact: true,
        alt: "Three principles for the framework: achievable, motivational, and inspirational",
        caption: "The three principles we held the whole framework to before writing a single level.",
      },
      { h3: "Competencies and skills" },
      { p: "We separated competencies, demonstrable groups of related strengths, from skills, the individual proficiencies underneath them. Five competency themes covered everyone: <strong>Customer First / Product Understanding, Mastery of Craft, Business Acumen, Partnership / Leadership, and Impact</strong>. Only Mastery of Craft changed depending on whether someone was a designer, a researcher, or a content person; the rest stayed shared on purpose, so growth in one stream still meant something in another." },
      {
        image: cpgWheel,
        alt: "Diagram of five competency themes, Mastery of Craft, Business Acumen, Customer First/Product Understanding, Partnership/Leadership, and Impact, arranged around a central figure",
        caption: "Five competencies, one shared language across design, research, and content.",
      },
      { h3: "Levels of expectation" },
      { p: "Each competency had levels along mastery, scope, complexity, and autonomy, written as what a person could do, not as a score. The Impact competency, for example, moves from completing tasks on deadline at L1, to setting the quality bar for your team at L4, to being recognized as a thought leader whose work moves the industry at L7. Nobody reads a number and feels motivated. People read what they can already do and what's one step further, and that's what we wrote." },
      {
        image: cpgImpactLevels,
        alt: "Table showing how the Impact competency progresses across seven levels, from completing tasks on deadline to being recognized as an industry thought leader",
        caption: "The Impact competency, written across all seven levels, junior to fellow.",
      },
      { h3: "Dual-track" },
      { p: "A single ladder only serves people who want to manage other people. Plenty of strong designers and researchers want to keep growing without taking on a team, so we built a dual-track path, a mastery track and a leadership track, the same shape as engineering's IC and management ladders." },
      {
        image: cpgLadder,
        compact: true,
        alt: "Career ladder diagram showing a mastery path from Junior to Fellow and a parallel leadership path from Manager to VP",
        caption: "Two real paths to seniority, not one path with a management detour built in.",
      },
      { h2: "Validating it before calling it done" },
      { p: "We didn't ship this as a finished document. We ran it past HR and UX leadership first, to make sure it could actually plug into performance reviews and promotions, not just live as an aspirational PDF." },
      { p: "HR's real pushback wasn't about the content, it was about precedent. Our proposal was more structured than every other discipline's career path at Equinix, and none of those other paths had been redesigned in years. Publishing something this far ahead of the rest of the company risked friction the moment another team asked why UX got a better framework than they did. It took a few more meetings, this time showing HR data on how design orgs across the industry were already rethinking career growth, to turn that concern into support. HR didn't just approve ours, they opened a workstream to revisit every other discipline's career path using the same thinking." },
      { p: "Then we brought it to UX practitioners themselves, stream by stream, and used it to build individual, actionable growth plans, the real test of whether a level meant anything to the person reading it." },
      {
        image: cpgWipBoard,
        compact: true,
        alt: "Miro board showing work-in-progress level proposals for the design, research, and content UX streams side by side",
        caption: "The three streams' levels, worked out side by side so none of them drifted from the other two.",
      },
      { h2: "Impact" },
      { ul: [
        "<strong>+30%</strong> increase in satisfaction with career growth",
        "<strong>10</strong> promotion growth plans built directly off the framework, <strong>7</strong> approved, four of them my own team members",
        "A framework used to build individual growth plans across all <strong>3</strong> UX streams",
        "A clearer, less subjective promotion process, anchored in the same levels for everyone",
        "HR opened a workstream to redesign every other discipline's career path using the same approach",
      ] },
      { h2: "What this taught me about leading people" },
      { p: "This is the same instinct I write about on my <a href=\"/leadership\">Leadership page</a>: co-create with people instead of handing them a plan, and the clearest sign it's working is when someone pushes back on your draft and turns out to be right. Asako and I could have written this framework faster alone. It would have been weaker, and fewer people would have trusted it enough to actually use it. People plan their next move around frameworks they helped shape, not ones they were handed." },
    ],
  },

  {
    slug: "product-led-growth",
    year: "2022",
    company: "Equinix",
    role: "Head of UX Design & Research, Cloud Edge Infrastructure",
    title: "Product-led Growth with Solution Builder",
    summary:
      "Led UX across Equinix's $160M Edge portfolio, Metal, Network Edge, and Fabric, and turned Solution Builder into a product-led growth engine: 40% faster setup, 5 days cut from the sales cycle.",
    cardRole: "Head of UX Design & Research, Cloud Edge Infrastructure, cut 5 days from the sales cycle.",
    lead:
      "I led UX across Equinix's $160M Edge portfolio, three product teams with three different roadmaps and, after an acquisition, two different cultures. Solution Builder was the shared bet none of them could win alone, and getting there was as much about alignment as it was about design.",
    meta: [
      ["Role", "Head of UX Design & Research, Cloud Edge Infrastructure"],
      ["Focus", "GTM strategy, cross-team alignment, product-led growth"],
      ["Team", "Design, content, research, PM, engineering across all Edge products"],
    ],
    stats: [
      { num: "$160M", label: "Edge infrastructure portfolio" },
      { num: "5 days", label: "Cut from the sales cycle" },
      { num: "40%", label: "Faster setup" },
      { num: "7 mo.", label: "Concept to GA" },
    ],
    sections: [
      { h2: "At a glance" },
      {
        atGlance: [
          {
            n: "Challenge",
            title: "Three roadmaps, two cultures, one platform capability",
            p: "Metal, Network Edge, and Fabric ran on different timelines, and Metal had joined Equinix through acquisition with its own product culture. Solution Builder needed all three to move together, and none of those teams reported to me.",
          },
          {
            n: "Approach",
            title: "Research as the negotiation tool, not just a design input",
            p: "I brought research findings into Metal and Network Edge's own planning reviews myself, not as a deck after the fact, so their leads were reacting to the same evidence in the room instead of to my recommendation secondhand.",
          },
          {
            n: "Impact",
            title: "GA in seven months, and a faster path from interest to revenue",
            p: "Solution Builder shipped with all Network Edge components in seven months, cut 5 days from the sales cycle, and gave Solution Architects and customers a shared, self-serve way to plan infrastructure neither team had before.",
          },
        ],
      },
      {
        video: "https://www.youtube.com/embed/w9zBQtm7zOA",
        caption: "Solution Builder's job was to make a complex, multi-product decision feel like one continuous path.",
      },
      { h2: "The context" },
      { p: "Equinix runs 240+ data centers across 70 metros, and its three primary digital products, <strong>Metal, Network Edge, and Fabric</strong>, let customers solve a wide range of infrastructure needs in one place, what the business called “Triple Play.” That promise only holds if the three products are actually compatible, from the back-end framework up through what a customer sees on screen." },
      {
        image: plgThreeProducts,
        compact: true,
        large: true,
        alt: "Three cards for Equinix's primary digital products: Metal (Build Your Infrastructure), Network Edge (Activate Network Services), and Fabric (Connect Privately)",
        caption: "Three products, three roadmaps, one customer expectation that they work as one.",
      },
      { h2: "Leading across teams that didn't report to me" },
      { p: "Metal, Network Edge, and Fabric each had their own delivery timeline and their own leadership. Metal had also joined Equinix through acquisition, with a product culture that had grown up differently from the rest of the org. Metal's team had shipped on their own release cadence before joining Equinix and didn't see why a shared canvas was worth slowing down for. The first time I brought Solution Builder into one of their planning reviews, the pushback wasn't about the design, it was about why Network Edge's release process should set the pace for their roadmap at all. Aligning a shared platform capability like Solution Builder against three roadmaps meant constant negotiation, and in most rooms I was influencing without authority." },
      { p: "What moved those conversations forward was research, not seniority. I paired that habit with the product trio model, design, product, and engineering owning a problem together rather than handing it down a chain, to keep each team's leadership at the table instead of working around them. Both habits came from Harness, where I'd learned that a data-driven case earns trust across a room a lot faster than a strong opinion does." },
      {
        image: plgChallenges,
        compact: true,
        large: true,
        maxWidth: "718px",
        alt: "Two challenge cards: Triple Play only possible if products are compatible end to end, and no way to plan end-to-end solutions or estimate prices without sales or a Global Solution Architect",
        caption: "What customers told us before Solution Builder existed.",
      },
      { h2: "What we built" },
      { p: "Customers had no way to plan an end-to-end solution, estimate price, or move toward deployment without a conversation with sales or a Global Solution Architect. <strong>Solution Builder</strong> became a visual canvas: drag-and-drop Equinix network components with instant, metro-based pricing across currencies, covering the full Network Edge catalog." },
      {
        image: plgSolutionBuilder,
        alt: "Solution Builder interface showing a network diagram with virtual devices connected to AWS and Azure, with pricing and download options",
        caption: "Solution Builder, in production: a customer's network plan, priced in real time.",
      },
      { h2: "Product-led vs. sales-led growth" },
      { p: "In a product-led model, the product itself drives acquisition and retention, customers experience value before anyone in sales gets involved. Sales-led growth runs in a line, marketing to sales to implementation to success. PLG lets those happen at the same time, and sales becomes an expansion conversation instead of a gate." },
      { p: "At Harness, I'd structured PLG around three questions: the business goal, the user metric that reflects it, and the supporting metrics underneath. We minimized sign-up friction and built a free sandbox so people could feel the product's value almost immediately." },
      {
        compare: {
          label: "Dimension",
          cols: ["PLG at Harness", "PLG at Solution Builder (Equinix)"],
          rows: [
            ["Primary buyer", "DevOps and platform teams self-serving a CI/CD tool.", "Network engineers, plus DevOps and app developers once Metal joined the mix."],
            ["Sign-up gate", "Captured as a lead before the freemium sandbox.", "Removed entirely. Customers design and price with no account at all."],
            ["Where sales enters", "After the sandbox, to convert to a paid tier.", "A Global Solution Architect, brought in only when the customer is ready."],
            ["What carried over", "The three-question framework: business goal, user metric, supporting metrics.", "Same framework, with the sign-up gate removed instead of just minimized."],
          ],
        },
      },
      {
        image: plgSalesLed,
        alt: "Diagram comparing a sales-led flow (product awareness, sign up, try freemium, POC and implementation) to a product-led flow (sign up, try freemium) feeding back into the same sales-led stages",
        caption: "The PLG framework I carried over from Harness and adapted for Solution Builder.",
      },
      { h2: "Applying PLG to an enterprise sales motion" },
      { p: "PLG is harder in enterprise because the users are more sophisticated and the stakes are higher, which is exactly where good UX earns its keep. Equinix's traditional power users were network engineers, but Metal also brought in DevOps and application developers who expected to try before they bought, the way they would with any modern developer tool." },
      { callout: "Do we even need a sign-up for a freemium experience? We can capture the lead for sales to follow up, without forcing commitment first." },
      { p: "The analogy I used with stakeholders was buying a car: you research, compare, customize, and test-drive long before you sign anything. Solution Builder let customers design a solution with zero commitment, then bring in sales or a Global Solution Architect when they were ready, not before." },
      {
        image: plgCarJourney,
        alt: "Car buying journey diagram: research options, ask friends, research and customize online, test drive, buy",
        caption: "The reference I used to make a B2B sales conversation feel as natural as buying a car.",
      },
      { p: "I improved on my earlier Harness approach here: instead of capturing a lead before the freemium experience, I removed the sign-up gate from Solution Builder entirely. Customers could design and price a full solution with no account at all, and only signed up once they were ready to move toward deployment." },
      {
        image: plgReimaginedObjective,
        compact: true,
        maxWidth: "880px",
        alt: "Reimagined Solution Builder objective: users need a way to design end-to-end solutions, estimate prices, and sign up only when ready to deploy, without depending on sales or Global Solution Architects",
        caption: "The objective we rewrote once we agreed sign-up didn't need to come first.",
      },
      { h2: "Impact" },
      { ul: [
        "<strong>$160M</strong> Edge portfolio, three product teams aligned to one platform capability",
        "<strong>40%</strong> faster setup for complex configurations",
        "<strong>5 days</strong> cut from the sales cycle, a real differentiator in enterprise adoption and revenue",
        "General availability with the full Network Edge catalog in <strong>seven months</strong>",
      ] },
      { p: "The team is now extending Solution Builder to Metal components and order placement, the next step toward a platform capability that spans all three products the way customers already expected it to." },
      { h2: "What stayed with me" },
      { p: "The design work here was the easier half. The harder lesson was about alignment. Three teams, three timelines, and after the acquisition, two different cultures. The discipline that worked was the same as aligning any single team: bring evidence, not opinions. Keep people at the table instead of working around them. Let research do the negotiating it's good at, so leadership doesn't have to take it on faith." },
    ],
  },
];

export const getCase = (slug) => cases.find((c) => c.slug === slug);
