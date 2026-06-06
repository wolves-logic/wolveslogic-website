'use client';
import Link from 'next/link';
import { BookOpen, Monitor, Briefcase, Compass, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: BookOpen, accent: '#C4797A', title: 'Assignment Help',
    tagline: 'Academic excellence, delivered on time.',
    desc: 'We support students across undergraduate, postgraduate, and doctoral levels with high-quality academic work.',
    features: ['Essays & Reports', 'Dissertations & Theses', 'Coding Assignments', 'Case Studies', 'Research Papers', 'Presentations'],
    audience: 'Students at any level',
  },
  {
    icon: Monitor, accent: '#3D6460', title: 'IT Services for SMEs',
    tagline: 'Technology that scales with your business.',
    desc: 'Comprehensive IT support and consulting for small and medium enterprises looking to grow smarter.',
    features: ['Cloud Setup & Migration', 'Web & App Development', 'IT Infrastructure', 'Cybersecurity Basics', 'Software Consulting', 'Technical Support'],
    audience: 'Small & medium businesses',
  },
  {
    icon: Briefcase, accent: '#C4797A', title: 'Job Support',
    tagline: 'Your safety net in production.',
    desc: 'Real-time job support for IT professionals — from daily tasks to critical deliveries, we are right there with you.',
    features: ['Production Issue Resolution', 'Sprint Support', 'Code Review & Debugging', 'Interview Preparation', 'Client Deliverable Support', 'After-hours Availability'],
    audience: 'Working IT professionals',
  },
  {
    icon: Compass, accent: '#3D6460', title: 'Career Guidance',
    tagline: 'Navigate your IT career with clarity.',
    desc: 'Personalised mentoring to help you choose the right path, upskill, and land the job you deserve.',
    features: ['Career Roadmap Planning', 'Resume & LinkedIn Optimisation', 'Mock Interviews', 'Skill Gap Analysis', 'Domain Transition Guidance', 'Salary Negotiation Tips'],
    audience: 'Freshers & experienced professionals',
  },
  {
    icon: GraduationCap, accent: '#C4797A', title: 'Online Tutoring',
    tagline: 'Learning that fits your schedule.',
    desc: 'Live, personalised tutoring sessions for corporate employees and individuals who want to upskill fast.',
    features: ['1:1 Live Sessions', 'Batch Corporate Training', 'Custom Curriculum', 'Practical Hands-on Labs', 'Post-session Notes', 'Progress Tracking'],
    audience: 'Corporate teams & individuals',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="glow-orb" style={{ width: 550, height: 550, background: 'rgba(45,74,71,0.18)', top: -100, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: 'rgba(196,121,122,0.08)', bottom: 0, right: '10%', animationDelay: '2s' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto' }}>
          <div className="fade-up-1">
            <span className="section-label">What We Offer</span>
            <div className="divider" style={{ margin: '16px auto' }} />
          </div>
          <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 22, lineHeight: 1.1 }}>
            Our <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Services</span>
          </h1>
          <p className="fade-up-3" style={{ color: '#7A9490', fontSize: 18, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif' }}>
            Five focused service areas built to support students, professionals, and businesses at every stage of their journey.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section style={{ padding: '2rem 2.5rem 6rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {services.map(({ icon: Icon, accent, title, tagline, desc, features, audience }, idx) => (
            <div key={title} style={{
              background: '#1A2A28',
              border: `1px solid ${idx % 2 === 0 ? 'rgba(196,121,122,0.2)' : 'rgba(45,74,71,0.4)'}`,
              borderRadius: 16, padding: '2.5rem',
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: '2.5rem', alignItems: 'start',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = accent + '60'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = idx % 2 === 0 ? 'rgba(196,121,122,0.2)' : 'rgba(45,74,71,0.4)'}
            >
              {/* Accent stripe */}
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: 3, background: `linear-gradient(180deg, ${accent}, transparent)` }} />

              <div style={{ paddingLeft: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: `${accent}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} color={accent} />
                  </div>
                  <span style={{ background: `${accent}15`, color: accent, fontSize: 11, padding: '4px 12px', borderRadius: 100, fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase' }}>0{idx + 1}</span>
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>{title}</h2>
                <p style={{ color: accent, fontSize: 14, fontWeight: 500, marginBottom: 14, fontFamily: 'DM Sans, sans-serif' }}>{tagline}</p>
                <p style={{ color: '#7A9490', lineHeight: 1.85, fontSize: 15, fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#4A6460', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>For:</span>
                  <span style={{ color: '#F0EEF0', fontSize: 13, fontWeight: 500, fontFamily: 'DM Sans, sans-serif' }}>{audience}</span>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: 11, color: '#4A6460', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18, fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>What's Included</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
                  {features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <CheckCircle size={13} color={accent} style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ color: '#7A9490', fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28,
                  background: accent, color: '#fff', textDecoration: 'none',
                  padding: '11px 22px', borderRadius: 6, fontSize: 14, fontWeight: 600,
                  fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em',
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                >Enquire Now <ArrowRight size={15} /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2.5rem 6rem', textAlign: 'center', background: '#0F1614', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(196,121,122,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginBottom: 14 }}>
            Not Sure Which <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Service Fits?</span>
          </h2>
          <p style={{ color: '#7A9490', marginBottom: 32, fontSize: 17, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            Talk to us — we will guide you to the right solution at no cost.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 32px' }}>
            Contact Us <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
