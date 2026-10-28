export const navItems = [
  { key: "projects", path: "/projects", number: "01" },
  { key: "research", path: "/research", number: "02" },
  { key: "learn", path: "/aprendamos", number: "03" },
  { key: "about", path: "/about", number: "04" },
] as const;

export type NavItemKey = (typeof navItems)[number]["key"];
