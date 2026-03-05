'use client'

import React, { useState } from 'react'
import { Heart, CreditCard, CheckCircle, Gift, Euro, Sparkles } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'

const donationAmounts = [10, 20, 30, 50, 100]

export default function PaiementPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(30)
  const [customAmount, setCustomAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount

  if (submitted) {
    return (
      <LayoutWrapper>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-600" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">Merci pour votre don !</h1>
          <p className="text-stone-500 mb-4">Votre generosite permet a Jean-Francois de continuer a aider ceux qui en ont besoin.</p>
          <p className="text-2xl font-bold text-indigo-600">{finalAmount} EUR</p>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-bold mb-4">
            <Heart size={16} />
            Don libre
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">Soutenir Jean-Francois</h1>
          <p className="text-stone-500 max-w-xl mx-auto">Les soins de Jean-Francois fonctionnent sur le principe du don libre. Donnez selon vos moyens et votre satisfaction.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 sm:p-10 space-y-8">
          {/* Amount Selection */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-4">Choisissez un montant</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount('')
                  }}
                  className={`py-4 rounded-2xl font-bold text-lg transition-all ${
                    selectedAmount === amount && !customAmount
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {amount} EUR
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Ou entrez un montant libre</label>
            <div className="relative">
              <Euro size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="number"
                min="1"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                placeholder="Autre montant..."
              />
            </div>
          </div>

          {/* Summary */}
          {finalAmount && (
            <div className="bg-indigo-50 rounded-2xl p-6 text-center">
              <p className="text-sm text-indigo-600 font-medium mb-2">Votre don</p>
              <p className="text-4xl font-bold text-indigo-600">{finalAmount} EUR</p>
            </div>
          )}

          {/* Benefits */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-stone-600">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle size={14} className="text-emerald-600" />
              </div>
              <span className="text-sm">Paiement 100% securise</span>
            </div>
            <div className="flex items-center gap-3 text-stone-600">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle size={14} className="text-emerald-600" />
              </div>
              <span className="text-sm">Don deductible des impots (66%)</span>
            </div>
            <div className="flex items-center gap-3 text-stone-600">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle size={14} className="text-emerald-600" />
              </div>
              <span className="text-sm">Recu envoye par email</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={!finalAmount}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CreditCard size={20} />
            Faire un don de {finalAmount || '...'} EUR
          </button>

          <p className="text-center text-stone-400 text-sm">
            Paiement securise par Stripe. Vos donnees bancaires ne sont jamais stockees.
          </p>
        </form>

        {/* Testimonial */}
        <div className="mt-10 bg-stone-50 rounded-2xl p-6 text-center">
          <Gift size={32} className="text-indigo-400 mx-auto mb-4" />
          <p className="text-stone-600 italic mb-3">"Votre generosite me permet de continuer a aider ceux qui souffrent, sans condition de moyens."</p>
          <p className="text-sm font-bold text-stone-900">- Jean-Francois</p>
        </div>
      </div>
    </LayoutWrapper>
  )
}
