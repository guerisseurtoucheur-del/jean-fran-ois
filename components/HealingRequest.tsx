
import React, { useState } from 'react';
import { Upload, Camera, CheckCircle2, Loader2, Heart, Calendar, User, FileText, AlertCircle, Phone, Mail } from 'lucide-react';

const HealingRequest: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    phone: '',
    email: '',
    explanation: '',
    photoPreview: null as string | null,
    photoFile: null as File | null
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { 
        setError("La photo est trop volumineuse (max 5Mo).");
        return;
      }
      setError(null);
      setFormData({ ...formData, photoFile: file });
      
      const reader = new FileReader();
      reader.onloadend = () => setFormData(prev => ({ ...prev, photoPreview: reader.result as string }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Utilisation de FormData pour permettre l'envoi de fichiers réels
      const submissionData = new FormData();
      submissionData.append("_subject", `Nouvelle demande de soin : ${formData.firstName} ${formData.lastName}`);
      submissionData.append("Prenom", formData.firstName);
      submissionData.append("Nom", formData.lastName);
      submissionData.append("Date_Naissance", formData.birthDate);
      submissionData.append("Telephone", formData.phone);
      submissionData.append("Email", formData.email);
      submissionData.append("_replyto", formData.email);
      submissionData.append("Explications", formData.explanation);
      
      if (formData.photoFile) {
        submissionData.append("Photo", formData.photoFile);
      }
      
      submissionData.append("_honey", ""); // Honeypot contre le spam
      submissionData.append("_template", "table");

      const response = await fetch("https://formsubmit.co/ajax/guerisseurtoucheur@gmail.com", {
        method: "POST",
        body: submissionData,
        // Pas besoin de header Content-Type ici, le navigateur le gère pour FormData
      });

      if (response.ok) {
        setLoading(false);
        setStep(3);
        setTimeout(onSuccess, 8000); // Un peu plus de temps pour lire le message de succès
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur serveur");
      }
    } catch (err) {
      setLoading(false);
      setError("Le souffle n'a pas pu être transmis. Vérifiez votre connexion ou que la photo n'est pas trop lourde.");
      console.error("Submission error:", err);
    }
  };

  const isStep1Valid = 
    formData.firstName.trim() !== '' && 
    formData.lastName.trim() !== '' && 
    formData.birthDate !== '' && 
    formData.phone.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.explanation.trim() !== '';

  return (
    <div className="max-w-2xl mx-auto p-8 md:p-12 bg-white rounded-[4rem] border border-stone-100 shadow-2xl my-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      {step === 1 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-indigo-600">
              <Heart size={40} className="animate-pulse" />
            </div>
            <h2 className="text-4xl font-serif font-bold">Votre identité</h2>
            <p className="text-stone-500">Ces informations me permettent de diriger le souffle vers votre vibration personnelle.</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                  <User size={12} /> Prénom
                </label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm"
                  placeholder="Marie"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                  <User size={12} /> Nom
                </label>
                <input 
                  type="text" 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                  <Calendar size={12} /> Date de naissance
                </label>
                <input 
                  type="date" 
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                  <Phone size={12} /> Téléphone
                </label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm"
                  placeholder="06 00 00 00 00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                <Mail size={12} /> Adresse Email
              </label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm"
                placeholder="votre@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                <FileText size={12} /> Ce que vous ressentez
              </label>
              <textarea 
                value={formData.explanation}
                onChange={(e) => setFormData({...formData, explanation: e.target.value})}
                className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm h-32 resize-none"
                placeholder="Décrivez votre douleur ou votre besoin ici..."
              />
            </div>
          </div>

          <button 
            disabled={!isStep1Valid}
            onClick={() => setStep(2)}
            className="w-full py-6 bg-stone-900 text-white rounded-3xl font-bold text-xl hover:bg-black transition-all disabled:opacity-30 shadow-xl"
          >
            Continuer vers la photo
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold italic text-indigo-600">Le support visuel</h2>
            <p className="text-stone-500">Une photo récente (visage ou zone à traiter) m'aide à canaliser l'énergie.</p>
          </div>

          {error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-sm animate-in shake-in">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <div className="aspect-square bg-stone-50 border-4 border-dashed border-stone-100 rounded-[3rem] overflow-hidden relative group cursor-pointer hover:border-indigo-200 transition-all flex flex-col items-center justify-center shadow-inner">
            {formData.photoPreview ? (
              <div className="relative w-full h-full">
                <img src={formData.photoPreview} className="w-full h-full object-cover" alt="Support de soin" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white px-4 py-2 rounded-full text-xs font-bold text-stone-900">Changer la photo</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 text-stone-300 group-hover:text-indigo-300 transition-colors">
                <div className="p-8 bg-white rounded-full shadow-sm">
                  <Camera size={48} />
                </div>
                <span className="font-bold text-sm uppercase tracking-widest">Prendre ou choisir une photo</span>
              </div>
            )}
            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setStep(1)}
              className="flex-1 py-5 bg-stone-100 text-stone-500 rounded-3xl font-bold hover:bg-stone-200 transition-colors"
            >
              Retour
            </button>
            <button 
              onClick={handleSubmit}
              disabled={!formData.photoFile || loading}
              className="flex-[2] py-5 bg-indigo-600 text-white rounded-3xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Upload size={20} />}
              {loading ? 'Envoi en cours...' : 'Envoyer pour le soin'}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center space-y-8 py-10 animate-in zoom-in duration-700">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto scale-110 shadow-lg shadow-emerald-100">
            <CheckCircle2 size={56} />
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl font-serif font-bold italic text-stone-900">C'est envoyé, {formData.firstName}.</h2>
            <p className="text-xl text-stone-500 leading-relaxed max-w-md mx-auto">
              Votre demande est en route vers la boîte mail de Jean-François.
            </p>
          </div>
          <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 max-w-sm mx-auto">
             <p className="text-xs font-medium text-amber-700">
               Note pour Jean-François : Si vous ne recevez rien, vérifiez vos SPAMS pour activer le formulaire une première fois.
             </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealingRequest;
