'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Zalogowano pomyślnie!');
      router.push('/account/dashboard');
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) toast.error(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="font-display text-4xl font-semibold tracking-tighter">CheapGames</Link>
          <p className="text-white/60 mt-2">Zaloguj się do swojego konta</p>
        </div>

        <form onSubmit={handleLogin} className="glass rounded-3xl p-8 space-y-6 border border-white/10">
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
            {loading ? 'Logowanie...' : 'Zaloguj się'}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
            <div className="relative text-center"><span className="bg-[#0A0F1C] px-3 text-xs text-white/50">lub</span></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-4 rounded-3xl border border-white/20 hover:bg-white/5 transition-all text-sm font-medium"
          >
            Kontynuuj z Google
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-white/60">
          Nie masz konta?{' '}
          <Link href="/register" className="text-blue-400 hover:underline">Zarejestruj się</Link>
        </p>
      </div>
    </div>
  );
}
