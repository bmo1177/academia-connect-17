import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessageCircle, Search, Send, UserPlus, ArrowLeft } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  avatar: string;
  isOnline: boolean;
}

interface Conversation {
  id: number;
  user: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
  isOnline: boolean;
  messages: Message[];
}

const mockConversations: Conversation[] = [
  {
    id: 1,
    user: "Dr. Emma Roberts",
    lastMessage: "Would you be interested in collaborating on the climate research project?",
    timestamp: "2 min ago",
    avatar: "/placeholder.svg",
    isOnline: true,
    messages: [
      {
        id: 1,
        sender: "Dr. Emma Roberts",
        content: "Hi! I saw your recent publication on climate patterns.",
        timestamp: "2:30 PM",
        avatar: "/placeholder.svg",
        isOnline: true
      },
      {
        id: 2,
        sender: "You",
        content: "Thank you! Yes, I'd love to discuss it further.",
        timestamp: "2:35 PM",
        avatar: "/placeholder.svg",
        isOnline: true
      }
    ]
  },
  {
    id: 2,
    user: "Prof. James Wilson",
    lastMessage: "The quantum computing results look promising",
    timestamp: "1 hour ago",
    avatar: "/placeholder.svg",
    isOnline: false,
    messages: [
      {
        id: 1,
        sender: "Prof. James Wilson",
        content: "Have you reviewed the latest simulation data?",
        timestamp: "1:15 PM",
        avatar: "/placeholder.svg",
        isOnline: false
      }
    ]
  }
];

const MessagesTab = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const isMobile = useIsMobile();

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  const ConversationsList = () => (
    <Card className="h-[calc(100vh-12rem)] flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Messages</span>
          <Button variant="ghost" size="icon">
            <UserPlus className="h-5 w-5" />
          </Button>
        </CardTitle>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages" className="pl-8" />
        </div>
      </CardHeader>
      <ScrollArea className="flex-1">
        <CardContent className="space-y-4">
          {mockConversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer hover:bg-accent ${
                selectedConversation?.id === conversation.id ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="relative">
                <img
                  src={conversation.avatar}
                  alt={conversation.user}
                  className="w-12 h-12 rounded-full"
                />
                {conversation.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold truncate">{conversation.user}</h4>
                  <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );

  const ChatWindow = () => (
    <Card className="h-[calc(100vh-12rem)] flex flex-col">
      <CardHeader className="border-b">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={() => setSelectedConversation(null)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={selectedConversation?.avatar}
              alt={selectedConversation?.user}
              className="w-10 h-10 rounded-full"
            />
            {selectedConversation?.isOnline && (
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background" />
            )}
          </div>
          <div>
            <h3 className="font-semibold">{selectedConversation?.user}</h3>
            <p className="text-xs text-muted-foreground">
              {selectedConversation?.isOnline ? "Active now" : "Offline"}
            </p>
          </div>
        </div>
      </CardHeader>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {selectedConversation?.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[70%] ${
                  message.sender === "You" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === "You"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="h-full">
      {isMobile ? (
        selectedConversation ? (
          <ChatWindow />
        ) : (
          <ConversationsList />
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-4">
          <ConversationsList />
          {selectedConversation ? (
            <ChatWindow />
          ) : (
            <Card className="h-[calc(100vh-12rem)] flex items-center justify-center">
              <div className="text-center space-y-4">
                <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="font-semibold text-xl">Your Messages</h3>
                <p className="text-muted-foreground">
                  Select a conversation to start messaging
                </p>
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default MessagesTab;