import React, { useState } from 'react';
import { Camera, CheckCircle2, Loader2, Heart, Calendar, User, FileText, AlertCircle, Phone, Mail, Sparkles, CreditCard, ArrowRight } from 'lucide-react';

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

  const saveToAdminDatabase = () => {
    try {
      const saved = localStorage.getItem('jf_admin_requests');
      const requests = saved ? JSON.parse(saved) : [];
      const newRequest = {
        id: Date.now().toString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        birthDate: formData.birthDate,
        explanation: formData.explanation,
        date: new Date().toLocaleString('fr-FR'),
        status: 'pending'
      };
      localStorage.setItem('jf_admin_requests', JSON.stringify([newRequest, ...requests]));
    } catch (e) {
      console.error("Erreur sauvegarde locale admin:", e);
    }
  };

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          // Passage à 1200px pour une netteté optimale du soin
          const MAX_SIZE = 1200; 
          let width = img.width;
          let height = img.height;
          if (width > height) {
            if (width > MAX_SIZE) {
              height *= MAX_SIZE / width;
              width = MAX_SIZE;
            }
          } else {
            if (height > MAX_SIZE) {
              width *= MAX_SIZE / height;
              height = MAX_SIZE;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) {
              const finalFile = new File([blob], "photo_soin.jpg", { type: "image/jpeg" });
              resolve(finalFile);
            } else {
              reject(new Error("Erreur compression"));
            }
          }, 'image/jpeg', 0.7); // Augmentation de la qualité à 70%
        };
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
      
      // Configuration pour FormSubmit
      submissionData.append("_subject", `✨ NOUVEAU SOIN PHOTO : ${formData.firstName} ${formData.lastName}`);
      submissionData.append("_captcha", "false");

      // Données transmises au mail
      submissionData.append("Patient", `${formData.firstName} ${formData.lastName}`);
      submissionData.append("Date de naissance", formData.birthDate);
      submissionData.append("Email", formData.email);
      submissionData.append("Téléphone", formData.phone);
      submissionData.append("Message / Symptômes", formData.explanation);

      // Envoi de la photo
      if (formData.photoFile) {
        try {
          const processedFile = await compressImage(formData.photoFile);
          submissionData.append("attachment", processedFile);
        } catch (e) {
          submissionData.append("attachment", formData.photoFile);
        }
      }

      const response = await fetch("https://formsubmit.co/ajax/guerisseurtoucheur@gmail.com", {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        saveToAdminDatabase();
        setLoading(false);
        setStep(3);
      } else {
        throw new Error("Erreur serveur lors de l'envoi");
      }
    } catch (err: any) {
      setLoading(false);
      setError("Le message a bien été envoyé, mais les photos sont bloquées. Veuillez vérifier que l'option 'File Uploads' est bien activée sur votre compte FormSubmit.");
    }
  };

  const isStep1Valid = 
    formData.firstName.trim() !== '' && 
    formData.lastName.trim() !== '' && 
    formData.birthDate !== '' && 
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
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">Vibration Personnelle</h2>
            <p className="text-stone-500">Ces éléments sont nécessaires pour que je puisse me connecter à votre énergie.</p>
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
                placeholder="votre@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4 flex items-center gap-2">
                <FileText size={12} /> Votre mal
              </label>
              <textarea 
                rows={3}
                value={formData.explanation}
                onChange={(e) => setFormData({...formData, explanation: e.target.value})}
                className="w-full bg-stone-50 border border-stone-100 rounded-3xl px-6 py-4 outline-none focus:border-indigo-300 focus:bg-white transition-all shadow-sm resize-none"
                placeholder="Décrivez votre mal (Ex: Zona, brûlure, douleurs...)"
              />
            </div>
          </div>

          <button 
            disabled={!isStep1Valid}
            onClick={() => setStep(2)}
            className="w-full py-5 bg-stone-900 text-white rounded-[2rem] font-bold text-lg hover:bg-black transition-all disabled:opacity-30"
          >
            Choisir la photo
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">Votre Photo</h2>
            <p className="text-stone-500 italic text-sm">Une photo nette sert de support pour le travail à distance.</p>
          </div>

          <div 
            onClick={() => document.getElementById('photo-input')?.click()}
            className="w-full aspect-square bg-stone-50 border-2 border-dashed border-stone-200 rounded-[3rem] flex flex-col items-center justify-center cursor-pointer hover:bg-stone-100 transition-all overflow-hidden relative"
          >
            {formData.photoPreview ? (
              <img src={formData.photoPreview} alt="Aperçu" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center space-y-3">
                <div className="p-6 bg-white rounded-full shadow-sm inline-block"><Camera size={40} className="text-indigo-600" /></div>
                <p className="text-stone-400 font-bold uppercase text-[10px] tracking-widest">Cliquez pour ajouter</p>
              </div>
            )}
            <input id="photo-input" type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
          </div>

          {error && (
            <div className="p-4 bg-amber-50 text-amber-700 border border-amber-100 rounded-2xl text-[11px] leading-relaxed flex items-start gap-3">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <span>
                <strong>Note importante :</strong> {error}
                <br /><br />
                <a href="https://formsubmit.co/login" target="_blank" rel="noreferrer" className="underline font-bold">Connectez-vous ici</a> pour vérifier vos réglages "File Uploads".
              </span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setStep(1)} className="flex-1 py-5 border border-stone-200 text-stone-400 rounded-[2rem] font-bold">Retour</button>
            <button 
              onClick={handleSubmit}
              disabled={loading || !formData.photoFile}
              className="flex-[2] py-5 bg-indigo-600 text-white rounded-[2rem] font-bold hover:bg-indigo-700 transition-all disabled:opacity-30 flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
              {loading ? 'Envoi...' : 'Envoyer ma demande'}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="py-12 text-center space-y-10 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={56} />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">Demande Transmise</h2>
            <p className="text-stone-500 max-sm mx-auto italic">
              Merci {formData.firstName}. J'ai bien reçu vos informations et je vais m'y connecter.
            </p>
          </div>

          <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 space-y-6">
             <div className="flex items-center gap-3 justify-center text-indigo-700">
                <CreditCard size={24} />
                <span className="font-bold uppercase tracking-widest text-xs">Participation Libre</span>
             </div>
             <p className="text-sm text-stone-600 leading-relaxed">
               Pour finaliser votre démarche, vous pouvez maintenant accéder à l'espace règlement.
             </p>
             <button 
               onClick={onSuccess}
               className="w-full py-5 bg-indigo-600 text-white rounded-[1.5rem] font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all"
             >
               Accéder au règlement PayPal
               <ArrowRight size={18} />
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealingRequest;