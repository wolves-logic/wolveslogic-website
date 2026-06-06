'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2.5rem',
      background: scrolled ? 'rgba(15,18,20,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(45,74,71,0.4)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <img src="/logo.png" alt="WolvesLogic" style={{ height: 52, width: 52, objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%' }} />
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 20, color: '#FFFFFF', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Wolves<span style={{ color: '#C4797A' }}>Logic</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              color: '#7A9490', textDecoration: 'none', padding: '8px 20px',
              borderRadius: 6, fontSize: 15, fontWeight: 400,
              fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#F0EEF0'; (e.target as HTMLElement).style.background = 'rgba(45,74,71,0.25)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#7A9490'; (e.target as HTMLElement).style.background = 'transparent'; }}
            >{link.label}</Link>
          ))}
          <Link href="/contact" style={{
            background: '#C4797A', color: '#fff', textDecoration: 'none',
            padding: '9px 22px', borderRadius: 6, fontSize: 14, fontWeight: 600,
            fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em',
            marginLeft: 12, transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#D4908F'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#C4797A'}
          >Get Started</Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#7A9490', cursor: 'pointer', display: 'none', padding: 4 }} className="mobile-menu-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div style={{
          background: 'rgba(15,18,20,0.98)', borderTop: '1px solid rgba(45,74,71,0.3)',
          padding: '1rem 2.5rem 2rem',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              display: 'block', color: '#7A9490', textDecoration: 'none',
              padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif',
              borderBottom: '1px solid rgba(45,74,71,0.15)',
            }}>{link.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            display: 'block', marginTop: 20, background: '#C4797A',
            color: '#fff', textDecoration: 'none', padding: '13px 22px',
            borderRadius: 6, fontSize: 15, fontWeight: 600, textAlign: 'center',
            fontFamily: 'DM Sans, sans-serif',
          }}>Get Started</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
