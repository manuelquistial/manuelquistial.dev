import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { site } from "@/config/site";

const knowsAbout = skillCategories
  .flatMap((category) => category.skills)
  .slice(0, 12);

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: site.url,
    email: profile.email,
    sameAs: [profile.linkedin, profile.github],
    knowsAbout,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
