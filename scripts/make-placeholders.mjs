// Generates local SVG placeholder images used when NEXT_PUBLIC_IMAGE_PLACEHOLDERS=1.
import { writeFileSync, mkdirSync } from "node:fs";

const tones = {
  gold: { sky: ["#f3c77a", "#d98a3d"], sun: "#fff1cf", far: "#b8743a", near: "#5a3a1f", tree: "#2b1d12" },
  dusk: { sky: ["#f0a36b", "#9b3b2f"], sun: "#ffe0b0", far: "#7d3328", near: "#3d1d18", tree: "#1e1210" },
  green: { sky: ["#cfe0c4", "#7f9d77"], sun: "#f7f3dc", far: "#56744f", near: "#2f4a2c", tree: "#1d2f1b" },
  sea: { sky: ["#bfe3e6", "#5fa8b5"], sun: "#fffbe8", far: "#2f7f8f", near: "#e9dcc0", tree: "#2c4a3a" },
  earth: { sky: ["#ead6b8", "#c48a5a"], sun: "#fff6e3", far: "#a35a3a", near: "#6b3420", tree: "#2e1a12" },
  night: { sky: ["#3a4466", "#1a1c2c"], sun: "#f1e9cf", far: "#2a2f45", near: "#161826", tree: "#0c0d14" },
};

const svg = (t) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.sky[0]}"/><stop offset="1" stop-color="${t.sky[1]}"/></linearGradient>
<radialGradient id="s"><stop offset="0" stop-color="${t.sun}"/><stop offset="1" stop-color="${t.sun}" stop-opacity="0"/></radialGradient></defs>
<rect width="1600" height="1000" fill="url(#g)"/>
<circle cx="1100" cy="560" r="260" fill="url(#s)" opacity=".7"/><circle cx="1100" cy="560" r="90" fill="${t.sun}" opacity=".9"/>
<path d="M0 640 C 250 560 420 600 640 570 S 1100 520 1600 600 V1000 H0Z" fill="${t.far}" opacity=".85"/>
<path d="M0 760 C 300 700 600 740 900 720 S 1400 690 1600 730 V1000 H0Z" fill="${t.near}"/>
<g fill="${t.tree}"><rect x="372" y="560" width="10" height="190"/><path d="M250 575 C 300 520 460 520 510 575 C 450 590 320 592 250 575Z"/><path d="M290 548 C 330 505 430 505 470 548 C 420 560 340 560 290 548Z"/></g>
</svg>`;

mkdirSync("public/placeholders", { recursive: true });
for (const [name, t] of Object.entries(tones)) writeFileSync(`public/placeholders/${name}.svg`, svg(t));
console.log("placeholders written:", Object.keys(tones).join(", "));
