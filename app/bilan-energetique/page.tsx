'use client'

import React, { useState, useEffect } from 'react'
import LayoutWrapper from '@/components/LayoutWrapper'
import ChakraBody3D from '@/components/bilan/ChakraBody3D'
import { ArrowRight, Activity, Sparkles, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

type StatusType = 'idle' | 'blocked' | 'healing' | 'healed'

export default function BilanEnergetiquePage() {
  const [step, setStep] = useState(1)
  const [activeChakra, setActiveChakra] = useState<number | null>(null)
  const [status, setStatus] = useState<StatusType>('idle')
  const [diagnosisMessage, setDiagnosisMessage] = useState('')

  // Map user answers to chakra indices
  // 6: Couronne (Tête/Esprit)
  // 5: 3e Oeil (Pensées/Sommeil)
  // 4: Gorge (Expression)
  // 3: Coeur (Emotions)
  // 2: Plexus (Estomac/Stress)
  // 1: Sacré (Ventre)
  // 0: Racine (Dos/Jambes)

  const handleSelection = (chakraIndex: number) => {
    setActiveChakra(chakraIndex)
    setStatus('blocked')
    setStep(2)
    
    // Simulate analyzing phase
    setTimeout(() => {
      setStep(3)
    }, 2000)
  }

  const startHealing = () => {
    setStatus('healing')
    setStep(4)
    
    setTimeout(() => {
      setStatus('healed')
      setStep(5)
      
      // Set diagnosis based on chakra
      const diagnoses: Record<number, string> = {
        6: "Tension mentale forte. L'énergie stagne au niveau du chakra couronne. Le magnétisme permettra de relancer la circulation pour apaiser l'esprit.",
        5: "Surcharge cognitive ou troubles du sommeil. Le 3e œil est bloqué. Un rééquilibrage profond est nécessaire pour retrouver la clarté.",
        4: "Blocage de l'expression. Le chakra de la gorge retient les mots non dits. L'énergie à distance va libérer cette zone.",
        3: "Charge émotionnelle lourde. Le chakra du cœur est oppressé. Le soin magnétique va apporter un soulagement immédiat comme un baume.",
        2: "Nœud de stress intense. Le plexus solaire (estomac/digestion) encaisse vos angoisses. C'est l'une des zones les plus réceptives au magnétisme.",
        1: "Tensions abdominales basses. Le chakra sacré manque de fluidité. L'énergie doit être relancée pour retrouver votre force vitale.",
        0: "Douleurs d'ancrage (dos, sciatique, jambes). Le chakra racine est fragilisé. Le soin va redescendre l'énergie pour vous stabiliser."
      }
      setDiagnosisMessage(diagnoses[activeChakra || 0])
    }, 4000)
  }

  return (
    <LayoutWrapper>
      <div className="bg-[#0a0a0a] min-h-screen text-white pt-20 pb-12 relative overflow-hidden">
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col lg:flex-row relative z-10 gap-12 mt-10">
          
          {/* LEFT: 3D Visualization */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md overflow-hidden relative shadow-2xl">
            <div className="absolute top-6 left-6 z-10">
              <h2 className="font-serif font-bold text-xl text-[#c9a962]">Votre Champ Énergétique</h2>
              <p className="text-white/50 text-sm">Visualisation en temps réel</p>
            </div>
            
            {status === 'healing' && (
              <div className="absolute inset-0 bg-[#c9a962]/10 animate-pulse pointer-events-none z-10"></div>
            )}
            
            <ChakraBody3D activeChakraIndex={activeChakra} status={status} />
          </div>

          {/* RIGHT: Interaction Panel */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
                <div>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Où se situe votre mal ?</h1>
                  <p className="text-white/60">Sélectionnez la zone principale pour lancer le bilan énergétique de vos chakras.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button onClick={() => handleSelection(6)} className="p-4 bg-white/5 border border-white/10 hover:border-[#c9a962] hover:bg-white/10 rounded-2xl text-left transition-all group">
                    <h3 className="font-bold text-[#c9a962] group-hover:text-white transition-colors">Tête / Esprit</h3>
                    <p className="text-sm text-white/50 mt-1">Migraines, pensées lourdes</p>
                  </button>
                  <button onClick={() => handleSelection(5)} className="p-4 bg-white/5 border border-white/10 hover:border-[#c9a962] hover:bg-white/10 rounded-2xl text-left transition-all group">
                    <h3 className="font-bold text-[#c9a962] group-hover:text-white transition-colors">Sommeil</h3>
                    <p className="text-sm text-white/50 mt-1">Insomnies, fatigue</p>
                  </button>
                  <button onClick={() => handleSelection(3)} className="p-4 bg-white/5 border border-white/10 hover:border-[#c9a962] hover:bg-white/10 rounded-2xl text-left transition-all group">
                    <h3 className="font-bold text-[#c9a962] group-hover:text-white transition-colors">Cœur / Poitrine</h3>
                    <p className="text-sm text-white/50 mt-1">Angoisse, choc émotionnel</p>
                  </button>
                  <button onClick={() => handleSelection(2)} className="p-4 bg-white/5 border border-white/10 hover:border-[#c9a962] hover:bg-white/10 rounded-2xl text-left transition-all group">
                    <h3 className="font-bold text-[#c9a962] group-hover:text-white transition-colors">Ventre / Estomac</h3>
                    <p className="text-sm text-white/50 mt-1">Stress, ulcère, digestion</p>
                  </button>
                  <button onClick={() => handleSelection(0)} className="p-4 bg-white/5 border border-white/10 hover:border-[#c9a962] hover:bg-white/10 rounded-2xl text-left transition-all group">
                    <h3 className="font-bold text-[#c9a962] group-hover:text-white transition-colors">Dos / Articulations</h3>
                    <p className="text-sm text-white/50 mt-1">Sciatique, lombaires, genoux</p>
                  </button>
                  <button onClick={() => handleSelection(1)} className="p-4 bg-white/5 border border-white/10 hover:border-[#c9a962] hover:bg-white/10 rounded-2xl text-left transition-all group">
                    <h3 className="font-bold text-[#c9a962] group-hover:text-white transition-colors">Peau</h3>
                    <p className="text-sm text-white/50 mt-1">Zona, Eczéma, Brûlures</p>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500 py-12">
                <Activity size={48} className="mx-auto text-red-500 animate-pulse" />
                <h2 className="text-3xl font-serif font-bold">Analyse en cours...</h2>
                <p className="text-white/60">Localisation du blocage énergétique sur le chakra correspondant.</p>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 bg-red-500/5 p-8 rounded-3xl border border-red-500/20">
                <div className="space-y-2">
                  <h2 className="text-3xl font-serif font-bold text-red-400">Blocage détecté</h2>
                  <p className="text-white/80 leading-relaxed">
                    Un nœud énergétique important a été identifié. Regardez votre champ d'énergie sur la gauche : cette zone rouge palpite et draine votre force vitale.
                  </p>
                </div>
                
                <button 
                  onClick={startHealing}
                  className="w-full p-4 bg-[#c9a962] text-stone-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#e5d397] transition-all shadow-[0_0_30px_rgba(201,169,98,0.3)] group"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>Simuler le nettoyage magnétique</span>
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500 py-12">
                <Sparkles size={48} className="mx-auto text-[#c9a962] animate-spin-slow" />
                <h2 className="text-3xl font-serif font-bold text-[#c9a962]">Purification par l'énergie d'or...</h2>
                <p className="text-white/60">Regardez comment le magnétisme dissout le blocage et relance la lumière.</p>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 bg-[#c9a962]/5 p-8 rounded-3xl border border-[#c9a962]/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 size={28} />
                  <h2 className="text-2xl font-bold">Énergie relancée</h2>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-white">Diagnostic :</h3>
                  <p className="text-[#c9a962] italic border-l-2 border-[#c9a962] pl-4 py-1 leading-relaxed">
                    "{diagnosisMessage}"
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    La simulation montre comment votre corps réagit à l'énergie. Lors d'un véritable soin à distance, je me connecte à vous via votre photo pour reproduire cet effet et libérer vos blocages en profondeur.
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-4">
                  <Link href="/demande-soin" className="w-full p-4 bg-[#c9a962] text-stone-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#e5d397] transition-all shadow-xl">
                    <span>Faire un vrai soin sur photo</span>
                    <ArrowRight size={20} />
                  </Link>
                  <button onClick={() => {setStep(1); setStatus('idle'); setActiveChakra(null)}} className="text-white/50 text-sm hover:text-white underline-offset-4 hover:underline transition-colors">
                    Recommencer le bilan
                  </button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
