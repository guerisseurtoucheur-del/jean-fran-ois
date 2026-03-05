'use client'

import { useState, useEffect } from 'react'
import { GoogleGenAI } from "@google/genai"
import { Sparkles, Loader2, Zap, Activity, Heart, Brain, ArrowRight, MousePointer2 } from 'lucide-react'

export default function EnergyGenerator() {
  const [scores, setScores] = useState({ physical: 50, emotional: 50, mental: 50 })
  const [reading, setReading] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [displayedFreq, setDisplayedFreq] = useState(50)
  const [hasInteracted, setHasInteracted] = useState(false)

  const globalFrequency = Math.round((scores.physical + scores.emotional + scores.mental) / 3)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayedFreq < globalFrequency) setDisplayedFreq(prev => prev + 1)
      if (displayedFreq > globalFrequency) setDisplayedFreq(prev => prev - 1)
    }, 20)
    return () => clearTimeout(timer)
  }, [displayedFreq, globalFrequency])

  const getFrequencyLabel = (freq: number) => {
    if (freq < 30) return "Vitalite Basse - Besoin de repos"
    if (freq < 60) return "Equilibre Moyen - A surveiller"
    if (freq < 85) return "Bonne Vitalite - Energie fluide"
    return "Excellente Vitalite - Etat optimal"
  }

  const getColor = (freq: number) => {
    if (freq < 30) return "text-orange-500"
    if (freq < 60) return "text-amber-500"
    if (freq < 85) return "text-indigo-600"
    return "text-emerald-500"
  }

  const getAuraColor = (freq: number) => {
    if (freq < 30) return "bg-orange-400/30"
    if (freq < 60) return "bg-amber-400/30"
    if (freq < 85) return "bg-indigo-400/30"
    return "bg-emerald-400/30"
  }

  const analyzeEnergy = async () => {
    setLoading(true)
    setReading(null)

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' })
      const prompt = `En tant que Jean-Francois, magnetiseur pragmatique et bienveillant, analyse ces scores de vitalite sur 100 : 
      Physique: ${scores.physical}, Emotionnel: ${scores.emotional}, Mental: ${scores.mental}. 
      Donne un constat concret sur l'etat general et un conseil de bien-etre pratique (repos, hydratation, grand air, deconnexion) pour ameliorer ou maintenir ces scores. 
      IMPORTANT : Varie toujours ton vocabulaire et tes tournures de phrases. Ne donne jamais deux fois le meme conseil de la meme maniere.
      Reste simple, direct et terre-a-terre. Evite le langage trop mystique. Maximum 2 phrases.`

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { temperature: 1.2 }
      })

      setReading(response.text || "Prenez simplement le temps de respirer et de vous reposer aujourd'hui.")
    } catch {
      setReading("Impossible d'analyser les donnees pour le moment.")
    } finally {
      setLoading(false)
    }
  }

  const handleSliderChange = (key: keyof typeof scores, value: string) => {
    setHasInteracted(true)
    setScores(prev => ({ ...prev, [key]: parseInt(value) }))
  }

  return (
    <section className="py-24 bg-white border-t border-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Form */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                <Activity size={14} /> Diagnostic de Vitalite
              </div>
              <h2 className="text-5xl font-serif font-bold text-stone-900 leading-tight text-balance">
                Calculez votre <span className="text-indigo-600 italic">etat de forme</span>
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed">
                Deplacez les curseurs ci-dessous pour evaluer votre ressenti actuel.
              </p>
            </div>

            <div className="space-y-12 bg-stone-50 p-8 md:p-12 rounded-[3.5rem] border border-stone-100 shadow-inner relative overflow-hidden">
              {!hasInteracted && (
                <div className="absolute top-8 right-8 animate-bounce flex items-center gap-2 text-indigo-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Glissez les curseurs</span>
                  <MousePointer2 size={16} />
                </div>
              )}

              {[
                { key: 'physical' as const, label: 'Vitalite Physique', icon: Zap, color: 'bg-amber-100 text-amber-600' },
                { key: 'emotional' as const, label: 'Equilibre Emotionnel', icon: Heart, color: 'bg-rose-100 text-rose-600' },
                { key: 'mental' as const, label: 'Charge Mentale', icon: Brain, color: 'bg-blue-100 text-blue-600' },
              ].map(({ key, label, icon: Icon, color }) => (
                <div key={key} className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-700">
                      <div className={`p-2 rounded-lg ${color}`}><Icon size={16} /></div>
                      {label}
                    </label>
                    <span className="text-2xl font-serif font-bold text-indigo-600">{scores[key]}%</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={scores[key]}
                    onChange={(e) => handleSliderChange(key, e.target.value)}
                    className="custom-range w-full h-3 bg-stone-200 rounded-full appearance-none cursor-grab active:cursor-grabbing"
                    aria-label={label}
                  />
                </div>
              ))}

              <button
                onClick={analyzeEnergy}
                disabled={loading}
                className="w-full py-6 bg-stone-900 text-white rounded-[2rem] font-bold text-xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 mt-4 group"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />}
                {loading ? 'Analyse en cours...' : 'Obtenir mon conseil personnalise'}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="relative flex flex-col items-center group">
            <div className={`p-10 md:p-16 bg-white rounded-[4rem] border border-stone-100 shadow-2xl transition-all duration-700 relative overflow-hidden flex flex-col items-center text-center w-full max-w-lg ${loading ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100'}`}>

              <div className="relative w-64 h-64 mb-10 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                <svg className="w-full h-full -rotate-90 filter drop-shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                  <defs>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={displayedFreq < 50 ? "#f97316" : "#6366f1"} />
                      <stop offset="100%" stopColor={displayedFreq < 50 ? "#f59e0b" : "#8b5cf6"} />
                    </linearGradient>
                  </defs>
                  <circle cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-stone-100" />
                  <circle
                    cx="128" cy="128" r="110" stroke="url(#energyGradient)" strokeWidth="12" fill="transparent"
                    className="transition-all duration-300"
                    strokeDasharray={691}
                    strokeDashoffset={691 - (691 * displayedFreq) / 100}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-7xl font-serif font-bold transition-colors duration-500 ${getColor(displayedFreq)}`}>
                    {displayedFreq}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mt-2">Indice Vital</span>
                </div>

                <div className={`absolute inset-0 rounded-full blur-[60px] animate-pulse-slow -z-10 transition-all duration-1000 ${getAuraColor(displayedFreq)}`} style={{ transform: `scale(${0.8 + displayedFreq / 150})` }}></div>
              </div>

              <div className="space-y-6 relative z-10 w-full">
                <div className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] inline-block mb-4 transition-colors duration-500 ${getColor(displayedFreq)} bg-stone-50 border border-stone-100`}>
                  {getFrequencyLabel(displayedFreq)}
                </div>

                {reading ? (
                  <div className="bg-stone-50/50 p-6 rounded-3xl border border-stone-100">
                    <p className="text-xl font-serif text-stone-700 leading-relaxed italic">
                      {`"${reading}"`}
                    </p>
                  </div>
                ) : (
                  <div className="h-20 flex items-center justify-center">
                    <p className="text-stone-400 italic text-sm">
                      {loading ? "Jean-Francois se connecte a votre energie..." : "Ajustez les curseurs pour voir votre etat de forme evoluer en temps reel."}
                    </p>
                  </div>
                )}
              </div>

              {reading && (
                <div className="mt-10 w-full">
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full flex items-center justify-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all group bg-indigo-50/50 py-4 rounded-2xl border border-indigo-100">
                    Demander un soin complet <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
