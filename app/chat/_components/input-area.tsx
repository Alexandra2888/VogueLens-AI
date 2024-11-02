import React, { useRef } from 'react';
import { Send, ImagePlus, Loader2 } from 'lucide-react';

import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

const InputArea = ({
  input,
  setInput,
  isLoading,
  onSend,
  onImageUpload,
}: {
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  onSend: () => void;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border-t p-4">
      <div className="flex items-center space-x-2">
        <div className="flex-none">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={onImageUpload}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
          >
            <ImagePlus className="h-5 w-5" />
          </Button>
        </div>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for fashion advice..."
          className="flex-1 text-zinc-900"
          onKeyPress={(e) => e.key === 'Enter' && !isLoading && onSend()}
        />
        <div className="flex-none">
          <Button
            onClick={onSend}
            disabled={isLoading || !input.trim()}
            size="icon"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputArea;
