import React from 'react';
import { marked } from 'marked';

interface MessageProps {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export function Message({ content, isUser, timestamp }: MessageProps) {
  const formattedTime = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(timestamp);

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : (
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        )}
        <div
          className={`text-xs mt-1 ${
            isUser ? 'text-indigo-200' : 'text-gray-500'
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
}