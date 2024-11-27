'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, ImagePlus, Bot, Loader2, Menu, Wand2, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LoadingMessage from './loading-message';

import { ScrollArea } from '@/components/ui/scroll-area';
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
  const [selectedImage, setSelectedImage] = useState<{
    file: File;
    preview: string;
  } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Helper function to generate a chat title from the first message
  const generateChatTitle = (message: string): string => {
    // Remove 'Generate image: ' prefix if present
    const cleanMessage = message.replace(/^Generate image:\s*/i, '');
    // Take first 30 characters and add ellipsis if needed
    return cleanMessage.length > 30
      ? `${cleanMessage.substring(0, 27)}...`
      : cleanMessage;
  };

  // update conversation title
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
    if (conversations.length === 0) {
      startNewConversation();
    }
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

      // update title if this is the first message
      if (currentConversation.messages.length === 0) {
        const newTitle = generateChatTitle(userMessage.text);
        updateConversationTitle(currentConversation.id, newTitle);
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input.trim(),
          generateImage: true,
        }),
      });

      const data = await response.json();

      const botMessage: MessageProps = {
        id: Date.now() + 1,
        text: "Here's the generated image based on your request:",
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

    setSelectedImage({
      file,
      preview: URL.createObjectURL(file),
    });
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
      let userMessage: MessageProps = {
        id: Date.now(),
        text: input.trim() || "Here's an outfit I'd like you to analyze",
        sender: 'user',
      };

      // Update title if this is the first message
      if (currentConversation.messages.length === 0) {
        const newTitle = generateChatTitle(userMessage.text);
        updateConversationTitle(currentConversation.id, newTitle);
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt:
            input.trim() ||
            'What fashion advice can you give based on this image?',
          imageAnalysis,
        }),
      });

      const chatData = await chatResponse.json();

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
    const newConversation: ConversationProps = {
      id: Date.now(),
      title: 'Last Fashion Message',
      messages: [],
    };
    setConversations([...conversations, newConversation]);
    setCurrentConversation(newConversation);
  };

  return (
    <div className="mx-auto mt-4 flex h-[70vh] max-w-7xl dark:bg-gray-900">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <Sidebar
            conversations={conversations}
            currentConversation={currentConversation}
            onConversationSelect={setCurrentConversation}
            onNewConversation={startNewConversation}
          />
        </SheetContent>
      </Sheet>

      <div className="hidden md:block">
        <Sidebar
          conversations={conversations}
          currentConversation={currentConversation}
          onConversationSelect={setCurrentConversation}
          onNewConversation={startNewConversation}
        />
      </div>

      <main className="flex flex-1 flex-col overflow-hidden dark:bg-gray-800">
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
                <Bot className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-600" />
                <h3 className="text-lg font-semibold dark:text-white">
                  Welcome to AI Fashion Assistant
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Start a new conversation to get personalized fashion advice
                </p>
              </div>
            </div>
          )}
        </ScrollArea>

        <div className="border-t p-4 dark:border-gray-700">
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
                  className="absolute -right-2 -top-2"
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
                disabled={!currentConversation || isLoading}
                className="dark:bg-gray-700 dark:text-white"
              >
                <ImagePlus className="h-5 w-5" />
              </Button>
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for fashion advice or describe an image to generate..."
                className="flex-1 text-zinc-900 dark:bg-gray-700 dark:text-white"
                onKeyPress={(e) =>
                  e.key === 'Enter' && !isLoading && handleSend()
                }
                disabled={!currentConversation || isLoading}
              />
              <button
                onClick={handleImageGeneration}
                disabled={!currentConversation || !input.trim() || isLoading}
                className="hover:cursor-pointer hover:text-secondary-hover dark:bg-gray-700 dark:text-white"
                title="Generate Image"
              >
                <Wand2 className="h-5 w-5" />
              </button>
              <button
                onClick={handleSend}
                disabled={
                  !currentConversation ||
                  (!input.trim() && !selectedImage) ||
                  isLoading
                }
                className="hover:cursor-pointer hover:text-secondary-hover dark:bg-blue-600 dark:text-white"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
