
"use client";

import { useState, useRef, useEffect } from 'react';
import Header from "@/components/layout/header";
// import Footer from "@/components/layout/footer"; // Footer removed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { converseWithAi, type ConverseWithAiInput, type ConverseWithAiOutput } from '@/ai/flows/chat-flow';
import { SendHorizonal, User, Bot, MessageSquareText } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for the element to scroll to

  // Scroll to bottom when new messages are added or loading state changes
  useEffect(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    });
  }, [messages, isLoading]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessageText = inputValue.trim();
    const userMessage: Message = { id: Date.now().toString() + '-user', sender: 'user', text: userMessageText };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const aiResponse: ConverseWithAiOutput = await converseWithAi({ userInput: userMessageText });
      const aiMessage: Message = { id: Date.now().toString() + '-ai', sender: 'ai', text: aiResponse.aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error conversing with AI:", error);
      toast({
        title: "Error",
        description: "Failed to get a response from the AI. Please try again.",
        variant: "destructive",
      });
       // Do not add user message back if AI fails, as it's already in the list.
       // If we want to allow re-submission, we could setInputValue(userMessageText)
       // For now, filter it out if error happens to avoid duplicate if re-sent.
       // Actually, better to keep it to show the attempt, and let user decide.
       // The current behavior (not removing) is fine.
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12 flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-foreground">
          Chat with Aether<span className="text-primary">AI</span>
        </h1>
        
        <Card className="flex-grow flex flex-col shadow-xl overflow-hidden">
          <ScrollArea className="flex-grow p-4 sm:p-6 max-h-[65vh]">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  )}
                  <Card
                    className={`max-w-xs sm:max-w-md md:max-w-lg p-3 rounded-xl shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-card text-card-foreground rounded-bl-none border border-border' 
                    }`}
                  >
                    <CardContent className="p-0 text-sm sm:text-base break-words">
                      {msg.text}
                    </CardContent>
                  </Card>
                  {msg.sender === 'user' && (
                    <User className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start space-x-2 justify-start">
                   <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                   <Card className="max-w-xs sm:max-w-md md:max-w-lg p-3 rounded-xl shadow-md bg-card text-card-foreground rounded-bl-none border border-border">
                      <CardContent className="p-0 text-sm sm:text-base">
                        <div className="flex items-center space-x-1">
                          <span className="animate-pulse">●</span>
                          <span className="animate-pulse delay-100">●</span>
                          <span className="animate-pulse delay-200">●</span>
                        </div>
                      </CardContent>
                   </Card>
                 </div>
              )}
               {messages.length === 0 && !isLoading && (
                  <div className="text-center text-muted-foreground py-10">
                      <MessageSquareText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Start the conversation by typing your message below.</p>
                  </div>
              )}
              <div ref={messagesEndRef} /> {/* Element to scroll to */}
            </div>
          </ScrollArea>
          <div className="border-t p-4 sm:p-6 bg-card">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 sm:space-x-3">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask AetherAI anything..."
                className="flex-grow"
                disabled={isLoading}
                aria-label="Chat input"
              />
              <Button type="submit" disabled={isLoading || !inputValue.trim()} size="icon" aria-label="Send message">
                <SendHorizonal className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </Card>
      </main>
      {/* <Footer /> Removed */}
    </div>
  );
}
