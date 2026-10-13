import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 80, background: "linear-gradient(160deg,#c8963e 0%,#7d3328 55%,#1e1c1a 100%)", color: "#f6f1e8" }}>
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#e2bd76" }}>{site.tagline}</div>
        <div style={{ fontSize: 120, marginTop: 20, }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 10, color: "#e2bd76", }}>{site.signOff}</div>
      </div>
    ),
    size,
  );
}
