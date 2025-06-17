import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal = ({ isOpen, onClose }: ChatModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🦊</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Chat with Pebble</h2>
              <p className="text-sm text-gray-600">Your wise fox companion</p>
            </div>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Iframe */}
        <div className="h-full">
          <iframe 
            src="https://app.relevanceai.com/agents/f1db6c/ce7ea2b516a3-4692-b6da-082adf840ec3/d3cda784-e280-4fd4-9dc1-c93c93c5fb85/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            className="rounded-b-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatModal; 