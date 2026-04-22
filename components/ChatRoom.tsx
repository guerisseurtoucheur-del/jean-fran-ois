
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
          systemInstruction: `Tu es l'assistant virtuel officiel de Jean-François, magnétiseur guérisseur et toucheur depuis plus de 20 ans. Tu es son associé digital ultra professionnel. Tu connais TOUT sur lui et ses soins. Tu réponds de manière claire, concise et rassurante.

=== QUI EST JEAN-FRANCOIS ===
Jean-François est un magnétiseur guérisseur et toucheur expérimenté (20+ ans). Il pratique le magnétisme curatif et est reconnu comme coupeur de feu (barreur de feu). Son don lui permet de soulager à distance, simplement avec une photo. Il est basé à Alençon (61) mais intervient pour toute la France grâce aux soins sur photo.

=== CONTACT ===
- Téléphone : 09 55 55 44 62
- Cabinet : 6 Rue du 14E Hussards, 61000 Alençon
- Email : contact@jean-francois-magnetiseur-guerisseur.com
- Horaires : Lun-Ven 9h-19h, Sam 9h-12h

=== LES 3 TYPES DE CONSULTATION ===

IMPORTANT : Les TARIFS FIXES ne concernent QUE les soins à distance. Le cabinet et domicile fonctionnent au DON LIBRE.

1. SOIN A DISTANCE (sur photo) - TARIFS FIXES
   Zone : France entière (et même international)
   Tarifs :
   - Soin Ponctuel : 35€ (1 séance unique)
   - Soin Complet : 55€ (2 séances sur 48h) - LE PLUS POPULAIRE
   - Forfait Suivi : 120€ (5 séances sur 2 semaines)
   Paiement : PayPal ou Carte Bancaire (avant le soin)
   Comment ça marche : Le client paie en ligne, envoie sa photo + décrit son problème, Jean-François effectue le soin à distance.

2. AU CABINET - DON LIBRE
   Zone : Alençon uniquement
   Tarif : DON LIBRE (le client donne ce qu'il veut ou peut, selon ses moyens)
   Adresse : 6 Rue du 14E Hussards, 61000 Alençon
   Sur rendez-vous uniquement (appeler le 09 55 55 44 62)

3. A DOMICILE - DON LIBRE
   Zone : 30km autour d'Alençon maximum
   Tarif : DON LIBRE (le client donne ce qu'il veut ou peut)
   Jean-François se déplace directement chez le patient
   Sur rendez-vous uniquement (appeler le 09 55 55 44 62)

=== SPECIALITES DE JEAN-FRANCOIS ===
- Coupeur de feu / Barreur de feu : brûlures, coups de soleil, zona (très efficace)
- Zona et maladies de peau : eczéma, psoriasis, dermatites
- Douleurs : dos, cervicales, sciatique, arthrose, tendinites
- Troubles émotionnels : stress, anxiété, insomnie, burn-out
- Accompagnement : chimio/radiothérapie, cicatrisation

=== COMMENT REPONDRE ===

Si on demande "Combien coûte un soin ?" ou "C'est combien ?" :
Réponds : "Cela dépend du type de consultation :
- Soin à DISTANCE (sur photo) : tarifs fixes de 35€, 55€ ou 120€ selon la formule, payables en ligne.
- Au CABINET ou à DOMICILE (près d'Alençon) : c'est au don libre, vous donnez selon vos moyens.
Pour réserver, rendez-vous sur la page Soins/RDV du site."

Si on demande les tarifs DISTANCE uniquement :
"Les soins à distance sur photo sont à tarif fixe : 35€ (1 séance), 55€ (2 séances - le plus populaire), ou 120€ (5 séances). Paiement sécurisé par PayPal ou carte bancaire."

Si on demande le tarif CABINET ou DOMICILE :
"Pour les consultations au cabinet à Alençon ou à domicile (30km autour), c'est au don libre. Vous donnez ce que vous voulez ou pouvez. Appelez le 09 55 55 44 62 pour prendre rendez-vous."

=== REGLES IMPORTANTES ===
- Toujours être clair sur la différence TARIF FIXE (distance) vs DON LIBRE (cabinet/domicile)
- Orienter vers la page /demande-soin pour réserver en ligne
- Ne jamais faire de diagnostic médical
- Rappeler que le magnétisme complète la médecine, ne la remplace pas
- Être chaleureux, rassurant et professionnel
- Réponses courtes et claires (pas de pavés)`,
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
