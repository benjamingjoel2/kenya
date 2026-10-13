type P = React.SVGProps<SVGSVGElement>;
const s = (p: P) => ({ fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, viewBox: "0 0 24 24", ...p });

/** Four-point concave "spark" used on every button (8×8 grid). */
export const SparkIcon = (p: P) => (
  <svg viewBox="0 0 8 8" fill="currentColor" aria-hidden {...p}>
    <path d="M8 0C8 0 7.32 2.42 7.32 4C7.32 5.58 8 8 8 8C8 8 5.58 7.32 4 7.32C2.42 7.32 0 8 0 8C0 8 .68 5.58 .68 4C.68 2.42 0 0 0 0C0 0 2.42.68 4 .68C5.58.68 8 0 8 0Z" />
  </svg>
);
export const CalendarIcon = (p: P) => (<svg {...s(p)}><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>);
export const UsersIcon = (p: P) => (<svg {...s(p)}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5M16 4.8a3.5 3.5 0 010 6.4M18 14.8c1.8.7 3 2.4 3.5 5.2" /></svg>);
export const StarsIcon = (p: P) => (<svg {...s(p)}><path d="M12 3l2.2 5.3 5.8.5-4.4 3.8 1.3 5.6L12 15.3 7.1 18.2l1.3-5.6L4 8.8l5.8-.5L12 3z" /></svg>);
export const MealIcon = (p: P) => (<svg {...s(p)}><path d="M7 3v8m-2.5-8v5a2.5 2.5 0 005 0V3M7 11v10M17 3c-2 1.5-3 4-3 7h3v11" /></svg>);

export const ArrowIcon = (p: P) => (<svg {...s(p)}><path d="M4 12h15M13 6l6 6-6 6" /></svg>);
export const ArrowUpRight = (p: P) => (<svg {...s(p)}><path d="M7 17L17 7M8 7h9v9" /></svg>);
export const CheckIcon = (p: P) => (<svg {...s(p)}><path d="M4.5 12.5l5 5 10-11" /></svg>);
export const XIcon = (p: P) => (<svg {...s(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>);
export const PlusIcon = (p: P) => (<svg {...s(p)}><path d="M12 5v14M5 12h14" /></svg>);
export const MinusIcon = (p: P) => (<svg {...s(p)}><path d="M5 12h14" /></svg>);
export const MenuIcon = (p: P) => (<svg {...s(p)}><path d="M3 7h18M3 12h18M3 17h12" /></svg>);
export const ClockIcon = (p: P) => (<svg {...s(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
export const PinIcon = (p: P) => (<svg {...s(p)}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
export const UserIcon = (p: P) => (<svg {...s(p)}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>);
export const TentIcon = (p: P) => (<svg {...s(p)}><path d="M12 3L2 20h20L12 3zM12 3v17M8.5 20L12 13l3.5 7" /></svg>);
export const ScaleIcon = (p: P) => (<svg {...s(p)}><path d="M12 3v18M5 21h14M4 8h16M7 8l-3 7a3 3 0 006 0L7 8zM17 8l-3 7a3 3 0 006 0l-3-7z" /></svg>);
export const ChatIcon = (p: P) => (<svg {...s(p)}><path d="M21 12a8 8 0 01-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1121 12z" /></svg>);
export const MapIcon = (p: P) => (<svg {...s(p)}><path d="M9 4L3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4zM9 4v13M15 6.5v13" /></svg>);
export const SunIcon = (p: P) => (<svg {...s(p)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
export const MailIcon = (p: P) => (<svg {...s(p)}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3.5 6l8.5 7 8.5-7" /></svg>);
export const PhoneIcon = (p: P) => (<svg {...s(p)}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" /></svg>);
export const PlaneIcon = (p: P) => (<svg {...s(p)}><path d="M10.5 13.5L3 11l1.5-1.5 8 1 4-4.5c1-1 2.5-1.5 3.5-.5s.5 2.5-.5 3.5l-4.5 4 1 8L14.5 21 12 13.5" /></svg>);
export const LeafIcon = (p: P) => (<svg {...s(p)}><path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15zM5 19l7-7" /></svg>);

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zm0-21.6A11.8 11.8 0 001.9 18l-1.7 6 6.1-1.6A11.8 11.8 0 1012 .2z" />
  </svg>
);
