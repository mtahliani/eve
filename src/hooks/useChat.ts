import { useState, useCallback } from 'react';
import { sendMessage } from '../services/api';
import type { ChatMessage } from '../types';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((content: string, isUser: boolean) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const handleSendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    addMessage(content, true);
    setIsLoading(true);

    try {
      const response = await sendMessage(content);
      if (response.success && response.data?.response) {
        addMessage(response.data.response, false);
      } else {
        addMessage('Sorry, I encountered an error processing your request.', false);
      }
    } catch (error) {
      addMessage('An unexpected error occurred. Please try again later.', false);
    } finally {
      setIsLoading(false);
    }
  }, [addMessage]);

  return {
    messages,
    isLoading,
    sendMessage: handleSendMessage,
  };
}