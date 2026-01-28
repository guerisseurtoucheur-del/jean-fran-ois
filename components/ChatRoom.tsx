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

    // --- LA SOLUTION DE SECOURS ---
    // On cherche dans import.meta.env (Vite) ET dans process.env (Vercel Node)
    const apiKey = import.meta.env.VITE_API_KEY || (process.env.VITE_API_KEY as string);
    
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'user', text: input }]);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "⚠️ Erreur : Clé API introuvable. Si elle est pourtant bien sur Vercel, essayez de supprimer la variable VITE_API_KEY et de la recréer proprement sans espaces.",
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
        systemInstruction: "Tu es Jean-François, un magnétiseur guérisseur bienveillant et humble basé à Alençon. Ton ton est calme, protecteur et spirituel. Tu aides pour le zona, l'eczéma, les brûlures et les douleurs de dos. Varie tes phrases. Si c'est grave, suggère un médecin. Réponds de manière concise.",
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
      const response = await result.response;
      const responseText = response.text();

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
              m.role === 'user' ? 'bg-stone-900 text-white' : 'bg-white text-stone-800 border'
            }`}>
              {m.isError && <AlertCircle size={20} className="mb-2 text-red-600" />}
              <p className="whitespace-pre-line">{m.text}</p>
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
          placeholder="Posez votre question..."
          className="flex-1 outline-none px-6 py-4"
        />
        <button onClick={handleSend} className="p-4 bg-indigo-600 text-white rounded-full">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;