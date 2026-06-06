'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BookOpen, ExternalLink } from 'lucide-react';

const included = [
  'Essays & argumentative writing',
  'Dissertations & theses (all levels)',
  'Coding & programming assignments',
  'Case studies & business reports',
  'Research papers & literature reviews',
  'Presentations & slide decks',
  'Online exam support',
  'Proofreading & editing',
  'Referencing (APA, Harvard, MLA, Chicago)',
  'Turnitin-safe, plagiarism-free work',
];

const audience = [
  { who: 'Undergraduate students', detail: 'Struggling with coursework, essays, or deadlines.' },
  { who: 'Postgraduate & MBA students', detail: 'Needing expert help with complex dissertations or research.' },
  { who: 'Doctoral researchers', detail: 'Requiring support with literature reviews or analysis chapters.' },
  { who: 'International students', detail: 'Bridging language gaps while maintaining academic quality.' },
  { who: 'Working professionals', detail: 'Balancing part-time study with a full-time career.' },
];

const steps = [
  { num: '01', title: 'Share Your Brief', desc: 'Send us your assignment brief, deadline, subject area, and any specific requirements via WhatsApp or email.' },
  { num: '02', title: 'Get a Quote', desc: 'We assess the scope and send you a transparent, no-obligation quote within a few hours.' },
  { num: '03', title: 'Expert Assignment', desc: 'Your work is assigned to a subject-matter expert with relevant academic or industry experience.' },
  { num: '04', title: 'Delivered on Time', desc: 'You receive the completed, proofread work before your deadline with free revisions if needed.' },
];

const faqs = [
  { q: 'Is the work original and plagiarism-free?', a: 'Absolutely. Every piece is written from scratch to your brief and passes plagiarism checks. We never resell or recycle work.' },
  { q: 'What subjects do you cover?', a: 'We cover a wide range — Business, IT, Engineering, Healthcare, Law, Social Sciences, and more. If you are unsure, just ask.' },
  { q: 'How quickly can you deliver?', a: 'We handle urgent orders from 24 hours up to standard multi-week timelines. Rush fees may apply for very short deadlines.' },
  { q: 'Is my information kept confidential?', a: 'Yes. We operate with strict confidentiality — your name, institution, and assignment details are never shared with third parties.' },
];

