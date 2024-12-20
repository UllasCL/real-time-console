import React from 'react';
import classNames from 'classnames';
import { Message, MessageType } from '../../types/console';

interface ConsoleMessageProps {
  message: Message;
}

const typeStyles = {
  [MessageType.Log]: 'text-white',
  [MessageType.Error]: 'text-red-400',
  [MessageType.Warning]: 'text-yellow-400',
  [MessageType.Info]: 'text-blue-400',
};

export function ConsoleMessage({ message }: ConsoleMessageProps) {
  return (
    <div className={classNames(
      'py-1',
      typeStyles[message.type]
    )}>
      {message.content}
    </div>
  );
}