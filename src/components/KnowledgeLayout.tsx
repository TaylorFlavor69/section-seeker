import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { KnowledgeSidebar } from "@/components/KnowledgeSidebar";
import { Menu, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface KnowledgeLayoutProps {
  children: React.ReactNode;
}

export function KnowledgeLayout({ children }: KnowledgeLayoutProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "Page link copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy link to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <KnowledgeSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b bg-card flex items-center justify-between px-4 sticky top-0 z-10">
            <div className="flex items-center">
              <SidebarTrigger className="mr-3">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              <h1 className="text-lg font-semibold">Knowledge Base</h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </header>
          
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
