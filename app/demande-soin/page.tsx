'use client'

import React, { useState } from 'react'
import { Upload, Send, CheckCircle, User, Mail, Phone, FileText, Sparkles, Star, Zap, Heart, Globe, Building2, Home, MapPin } from 'lucide-react'
import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const typeConsultations = [
  {
    id: 'distance',
    nom: 'Soin a distance',
    description: 'Sur photo, ou que vous soyez',
    zone: 'France entiere',
    tarif: 'Tarifs fixes',
    icon: Globe,
    color: 'bg-blue-500'
  },
  {
    id: 'cabinet',
    nom: 'Au cabinet',
    description: 'Consultation a Alencon',
    zone: 'Alencon',
    tarif: 'Don libre',
    icon: Building2,
    color: 'bg-[#4a6741]'
  },
  {
    id: 'domicile',
    nom: 'A domicile',
    description: 'Jean-Francois se deplace',
    zone: '30km autour d\'Alencon',
    tarif: 'Don libre',
    icon: Home,
    color: 'bg-amber-600'
  }
]

const forfaitsDistance = [
  {
    id: 'ponctuel',
    nom: 'Soin Ponctuel',
    prix: 35,
    description: '1 seance energetique',
    details: 'Ideal pour un probleme recent ou une premiere experience',
    icon: Zap
  },
  {
    id: 'complet',
    nom: 'Soin Complet',
    prix: 55,
    description: '2 seances sur 48h',
    details: 'Recommande pour la plupart des problemes',
    popular: true,
    icon: Star
  },
  {
    id: 'suivi',
    nom: 'Forfait Suivi',
    prix: 120,
    description: '5 seances sur 2 semaines',
    details: 'Pour les problemes chroniques ou anciens',
    icon: Heart
  }
]

