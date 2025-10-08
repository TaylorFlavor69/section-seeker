import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KnowledgeLayout } from "./components/KnowledgeLayout";
import Introduction from "./pages/Introduction";
import QuickStart from "./pages/QuickStart";
import Components from "./pages/Components";
import DataModels from "./pages/DataModels";
import ApiReference from "./pages/ApiReference";
import Configuration from "./pages/Configuration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KnowledgeLayout><Introduction /></KnowledgeLayout>} />
          <Route path="/quick-start" element={<KnowledgeLayout><QuickStart /></KnowledgeLayout>} />
          <Route path="/components" element={<KnowledgeLayout><Components /></KnowledgeLayout>} />
          <Route path="/data-models" element={<KnowledgeLayout><DataModels /></KnowledgeLayout>} />
          <Route path="/api-reference" element={<KnowledgeLayout><ApiReference /></KnowledgeLayout>} />
          <Route path="/configuration" element={<KnowledgeLayout><Configuration /></KnowledgeLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
