import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the sun-on-horizon mark on charcoal. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#1e1c1a" }}>
        <svg width="120" height="120" viewBox="0 0 20 20">
          <circle cx="10" cy="12" r="5" fill="#c8963e" />
          <path d="M3 12a7 7 0 0114 0" fill="none" stroke="#c8963e" strokeWidth="1.4" opacity=".55" />
          <rect x="1" y="14.2" width="18" height="1.8" rx=".9" fill="#f6f1e8" />
        </svg>
      </div>
    ),
    size,
  );
}
