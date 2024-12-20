import { writable } from 'svelte/store';
import type { Message } from '../types/console';
import { MessageType } from '../types/console';

export const messages = writable<Message[]>([]);

export function addMessage(message: Message) {
  messages.update(msgs => [...msgs, message]);
}

export function clearMessages() {
  messages.set([]);
}

export function log(content: string) {
  addMessage({ type: MessageType.Log, content });
}

export function error(content: string) {
  addMessage({ type: MessageType.Error, content });
}

export function warn(content: string) {
  addMessage({ type: MessageType.Warning, content });
}

export function info(content: string) {
  addMessage({ type: MessageType.Info, content });
}