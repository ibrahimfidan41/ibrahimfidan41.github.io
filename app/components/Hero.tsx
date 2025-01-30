'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      background: '#e9ecef',
      padding: '2rem 1rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Dijital Dönüşüm için Hazır mısınız?
      </h1>
      <p style={{ maxWidth: '600px' }}>
        Fidans Online ile e-ticaret, blockchain ve yapay zekâ çözümlerini tek çatı altında keşfedin!
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Image
          src="/hero.jpg"
          alt="Hero"
          width={800}
          height={400}
          priority
        />
      </div>
    </section>
  );
}