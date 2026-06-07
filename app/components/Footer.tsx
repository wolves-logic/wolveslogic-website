'use client';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: 'rgba(5,10,9,0.9)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '4rem 2.5rem 2.5rem',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <img
                src="/logo-symbol.png"
                alt="WolvesLogic"
                style={{ width: 40, height: 40, objectFit: 'contain' }}
              />
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: 19,
                color: '#FFFFFF',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
              }}>
                Wolves<span style={{ color: '#C4797A' }}>Logic</span>
              </span>
            </div>
            <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, lineHeight: 1.8, maxWidth: 240, fontFamily: 'DM Sans, sans-serif' }}>
              Empowering Minds. Enabling Careers.<br />A brand under Harviera IT Solutions LLP.
            </p>
            <div style={{ marginTop: 20, width: 36, height: 2, background: '#C4797A', borderRadius: 2 }} />
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, color: '#C4797A', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18 }}>Services</h4>
            {[
              ['Assignment Help', '/services/assignment-help'],
              ['IT Services for SMEs', '/services/it-services'],
              ['Job Support', '/services/job-support'],
              ['Career Guidance', '/services/career-guidance'],
              ['Online Tutoring', '/services/online-tutoring'],
            ].map(([label, href]) => (
              <Link key={label} href={href} style={{ display: 'block', color: 'rgba(240,237,232,0.5)', textDecoration: 'none', fontSize: 14, marginBottom: 10, fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#5A9B94'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(240,237,232,0.5)'}
              >{label}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, color: '#C4797A', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18 }}>Company</h4>
            {[['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Contact', '/contact']].map(([label, href]) => (
              <Link key={label} href={href} style={{ display: 'block', color: 'rgba(240,237,232,0.5)', textDecoration: 'none', fontSize: 14, marginBottom: 10, fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#5A9B94'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(240,237,232,0.5)'}
              >{label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, color: '#C4797A', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18 }}>Contact</h4>
            <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, marginBottom: 10, fontFamily: 'DM Sans, sans-serif' }}>+91 9959691347</p>
            <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, marginBottom: 10, fontFamily: 'DM Sans, sans-serif' }}>wolveslogicit@gmail.com</p>
            <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>📍 Hyderabad, Telangana, India — 500035</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(240,237,232,0.35)', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>© {year} WolvesLogic · Harviera IT Solutions LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
