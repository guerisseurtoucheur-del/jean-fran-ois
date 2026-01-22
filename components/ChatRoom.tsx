import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai"; 
import { Send, HeartHandshake, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

const ChatRoom: React.FC<{ onStartHealing: () => void }> = ({ onStartHealing }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bonjour, je suis Jean-François. Posez-moi vos questions sur vos douleurs ou votre besoin de soin. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const apiKey = import.meta.env.VITE_API_KEY; 
    
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'user', text: input }]);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "⚠️ Erreur : La clé VITE_API_KEY est manquante dans Vercel.",
        isError: true 
      }]);
      setInput('');
      return;
    }

    const userMsg = input;
    setInput('');
    const currentMessages: Message[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(currentMessages);
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash", 
        systemInstruction: "Tu es Jean-François, un magnétiseur guérisseur bienveillant à Alençon. Ton ton est calme et spirituel. Tu aides pour le zona, l'eczéma, les brûlures. Varie tes réponses.",
      });

      const chat = model.startChat({
        history: currentMessages
          .filter(m => !m.isError)
          .slice(1, -1)
          .map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }],
          })),
      });

      const result = await chat.sendMessage(userMsg);
      const responseText = result.response.text();

      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      }
    } catch (error: any) {
      console.error("Erreur:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Le lien énergétique est perturbé. Vérifiez votre clé sur Vercel.",
        isError: true
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 h-[80vh] flex flex-col gap-6">
      <div className="flex-1 overflow-y-auto space-y-6 pr-4" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-6 rounded-[2rem] ${
              m.role === 'user' ? 'bg-stone-900 text-white shadow-xl' : 'bg-white text-stone-800 border shadow-sm'
            }`}>
              <p className="text-base leading-relaxed whitespace-pre-line">{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 p-2 bg-white rounded-[2.5rem] border shadow-lg">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 px-6 py-4 outline-none"
          placeholder="Posez votre question..."
        />
        <button onClick={handleSend} className="p-4 bg-indigo-600 text-white rounded-full">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
