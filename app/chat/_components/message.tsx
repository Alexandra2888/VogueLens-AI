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
    className={`my-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
  >
    <div className="flex max-w-[80%] items-start gap-3">
      <Avatar
        className={`h-8 w-8 flex-shrink-0 ${message.sender === 'user' ? 'order-2' : ''}`}
      >
        <AvatarFallback
          className={
            message.sender === 'user'
              ? 'bg-brand-red/10 text-brand-red'
              : 'bg-muted text-muted-foreground'
          }
        >
          {message.sender === 'user' ? (
            <User className="h-4 w-4" />
          ) : (
            <Bot className="h-4 w-4" />
          )}
        </AvatarFallback>
      </Avatar>
      <Card
        className={`px-4 py-3 text-sm shadow-none ${
          message.sender === 'user'
            ? 'bg-brand-red text-white border-transparent'
            : 'bg-muted/50 border-border'
        }`}
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
