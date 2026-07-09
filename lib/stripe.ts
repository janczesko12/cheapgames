import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});

export async function createCheckoutSession({
  items,
  userId,
  email,
  discountCode,
}: {
  items: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  userId?: string;
  email: string;
  discountCode?: string;
}) {
  const lineItems = items.map((item) => ({
    price_data: {
      currency: 'pln',
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'blik', 'p24'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
    customer_email: email,
    metadata: {
      userId: userId || '',
      discountCode: discountCode || '',
    },
  });

  return session;
}