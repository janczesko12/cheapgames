export function WelcomeEmail({ name }: { name: string }) {
  return `
    <div style="background:#0A0F1C; color:#fff; font-family:Inter, system-ui; padding:40px 20px; max-width:600px; margin:0 auto;">
      <div style="text-align:center; margin-bottom:40px;">
        <div style="display:inline-block; background:linear-gradient(#3B82F6, #22D3EE); color:#000; width:56px; height:56px; border-radius:16px; line-height:56px; font-size:28px; font-weight:700;">CG</div>
      </div>

      <h1 style="font-size:32px; font-weight:700; text-align:center; margin:0 0 20px;">Witaj w CheapGames, ${name}!</h1>
      
      <p style="font-size:16px; line-height:1.6; text-align:center; color:#A1A1AA; max-width:420px; margin:0 auto;">
        Dziękujemy za rejestrację. Od teraz możesz kupować najtańsze gry i oprogramowanie z natychmiastową dostawą.
      </p>

      <div style="text-align:center; margin:40px 0;">
        <a href="https://cheapgames.pl/products" 
           style="background:#fff; color:#000; padding:14px 42px; border-radius:9999px; text-decoration:none; font-weight:600; display:inline-block;">
          Przeglądaj ofertę
        </a>
      </div>

      <div style="text-align:center; font-size:12px; color:#52525B;">
        © ${new Date().getFullYear()} CheapGames.pl
      </div>
    </div>
  `;
}
