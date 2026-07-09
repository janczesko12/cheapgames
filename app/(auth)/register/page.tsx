'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Konto utworzone! Sprawdź swoją skrzynkę email.');
      router.push('/login');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="font-display text-4xl font-semibold tracking-tighter">CheapGames</Link>
          <p className="text-white/60 mt-2">Utwórz nowe konto</p>
        </div>

        <form onSubmit={handleRegister} className="glass rounded-3xl p-8 space-y-6 border border-white/10">
          <div>
            <label className="text-sm text-white/60 mb-2 block">Imię i nazwisko</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10"
              required
            />
          </div>

          <div>
            <label className="text-sm text-white/60 mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10"
              required
            />
          </div>

          <div>
            <label className="text-sm text-white/60 mb-2 block">Hasło</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="neon-button w-full py-4 rounded-3xl bg-white text-black font-semibold disabled:opacity-70"
          >
            {loading ? 'Tworzenie konta...' : 'Zarejestruj się'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-white/60">
          Masz już konto?{' '}
          <Link href="/login" className="text-blue-400 hover:underline">Zaloguj się</Link>
        </p>
      </div>
    </div>
  );
}
