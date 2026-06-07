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
    <nav className={scrolled ? 'glass-navbar' : ''} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2.5rem',
      background: scrolled ? undefined : 'transparent',
      borderBottom: scrolled ? undefined : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

        {/* Logo */}
        <Link href="/" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          textDecoration: 'none',
        }}>
          <img
            src="/logo-symbol.png"
            alt="WolvesLogic"
            style={{
              width: 48,
              height: 48,
              objectFit: 'contain',
              flexShrink: 0,
              verticalAlign: 'middle',
            }}
          />
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#F0EDE8',
            alignSelf: 'center',
            lineHeight: 1,
            paddingTop: 0,
            paddingBottom: 0,
            margin: 0,
            whiteSpace: 'nowrap',
          }}>
            Wolves<span style={{color:'#C4797A'}}>Logic</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {navLinks.slice(0, 2).map(link => (
            <Link key={link.href} href={link.href} style={{
              color: 'rgba(240,237,232,0.5)', textDecoration: 'none', padding: '8px 20px',
              borderRadius: 6, fontSize: 15, fontWeight: 400,
              fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#F0EDE8'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(240,237,232,0.5)'; (e.target as HTMLElement).style.background = 'transparent'; }}
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
              color: 'rgba(240,237,232,0.5)', background: 'none', border: 'none',
              padding: '8px 20px', borderRadius: 6, fontSize: 15, fontWeight: 400,
              fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#F0EDE8'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.5)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Services
              <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {servicesOpen && (
              <div
                className="glass-strong"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '8px 0',
                  minWidth: 220,
                  animation: 'fadeUp 0.15s ease both',
                  zIndex: 200,
                  overflow: 'hidden',
                }}>
                <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, background: 'rgba(255,255,255,0.06)', borderLeft: '1px solid rgba(255,255,255,0.1)', borderTop: '1px solid rgba(255,255,255,0.1)', rotate: '45deg' }} />
                {serviceLinks.map(link => (
                  <Link key={link.href} href={link.href} onClick={() => setServicesOpen(false)} style={{
                    display: 'block', color: 'rgba(240,237,232,0.5)', textDecoration: 'none',
                    padding: '10px 20px', fontSize: 14,
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 400,
                    transition: 'all 0.15s', borderRadius: 0,
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C4797A'; (e.currentTarget as HTMLElement).style.background = 'rgba(196,121,122,0.08)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.5)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >{link.label}</Link>
                ))}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '6px 12px' }} />
                <Link href="/services" onClick={() => setServicesOpen(false)} style={{
                  display: 'block', color: 'rgba(240,237,232,0.35)', textDecoration: 'none',
                  padding: '8px 20px', fontSize: 13,
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.5)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.35)'}
                >View all services →</Link>
              </div>
            )}
          </div>

          {/* Contact link */}
          <Link href="/contact" style={{
            color: 'rgba(240,237,232,0.5)', textDecoration: 'none', padding: '8px 20px',
            borderRadius: 6, fontSize: 15, fontWeight: 400,
            fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = '#F0EDE8'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(240,237,232,0.5)'; (e.target as HTMLElement).style.background = 'transparent'; }}
          >Contact</Link>

          <Link href="/contact" className="btn-glass-solid" style={{
            padding: '9px 22px', borderRadius: 6, fontSize: 14,
            letterSpacing: '0.04em', marginLeft: 12, boxShadow: 'none',
          }}>Get Started</Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'rgba(240,237,232,0.5)', cursor: 'pointer', display: 'none', padding: 4 }} className="mobile-menu-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="glass-navbar" style={{
          padding: '1rem 2.5rem 2rem',
        }}>
          <Link href="/" onClick={() => setOpen(false)} style={{ display: 'block', color: 'rgba(240,237,232,0.5)', textDecoration: 'none', padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ display: 'block', color: 'rgba(240,237,232,0.5)', textDecoration: 'none', padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>About</Link>

          {/* Mobile services accordion */}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
              color: 'rgba(240,237,232,0.5)', background: 'none', border: 'none',
              padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif', cursor: 'pointer',
            }}>
              Services
              <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            {mobileServicesOpen && (
              <div style={{ paddingBottom: 8 }}>
                {serviceLinks.map(link => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
                    display: 'block', color: 'rgba(240,237,232,0.35)', textDecoration: 'none',
                    padding: '9px 0 9px 16px', fontSize: 15, fontFamily: 'DM Sans, sans-serif',
                    transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#C4797A'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.35)'}
                  >→ {link.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setOpen(false)} style={{ display: 'block', color: 'rgba(240,237,232,0.5)', textDecoration: 'none', padding: '14px 0', fontSize: 16, fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Contact</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-glass-solid" style={{
            display: 'flex', marginTop: 20, padding: '13px 22px',
            borderRadius: 6, fontSize: 15, justifyContent: 'center', boxShadow: 'none',
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
