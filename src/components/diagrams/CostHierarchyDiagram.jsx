export default function CostHierarchyDiagram() {
  const centerX = 380;
  const levels = [
    { label: "Cloud Provider", sub: "AWS · GCP · Azure", width: 560 },
    { label: "Service & Application", sub: "EC2 · EKS · ECS · SaaS apps", width: 460 },
    { label: "Environment", sub: "Dev · QA · Staging · Prod", width: 360 },
    { label: "Cluster & Namespace", sub: "Per-team, per-workload grouping", width: 260 },
    { label: "Workload & Pod", sub: "Requested vs. actually used", width: 170 },
  ];
  const top = 24;
  const rowH = 62;
  const gap = 10;

  return (
    <svg
      viewBox={`0 0 760 ${top + levels.length * (rowH + gap) + 20}`}
      role="img"
      aria-label="Diagram: cost rolls up from cloud provider, through service and application, environment, cluster and namespace, down to individual workloads and pods."
      style={{ width: "100%", height: "auto" }}
    >
      {levels.map((level, i) => {
        const y = top + i * (rowH + gap);
        const isLast = i === levels.length - 1;
        return (
          <g key={level.label}>
            {i > 0 && (
              <line
                x1={centerX}
                y1={y - gap}
                x2={centerX}
                y2={y}
                stroke="var(--ink-3)"
                strokeWidth="1.2"
              />
            )}
            <rect
              x={centerX - level.width / 2}
              y={y}
              width={level.width}
              height={rowH}
              rx="6"
              fill={isLast ? "var(--accent)" : "var(--card)"}
              opacity={isLast ? 0.14 : 1}
              stroke={isLast ? "var(--accent)" : "var(--line)"}
              strokeWidth={isLast ? 1.6 : 1.2}
            />
            <text
              x={centerX}
              y={y + 26}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={isLast ? "var(--accent-ink)" : "var(--ink)"}
              fontFamily="var(--sans)"
            >
              {level.label}
            </text>
            <text
              x={centerX}
              y={y + 45}
              textAnchor="middle"
              fontSize="11.5"
              fill="var(--ink-3)"
              fontFamily="var(--sans)"
            >
              {level.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
