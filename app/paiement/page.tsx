'use client'

import React, { useState } from 'react'
import { Heart, CreditCard, CheckCircle, Gift, Euro, Sparkles } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'

const donationAmounts = [10, 20, 30, 50, 100]

export default function PaiementPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(30)
  const [customAmount, setCustomAmount] = useState('')
  const handlePayPal = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount
    if (amount) {
      window.open(`https://paypal.me/magnetiseur61/${amount}EUR`, '_blank')
    }
  }

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount

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

        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 sm:p-10 space-y-8">
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
            type="button"
            onClick={handlePayPal}
            disabled={!finalAmount}
            className="w-full py-4 bg-[#0070ba] text-white rounded-2xl font-bold text-lg hover:bg-[#005ea6] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.641.641 0 0 1 .633-.54h6.012c2.656 0 4.507 1.725 4.287 4.174-.2 2.22-1.984 3.895-4.65 3.895H8.89l-.95 5.46a.641.641 0 0 1-.633.54l-.232 4.088z"/>
              <path d="M19.885 8.088c-.2 2.22-1.983 3.895-4.65 3.895h-2.336l-.95 5.46a.641.641 0 0 1-.633.54H8.07l-.232.268a.641.641 0 0 0 .633.74h3.258a.641.641 0 0 0 .633-.54l.026-.15.5-2.874.032-.174a.641.641 0 0 1 .633-.54h.399c2.587 0 4.611-1.05 5.203-4.087.247-1.268.119-2.327-.534-3.072a2.607 2.607 0 0 0-.736-.566z"/>
            </svg>
            Payer {finalAmount || '...'} EUR avec PayPal
          </button>

          <p className="text-center text-stone-400 text-sm">
            Paiement securise par PayPal. Vous serez redirige vers PayPal pour finaliser votre don.
          </p>
        </div>

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
