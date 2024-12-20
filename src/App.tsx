import React from 'react';
import { Console } from './components/Console/Console';
import { useConsoleStore } from './stores/consoleStore';

function App() {
  const { log, error, warn, info } = useConsoleStore();

  // Demo messages
  React.useEffect(() => {
    log('Welcome to the real-time console!');
    info('This is an info message');
    warn('This is a warning message');
    error('This is an error message');
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-4">Real-time Console</h1>
        <Console />
      </div>
    </div>
  );
}

export default App;