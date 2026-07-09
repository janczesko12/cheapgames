import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/emails/send';
import { WelcomeEmail } from '@/emails/templates/welcome';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email jest wymagany' }, { status: 400 });
    }

    // TODO: Zapisz do bazy (Supabase newsletter_subscribers)

    // Wyślij email powitalny
    await sendEmail({
      to: email,
      subject: 'Witaj w CheapGames.pl!',
      html: WelcomeEmail({ name: name || 'Graczu' }),
    });

    return NextResponse.json({ success: true, message: 'Zapisano do newslettera!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 });
  }
}
