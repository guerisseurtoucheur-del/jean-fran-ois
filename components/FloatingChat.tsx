import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Loader2, ArrowRight, ExternalLink, Globe, FileText } from 'lucide-react';
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

// Base de connaissances complete sur Jean-Francois et le magnetisme
const knowledgeBase = {
  // Tarifs et prix
  tarifs: {
    keywords: ['tarif', 'prix', 'coute', 'coût', 'combien', 'euro', 'payer', 'paiement', 'gratuit', 'cher'],
    response: `**Nos tarifs sont clairs et transparents :**

**SOINS A DISTANCE (sur photo) - Tarifs fixes :**
• Soin Ponctuel : **35€** (1 séance)
• Soin Complet : **55€** (2 séances sur 48h) - *Le plus populaire*
• Forfait Suivi : **120€** (5 séances sur 2 semaines)

Paiement sécurisé par PayPal ou Carte Bancaire.

**AU CABINET ou A DOMICILE (près d'Alençon) :**
C'est au **don libre** - vous donnez selon vos moyens.

👉 Rendez-vous sur la page "Soins/RDV" pour réserver.`
  },

  // Comment ca marche
  fonctionnement: {
    keywords: ['comment', 'fonctionne', 'marche', 'deroule', 'déroule', 'etape', 'étape', 'processus', 'faire'],
    response: `**Comment se déroule un soin à distance :**

1️⃣ **Choisissez votre formule** (35€, 55€ ou 120€)
2️⃣ **Payez en ligne** (PayPal ou CB sécurisé)
3️⃣ **Envoyez votre photo** + décrivez votre problème
4️⃣ **Jean-François effectue le soin** à distance
5️⃣ **Vous ressentez les bienfaits** (souvent dès les premières heures)

La distance n'a aucune importance pour le magnétisme. L'énergie se transmet par la photo, où que vous soyez en France.

👉 Prêt à essayer ? Rendez-vous sur "Soins/RDV"`
  },

  // Magnetisme et soins
  magnetisme: {
    keywords: ['magnetisme', 'magnétisme', 'magnetiseur', 'magnétiseur', 'guerisseur', 'guérisseur', 'energie', 'énergie', 'don', 'pouvoir'],
    response: `**Qu'est-ce que le magnétisme curatif ?**

Le magnétisme est une pratique ancestrale qui utilise l'énergie vitale pour soulager les maux du corps et de l'esprit. Jean-François possède ce don depuis plus de **20 ans**.

**Comment ça fonctionne :**
Le magnétiseur canalise l'énergie universelle et la transmet au patient pour rééquilibrer son corps. Cette transmission fonctionne aussi bien en présence qu'à distance (sur photo).

**Jean-François est reconnu pour :**
• Couper le feu (brûlures, zona)
• Apaiser les maladies de peau
• Soulager les douleurs chroniques
• Calmer le stress et l'anxiété

Le magnétisme **complète** la médecine, il ne la remplace pas.`
  },

  // Coupeur de feu
  coupeurFeu: {
    keywords: ['coupeur', 'barreur', 'feu', 'brulure', 'brûlure', 'zona', 'radiotherapie', 'radiothérapie', 'chimio'],
    response: `**Jean-François est un Coupeur de Feu reconnu**

Le "coupeur de feu" (ou barreur de feu) est un don rare qui permet de soulager rapidement :

• **Brûlures domestiques** (eau chaude, huile, fer à repasser...)
• **Coups de soleil** sévères
• **Zona** et ses douleurs intenses
• **Effets de la radiothérapie** (brûlures internes)

**Efficacité remarquable :**
Le soulagement est souvent ressenti en quelques heures. De nombreux hôpitaux orientent les patients vers des coupeurs de feu en complément des soins médicaux.

**En cas de brûlure :**
1. Refroidissez sous l'eau froide 15 min
2. Contactez Jean-François immédiatement
3. Il peut agir à distance, même en urgence

📞 **09 55 55 44 62**`
  },

  // Problemes traites
  problemes: {
    keywords: ['zona', 'eczema', 'eczéma', 'psoriasis', 'douleur', 'dos', 'stress', 'anxiete', 'anxiété', 'insomnie', 'sommeil', 'migraine', 'arthrose', 'sciatique', 'tendinite', 'depression', 'dépression'],
    response: `**Les problèmes que Jean-François peut soulager :**

**Maladies de peau :**
• Zona (coupeur de feu)
• Eczéma, psoriasis
• Brûlures, coups de soleil

**Douleurs physiques :**
• Mal de dos, cervicales
• Sciatique, lumbago
• Arthrose, tendinites
• Migraines

**Troubles émotionnels :**
• Stress, anxiété
• Troubles du sommeil
• Fatigue chronique
• Burn-out

**Accompagnement médical :**
• Effets de la chimiothérapie
• Brûlures de radiothérapie
• Cicatrisation post-opératoire

⚠️ Le magnétisme complète la médecine. Consultez toujours votre médecin en priorité.`
  },

  // Contact et localisation
  contact: {
    keywords: ['contact', 'telephone', 'téléphone', 'appeler', 'adresse', 'cabinet', 'alencon', 'alençon', 'horaire', 'rendez-vous', 'rdv', 'ou', 'localisation'],
    response: `**Coordonnées de Jean-François :**

📞 **Téléphone : 09 55 55 44 62**

📍 **Cabinet :** 6 Rue du 14E Hussards, 61000 Alençon

🕐 **Horaires :**
• Lun-Ven : 9h - 19h
• Samedi : 9h - 12h

📧 **Email :** contact@jean-francois-magnetiseur-guerisseur.com

**3 façons de consulter :**
1. **À distance** (sur photo) - France entière
2. **Au cabinet** - Alençon
3. **À domicile** - 30km autour d'Alençon

👉 Réservez sur la page "Soins/RDV"`
  },

  // Distance et efficacite
  distance: {
    keywords: ['distance', 'loin', 'photo', 'efficace', 'marche', 'possible', 'france', 'etranger', 'étranger'],
    response: `**Les soins à distance sont tout aussi efficaces !**

C'est une question fréquente et légitime. Voici pourquoi ça fonctionne :

**L'énergie n'a pas de frontière :**
Le magnétisme se transmet par l'intention et la connexion énergétique. Une photo récente suffit à Jean-François pour "voir" et traiter le problème.

**Témoignages de patients :**
Des milliers de personnes en France ont été soulagées à distance, de Paris à Marseille, de Lille à Toulouse.

**Avantages du soin à distance :**
• Pas de déplacement
• Disponible partout en France
• Aussi efficace qu'en cabinet
• Idéal pour les urgences (brûlures, zona)

Jean-François pratique les soins à distance depuis plus de 20 ans avec des résultats remarquables.`
  },

  // Jean-Francois
  jeanfrancois: {
    keywords: ['jean-francois', 'jean francois', 'qui', 'parcours', 'experience', 'expérience', 'formation', 'depuis'],
    response: `**Qui est Jean-François ?**

Jean-François est magnétiseur guérisseur et toucheur depuis **plus de 20 ans**. Il a découvert son don très jeune et a choisi d'en faire sa mission de vie.

**Son expertise :**
• Coupeur de feu reconnu
• Spécialiste du zona et des brûlures
• Expert en soins à distance sur photo
• Plus de 20 ans d'expérience

**Sa philosophie :**
"L'énergie est le lien invisible qui nous unit tous. Mon souffle vous rejoint, où que vous soyez."

**Son cabinet :**
Basé à Alençon (61), il reçoit sur rendez-vous ou se déplace dans un rayon de 30km. Pour le reste de la France, il pratique les soins à distance sur photo.

📞 **09 55 55 44 62**`
  },

  // Don libre
  donLibre: {
    keywords: ['don libre', 'gratuit', 'moyens', 'pauvre', 'argent', 'finance'],
    response: `**Le don libre, comment ça marche ?**

Pour les consultations **au cabinet** (Alençon) ou **à domicile** (30km autour), Jean-François pratique le **don libre**.

**Qu'est-ce que ça signifie ?**
Vous donnez ce que vous voulez, selon vos moyens et votre ressenti après le soin. Il n'y a pas de montant minimum ni maximum.

**Pourquoi ce choix ?**
Jean-François croit que le soin doit être accessible à tous, quelle que soit la situation financière.

**Note importante :**
Les soins à distance (sur photo) ont des tarifs fixes (35€, 55€, 120€) car ils nécessitent un paiement en ligne préalable.

👉 Prenez RDV au **09 55 55 44 62**`
  }
};

