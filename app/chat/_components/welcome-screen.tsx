import { Bot } from 'lucide-react';

const WelcomeScreen = () => (
  <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-4 text-center">
    <Bot className="h-12 w-12 text-zinc-300" />
    <div className="max-w-sm space-y-2">
      <h3 className="text-lg font-semibold">Welcome to AI Fashion Assistant</h3>
      <p className="text-sm text-zinc-500">
        Start a new conversation or select an existing one to get personalized
        fashion advice
      </p>
    </div>
  </div>
);

export default WelcomeScreen;
