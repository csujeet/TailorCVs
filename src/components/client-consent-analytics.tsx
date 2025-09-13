"use client";

import ConsentAnalytics from './consent-analytics';

export default function ClientConsentAnalytics() {
  return <ConsentAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />;
}
