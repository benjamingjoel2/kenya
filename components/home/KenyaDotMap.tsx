import Link from "next/link";
import { destinations } from "@/data/destinations";

/** Approximate coordinates (lat, lon) used to place each destination on the dot map. */
const coords: Record<string, [number, number]> = {
  "masai-mara": [-1.5, 35.1],
  amboseli: [-2.65, 37.25],
  samburu: [0.6, 37.55],
  "laikipia-ol-pejeta": [0.05, 36.85],
  tsavo: [-3.0, 38.5],
  "lake-nakuru": [-0.37, 36.08],
  "naivasha-hells-gate": [-0.85, 36.35],
  lewa: [0.22, 37.45],
  meru: [0.08, 38.2],
  "mount-kenya": [-0.15, 37.3],
  nairobi: [-1.29, 36.82],
  "diani-beach": [-4.3, 39.58],
  lamu: [-2.27, 40.9],
  "watamu-malindi": [-3.3, 40.05],
};

// Map window: southern two-thirds of Kenya, where every destination sits.
const W = 760;
const H = 640;
const LON = [33.9, 41.6] as const;
const LAT = [1.4, -4.9] as const;
const project = ([lat, lon]: [number, number]) => ({
  x: ((lon - LON[0]) / (LON[1] - LON[0])) * W,
  y: ((LAT[0] - lat) / (LAT[0] - LAT[1])) * H,
});

/**
 * Glowing dot map (reference "Explore by destination"): every destination is a
 * savanna-gold point with a soft halo, linking to its page.
 */
export function KenyaDotMap() {
  const points = destinations.filter((d) => coords[d.slug]).map((d) => ({ d, ...project(coords[d.slug]) }));
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Map of Safari Njema destinations across Kenya">
        <defs>
          <radialGradient id="halo">
            <stop offset="0" stopColor="#c8963e" stopOpacity=".55" />
            <stop offset="1" stopColor="#c8963e" stopOpacity="0" />
          </radialGradient>
          <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#1e1c1a" fillOpacity=".09" />
          </pattern>
        </defs>
        <rect width={W} height={H} rx="24" fill="url(#dots)" />
        <text x={W - 24} y={H - 28} textAnchor="end" className="fill-stone text-[13px]">
          Indian Ocean
        </text>
        {points.map(({ d, x, y }, i) => (
          <g key={d.slug} className="group/pt">
            <circle cx={x} cy={y} r={d.slug === "masai-mara" ? 34 : 22} fill="url(#halo)" className="sn-pulse" style={{ animationDelay: `${(i % 5) * 0.4}s` }} />
            <circle cx={x} cy={y} r={d.slug === "masai-mara" || d.slug === "nairobi" ? 5 : 3.5} fill="#c8963e" />
          </g>
        ))}
      </svg>
      {/* Accessible, positioned labels */}
      <ul className="absolute inset-0">
        {points.map(({ d, x, y }) => (
          <li key={d.slug} className="absolute" style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}>
            <Link
              href={`/destinations/${d.slug}`}
              className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-3 focus-visible:outline-offset-0"
              aria-label={d.name}
            >
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 rounded-full bg-charcoal px-3 py-1.5 text-xs font-medium whitespace-nowrap text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                {d.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
