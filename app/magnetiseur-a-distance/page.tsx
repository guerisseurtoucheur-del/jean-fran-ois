"use client"

import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { MapPin, CheckCircle, Clock, Phone, Star, ArrowRight, Camera, Send, Sparkles, Heart, Globe } from 'lucide-react'

const villes = [
  { nom: 'Paris', slug: 'magnetiseur-paris' },
  { nom: 'Lyon', slug: 'magnetiseur-lyon' },
  { nom: 'Marseille', slug: 'magnetiseur-marseille' },
  { nom: 'Toulouse', slug: 'magnetiseur-toulouse' },
  { nom: 'Nice', slug: 'magnetiseur-nice' },
  { nom: 'Nantes', slug: 'magnetiseur-nantes' },
  { nom: 'Montpellier', slug: 'magnetiseur-montpellier' },
  { nom: 'Strasbourg', slug: 'magnetiseur-strasbourg' },
  { nom: 'Bordeaux', slug: 'magnetiseur-bordeaux' },
  { nom: 'Lille', slug: 'magnetiseur-lille' },
  { nom: 'Rennes', slug: 'magnetiseur-rennes' },
  { nom: 'Reims', slug: 'magnetiseur-reims' },
  { nom: 'Le Havre', slug: 'magnetiseur-le-havre' },
  { nom: 'Grenoble', slug: 'magnetiseur-grenoble' },
  { nom: 'Dijon', slug: 'magnetiseur-dijon' },
  { nom: 'Angers', slug: 'magnetiseur-angers' },
  { nom: 'Brest', slug: 'magnetiseur-brest' },
  { nom: 'Toulon', slug: 'magnetiseur-toulon' },
  { nom: 'Alencon', slug: 'magnetiseur-alencon' },
]

const faq = [
  {
    q: "Comment un magnetiseur peut-il agir a distance ?",
    r: "Le magnetisme agit sur l'energie de la personne, et l'energie n'est pas limitee par la distance physique. A partir d'une simple photo recente et de votre nom, Jean-Francois se connecte a votre energie pour realiser le soin, exactement comme lors d'une seance en presentiel.",
  },
  {
    q: "Un soin a distance est-il aussi efficace qu'en cabinet ?",
    r: "Oui. De nombreux magnetiseurs travaillent exclusivement a distance avec les memes resultats qu'en presentiel. L'avantage : vous recevez le soin chez vous, sans deplacement, ou que vous habitiez en France.",
  },
  {
    q: "Que faut-il envoyer pour un soin a distance ?",
    r: "Une photo recente de vous (visage visible), votre nom et prenom, et une description de ce qui vous gene. Pour certains problemes de peau ou brulures, une photo de la zone concernee est utile.",
  },
  {
    q: "Combien coute un soin a distance ?",
    r: "Jean-Francois travaille au don libre : vous donnez ce que vous pouvez et ce que vous estimez juste apres avoir constate les resultats. La demande initiale se fait via le formulaire du site.",
  },
]

