'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const included = [
  'Production issue diagnosis & resolution',
  'Sprint task support & code walkthroughs',
  'Bug fixing & code review',
  'Client deliverable assistance',
  'Documentation & technical write-ups',
  'Interview preparation & mock rounds',
  'After-hours & weekend availability',
  'Support across Java, Python, .NET, SAP, and more',
  'Database queries, ETL, and data pipeline support',
  'L1/L2/L3 support for enterprise applications',
];

const audience = [
  { who: 'IT professionals under pressure', detail: 'Critical delivery coming up with no bandwidth to spare.' },
  { who: 'Consultants in complex projects', detail: 'Navigating client environments that demand immediate results.' },
  { who: 'SAP & ERP specialists', detail: 'Support for configuration, ABAP, and process-level issues.' },
  { who: 'Junior developers stepping up', detail: 'Gaining real-time guidance from seniors on live projects.' },
  { who: 'Remote IT contractors', detail: 'Needing a reliable technical partner for escalations and reviews.' },
];

const steps = [
  { num: '01', title: 'Share the Problem', desc: 'Reach out via WhatsApp or email with the issue — a brief, an error log, or just a voice note describing the situation.' },
  { num: '02', title: 'Quick Triage', desc: 'We assess the complexity and agree on an approach within hours, often faster. For critical issues, we start immediately.' },
  { num: '03', title: 'Hands-on Support', desc: 'We work alongside you — screen share, pair programming, or async review — whatever suits the situation.' },
  { num: '04', title: 'Resolution & Handover', desc: 'The issue is resolved, documented, and handed back to you with clear notes so you understand what was done.' },
];

const faqs = [
  { q: 'What technologies do you support?', a: 'We cover a broad range including Java, Python, JavaScript/TypeScript, .NET, SAP (ABAP, Basis, FICO, MM), SQL/NoSQL databases, and cloud platforms. Ask us if your stack is covered.' },
  { q: 'Can I get help outside business hours?', a: 'Yes. We offer after-hours and weekend support, particularly for production incidents and urgent deliverables. This is available on request.' },
  { q: 'Is this service confidential?', a: 'Absolutely. We treat all client code, project details, and company information with complete discretion. NDAs are available on request.' },
  { q: 'How is billing handled for job support?', a: 'We offer hourly rates, weekly engagement packages, or monthly retainer plans depending on your anticipated usage. Starting from ₹1,500/hour.' },
];

export default function JobSupportPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(196,121,122,0.12)', top: -100, right: -100 }} />
        <div className="glow-orb" style={{ width: 280, height: 280, background: 'rgba(45,74,71,0.1)', bottom: 0, left: 0, animationDelay: '2s' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#7A9490', fontSize: 14, textDecoration: 'none', marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
            ← Back to Services
          </Link>
          <div className="fade-up-1">
            <span className="section-label">Job Support</span>
            <div className="divider" />
          </div>
          <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 24, maxWidth: 780, lineHeight: 1.1 }}>
            Your Safety Net{' '}
            <span style={{ color: '#C4797A', fontStyle: 'italic' }}>in Production</span>
          </h1>
          <p className="fade-up-3" style={{ color: '#7A9490', fontSize: 18, maxWidth: 620, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', marginBottom: 36 }}>
            Real-time technical support for IT professionals when it matters most. We're your expert backup for production incidents, sprint crunches, and client deliverables.
          </p>
          <div className="fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get Immediate Help <ArrowRight size={17} /></Link>
            <a href="https://wa.me/919959691347" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Now</a>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section style={{ padding: '4rem 2.5rem', background: '#0C0F11' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <span className="section-label">About the Service</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 20 }}>What We Do</h2>
            <p style={{ color: '#7A9490', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Every IT professional faces moments where the pressure peaks and the deadline is immovable. A production bug surfaces an hour before a client demo. A sprint task turns out to be far more complex than estimated. A stakeholder asks for something urgent and your team has no bandwidth.
            </p>
            <p style={{ color: '#7A9490', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              WolvesLogic's Job Support service is built for exactly these moments. We act as your technical partner — available when you need us, skilled across a wide range of enterprise technologies, and committed to getting you across the line without compromising quality.
            </p>
            <p style={{ color: '#7A9490', lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Whether it's a one-off critical incident or ongoing weekly support, we adapt to your needs. Confidentiality is guaranteed — your code, your data, your reputation stay protected.
            </p>
          </div>

          <div>
            <span className="section-label">What's Included</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 20 }}>Full Coverage</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {included.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={15} color="#C4797A" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: '#7A9490', fontSize: 15, fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
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
            For Professionals Who <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Can't Afford to Fail</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem' }}>
            {audience.map(({ who, detail }) => (
              <div key={who} style={{ background: '#162022', border: '1px solid rgba(45,74,71,0.35)', borderRadius: 12, padding: '1.5rem' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#F0EEF0', marginBottom: 8 }}>{who}</h4>
                <p style={{ color: '#7A9490', fontSize: 14, lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: '5rem 2.5rem', background: '#0C0F11' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">How It Works</span>
          <div className="divider" />
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, marginTop: 4, marginBottom: 40 }}>
            Fast, <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Focused Response</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
            {steps.map(({ num, title, desc }) => (
              <div key={num} style={{ background: '#162022', border: '1px solid rgba(45,74,71,0.35)', borderRadius: 12, padding: '2rem' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 42, fontWeight: 800, color: 'rgba(196,121,122,0.15)', lineHeight: 1, marginBottom: 16 }}>{num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#7A9490', fontSize: 14, lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: '4rem 2.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: '#162022', border: '1px solid rgba(196,121,122,0.25)', borderRadius: 14, padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-label">Pricing</span>
              <div className="divider" />
              <h3 style={{ fontSize: 26, fontWeight: 700, marginTop: 4 }}>Starting from <span style={{ color: '#C4797A' }}>₹1,500/hour</span></h3>
              <p style={{ color: '#7A9490', fontSize: 15, marginTop: 10, fontFamily: 'DM Sans, sans-serif', maxWidth: 500, lineHeight: 1.7 }}>
                Flexible hourly, weekly package, or monthly retainer models. We scope each engagement fairly — you only pay for time actually used.
              </p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
              Discuss Your Needs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '4rem 2.5rem 6rem', background: '#0C0F11' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="section-label">FAQ</span>
          <div className="divider" />
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 36 }}>Common <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Questions</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ background: '#162022', border: '1px solid rgba(45,74,71,0.35)', borderRadius: 12, padding: '1.75rem' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#F0EEF0', marginBottom: 10 }}>{q}</h4>
                <p style={{ color: '#7A9490', fontSize: 15, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2.5rem 6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(196,121,122,0.1)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 16 }}>
            Stuck on Something? <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Let's Fix It.</span>
          </h2>
          <p style={{ color: '#7A9490', marginBottom: 36, fontSize: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            Reach out now — the sooner you contact us, the sooner we can get you unstuck.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
            Get Help Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