// Fonction pour trouver la meilleure reponse
const findBestResponse = (userMessage: string): string | null => {
  const messageLower = userMessage.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  let bestMatch: { key: string; score: number } | null = null;
  
  for (const [key, data] of Object.entries(knowledgeBase)) {
    const matchCount = data.keywords.filter(keyword => {
      const keywordNormalized = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return messageLower.includes(keywordNormalized);
    }).length;
    
    if (matchCount > 0 && (!bestMatch || matchCount > bestMatch.score)) {
      bestMatch = { key, score: matchCount };
    }
  }
  
  if (bestMatch) {
    return knowledgeBase[bestMatch.key as keyof typeof knowledgeBase].response;
  }
  
  return null;
};

// System prompt complet pour l'IA - Instructions officielles de Jean-François
const systemPrompt = `Agis comme l'assistant personnel de Jean-François, magnétiseur-guérisseur à Alençon (Orne, Normandie). Jean-François pratique depuis 20 ans. Ton rôle est de renseigner les gens sur ses services avec bienveillance et clarté.

=== INFORMATIONS ESSENTIELLES ===

LOCALISATION :
- Cabinet : 6 Rue du 14E Hussards, 61000 Alençon (Normandie)
- Déplacements à domicile : rayon de 30 km autour d'Alençon
- Téléphone : 09 55 55 44 62
- Horaires : Lun-Ven 9h-19h, Sam 9h-12h

=== TARIFS ===

TARIFS EN PRESENTIEL (Cabinet et Domicile) :
Il n'y a PAS de tarif fixe. Jean-François fonctionne au DON LIBRE.
Le patient donne ce qu'il veut ou peut, selon ses moyens.

SOINS SUR PHOTOS (Tarifs fixes) :
- 35€ la séance (soin ponctuel)
- 55€ pour 2 séances sur 48 heures (soin complet - le plus demandé)
- 120€ pour 5 séances sur 2 semaines (forfait suivi)
Paiement sécurisé PayPal ou Carte Bancaire AVANT le soin.
   Processus : paiement → envoi photo + description → Jean-François effectue le soin

2. AU CABINET - DON LIBRE (Alençon uniquement)
   Le patient donne ce qu'il veut selon ses moyens. Sur RDV au 09 55 55 44 62.

3. A DOMICILE - DON LIBRE (30km autour d'Alençon)
   Jean-François se déplace. Sur RDV au 09 55 55 44 62.

=== QUI EST JEAN-FRANCOIS ===

EXPERIENCE : Jean-François n'est pas un débutant - il pratique le magnétisme depuis DEUX DECENNIES (20 ans). Ce long parcours lui a permis d'affiner sa sensibilité et sa compréhension profonde des énergies.

PHILOSOPHIE : Pour Jean-François, le magnétisme est un PARTAGE. C'est pour cette raison qu'au cabinet et à domicile, il privilégie le DON LIBRE, afin que le soin reste accessible à TOUS, peu importe les moyens financiers. Personne ne doit être privé de soin à cause de l'argent.

DISPONIBILITE : Jean-François est profondément ancré dans sa région, la Normandie. Il intervient avec la même dévotion et le même engagement, que ce soit en face à face au cabinet, à domicile, ou à distance sur photo pour toute la France.

=== SPECIALITES DE JEAN-FRANCOIS ===

En tant que guérisseur traditionnel, Jean-François intervient sur les maux du corps et de l'esprit :
- COUPEUR DE FEU : brûlures, coups de soleil, zona, effets radiothérapie/chimiothérapie
- MALADIES DE PEAU : eczéma, psoriasis, dermatites, acné
- DOULEURS : dos, cervicales, sciatique, arthrose, tendinites, migraines
- BLOCAGES ENERGETIQUES : fatigue chronique, épuisement, manque de vitalité
- TROUBLES EMOTIONNELS : stress, anxiété, insomnie, burn-out
- ACCOMPAGNEMENT : suivi chimio, cicatrisation, rééquilibrage énergétique global

=== LE MAGNETISME ===

Le magnétisme curatif est une pratique ancestrale qui utilise l'énergie vitale pour soulager les maux du corps et de l'esprit. Jean-François possède ce don naturel qu'il a développé et affiné pendant 20 ans. Il canalise l'énergie universelle et la transmet au patient pour rééquilibrer son corps et libérer les blocages. 

Cette transmission fonctionne aussi bien en présence physique qu'à distance sur photo - l'énergie n'a pas de frontière géographique. La distance n'affaiblit en rien l'efficacité du soin.

=== TON ET ATTITUDE ===

Tu dois être :
- RESPECTUEUX et BIENVEILLANT
- CALME et RASSURANT  
- CLAIR et CONCIS (pas de longs pavés)
- PROFESSIONNEL mais CHALEUREUX

=== REGLES IMPORTANTES ===

1. Ne JAMAIS remplacer un avis médical - explique que le magnétisme AIDE EN COMPLEMENT
2. Distingue TOUJOURS tarifs fixes (soins sur photo) vs don libre (cabinet/domicile)
3. Oriente vers la page /demande-soin pour réserver
4. Quand on te pose une question, réponds PRECISEMENT au nom de Jean-François
5. Propose toujours une action concrète à la fin (appeler, réserver, etc.)

=== REPONSES TYPES ===

Si "combien ça coûte" : Explique les 3 options avec tarifs fixes (distance) vs don libre (cabinet/domicile)
Si "comment ça marche" : Explique les étapes du soin à distance
Si "c'est efficace" : Rassure sur l'efficacité des soins à distance, 20+ ans d'expérience
Si urgence brûlure : Conseille refroidir + appeler 09 55 55 44 62 immédiatement`;

