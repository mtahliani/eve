import React from 'react';
import { Header } from './components/Header';
import { MessageList } from './components/MessageList';
import { ChatInput } from './components/ChatInput';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <MessageList messages={messages} />
        </div>
      </main>
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;