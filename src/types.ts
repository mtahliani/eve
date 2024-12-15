export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface APIResponse {
  success: boolean;
  data?: {
    response: string;
  };
  error?: string;
}