/** Stylised route map placeholder. TODO: replace with Mapbox/Google static map or illustrated map per itinerary. */
export function MapPlaceholder({ stops }: { stops: string[] }) {
  const pts = stops.map((s, i) => {
    const t = stops.length === 1 ? 0.5 : i / (stops.length - 1);
    return { s, x: 70 + t * 460, y: 210 - Math.sin(t * Math.PI) * 120 + (i % 2 ? 30 : 0) };
  });
  return (
    <figure className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-sand/60">
      <svg viewBox="0 0 600 320" role="img" aria-label={`Route map placeholder: ${stops.join(" to ")}`} className="h-auto w-full">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0v24" fill="none" stroke="#ddd3c2" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="320" fill="url(#grid)" />
        <path d="M30 280 C 150 240 200 300 330 260 S 520 200 580 240" fill="none" stroke="#c8963e" strokeOpacity=".25" strokeWidth="40" strokeLinecap="round" />
        <polyline points={pts.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke="#1e1c1a" strokeWidth="2" strokeDasharray="6 6" />
        {pts.map((p, i) => (
          <g key={p.s}>
            <circle cx={p.x} cy={p.y} r="9" fill={i === 0 ? "#b4342a" : "#3e5b3a"} stroke="#f6f1e8" strokeWidth="3" />
            <text x={p.x} y={p.y - 18} textAnchor="middle" fontSize="14" fontFamily="sans-serif" fill="#1e1c1a" fontWeight="600">
              {p.s}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="border-t border-line px-5 py-3 text-xs text-stone">Map placeholder: indicative route only, not to scale.</figcaption>
    </figure>
  );
}
