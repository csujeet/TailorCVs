"use client";
import Link from 'next/link';
import { useState } from 'react';
import Loader from '@/components/ui/loader';

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const handleOpenApp = () => setLoading(true);
  const handleBuildResume = () => setLoading(true);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background/60 to-background/100 py-16 relative">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <Loader className="h-12 w-12 text-primary animate-spin" />
        </div>
      )}
      <div className="container mx-auto px-4 text-center">
        <header className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">TailorCVs</h1>
          <p className="text-lg text-muted-foreground mb-8">AI-powered resume tailoring, cover letters, and ATS optimization — get interview-ready in minutes.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/app" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:opacity-95" onClick={handleOpenApp}>Open App</Link>
            <Link href="/build" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-foreground hover:bg-secondary" onClick={handleBuildResume}>Build a Resume</Link>
          </div>
        </header>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Tailor Resumes</h3>
            <p className="text-sm text-muted-foreground">Upload your resume and a job description to produce an ATS-optimized version targeted to the role.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Generate Cover Letters</h3>
            <p className="text-sm text-muted-foreground">Create tailored cover letters that highlight the most relevant skills and accomplishments.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Resume Builder</h3>
            <p className="text-sm text-muted-foreground">No resume? Use our guided form to build a professional resume from scratch.</p>
          </div>
        </section>

        <section className="mt-12 max-w-2xl mx-auto text-center">
          <h4 className="text-lg font-semibold mb-2">How it works</h4>
          <p className="text-sm text-muted-foreground">We analyze the job description, extract keywords, and use AI to suggest edits and produce a tailored resume and cover letter you can download.</p>
        </section>

        <footer className="mt-16 text-center text-sm text-muted-foreground space-y-2">
          <p>Made with ❤️</p>
          <p className="flex items-center justify-center gap-4">
            <a className="underline" href="/about">About</a>
            <a className="underline" href="/blog">Blog</a>
            <a className="underline" href="/privacy">Privacy</a>
            <a className="underline" href="/terms">Terms</a>
            <a className="underline" href="/blog/how-to-tailor-resume">Guide</a>
            <a className="underline" href="/contact">Contact</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
