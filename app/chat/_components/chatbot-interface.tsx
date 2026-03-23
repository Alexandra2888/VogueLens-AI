'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, ImagePlus, Bot, Loader2, Wand2, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LoadingMessage from './loading-message';

import { ScrollArea } from '@/components/ui/scroll-area';
import Sidebar from './sidebar';
import Message from './message';

import { ConversationProps } from '../../../types/conversation';
import { MessageProps } from '../../../types/message';

export default function ChatbotInterface() {
  const t = useTranslations('chat');
  const [conversations, setConversations] = useState<ConversationProps[]>([]);
  const [currentConversation, setCurrentConversation] =
    useState<ConversationProps | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
    const cleanMessage = message.replace(/^Generate image:\s*/i, '');
    return cleanMessage.length > 30
      ? `${cleanMessage.substring(0, 27)}...`
      : cleanMessage;
  };

  const updateConversationTitle = (
    conversationId: number,
    newTitle: string
  ) => {
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === conversationId ? { ...conv, title: newTitle } : conv
      )
    );
  };

  useEffect(() => {
    fetch('/api/user/credits')
      .then((r) => r.json())
      .then((data) => {
        setCredits(data.credits);
        setEarlyAccess(data.earlyAccess);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    startNewConversation();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentConversation?.messages, isLoading]);

  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage.preview);
      }
    };
  }, [selectedImage]);

  const handleImageGeneration = async () => {
    if (!input.trim() || !currentConversation) return;

    setIsLoading(true);
    try {
      const userMessage: MessageProps = {
        id: Date.now(),
        text: `Generate image: ${input.trim()}`,
        sender: 'user',
      };

      const userMessages = currentConversation.messages.filter(
        (m) => m.sender === 'user'
      );
      if (userMessages.length === 0) {
        updateConversationTitle(
          currentConversation.id,
          generateChatTitle(userMessage.text)
        );
      }

      const updatedConversation = {
        ...currentConversation,
        messages: [...currentConversation.messages, userMessage],
      };

      setConversations(
        conversations.map((conv) =>
          conv.id === currentConversation.id ? updatedConversation : conv
        )
      );
      setCurrentConversation(updatedConversation);
      setInput('');

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input.trim(), generateImage: true }),
      });

      const data = await response.json();
      if (data.creditsRemaining !== undefined) setCredits(data.creditsRemaining);

      const botMessage: MessageProps = {
        id: Date.now() + 1,
        text: t('generatedImageResponse'),
        sender: 'bot',
        imageUrl: data.imageUrl,
      };

      const finalConversation = {
        ...updatedConversation,
        messages: [...updatedConversation.messages, botMessage],
      };

      setConversations(
        conversations.map((conv) =>
          conv.id === currentConversation.id ? finalConversation : conv
        )
      );
      setCurrentConversation(finalConversation);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedImage({ file, preview: URL.createObjectURL(file) });
  };

  const clearSelectedImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage.preview);
      setSelectedImage(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || !currentConversation || isLoading)
      return;

    setIsLoading(true);

    try {
      const userMessage: MessageProps = {
        id: Date.now(),
        text: input.trim() || t('defaultImageMessage'),
        sender: 'user',
      };

      const userMessages = currentConversation.messages.filter(
        (m) => m.sender === 'user'
      );
      if (userMessages.length === 0) {
        updateConversationTitle(
          currentConversation.id,
          generateChatTitle(userMessage.text)
        );
      }

      let imageAnalysis = null;

      if (selectedImage) {
        userMessage.imageUrl = selectedImage.preview;

        const formData = new FormData();
        formData.append('image', selectedImage.file);

        const imageResponse = await fetch('/api/analyze-image', {
          method: 'POST',
          body: formData,
        });

        const imageData = await imageResponse.json();
        if (imageData.creditsRemaining !== undefined) setCredits(imageData.creditsRemaining);
        imageAnalysis = imageData.description;
      }

      const updatedConversation = {
        ...currentConversation,
        messages: [...currentConversation.messages, userMessage],
      };

      setConversations(
        conversations.map((conv) =>
          conv.id === currentConversation.id ? updatedConversation : conv
        )
      );
      setCurrentConversation(updatedConversation);
      setInput('');
      clearSelectedImage();

      const chatResponse = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: input.trim() || t('defaultImagePrompt'),
          imageAnalysis,
        }),
      });

      const chatData = await chatResponse.json();
      if (chatData.creditsRemaining !== undefined) setCredits(chatData.creditsRemaining);

      const botMessage: MessageProps = {
        id: Date.now() + 1,
        text: chatData.response,
        sender: 'bot',
        imageAnalysis,
      };

      const finalConversation = {
        ...updatedConversation,
        messages: [...updatedConversation.messages, botMessage],
      };

      setConversations(
        conversations.map((conv) =>
          conv.id === currentConversation.id ? finalConversation : conv
        )
      );
      setCurrentConversation(finalConversation);
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const startNewConversation = () => {
    const greetingMessage: MessageProps = {
      id: Date.now(),
      text: t('greeting'),
      sender: 'bot',
    };
    const newConversation: ConversationProps = {
      id: Date.now() + 1,
      title: t('newConversation'),
      messages: [greetingMessage],
    };
    setConversations((prev) => [...prev, newConversation]);
    setCurrentConversation(newConversation);
  };

  if (earlyAccess === false) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-border bg-background shadow-sm">
        <div className="max-w-sm space-y-4 text-center px-6">
          <Bot className="text-brand-red mx-auto h-14 w-14" />
          <h2 className="text-2xl font-bold">{t('gateTitle')}</h2>
          <p className="text-muted-foreground">{t('gateSubtitle')}</p>
        </div>
      </div>
    );
  }

  if (earlyAccess === true && credits === 0) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-border bg-background shadow-sm">
        <div className="max-w-sm space-y-4 text-center px-6">
          <Bot className="text-muted-foreground mx-auto h-14 w-14" />
          <h2 className="text-2xl font-bold">{t('outOfCreditsTitle')}</h2>
          <p className="text-muted-foreground">{t('outOfCreditsSubtitle')}</p>
        </div>
      </div>
    );
  }

  const outOfCredits = credits === 0;

  return (
    <div className="flex h-full overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <div className="hidden md:block">
        <Sidebar
          conversations={conversations}
          currentConversation={currentConversation}
          onConversationSelect={setCurrentConversation}
          onNewConversation={startNewConversation}
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

        <div className="border-t border-border p-4">
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
                onKeyPress={(e) =>
                  e.key === 'Enter' && !isLoading && !outOfCredits && handleSend()
                }
                disabled={!currentConversation || isLoading || outOfCredits}
              />
              <button
                onClick={handleImageGeneration}
                disabled={!currentConversation || !input.trim() || isLoading || outOfCredits}
                className="text-muted-foreground hover:text-brand-red disabled:opacity-40 transition-colors hover:cursor-pointer"
                title={t('generateImageTitle')}
              >
                <Wand2 className="h-5 w-5" />
              </button>
              <button
                onClick={handleSend}
                disabled={
                  !currentConversation ||
                  (!input.trim() && !selectedImage) ||
                  isLoading ||
                  outOfCredits
                }
                className="text-muted-foreground hover:text-brand-red disabled:opacity-40 transition-colors hover:cursor-pointer"
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