export default function DemandeSoinPage() {
  const router = useRouter()
  const [step, setStep] = useState(0) // 0 = choix type, 1 = forfait/paiement (distance) ou formulaire (cabinet/domicile), 2 = formulaire (distance)
  const [typeConsultation, setTypeConsultation] = useState<string | null>(null)
  const [selectedForfait, setSelectedForfait] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    dateNaissance: '',
    email: '',
    telephone: '',
    adresse: '',
    probleme: '',
    details: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [photo, setPhoto] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [paymentDone, setPaymentDone] = useState(false)

  const selectedForfaitData = forfaitsDistance.find(f => f.id === selectedForfait)
  const selectedTypeData = typeConsultations.find(t => t.id === typeConsultation)

  const handleSelectType = (type: string) => {
    setTypeConsultation(type)
    setStep(1)
  }

  const handlePayment = () => {
    if (selectedForfaitData) {
      window.open(`https://paypal.me/magnetiseur61/${selectedForfaitData.prix}EUR`, '_blank')
      setPaymentDone(true)
      setStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('typeConsultation', selectedTypeData?.nom || '')
      formDataToSend.append('prenom', formData.prenom)
      formDataToSend.append('nom', formData.nom)
      formDataToSend.append('dateNaissance', formData.dateNaissance)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('telephone', formData.telephone)
      if (typeConsultation === 'domicile') {
        formDataToSend.append('adresse', formData.adresse)
      }
      formDataToSend.append('probleme', formData.probleme)
      formDataToSend.append('details', formData.details)
      
      if (typeConsultation === 'distance') {
        formDataToSend.append('forfait', selectedForfaitData?.nom || '')
        formDataToSend.append('montant', String(selectedForfaitData?.prix || 0))
      } else {
        formDataToSend.append('forfait', 'Don libre')
        formDataToSend.append('montant', '0')
      }
      
      if (photo) {
        formDataToSend.append('photo', photo)
      }
      
      const response = await fetch('/api/demande-soin', {
        method: 'POST',
        body: formDataToSend
      })
      
      if (response.ok) {
        if (typeConsultation === 'distance') {
          router.push('/merci')
        } else {
          setSubmitted(true)
        }
      } else {
        alert('Erreur lors de l\'envoi. Veuillez reessayer.')
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi. Veuillez reessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  // Page de confirmation pour cabinet/domicile
  if (submitted && typeConsultation !== 'distance') {
    return (
      <LayoutWrapper>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-600" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#3d3630] mb-4">Demande envoyee !</h1>
          <p className="text-[#6b6259] mb-4">
            Jean-Francois a bien recu votre demande de consultation {typeConsultation === 'cabinet' ? 'au cabinet' : 'a domicile'}.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-bold text-amber-800 mb-2">Prochaine etape :</h3>
            <p className="text-amber-700">
              Jean-Francois vous contactera rapidement par telephone au <strong>{formData.telephone}</strong> pour convenir d&apos;un rendez-vous.
            </p>
          </div>
          <div className="bg-stone-50 rounded-2xl p-6 mb-8">
            <p className="text-[#6b6259]">
              <strong>Rappel :</strong> La consultation {typeConsultation === 'cabinet' ? 'au cabinet' : 'a domicile'} fonctionne sur le principe du don libre. Vous donnez ce que vous souhaitez apres la seance.
            </p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-[#4a6741] text-white rounded-2xl font-bold hover:bg-[#3a5233] transition-all">
            Retour a l&apos;accueil
          </Link>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4a6741]/10 text-[#4a6741] rounded-full text-sm font-bold mb-4">
            <Sparkles size={16} />
            Demande de consultation
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#3d3630] mb-4">Demande de Soin</h1>
          <p className="text-[#6b6259] max-w-xl mx-auto">Choisissez votre mode de consultation avec Jean-Francois</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold ${step >= 0 ? 'bg-[#4a6741] text-white' : 'bg-stone-100 text-stone-400'}`}>
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">1</span>
            <span className="hidden sm:inline">Type de consultation</span>
            <span className="sm:hidden">Type</span>
          </div>
          <div className="w-4 sm:w-8 h-0.5 bg-stone-200"></div>
          {typeConsultation === 'distance' ? (
            <>
              <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold ${step >= 1 ? 'bg-[#4a6741] text-white' : 'bg-stone-100 text-stone-400'}`}>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">2</span>
                <span className="hidden sm:inline">Forfait & Paiement</span>
                <span className="sm:hidden">Paiement</span>
              </div>
              <div className="w-4 sm:w-8 h-0.5 bg-stone-200"></div>
              <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold ${step >= 2 ? 'bg-[#4a6741] text-white' : 'bg-stone-100 text-stone-400'}`}>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">3</span>
                <span className="hidden sm:inline">Vos informations</span>
                <span className="sm:hidden">Infos</span>
              </div>
            </>
          ) : (
            <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold ${step >= 1 ? 'bg-[#4a6741] text-white' : 'bg-stone-100 text-stone-400'}`}>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">2</span>
              <span className="hidden sm:inline">Vos informations</span>
              <span className="sm:hidden">Infos</span>
            </div>
          )}
        </div>

        {/* ETAPE 0 : Choix du type de consultation */}
        {step === 0 && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {typeConsultations.map((type) => {
                const Icon = type.icon
                return (
                  <div
                    key={type.id}
                    onClick={() => handleSelectType(type.id)}
                    className="relative bg-white rounded-3xl p-6 cursor-pointer transition-all border-2 border-stone-100 hover:border-[#4a6741] hover:shadow-xl group"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${type.color} text-white group-hover:scale-110 transition-transform`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#3d3630] mb-2">{type.nom}</h3>
                    <p className="text-[#6b6259] text-sm mb-4">{type.description}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-[#9a918a] mb-2">
                      <MapPin size={14} />
                      <span>{type.zone}</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-stone-100">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                        type.tarif === 'Don libre' 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {type.tarif}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 text-center">
              <p className="text-[#6b6259] text-sm">
                <strong>Vous etes loin d&apos;Alencon ?</strong> Le soin a distance sur photo est tout aussi efficace. L&apos;energie n&apos;a pas de frontiere.
              </p>
            </div>
          </div>
        )}

        {/* ETAPE 1 pour DISTANCE : Choix du forfait */}
        {step === 1 && typeConsultation === 'distance' && (
          <div className="space-y-8">
            {/* Bouton retour */}
            <button 
              onClick={() => { setStep(0); setTypeConsultation(null); }}
              className="text-[#4a6741] font-medium hover:underline flex items-center gap-2"
            >
              ← Changer le type de consultation
            </button>

            {/* Forfaits */}
            <div className="grid md:grid-cols-3 gap-6">
              {forfaitsDistance.map((forfait) => {
                const Icon = forfait.icon
                return (
                  <div
                    key={forfait.id}
                    onClick={() => setSelectedForfait(forfait.id)}
                    className={`relative bg-white rounded-3xl p-6 cursor-pointer transition-all border-2 ${
                      selectedForfait === forfait.id
                        ? 'border-[#4a6741] shadow-xl scale-[1.02]'
                        : 'border-stone-100 hover:border-[#4a6741]/50 hover:shadow-lg'
                    }`}
                  >
                    {forfait.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c9a962] text-white text-xs font-bold rounded-full">
                        RECOMMANDE
                      </div>
                    )}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                      selectedForfait === forfait.id ? 'bg-[#4a6741] text-white' : 'bg-[#4a6741]/10 text-[#4a6741]'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#3d3630] mb-1">{forfait.nom}</h3>
                    <p className="text-[#6b6259] text-sm mb-4">{forfait.description}</p>
                    <div className="text-3xl font-bold text-[#4a6741] mb-2">{forfait.prix} EUR</div>
                    <p className="text-[#9a918a] text-xs">{forfait.details}</p>
                    {selectedForfait === forfait.id && (
                      <div className="absolute top-4 right-4 w-6 h-6 bg-[#4a6741] rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Rarete */}
            <div className="bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-2xl p-4 text-center">
              <p className="text-[#8b7a3d] font-medium text-sm">
                <strong>5 demandes traitees par jour maximum</strong> - Jean-Francois accorde toute son attention a chaque patient
              </p>
            </div>

            {/* Payment Button */}
            {selectedForfait && (
              <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-[#6b6259]">Votre selection</p>
                    <p className="text-xl font-bold text-[#3d3630]">{selectedForfaitData?.nom}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#6b6259]">Total</p>
                    <p className="text-2xl font-bold text-[#4a6741]">{selectedForfaitData?.prix} EUR</p>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full py-4 bg-[#0070ba] text-white rounded-2xl font-bold text-lg hover:bg-[#005ea6] transition-all flex items-center justify-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.641.641 0 0 1 .633-.54h6.012c2.656 0 4.507 1.725 4.287 4.174-.2 2.22-1.984 3.895-4.65 3.895H8.89l-.95 5.46a.641.641 0 0 1-.633.54l-.232 4.088z"/>
                    <path d="M19.885 8.088c-.2 2.22-1.983 3.895-4.65 3.895h-2.336l-.95 5.46a.641.641 0 0 1-.633.54H8.07l-.232.268a.641.641 0 0 0 .633.74h3.258a.641.641 0 0 0 .633-.54l.026-.15.5-2.874.032-.174a.641.641 0 0 1 .633-.54h.399c2.587 0 4.611-1.05 5.203-4.087.247-1.268.119-2.327-.534-3.072a2.607 2.607 0 0 0-.736-.566z"/>
                  </svg>
                  Payer {selectedForfaitData?.prix} EUR avec PayPal
                </button>

                <p className="text-center text-[#9a918a] text-xs mt-4">
                  Apres le paiement, vous pourrez envoyer votre photo et vos informations
                </p>
              </div>
            )}
          </div>
        )}

        {/* ETAPE 1 pour CABINET/DOMICILE : Formulaire direct (sans paiement) */}
        {step === 1 && (typeConsultation === 'cabinet' || typeConsultation === 'domicile') && (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 sm:p-10 space-y-6">
            {/* Bouton retour */}
            <button 
              type="button"
              onClick={() => { setStep(0); setTypeConsultation(null); }}
              className="text-[#4a6741] font-medium hover:underline flex items-center gap-2"
            >
              ← Changer le type de consultation
            </button>

            {/* Info type consultation */}
            <div className={`rounded-2xl p-4 flex items-center gap-4 ${
              typeConsultation === 'cabinet' ? 'bg-[#4a6741]/10' : 'bg-amber-50'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                typeConsultation === 'cabinet' ? 'bg-[#4a6741] text-white' : 'bg-amber-600 text-white'
              }`}>
                {typeConsultation === 'cabinet' ? <Building2 size={24} /> : <Home size={24} />}
              </div>
              <div>
                <p className={`font-bold ${typeConsultation === 'cabinet' ? 'text-[#4a6741]' : 'text-amber-700'}`}>
                  {typeConsultation === 'cabinet' ? 'Consultation au cabinet - Alencon' : 'Consultation a domicile - 30km autour d\'Alencon'}
                </p>
                <p className="text-sm text-[#6b6259]">Don libre - Jean-Francois vous contactera pour fixer un rendez-vous</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Prenom</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    required
                    value={formData.prenom}
                    onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                    placeholder="Jean"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Nom</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                    placeholder="Dupont"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Telephone</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="tel"
                    required
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Email</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                    placeholder="jean@exemple.fr"
                  />
                </div>
              </div>
            </div>

            {/* Adresse pour domicile uniquement */}
            {typeConsultation === 'domicile' && (
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Votre adresse complete</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-4 top-4 text-stone-400" />
                  <textarea
                    required
                    rows={2}
                    value={formData.adresse}
                    onChange={(e) => setFormData({...formData, adresse: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741] resize-none"
                    placeholder="12 rue de la Paix, 61000 Alencon"
                  />
                </div>
                <p className="text-xs text-[#9a918a] mt-1">Deplacement dans un rayon de 30km autour d&apos;Alencon</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-[#3d3630] mb-2">Type de probleme</label>
              <select
                required
                value={formData.probleme}
                onChange={(e) => setFormData({...formData, probleme: e.target.value})}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
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
              <label className="block text-sm font-bold text-[#3d3630] mb-2">Decrivez votre situation</label>
              <div className="relative">
                <FileText size={18} className="absolute left-4 top-4 text-stone-400" />
                <textarea
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741] resize-none"
                  placeholder="Decrivez vos symptomes, depuis combien de temps, les traitements deja essayes..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#4a6741] text-white rounded-2xl font-bold text-lg hover:bg-[#3a5233] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de rendez-vous'}
            </button>

            <p className="text-center text-[#9a918a] text-sm">
              Jean-Francois vous contactera rapidement pour convenir d&apos;un rendez-vous.
            </p>
          </form>
        )}

        {/* ETAPE 2 pour DISTANCE : Formulaire apres paiement */}
        {step === 2 && typeConsultation === 'distance' && (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 sm:p-10 space-y-6">
            {/* Confirmation paiement */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle size={20} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-emerald-800">Paiement effectue - {selectedForfaitData?.nom}</p>
                <p className="text-emerald-600 text-sm">Completez maintenant vos informations</p>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#3d3630] mb-3">Votre photo (visage visible)</label>
              <div className="border-2 border-dashed border-stone-200 rounded-2xl p-8 text-center hover:border-[#4a6741] transition-colors cursor-pointer" onClick={() => document.getElementById('photo-input')?.click()}>
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
                    <p className="text-[#9a918a] text-sm">Cliquez pour changer</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
                      <Upload size={28} className="text-stone-400" />
                    </div>
                    <p className="text-[#6b6259] font-medium">Cliquez pour telecharger votre photo</p>
                    <p className="text-[#9a918a] text-sm">JPG, PNG - Max 10MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Prenom</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    required
                    value={formData.prenom}
                    onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                    placeholder="Jean"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Nom</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                    placeholder="Dupont"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Date de naissance</label>
                <input
                  type="date"
                  required
                  value={formData.dateNaissance}
                  onChange={(e) => setFormData({...formData, dateNaissance: e.target.value})}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#3d3630] mb-2">Telephone</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#3d3630] mb-2">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
                  placeholder="jean@exemple.fr"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#3d3630] mb-2">Type de probleme</label>
              <select
                required
                value={formData.probleme}
                onChange={(e) => setFormData({...formData, probleme: e.target.value})}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741]"
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
              <label className="block text-sm font-bold text-[#3d3630] mb-2">Decrivez votre situation</label>
              <div className="relative">
                <FileText size={18} className="absolute left-4 top-4 text-stone-400" />
                <textarea
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a6741] resize-none"
                  placeholder="Decrivez vos symptomes, depuis combien de temps, les traitements deja essayes..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#4a6741] text-white rounded-2xl font-bold text-lg hover:bg-[#3a5233] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de soin'}
            </button>

            <p className="text-center text-[#9a918a] text-sm">
              Jean-Francois commencera votre soin des reception de votre demande.
            </p>
          </form>
        )}
      </div>
    </LayoutWrapper>
  )
}
