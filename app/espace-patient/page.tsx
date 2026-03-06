'use client'

import React, { useState } from 'react'
import { User, Mail, Lock, LogIn, History, Calendar, FileText, Heart, Clock, CheckCircle } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'

export default function EspacePatientPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <LayoutWrapper>
        <div className="max-w-md mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User size={40} className="text-indigo-600" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">Espace Patient</h1>
            <p className="text-stone-500">Connectez-vous pour acceder a votre historique de soins</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="votre@email.fr"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Mot de passe</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="********"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
            >
              <LogIn size={20} />
              Se connecter
            </button>

            <p className="text-center text-stone-400 text-sm">
              Pas encore de compte ? <Link href="/demande-soin" className="text-indigo-600 font-medium hover:underline">Faites une demande de soin</Link>
            </p>
          </form>
        </div>
      </LayoutWrapper>
    )
  }

  // Logged in view
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900">Bienvenue</h1>
            <p className="text-stone-500">{email}</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 text-stone-500 hover:text-stone-700 font-medium"
          >
            Deconnexion
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <Link href="/demande-soin" className="bg-indigo-600 text-white rounded-2xl p-6 hover:bg-indigo-700 transition-all">
            <Heart size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Nouveau soin</h3>
            <p className="text-indigo-200 text-sm">Demander un nouveau soin a distance</p>
          </Link>
          <Link href="/paiement" className="bg-stone-100 text-stone-900 rounded-2xl p-6 hover:bg-stone-200 transition-all">
            <Calendar size={32} className="mb-4 text-indigo-600" />
            <h3 className="text-xl font-bold mb-2">Faire un don</h3>
            <p className="text-stone-500 text-sm">Soutenir le travail de Jean-Francois</p>
          </Link>
        </div>

        {/* History */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <History size={24} className="text-indigo-600" />
            <h2 className="text-xl font-bold text-stone-900">Historique des soins</h2>
          </div>

          <div className="space-y-4">
            {[
              { date: '15 Fevrier 2024', type: 'Zona', status: 'complete' },
              { date: '3 Janvier 2024', type: 'Douleurs dorsales', status: 'complete' },
              { date: '20 Decembre 2023', type: 'Stress', status: 'complete' },
            ].map((soin, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">{soin.type}</p>
                    <p className="text-sm text-stone-500 flex items-center gap-1">
                      <Clock size={12} /> {soin.date}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold">
                  Termine
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
