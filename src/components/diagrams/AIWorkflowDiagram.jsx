import figmaIcon from "../../assets/images/logos/favicons/figma.png";
import githubIcon from "../../assets/images/logos/favicons/github.png";
import claudeIcon from "../../assets/images/logos/favicons/claude.png";
import vscodeIcon from "../../assets/images/logos/favicons/vscode.png";

const ICONS = {
  Figma: figmaIcon,
  GitHub: githubIcon,
  Claude: claudeIcon,
  "VS Code": vscodeIcon,
};

function IntegrationIcon({ label, x, y }) {
  const icon = ICONS[label];
  if (!icon) return null;
  const size = 20;
  const chip = size + 8;
  return (
    <g>
      <rect x={x - chip / 2} y={y - chip / 2} width={chip} height={chip} rx="6" fill="#fff" stroke="var(--line)" strokeWidth="1" />
      <image href={icon} x={x - size / 2} y={y - size / 2} width={size} height={size} />
    </g>
  );
}

export default function AIWorkflowDiagram() {
  const integrations = ["Figma", "GitHub", "Claude", "VS Code"];
  const hubX = 380;
  const sprintY = 20;
  const validationY = 95;
  const tokensY = 175;
  const hubY = 250;
  const integrationY = 359;
  const shipY = 474;

  const spreadX = (i, n, width, center) =>
    center - width / 2 + (n === 1 ? width / 2 : (i * width) / (n - 1));

  return (
    <svg
      viewBox="0 0 760 524"
      role="img"
      aria-label="Diagram: a design thinking workshop prototype gets validated with CISO, NetSec, and InfoSec design partners, then feeds a tokenized atomic design system that moves both ways with code through an MCP server connected to Figma, GitHub, Claude, and VS Code, before shipping to production."
      style={{ width: "100%", height: "auto" }}
    >
      <rect x={hubX - 160} y={sprintY} width="320" height="40" rx="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.4" />
      <text x={hubX} y={sprintY + 17} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--ink)" fontFamily="var(--sans)">
        Design Thinking Workshop, product trio
      </text>
      <text x={hubX} y={sprintY + 32} textAnchor="middle" fontSize="10.5" fill="var(--ink-3)" fontFamily="var(--sans)">
        Interactive HTML prototype, real data
      </text>

      <line x1={hubX} y1={sprintY + 40} x2={hubX} y2={validationY} stroke="var(--ink-3)" strokeWidth="1.2" />

      <rect x={hubX - 170} y={validationY} width="340" height="40" rx="6" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" strokeWidth="1.4" />
      <text x={hubX} y={validationY + 17} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--accent-ink)" fontFamily="var(--sans)">
        Validated with design partners
      </text>
      <text x={hubX} y={validationY + 32} textAnchor="middle" fontSize="10.5" fill="var(--ink-3)" fontFamily="var(--sans)">
        CISO · NetSec · InfoSec
      </text>

      <line x1={hubX} y1={validationY + 40} x2={hubX} y2={tokensY} stroke="var(--ink-3)" strokeWidth="1.2" />

      <rect x={hubX - 115} y={tokensY} width="230" height="36" rx="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.4" />
      <text x={hubX} y={tokensY + 23} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)" fontFamily="var(--sans)">
        Tokenized Atomic Design System
      </text>

      <line x1={hubX} y1={tokensY + 36} x2={hubX} y2={hubY} stroke="var(--ink-3)" strokeWidth="1.2" />

      <rect x={hubX - 90} y={hubY} width="180" height="54" rx="6" fill="var(--accent)" opacity="0.14" stroke="var(--accent)" strokeWidth="1.6" />
      <text x={hubX} y={hubY + 23} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--accent-ink)" fontFamily="var(--sans)">
        MCP Server
      </text>
      <text x={hubX} y={hubY + 39} textAnchor="middle" fontSize="10" fontStyle="italic" fill="var(--ink-3)" fontFamily="var(--sans)">
        design ⇄ code, both ways
      </text>

      {integrations.map((label, i) => {
        const ix = spreadX(i, integrations.length, 600, hubX);
        return (
          <g key={label}>
            <line x1={hubX} y1={hubY + 54} x2={ix} y2={integrationY} stroke="var(--line)" strokeWidth="1.2" />
            <rect x={ix - 50} y={integrationY} width="100" height="64" rx="6" fill="var(--card)" stroke="var(--line)" strokeWidth="1.2" />
            <IntegrationIcon label={label} x={ix} y={integrationY + 22} />
            <text x={ix} y={integrationY + 53} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="var(--ink)" fontFamily="var(--sans)">
              {label}
            </text>
          </g>
        );
      })}

      {integrations.map((label, i) => {
        const ix = spreadX(i, integrations.length, 600, hubX);
        return (
          <line
            key={`ship-${label}`}
            x1={ix}
            y1={integrationY + 64}
            x2={hubX}
            y2={shipY}
            stroke="var(--ink-3)"
            strokeWidth="1"
            opacity="0.6"
          />
        );
      })}

      <rect x={hubX - 150} y={shipY} width="300" height="38" rx="6" fill="var(--paper-2)" stroke="var(--line)" strokeWidth="1.2" />
      <text x={hubX} y={shipY + 24} textAnchor="middle" fontSize="12.5" fontWeight="600" fill="var(--ink)" fontFamily="var(--sans)">
        Shipped to production, quality bar intact
      </text>
    </svg>
  );
}
