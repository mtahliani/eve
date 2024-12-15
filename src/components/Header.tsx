import React from 'react';
import { MessageSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div className="max-w-3xl mx-auto px-4 h-16 flex items-center">
        <MessageSquare className="w-6 h-6 text-indigo-600 mr-2" />
        <h1 className="text-xl font-semibold text-gray-800">AI Assistant</h1>
      </div>
    </header>
  );
}