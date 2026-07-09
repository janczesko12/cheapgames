'use client';

import { useState } from 'react';

const mockOrders = [
  { id: 'ORD-7842', email: 'jan.kowalski@gmail.com', total: 248, status: 'paid', date: '2026-07-08', items: 2 },
  { id: 'ORD-7841', email: 'anna.nowak@wp.pl', total: 69, status: 'completed', date: '2026-07-07', items: 1 },
  { id: 'ORD-7840', email: 'michal.wozniak@o2.pl', total: 318, status: 'processing', date: '2026-07-07', items: 3 },
];

export default function AdminOrders() {
  const [orders, setOrders] = useState(mockOrders);

  const updateStatus = (id: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <div className="text-blue-400 text-sm tracking-[3px]">ZAMÓWIENIA</div>
          <h1 className="font-display text-6xl font-semibold tracking-tighter">Zamówienia</h1>
        </div>
      </div>

      <div className="glass rounded-3xl overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead className="border-b border-white/10 text-left text-white/60">
            <tr>
              <th className="px-8 py-5 font-medium">Numer</th>
              <th className="px-8 py-5 font-medium">Klient</th>
              <th className="px-8 py-5 font-medium">Data</th>
              <th className="px-8 py-5 font-medium">Wartość</th>
              <th className="px-8 py-5 font-medium">Status</th>
              <th className="px-8 py-5 font-medium">Akcje</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-white/10 hover:bg-white/5">
                <td className="px-8 py-6 font-mono text-blue-400">{order.id}</td>
                <td className="px-8 py-6">{order.email}</td>
                <td className="px-8 py-6 text-white/70">{order.date}</td>
                <td className="px-8 py-6 font-semibold tabular-nums">{order.total} zł</td>
                <td className="px-8 py-6">
                  <select 
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-xl px-3 py-1 text-sm"
                  >
                    <option value="pending">Oczekujące</option>
                    <option value="paid">Opłacone</option>
                    <option value="processing">W realizacji</option>
                    <option value="completed">Zakończone</option>
                    <option value="cancelled">Anulowane</option>
                  </select>
                </td>
                <td className="px-8 py-6">
                  <button className="text-blue-400 hover:underline text-xs">Szczegóły</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
