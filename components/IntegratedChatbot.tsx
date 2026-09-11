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
• Soin Complet : **55€** (2 séances sur 48h) - *Le plus demande*
• Forfait Suivi : **120€** (5 séances sur 2 semaines)

Paiement securise par PayPal ou Carte Bancaire.

**AU CABINET ou A DOMICILE (pres d'Alencon) :**
C'est au **don libre** : vous choisissez vous-meme la somme en fonction de vos moyens et de votre ressenti apres le soin. Jean-Francois veut que le soin reste accessible a tous.

Pour prendre rendez-vous : **09 55 55 44 62**
Ou rendez-vous sur la page "Soins/RDV" pour reserver en ligne.`
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

- Brulures domestiques (eau chaude, huile, fer a repasser...)
- Coups de soleil severes
- Zona et ses douleurs intenses
- Effets de la radiotherapie (brulures internes)

**IMPORTANT - En cas de brulure :**
Consultez d'abord un medecin ou les urgences si necessaire. Le magnetisme intervient EN COMPLEMENT des soins medicaux, jamais a la place.

**Comment Jean-Francois peut aider :**
Une fois la prise en charge medicale faite, Jean-Francois peut "couper le feu" a distance sur photo pour soulager la douleur. De nombreux hopitaux orientent les patients vers des coupeurs de feu en complement.

**Contact : 09 55 55 44 62**`
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
    response: `**Qui est Jean-Francois ?**

Jean-Francois est magnetiseur guerisseur et toucheur depuis **plus de 20 ans**. Ce n'est pas un debutant - deux decennies de pratique lui ont permis d'affiner sa sensibilite et sa comprehension profonde des energies.

**Son expertise :**
• Coupeur de feu reconnu (brulures, zona)
• Specialiste des maladies de peau (eczema, psoriasis)
• Expert en soulagement des douleurs chroniques
• Maitre des soins a distance sur photo

**Sa philosophie :**
Pour Jean-Francois, le magnetisme est un PARTAGE. C'est pourquoi au cabinet et a domicile, il fonctionne au don libre - pour que le soin reste accessible a tous, peu importe les moyens financiers.

**Sa disponibilite :**
Profondement ancre dans sa region, la Normandie, Jean-Francois intervient avec la meme devotion en face a face ou a distance sur photo pour toute la France.

**Contact : 09 55 55 44 62**
**Email : contact@jean-francois-magnetiseur-guerisseur.com**`
  },

  // Don libre
  donLibre: {
    keywords: ['don libre', 'gratuit', 'moyens', 'pauvre', 'argent', 'finance', 'accessible'],
    response: `**Le don libre, comment ca marche ?**

Pour les consultations **au cabinet** (Alencon) ou **a domicile** (30km autour), Jean-Francois pratique le **don libre**.

**Qu'est-ce que ca signifie ?**
C'est VOUS qui choisissez la somme, en fonction de :
• Vos moyens financiers
• Votre ressenti apres le soin
• Ce que vous estimez juste

Il n'y a pas de montant minimum ni maximum. Certains donnent 20€, d'autres 50€ ou plus. Chacun donne selon sa situation.

**Pourquoi ce choix ?**
Pour Jean-Francois, le magnetisme est un PARTAGE. Le soin doit rester accessible a tous, peu importe la situation financiere. Personne ne doit etre prive de soin a cause de l'argent.

**Note :** Les soins a distance (sur photo) ont des tarifs fixes (35€, 55€, 120€) car ils necessitent un paiement en ligne prealable.

**Contact : 09 55 55 44 62**`
  },

  // Questions "pouvez-vous m'aider"
  aide: {
    keywords: ['aider', 'aide', 'soigner', 'traiter', 'possible', 'capable', 'peau', 'probleme', 'problème', 'mal', 'maux'],
    response: `**Oui, Jean-Francois peut vous aider pour de nombreux problemes !**

**Problemes de peau :**
Oui, Jean-Francois peut vous aider pour les problemes de peau : eczema, psoriasis, zona, brulures, dermatites, acne...

**Douleurs chroniques :**
Oui, il peut soulager : mal de dos, sciatique, cervicales, arthrose, tendinites, migraines, douleurs articulaires...

**Dents des bebes :**
Oui, Jean-Francois soulage les douleurs de dentition des bebes. Le magnetisme apaise la douleur et calme l'enfant naturellement.

**Douleurs gastriques :**
Oui, il intervient sur les troubles digestifs : douleurs gastriques, maux de ventre, crampes, reflux...

**Troubles emotionnels :**
Oui, il accompagne : stress, anxiete, insomnie, burn-out, fatigue chronique, depression legere...

**Specialite - Coupeur de feu :**
Oui, c'est meme sa specialite ! Brulures, zona, coups de soleil, effets de la radiotherapie...

**Accompagnement medical :**
Oui, en complement de vos traitements : chimio, cicatrisation, convalescence...

N'hesitez pas a decrire votre situation pour un avis personnalise.
**Contact : 09 55 55 44 62**`
  },

  // Dents des bebes
  dentsBebes: {
    keywords: ['dent', 'dents', 'bebe', 'bébé', 'bebes', 'bébés', 'dentition', 'pousse', 'gencive', 'nourrisson', 'enfant'],
    response: `**Oui, Jean-Francois soulage les douleurs de dentition des bebes !**

La poussee dentaire est souvent une periode difficile pour les bebes et leurs parents. Le magnetisme permet d'apaiser naturellement la douleur et de calmer l'enfant.

**Comment ca marche ?**
Jean-Francois peut intervenir :
- En presentiel au cabinet ou a domicile (autour d'Alencon)
- A distance sur photo (toute la France)

Un soin sur photo du bebe peut rapidement soulager les douleurs liees a la poussee des dents.

**Tarifs :**
- Cabinet/Domicile : don libre
- A distance : 35€ la seance

**Contact : 09 55 55 44 62**`
  },

  // Douleurs gastriques
  gastrique: {
    keywords: ['gastrique', 'estomac', 'ventre', 'digestion', 'digestif', 'crampe', 'reflux', 'intestin', 'ballonnement', 'nausee'],
    response: `**Oui, Jean-Francois intervient sur les troubles gastriques et digestifs !**

Le magnetisme peut aider a soulager :
- Douleurs gastriques et maux d'estomac
- Crampes abdominales
- Reflux gastrique
- Ballonnements
- Troubles digestifs divers
- Nausees

**Comment ca marche ?**
Jean-Francois travaille sur le reequilibrage energetique de la zone abdominale pour soulager les tensions et les douleurs.

**Options de consultation :**
- Cabinet a Alencon (don libre)
- A domicile - 30km autour d'Alencon (don libre)
- A distance sur photo - France entiere (35€, 55€ ou 120€)

**Contact : 09 55 55 44 62**`
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

const IntegratedChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant de Jean-François, magnétiseur guérisseur depuis plus de 20 ans. Posez-moi vos questions !' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setLoading(true);
    
    const localResponse = findBestResponse(userMsg);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: newMessages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        config: { systemInstruction: systemPrompt, maxOutputTokens: 500, temperature: 0.7 },
      });
      const responseText = response.text || localResponse || "Je n'ai pas compris votre question.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      if (localResponse) {
        setMessages(prev => [...prev, { role: 'model', text: localResponse }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: "Je suis là pour vous aider ! Vous pouvez envoyer votre demande de soin via le formulaire ci-dessous." }]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
      <div className="p-4 sm:p-6 bg-[#b45334]/80 backdrop-blur-md text-white flex items-center gap-3">
        <Globe size={20} className="animate-pulse" />
        <div>
          <p className="font-serif font-bold text-sm sm:text-base">Assistant Jean-François</p>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-70">En ligne</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${m.role === 'user' ? 'bg-[#c9a962] text-stone-900 rounded-br-none font-medium shadow-md' : 'bg-white/20 text-white rounded-bl-none border border-white/10 shadow-sm'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-white/50 text-xs">
            <Loader2 size={12} className="animate-spin" />
            <span className="italic">Jean-François réfléchit...</span>
          </div>
        )}
      </div>

      <div className="p-3 bg-white/5 border-t border-white/10">
        <form onSubmit={handleSend} className="flex gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Votre question..." 
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#c9a962] text-sm" 
          />
          <button 
            type="submit"
            disabled={loading} 
            className="w-12 flex-shrink-0 bg-[#c9a962] text-stone-900 rounded-xl flex items-center justify-center hover:bg-[#b59858] transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default IntegratedChatbot;
