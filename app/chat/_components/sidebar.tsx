import React from 'react';
import { ImagePlus, Bot, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import { ConversationProps } from '../../../types/conversation';

const Sidebar = ({
  conversations,
  currentConversation,
  onConversationSelect,
  onNewConversation,
}: {
  conversations: ConversationProps[];
  currentConversation: ConversationProps | null;
  // eslint-disable-next-line no-unused-vars
  onConversationSelect: (conv: ConversationProps) => void;
  onNewConversation: () => void;
}) => (
  <aside className="w-72 border-r dark:border-gray-700 dark:bg-gray-900">
    <div className="flex h-full flex-col">
      <div className="border-b p-4 dark:border-gray-700">
        <h2 className="pt-8 text-lg font-semibold dark:text-white">
          Latest Fashion Chats
        </h2>
      </div>
      <ScrollArea className="flex-1 px-2">
        {conversations.length === 0 ? (
          <p className="p-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
            No conversations
          </p>
        ) : (
          conversations.map((conv, index) => (
            <Button
              key={conv.id}
              onClick={() => onConversationSelect(conv)}
              className={`w-full justify-start gap-2 rounded-lg px-3 py-2 text-left text-black hover:bg-zinc-100 dark:text-white dark:hover:bg-gray-800 ${
                currentConversation?.id === conv.id
                  ? 'bg-zinc-100 dark:bg-gray-800'
                  : ''
              } ${index >= 3 ? 'hidden md:flex' : 'flex'}`}
            >
              <div className="flex w-full items-center gap-2">
                {conv.messages.length > 0 ? (
                  <Bot className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                ) : (
                  <ImagePlus className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                )}
                <span className="flex-1 truncate">{conv.title}</span>
                {index < 3 && <ChevronRight className="h-4 w-4 md:hidden" />}
              </div>
            </Button>
          ))
        )}
      </ScrollArea>
      <div className="border-t p-4 dark:border-gray-700">
        <Button
          onClick={onNewConversation}
          className="w-full gap-2 dark:bg-blue-600 dark:text-white"
        >
          <ImagePlus className="h-4 w-4" />
          New Fashion Chat
        </Button>
      </div>
    </div>
  </aside>
);
export default Sidebar;
