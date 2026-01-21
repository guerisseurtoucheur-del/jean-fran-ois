
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2, Minus, Heart, ArrowRight } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface FloatingChatProps {
  onNavigate: (tab: string) => void;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant de Jean-François. Comment puis-je vous renseigner sur nos soins à distance ?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    setHasInteracted(true);
    const userMsg = input;
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const conversationHistory = newMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: conversationHistory,
        config: {
          systemInstruction: "Tu es l'assistant virtuel de Jean-François, magnétiseur à Alençon. Ton rôle est d'accueillir les visiteurs, de répondre à leurs questions sur le magnétisme, le zona, les brûlures et les soins sur photo. Ton ton est calme, bienveillant et rassurant. Rappelle que Jean-François agit à distance dans toute la France. Invite les gens à cliquer sur le bouton 'Soin sur Photo' s'ils souhaitent envoyer leur demande maintenant.",
        },
      });

      if (response.text) {
        setMessages(prev => [...prev, { role: 'model', text: response.text }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "La connexion énergétique est faible. Réessayez dans un instant." }]);
    } finally {
      setLoading(false);
    }
  };

  const startPhotoHealing = () => {
    setIsOpen(false);
    onNavigate('healing');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Fenêtre de Chat */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="p-6 bg-stone-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="font-serif font-bold leading-none">Assistant Jean-François</p>
                <p className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold mt-1">En ligne</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-100' 
                    : 'bg-white text-stone-800 rounded-tl-none border border-stone-200 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl flex items-center gap-2 text-stone-400 italic text-[10px]">
                  <Loader2 size={12} className="animate-spin" />
                  Réflexion...
                </div>
              </div>
            )}
            
            {/* CTA Direct vers le soin photo */}
            {hasInteracted && !loading && (
              <div className="pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <button 
                  onClick={startPhotoHealing}
                  className="w-full p-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-700 flex items-center justify-between group hover:bg-indigo-100 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="p-2 bg-white rounded-full text-indigo-600 shadow-sm">
                      <Heart size={16} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest">Prêt pour un soin ?</p>
                      <p className="text-[11px] opacity-70">Envoyez votre photo maintenant</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2 bg-stone-50 p-1 rounded-full border border-stone-100 focus-within:border-indigo-300 transition-all">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1 bg-transparent px-4 py-3 outline-none text-sm text-stone-800"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all disabled:opacity-30"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulle Flottante avec Texte Rotatif */}
      <div className="relative flex items-center justify-center">
        {!isOpen && (
          <div className="absolute inset-0 -m-8 flex items-center justify-center pointer-events-none">
            <svg className="w-32 h-32 animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="text-[7.5px] font-bold uppercase tracking-[0.25em] fill-indigo-500/60">
                <textPath xlinkHref="#circlePath">
                  Posez vos questions • Magnétisme à distance •
                </textPath>
              </text>
            </svg>
          </div>
        )}

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 z-10 ${
            isOpen ? 'bg-stone-900 text-white rotate-90' : 'bg-indigo-600 text-white btn-glow'
          }`}
        >
          {isOpen ? <Minus size={28} /> : <MessageCircle size={28} />}
          
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingChat;
