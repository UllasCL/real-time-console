export enum MessageType {
  Log = 'log',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

export interface Message {
  type: MessageType;
  content: string;
}