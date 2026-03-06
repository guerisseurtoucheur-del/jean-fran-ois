
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2, Minus, Heart, ArrowRight, MapPin, ExternalLink, Globe, FileText } from 'lucide-react';
import Link from 'next/link';

interface GroundingLink {
  title: string;
  uri: string;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  links?: GroundingLink[];
}

interface FloatingChatProps {
  onNavigate: (tab: string) => void;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant de Jean-François. Je peux vous renseigner sur nos soins à distance partout en France ou sur notre cabinet à Alençon. Que puis-je faire pour vous ?' }
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
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: newMessages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        config: {
          systemInstruction: "Tu es l'assistant de Jean-François, magnétiseur à Alençon spécialisé dans les soins à distance sur photo. Ton ton est rassurant et expert. Tu dois expliquer que la distance n'a aucune importance pour le magnétisme. Utilise Google Search pour trouver des explications sur les bienfaits du magnétisme ou des études si l'utilisateur est sceptique. Précise bien que Jean-François travaille pour toute la France.",
          tools: [{ googleSearch: {} }, { googleMaps: {} }]
        },
      });

      const groundingLinks: GroundingLink[] = [];
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      
      chunks.forEach((chunk: any) => {
        if (chunk.web) groundingLinks.push({ title: chunk.web.title, uri: chunk.web.uri });
        if (chunk.maps) groundingLinks.push({ title: "Localisation", uri: chunk.maps.uri });
      });

      const responseText = response.text || "Je n'ai pas pu générer une réponse. Veuillez réessayer.";
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: responseText,
        links: groundingLinks.length > 0 ? groundingLinks : undefined
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Une petite coupure d'énergie... réessayez." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-3 md:bottom-6 md:right-6 z-[999] flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-24px)] sm:w-[400px] h-[calc(100vh-140px)] sm:h-[550px] max-h-[600px] bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-stone-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 pointer-events-auto">
          <div className="p-4 sm:p-6 bg-indigo-600 text-white flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <Globe size={16} className="animate-pulse" />
              <div>
                <p className="font-serif font-bold text-xs sm:text-sm">Assistant Jean-François</p>
                <p className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold opacity-70">Expertise France Entière</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors active:bg-white/20"><X size={18} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-stone-50 overscroll-contain" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[90%] space-y-2">
                  <div className={`p-4 rounded-2xl text-xs leading-relaxed ${m.role === 'user' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-stone-800 border border-stone-100 shadow-sm'}`}>
                    {m.text}
                  </div>
                  {m.links && (
                    <div className="flex flex-wrap gap-2">
                      {m.links.map((link, idx) => (
                        <a key={idx} href={link.uri} target="_blank" rel="noopener" className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 rounded-full text-[9px] font-bold text-indigo-600 hover:bg-indigo-50 shadow-sm">
                          <ExternalLink size={10} /> {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && <div className="text-stone-400 text-[10px] animate-pulse italic">Jean-François réfléchit...</div>}
          </div>

          {/* Bandeau incitation formulaire */}
          {hasInteracted && !loading && (
            <Link 
              href="/demande-soin" 
              className="mx-2 sm:mx-4 mb-2 p-2 sm:p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-between gap-2 sm:gap-3 hover:from-emerald-600 hover:to-emerald-700 active:from-emerald-700 active:to-emerald-800 transition-all shadow-lg group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText size={16} />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm">Pret pour un soin ?</p>
                  <p className="text-[9px] sm:text-[10px] opacity-90">Envoyez votre photo maintenant</p>
                </div>
              </div>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          )}

          <div className="p-2 sm:p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2 bg-stone-50 p-1 rounded-full border border-stone-200">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                placeholder="Votre question..." 
                className="flex-1 bg-transparent px-3 sm:px-4 py-3 outline-none text-xs min-w-0" 
                autoComplete="off"
              />
              <button 
                onClick={handleSend} 
                disabled={loading} 
                className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 active:bg-indigo-800 transition-all flex-shrink-0 touch-manipulation"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulle au-dessus du bouton */}
      {!isOpen && (
        <div className="mb-2 px-4 py-2 bg-white rounded-2xl shadow-lg border border-stone-100 pointer-events-auto animate-bounce relative">
          <p className="text-xs font-bold text-stone-800">Une question ?</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-stone-100 transform rotate-45"></div>
        </div>
      )}

      {/* Bouton avec effets énergétiques renforcés */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(79,70,229,0.5)] transition-all duration-500 hover:scale-110 active:scale-95 pointer-events-auto group z-10 touch-manipulation
          ${isOpen 
            ? 'bg-stone-900 text-white' 
            : 'bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 text-white ring-4 ring-white shadow-indigo-500/50'}`}
      >
        {/* Cercles d'énergie animés à l'extérieur */}
        {!isOpen && (
          <>
            <span className="absolute -inset-2 rounded-full bg-indigo-400 animate-ping opacity-30"></span>
            <span className="absolute -inset-4 rounded-full bg-indigo-600/10 animate-pulse"></span>
          </>
        )}
        
        <div className="relative z-20">
          {isOpen ? (
            <X size={24} className="sm:w-8 sm:h-8 animate-in zoom-in duration-300" />
          ) : (
            <div className="relative">
              <MessageCircle size={24} className="sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
              {/* Badge de notification animé */}
              <span className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center animate-bounce shadow-lg">
                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
              </span>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default FloatingChat;
