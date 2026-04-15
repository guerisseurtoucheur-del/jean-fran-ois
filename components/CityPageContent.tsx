"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, MapPin, Star, CheckCircle, ArrowRight, Clock, Users, Zap, Heart, Shield, Sparkles, Plus, Minus, Award } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'
import { CityData } from '@/data/cities'

interface CityPageContentProps {
  city: CityData
}

// Themes par region - chaque region a sa propre identite visuelle
const regionThemes: Record<string, {
  primary: string
  secondary: string
  accent: string
  bgLight: string
  heroStyle: 'elegant' | 'modern' | 'bold' | 'warm' | 'classic'
  testimonialStyle: 'cards' | 'quotes' | 'minimal' | 'featured' | 'grid'
}> = {
  "Île-de-France": {
    primary: "#1a365d",
    secondary: "#c9a962",
    accent: "#2d3748",
    bgLight: "#f8fafc",
    heroStyle: 'elegant',
    testimonialStyle: 'featured'
  },
  "Auvergne-Rhône-Alpes": {
    primary: "#065f46",
    secondary: "#fbbf24",
    accent: "#047857",
    bgLight: "#f0fdf4",
    heroStyle: 'bold',
    testimonialStyle: 'grid'
  },
  "Provence-Alpes-Côte d'Azur": {
    primary: "#0369a1",
    secondary: "#f59e0b",
    accent: "#0284c7",
    bgLight: "#f0f9ff",
    heroStyle: 'modern',
    testimonialStyle: 'cards'
  },
  "Occitanie": {
    primary: "#b45309",
    secondary: "#fcd34d",
    accent: "#d97706",
    bgLight: "#fffbeb",
    heroStyle: 'warm',
    testimonialStyle: 'quotes'
  },
  "Pays de la Loire": {
    primary: "#4a6741",
    secondary: "#a3e635",
    accent: "#365314",
    bgLight: "#f7fee7",
    heroStyle: 'classic',
    testimonialStyle: 'minimal'
  },
  "Nouvelle-Aquitaine": {
    primary: "#7c2d12",
    secondary: "#fde68a",
    accent: "#9a3412",
    bgLight: "#fef3c7",
    heroStyle: 'elegant',
    testimonialStyle: 'featured'
  },
  "Hauts-de-France": {
    primary: "#374151",
    secondary: "#f97316",
    accent: "#4b5563",
    bgLight: "#f9fafb",
    heroStyle: 'bold',
    testimonialStyle: 'grid'
  },
  "Grand Est": {
    primary: "#5b21b6",
    secondary: "#fcd34d",
    accent: "#6d28d9",
    bgLight: "#f5f3ff",
    heroStyle: 'modern',
    testimonialStyle: 'cards'
  },
  "Bretagne": {
    primary: "#164e63",
    secondary: "#67e8f9",
    accent: "#0e7490",
    bgLight: "#ecfeff",
    heroStyle: 'classic',
    testimonialStyle: 'quotes'
  },
  "Bourgogne-Franche-Comté": {
    primary: "#831843",
    secondary: "#fecdd3",
    accent: "#9d174d",
    bgLight: "#fdf2f8",
    heroStyle: 'warm',
    testimonialStyle: 'minimal'
  },
  "Normandie": {
    primary: "#4a6741",
    secondary: "#f5f5dc",
    accent: "#3d5a34",
    bgLight: "#fafaf9",
    heroStyle: 'classic',
    testimonialStyle: 'featured'
  }
}