export default function AssignmentHelpPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(196,121,122,0.14)', top: -100, right: -100 }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: 'rgba(45,74,71,0.1)', bottom: 0, left: 0, animationDelay: '3s' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#7A9490', fontSize: 14, textDecoration: 'none', marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
            ← Back to Services
          </Link>
          <div className="fade-up-1">
            <span className="section-label">Assignment Help</span>
            <div className="divider" />
          </div>
          <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 24, maxWidth: 780, lineHeight: 1.1 }}>
            Academic Excellence,{' '}
            <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Delivered on Time</span>
          </h1>
          <p className="fade-up-3" style={{ color: '#7A9490', fontSize: 18, maxWidth: 620, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', marginBottom: 36 }}>
            Expert academic support for students at every level — from first-year essays to doctoral dissertations. We combine subject knowledge with a genuine commitment to your success.
          </p>
          <div className="fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get a Free Quote <ArrowRight size={17} /></Link>
            <a href="https://wa.me/919959691347" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* ── SPECIALISED PLATFORM BANNER ── */}
      <section style={{ padding: '0 2.5rem 3rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(196,121,122,0.12) 0%, rgba(196,121,122,0.06) 100%)',
            border: '1px solid rgba(196,121,122,0.45)',
            borderRadius: 16, padding: '2.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '2rem', flexWrap: 'wrap',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 3, background: 'linear-gradient(90deg, #C4797A, #D4908F, transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(196,121,122,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <BookOpen size={26} color="#C4797A" />
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 8, fontFamily: 'Playfair Display, serif' }}>
                  Looking for Dedicated Assignment Help?
                </h3>
                <p style={{ color: '#D4908F', fontSize: 15, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, maxWidth: 560 }}>
                  Visit our specialised platform for expert academic assistance — a dedicated space built exclusively for students seeking high-quality assignment support.
                </p>
              </div>
            </div>
            <a href="https://www.originalassignmenthelp.com" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0,
              background: '#C4797A', color: '#fff', textDecoration: 'none',
              padding: '13px 26px', borderRadius: 8, fontSize: 15, fontWeight: 700,
              fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em',
              boxShadow: '0 4px 24px rgba(196,121,122,0.3)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#D4908F'; el.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#C4797A'; el.style.transform = 'translateY(0)'; }}
            >Visit OriginalAssignmentHelp.com <ExternalLink size={16} /></a>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section style={{ padding: '1rem 2.5rem 4rem', background: '#0D1117' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <span className="section-label">About the Service</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 20 }}>What We Do</h2>
            <p style={{ color: '#7A9490', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Academic pressure is real — tight deadlines, complex topics, and the constant need to perform at a high level. WolvesLogic's Assignment Help service is built to take that pressure off, pairing you with experts who understand your subject deeply.
            </p>
            <p style={{ color: '#7A9490', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Whether you're navigating a challenging dissertation topic, struggling with programming logic, or simply short on time, our team delivers work that meets your institution's standards — on time, every time. We don't just write; we explain, support, and help you understand the material.
            </p>
            <p style={{ color: '#7A9490', lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Every submission is 100% original, fully referenced, and crafted to your specific brief. We treat your academic integrity with the same seriousness you do.
            </p>
          </div>

          {/* What's included */}
          <div>
            <span className="section-label">What's Included</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 20 }}>Full Coverage</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {included.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckCircle size={15} color="#C4797A" style={{ flexShrink: 0 }} />
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
            Built for <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Every Student</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem' }}>
            {audience.map(({ who, detail }) => (
              <div key={who} style={{ background: '#161B22', border: '1px solid rgba(45,74,71,0.35)', borderRadius: 12, padding: '1.5rem' }}>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: '#F0EEF0', marginBottom: 8 }}>{who}</h4>
                <p style={{ color: '#7A9490', fontSize: 14, lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: '5rem 2.5rem', background: '#0D1117' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">How It Works</span>
          <div className="divider" />
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, marginTop: 4, marginBottom: 40 }}>
            Simple, <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Transparent Process</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
            {steps.map(({ num, title, desc }) => (
              <div key={num} style={{ background: '#161B22', border: '1px solid rgba(45,74,71,0.35)', borderRadius: 12, padding: '2rem', position: 'relative' }}>
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
          <div style={{ background: '#161B22', border: '1px solid rgba(196,121,122,0.25)', borderRadius: 14, padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="section-label">Pricing</span>
              <div className="divider" />
              <h3 style={{ fontSize: 26, fontWeight: 700, marginTop: 4 }}>Starting from <span style={{ color: '#C4797A' }}>₹500</span></h3>
              <p style={{ color: '#7A9490', fontSize: 15, marginTop: 10, fontFamily: 'DM Sans, sans-serif', maxWidth: 500, lineHeight: 1.7 }}>
                Pricing depends on subject complexity, academic level, and deadline. Get a personalised quote — no strings attached.
              </p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
              Get Your Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '4rem 2.5rem 6rem', background: '#0D1117' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="section-label">FAQ</span>
          <div className="divider" />
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 36 }}>
            Common <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Questions</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ background: '#161B22', border: '1px solid rgba(45,74,71,0.35)', borderRadius: 12, padding: '1.75rem' }}>
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
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
            Ready to <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Ace Your Assignment?</span>
          </h2>
          <p style={{ color: '#7A9490', marginBottom: 36, fontSize: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            Share your brief today — we'll take it from there.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
              Contact Us <ArrowRight size={16} />
            </Link>
            <a href="https://www.originalassignmenthelp.com" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: 15 }}>
              OriginalAssignmentHelp.com <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
