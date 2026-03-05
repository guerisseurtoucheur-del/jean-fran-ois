'use client'

import React, { useState } from 'react'
import { Upload, Send, CheckCircle, User, Mail, Phone, FileText, Heart, Sparkles } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'

export default function DemandeSoinPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    probleme: '',
    details: ''
  })
  const [photo, setPhoto] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setSubmitted(true)
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  if (submitted) {
    return (
      <LayoutWrapper>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-600" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">Demande envoyee !</h1>
          <p className="text-stone-500 mb-8">Jean-Francois a bien recu votre demande de soin. Il vous contactera dans les plus brefs delais pour confirmer la prise en charge.</p>
          <Link href="/paiement" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all">
            <Heart size={20} />
            Faire un don de soutien
          </Link>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-bold mb-4">
            <Sparkles size={16} />
            Soin a distance sur photo
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">Demande de Soin</h1>
          <p className="text-stone-500 max-w-xl mx-auto">Remplissez ce formulaire et envoyez votre photo pour recevoir un soin energetique a distance de Jean-Francois.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 sm:p-10 space-y-6">
          {/* Photo Upload */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-stone-700 mb-3">Votre photo (visage visible)</label>
            <div className="border-2 border-dashed border-stone-200 rounded-2xl p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer" onClick={() => document.getElementById('photo-input')?.click()}>
              <input
                id="photo-input"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
              {photo ? (
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={32} className="text-emerald-600" />
                  </div>
                  <p className="text-emerald-600 font-bold">{photo.name}</p>
                  <p className="text-stone-400 text-sm">Cliquez pour changer</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
                    <Upload size={28} className="text-stone-400" />
                  </div>
                  <p className="text-stone-600 font-medium">Cliquez pour telecharger votre photo</p>
                  <p className="text-stone-400 text-sm">JPG, PNG - Max 10MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Nom complet</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Jean Dupont"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="jean@exemple.fr"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Telephone</label>
            <div className="relative">
              <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Type de probleme</label>
            <select
              required
              value={formData.probleme}
              onChange={(e) => setFormData({...formData, probleme: e.target.value})}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Selectionnez...</option>
              <option value="zona">Zona</option>
              <option value="brulure">Brulure / Coup de soleil</option>
              <option value="eczema">Eczema / Psoriasis</option>
              <option value="douleurs">Douleurs chroniques</option>
              <option value="stress">Stress / Anxiete</option>
              <option value="sommeil">Troubles du sommeil</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Decrivez votre situation</label>
            <div className="relative">
              <FileText size={18} className="absolute left-4 top-4 text-stone-400" />
              <textarea
                required
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                placeholder="Decrivez vos symptomes, depuis combien de temps, les traitements deja essayes..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
          >
            <Send size={20} />
            Envoyer ma demande
          </button>

          <p className="text-center text-stone-400 text-sm">
            En envoyant ce formulaire, vous acceptez d etre contacte par Jean-Francois pour votre soin.
          </p>
        </form>
      </div>
    </LayoutWrapper>
  )
}
