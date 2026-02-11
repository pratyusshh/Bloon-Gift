import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BouquetProvider } from "@/context/BouquetContext";
import FlowerGallery from "./pages/FlowerGallery";
import BouquetBuilder from "./pages/BouquetBuilder";
import WriteMessage from "./pages/WriteMessage";
import SharePage from "./pages/SharePage";
import RecipientView from "./pages/RecipientView";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BouquetProvider>
          <Routes>
            <Route path="/" element={<FlowerGallery />} />
            <Route path="/builder" element={<BouquetBuilder />} />
            <Route path="/message" element={<WriteMessage />} />
            <Route path="/share" element={<SharePage />} />
            <Route path="/view/:data" element={<RecipientView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BouquetProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
