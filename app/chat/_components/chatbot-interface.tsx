'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, ImagePlus, Bot, Loader2, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LoadingMessage from './loading-message';
import { ScrollArea } from '@/components/ui/scroll-area';
import Sidebar from './sidebar';
import Message from './message';

import { ConversationProps } from '../../../types/conversation';
import { MessageProps } from '../../../types/message';

// ── DB helpers ────────────────────────────────────────────────────────────────

async function apiCreateConversation(title: string): Promise<string | null> {
  try {
    const res = await fetch('/api/conversations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    return data.conversation?.id ?? null;
  } catch {
    return null;
  }
}

async function apiSaveMessage(
  conversationId: string,
  role: 'user' | 'bot',
  content: string,
  imageUrl?: string
): Promise<string | null> {
  try {
    const res = await fetch(`/api/conversations/${conversationId}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role, content, imageUrl }),
    });
    const data = await res.json();
    return data.message?.id ?? null;
  } catch {
    return null;
  }
}

async function apiUpdateTitle(conversationId: string, title: string) {
  try {
    await fetch(`/api/conversations/${conversationId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
  } catch {
    // best-effort
  }
}

async function apiLoadMessages(
  conversationId: string
): Promise<MessageProps[]> {
  try {
    const res = await fetch(`/api/conversations/${conversationId}/messages`);
    const data = await res.json();
    return (data.messages ?? []).map(
      (m: {
        id: string;
        role: string;
        content: string;
        imageUrl?: string;
      }) => ({
        id: m.id,
        text: m.content,
        sender: m.role as 'user' | 'bot',
        imageUrl: m.imageUrl ?? undefined,
      })
    );
  } catch {
    return [];
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ChatbotInterface() {
  const t = useTranslations('chat');
  const [conversations, setConversations] = useState<ConversationProps[]>([]);
  const [currentConversation, setCurrentConversation] =
    useState<ConversationProps | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingConversations, setIsLoadingConversations] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{
    file: File;
    preview: string;
  } | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [earlyAccess, setEarlyAccess] = useState<boolean | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const initializedRef = useRef(false);

  const generateChatTitle = (message: string): string => {
    const clean = message.replace(/^Generate image:\s*/i, '');
    return clean.length > 30 ? `${clean.substring(0, 27)}...` : clean;
  };

  // Load credits
  useEffect(() => {
    fetch('/api/user/credits')
      .then((r) => r.json())
      .then((data) => {
        setCredits(data.credits);
        setEarlyAccess(data.earlyAccess);
      })
      .catch(() => {});
  }, []);

  // Load conversations from DB
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    fetch('/api/conversations')
      .then((r) => r.json())
      .then(async (data) => {
        const list: ConversationProps[] = (data.conversations ?? []).map(
          (c: { id: string; title: string }) => ({
            id: c.id,
            title: c.title,
            messages: [],
          })
        );
        setConversations(list);
        setIsLoadingConversations(false);

        if (list.length > 0) {
          // Load the most recent conversation's messages
          const first = list[0];
          const msgs = await apiLoadMessages(first.id);
          const loaded = { ...first, messages: msgs };
          setConversations((prev) =>
            prev.map((c) => (c.id === first.id ? loaded : c))
          );
          setCurrentConversation(loaded);
        } else {
          // No conversations yet — start a fresh one
          startNewConversation();
        }
      })
      .catch(() => {
        setIsLoadingConversations(false);
        startNewConversation();
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentConversation?.messages, isLoading]);

  useEffect(() => {
    return () => {
      if (selectedImage) URL.revokeObjectURL(selectedImage.preview);
    };
  }, [selectedImage]);

  const startNewConversation = useCallback(async () => {
    const greetingText = t('greeting');
    const tempId = crypto.randomUUID();

    const greetingMsg: MessageProps = {
      id: crypto.randomUUID(),
      text: greetingText,
      sender: 'bot',
    };
    const tempConv: ConversationProps = {
      id: tempId,
      title: t('newConversation'),
      messages: [greetingMsg],
    };

    setConversations((prev) => [tempConv, ...prev]);
    setCurrentConversation(tempConv);

    // Persist to DB
    const dbId = await apiCreateConversation(t('newConversation'));
    if (dbId) {
      await apiSaveMessage(dbId, 'bot', greetingText);
      const realConv: ConversationProps = {
        id: dbId,
        title: t('newConversation'),
        messages: [{ ...greetingMsg }],
      };
      setConversations((prev) =>
        prev.map((c) => (c.id === tempId ? realConv : c))
      );
      setCurrentConversation((cur) => (cur?.id === tempId ? realConv : cur));
    }
  }, [t]);

  const handleConversationSelect = useCallback(
    async (conv: ConversationProps) => {
      if (conv.messages.length > 0) {
        setCurrentConversation(conv);
        return;
      }
      // Lazy-load messages
      const msgs = await apiLoadMessages(conv.id);
      const loaded = { ...conv, messages: msgs };
      setConversations((prev) =>
        prev.map((c) => (c.id === conv.id ? loaded : c))
      );
      setCurrentConversation(loaded);
    },
    []
  );

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedImage({ file, preview: URL.createObjectURL(file) });
  };

  const clearSelectedImage = () => {
    if (selectedImage) URL.revokeObjectURL(selectedImage.preview);
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || !currentConversation || isLoading)
      return;

    const promptText = input.trim();
    setIsLoading(true);

    try {
      const userMsg: MessageProps = {
        id: crypto.randomUUID(),
        text: promptText || t('defaultImageMessage'),
        sender: 'user',
        imageUrl: selectedImage?.preview,
      };

      const isFirstUserMessage = !currentConversation.messages.some(
        (m) => m.sender === 'user'
      );
      const newTitle = isFirstUserMessage
        ? generateChatTitle(userMsg.text)
        : currentConversation.title;

      let imageAnalysis: string | null = null;

      if (selectedImage) {
        const formData = new FormData();
        formData.append('image', selectedImage.file);
        const imageResponse = await fetch('/api/analyze-image', {
          method: 'POST',
          body: formData,
        });
        const imageData = await imageResponse.json();
        if (imageData.creditsRemaining !== undefined)
          setCredits(imageData.creditsRemaining);
        imageAnalysis = imageData.description ?? null;
      }

      const withUser: ConversationProps = {
        ...currentConversation,
        title: newTitle,
        messages: [...currentConversation.messages, userMsg],
      };
      setConversations((prev) =>
        prev.map((c) => (c.id === currentConversation.id ? withUser : c))
      );
      setCurrentConversation(withUser);
      setInput('');
      clearSelectedImage();

      const chatResponse = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText || t('defaultImagePrompt'),
          imageAnalysis,
        }),
      });
      const chatData = await chatResponse.json();
      if (chatData.creditsRemaining !== undefined)
        setCredits(chatData.creditsRemaining);

      const botMsg: MessageProps = {
        id: crypto.randomUUID(),
        text: chatData.response ?? chatData.error ?? t('errorMessage'),
        sender: 'bot',
        imageUrl: chatData.imageUrl,
        imageAnalysis: imageAnalysis ?? undefined,
      };

      const withBot: ConversationProps = {
        ...withUser,
        messages: [...withUser.messages, botMsg],
      };
      setConversations((prev) =>
        prev.map((c) => (c.id === currentConversation.id ? withBot : c))
      );
      setCurrentConversation(withBot);

      // Persist
      await apiSaveMessage(
        currentConversation.id,
        'user',
        userMsg.text,
        userMsg.imageUrl
      );
      await apiSaveMessage(
        currentConversation.id,
        'bot',
        botMsg.text,
        botMsg.imageUrl
      );
      if (isFirstUserMessage)
        await apiUpdateTitle(currentConversation.id, newTitle);
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (earlyAccess === false) {
    return (
      <div className="border-border bg-background flex h-full items-center justify-center rounded-xl border shadow-sm">
        <div className="max-w-sm space-y-4 px-6 text-center">
          <Bot className="text-brand-red mx-auto h-14 w-14" />
          <h2 className="text-2xl font-bold">{t('gateTitle')}</h2>
          <p className="text-muted-foreground">{t('gateSubtitle')}</p>
        </div>
      </div>
    );
  }

  if (earlyAccess === true && credits === 0) {
    return (
      <div className="border-border bg-background flex h-full items-center justify-center rounded-xl border shadow-sm">
        <div className="max-w-sm space-y-4 px-6 text-center">
          <Bot className="text-muted-foreground mx-auto h-14 w-14" />
          <h2 className="text-2xl font-bold">{t('outOfCreditsTitle')}</h2>
          <p className="text-muted-foreground">{t('outOfCreditsSubtitle')}</p>
        </div>
      </div>
    );
  }

  const outOfCredits = credits === 0;

  return (
    <div className="border-border bg-background flex h-full overflow-hidden rounded-xl border shadow-sm">
      <div className="hidden md:block">
        <Sidebar
          conversations={conversations}
          currentConversation={currentConversation}
          onConversationSelect={handleConversationSelect}
          onNewConversation={startNewConversation}
          isLoading={isLoadingConversations}
        />
      </div>

      <main className="flex flex-1 flex-col overflow-hidden">
        <ScrollArea className="flex-1 p-4">
          {currentConversation ? (
            <>
              {currentConversation.messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              {isLoading && <LoadingMessage />}
              <div ref={messagesEndRef} />
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="space-y-2 text-center">
                <Bot className="text-muted-foreground mx-auto h-12 w-12" />
                <h3 className="text-lg font-semibold">{t('welcome')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('welcomeSubtitle')}
                </p>
              </div>
            </div>
          )}
        </ScrollArea>

        <div className="border-border border-t p-4">
          <div className="flex flex-col space-y-2">
            {selectedImage && (
              <div className="relative inline-block">
                <img
                  src={selectedImage.preview}
                  alt="Selected"
                  className="h-20 w-20 rounded-md object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-2 -right-2"
                  onClick={clearSelectedImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageSelect}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={!currentConversation || isLoading || outOfCredits}
              >
                <ImagePlus className="h-5 w-5" />
              </Button>
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('placeholder')}
                className="flex-1"
                onKeyDown={(e) => {
                  if (
                    e.key === 'Enter' &&
                    !e.shiftKey &&
                    !isLoading &&
                    !outOfCredits
                  ) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={!currentConversation || isLoading || outOfCredits}
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={
                  !currentConversation ||
                  (!input.trim() && !selectedImage) ||
                  isLoading ||
                  outOfCredits
                }
                className="text-muted-foreground hover:text-brand-red transition-colors hover:cursor-pointer disabled:opacity-40"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
                <span className="sr-only">{t('sendMessage')}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
