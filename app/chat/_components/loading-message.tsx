import { Bot } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const LoadingMessage = () => (
  <div className="my-12 flex justify-start">
    <div className="flex max-w-[80%] items-start gap-3">
      <Avatar>
        <AvatarFallback>
          <Bot className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
      <Card className="p-3">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
      </Card>
    </div>
  </div>
);
export default LoadingMessage;
