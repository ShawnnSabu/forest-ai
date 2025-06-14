import React, { useState } from 'react';

const ChatAgent = () => {
  const [isChatVisible, setChatVisible] = useState(false);

  const loadChat = () => {
    setChatVisible(true);

    if (!document.getElementById('relevanceChatScript')) {
      const script = document.createElement('script');
      script.defer = true;
      script.id = 'relevanceChatScript';
      script.src = 'https://app.relevanceai.com/embed/chat-ui.js';
      script.setAttribute('data-relevanceai-share-id', 'd7b62b/8765b50edd92-44a9-9b86-71521727508d/2eae873f-0cac-4a7f-aa24-c1ecde49edcd');
      script.setAttribute('data-container-id', 'chatContainer');
      document.body.appendChild(script);
    }
  };

  return (
    <div>
      <button
        onClick={loadChat}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#685FFF',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Talk to Pebble 🦊
      </button>

      {isChatVisible && (
        <div
          id="chatContainer"
          style={{
            marginTop: '20px',
            width: '100%',
            height: '600px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        />
      )}
    </div>
  );
};

export default ChatAgent;
