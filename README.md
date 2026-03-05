# Jean-François - Magnétiseur Guérisseur

Site officiel de Jean-François, magnétiseur à Alençon (61). Spécialiste des soins énergétiques par le souffle et magnétisme sur photo pour toute la France.

**Domaine Officiel :** [https://www.jean-francois-magnétiseur-guerisseur.com](https://www.jean-francois-magnétiseur-guerisseur.com)

## Description du Projet
Ce site permet aux patients de toute la France de :
- Découvrir les bienfaits du magnétisme à distance (Zona, Eczéma, Brûlures...).
- Envoyer une demande de soin sécurisée avec photo.
- Échanger avec un assistant énergétique intelligent basé sur l'IA Gemini.
- Régler les honoraires via un espace sécurisé.

## Technologies utilisées
- **Next.js 15** (App Router) & **Tailwind CSS v4** : Framework React moderne avec SSR pour SEO optimal
- **Google Gemini API** : Pour l'assistant de soin intelligent
- **Lucide React** : Pour l'iconographie moderne
- **Tally.so** : Pour le formulaire de demande de soin

## Structure du Projet (Next.js)
```
app/
├── layout.tsx              # Layout racine avec métadonnées SEO
├── page.tsx                # Page d'accueil (/)
├── globals.css             # Styles globaux Tailwind
├── sitemap.ts              # Sitemap XML dynamique
├── robots.ts               # Fichier robots.txt
├── assistant/
│   ├── page.tsx            # Page assistant (/assistant)
│   └── ChatRoomClient.tsx  # Composant client du chat
├── soin-photo/
│   ├── page.tsx            # Page demande soin (/soin-photo)
│   └── HealingRequestClient.tsx
├── reglement/
│   ├── page.tsx            # Page paiement (/reglement)
│   └── PaymentClient.tsx
├── mon-espace/
│   ├── page.tsx            # Page tableau de bord (/mon-espace)
│   └── DashboardClient.tsx
├── admin/                  # Page admin (cachée)
│   ├── page.tsx
│   └── AdminDashboardClient.tsx
└── components/
    ├── SiteHeader.tsx      # En-tête avec navigation
    ├── SiteFooter.tsx      # Pied de page
    ├── SiteShell.tsx       # Shell client (Header + Footer + Nav)
    ├── HomeContent.tsx     # Contenu de la page d'accueil
    ├── EnergyGenerator.tsx # Calculateur d'énergie
    ├── FloatingChat.tsx    # Chat flottant
    └── MobileBottomNav.tsx # Navigation mobile
```

## Avantages SEO de cette migration
- ✅ **SSR (Server-Side Rendering)** : Pages rendues côté serveur pour une meilleure indexation
- ✅ **Métadonnées dynamiques** : Title, description, Open Graph tags générés automatiquement
- ✅ **Sitemap.xml** : Génération automatique de la sitemap
- ✅ **Robots.txt** : Configuration des crawlers
- ✅ **Structured Data** : JSON-LD intégré pour les moteurs de recherche
- ✅ **Optimisation Core Web Vitals** : Next.js optimise automatiquement les performances

## Configuration des Variables d'Environnement
Créez un fichier `.env.local` avec :
```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```
Récupérez votre clé sur : https://makersuite.google.com/app/apikey

## Mise à jour du domaine sur GitHub
Pour mettre à jour le lien visible dans la barre latérale "About" de ce dépôt :
1. Cliquez sur l'icône de roue dentée à droite de la section "About".
2. Modifiez le champ "Website" avec l'URL : `https://www.jean-francois-magnétiseur-guerisseur.com`.
3. Enregistrez les modifications.
