import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = (await headers()).get('stripe-signature')!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // TODO: Zapisz zamówienie w bazie (Supabase)
    console.log('✅ Payment successful:', {
      email: session.customer_email,
      amount: session.amount_total,
      metadata: session.metadata,
    });

    // W przyszłości tutaj:
    // 1. Utwórz rekord w tabeli `orders`
    // 2. Wyślij email z kluczem (Resend)
    // 3. Pobierz dane od dostawcy
  }

  return NextResponse.json({ received: true });
}