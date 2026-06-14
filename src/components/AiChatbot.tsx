import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'assistant', text: string}[]>([
    { role: 'assistant', text: 'Hello! I am the ABC Cafe Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Build history
      const history = [];
      for (let i = 1; i < messages.length; i += 2) {
        if (messages[i].role === 'user' && messages[i+1]?.role === 'assistant') {
          history.push({ user: messages[i].text, bot: messages[i+1].text });
        }
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history })
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
      } else if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', text: `Error: ${data.error}` }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', text: 'Sorry, I am having trouble connecting right now.' }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Sorry, there was a network error.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-cafe-gold text-white p-4 rounded-full shadow-2xl hover:bg-cafe-dark transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-3rem)] bg-white shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-cafe-dark p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cafe-gold" />
                <span className="font-serif font-medium tracking-wide">AI Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-cafe-cream/30 space-y-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-cafe-gold text-white rounded-br-none' 
                        : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-400 border border-gray-100 shadow-sm rounded-2xl rounded-bl-none p-3 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our menu..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-cafe-gold focus:ring-1 focus:ring-cafe-gold"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-cafe-dark text-white p-2.5 rounded-full hover:bg-cafe-gold transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
