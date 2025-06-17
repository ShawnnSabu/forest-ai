import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/ChatWidget";
import ChatModal from "./components/ChatModal";
import { ChatProvider, useChat } from "./contexts/ChatContext";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isChatModalOpen, closeChatModal } = useChat();

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<Chat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ChatWidget />
      <ChatModal isOpen={isChatModalOpen} onClose={closeChatModal} />
    </TooltipProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChatProvider>
      <AppContent />
    </ChatProvider>
  </QueryClientProvider>
);

export default App;
