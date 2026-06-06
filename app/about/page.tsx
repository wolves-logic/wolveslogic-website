'use client';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Award } from 'lucide-react';

const values = [
  { icon: Target, title: 'Mission', desc: 'To deliver quality, affordable services that empower students, professionals, and businesses to achieve their goals.' },
  { icon: Eye, title: 'Vision', desc: 'To be the most trusted brand for academic, IT, and career support across South Asia and beyond.' },
  { icon: Heart, title: 'Values', desc: 'Integrity, excellence, personalisation, and a genuine passion for helping people grow.' },
  { icon: Award, title: 'Promise', desc: 'Every engagement is treated with full professionalism — on time, high quality, fully confidential.' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(45,74,71,0.2)', top: -100, right: -100 }} />
        <div className="glow-orb" style={{ width: 250, height: 250, background: 'rgba(196,121,122,0.1)', bottom: 0, left: 0, animationDelay: '3s' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="fade-up-1">
            <span className="section-label">About Us</span>
            <div className="divider" />
          </div>
          <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 24, maxWidth: 720, lineHeight: 1.1 }}>
            The Story Behind{' '}
            <span style={{ color: '#C4797A', fontStyle: 'italic' }}>WolvesLogic</span>
          </h1>
          <p className="fade-up-3" style={{ color: '#7A9490', fontSize: 18, maxWidth: 580, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif' }}>
            A brand built from personal experience, real expertise, and a genuine desire to help others succeed.
          </p>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section style={{ padding: '2rem 2.5rem 6rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            {/* Avatar */}
            <div style={{ marginBottom: 28, position: 'relative', display: 'inline-block' }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg,#2D4A47,#C4797A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#fff' }}>ML</div>
              <div style={{ position: 'absolute', bottom: 4, right: -4, width: 20, height: 20, borderRadius: '50%', background: '#C4797A', border: '3px solid #0A0A0A' }} />
            </div>

            <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 6 }}>Mallachary Lingampet</h2>
            <p style={{ color: '#C4797A', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>Founder · WolvesLogic</p>

            <p style={{ color: '#7A9490', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              WolvesLogic was founded by Mallachary Lingampet — a passionate IT professional and educator who saw a gap in accessible, high-quality support for students and professionals alike.
            </p>
            <p style={{ color: '#7A9490', lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Under Harviera IT Solutions LLP, WolvesLogic operates as a freelancing brand delivering real value through expertise, trust, and commitment.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Company card */}
            <div style={{ background: '#1A2A28', border: '1px solid rgba(45,74,71,0.4)', borderRadius: 14, padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 3, background: 'linear-gradient(90deg, #2D4A47, transparent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>🏢</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, fontFamily: 'Playfair Display, serif' }}>Harviera IT Solutions LLP</h3>
              </div>
              <p style={{ color: '#7A9490', lineHeight: 1.85, fontSize: 15, fontFamily: 'DM Sans, sans-serif' }}>
                WolvesLogic operates as a freelancing brand under Harviera IT Solutions LLP — providing professional services with the trust and accountability of a structured organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section style={{ padding: '5rem 2.5rem 6rem', background: '#0F1614' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">Our Foundation</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginTop: 4 }}>
              What <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Drives Us</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '1.5rem' }}>
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 2, background: i % 2 === 0 ? 'linear-gradient(90deg,#C4797A,transparent)' : 'linear-gradient(90deg,#2D4A47,transparent)' }} />
                <div style={{ width: 44, height: 44, borderRadius: 10, background: i % 2 === 0 ? 'rgba(196,121,122,0.12)' : 'rgba(45,74,71,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={22} color={i % 2 === 0 ? '#C4797A' : '#3D6460'} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#7A9490', fontSize: 14, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2.5rem 6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(45,74,71,0.15)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginBottom: 16 }}>
            Ready to <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Work With Us?</span>
          </h2>
          <p style={{ color: '#7A9490', marginBottom: 32, fontFamily: 'DM Sans, sans-serif', fontSize: 16 }}>Let's talk about what we can build together.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 32px' }}>
            Get in Touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
