
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
        setError("La photo est trop lourde (5Mo max). Veuillez en choisir une plus petite.");
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
      const submissionData = new FormData();
      submissionData.append("_subject", `✨ NOUVEAU SOIN : ${formData.firstName} ${formData.lastName}`);
      submissionData.append("Prenom", formData.firstName);
      submissionData.append("Nom", formData.lastName);
      submissionData.append("Date_Naissance", formData.birthDate);
      submissionData.append("Telephone", formData.phone);
      submissionData.append("Email", formData.email);
      submissionData.append("Message", formData.explanation);
      
      if (formData.photoFile) {
        submissionData.append("Photo_Support", formData.photoFile);
      }
      
      submissionData.append("_honey", ""); // Anti-spam
      submissionData.append("_captcha", "false"); // Désactive le captcha pour plus de fluidité

      const response = await fetch("https://formsubmit.co/ajax/guerisseurtoucheur@gmail.com", {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        setLoading(false);
        setStep(3);
        // On laisse l'utilisateur sur la page de succès
      } else {
        throw new Error("Le service d'envoi est momentanément indisponible.");
      }
    } catch (err) {
      setLoading(false);
      setError("Désolé, l'envoi a échoué. Vérifiez votre connexion internet.");
      console.error("Form error:", err);
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
            <p className="text-stone-500">Ces informations me permettent de diriger le souffle vers vous.</p>
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
                  placeholder="06..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                <Mail size={12} /> Email
              </label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                <FileText size={12} /> Description de votre mal
              </label>
              <textarea 
                value={formData.explanation}
                onChange={(e) => setFormData({...formData, explanation: e.target.value})}
                className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm h-32 resize-none"
                placeholder="Expliquez-moi où vous avez mal..."
              />
            </div>
          </div>

          <button 
            disabled={!isStep1Valid}
            onClick={() => setStep(2)}
            className="w-full py-6 bg-stone-900 text-white rounded-3xl font-bold text-xl hover:bg-black transition-all disabled:opacity-30 shadow-xl"
          >
            Passer à la photo
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold italic text-indigo-600">Photo du support</h2>
            <p className="text-stone-500">Une photo de vous ou de la zone douloureuse pour canaliser l'énergie.</p>
          </div>

          {error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-sm">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <div className="aspect-square bg-stone-50 border-4 border-dashed border-stone-100 rounded-[3rem] overflow-hidden relative group cursor-pointer flex flex-col items-center justify-center shadow-inner">
            {formData.photoPreview ? (
              <img src={formData.photoPreview} className="w-full h-full object-cover" alt="Soin" />
            ) : (
              <div className="flex flex-col items-center gap-4 text-stone-300">
                <div className="p-8 bg-white rounded-full shadow-sm"><Camera size={48} /></div>
                <span className="font-bold text-sm uppercase tracking-widest">Prendre la photo</span>
              </div>
            )}
            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>

          <div className="flex gap-4">
            <button onClick={() => setStep(1)} className="flex-1 py-5 bg-stone-100 text-stone-500 rounded-3xl font-bold">Retour</button>
            <button 
              onClick={handleSubmit}
              disabled={!formData.photoFile || loading}
              className="flex-[2] py-5 bg-indigo-600 text-white rounded-3xl font-bold text-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-indigo-100"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Upload size={20} />}
              {loading ? 'Envoi...' : 'Transmettre pour le soin'}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center space-y-8 py-10 animate-in zoom-in duration-700">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-100">
            <CheckCircle2 size={56} />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900">Demande envoyée !</h2>
            <p className="text-lg text-stone-500 max-w-sm mx-auto">
              Merci {formData.firstName}. Jean-François traitera votre demande par le souffle dès réception.
            </p>
          </div>
          <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 text-left space-y-2">
             <p className="text-xs font-bold text-amber-800 uppercase tracking-widest">⚠️ Note pour Jean-François :</p>
             <p className="text-[11px] text-amber-700 leading-relaxed">
               Si vous ne recevez rien sur <strong>guerisseurtoucheur@gmail.com</strong>, vérifiez vos SPAMS. 
               Cherchez un mail de <strong>FormSubmit</strong> pour confirmer l'activation du formulaire la première fois.
             </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealingRequest;
