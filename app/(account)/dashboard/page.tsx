'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountDashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center">Ładowanie...</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <div className="text-sm text-blue-400 tracking-widest">PANEL UŻYTKOWNIKA</div>
          <h1 className="font-display text-5xl font-semibold tracking-tighter">Witaj, {user.user_metadata?.full_name || 'Użytkowniku'}!</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="px-6 py-2.5 rounded-2xl border border-white/20 text-sm hover:bg-white/5"
        >
          Wyloguj się
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Karty szybkiego dostępu */}
        <a href="/account/orders" className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all">
          <div className="text-4xl mb-4">📦</div>
          <div className="font-semibold text-2xl">Moje zamówienia</div>
          <div className="text-white/50 mt-1">Historia zakupów i statusy</div>
        </a>

        <a href="/account/favorites" className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all">
          <div className="text-4xl mb-4">❤️</div>
          <div className="font-semibold text-2xl">Ulubione</div>
          <div className="text-white/50 mt-1">Zapisane produkty</div>
        </a>

        <a href="/account/settings" className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all">
          <div className="text-4xl mb-4">⚙️</div>
          <div className="font-semibold text-2xl">Ustawienia konta</div>
          <div className="text-white/50 mt-1">Hasło, email, newsletter</div>
        </a>
      </div>
    </div>
  );
}
