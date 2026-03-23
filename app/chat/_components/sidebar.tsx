import React from 'react';
import { MessageSquare, Plus, Bot } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
  onConversationSelect: (conv: ConversationProps) => void;
  onNewConversation: () => void;
}) => {
  const t = useTranslations('chat');

  return (
    <aside className="w-72 border-r border-border bg-muted/20 flex-shrink-0">
      <div className="flex h-full flex-col">
        <div className="border-b border-border p-4">
          <h2 className="pt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t('chatHistory')}
          </h2>
        </div>
        <ScrollArea className="flex-1 px-2 py-2">
          {conversations.length === 0 ? (
            <p className="p-4 text-center text-sm text-muted-foreground">
              {t('noConversations')}
            </p>
          ) : (
            conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => onConversationSelect(conv)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  currentConversation?.id === conv.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-background/60 hover:text-foreground'
                }`}
              >
                {conv.messages.some((m) => m.sender === 'user') ? (
                  <Bot className="h-4 w-4 flex-shrink-0 text-brand-red" />
                ) : (
                  <MessageSquare className="h-4 w-4 flex-shrink-0" />
                )}
                <span className="flex-1 truncate">{conv.title}</span>
              </button>
            ))
          )}
        </ScrollArea>
        <div className="border-t border-border p-4">
          <Button
            onClick={onNewConversation}
            variant="outline"
            className="w-full gap-2"
          >
            <Plus className="h-4 w-4" />
            {t('newChat')}
          </Button>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
