'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem'
    }}>
      <Link href="/">
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Fidans Online
        </span>
      </Link>
      <nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'inline-block',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {/* Hamburger lines */}
          <div style={{
            width: '24px',
            height: '2px',
            background: 'black',
            margin: '4px 0'
          }} />
          <div style={{
            width: '24px',
            height: '2px',
            background: 'black',
            margin: '4px 0'
          }} />
          <div style={{
            width: '24px',
            height: '2px',
            background: 'black',
            margin: '4px 0'
          }} />
        </button>
        <ul style={{
          display: isOpen ? 'block' : 'none',
          position: 'absolute',
          right: '1rem',
          top: '4rem',
          background: '#f4f4f4',
          padding: '1rem',
          listStyle: 'none'
        }}>
          <li><Link href="/">Anasayfa</Link></li>
          <li><Link href="/about">Hakkımızda</Link></li>
          <li><Link href="/services">Hizmetler</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/sponsors">Sponsorlar</Link></li>
        </ul>
      </nav>
    </header>
  );
}