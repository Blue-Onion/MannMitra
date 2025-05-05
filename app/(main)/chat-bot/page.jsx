"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ai_response } from "@/actions/chat"; // Assuming this action handles the AI response

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I’m your AI Therapist. How can I assist you today?" },
  ]);
  const [isLoading, setIsLoading] = useState(false); // For handling the loading state while the bot responds
  const messagesEndRef = useRef(null);

  // Use react-hook-form to manage the input form
  const { register, handleSubmit, reset } = useForm();
  
  // Handle the form submission
  const onSubmit = async (data) => {
    const { userMessage } = data; // userMessage is the input field value
    
    if (userMessage.trim() === "") return;
    
    // Add user message to chat
    const newMessage = { from: "user", text: userMessage };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    reset(); // Reset input field after sending
    
    setIsLoading(true);

    // Get AI response (could be via a server request or API call)
    try {
      const aiReply = await ai_response(userMessage); // Assuming ai_response is an action returning a response as a string
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "bot", text: aiReply },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: "bot", text: "Sorry, I couldn’t process your request. Please try again." },
      ]);
    }
    
    setIsLoading(false); // Disable loading state after bot response
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col -mt-40 h-full bg-[#0B1F1A] rounded-2xl shadow-lg">
      {/* Header */}
      <header className="p-4 text-xl font-bold bg-[#1B4332] text-[#94D2BD] rounded-t-2xl">
        MannMitra
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <Card
            key={idx}
            className={`w-fit max-w-[70%] ${
              msg.from === "user"
                ? "ml-auto bg-[#66a1ff] text-black animate-fadeIn" // User message styling (blue)
                : "bg-[#10e0a5df] text-white animate-fadeIn" // Bot message styling (green)
            }`}
          >
            <CardContent className="p-3">{msg.text}</CardContent>
          </Card>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-[#1B4332] flex gap-2 rounded-b-2xl">
        <Input
          {...register("userMessage")}
          className="flex-1 bg-[#0B1F1A] text-[#94D2BD]"
          placeholder="Type your thoughts..."
          disabled={isLoading}
        />
        <Button
          type="submit"
          className="bg-[#1B4332] hover:bg-[#0b7b7e]"
          disabled={isLoading}
        >
          {isLoading ? "Thinking..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
