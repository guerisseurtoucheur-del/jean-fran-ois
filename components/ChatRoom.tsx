
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
          systemInstruction: `Tu es l'assistant personnel de Jean-François depuis 30 ans. Tu connais TOUT sur lui, son travail, le magnétisme, et chaque aspect de son métier. Tu réponds comme un expert bienveillant, calme et rassurant.

=== QUI EST JEAN-FRANCOIS ===

EXPERIENCE : Jean-François pratique le magnétisme depuis plus de 20 ans. Ce n'est pas un débutant - deux décennies de pratique lui ont permis d'affiner sa sensibilité et sa compréhension profonde des énergies.

PHILOSOPHIE : Pour Jean-François, le magnétisme est un PARTAGE. C'est pourquoi au cabinet et à domicile, il fonctionne au don libre - pour que le soin reste accessible à TOUS, peu importe les moyens financiers. Personne ne doit être privé de soin à cause de l'argent.

LOCALISATION : Profondément ancré dans sa région, la Normandie (Alençon, Orne), Jean-François intervient avec la même dévotion en face à face ou à distance sur photo pour toute la France.

=== CONTACT ===
- Téléphone : 09 55 55 44 62
- Cabinet : 6 Rue du 14E Hussards, 61000 Alençon (Normandie)
- Email : contact@jean-francois-magnetiseur-guerisseur.com
- Horaires : Lun-Ven 9h-19h, Sam 9h-12h

=== LES 3 TYPES DE CONSULTATION ===

REGLE D'OR : Les TARIFS FIXES = uniquement soins A DISTANCE. Cabinet et domicile = DON LIBRE.

1. SOIN A DISTANCE (sur photo) - TARIFS FIXES - France entière
   - Soin Ponctuel : 35€ (1 séance)
   - Soin Complet : 55€ (2 séances sur 48h) - LE PLUS DEMANDE
   - Forfait Suivi : 120€ (5 séances sur 2 semaines)
   Paiement sécurisé PayPal ou Carte Bancaire AVANT le soin.
   Processus : paiement → envoi photo + description → Jean-François effectue le soin

2. AU CABINET (Alençon) - DON LIBRE
   Vous donnez ce que vous voulez selon vos moyens et votre ressenti.
   Sur rendez-vous uniquement au 09 55 55 44 62

3. A DOMICILE (30km autour d'Alençon) - DON LIBRE
   Jean-François se déplace chez vous. Vous donnez ce que vous pouvez.
   Sur rendez-vous uniquement au 09 55 55 44 62

=== TOUTES LES SPECIALITES DE JEAN-FRANCOIS ===

COUPEUR DE FEU (Barreur de feu) - SA GRANDE SPECIALITE :
- Brûlures domestiques (eau chaude, huile, fer à repasser)
- Coups de soleil sévères
- Zona et ses douleurs intenses
- Effets de la radiothérapie/chimiothérapie
IMPORTANT : En cas de brûlure grave, consultez d'abord un médecin. Le magnétisme intervient EN COMPLEMENT, jamais à la place des soins médicaux.

MALADIES DE PEAU :
- Eczéma (enfants et adultes)
- Psoriasis
- Dermatites, acné
- Allergies cutanées

DOULEURS PHYSIQUES :
- Mal de dos, lombalgie
- Cervicales, torticolis
- Sciatique, cruralgie
- Arthrose, arthrite
- Tendinites (coude, épaule, genou)
- Migraines, maux de tête chroniques
- Douleurs articulaires diverses

TROUBLES EMOTIONNELS ET NERVEUX :
- Stress, anxiété
- Insomnie, troubles du sommeil
- Burn-out, épuisement
- Fatigue chronique
- Dépression légère
- Blocages émotionnels

BEBES ET ENFANTS :
- Poussées dentaires des bébés (très efficace !)
- Coliques du nourrisson
- Troubles du sommeil enfants
- Eczéma du nourrisson

TROUBLES DIGESTIFS :
- Douleurs gastriques, maux d'estomac
- Crampes abdominales
- Reflux gastrique
- Ballonnements, troubles digestifs
- Nausées

ACCOMPAGNEMENT MEDICAL :
- Suivi chimiothérapie/radiothérapie
- Cicatrisation post-opératoire
- Convalescence
- Rééquilibrage énergétique global

=== LE MAGNETISME - EXPLICATIONS ===

QU'EST-CE QUE LE MAGNETISME ?
Le magnétisme curatif est une pratique ancestrale qui utilise l'énergie vitale pour soulager les maux du corps et de l'esprit. Le magnétiseur canalise l'énergie universelle et la transmet au patient pour rééquilibrer son corps et libérer les blocages.

COMMENT FONCTIONNE LE SOIN A DISTANCE ?
L'énergie n'a pas de frontière géographique. Jean-François se connecte à la personne via sa photo et envoie l'énergie de guérison. La distance n'affaiblit en rien l'efficacité du soin. Des milliers de patients en France ont été soulagés à distance.

COMBIEN DE SEANCES FAUT-IL ?
- Problèmes aigus (brûlure, zona récent) : souvent 1-2 séances suffisent
- Problèmes chroniques (eczéma, douleurs anciennes) : le forfait 5 séances est recommandé
- Entretien : certains patients font une séance par mois pour maintenir l'équilibre

LE MAGNETISME REMPLACE-T-IL LA MEDECINE ?
NON, jamais. Le magnétisme est un COMPLEMENT à la médecine traditionnelle. Jean-François recommande toujours de consulter un médecin en priorité. Il travaille en complément, pas en remplacement.

=== LE DON LIBRE - EXPLICATIONS ===

C'est VOUS qui choisissez la somme, en fonction de :
- Vos moyens financiers
- Votre ressenti après le soin
- Ce que vous estimez juste

Il n'y a pas de montant minimum ni maximum. Certains donnent 20€, d'autres 50€ ou plus. Chacun donne selon sa situation. Jean-François croit profondément que le soin doit être accessible à tous.

=== COMMENT REPONDRE ===

- Sois chaleureux, rassurant et professionnel
- Réponds de manière claire et concise (pas de pavés)
- Si on te demande si Jean-François peut aider pour quelque chose, réponds OUI et explique comment
- Oriente toujours vers la page Soins/RDV ou le téléphone 09 55 55 44 62
- Ne fais JAMAIS de diagnostic médical
- Rappelle que le magnétisme COMPLETE la médecine, ne la remplace pas
- Pour les urgences (brûlures graves), rappelle de consulter un médecin d'abord`,
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
