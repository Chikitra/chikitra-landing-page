import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<Index />} />
          
          {/* Routes that scroll to sections on the landing page */}
          <Route path="/about" element={<Index />} />
          <Route path="/features" element={<Index />} />
          <Route path="/pricing" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/book-demo" element={<Index />} />
          <Route path="/testimonials" element={<Index />} />
          
          {/* Sign in page */}
          <Route path="/signin" element={<SignIn />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
