import React, { useEffect, useRef } from 'react';
import { ConsoleMessage } from './ConsoleMessage';
import { useConsoleStore } from '../../stores/consoleStore';
import { useAutoScroll } from '../../hooks/useAutoScroll';

export function Console() {
  const containerRef = useRef<HTMLDivElement>(null);
  const messages = useConsoleStore(state => state.messages);
  
  useAutoScroll(containerRef, messages);

  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm">
      <div 
        ref={containerRef}
        className="max-h-[500px] overflow-y-auto"
      >
        {messages.map((message, index) => (
          <ConsoleMessage 
            key={index}
            message={message}
          />
        ))}
      </div>
    </div>
  );
}