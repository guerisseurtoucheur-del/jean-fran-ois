
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2, Minus, Heart, ArrowRight, MapPin, ExternalLink } from 'lucide-react';

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
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant de Jean-François. Comment puis-je vous renseigner sur nos soins à distance ou sur notre cabinet à Alençon ?' }
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

  const getUserLocation = (): Promise<{latitude: number, longitude: number} | null> => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) return resolve(null);
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
        () => resolve(null),
        { timeout: 5000 }
      );
    });
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    setHasInteracted(true);
    const userMsg = input;
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setLoading(true);
    
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'model', text: "Erreur : Clé API manquante." }]);
      setLoading(false);
      return;
    }

    try {
      const location = await getUserLocation();
      const ai = new GoogleGenAI({ apiKey: apiKey });
      
      const conversationHistory = newMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: conversationHistory,
        config: {
          systemInstruction: "Tu es l'assistant virtuel de Jean-François, magnétiseur à Alençon. Ton rôle est d'accueillir les visiteurs, de répondre à leurs questions sur le magnétisme et la localisation du cabinet (Centre-ville d'Alençon, Orne). Ton ton est calme et rassurant. Utilise l'outil Google Maps pour donner des précisions géographiques si l'utilisateur demande où se trouve le cabinet. Alençon est en Normandie (61000).",
          tools: [{ googleMaps: {} }, { googleSearch: {} }],
          toolConfig: location ? {
            retrievalConfig: {
              latLng: {
                latitude: location.latitude,
                longitude: location.longitude
              }
            }
          } : undefined
        },
      });

      const groundingLinks: GroundingLink[] = [];
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      
      chunks.forEach((chunk: any) => {
        if (chunk.maps) {
          groundingLinks.push({ title: chunk.maps.title || "Voir sur Google Maps", uri: chunk.maps.uri });
        } else if (chunk.web) {
          groundingLinks.push({ title: chunk.web.title || "Source Web", uri: chunk.web.uri });
        }
      });

      if (response.text) {
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: response.text,
          links: groundingLinks.length > 0 ? groundingLinks : undefined
        }]);
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
    <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-[999] flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-32px)] sm:w-[400px] h-[500px] max-h-[70vh] bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 pointer-events-auto">
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

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[85%] space-y-2">
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-100' 
                      : 'bg-white text-stone-800 rounded-tl-none border border-stone-200 shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                  {m.links && m.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {m.links.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 bg-white border border-stone-100 rounded-full text-[10px] font-bold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-sm"
                        >
                          <MapPin size={10} />
                          {link.title}
                          <ExternalLink size={10} />
                        </a>
                      ))}
                    </div>
                  )}
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

      <div className="relative flex items-center justify-center pointer-events-auto">
        {!isOpen && (
          <div className="absolute inset-0 -m-6 md:-m-8 flex items-center justify-center pointer-events-none overflow-visible">
            <svg className="w-28 h-28 md:w-32 md:h-32 animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="text-[7px] md:text-[7.5px] font-bold uppercase tracking-[0.25em] fill-indigo-600">
                <textPath xlinkHref="#circlePath">
                  Posez vos questions • Magnétisme à distance •
                </textPath>
              </text>
            </svg>
          </div>
        )}

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 z-10 ${
            isOpen ? 'bg-stone-900 text-white rotate-90' : 'bg-indigo-600 text-white btn-glow'
          }`}
        >
          {isOpen ? <Minus size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </div>
  );
};

export default FloatingChat;
