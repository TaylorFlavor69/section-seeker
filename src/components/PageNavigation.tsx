import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageInfo {
  title: string;
  url: string;
  section: string;
}

const pages: PageInfo[] = [
  { title: "Introduction", url: "/", section: "Getting Started" },
  { title: "Quick Start", url: "/quick-start", section: "Getting Started" },
  { title: "Components", url: "/components", section: "Core Concepts" },
  { title: "Data Models", url: "/data-models", section: "Core Concepts" },
  { title: "API Reference", url: "/api-reference", section: "Core Concepts" },
  { title: "Configuration", url: "/configuration", section: "Advanced" },
];

interface PageNavigationProps {
  currentPath: string;
}

export function PageNavigation({ currentPath }: PageNavigationProps) {
  const currentIndex = pages.findIndex(page => page.url === currentPath);
  
  if (currentIndex === -1) return null;

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;
  const currentPage = pages[currentIndex];

  const isNextPageNewSection = nextPage && nextPage.section !== currentPage.section;
  const isPrevPageDifferentSection = prevPage && prevPage.section !== currentPage.section;

  return (
    <nav className="mt-12 pt-8 border-t flex items-center justify-between gap-4">
      {prevPage ? (
        <Link to={prevPage.url} className="flex-1 group">
          <Button
            variant="outline"
            className={`w-full justify-start ${
              isPrevPageDifferentSection
                ? "bg-muted/50 border-primary/30 hover:bg-muted"
                : ""
            }`}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            <div className="flex flex-col items-start text-left">
              {isPrevPageDifferentSection && (
                <span className="text-xs text-muted-foreground mb-0.5">
                  ← Previous Section: {prevPage.section}
                </span>
              )}
              <span className="font-medium">{prevPage.title}</span>
            </div>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextPage ? (
        <Link to={nextPage.url} className="flex-1 group">
          <Button
            variant={isNextPageNewSection ? "default" : "outline"}
            className={`w-full justify-end ${
              isNextPageNewSection
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : ""
            }`}
          >
            <div className="flex flex-col items-end text-right">
              {isNextPageNewSection && (
                <span className="text-xs opacity-90 mb-0.5 flex items-center gap-1">
                  Next Section: {nextPage.section} <MoveRight className="h-3 w-3" />
                </span>
              )}
              <span className="font-medium">{nextPage.title}</span>
            </div>
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
