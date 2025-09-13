<<<<<<< HEAD
"use client";

import { useState, useEffect } from 'react';

export function getCookieConsent() {
  try {
  return localStorage.getItem('tailorcvs_cookie_consent');
  } catch (e) {
    return null;
  }
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
  const consent = localStorage.getItem('tailorcvs_cookie_consent');
      if (!consent) setShow(true);
    } catch (e) {
      setShow(true);
    }
  }, []);

  const acceptAll = () => {
  try { localStorage.setItem('tailorcvs_cookie_consent', 'all'); } catch (e) {}
    setShow(false);
  };

  const rejectAll = () => {
  try { localStorage.setItem('tailorcvs_cookie_consent', 'none'); } catch (e) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-card border p-4 rounded-md shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between z-50 gap-3">
      <div>
        <div className="font-semibold">We use cookies</div>
        <div className="text-sm text-muted-foreground">We use cookies to personalize content and ads, provide social media features and analyze our traffic. You can accept or reject non-essential cookies.</div>
      </div>
      <div className="ml-0 md:ml-4 flex gap-2">
        <button onClick={rejectAll} className="rounded-md border px-4 py-2">Reject</button>
        <button onClick={acceptAll} className="rounded-md bg-primary text-white px-4 py-2">Accept all</button>
      </div>
    </div>
  );
}
=======
"use client";

import { useState, useEffect } from 'react';

export function getCookieConsent() {
  try {
  return localStorage.getItem('tailorcvs_cookie_consent');
  } catch (e) {
    return null;
  }
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
  const consent = localStorage.getItem('tailorcvs_cookie_consent');
      if (!consent) setShow(true);
    } catch (e) {
      setShow(true);
    }
  }, []);

  const acceptAll = () => {
  try { localStorage.setItem('tailorcvs_cookie_consent', 'all'); } catch (e) {}
    setShow(false);
  };

  const rejectAll = () => {
  try { localStorage.setItem('tailorcvs_cookie_consent', 'none'); } catch (e) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-card border p-4 rounded-md shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between z-50 gap-3">
      <div>
        <div className="font-semibold">We use cookies</div>
        <div className="text-sm text-muted-foreground">We use cookies to personalize content and ads, provide social media features and analyze our traffic. You can accept or reject non-essential cookies.</div>
      </div>
      <div className="ml-0 md:ml-4 flex gap-2">
        <button onClick={rejectAll} className="rounded-md border px-4 py-2">Reject</button>
        <button onClick={acceptAll} className="rounded-md bg-primary text-white px-4 py-2">Accept all</button>
      </div>
    </div>
  );
}
>>>>>>> 7a6a771ddf7a19a1d3fcb1a8b54ceadcac987e06
