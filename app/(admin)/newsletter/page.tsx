'use client';

import { useState } from 'react';

const mockCampaigns = [
  { id: '1', subject: 'Letnie promocje -50%', status: 'sent', sent: 12480, opens: 8720, date: '2026-06-28' },
  { id: '2', subject: 'Nowe gry na Steam', status: 'draft', sent: 0, opens: 0, date: '-' },
];

export default function AdminNewsletter() {
  const [campaigns] = useState(mockCampaigns);
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const sendCampaign = () => {
    if (!subject || !content) return alert('Uzupełnij temat i treść');
    alert('Kampania została zaplanowana do wysyłki (demo)');
    setShowForm(false);
    setSubject('');
    setContent('');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <div className="text-blue-400 text-sm tracking-[3px]">MARKETING</div>
          <h1 className="font-display text-6xl font-semibold tracking-tighter">Newsletter</h1>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold"
        >
          + Nowa kampania
        </button>
      </div>

      {showForm && (
        <div className="glass rounded-3xl p-8 mb-10 border border-white/10">
          <div className="space-y-6">
            <div>
              <label className="text-sm text-white/60 block mb-2">Temat maila</label>
              <input 
                value={subject} 
                onChange={e => setSubject(e.target.value)} 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10" 
                placeholder="Najlepsze promocje tego tygodnia" 
              />
            </div>
            <div>
              <label className="text-sm text-white/60 block mb-2">Treść HTML</label>
              <textarea 
                value={content} 
                onChange={e => setContent(e.target.value)} 
                rows={8}
                className="w-full px-6 py-4 rounded-3xl bg-white/5 border border-white/10 font-mono text-sm" 
                placeholder="<h1>Witaj!</h1>..."
              />
            </div>
            <div className="flex gap-4">
              <button onClick={sendCampaign} className="px-10 py-4 rounded-2xl bg-white text-black font-semibold">Wyślij kampanię</button>
              <button onClick={() => setShowForm(false)} className="px-10 py-4 rounded-2xl border border-white/20">Anuluj</button>
            </div>
          </div>
        </div>
      )}

      <div className="glass rounded-3xl overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead className="border-b border-white/10 text-white/60">
            <tr>
              <th className="px-8 py-5 text-left font-medium">Temat</th>
              <th className="px-8 py-5 text-left font-medium">Status</th>
              <th className="px-8 py-5 text-left font-medium">Wysłano</th>
              <th className="px-8 py-5 text-left font-medium">Otwarcia</th>
              <th className="px-8 py-5 text-left font-medium">Data</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.id} className="border-b border-white/10 hover:bg-white/5">
                <td className="px-8 py-6 font-medium">{c.subject}</td>
                <td className="px-8 py-6">
                  <span className={`px-4 py-1 rounded-full text-xs ${c.status === 'sent' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/10 text-white/60'}`}>
                    {c.status === 'sent' ? 'Wysłana' : 'Szkic'}
                  </span>
                </td>
                <td className="px-8 py-6 tabular-nums">{c.sent.toLocaleString()}</td>
                <td className="px-8 py-6 text-emerald-400 tabular-nums">{c.opens.toLocaleString()}</td>
                <td className="px-8 py-6 text-white/60">{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
