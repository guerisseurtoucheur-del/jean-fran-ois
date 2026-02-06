import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, FileText, Trash2, CheckCircle, Clock, Search, 
  ShieldCheck, Download, Edit3, Save, ChevronRight, Activity, 
  Stethoscope, MessageSquare, History, PlusCircle, Users, Calendar, DollarSign,
  Lock, LogOut, ArrowRight, Eye, EyeOff
} from 'lucide-react';

interface Request {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  explanation: string;
  date: string;
  status: 'pending' | 'active' | 'completed';
  notes?: string;
  result?: string;
  amountGiven?: string;
}

// Utilitaires de sécurité simples (Obfuscation)
const encodeData = (data: any) => btoa(encodeURIComponent(JSON.stringify(data)));
const decodeData = (encoded: string) => JSON.parse(decodeURIComponent(atob(encoded)));

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [requests, setRequests] = useState<Request[]>([]);
  const [filter, setFilter] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [editResult, setEditResult] = useState('');
  const [editAmountGiven, setEditAmountGiven] = useState('');

  // Vérification de la session au chargement
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('jf_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }

    const saved = localStorage.getItem('jf_admin_requests_v2');
    if (saved) {
      try {
        setRequests(decodeData(saved));
      } catch (e) {
        // Fallback pour les anciennes données non encodées si besoin
        const oldData = localStorage.getItem('jf_admin_requests');
        if (oldData) setRequests(JSON.parse(oldData));
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginPassword === 'ALENCON61') {
      setIsAuthenticated(true);
      sessionStorage.setItem('jf_admin_auth', 'true');
    } else {
      alert("Accès refusé. Code incorrect.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('jf_admin_auth');
  };

  const saveToLocal = (newRequests: Request[]) => {
    setRequests(newRequests);
    localStorage.setItem('jf_admin_requests_v2', encodeData(newRequests));
  };

  const deleteRequest = (id: string) => {
    if (window.confirm('Supprimer définitivement ce dossier patient ?')) {
      const next = requests.filter(r => r.id !== id);
      saveToLocal(next);
      if (selectedId === id) setSelectedId(null);
    }
  };

  const updatePatientData = (id: string) => {
    const next = requests.map(r => 
      r.id === id ? { ...r, notes: editNotes, result: editResult, amountGiven: editAmountGiven } : r
    );
    saveToLocal(next);
    alert("Dossier mis à jour en toute sécurité.");
  };

  const setStatus = (id: string, newStatus: Request['status']) => {
    const next = requests.map(r => r.id === id ? { ...r, status: newStatus } : r);
    saveToLocal(next);
  };

  const filtered = requests.filter(r => 
    `${r.firstName} ${r.lastName}`.toLowerCase().includes(filter.toLowerCase()) ||
    r.email.toLowerCase().includes(filter.toLowerCase()) ||
    r.explanation.toLowerCase().includes(filter.toLowerCase())
  );

  const selectedPatient = requests.find(r => r.id === selectedId);

  useEffect(() => {
    if (selectedPatient) {
      setEditNotes(selectedPatient.notes || '');
      setEditResult(selectedPatient.result || '');
      setEditAmountGiven(selectedPatient.amountGiven || '');
    }
  }, [selectedId]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6 page-fade">
        <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl border border-stone-100 overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-2 bg-indigo-600"></div>
          <div className="p-10 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 mb-6">
                <Lock size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Espace Privé</h2>
              <p className="text-stone-500 text-sm italic">Accès réservé à Jean-François pour la gestion des soins.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-4">Code d'accès sécurisé</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl outline-none focus:border-indigo-300 focus:bg-white transition-all font-mono"
                    autoFocus
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl group"
              >
                <span>S'identifier</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="pt-6 border-t border-stone-50 flex items-center justify-center gap-2 text-[10px] text-stone-400 font-bold uppercase tracking-widest">
              <ShieldCheck size={12} className="text-emerald-500" />
              Connexion Chiffrée
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 space-y-8 page-fade min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-lg">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900">Tableau de Bord Sécurisé</h1>
            <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">Session active : Jean-François</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <div className="bg-stone-50 border border-stone-200 rounded-2xl px-4 py-2 flex items-center gap-3">
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase font-bold text-stone-400">Patients</span>
              <span className="text-lg font-serif font-bold text-indigo-600">{requests.length}</span>
            </div>
            <Users size={20} className="text-stone-300" />
          </div>
          <button 
            onClick={handleLogout}
            className="p-4 bg-red-50 text-red-600 rounded-2xl hover:bg-red-100 transition-colors" 
            title="Se déconnecter"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Liste des patients */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
            <div className="p-4 border-b border-stone-50 bg-stone-50/50 flex items-center gap-3">
              <Search size={16} className="text-stone-400" />
              <input 
                type="text" 
                placeholder="Rechercher un dossier..." 
                className="bg-transparent border-none outline-none text-sm w-full font-medium"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <div className="max-h-[600px] overflow-y-auto divide-y divide-stone-50">
              {filtered.length === 0 ? (
                <div className="p-10 text-center italic text-stone-400 text-sm">Aucun dossier trouvé</div>
              ) : (
                filtered.map((r) => (
                  <div 
                    key={r.id} 
                    onClick={() => setSelectedId(r.id)}
                    className={`p-5 cursor-pointer transition-all hover:bg-indigo-50/30 relative group ${selectedId === r.id ? 'bg-indigo-50/50 border-l-4 border-indigo-600' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-stone-900 text-sm">{r.firstName} {r.lastName}</span>
                      <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        r.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 
                        r.status === 'active' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                      }`}>
                        {r.status === 'completed' ? 'Fait' : r.status === 'active' ? 'En cours' : 'Nouveau'}
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-400 font-mono">{r.date}</p>
                    <ChevronRight size={14} className={`absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 group-hover:translate-x-1 transition-all ${selectedId === r.id ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Détails du dossier */}
        <div className="lg:col-span-8">
          {selectedPatient ? (
            <div className="bg-white rounded-[3rem] shadow-xl border border-stone-100 overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="p-8 bg-stone-900 text-white flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-serif font-bold">{selectedPatient.firstName} {selectedPatient.lastName}</h2>
                    <button onClick={() => deleteRequest(selectedPatient.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-stone-400 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2 text-white/60"><Mail size={14} /> {selectedPatient.email}</span>
                    <span className="flex items-center gap-2 text-white/60"><Phone size={14} /> {selectedPatient.phone}</span>
                    <span className="flex items-center gap-2 text-white/60"><Calendar size={14} /> Né(e) le {selectedPatient.birthDate}</span>
                  </div>
                </div>
                <select 
                  value={selectedPatient.status} 
                  onChange={(e) => setStatus(selectedPatient.id, e.target.value as any)}
                  className="bg-stone-800 text-white border-none rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest outline-none cursor-pointer"
                >
                  <option value="pending">Nouveau</option>
                  <option value="active">Soin actif</option>
                  <option value="completed">Terminé</option>
                </select>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">Diagnostic Patient</label>
                    <div className="p-6 bg-stone-50 rounded-[2rem] border border-stone-100 italic text-stone-700 leading-relaxed shadow-inner">
                      "{selectedPatient.explanation}"
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">Notes Privées</label>
                    <textarea 
                      value={editNotes}
                      onChange={(e) => setEditNotes(e.target.value)}
                      placeholder="Vos observations secrètes..."
                      className="w-full h-40 p-6 bg-stone-50 rounded-[2rem] border border-stone-100 outline-none focus:bg-white text-sm leading-relaxed resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Résultat final</label>
                    <textarea 
                      value={editResult}
                      onChange={(e) => setEditResult(e.target.value)}
                      placeholder="Comment s'est terminé le soin ?"
                      className="w-full h-40 p-6 bg-emerald-50/20 rounded-[2rem] border border-emerald-100 outline-none focus:bg-white text-sm italic resize-none"
                    />
                  </div>
                  <button 
                    onClick={() => updatePatientData(selectedPatient.id)}
                    className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl"
                  >
                    <Save size={20} />
                    Enregistrer en toute sécurité
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-white rounded-[3rem] border border-stone-100 border-dashed text-stone-400">
              <div className="p-8 bg-stone-50 rounded-full mb-4">
                <ShieldCheck size={48} className="opacity-20" />
              </div>
              <p className="font-serif italic text-lg">Sélectionnez un dossier protégé</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;