export function OrderConfirmationEmail({ 
  orderNumber, 
  total, 
  items 
}: { 
  orderNumber: string; 
  total: number; 
  items: Array<{ name: string; price: number }>; 
}) {
  return `
    <div style="background:#0A0F1C; color:#fff; font-family:Inter, system-ui; padding:40px 20px; max-width:600px; margin:0 auto;">
      <h1 style="font-size:28px; font-weight:700; text-align:center;">Dziękujemy za zamówienie!</h1>
      <p style="text-align:center; color:#A1A1AA;">Numer zamówienia: <strong>#${orderNumber}</strong></p>

      <div style="background:rgba(255,255,255,0.05); border-radius:16px; padding:24px; margin:32px 0;">
        ${items.map(item => `
          <div style="display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08);">
            <span>${item.name}</span>
            <span style="font-weight:600;">${item.price} zł</span>
          </div>
        `).join('')}
        
        <div style="display:flex; justify-content:space-between; padding-top:20px; font-size:18px; font-weight:700;">
          <span>Razem</span>
          <span>${total} zł</span>
        </div>
      </div>

      <p style="text-align:center; color:#A1A1AA;">Klucze zostaną wysłane na Twój adres email w ciągu 30 sekund.</p>
    </div>
  `;
}
