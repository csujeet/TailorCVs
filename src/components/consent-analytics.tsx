<<<<<<< HEAD
"use client";

import { useEffect, useState } from 'react';
import { getCookieConsent } from './cookie-banner';

export default function ConsentAnalytics({ measurementId }: { measurementId?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === 'all') setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const id = measurementId;
    if (!id) return;

    // avoid injecting twice
    if (document.querySelector(`script[data-ga4="${id}"]`)) return;

    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    s1.setAttribute('data-ga4', id);
    document.head.appendChild(s1);

    const s2 = document.createElement('script');
    s2.setAttribute('data-ga4', id);
    s2.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}');`;
    document.head.appendChild(s2);
  }, [enabled, measurementId]);

  return null;
}

export function enableAnalyticsRuntime() {
  try { localStorage.setItem('tailorcvs_cookie_consent', 'all'); } catch (e) {}
  try { window.location.reload(); } catch (e) {}
}
=======
"use client";

import { useEffect, useState } from 'react';
import { getCookieConsent } from './cookie-banner';

export default function ConsentAnalytics({ measurementId }: { measurementId?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === 'all') setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const id = measurementId;
    if (!id) return;

    // avoid injecting twice
    if (document.querySelector(`script[data-ga4="${id}"]`)) return;

    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    s1.setAttribute('data-ga4', id);
    document.head.appendChild(s1);

    const s2 = document.createElement('script');
    s2.setAttribute('data-ga4', id);
    s2.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}');`;
    document.head.appendChild(s2);
  }, [enabled, measurementId]);

  return null;
}

export function enableAnalyticsRuntime() {
  try { localStorage.setItem('tailorcvs_cookie_consent', 'all'); } catch (e) {}
  try { window.location.reload(); } catch (e) {}
}
>>>>>>> 7a6a771ddf7a19a1d3fcb1a8b54ceadcac987e06
