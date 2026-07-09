'use client';

import { useState } from 'react';

interface DiscountCode {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minCartValue?: number;
  maxUses?: number;
  usedCount: number;
  expiresAt?: string;
  isActive: boolean;
}

const initialCodes: DiscountCode[] = [
  { id: '1', code: 'SUMMER25', type: 'percentage', value: 25, usedCount: 342, isActive: true },
  { id: '2', code: 'NEWUSER10', type: 'fixed', value: 10, minCartValue: 50, usedCount: 89, isActive: true },
];

export default function AdminDiscounts() {
  const [codes, setCodes] = useState<DiscountCode[]>(initialCodes);
  const [showForm, setShowForm] = useState(false);
  const [newCode, setNewCode] = useState({
    code: '',
    type: 'percentage' as const,
    value: 0,
    minCartValue: 0,
    maxUses: 100,
    expiresAt: '',
  });

  const addCode = () => {
    if (!newCode.code) return;

    const code: DiscountCode = {
      id: Date.now().toString(),
      code: newCode.code.toUpperCase(),
      type: newCode.type,
      value: newCode.value,
      minCartValue: newCode.minCartValue || undefined,
      maxUses: newCode.maxUses,
      usedCount: 0,
      expiresAt: newCode.expiresAt || undefined,
      isActive: true,
    };

    setCodes([...codes, code]);
    setShowForm(false);
    setNewCode({ code: '', type: 'percentage', value: 0, minCartValue: 0, maxUses: 100, expiresAt: '' });
  };

  const toggleActive = (id: string) => {
    setCodes(codes.map(c => 
      c.id === id ? { ...c, isActive: !c.isActive } : c
    ));
  };

  const deleteCode = (id: string) => {
    if (confirm('Na pewno usunąć ten kod?')) {
      setCodes(codes.filter(c => c.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <div className="text-blue-400 text-sm tracking-[3px]">MARKETING</div>
          <h1 className="font-display text-6xl font-semibold tracking-tighter">Kody rabatowe</h1>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold"
        >
          + Nowy kod
        </button>
      </div>

      {/* Formularz dodawania */}
      {showForm && (
        <div className="glass rounded-3xl p-8 mb-8 border border-white/10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-white/60 block mb-2">Kod</label>
              <input 
                value={newCode.code} 
                onChange={e => setNewCode({...newCode, code: e.target.value})} 
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10" 
                placeholder="SUMMER25" 
              />
            </div>
            <div>
              <label className="text-sm text-white/60 block mb-2">Typ</label>
              <select 
                value={newCode.type} 
                onChange={e => setNewCode({...newCode, type: e.target.value as any})}
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10"
              >
                <option value="percentage">Procentowy</option>
                <option value="fixed">Kwota stała</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-white/60 block mb-2">Wartość</label>
              <input 
                type="number" 
                value={newCode.value} 
                onChange={e => setNewCode({...newCode, value: Number(e.target.value)})} 
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10" 
              />
            </div>
            <div>
              <label className="text-sm text-white/60 block mb-2">Minimalna wartość koszyka</label>
              <input 
                type="number" 
                value={newCode.minCartValue} 
                onChange={e => setNewCode({...newCode, minCartValue: Number(e.target.value)})} 
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10" 
              />
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button onClick={addCode} className="px-8 py-3 rounded-2xl bg-white text-black font-semibold">Dodaj kod</button>
            <button onClick={() => setShowForm(false)} className="px-8 py-3 rounded-2xl border border-white/20">Anuluj</button>
          </div>
        </div>
      )}

      {/* Tabela kodów */}
      <div className="glass rounded-3xl overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead className="border-b border-white/10 text-white/60">
            <tr>
              <th className="px-8 py-5 text-left font-medium">Kod</th>
              <th className="px-8 py-5 text-left font-medium">Typ</th>
              <th className="px-8 py-5 text-left font-medium">Wartość</th>
              <th className="px-8 py-5 text-left font-medium">Użycia</th>
              <th className="px-8 py-5 text-left font-medium">Status</th>
              <th className="px-8 py-5"></th>
            </tr>
          </thead>
          <tbody>
            {codes.map((code) => (
              <tr key={code.id} className="border-b border-white/10 hover:bg-white/5">
                <td className="px-8 py-6 font-mono font-semibold">{code.code}</td>
                <td className="px-8 py-6">{code.type === 'percentage' ? 'Procent' : 'Kwota'}</td>
                <td className="px-8 py-6 font-semibold">{code.value}{code.type === 'percentage' ? '%' : ' zł'}</td>
                <td className="px-8 py-6 text-white/70">{code.usedCount} / {code.maxUses || '∞'}</td>
                <td className="px-8 py-6">
                  <button 
                    onClick={() => toggleActive(code.id)}
                    className={`px-4 py-1 rounded-full text-xs ${code.isActive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/10 text-white/50'}`}
                  >
                    {code.isActive ? 'Aktywny' : 'Nieaktywny'}
                  </button>
                </td>
                <td className="px-8 py-6 text-right">
                  <button onClick={() => deleteCode(code.id)} className="text-red-400 hover:text-red-500 text-xs">Usuń</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
