'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle, Phone, Clock, Heart, Sparkles, ArrowRight, Shield, Star } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function MerciPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-[#faf8f5] to-white">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Animation de succes */}
          <div className="relative mb-8">
            <div className="w-28 h-28 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30 animate-pulse">
              <CheckCircle size={56} className="text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#c9a962] rounded-full flex items-center justify-center animate-bounce">
              <Sparkles size={16} className="text-white" />
            </div>
          </div>

          {/* Message principal */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3d3630] mb-4">
            Merci pour votre confiance !
          </h1>
          
          <p className="text-xl text-[#6b6259] mb-8 max-w-lg mx-auto">
            Votre demande de soin a bien ete recue. Jean-Francois va commencer votre soin energetique dans les plus brefs delais.
          </p>

          {/* Etapes suivantes */}
          <div className="bg-white rounded-3xl shadow-xl border border-[#4a6741]/10 p-8 mb-8 text-left">
            <h2 className="text-lg font-bold text-[#3d3630] mb-6 flex items-center gap-2">
              <Clock size={20} className="text-[#4a6741]" />
              Ce qui va se passer maintenant
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#4a6741] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <div>
                  <h3 className="font-bold text-[#3d3630]">Jean-Francois recoit votre demande</h3>
                  <p className="text-[#6b6259] text-sm">Il prend connaissance de votre photo et de votre situation personnelle.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#4a6741] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <div>
                  <h3 className="font-bold text-[#3d3630]">Il realise votre soin energetique</h3>
                  <p className="text-[#6b6259] text-sm">Dans un etat de concentration profonde, il se connecte a votre energie via votre photo.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#4a6741] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <div>
                  <h3 className="font-bold text-[#3d3630]">Vous ressentez les effets</h3>
                  <p className="text-[#6b6259] text-sm">L'effet est souvent ressenti dans l'heure qui suit, parfois meme pendant le soin.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#c9a962] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                <div>
                  <h3 className="font-bold text-[#3d3630]">Jean-Francois vous contacte</h3>
                  <p className="text-[#6b6259] text-sm">Il vous enverra un message pour vous informer que le soin a ete realise.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conseils */}
          <div className="bg-[#4a6741]/5 border border-[#4a6741]/20 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-bold text-[#4a6741] mb-4 flex items-center gap-2">
              <Heart size={18} />
              Conseils pour maximiser les effets
            </h3>
            <ul className="space-y-2 text-[#6b6259] text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4a6741] mt-0.5 flex-shrink-0" />
                <span>Restez calme et detendu dans les heures qui suivent</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4a6741] mt-0.5 flex-shrink-0" />
                <span>Buvez beaucoup d'eau pour aider votre corps a se regenerer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4a6741] mt-0.5 flex-shrink-0" />
                <span>Evitez les efforts intenses pendant 24h</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#4a6741] mt-0.5 flex-shrink-0" />
                <span>Soyez attentif aux sensations (chaleur, picotements, apaisement)</span>
              </li>
            </ul>
          </div>

          {/* Contact urgence */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 mb-8">
            <p className="text-[#6b6259] text-sm mb-4">Une question urgente ? N'hesitez pas a appeler :</p>
            <a 
              href="tel:0955554462" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#4a6741] text-white rounded-2xl font-bold hover:bg-[#3a5233] transition-all"
            >
              <Phone size={20} />
              09 55 55 44 62
            </a>
          </div>

          {/* Garantie */}
          <div className="flex items-center justify-center gap-3 text-[#6b6259] text-sm mb-8">
            <Shield size={18} className="text-[#4a6741]" />
            <span>Plus de 20 ans d'experience - Plus de 6000 personnes soulagees</span>
          </div>

          {/* Temoignages rapides */}
          <div className="bg-[#faf8f5] rounded-2xl p-6 mb-8">
            <p className="text-[#9a918a] text-xs uppercase tracking-widest mb-4">Ce que disent nos patients</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl text-left">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-[#6b6259] text-sm italic">"L'effet a ete ressenti en moins d'une heure. Incroyable!"</p>
                <p className="text-[#3d3630] text-xs font-bold mt-2">Sophie M. - Lyon</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-left">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-[#6b6259] text-sm italic">"Je ne croyais pas au soin a distance. Je suis convaincu maintenant."</p>
                <p className="text-[#3d3630] text-xs font-bold mt-2">Marc D. - Paris</p>
              </div>
            </div>
          </div>

          {/* Retour accueil */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#4a6741] font-bold hover:underline"
          >
            Retour a l'accueil
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  )
}
