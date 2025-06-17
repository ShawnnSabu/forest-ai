import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Create and inject the script
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-relevanceai-share-id', 'f1db6c/ce7ea2b516a3-4692-b6da-082adf840ec3/d3cda784-e280-4fd4-9dc1-c93c93c5fb85');
    script.src = 'https://app.relevanceai.com/embed/chat-bubble.js';
    script.setAttribute('data-share-styles', 'hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false');
    
    // Add custom fox icon styling
    const style = document.createElement('style');
    style.textContent = `
      .relevanceai-chat-bubble {
        background: linear-gradient(135deg, #685FFF 0%, #8B5CF6 100%) !important;
        border-radius: 50% !important;
        box-shadow: 0 4px 12px rgba(104, 95, 255, 0.3) !important;
        transition: all 0.3s ease !important;
      }
      
      .relevanceai-chat-bubble:hover {
        transform: scale(1.1) !important;
        box-shadow: 0 6px 20px rgba(104, 95, 255, 0.4) !important;
      }
      
      .relevanceai-chat-bubble::before {
        content: '🦊' !important;
        font-size: 24px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        height: 100% !important;
      }
      
      .relevanceai-chat-bubble svg {
        display: none !important;
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatWidget; 