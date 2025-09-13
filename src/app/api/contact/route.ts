<<<<<<< HEAD
// Contact API removed.
// Server-side EmailJS calls are blocked by EmailJS for non-browser apps.
// The contact UI now uses the client-side @emailjs/browser SDK. This file is intentionally left to return 410 if called.
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Contact endpoint removed. Use client-side EmailJS.' }, { status: 410 });
}
=======
// Contact API removed.
// Server-side EmailJS calls are blocked by EmailJS for non-browser apps.
// The contact UI now uses the client-side @emailjs/browser SDK. This file is intentionally left to return 410 if called.
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Contact endpoint removed. Use client-side EmailJS.' }, { status: 410 });
}
>>>>>>> 7a6a771ddf7a19a1d3fcb1a8b54ceadcac987e06
