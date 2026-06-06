'use client';
import Link from 'next/link';
import { ArrowRight, BookOpen, Monitor, Briefcase, Compass, GraduationCap, CheckCircle } from 'lucide-react';

const services = [
  { icon: BookOpen, title: 'Assignment Help', desc: 'Expert academic support across all subjects — essays, dissertations, coding assignments, and more.' },
  { icon: Monitor, title: 'IT Services for SMEs', desc: 'End-to-end IT solutions for small and medium enterprises — infrastructure, cloud, and software.' },
  { icon: Briefcase, title: 'Job Support', desc: 'Real-time production support for IT professionals — sprint to delivery with confidence.' },
  { icon: Compass, title: 'Career Guidance', desc: 'Personalised roadmaps for IT career transitions, skill upgrades, and interview preparation.' },
  { icon: GraduationCap, title: 'Online Tutoring', desc: 'Corporate learning programs — tailored training delivered live for teams and individuals.' },
];

const stats = [
  { value: '500+', label: 'Students Helped' },
  { value: '50+', label: 'SME Clients' },
  { value: '200+', label: 'Professionals Supported' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const testimonials = [
  { name: 'Priya S.', role: 'MBA Student', text: 'WolvesLogic helped me submit my dissertation on time. Exceptional quality and support.' },
  { name: 'Rajan M.', role: 'IT Professional', text: 'The job support service saved my project. Available whenever I needed help.' },
  { name: 'Anita K.', role: 'Corporate Trainer', text: 'Their online tutoring sessions are engaging and very well structured for our team.' },
];

const highlights = [
  'Expert practitioners, not just tutors',
  'On-time delivery, every time',
  'Personalised approach for every client',
  'Confidential & professional service',
  'Affordable pricing for all budgets',
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '9rem 2.5rem 5rem' }}>
        {/* Orbs */}
        <div className="glow-orb" style={{ width: 600, height: 600, background: 'rgba(45,74,71,0.22)', top: -150, right: -150 }} />
        <div className="glow-orb" style={{ width: 350, height: 350, background: 'rgba(196,121,122,0.1)', bottom: 0, left: -80, animationDelay: '3s' }} />

        {/* Subtle noise texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(45,74,71,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(196,121,122,0.06) 0%, transparent 50%)',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="fade-up-1">
              <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(45,74,71,0.25)', border: '1px solid rgba(45,74,71,0.5)', padding: '5px 16px', borderRadius: 100, marginBottom: 32 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C4797A', display: 'inline-block' }} />
                Harviera IT Solutions LLP
              </span>
            </div>

            <h1 className="fade-up-2" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: 28, color: '#FFFFFF' }}>
              Empowering{' '}
              <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Minds.</span>
              <br />Enabling{' '}
              <span style={{ color: '#3D6460' }}>Careers.</span>
            </h1>

            <p className="fade-up-3" style={{ fontSize: 17, color: '#7A9490', maxWidth: 520, marginBottom: 44, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif' }}>
              From students to IT professionals to corporate teams — WolvesLogic delivers expert academic support, IT services, job support, career guidance, and online tutoring.
            </p>

            <div className="fade-up-4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/services" className="btn-primary" style={{ fontSize: 15 }}>
                Explore Services <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: 15 }}>
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Right: floating stats card */}
          <div className="fade-up-3" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(26,42,40,0.8)', border: '1px solid rgba(45,74,71,0.4)', borderRadius: 16, padding: '2rem', backdropFilter: 'blur(10px)' }}>
              <p style={{ color: '#4A6460', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', marginBottom: 20 }}>By the numbers</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {stats.map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#C4797A', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ color: '#4A6460', fontSize: 13, marginTop: 6, fontFamily: 'DM Sans, sans-serif' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(26,42,40,0.5)', border: '1px solid rgba(196,121,122,0.2)', borderRadius: 12, padding: '1.25rem 1.5rem', display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(196,121,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 18 }}>🐺</span>
              </div>
              <div>
                <p style={{ color: '#F0EEF0', fontSize: 14, fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>Free initial consultation</p>
                <p style={{ color: '#4A6460', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>No commitment required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '6rem 2.5rem', background: '#0D1117' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span className="section-label">What We Offer</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginTop: 4, maxWidth: 520 }}>
              Services Built for <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Every Stage</span>
            </h2>
            <p style={{ color: '#7A9490', marginTop: 14, maxWidth: 480, fontFamily: 'DM Sans, sans-serif', fontSize: 16 }}>
              Expert support across academics, technology, and career growth.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.5rem' }}>
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="card" style={{ cursor: 'default' }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: i % 2 === 0 ? 'rgba(196,121,122,0.12)' : 'rgba(45,74,71,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={22} color={i % 2 === 0 ? '#C4797A' : '#3D6460'} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#7A9490', fontSize: 15, lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link href="/services" className="btn-secondary">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US + TESTIMONIALS ── */}
      <section style={{ padding: '6rem 2.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <span className="section-label">Why WolvesLogic</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 18 }}>
              Logic Meets <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Excellence</span>
            </h2>
            <p style={{ color: '#7A9490', marginBottom: 32, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Founded by Mallachary Lingampet, WolvesLogic brings real-world expertise to every engagement — whether you are a student, an IT professional under pressure, or a corporate team seeking growth.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {highlights.map(point => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(196,121,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <CheckCircle size={12} color="#C4797A" />
                  </div>
                  <span style={{ color: '#7A9490', fontSize: 15, fontFamily: 'DM Sans, sans-serif' }}>{point}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary" style={{ marginTop: 36, fontSize: 15 }}>
              About Us <ArrowRight size={16} />
            </Link>
          </div>

          {/* Testimonials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: '#161B22', border: '1px solid rgba(45,74,71,0.4)', borderRadius: 12, padding: '1.75rem' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C4797A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ color: '#7A9490', fontSize: 14, lineHeight: 1.8, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(196,121,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontFamily: 'Playfair Display, serif', color: '#C4797A', fontWeight: 700 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#F0EEF0', fontFamily: 'DM Sans, sans-serif' }}>{t.name}</div>
                    <div style={{ color: '#4A6460', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2.5rem', background: '#0D1117', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(45,74,71,0.18)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: 'rgba(196,121,122,0.08)', top: '30%', right: '10%', animationDelay: '2s' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 20 }}>Start Today</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
            Ready to <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Get Started?</span>
          </h2>
          <p style={{ color: '#7A9490', marginBottom: 36, fontSize: 17, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            Talk to us today — it's free to connect and there's no commitment.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 36px' }}>
            Contact Us Now <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </>
  );
}
