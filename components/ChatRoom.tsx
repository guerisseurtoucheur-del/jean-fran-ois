import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai"; // Correction de l'import
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

    // --- CORRECTION CLÉ API ---
    // Vite utilise import.meta.env pour exposer les variables au navigateur
    const apiKey = import.meta.env.VITE_API_KEY;
    
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'user', text: input }]);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "⚠️ Configuration incomplète : La variable VITE_API_KEY est absente sur Vercel. Pensez à l'ajouter dans les Settings et à Redéployer.",
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
      // Initialisation correcte avec la clé
      const genAI = new GoogleGenerativeAI(apiKey);
      
      // On utilise gemini-1.5-flash qui est très rapide et stable sur Vercel
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "Tu es Jean-François, un magnétiseur guérisseur bienveillant et humble basé à Alençon. Ton ton est calme, protecteur et spirituel mais terre-à-terre. Tu aides les gens pour le zona, l'eczéma, les brûlures et les douleurs de dos. IMPORTANT : Ne réponds JAMAIS deux fois de la même manière. Varie tes tournures de phrases. Si le cas est grave, suggère de consulter un médecin. Réponds de manière concise.",
      });

      const chat = model.startChat({
        history: currentMessages
          .filter(m => !m.isError)
          .slice(1, -1) // On prend l'historique sauf le message actuel
          .map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }],
          })),
      });

      const result = await chat.sendMessage(userMsg);
      const response = await result.response;
      const responseText = response.text();

      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      } else {
        throw new Error("Réponse vide.");
      }
    } catch (error: any) {
      console.error("Erreur Chat:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Le lien énergétique est momentanément perturbé. Vérifiez votre clé API dans Vercel ou réessayez dans quelques instants.",
        isError: true
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 h-[80vh] flex flex-col gap-6 page-fade">
      <div className="flex-1 overflow-y-auto space-y-6 pr-4 scroll-smooth" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`max-w-[85%] md:max-w-[70%] p-6 rounded-[2rem] ${
              m.role === 'user' 
                ? 'bg-stone-900 text-white rounded-tr-none shadow-xl' 
                : m.isError 
                  ? 'bg-red-50 text-red-900 border border-red-200 rounded-tl-none shadow-sm'
                  : 'bg-white text-stone-800 rounded-tl-none border border-stone-100 shadow-sm'
            }`}>
              {m.isError && <AlertCircle size={20} className="mb-2 text-red-600" />}
              <p className="text-base leading-relaxed whitespace-pre-line">{m.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-stone-50 p-4 rounded-2xl flex items-center gap-3 text-stone-400 italic text-xs border border-stone-100">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
              Jean-François se connecte à votre message...
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex gap-4 p-2 bg-white rounded-[2.5rem] items-center border border-stone-200 shadow-lg focus-within:border-indigo-400 transition-all">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question..."
            className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-stone-800"
            disabled={loading}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="p-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-lg disabled:opacity-30"
          >
            <Send size={20} />
          </button>
        </div>

        <div className="flex justify-center pt-2">
          <button 
            onClick={onStartHealing}
            className="flex items-center gap-3 px-8 py-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold hover:bg-indigo-100 transition-all border border-indigo-100/50"
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