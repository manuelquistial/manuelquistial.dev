export const navItems = [
  { key: "projects", path: "/projects" },
  { key: "about", path: "/about" },
  { key: "research", path: "/research" },
] as const;

export type NavItemKey = (typeof navItems)[number]["key"];
