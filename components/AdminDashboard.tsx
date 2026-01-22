import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, FileText, Trash2, CheckCircle, Clock, Search, 
  ShieldCheck, Download, Edit3, Save, ChevronRight, Activity, 
  Stethoscope, MessageSquare, History, PlusCircle, Users
} from 'lucide-react';

interface Request {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  explanation: string;
  date: string;
  status: 'pending' | 'active' | 'completed';
  notes?: string;
  result?: string;
}

const AdminDashboard: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [filter, setFilter] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [editResult, setEditResult] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('jf_admin_requests');
    if (saved) {
      setRequests(JSON.parse(saved));
    }
  }, []);

  const saveToLocal = (newRequests: Request[]) => {
    setRequests(newRequests);
    localStorage.setItem('jf_admin_requests', JSON.stringify(newRequests));
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
      r.id === id ? { ...r, notes: editNotes, result: editResult } : r
    );
    saveToLocal(next);
    alert("Dossier mis à jour avec succès.");
  };

  const setStatus = (id: string, newStatus: Request['status']) => {
    const next = requests.map(r => 
      r.id === id ? { ...r, status: newStatus } : r
    );
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
    }
  }, [selectedId]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 space-y-8 page-fade min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900">Suivi Patientèle</h1>
            <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">Jean-François • Alençon (61)</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <div className="bg-stone-50 border border-stone-200 rounded-2xl px-4 py-2 flex items-center gap-3">
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase font-bold text-stone-400">Total Patients</span>
              <span className="text-lg font-serif font-bold text-indigo-600">{requests.length}</span>
            </div>
            {/* Fix: Added missing Users icon from lucide-react */}
            <Users size={20} className="text-stone-300" />
          </div>
          <button onClick={() => {
            const dataStr = JSON.stringify(requests, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            const link = document.createElement('a');
            link.setAttribute('href', dataUri);
            link.setAttribute('download', 'sauvegarde_patients_jf.json');
            link.click();
          }} className="p-4 bg-stone-100 text-stone-600 rounded-2xl hover:bg-stone-200 transition-colors" title="Exporter les données">
            <Download size={20} />
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
                placeholder="Nom, email, pathologie..." 
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
                    <p className="text-[10px] text-stone-400 font-mono mb-2">{r.date}</p>
                    <p className="text-xs text-stone-600 line-clamp-1 italic">"{r.explanation}"</p>
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
              {/* Header Dossier */}
              <div className="p-8 bg-stone-900 text-white flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-serif font-bold">{selectedPatient.firstName} {selectedPatient.lastName}</h2>
                    <button onClick={() => deleteRequest(selectedPatient.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-stone-400 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Mail size={14} className="text-indigo-400" /> {selectedPatient.email}</span>
                    <span className="flex items-center gap-2"><Phone size={14} className="text-indigo-400" /> {selectedPatient.phone}</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-indigo-400" /> Arrivée le {selectedPatient.date}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                   <select 
                    value={selectedPatient.status} 
                    onChange={(e) => setStatus(selectedPatient.id, e.target.value as any)}
                    className="bg-stone-800 text-white border-none rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest outline-none cursor-pointer hover:bg-stone-700 transition-colors"
                   >
                     <option value="pending">Nouveau dossier</option>
                     <option value="active">Soin en cours</option>
                     <option value="completed">Soin terminé</option>
                   </select>
                </div>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-8">
                {/* Colonne Gauche : Diagnostic initial */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                      <Stethoscope size={14} /> Pathologie Initialement déclarée
                    </label>
                    <div className="p-6 bg-stone-50 rounded-[2rem] border border-stone-100 italic text-stone-700 leading-relaxed shadow-inner">
                      "{selectedPatient.explanation}"
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                      <MessageSquare size={14} /> Notes de suivi & Observations
                    </label>
                    <textarea 
                      value={editNotes}
                      onChange={(e) => setEditNotes(e.target.value)}
                      placeholder="Notez ici vos ressentis, le nombre de séances, les dates de rappel..."
                      className="w-full h-40 p-6 bg-stone-50 rounded-[2rem] border border-stone-100 outline-none focus:border-indigo-300 focus:bg-white transition-all text-sm leading-relaxed resize-none"
                    />
                  </div>
                </div>

                {/* Colonne Droite : Résultats */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-2">
                      <History size={14} /> Résultat obtenu & Conclusion
                    </label>
                    <textarea 
                      value={editResult}
                      onChange={(e) => setEditResult(e.target.value)}
                      placeholder="Décrivez le résultat final (douleur disparue, apaisement, peau nette...)"
                      className="w-full h-40 p-6 bg-emerald-50/30 rounded-[2rem] border border-emerald-100 outline-none focus:border-emerald-300 focus:bg-white transition-all text-sm leading-relaxed italic resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => updatePatientData(selectedPatient.id)}
                      className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl group"
                    >
                      <Save size={20} className="group-hover:scale-110 transition-transform" />
                      Enregistrer le dossier
                    </button>
                    <p className="text-[9px] text-center text-stone-400 mt-4 uppercase tracking-widest">Dernière modification locale enregistrée automatiquement</p>
                  </div>

                  <div className="p-6 bg-stone-50 rounded-3xl border border-stone-100 space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Actions Rapides</h4>
                    <div className="grid grid-cols-2 gap-2">
                       <a href={`mailto:${selectedPatient.email}`} className="flex items-center justify-center gap-2 p-3 bg-white border border-stone-200 rounded-xl text-[10px] font-bold hover:bg-stone-100 transition-colors uppercase">
                        <Mail size={12}/> Envoyer un mail
                       </a>
                       <a href={`tel:${selectedPatient.phone}`} className="flex items-center justify-center gap-2 p-3 bg-white border border-stone-200 rounded-xl text-[10px] font-bold hover:bg-stone-100 transition-colors uppercase">
                        <Phone size={12}/> Appeler
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-white rounded-[3rem] border border-stone-100 border-dashed text-stone-400 space-y-4">
              <div className="p-8 bg-stone-50 rounded-full">
                <Activity size={64} className="opacity-20" />
              </div>
              <p className="font-serif italic text-lg">Sélectionnez un patient dans la liste pour voir son dossier</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
