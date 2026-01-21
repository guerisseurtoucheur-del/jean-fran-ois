
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, FileText, Trash2, CheckCircle, Clock, Search, ShieldLock, Download } from 'lucide-react';

interface Request {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  explanation: string;
  date: string;
  status: 'pending' | 'completed';
}

const AdminDashboard: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [filter, setFilter] = useState('');

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
    if (window.confirm('Supprimer définitivement cette demande ?')) {
      saveToLocal(requests.filter(r => r.id !== id));
    }
  };

  const toggleStatus = (id: string) => {
    saveToLocal(requests.map(r => 
      r.id === id ? { ...r, status: r.status === 'pending' ? 'completed' : 'pending' } : r
    ));
  };

  const exportData = () => {
    const dataStr = JSON.stringify(requests, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'demandes_jean_francois.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const filtered = requests.filter(r => 
    `${r.firstName} ${r.lastName}`.toLowerCase().includes(filter.toLowerCase()) ||
    r.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-8 page-fade min-h-screen bg-stone-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-stone-900 text-white rounded-2xl">
            <ShieldLock size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold">Espace Privé Jean-François</h1>
            <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">Gestion des demandes de soins</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button onClick={exportData} className="flex items-center gap-2 px-6 py-3 border border-stone-200 rounded-xl text-stone-600 hover:bg-white transition-all font-bold text-sm">
            <Download size={18} /> Exporter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex items-center gap-4">
          <Search size={20} className="text-stone-400" />
          <input 
            type="text" 
            placeholder="Rechercher un patient par nom ou email..." 
            className="flex-1 outline-none text-stone-800 bg-transparent"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                <th className="px-8 py-4">Patient / Contact</th>
                <th className="px-8 py-4">Demande</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Statut</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-8 py-20 text-center text-stone-400 italic">
                    Aucune demande enregistrée pour le moment.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-stone-50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-stone-900">{r.firstName} {r.lastName}</span>
                        <div className="flex flex-col text-xs text-stone-500 mt-1">
                          <span className="flex items-center gap-1"><Mail size={10}/> {r.email}</span>
                          <span className="flex items-center gap-1"><Phone size={10}/> {r.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm text-stone-600 max-w-xs line-clamp-2 italic">"{r.explanation}"</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs text-stone-400 font-mono">{r.date}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        r.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                      }`}>
                        {r.status === 'completed' ? 'Traité' : 'À faire'}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => toggleStatus(r.id)}
                          className={`p-2 rounded-lg transition-all ${r.status === 'completed' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}
                          title={r.status === 'completed' ? 'Marquer comme à faire' : 'Marquer comme traité'}
                        >
                          <CheckCircle size={18} />
                        </button>
                        <button 
                          onClick={() => deleteRequest(r.id)}
                          className="p-2 bg-red-50 text-red-600 rounded-lg"
                          title="Supprimer"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
