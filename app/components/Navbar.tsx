'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { href: '/services/assignment-help', label: 'Assignment Help' },
  { href: '/services/it-services', label: 'IT Services for SMEs' },
  { href: '/services/job-support', label: 'Job Support' },
  { href: '/services/career-guidance', label: 'Career Guidance' },
  { href: '/services/online-tutoring', label: 'Online Tutoring' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openDropdown = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setServicesOpen(true);
  };
  const closeDropdown = () => {
    timerRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2.5rem',
      background: scrolled ? '#0D1117' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(45,74,71,0.4)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <img src="/logo-symbol.png" alt="WolvesLogic" style={{width:48,height:48,borderRadius:'50%'}}/>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 20, color: '#FFFFFF', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Wolves<span style={{ color: '#C4797A' }}>Logic</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {navLinks.slice(0, 2).map(link => (
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

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button style={{
              display: 'flex', alignItems: 'center', gap: 5,
              color: '#7A9490', background: 'none', border: 'none',
              padding: '8px 20px', borderRadius: 6, fontSize: 15, fontWeight: 400,
              fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#F0EEF0'; (e.currentTarget as HTMLElement).style.background = 'rgba(45,74,71,0.25)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#7A9490'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Services
              <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {servicesOpen && (
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#161B22',
                  border: '1px solid rgba(196,121,122,0.2)',
                  borderRadius: 10, padding: '8px 0',
                  minWidth: 220,
                  boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                  animation: 'fadeUp 0.15s ease both',
                  zIndex: 200,
                }}>
                <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, background: '#161B22', borderLeft: '1px solid rgba(196,121,122,0.2)', borderTop: '1px solid rgba(196,121,122,0.2)', rotate: '45deg' }} />
                {serviceLinks.map(link => (
                  <Link key={link.href} href={link.href} onClick={() => setServicesOpen(false)} style={{
                    display: 'block', color: '#7A9490', textDecoration: 'none',
                    padding: '10px 20px', fontSize: 14,
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 400,
                    transition: 'all 0.15s', borderRadius: 0,
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C4797A'; (e.currentTarget as HTMLElement).style.background = 'rgba(196,121,122,0.08)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#7A9490'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >{link.label}</Link>
                ))}
                <div style={{ height: 1, background: 'rgba(45,74,71,0.3)', margin: '6px 12px' }} />
                <Link href="/services" onClick={() => setServicesOpen(false)} style={{
                  display: 'block', color: '#4A6460', textDecoration: 'none',
                  padding: '8px 20px', fontSize: 13,
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#7A9490'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#4A6460'}
                >View all services →</Link>
              </div>
            )}
          </div>

          {/* Contact link */}
          <Link href="/contact" style={{
            color: '#7A9490', textDecoration: 'none', padding: '8px 20px',
            borderRadius: 6, fontSize: 15, fontWeight: 400,
            fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = '#F0EEF0'; (e.target as HTMLElement).style.background = 'rgba(45,74,71,0.25)'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = '#7A9490'; (e.target as HTMLElement).style.background = 'transparent'; }}
          >Contact</Link>

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
          background: '#0D1117', borderTop: '1px solid rgba(45,74,71,0.3)',
          padding: '1rem 2.5rem 2rem',
        }}>
          <Link href="/" onClick={() => setOpen(false)} style={{ display: 'block', color: '#7A9490', textDecoration: 'none', padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid rgba(45,74,71,0.15)' }}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ display: 'block', color: '#7A9490', textDecoration: 'none', padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid rgba(45,74,71,0.15)' }}>About</Link>

          {/* Mobile services accordion */}
          <div style={{ borderBottom: '1px solid rgba(45,74,71,0.15)' }}>
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
              color: '#7A9490', background: 'none', border: 'none',
              padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif', cursor: 'pointer',
            }}>
              Services
              <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            {mobileServicesOpen && (
              <div style={{ paddingBottom: 8 }}>
                {serviceLinks.map(link => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
                    display: 'block', color: '#4A6460', textDecoration: 'none',
                    padding: '9px 0 9px 16px', fontSize: 15, fontFamily: 'DM Sans, sans-serif',
                    transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#C4797A'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#4A6460'}
                  >→ {link.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setOpen(false)} style={{ display: 'block', color: '#7A9490', textDecoration: 'none', padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid rgba(45,74,71,0.15)' }}>Contact</Link>
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
