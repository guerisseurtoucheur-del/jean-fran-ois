import React from 'react';
import { MapPin, Phone, Star, CheckCircle, ArrowRight, Shield, Clock, Zap, Heart, Users, Award, Sparkles } from 'lucide-react';
import CitySEOHead from './CitySEOHead';

export interface CityData {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  region: string;
  population: string;
  coordinates: { lat: number; lng: number };
  nearbyAreas: string[];
  localTestimonials: { name: string; text: string; condition: string }[];
  specificConditions: string[];
  localLandmarks?: string[];
}

interface CityPageProps {
  city: CityData;
  onStartHealing: () => void;
}

const CityPage: React.FC<CityPageProps> = ({ city, onStartHealing }) => {
  return (
    <div className="page-fade">
      {/* Injection des données structurées et meta SEO */}
      <CitySEOHead city={city} />
      {/* Hero Section Locale */}
      <section className="relative min-h-[80vh] flex items-center px-6 overflow-hidden bg-gradient-to-b from-stone-50 to-white">
        <div className="energy-field w-96 h-96 bg-indigo-100 -top-20 -left-20"></div>
        <div className="energy-field w-[500px] h-[500px] bg-amber-50 -bottom-40 -right-20" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Breadcrumb SEO */}
              <nav className="flex items-center gap-2 text-xs text-stone-400">
                <span>Accueil</span>
                <span>/</span>
                <span>Magnétiseur</span>
                <span>/</span>
                <span className="text-indigo-600 font-medium">{city.name}</span>
              </nav>

              <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-600 text-white rounded-full w-fit shadow-lg">
                <MapPin size={14} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{city.region}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-[1.1]">
                Magnétiseur à {city.name}
                <span className="block text-2xl md:text-3xl text-stone-400 italic font-normal mt-4">
                  Guérisseur & Coupeur de Feu ({city.departmentCode})
                </span>
              </h1>

              <p className="text-xl text-stone-600 leading-relaxed">
                Jean-François, magnétiseur expert, intervient à <strong>{city.name}</strong> et dans tout le département {city.department} ({city.departmentCode}). 
                Soins énergétiques sur photo à distance ou en cabinet à Alençon.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <CheckCircle size={16} />
                  <span>Action immédiate</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                  <Star size={16} fill="currentColor" />
                  <span>4.9/5 - 247 avis</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                  <Shield size={16} />
                  <span>Paiement sécurisé</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={onStartHealing}
                  className="px-8 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <span>Soin à distance {city.name}</span>
                  <Sparkles size={20} />
                </button>
                <a 
                  href="tel:0955554462" 
                  className="px-8 py-5 border-2 border-stone-900 text-stone-900 rounded-2xl font-bold text-lg hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  <span>09 55 55 44 62</span>
                </a>
              </div>
            </div>

            {/* Image + Stats Card */}
            <div className="hidden md:block relative">
              <div className="aspect-square bg-stone-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                  alt={`Magnétiseur guérisseur à ${city.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
                    <Heart size={28} className="text-indigo-600" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-stone-900">6500+</div>
                    <div className="text-xs text-stone-500 font-medium">Personnes soulagées</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              Soins énergétiques pour {city.name} et ses environs
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Jean-François intervient sur toutes les communes du {city.department} : {city.nearbyAreas.join(', ')}...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-50 rounded-3xl space-y-4 hover:shadow-xl transition-all border border-transparent hover:border-indigo-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Coupeur de Feu {city.name}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Soulagement immédiat des brûlures, zona et coups de soleil. La technique traditionnelle du souffle agit à distance comme en présence.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Brûlures domestiques</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Zona et névralgies</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Radiothérapie</li>
              </ul>
            </div>

            <div className="p-8 bg-stone-50 rounded-3xl space-y-4 hover:shadow-xl transition-all border border-transparent hover:border-indigo-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Magnétisme à {city.name}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Soins énergétiques pour rééquilibrer vos centres vitaux et soulager douleurs chroniques, stress et troubles divers.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Douleurs dorsales</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Migraines récurrentes</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Troubles du sommeil</li>
              </ul>
            </div>

            <div className="p-8 bg-stone-50 rounded-3xl space-y-4 hover:shadow-xl transition-all border border-transparent hover:border-indigo-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Guérisseur {city.departmentCode}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Approche holistique pour les affections cutanées et les maux liés au stress ou à un déséquilibre énergétique.
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Eczéma & psoriasis</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Verrues</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Stress & anxiété</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            Comment recevoir un soin à {city.name} ?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Envoyez votre photo", desc: "Une photo récente de vous ou de la zone à traiter" },
              { step: "2", title: "Décrivez votre mal", desc: "Expliquez brièvement ce qui vous fait souffrir" },
              { step: "3", title: "Jean-François agit", desc: "Soin énergétique personnalisé sous 24h maximum" },
              { step: "4", title: "Ressentez le soulagement", desc: "L'effet est souvent perceptible dans l'heure" }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-3xl font-serif font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-indigo-200 text-sm">{item.desc}</p>
                {i < 3 && <ArrowRight className="hidden md:block mx-auto text-indigo-300" size={24} />}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onStartHealing}
              className="px-12 py-6 bg-white text-indigo-600 rounded-3xl font-bold text-xl hover:shadow-2xl transition-all"
            >
              Demander un soin maintenant
            </button>
          </div>
        </div>
      </section>

      {/* Témoignages locaux */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            Témoignages de patients de {city.name}
          </h2>
          <p className="text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            Découvrez les retours de personnes habitant {city.name} et le {city.department} ayant bénéficié d'un soin à distance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {city.localTestimonials.map((t, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-lg space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic leading-relaxed">"{t.text}"</p>
                <div className="pt-4 border-t border-stone-100">
                  <p className="font-bold text-stone-900">{t.name}</p>
                  <p className="text-xs text-indigo-600 font-medium uppercase tracking-wider">{t.condition} - {city.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Locale Rich Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            Questions fréquentes - Magnétiseur {city.name}
          </h2>

          <div className="space-y-6">
            {[
              {
                q: `Comment fonctionne un soin à distance pour ${city.name} ?`,
                a: `Jean-François se connecte à votre énergie via votre photo depuis son cabinet d'Alençon. La distance n'a aucune incidence sur l'efficacité du soin. Les habitants de ${city.name} et du ${city.department} bénéficient des mêmes résultats qu'une consultation en personne.`
              },
              {
                q: `Quel est le délai pour un soin sur ${city.name} ?`,
                a: `Votre demande est traitée sous 24h maximum. Jean-François vous confirme par message lorsque le soin est effectué. De nombreux patients de ${city.name} ressentent un soulagement dans l'heure qui suit.`
              },
              {
                q: `Combien coûte une séance de magnétisme pour ${city.name} ?`,
                a: `Le tarif est identique quel que soit votre lieu de résidence en France. Comptez entre 35€ et 60€ selon le type de soin. Les habitants de ${city.name} bénéficient des mêmes conditions que tous les patients français.`
              },
              {
                q: `Le magnétiseur se déplace-t-il à ${city.name} ?`,
                a: `Jean-François exerce depuis son cabinet d'Alençon mais intervient à distance sur photo partout en France. Les patients de ${city.name} n'ont pas besoin de se déplacer : l'énergie vous rejoint directement chez vous.`
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-stone-50 rounded-2xl overflow-hidden">
                <summary className="p-6 cursor-pointer flex items-center justify-between font-bold text-stone-900 hover:bg-stone-100 transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-indigo-600 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Zone de couverture */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">
            Zones couvertes autour de {city.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {city.nearbyAreas.map((area, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                Magnétiseur {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Vous habitez {city.name} ? <br/>Recevez votre soin dès aujourd'hui.
          </h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Jean-François accompagne quotidiennement des patients du {city.department}. 
            Envoyez votre photo et décrivez votre mal pour recevoir un soin personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onStartHealing}
              className="px-12 py-6 bg-white text-indigo-600 rounded-3xl font-bold text-xl hover:shadow-2xl transition-all"
            >
              Demander un soin à distance
            </button>
            <a 
              href="tel:0955554462" 
              className="px-12 py-6 border-2 border-white text-white rounded-3xl font-bold text-xl hover:bg-white hover:text-indigo-600 transition-all"
            >
              Appeler directement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
