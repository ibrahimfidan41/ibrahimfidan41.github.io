'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [responseMsg, setResponseMsg] = useState('');

  async function handleSubscribe(e: any) {
    e.preventDefault();
    setResponseMsg('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        setResponseMsg(data.message);
      } else {
        setResponseMsg(data.error || 'Something went wrong');
      }
      setEmail('');
    } catch (err: any) {
      setResponseMsg(err.message);
    }
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="E-posta adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Abone Ol
        </button>
      </form>
      {responseMsg && <p style={{ marginTop: '1rem', color: 'green' }}>{responseMsg}</p>}
    </div>
  );
}