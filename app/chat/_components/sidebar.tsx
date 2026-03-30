import React, { useState, useRef, useEffect } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';

import { ConversationProps } from '../../../types/conversation';

const Sidebar = ({
  conversations,
  currentConversation,
  onConversationSelect,
  onNewConversation,
  onRenameConversation,
  onDeleteConversation,
  isLoading,
}: {
  conversations: ConversationProps[];
  currentConversation: ConversationProps | null;
  onConversationSelect: (conv: ConversationProps) => void;
  onNewConversation: () => void;
  onRenameConversation: (conversationId: string, newTitle: string) => void;
  onDeleteConversation: (conversationId: string) => void;
  isLoading: boolean;
}) => {
  const t = useTranslations('chat');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingId]);

  const handleStartEdit = (
    e: React.MouseEvent,
    conv: ConversationProps
  ) => {
    e.stopPropagation();
    setEditingId(conv.id);
    setEditValue(conv.title);
  };

  const handleSaveEdit = () => {
    if (editingId && editValue.trim()) {
      onRenameConversation(editingId, editValue.trim());
    }
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleDelete = (e: React.MouseEvent, conversationId: string) => {
    e.stopPropagation();
    onDeleteConversation(conversationId);
  };

  return (
    <aside className="border-border bg-muted/20 w-72 flex-shrink-0 border-r">
      <div className="flex h-full flex-col">
        <div className="border-border border-b p-4">
          <h2 className="text-muted-foreground pt-8 text-sm font-semibold tracking-wide uppercase">
            {t('chatHistory')}
          </h2>
        </div>
        <ScrollArea className="flex-1 px-2 py-2">
          {isLoading ? (
            <div className="space-y-1 p-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg px-3 py-2"
                >
                  <Skeleton className="h-4 w-4 flex-shrink-0 rounded" />
                  <Skeleton className="h-4 flex-1 rounded" />
                </div>
              ))}
            </div>
          ) : conversations.length === 0 ? (
            <p className="text-muted-foreground p-4 text-center text-sm">
              {t('noConversations')}
            </p>
          ) : (
            conversations.map((conv) => {
              const isActive = currentConversation?.id === conv.id;
              const isEditing = editingId === conv.id;

              return (
                <div
                  key={conv.id}
                  className={`flex items-center rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:bg-background/60 hover:text-foreground'
                  }`}
                >
                  <button
                    onClick={(e) => handleStartEdit(e, conv)}
                    className="text-muted-foreground hover:text-foreground mr-2 flex-shrink-0 rounded p-0.5 transition-colors"
                    title={t('editTitle')}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>

                  {isEditing ? (
                    <Input
                      ref={editInputRef}
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveEdit();
                        if (e.key === 'Escape') handleCancelEdit();
                      }}
                      onBlur={handleSaveEdit}
                      className="h-6 min-w-0 flex-1 px-1 py-0 text-sm"
                    />
                  ) : (
                    <button
                      onClick={() => onConversationSelect(conv)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <span className="block max-w-[10rem] truncate">
                        {conv.title}
                      </span>
                    </button>
                  )}

                  <button
                    onClick={(e) => handleDelete(e, conv.id)}
                    className="text-muted-foreground hover:text-destructive ml-2 flex-shrink-0 rounded p-0.5 transition-colors"
                    title={t('deleteChat')}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              );
            })
          )}
        </ScrollArea>
        <div className="border-border border-t p-4">
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
