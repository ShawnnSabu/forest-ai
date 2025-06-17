import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatContextType {
  isChatModalOpen: boolean;
  openChatModal: () => void;
  closeChatModal: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  return (
    <ChatContext.Provider value={{ isChatModalOpen, openChatModal, closeChatModal }}>
      {children}
    </ChatContext.Provider>
  );
}; 