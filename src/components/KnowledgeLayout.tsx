import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { KnowledgeSidebar } from "@/components/KnowledgeSidebar";
import { Menu } from "lucide-react";

interface KnowledgeLayoutProps {
  children: React.ReactNode;
}

export function KnowledgeLayout({ children }: KnowledgeLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <KnowledgeSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b bg-card flex items-center px-4 sticky top-0 z-10">
            <SidebarTrigger className="mr-3">
              <Menu className="h-5 w-5" />
            </SidebarTrigger>
            <h1 className="text-lg font-semibold">Knowledge Base</h1>
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
