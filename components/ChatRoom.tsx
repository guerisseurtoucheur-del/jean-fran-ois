
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, HeartHandshake, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatRoom: React.FC<{ onStartHealing: () => void }> = ({ onStartHealing }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bonjour, je suis Jean-François. Posez-moi vos questions sur vos douleurs ou votre besoin de soin. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Défilement automatique vers le bas à chaque nouveau message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    // Vérification de sécurité pour la clé API
    // Sur Vercel, assurez-vous d'avoir ajouté API_KEY dans les Environment Variables
    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey.includes("API_KEY")) {
      setMessages(prev => [...prev, { role: 'user', text: input }]);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "⚠️ Attention : Je n'arrive pas à me connecter. Sur Vercel, assurez-vous d'avoir ajouté la variable d'environnement 'API_KEY' dans les réglages de votre projet (Settings > Environment Variables)." 
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
      // Initialisation avec la clé d'environnement
      const ai = new GoogleGenAI({ apiKey: apiKey });
      
      // On envoie l'historique complet pour que Jean-François se souvienne du début de la conversation
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: currentMessages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "Tu es Jean-François, un magnétiseur guérisseur bienveillant et humble basé à Alençon. Ton ton est calme, protecteur et spirituel mais terre-à-terre. Tu aides les gens pour le zona, l'eczéma, les brûlures et les douleurs de dos. Si la personne semble souffrir d'un problème grave, suggère toujours d'en parler aussi à un médecin. Réponds de manière concise et apaisante. Ne parle pas de technique informatique, reste dans ton rôle de guérisseur.",
        },
      });

      const responseText = response.text;

      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      } else {
        throw new Error("Réponse vide");
      }
    } catch (error) {
      console.error("Erreur détaillée du Chat:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Le lien énergétique est momentanément perturbé (Erreur technique). Veuillez vérifier votre connexion ou réessayer plus tard." 
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
                : m.text.includes('⚠️') 
                  ? 'bg-amber-50 text-amber-800 border border-amber-200 rounded-tl-none'
                  : 'bg-white text-stone-800 rounded-tl-none border border-stone-100 shadow-sm'
            }`}>
              {m.text.includes('⚠️') && <AlertCircle size={20} className="mb-2" />}
              <p className="text-base leading-relaxed">{m.text}</p>
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
        <div className="flex gap-4 p-2 bg-white rounded-[2.5rem] items-center border border-stone-200 shadow-lg focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50 transition-all">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question à Jean-François..."
            className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-stone-800"
            disabled={loading}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="p-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-30 disabled:grayscale"
          >
            <Send size={20} />
          </button>
        </div>

        <div className="flex justify-center pt-2">
          <button 
            onClick={onStartHealing}
            className="group flex items-center gap-3 px-8 py-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold hover:bg-indigo-100 transition-all border border-indigo-100/50"
          >
            <HeartHandshake size={18} className="group-hover:scale-110 transition-transform" />
            <span>Passer à la demande de soin (Photo)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
