'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Phone, MapPin, Send, Bot, User, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function SuperPageTest() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Bonjour ! Je suis l'assistant de Jean-François. Avez-vous des questions sur les soins à distance pour Paris ?"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "C'est noté. Jean-François traite de nombreux patients à Paris chaque semaine avec d'excellents résultats." 
      }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-stone-50 font-sans">
        
        {/* HERO SECTION - PARIS EFFIGY */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#1a365d]">
          {/* Background Image of Paris (Placeholder via Unsplash) */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop" 
              alt="Paris" 
              className="w-full h-full object-cover opacity-60"
            />
            {/* Elegant Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center pt-20">
            {/* Text Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-8 border border-white/30 shadow-xl">
                <MapPin size={16} />
                <span>Île-de-France (75)</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                Magnétiseur <br/>
                <span className="text-[#c9a962]">à Paris</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light mb-8 opacity-90 drop-shadow-md max-w-lg leading-relaxed">
                Jean-François, coupeur de feu et guérisseur, vous soulage à distance depuis la capitale et ses arrondissements.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c9a962] text-stone-900 font-bold shadow-xl hover:scale-105 transition-transform">
                  Réserver un soin
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Glassmorphism Chatbot directly in the Hero */}
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col h-[500px]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Assistant en ligne</h3>
                    <p className="text-white/60 text-sm">Posez vos questions sur Paris</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                          ? 'bg-[#c9a962] text-stone-900 rounded-br-none font-medium' 
                          : 'bg-white/20 text-white rounded-bl-none backdrop-blur-md border border-white/10'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="bg-white/20 text-white rounded-2xl rounded-bl-none px-4 py-3 w-fit backdrop-blur-md">
                      ...
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleChatSubmit} className="mt-4 pt-4 border-t border-white/10 flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Tapez votre message..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 text-white placeholder-white/50 focus:outline-none focus:border-[#c9a962]"
                  />
                  <button type="submit" className="w-12 h-12 bg-[#c9a962] rounded-xl flex items-center justify-center text-stone-900 hover:scale-105 transition-transform">
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* COMBINED BOOKING & PAYMENT SECTION */}
        <section id="demande" className="py-24 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Demande de Soin & Paiement</h2>
              <p className="text-stone-500">Tout se passe ici, en toute sécurité.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 md:p-12">
              <form className="space-y-8">
                {/* Step 1 */}
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-sm">1</span>
                    Vos informations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nom et Prénom" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-[#c9a962]" />
                    <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-[#c9a962]" />
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-sm">2</span>
                    Votre problème
                  </h3>
                  <textarea placeholder="Décrivez votre besoin pour le soin à distance..." rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-[#c9a962]"></textarea>
                </div>

                {/* Step 3 - Payment UI mockup */}
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-sm">3</span>
                    Règlement sécurisé (35€)
                  </h3>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col items-center justify-center">
                    <ShieldCheck size={40} className="text-blue-500 mb-4" />
                    <p className="text-center text-blue-900 font-medium mb-6">Paiement sécurisé par PayPal. Vous serez redirigé après validation.</p>
                    <button type="button" className="w-full md:w-auto px-12 py-4 bg-[#003087] text-white font-bold rounded-xl hover:bg-[#00205b] transition-colors shadow-lg">
                      Payer avec PayPal
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

      </div>
    </LayoutWrapper>
  )
}
