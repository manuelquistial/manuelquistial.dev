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
  "/projects/udea-fcf-digital-ecosystem",
  "/research",
  "/contact",
] as const;
