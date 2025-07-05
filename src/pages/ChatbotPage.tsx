import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Star, Heart, TrendingUp, Shield } from 'lucide-react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "🌟 Namaste! I'm your AI Astrologer. I can help you with personalized horoscope readings, love compatibility, career guidance, and spiritual insights. What would you like to know about your cosmic journey?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    { icon: Heart, text: "Will I find love this year?", category: "Love" },
    { icon: TrendingUp, text: "What's my career prediction?", category: "Career" },
    { icon: Shield, text: "Do I have any doshas?", category: "Doshas" },
    { icon: Star, text: "What's my lucky number?", category: "Numerology" }
  ];

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || inputMessage;
    if (!messageToSend.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      text: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "Thank you for your question. To provide you with accurate astrological insights, I would need to connect to our AI astrology engine. This feature will be available once the backend API is integrated.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full max-w-none">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            AI Astrologer Chat
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant personalized readings and guidance from our AI-powered astrologer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Questions Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-violet-100">
              <h3 className="text-lg font-display font-semibold text-gray-900 mb-4">
                Quick Questions
              </h3>
              <div className="space-y-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question.text)}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <question.icon className="h-5 w-5 text-violet-600 group-hover:text-violet-700" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {question.text}
                        </div>
                        <div className="text-xs text-gray-500">
                          {question.category}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-cosmic text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold">Astro AI</h3>
                    <p className="text-violet-200 text-sm">Your Personal Astrologer</p>
                  </div>
                  <div className="ml-auto">
                    <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse-slow" />
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-gradient-cosmic text-white' 
                          : 'bg-violet-100 text-violet-600'
                      }`}>
                        {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div className={`rounded-2xl p-4 ${
                        message.type === 'user'
                          ? 'bg-gradient-cosmic text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <div className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-violet-200' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl p-4">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about your future..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-gradient-cosmic text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ChatbotPage;