const FloatingChat: React.FC<FloatingChatProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant de Jean-François, magnétiseur guérisseur depuis plus de 20 ans. Je connais tout sur nos soins à distance, nos tarifs et le magnétisme. Comment puis-je vous aider ?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
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
    
    // D'abord, essayer de trouver une reponse dans la base de connaissances
    const localResponse = findBestResponse(userMsg);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: newMessages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        config: {
          systemInstruction: systemPrompt,
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      });

      const responseText = response.text || localResponse || "Je n'ai pas compris votre question. Pouvez-vous reformuler ?";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setRetryCount(0);
      
    } catch (error) {
      console.error("Erreur API:", error);
      
      // Utiliser la reponse locale si disponible
      if (localResponse) {
        setMessages(prev => [...prev, { role: 'model', text: localResponse }]);
        setRetryCount(0);
      } else {
        // Reponse de fallback generique
        const fallbackResponses = [
          `Je suis là pour vous aider ! Voici les informations essentielles :

**Tarifs soins à distance (sur photo) :**
• 35€ (1 séance) | 55€ (2 séances) | 120€ (5 séances)

**Cabinet & Domicile (Alençon) :** Don libre

📞 **Appelez le 09 55 55 44 62** ou visitez la page "Soins/RDV" pour réserver.`,
          
          `Jean-François peut vous soulager à distance ! 

**Comment ça marche :**
1. Choisissez votre formule (35€, 55€ ou 120€)
2. Payez en ligne
3. Envoyez votre photo
4. Recevez votre soin

👉 Rendez-vous sur "Soins/RDV" pour commencer.`
        ];
        
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: fallbackResponses[retryCount % fallbackResponses.length]
        }]);
        setRetryCount(prev => prev + 1);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-3 md:bottom-6 md:right-6 z-[999] flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-24px)] sm:w-[400px] h-[calc(100vh-140px)] sm:h-[550px] max-h-[600px] bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-stone-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 pointer-events-auto">
          <div className="p-4 sm:p-6 bg-[#b45334] text-white flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <Globe size={16} className="animate-pulse" />
              <div>
                <p className="font-serif font-bold text-xs sm:text-sm">Assistant Jean-François</p>
                <p className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold opacity-70">Expert Magnétisme</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors active:bg-white/20"><X size={18} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-stone-50 overscroll-contain" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[90%] space-y-2">
                  <div className={`p-4 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${m.role === 'user' ? 'bg-[#b45334] text-white shadow-lg' : 'bg-white text-stone-800 border border-stone-100 shadow-sm'}`}>
                    {m.text}
                  </div>
                  {m.links && (
                    <div className="flex flex-wrap gap-2">
                      {m.links.map((link, idx) => (
                        <a key={idx} href={link.uri} target="_blank" rel="noopener" className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 rounded-full text-[9px] font-bold text-[#b45334] hover:bg-[#b45334]/10 shadow-sm">
                          <ExternalLink size={10} /> {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-stone-400 text-[10px]">
                <Loader2 size={12} className="animate-spin" />
                <span className="italic">Jean-François réfléchit...</span>
              </div>
            )}
          </div>

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

          <div className="px-3 py-2 bg-amber-50 border-t border-amber-100">
            <p className="text-[9px] text-amber-700 text-center">Le magnetisme ne remplace pas la medecine. Consultez toujours votre medecin en priorite.</p>
          </div>
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
                className="p-3 bg-[#b45334] text-white rounded-full hover:bg-[#9a4429] active:bg-[#8b3a25] transition-all flex-shrink-0 touch-manipulation disabled:opacity-50"
              >
                {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <div className="mb-2 px-4 py-2 bg-white rounded-2xl shadow-lg border border-stone-100 pointer-events-auto animate-bounce relative">
          <p className="text-xs font-bold text-stone-800">Une question ?</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-stone-100 transform rotate-45"></div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(180,83,52,0.5)] transition-all duration-500 hover:scale-110 active:scale-95 pointer-events-auto group z-10 touch-manipulation
          ${isOpen 
            ? 'bg-stone-900 text-white' 
            : 'bg-gradient-to-br from-[#c45d3a] via-[#b45334] to-[#8b3a25] text-white ring-4 ring-white shadow-[#b45334]/50'}`}
      >
        {!isOpen && (
          <>
            <span className="absolute -inset-2 rounded-full bg-[#c45d3a] animate-ping opacity-30"></span>
            <span className="absolute -inset-4 rounded-full bg-[#b45334]/10 animate-pulse"></span>
          </>
        )}
        
        <div className="relative z-20">
          {isOpen ? (
            <X size={24} className="sm:w-8 sm:h-8 animate-in zoom-in duration-300" />
          ) : (
            <div className="relative">
              <MessageCircle size={24} className="sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
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
