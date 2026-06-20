import { siteContent } from "@/content";
import { NotFoundView } from "@/components/layout/NotFoundView";

export default function NotFound() {
  return <NotFoundView notFound={siteContent.notFound} />;
}
