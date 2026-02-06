
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, HeartHandshake, AlertCircle, MapPin, ExternalLink } from 'lucide-react';

interface GroundingLink {
  title: string;
  uri: string;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
  links?: GroundingLink[];
}

const ChatRoom: React.FC<{ onStartHealing: () => void }> = ({ onStartHealing }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bonjour, je suis Jean-François. Posez-moi vos questions sur vos douleurs ou votre besoin de soin. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<any>(null);

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

  useEffect(() => {
    const initChat = async () => {
      const apiKey = process.env.API_KEY;
      if (!apiKey) return;

      const ai = new GoogleGenAI({ apiKey: apiKey });
      const location = await getUserLocation();

      chatInstance.current = ai.chats.create({
        model: "gemini-2.5-flash",
        history: [],
        config: {
          systemInstruction: "Tu es Jean-François, un magnétiseur guérisseur bienveillant basé à Alençon. Ton ton est calme. Tu aides pour le zona, l'eczéma et les douleurs de dos. Si on demande où tu te trouves, précise que tu es au Centre-ville d'Alençon (61000) et utilise l'outil Google Maps pour sourcer ta réponse.",
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
    };
    initChat();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading || !chatInstance.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const result = await chatInstance.current.sendMessage({ message: userMsg });
      
      const groundingLinks: GroundingLink[] = [];
      const chunks = result.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      
      chunks.forEach((chunk: any) => {
        if (chunk.maps) {
          groundingLinks.push({ title: chunk.maps.title || "Voir sur Google Maps", uri: chunk.maps.uri });
        } else if (chunk.web) {
          groundingLinks.push({ title: chunk.web.title || "Source Web", uri: chunk.web.uri });
        }
      });

      if (result.text) {
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: result.text,
          links: groundingLinks.length > 0 ? groundingLinks : undefined
        }]);
      }
    } catch (error: any) {
      console.error("Erreur Chat:", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "Le lien énergétique est perturbé. Vérifiez votre connexion.",
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
            <div className="max-w-[85%] space-y-3">
              <div className={`p-6 rounded-[2rem] ${
                m.role === 'user' 
                  ? 'bg-stone-900 text-white rounded-tr-none shadow-md' 
                  : m.isError 
                    ? 'bg-red-50 text-red-900 border border-red-200 rounded-tl-none'
                    : 'bg-white text-stone-800 rounded-tl-none border border-stone-100 shadow-sm'
              }`}>
                {m.isError && <AlertCircle size={20} className="mb-2 inline mr-2" />}
                <p className="whitespace-pre-line">{m.text}</p>
              </div>
              
              {m.links && m.links.length > 0 && (
                <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2">
                  {m.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-100 rounded-xl text-xs font-bold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-sm"
                    >
                      <MapPin size={14} />
                      {link.title}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start italic text-stone-400 text-sm animate-pulse">
            Jean-François se connecte...
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex gap-4 p-2 bg-white rounded-[2.5rem] items-center border border-stone-200 shadow-xl">
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
            className="p-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-30 transition-all"
          >
            <Send size={20} />
          </button>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onStartHealing}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold hover:bg-indigo-100 transition-colors"
          >
            <HeartHandshake size={18} />
            <span>Demander un soin sur photo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
