import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai"; // Mis à jour: GoogleGenerativeAI -> GoogleGenAI
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
  const chatRef = useRef<Chat | null>(null); // Référence pour l'objet de chat

  // Initialisation du chat Gemini une seule fois au montage du composant
  useEffect(() => {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error("API Key non configurée pour le chat.");
      setMessages(prev => [...prev, {
        role: 'model',
        text: "⚠️ Erreur : Clé API introuvable. Veuillez contacter l'administrateur.",
        isError: true
      }]);
      return;
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    // Convertir l'historique initial pour le SDK
    const initialHistoryForSdk = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));

    chatRef.current = ai.chats.create({
      model: "gemini-3-flash-preview", // Modèle recommandé
      history: initialHistoryForSdk, // Passer l'historique initial ici
      config: {
        systemInstruction: "Tu es Jean-François, un magnétiseur guérisseur bienveillant et humble basé à Alençon. Ton ton est calme, protecteur et spirituel. Tu aides pour le zona, l'eczéma, les brûlures et les douleurs de dos. Varie tes phrases. Si c'est grave, suggère un médecin. Réponds de manière concise.",
      },
    });

  }, []); // Exécuter une seule fois au montage

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading || !chatRef.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const result = await chatRef.current.sendMessage({ message: userMsg }); // Utiliser l'objet chat pour envoyer le message
      const responseText = result.text; // Accès direct à la propriété .text

      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      }
    } catch (error: any) {
      console.error("Erreur Chat:", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "Le lien énergétique est perturbé. Vérifiez votre clé API dans les paramètres Vercel.",
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
              m.role === 'user' 
                ? 'bg-stone-900 text-white rounded-tr-none shadow-md' 
                : m.isError 
                  ? 'bg-red-50 text-red-900 border border-red-200 rounded-tl-none'
                  : 'bg-white text-stone-800 rounded-tl-none border border-stone-100 shadow-sm'
            }`}>
              {m.isError && <AlertCircle size={20} className="mb-2 inline mr-2" />}
              <p className="whitespace-pre-line">{m.text}</p>
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