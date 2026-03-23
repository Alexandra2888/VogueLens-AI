import { Bot } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const LoadingMessage = () => (
  <div className="my-4 flex justify-start">
    <div className="flex max-w-[80%] items-start gap-3">
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarFallback className="bg-muted text-muted-foreground">
          <Bot className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <Card className="bg-muted/50 border-border px-4 py-3 shadow-none">
        <div className="flex items-center space-x-1.5">
          <div className="bg-muted-foreground/40 h-2 w-2 animate-bounce rounded-full" />
          <div
            className="bg-muted-foreground/40 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="bg-muted-foreground/40 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </Card>
    </div>
  </div>
);
export default LoadingMessage;
