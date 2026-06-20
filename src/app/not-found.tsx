import { getSiteContent } from "@/content/getSiteContent";
import { NotFoundView } from "@/components/layout/NotFoundView";

export default function NotFound() {
  const content = getSiteContent("en");

  return <NotFoundView locale="en" notFound={content.notFound} />;
}
