import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';
import React from 'react';

import { MessageProps } from '../../../types/message';

const Message = ({
  message,
}: {
  message: MessageProps;
  isLoading?: boolean;
}) => (
  <div
    className={`my-12 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
  >
    <div className="flex max-w-[80%] items-start gap-3">
      <Avatar className={message.sender === 'user' ? 'order-2' : ''}>
        <AvatarFallback>
          {message.sender === 'user' ? (
            <User className="h-5 w-5" />
          ) : (
            <Bot className="h-5 w-5" />
          )}
        </AvatarFallback>
      </Avatar>
      <Card
        className={`p-3 ${message.sender === 'user' ? 'bg-[#86C5DA] text-black' : ''}`}
      >
        <div className="space-y-2">
          {message.text}
          {message.imageUrl && (
            <img
              src={message.imageUrl}
              alt="Uploaded fashion item"
              className="mt-2 max-h-64 rounded-lg object-cover"
            />
          )}
        </div>
      </Card>
    </div>
  </div>
);

export default Message;
