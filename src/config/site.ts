import { profile } from "@/data/profile";

export const site = {
  url: "https://manuelquistial.dev",
  name: profile.shortName,
  ogImage: "/opengraph-image",
} as const;

export const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/research",
  "/contact",
] as const;
