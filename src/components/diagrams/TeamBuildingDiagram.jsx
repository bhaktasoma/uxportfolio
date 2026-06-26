export default function TeamBuildingDiagram() {
  const headX = 380;
  const headY = 30;
  const pillarY = 110;
  const pillarW = 210;
  const pillarGap = 25;
  const totalWidth = pillarW * 3 + pillarGap * 2;
  const startX = headX - totalWidth / 2;
  const pillarX = [startX, startX + pillarW + pillarGap, startX + (pillarW + pillarGap) * 2];
  const subY = pillarY + 60;
  const outcomeY = 250;

  const pillars = [
    {
      title: "Strategic Research",
      sub: ["CISO", "NetSec · InfoSec"],
    },
    {
      title: "Product Design",
      sub: ["12 design partners", "4 designers"],
    },
    {
      title: "Business Design",
      sub: ["Brand & sales", "Investor pitch"],
    },
  ];

  return (
    <svg
      viewBox="0 0 760 320"
      role="img"
      aria-label="Diagram: Head of UX builds three verticals, Strategic Research with CISO, NetSec, and InfoSec partners, Product Design, and Business Design, that converge into compounding growth from seed round to ARR target."
      style={{ width: "100%", height: "auto" }}
    >
      <rect x={headX - 110} y={headY} width="220" height="38" rx="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.4" />
      <text x={headX} y={headY + 16} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--ink)" fontFamily="var(--sans)">
        Head of UX (Founding)
      </text>
      <text x={headX} y={headY + 30} textAnchor="middle" fontSize="10.5" fill="var(--ink-3)" fontFamily="var(--sans)">
        Maturing the design function
      </text>

      {pillarX.map((px, i) => (
        <line key={`hl-${i}`} x1={headX} y1={headY + 38} x2={px + pillarW / 2} y2={pillarY} stroke="var(--ink-3)" strokeWidth="1.2" />
      ))}

      {pillars.map((pillar, i) => (
        <g key={pillar.title}>
          <rect
            x={pillarX[i]}
            y={pillarY}
            width={pillarW}
            height="40"
            rx="6"
            fill="var(--accent)"
            opacity="0.12"
            stroke="var(--accent)"
            strokeWidth="1.4"
          />
          <text
            x={pillarX[i] + pillarW / 2}
            y={pillarY + 24}
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="var(--accent-ink)"
            fontFamily="var(--sans)"
          >
            {pillar.title}
          </text>

          <line x1={pillarX[i] + pillarW / 2} y1={pillarY + 40} x2={pillarX[i] + pillarW / 2} y2={subY} stroke="var(--line)" strokeWidth="1.2" />
          <rect x={pillarX[i]} y={subY} width={pillarW} height="44" rx="6" fill="var(--card)" stroke="var(--line)" strokeWidth="1.2" />
          <text
            x={pillarX[i] + pillarW / 2}
            y={subY + 18}
            textAnchor="middle"
            fontSize="11"
            fill="var(--ink-2)"
            fontFamily="var(--sans)"
          >
            {pillar.sub[0]}
          </text>
          {pillar.sub[1] && (
            <text
              x={pillarX[i] + pillarW / 2}
              y={subY + 33}
              textAnchor="middle"
              fontSize="11"
              fill="var(--ink-2)"
              fontFamily="var(--sans)"
            >
              {pillar.sub[1]}
            </text>
          )}

          <line x1={pillarX[i] + pillarW / 2} y1={subY + 44} x2={headX} y2={outcomeY} stroke="var(--accent)" strokeWidth="1.4" opacity="0.55" />
        </g>
      ))}

      <rect x={headX - 175} y={outcomeY} width="350" height="44" rx="6" fill="var(--accent)" opacity="0.14" stroke="var(--accent)" strokeWidth="1.6" />
      <text x={headX} y={outcomeY + 19} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--accent-ink)" fontFamily="var(--sans)">
        Compounding growth
      </text>
      <text x={headX} y={outcomeY + 34} textAnchor="middle" fontSize="11.5" fill="var(--ink-2)" fontFamily="var(--sans)">
        $30M seed round secured → $1M ARR targeted
      </text>
    </svg>
  );
}
