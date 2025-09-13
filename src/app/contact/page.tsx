"use client";

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: 'Please fill all fields', variant: 'destructive' });
      return;
    }
    setIsSending(true);
    try {
      // Try sending via EmailJS (browser SDK). This is the supported usage for EmailJS.
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error('EmailJS not configured in the browser');
      }

      const combinedMessage = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

      const templateParams = {
        // primary keys your template shows
        to_name: name,
        to_email: email,
        to_message: combinedMessage,
        // fallback/common keys in many EmailJS examples
        from_name: name,
        from_email: email,
        message: combinedMessage,
        // include a timestamp in case template uses it
        time: new Date().toLocaleString(),
      };
      // Initialize EmailJS SDK with public key (safe to do in browser)
      try {
        if (userId && typeof emailjs.init === 'function') {
          emailjs.init(userId);
        }
      } catch (initErr) {
      }

      const result = await emailjs.send(serviceId, templateId, templateParams, userId);

      // emailjs returns a numeric status and text
      if (result?.status !== 200) {
        console.error('EmailJS non-200 response', result);
        throw new Error('EmailJS send failed');
      }

      toast({ title: 'Message sent', description: 'We received your message and will reply shortly.' });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      // fallback: try server API if EmailJS browser call fails
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });
        const data = await res.json();
        if (res.ok && data?.success) {
          toast({ title: 'Message sent', description: 'We received your message and will reply shortly.' });
          setName('');
          setEmail('');
          setMessage('');
          setIsSending(false);
          return;
        }
      } catch (_) {
        // swallow fallback error and show original error below
      }

      toast({ title: 'Send failed', description: (err as any)?.message || 'Something went wrong. Try again later.', variant: 'destructive' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-6">Have a question or feedback? Send us a message and we'll get back to you.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" className="min-h-[140px]" />
          </div>

          <div className="text-right">
            <Button type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'}</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
