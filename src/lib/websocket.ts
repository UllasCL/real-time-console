import { io } from 'socket.io-client';
import { addMessage } from '../stores/consoleStore';

const WEBSOCKET_URL = 'ws://localhost:8000/ws';

export function connectWebSocket() {
  const socket = new WebSocket(WEBSOCKET_URL);

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    addMessage(message);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
    setTimeout(connectWebSocket, 1000);
  };

  return socket;
}