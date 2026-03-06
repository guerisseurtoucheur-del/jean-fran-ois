'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const faqQuestions = [
  "Comment fonctionne le magnetisme a distance ?",
  "Quels problemes pouvez-vous traiter ?",
  "Combien coute une seance ?",
  "Combien de temps dure une seance ?",
  "Comment envoyer ma photo ?",
]

export default function QuestionsPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Bonjour, je suis l'assistant de Jean-Francois. Comment puis-je vous aider aujourd'hui ? Vous pouvez me poser des questions sur le magnetisme, les soins a distance, ou les tarifs."
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // Simulate response
    setTimeout(() => {
      let response = "Je comprends votre question. Jean-Francois pratique le magnetisme a distance depuis plus de 20 ans. Il intervient sur photo pour soulager zona, eczema, brulures, douleurs chroniques et bien d'autres maux. Pour une consultation personnalisee, je vous invite a faire une demande de soin."
      
      if (userMessage.toLowerCase().includes('prix') || userMessage.toLowerCase().includes('tarif') || userMessage.toLowerCase().includes('cout')) {
        response = "Les seances de magnetisme a distance sont proposees sur la base d'un don libre. Jean-Francois croit que l'energie de guerison doit etre accessible a tous. Vous pouvez faire un don selon vos moyens apres avoir constate les resultats."
      } else if (userMessage.toLowerCase().includes('photo')) {
        response = "Pour un soin a distance, envoyez simplement une photo recente de vous (visage visible) via le formulaire de demande de soin. Jean-Francois se connectera a votre energie a travers cette photo pour effectuer le soin."
      } else if (userMessage.toLowerCase().includes('zona') || userMessage.toLowerCase().includes('brulure')) {
        response = "Jean-Francois est reconnu comme coupeur de feu. Il intervient efficacement sur les zonas, brulures et coups de soleil. Beaucoup de patients ressentent un soulagement dans les heures qui suivent le soin."
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setIsLoading(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">Questions & Reponses</h1>
          <p className="text-stone-500">Posez vos questions sur le magnetisme et les soins a distance</p>
        </div>

        {/* Quick Questions */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">Questions frequentes</p>
          <div className="flex flex-wrap gap-2">
            {faqQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuickQuestion(q)}
                className="px-4 py-2 bg-stone-100 hover:bg-indigo-100 text-stone-600 hover:text-indigo-600 rounded-full text-sm transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-indigo-600" />
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-md' 
                    : 'bg-stone-100 text-stone-700 rounded-bl-md'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center shrink-0">
                    <User size={16} className="text-stone-600" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-indigo-600" />
                </div>
                <div className="bg-stone-100 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-stone-100 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-stone-500 mb-4">Pret a commencer votre soin ?</p>
          <Link href="/demande-soin" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all">
            <Sparkles size={20} />
            Demander un soin
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  )
}
