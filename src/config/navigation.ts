export const navItems = [
  { key: "home", path: "" },
  { key: "about", path: "/about" },
  { key: "projects", path: "/projects" },
  { key: "research", path: "/research" },
  { key: "contact", path: "/contact" },
] as const;

export type NavItemKey = (typeof navItems)[number]["key"];
