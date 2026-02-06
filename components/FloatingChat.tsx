
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2, Minus, Heart, ArrowRight, MapPin, ExternalLink, Globe } from 'lucide-react';

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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
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

      if (response.text) {
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: response.text,
          links: groundingLinks.length > 0 ? groundingLinks : undefined
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Une petite coupure d'énergie... réessayez." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-[999] flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-32px)] sm:w-[400px] h-[550px] bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 pointer-events-auto">
          <div className="p-6 bg-indigo-600 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Globe size={18} className="animate-pulse" />
              <div>
                <p className="font-serif font-bold text-sm">Assistant Jean-François</p>
                <p className="text-[9px] uppercase tracking-widest font-bold opacity-70">Expertise France Entière</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={18} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50" ref={scrollRef}>
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

          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2 bg-stone-50 p-1 rounded-full border border-stone-200">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Votre question sur le soin à distance..." className="flex-1 bg-transparent px-4 py-3 outline-none text-xs" />
              <button onClick={handleSend} disabled={loading} className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all"><Send size={14} /></button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 pointer-events-auto ${isOpen ? 'bg-stone-900 text-white' : 'bg-indigo-600 text-white'}`}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default FloatingChat;