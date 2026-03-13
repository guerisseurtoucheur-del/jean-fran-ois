'use client'

import { useState, useEffect } from 'react'
import { X, Mail, Gift } from 'lucide-react'

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [prenom, setPrenom] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Verifier si deja inscrit ou ferme
    const hasSubscribed = localStorage.getItem('newsletter_subscribed')
    const hasClosed = sessionStorage.getItem('newsletter_closed')
    
    if (!hasSubscribed && !hasClosed) {
      // Afficher apres 30 secondes sur le site
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 30000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, prenom })
      })

      if (response.ok) {
        setSubmitted(true)
        localStorage.setItem('newsletter_subscribed', 'true')
      }
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('newsletter_closed', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Merci {prenom} !</h3>
            <p className="text-stone-500 mb-6">Verifiez votre boite mail pour un message de bienvenue.</p>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
            >
              Continuer ma visite
            </button>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white relative">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <Mail size={24} />
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">Contact</span>
              </div>
              <h3 className="text-2xl font-serif font-bold">Besoin d&apos;un soin ?</h3>
              <p className="text-indigo-100 text-sm mt-1">Laissez vos coordonnees</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <p className="text-stone-600 text-sm">
                Laissez vos coordonnees et je vous recontacterai pour discuter de votre situation.
              </p>
              
              <div>
                <input
                  type="text"
                  placeholder="Votre prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  required
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-50"
              >
                {loading ? 'Envoi...' : "Etre recontacte"}
              </button>
              
              <p className="text-center text-stone-400 text-xs">
                Vos donnees restent confidentielles.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
