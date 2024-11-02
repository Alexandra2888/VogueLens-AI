'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, ImagePlus, Bot, Loader2 } from 'lucide-react';

import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

import { ScrollArea } from '../../../components/ui/scroll-area';
import Sidebar from './sidebar';
import Message from './message';

import { ConversationProps } from '../../../types/conversation';
import { MessageProps } from '../../../types/message';

export default function ChatbotInterface() {
  const [conversations, setConversations] = useState<ConversationProps[]>([]);
  const [currentConversation, setCurrentConversation] =
    useState<ConversationProps | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (conversations.length === 0) {
      startNewConversation();
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentConversation?.messages]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file || !currentConversation) return;

    setIsLoading(true);
    try {
      const imageUrl = URL.createObjectURL(file);
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      const imageAnalysis = data.description;

      const userMessage: MessageProps = {
        id: Date.now(),
        text: input.trim() || "Here's an outfit I'd like you to analyze",
        sender: 'user',
        imageUrl,
      };

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

      const botResponse = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: 'What fashion advice can you give based on this image?',
          imageAnalysis,
        }),
      }).then((res) => res.json());

      const botMessage: MessageProps = {
        id: Date.now() + 1,
        text: botResponse.response,
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
      setInput('');
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (input.trim() && currentConversation) {
      setIsLoading(true);

      const userMessage: MessageProps = {
        id: Date.now(),
        text: input.trim(),
        sender: 'user',
      };

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

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: input.trim(),
          }),
        });

        const data = await response.json();

        const botMessage: MessageProps = {
          id: Date.now() + 1,
          text: data.response,
          sender: 'bot',
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
        console.error('Error getting bot response:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const startNewConversation = () => {
    const newConversation: ConversationProps = {
      id: Date.now(),
      title: `New Chat ${conversations.length + 1}`,
      messages: [],
    };
    setConversations([...conversations, newConversation]);
    setCurrentConversation(newConversation);
  };

  return (
    <div className="mx-auto flex h-[90vh] max-w-7xl">
      <Sidebar
        conversations={conversations}
        currentConversation={currentConversation}
        onConversationSelect={setCurrentConversation}
        onNewConversation={startNewConversation}
      />

      <main className="flex flex-1 flex-col overflow-hidden">
        <ScrollArea className="flex-1 p-4">
          {currentConversation ? (
            <>
              {currentConversation.messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="space-y-2 text-center">
                <Bot className="mx-auto h-12 w-12 text-zinc-300" />
                <h3 className="text-lg font-semibold">
                  Welcome to AI Fashion Assistant
                </h3>
                <p className="text-sm text-zinc-500">
                  Start a new conversation to get personalized fashion advice
                </p>
              </div>
            </div>
          )}
        </ScrollArea>

        <div className="border-t p-4">
          <div className="flex items-center space-x-2">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => fileInputRef.current?.click()}
              disabled={!currentConversation || isLoading}
            >
              <ImagePlus className="h-5 w-5" />
            </Button>
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for fashion advice..."
              className="flex-1 text-zinc-900"
              onKeyPress={(e) =>
                e.key === 'Enter' && !isLoading && handleSend()
              }
              disabled={!currentConversation || isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!currentConversation || !input.trim() || isLoading}
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
      </main>
    </div>
  );
}