const FAQItem: React.FC<{ question: string; answer: string; primaryColor: string }> = ({ question, answer, primaryColor }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-stone-800 pr-4">{question}</span>
        <div className={`p-2 rounded-full transition-all flex-shrink-0`} style={{ backgroundColor: isOpen ? primaryColor : '#e5e7eb', color: isOpen ? 'white' : '#6b7280' }}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-stone-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function CityPageContent({ city }: CityPageContentProps) {
  const theme = regionThemes[city.region] || regionThemes["Normandie"]
  
  // Hero selon le style regional
  const renderHero = () => {
    switch(theme.heroStyle) {
      case 'elegant':
        return (
          <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-stone-50">
            <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 30% 50%, ${theme.primary} 0%, transparent 50%)` }} />
            <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}>
                    <MapPin size={16} />
                    <span>{city.department} ({city.departmentCode})</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6" style={{ color: theme.primary }}>
                    Magnetiseur Guerisseur<br />
                    <span style={{ color: theme.secondary !== '#f5f5dc' ? theme.secondary : theme.accent }}>a {city.name}</span>
                  </h1>
                  <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                    Jean-Francois, magnetiseur guerisseur et toucheur depuis plus de 20 ans, 
                    vous accompagne a distance. Specialise zona, brulures, eczema et douleurs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:0955554462" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: theme.primary }}>
                      <Phone size={20} />
                      09 55 55 44 62
                    </a>
                    <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 hover:bg-white transition-all" style={{ borderColor: theme.primary, color: theme.primary }}>
                      Demander un soin
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
                <div className="relative hidden lg:flex flex-col items-center gap-6">
                  {/* Photo de Jean-Francois */}
                  <div className="relative">
                    <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                      <img src="/logo.png" alt="Jean-Francois Magnetiseur" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-xl bg-white flex items-center gap-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-amber-400" fill="currentColor" />)}
                      <span className="font-bold ml-2" style={{ color: theme.primary }}>5/5</span>
                    </div>
                  </div>
                  {/* Image du monument - bien visible en dessous */}
                  {city.landmark && (
                    <div className="flex items-center gap-4 mt-4 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur shadow-lg border border-gray-100">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                        <img 
                          src={city.landmark.image} 
                          alt={`${city.landmark.name} - ${city.name}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold" style={{ color: theme.primary }}>{city.landmark.name}</p>
                        <p className="text-xs text-gray-500">Soin a distance pour {city.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      
      case 'modern':
        return (
          <section className="relative overflow-hidden text-white" style={{ background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)` }}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-white blur-2xl" />
            </div>
            <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-medium mb-8">
                    <Sparkles size={16} />
                    <span>Soins energetiques a {city.name}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Magnetiseur Guerisseur
                  </h1>
                  <p className="text-2xl font-light mb-4 opacity-90">
                    a {city.name} ({city.departmentCode})
                  </p>
                  <p className="text-lg max-w-xl mb-10 opacity-80">
                    Jean-Francois intervient a distance pour soulager vos douleurs, zona, brulures 
                    et eczema dans toute la region {city.region}.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:0955554462" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-bold shadow-xl hover:shadow-2xl transition-all" style={{ color: theme.primary }}>
                      <Phone size={20} />
                      09 55 55 44 62
                    </a>
                    <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/20 backdrop-blur font-bold border-2 border-white/50 hover:bg-white/30 transition-all">
                      Soin a distance
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                      <img src="/logo.png" alt="Jean-Francois" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <div className="text-center">
                        <div className="text-xl font-bold" style={{ color: theme.primary }}>20+</div>
                        <div className="text-[10px]" style={{ color: theme.accent }}>ans</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      
      case 'bold':
        return (
          <section className="relative min-h-[70vh] flex items-center text-white" style={{ backgroundColor: theme.primary }}>
            <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight uppercase">
                    Magnetiseur<br />
                    <span style={{ color: theme.secondary }}>{city.name}</span>
                  </h1>
                  <p className="text-xl mb-8 opacity-90">
                    Coupeur de feu, guerisseur, toucheur. Jean-Francois soulage vos maux 
                    a distance depuis plus de 20 ans.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:0955554462" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-black shadow-xl hover:scale-105 transition-all" style={{ backgroundColor: theme.secondary, color: theme.primary }}>
                      <Phone size={24} />
                      09 55 55 44 62
                    </a>
                    <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-bold border-2 border-white/50 hover:bg-white/10 transition-all">
                      Demander un soin
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-8 mt-10">
                    <div className="flex items-center gap-2">
                      <Users size={20} style={{ color: theme.secondary }} />
                      <span className="font-bold">2847+ aides</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={20} style={{ color: theme.secondary }} />
                      <span className="font-bold">20+ ans</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={20} style={{ color: theme.secondary }} fill="currentColor" />
                      <span className="font-bold">5/5 Google</span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex justify-center">
                  <div className="w-72 h-72 rounded-full overflow-hidden border-8 shadow-2xl" style={{ borderColor: theme.secondary }}>
                    <img src="/logo.png" alt="Jean-Francois" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      
      case 'warm':
        return (
          <section className="relative overflow-hidden" style={{ backgroundColor: theme.bgLight }}>
            <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold mb-8" style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}>
                  <Heart size={18} />
                  <span>Magnetiseur a {city.name} ({city.departmentCode})</span>
                </div>
              </div>
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                      <img src="/logo.png" alt="Jean-Francois" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white shadow-lg">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-amber-400" fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" style={{ color: theme.primary }}>
                    Jean-Francois,<br />
                    <span className="text-stone-600">votre guerisseur a {city.name}</span>
                  </h1>
                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    Depuis plus de 20 ans, je pratique le magnetisme et les soins energetiques 
                    a distance. Zona, brulures, eczema, douleurs... je vous accompagne depuis 
                    {city.name} et toute la region {city.region}.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <a href="tel:0955554462" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: theme.primary }}>
                      <Phone size={20} />
                      09 55 55 44 62
                    </a>
                    <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 hover:bg-white transition-all" style={{ borderColor: theme.primary, color: theme.primary }}>
                      Demander un soin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      
      case 'classic':
      default:
        return (
          <section className="relative bg-stone-50 border-b border-stone-200">
            <div className="max-w-6xl mx-auto px-6 py-16">
              <nav className="flex items-center gap-2 text-stone-500 text-sm mb-8">
                <Link href="/" className="hover:text-stone-800 transition-colors">Accueil</Link>
                <span>/</span>
                <span style={{ color: theme.primary }} className="font-medium">Magnetiseur {city.name}</span>
              </nav>
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 shadow-xl" style={{ borderColor: theme.primary }}>
                    <img src="/logo.png" alt="Jean-Francois" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: theme.primary }}>
                    Magnetiseur Guerisseur Toucheur
                  </p>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
                    Jean-Francois a {city.name}
                  </h1>
                  <p className="text-lg text-stone-600 mb-6">
                    Soins energetiques a distance pour {city.name} ({city.departmentCode}) 
                    et toute la region {city.region}. Coupeur de feu, zona, brulures, eczema.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <a href="tel:0955554462" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: theme.primary }}>
                      <Phone size={18} />
                      09 55 55 44 62
                    </a>
                    <Link href="/demande-soin" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold border-2 hover:bg-white transition-all" style={{ borderColor: theme.primary, color: theme.primary }}>
                      Soin a distance
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
  }
  
  // Temoignages selon le style regional
  const renderTestimonials = () => {
    switch(theme.testimonialStyle) {
      case 'cards':
        return (
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-serif font-bold text-center mb-4" style={{ color: theme.primary }}>
                Temoignages de {city.name}
              </h2>
              <p className="text-center text-stone-600 mb-12">Ils ont fait confiance a Jean-Francois</p>
              <div className="grid md:grid-cols-3 gap-8">
                {city.localTestimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-stone-100">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-amber-400" fill="currentColor" />)}
                    </div>
                    <p className="text-stone-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: theme.primary }}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-stone-800">{testimonial.name}</p>
                        <p className="text-sm" style={{ color: theme.primary }}>{testimonial.condition}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      
      case 'quotes':
        return (
          <section className="py-20" style={{ backgroundColor: theme.bgLight }}>
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: theme.primary }}>
                Ce qu&apos;ils disent a {city.name}
              </h2>
              <div className="space-y-12">
                {city.localTestimonials.map((testimonial, idx) => (
                  <div key={idx} className="relative pl-8 border-l-4" style={{ borderColor: theme.secondary !== '#f5f5dc' ? theme.secondary : theme.primary }}>
                    <blockquote className="text-xl text-stone-700 italic mb-4">
                      &quot;{testimonial.text}&quot;
                    </blockquote>
                    <div className="flex items-center gap-2">
                      <span className="font-bold" style={{ color: theme.primary }}>{testimonial.name}</span>
                      <span className="text-stone-400">|</span>
                      <span className="text-stone-600">{testimonial.condition}</span>
                      <div className="flex gap-0.5 ml-2">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400" fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      
      case 'minimal':
        return (
          <section className="py-16 bg-white border-y border-stone-200">
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-px flex-1 bg-stone-200" />
                <h2 className="text-2xl font-serif font-bold" style={{ color: theme.primary }}>Avis de {city.name}</h2>
                <div className="h-px flex-1 bg-stone-200" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {city.localTestimonials.map((testimonial, idx) => (
                  <div key={idx} className="text-center p-6">
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-amber-400" fill="currentColor" />)}
                    </div>
                    <p className="text-stone-600 text-sm mb-4">&quot;{testimonial.text}&quot;</p>
                    <p className="font-bold text-sm" style={{ color: theme.primary }}>{testimonial.name}</p>
                    <p className="text-xs text-stone-500">{testimonial.condition}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      
      case 'featured':
        return (
          <section className="py-20 bg-stone-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: theme.primary }}>
                Resultats a {city.name}
              </h2>
              <div className="grid lg:grid-cols-3 gap-6">
                {city.localTestimonials.map((testimonial, idx) => (
                  <div key={idx} className={`rounded-2xl p-8 ${idx === 1 ? 'lg:-mt-4 lg:mb-4 shadow-xl' : 'shadow-md'}`} style={{ backgroundColor: idx === 1 ? theme.primary : 'white', color: idx === 1 ? 'white' : undefined }}>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} className={idx === 1 ? 'text-white' : 'text-amber-400'} fill="currentColor" />)}
                    </div>
                    <p className={`mb-6 ${idx === 1 ? 'text-white/90' : 'text-stone-700'}`}>&quot;{testimonial.text}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${idx === 1 ? 'bg-white/20' : ''}`} style={{ backgroundColor: idx === 1 ? undefined : theme.primary, color: 'white' }}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className={`font-bold ${idx === 1 ? '' : 'text-stone-800'}`}>{testimonial.name}</p>
                        <p className={`text-sm ${idx === 1 ? 'opacity-70' : ''}`} style={{ color: idx === 1 ? undefined : theme.primary }}>{testimonial.condition}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      
      case 'grid':
      default:
        return (
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2" style={{ color: theme.primary }}>
                  ILS TEMOIGNENT DEPUIS {city.name.toUpperCase()}
                </h2>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-amber-400" fill="currentColor" />)}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {city.localTestimonials.map((testimonial, idx) => (
                  <div key={idx} className="p-6 border-2 hover:shadow-lg transition-all" style={{ borderColor: theme.primary }}>
                    <p className="font-bold mb-2" style={{ color: theme.secondary !== '#f5f5dc' ? theme.secondary : theme.primary }}>{testimonial.condition}</p>
                    <p className="text-stone-700 text-sm mb-4">&quot;{testimonial.text}&quot;</p>
                    <p className="text-sm font-bold" style={{ color: theme.primary }}>— {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
    }
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        {renderHero()}
        
        {/* Bande de confiance */}
        <section className="py-8 border-y border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme.primary}15` }}>
                  <Users size={24} style={{ color: theme.primary }} />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: theme.primary }}>2847+</p>
                  <p className="text-sm text-stone-600">personnes aidees</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme.primary}15` }}>
                  <Clock size={24} style={{ color: theme.primary }} />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: theme.primary }}>20+</p>
                  <p className="text-sm text-stone-600">ans d&apos;experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme.primary}15` }}>
                  <Star size={24} style={{ color: theme.primary }} />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: theme.primary }}>5/5</p>
                  <p className="text-sm text-stone-600">sur Google</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Zones couvertes */}
        <section className="py-12 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl font-bold text-center mb-6" style={{ color: theme.primary }}>
              Intervention a {city.name} et ses environs
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {city.nearbyAreas.map((area, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-stone-200 text-stone-600">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        {/* Conditions traitees */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-serif font-bold text-center mb-8" style={{ color: theme.primary }}>
              Problemes traites a {city.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {city.specificConditions.map((condition, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-stone-50">
                  <CheckCircle size={20} style={{ color: theme.primary }} />
                  <span className="font-medium text-stone-700 capitalize">{condition}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid md:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Coupeur de Feu", desc: "Brulures, zona, coups de soleil" },
                { icon: Heart, title: "Douleurs", desc: "Dos, articulations, migraines" },
                { icon: Shield, title: "Peau", desc: "Eczema, psoriasis, allergies" },
                { icon: Sparkles, title: "Bien-etre", desc: "Stress, anxiete, fatigue" },
              ].map((service, i) => (
                <div key={i} className="p-6 bg-stone-50 rounded-2xl hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all" style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{service.title}</h3>
                  <p className="text-stone-500 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Temoignages */}
        {renderTestimonials()}
        
        {/* Tarifs */}
        <section className="py-20" style={{ backgroundColor: theme.bgLight }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-center mb-4" style={{ color: theme.primary }}>
              Tarifs des soins a distance
            </h2>
            <p className="text-center text-stone-600 mb-12">Paiement securise par PayPal avant le soin</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all border border-stone-100">
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.primary }}>Soin Ponctuel</h3>
                <p className="text-4xl font-bold mb-4" style={{ color: theme.primary }}>35<span className="text-lg">EUR</span></p>
                <p className="text-stone-600 mb-6">1 seance de magnetisme a distance</p>
                <Link href="/demande-soin" className="block text-center py-3 rounded-lg font-bold border-2 hover:bg-stone-50 transition-all" style={{ borderColor: theme.primary, color: theme.primary }}>
                  Choisir
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 relative" style={{ borderColor: theme.primary }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-bold" style={{ backgroundColor: theme.primary }}>
                  Recommande
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.primary }}>Soin Complet</h3>
                <p className="text-4xl font-bold mb-4" style={{ color: theme.primary }}>55<span className="text-lg">EUR</span></p>
                <p className="text-stone-600 mb-6">2 seances sur 48h</p>
                <Link href="/demande-soin" className="block text-center py-3 rounded-lg font-bold text-white transition-all" style={{ backgroundColor: theme.primary }}>
                  Choisir
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all border border-stone-100">
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.primary }}>Forfait Suivi</h3>
                <p className="text-4xl font-bold mb-4" style={{ color: theme.primary }}>120<span className="text-lg">EUR</span></p>
                <p className="text-stone-600 mb-6">5 seances sur 2 semaines</p>
                <Link href="/demande-soin" className="block text-center py-3 rounded-lg font-bold border-2 hover:bg-stone-50 transition-all" style={{ borderColor: theme.primary, color: theme.primary }}>
                  Choisir
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-serif font-bold text-center mb-8" style={{ color: theme.primary }}>
              Questions frequentes - {city.name}
            </h2>
            <div className="bg-stone-50 rounded-2xl p-6">
              <FAQItem 
                primaryColor={theme.primary}
                question={`Comment se deroule un soin a distance pour ${city.name} ?`}
                answer={`Apres paiement, vous envoyez votre photo via le formulaire. Jean-Francois se connecte a votre energie pour effectuer le soin. La distance n'a aucune importance pour le magnetisme.`}
              />
              <FAQItem 
                primaryColor={theme.primary}
                question="Quel est le tarif d'une seance ?"
                answer="3 formules : Soin Ponctuel a 35 euros (1 seance), Soin Complet a 55 euros (2 seances sur 48h - recommande), Forfait Suivi a 120 euros (5 seances). Paiement securise par PayPal."
              />
              <FAQItem 
                primaryColor={theme.primary}
                question="Etes-vous disponible en urgence ?"
                answer="Oui, pour les brulures et zonas qui necessitent une intervention rapide, je reponds dans les meilleurs delais. Appelez au 09 55 55 44 62."
              />
              <FAQItem 
                primaryColor={theme.primary}
                question={`Intervenez-vous autour de ${city.name} ?`}
                answer={`Absolument ! J'interviens pour ${city.nearbyAreas.slice(0, 4).join(', ')}, et toute la France. Le soin a distance fonctionne partout.`}
              />
            </div>
          </div>
        </section>
        
        {/* CTA Final */}
        <section className="py-20 text-white text-center" style={{ background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)` }}>
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Pret a vous sentir mieux ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez Jean-Francois pour un soin energetique a distance depuis {city.name}.
              Reponse sous 24h, maximum 5 soins par jour.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0955554462" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-bold shadow-xl hover:shadow-2xl transition-all" style={{ color: theme.primary }}>
                <Phone size={20} />
                09 55 55 44 62
              </a>
              <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/20 backdrop-blur font-bold border-2 border-white/50 hover:bg-white/30 transition-all">
                Demander un soin
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Schema.org local */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Jean-Francois Magnetiseur Guerisseur - ${city.name}`,
          "description": `Magnetiseur guerisseur a ${city.name} (${city.departmentCode}). Soins energetiques a distance pour zona, brulures, eczema, douleurs. Coupeur de feu dans toute la region ${city.region}.`,
          "telephone": "+33955554462",
          "email": "guerisseurtoucheur@gmail.com",
          "url": `https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-${city.slug}`,
          "priceRange": "35EUR - 120EUR",
          "areaServed": {
            "@type": "City",
            "name": city.name,
            "containedInPlace": { "@type": "AdministrativeArea", "name": city.region }
          },
          "geo": { "@type": "GeoCoordinates", "latitude": city.coordinates.lat, "longitude": city.coordinates.lng }
        })}} />
      </div>
    </LayoutWrapper>
  )
}
