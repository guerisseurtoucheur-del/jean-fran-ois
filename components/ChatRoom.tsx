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

  // Défilement automatique vers le bas
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    // --- ICI TU COLLERAS TA CLÉ ---
    const apiKey ="AIzaSyD7FIqH7uX2XrICwy9jdb5muY_KvoAKXNU";
    // ------------------------------

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "Tu es Jean-François, un magnétiseur guérisseur bienveillant à Alençon. Ton ton est calme et spirituel. Tu aides pour le zona, l'eczéma, les brûlures et le dos. Réponds de manière concise.",
      });

      const result = await model.generateContent(userMsg);
      const response = await result.response;
      const responseText = response.text();

      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      }
    } catch (error: any) {
      console.error("Erreur Chat:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Une petite coupure énergétique... Réessayez dans un instant. (Erreur: " + (error.message || "Lien rompu") + ")",
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
            <div className={`max-w-[85%] md:max-w-[70%] p-6 rounded-[2rem] ${
              m.role === 'user' 
                ? 'bg-stone-900 text-white rounded-tr-none' 
                : m.isError 
                  ? 'bg-red-50 text-red-900 border border-red-200 rounded-tl-none'
                  : 'bg-white text-stone-800 rounded-tl-none border border-stone-100 shadow-sm'
            }`}>
              {m.isError && <AlertCircle size={20} className="mb-2 inline mr-2" />}
              <p className="text-base leading-relaxed whitespace-pre-line">{m.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start italic text-stone-400 text-sm">
            Jean-François se connecte à votre message...
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex gap-4 p-2 bg-white rounded-[2.5rem] items-center border border-stone-200 shadow-lg">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question..."
            className="flex-1 bg-transparent border-none outline-none px-6 py-4"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="p-4 bg-indigo-600 text-white rounded-full disabled:opacity-30"
          >
            <Send size={20} />
          </button>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onStartHealing}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold"
          >
            <HeartHandshake size={18} />
            <span>Passer à la demande de soin (Photo)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;