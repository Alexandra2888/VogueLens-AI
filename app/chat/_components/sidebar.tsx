import React from 'react';
import { ImagePlus, Bot } from 'lucide-react';

import { Button } from '../../../components/ui/button';
import { ScrollArea } from '../../../components/ui/scroll-area';

import { ConversationProps } from '../../../types/conversation';

const Sidebar = ({
  conversations,
  currentConversation,
  onConversationSelect,
  onNewConversation,
}: {
  conversations: ConversationProps[];
  currentConversation: ConversationProps | null;
  onConversationSelect: (conv: ConversationProps) => void;
  onNewConversation: () => void;
}) => (
  <aside className="w-72 border-r">
    <div className="flex h-full flex-col">
      <div className="border-b p-4">
        <h2 className="pt-8 text-lg font-semibold dark:text-text-secondary-dark">
          Latest Fashion Chats
        </h2>
      </div>
      <ScrollArea className="flex-1 px-2">
        {conversations.length === 0 ? (
          <p className="p-4 text-center text-sm text-zinc-500 dark:text-text-secondary-dark">
            No conversations
          </p>
        ) : (
          conversations.map((conv) => (
            <Button
              key={conv.id}
              onClick={() => onConversationSelect(conv)}
              className={`w-full justify-start gap-2 rounded-lg px-3 py-2 text-left text-black hover:bg-zinc-300 ${
                currentConversation?.id === conv.id ? 'bg-zinc-100' : ''
              }`}
            >
              <div className="flex w-full items-center gap-2">
                {conv.messages.length > 0 ? (
                  <Bot className="h-4 w-4 text-zinc-500" />
                ) : (
                  <ImagePlus className="h-4 w-4 text-zinc-500" />
                )}
                <span className="flex-1 truncate">{conv.title}</span>
              </div>
            </Button>
          ))
        )}
      </ScrollArea>
      <div className="border-t p-4">
        <Button onClick={onNewConversation} className="w-full gap-2">
          <ImagePlus className="h-4 w-4" />
          New Fashion Chat
        </Button>
      </div>
    </div>
  </aside>
);
export default Sidebar;
