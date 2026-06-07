'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';

const included = [
  'IT career roadmap planning (domain selection, specialisation)',
  'Resume writing & ATS optimisation',
  'LinkedIn profile overhaul',
  'Mock technical & HR interview sessions',
  'Skill gap analysis & learning plan',
  'Domain transition guidance (e.g. manual QA → automation)',
  'Salary benchmarking & negotiation coaching',
  'Certification roadmap advice (AWS, Azure, PMP, Scrum, etc.)',
  'Job search strategy & application review',
  'Personal branding for IT professionals',
];

const audience = [
  { who: 'Fresh IT graduates', detail: 'Navigating the job market for the first time with clarity and confidence.' },
  { who: 'Mid-career professionals', detail: 'Seeking a promotion, role change, or move into a higher-paying domain.' },
  { who: 'Career switchers', detail: 'Transitioning from non-IT backgrounds or switching IT specialisations.' },
  { who: 'Professionals returning to work', detail: 'Re-entering the workforce after a career break or relocation.' },
  { who: 'Aspiring consultants', detail: 'Building a strong personal brand and preparing for senior-level roles.' },
];

const steps = [
  { num: '01', title: 'Career Assessment', desc: 'We begin with a deep-dive session to understand your background, skills, goals, and challenges — no generic advice.' },
  { num: '02', title: 'Personalised Roadmap', desc: 'Based on your profile, we craft a step-by-step plan: what to learn, what to fix, and what opportunities to target.' },
  { num: '03', title: 'Skill & Profile Building', desc: 'We help you close skill gaps, strengthen your resume and LinkedIn, and prepare you for interviews with mock sessions.' },
  { num: '04', title: 'Ongoing Mentoring', desc: "Career growth doesn't happen overnight. We stay available to review applications, debrief interviews, and keep you on track." },
];

const faqs = [
  { q: 'I have no IT background — can you still help me transition into IT?', a: 'Yes. Career transitions into IT are one of our specialisms. We assess your transferable skills and map out a realistic, practical path into roles like QA, business analysis, data, or IT support.' },
  { q: 'How is this different from just Googling career advice?', a: 'Generic advice ignores your specific background, market, and goals. We give you tailored, actionable guidance based on real industry experience — not blog posts.' },
  { q: 'Can you help me negotiate a better salary?', a: 'Yes. We cover salary benchmarking for your role and market, plus coaching on how to handle offer negotiations professionally and confidently.' },
  { q: 'How many sessions does the programme involve?', a: 'It depends on your needs. A focused resume + interview prep package might be 2–3 sessions. A full career transition programme could span several weeks with regular check-ins.' },
];

export default function CareerGuidancePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(61,122,116,0.18)', top: -100, right: -100 }} />
        <div className="glow-orb" style={{ width: 280, height: 280, background: 'rgba(196,121,122,0.08)', bottom: 0, left: 0, animationDelay: '2.5s' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(240,237,232,0.5)', fontSize: 14, textDecoration: 'none', marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
              ← Back to Services
            </Link>
            <div className="fade-up-1">
              <span className="section-label">Career Guidance</span>
              <div className="divider" />
            </div>
            <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 24, maxWidth: 780, lineHeight: 1.1 }}>
              Navigate Your IT Career{' '}
              <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>with Clarity</span>
            </h1>
            <p className="fade-up-3" style={{ color: 'rgba(240,237,232,0.5)', fontSize: 18, maxWidth: 620, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', marginBottom: 36 }}>
              Personalised mentoring that cuts through the noise. Whether you're just starting out or pivoting mid-career, we help you build the right plan, the right profile, and the right mindset to land the role you deserve.
            </p>
            <div className="fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ background: '#3D7A74' }}>Book a Career Session <ArrowRight size={17} /></Link>
              <a href="https://wa.me/919959691347" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
            </div>
          </div>

          <div className="fade-up-3">
            <div style={{
              position: 'relative',
              height: 'clamp(300px, 50vh, 520px)',
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <Image
                src="/images/career-guidance.jpg"
                alt="Mentor providing personalised IT career guidance and mentoring through WolvesLogic"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,15,14,0) 50%, rgba(10,15,14,0.6) 100%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section style={{ padding: '4rem 2.5rem', background: '#0A0F0E' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <span className="section-label">About the Service</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 20 }}>What We Do</h2>
            <p style={{ color: 'rgba(240,237,232,0.5)', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              The IT industry moves fast, and career paths within it are rarely linear. Without the right guidance, talented people get stuck in the wrong roles, underpaid for their skills, or lost in a sea of certifications that don't move the needle. WolvesLogic's Career Guidance service exists to change that.
            </p>
            <p style={{ color: 'rgba(240,237,232,0.5)', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              We take a mentor-first approach — not generic coaching, but genuine 1:1 engagement with someone who has navigated the IT industry themselves. We look at where you are, where you want to be, and build a concrete plan to get there.
            </p>
            <p style={{ color: 'rgba(240,237,232,0.5)', lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              From your first resume to your first leadership role — we cover the full career arc, with honest advice at every step.
            </p>
          </div>

          <div>
            <span className="section-label">What's Included</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 20 }}>Full Coverage</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {included.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={15} color="#3D7A74" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: 'rgba(240,237,232,0.5)', fontSize: 15, fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section style={{ padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">Who It's For</span>
          <div className="divider" />
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, marginTop: 4, marginBottom: 36 }}>
            For Professionals at <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>Every Stage</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem' }}>
            {audience.map(({ who, detail }) => (
              <div key={who} style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(61,122,116,0.4)', borderRadius: 12, padding: '1.5rem' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#F0EDE8', marginBottom: 8 }}>{who}</h4>
                <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: '5rem 2.5rem', background: '#0A0F0E' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">How It Works</span>
          <div className="divider" />
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, marginTop: 4, marginBottom: 40 }}>
            Your <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>Mentoring Journey</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
            {steps.map(({ num, title, desc }) => (
              <div key={num} style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(61,122,116,0.35)', borderRadius: 12, padding: '2rem' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 42, fontWeight: 800, color: 'rgba(61,122,116,0.2)', lineHeight: 1, marginBottom: 16 }}>{num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: '4rem 2.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(61,122,116,0.35)', borderRadius: 14, padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-label">Pricing</span>
              <div className="divider" />
              <h3 style={{ fontSize: 26, fontWeight: 700, marginTop: 4 }}>Starting from <span style={{ color: '#3D7A74' }}>₹1,000/session</span></h3>
              <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 15, marginTop: 10, fontFamily: 'DM Sans, sans-serif', maxWidth: 500, lineHeight: 1.7 }}>
                Single sessions available or multi-session packages for a complete career transformation programme. First call is always free.
              </p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px', background: '#3D7A74' }}>
              Book Free First Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '4rem 2.5rem 6rem', background: '#0A0F0E' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="section-label">FAQ</span>
          <div className="divider" />
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 36 }}>Common <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>Questions</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(61,122,116,0.35)', borderRadius: 12, padding: '1.75rem' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#F0EDE8', marginBottom: 10 }}>{q}</h4>
                <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 15, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2.5rem 6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(61,122,116,0.12)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 16 }}>
            Your Next Role <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>Starts Here</span>
          </h2>
          <p style={{ color: 'rgba(240,237,232,0.5)', marginBottom: 36, fontSize: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            Book a free first session and let's map out your career path together.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px', background: '#3D7A74' }}>
            Book a Session <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