export default function MagnetiseurADistancePage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-white">
        {/* Schema FAQ pour rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.r },
              })),
            }),
          }}
        />

        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6">
                <Globe size={16} />
                Partout en France
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">Magnetiseur a Distance sur Photo</h1>
              <p className="text-xl text-teal-50 mb-8 leading-relaxed text-pretty">
                Ou que vous soyez en France, Jean-Francois realise votre soin de magnetisme a distance, a partir d&apos;une simple photo. Sans deplacement, avec la meme efficacite qu&apos;en cabinet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-soin" className="px-8 py-4 bg-white text-teal-700 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Send size={20} />
                  Demander un soin a distance
                </Link>
                <a href="tel:0955554462" className="px-8 py-4 bg-white/10 border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  09 55 55 44 62
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4 text-center">Comment Fonctionne un Soin a Distance ?</h2>
            <p className="text-lg text-stone-600 mb-12 text-center max-w-2xl mx-auto">Trois etapes simples, ou que vous habitiez en France.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Camera, title: "1. Vous envoyez une photo", desc: "Une photo recente de vous, votre nom et une description de ce qui vous gene, via le formulaire du site." },
                { icon: Sparkles, title: "2. Jean-Francois agit", desc: "Il se connecte a votre energie a partir de la photo et realise le soin de magnetisme a distance." },
                { icon: Heart, title: "3. Vous ressentez les effets", desc: "Les premiers effets se font souvent sentir dans les heures ou jours qui suivent. Don libre apres resultat." },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-teal-50 flex items-center justify-center">
                    <item.icon size={26} className="text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi ça marche partout */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Pourquoi le Magnetisme Agit Partout en France</h2>
            <div className="prose prose-lg max-w-none text-stone-600">
              <p>
                Le magnetisme agit sur l&apos;energie vitale de la personne. Or l&apos;energie ne connait pas de frontiere ni de distance : c&apos;est le meme principe qui permet a un soin d&apos;etre aussi efficace que vous soyez a 10 ou a 900 kilometres.
                C&apos;est pourquoi Jean-Francois travaille depuis l&apos;Orne (Normandie) pour des personnes situees dans <strong>toutes les regions de France</strong>, des grandes metropoles aux plus petits villages.
              </p>
              <p className="mt-4">
                Le soin a distance sur photo presente meme un avantage : vous n&apos;avez aucun deplacement a faire, aucun rendez-vous a caler, et vous recevez l&apos;energie dans le confort de votre domicile. C&apos;est particulierement precieux pour les personnes agees,
                a mobilite reduite, ou vivant loin de tout praticien.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que je traite a distance */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Ce que Jean-Francois Traite a Distance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { t: "Douleurs & articulations", l: "/magnetiseur-douleurs-dos" },
                { t: "Stress & anxiete", l: "/magnetiseur-stress-anxiete" },
                { t: "Zona & problemes de peau", l: "/magnetiseur-zona" },
                { t: "Eczema & psoriasis", l: "/magnetiseur-eczema" },
                { t: "Brulures (coupeur de feu)", l: "/coupeur-de-feu" },
                { t: "Douleurs gastriques & RGO", l: "/magnetiseur-douleurs-gastriques" },
              ].map((item, i) => (
                <Link key={i} href={item.l} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-teal-100 hover:shadow-md hover:border-teal-300 transition-all">
                  <CheckCircle size={20} className="text-teal-600 shrink-0" />
                  <span className="font-medium text-stone-800">{item.t}</span>
                  <ArrowRight size={16} className="text-stone-400 ml-auto" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Temoignages */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Ils ont ete soulages a distance</h2>
            <div className="space-y-6">
              {[
                { name: "Sylvie, 52 ans", city: "Lille", text: "J'habite loin et je ne pouvais pas me deplacer. J'ai envoye ma photo, et en quelques jours mes douleurs au dos se sont nettement calmees. Bluffee par l'efficacite a distance." },
                { name: "Karim, 39 ans", city: "Marseille", text: "Je ne croyais pas trop au soin a distance, mais mon eczema s'est apaise apres deux seances. Jean-Francois est a l'ecoute et tres humain." },
                { name: "Nathalie, 61 ans", city: "Strasbourg", text: "Un stress permanent qui m'empechait de dormir. Depuis le soin recu a distance, je retrouve un sommeil calme. Merci infiniment." },
              ].map((t, i) => (
                <div key={i} className="p-8 bg-stone-50 rounded-3xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-stone-600 italic mb-4">&quot;{t.text}&quot;</p>
                  <p className="font-bold text-stone-900">{t.name} - {t.city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maillage villes */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Un Magnetiseur pour Votre Ville</h2>
            <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
              Jean-Francois intervient a distance dans toute la France. Retrouvez les informations pour votre ville :
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {villes.map((v, i) => (
                <Link key={i} href={`/${v.slug}`} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full text-sm font-medium text-stone-700 shadow-sm hover:shadow-md hover:text-teal-700 transition-all">
                  <MapPin size={14} className="text-teal-500" />
                  {v.nom}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Questions Frequentes</h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="p-6 bg-stone-50 rounded-2xl">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.q}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">Recevez Votre Soin, Ou que Vous Soyez</h2>
            <p className="text-xl text-teal-50 mb-8">Envoyez votre photo aujourd&apos;hui et laissez le magnetisme agir, sans vous deplacer.</p>
            <Link href="/demande-soin" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-teal-700 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
              Demander un soin a distance
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-teal-100 text-sm flex items-center justify-center gap-2">
              <Clock size={14} />
              Reponse sous 2h en moyenne • Don libre apres resultat
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-stone-950 text-stone-500">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs">SIRET : 344 616 412 00062 | TVA intracommunautaire : FR6534461641200062</p>
          </div>
        </footer>
      </div>
    </LayoutWrapper>
  )
}
