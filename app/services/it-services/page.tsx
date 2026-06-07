'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Monitor } from 'lucide-react';

const included = [
  'Cloud setup, migration & management (AWS, Azure, GCP)',
  'Web & mobile application development',
  'IT infrastructure design & deployment',
  'Cybersecurity audits & basic hardening',
  'Software selection & implementation consulting',
  'Ongoing technical support & helpdesk',
  'Network setup & troubleshooting',
  'Database administration & backup strategy',
  'ERP & CRM integration support',
  'IT cost optimisation advisory',
];

const audience = [
  { who: 'Startups', detail: 'Getting the right tech stack in place from day one, cost-effectively.' },
  { who: 'Small businesses (1–50 staff)', detail: 'Reliable IT without the overhead of a full-time tech team.' },
  { who: 'Medium enterprises (50–500 staff)', detail: 'Scaling infrastructure and processes to match business growth.' },
  { who: 'Retail & e-commerce businesses', detail: 'Managing online platforms, POS integrations, and digital security.' },
  { who: 'Healthcare & education organisations', detail: 'Compliant, secure IT solutions tailored to regulated sectors.' },
];

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We understand your current setup, pain points, and business goals in a free 30-minute consultation.' },
  { num: '02', title: 'Needs Assessment', desc: 'We audit your existing infrastructure and produce a clear action plan with priorities and timelines.' },
  { num: '03', title: 'Implementation', desc: "Our team executes the plan — whether that's cloud migration, new software, or security upgrades." },
  { num: '04', title: 'Ongoing Support', desc: 'We remain available for monitoring, troubleshooting, and continuous improvement as your business grows.' },
];

const faqs = [
  { q: 'Do you work with businesses that have no existing IT setup?', a: 'Yes. We frequently help startups and SMEs build their IT foundation from scratch — from email and cloud storage to full infrastructure design.' },
  { q: 'Can you support our existing IT team?', a: 'Absolutely. We offer project-based or ongoing advisory support alongside your internal team, filling gaps in expertise or capacity.' },
  { q: 'What cloud platforms do you work with?', a: 'We have experience with AWS, Microsoft Azure, and Google Cloud. We recommend the best platform based on your workload, budget, and existing tools.' },
  { q: 'How is pricing structured?', a: 'We offer both project-based quotes and monthly retainer arrangements. All pricing is transparent with no hidden fees.' },
];

export default function ITServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(61,122,116,0.2)', top: -100, right: -100 }} />
        <div className="glow-orb" style={{ width: 280, height: 280, background: 'rgba(196,121,122,0.08)', bottom: 0, left: 0, animationDelay: '2.5s' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(240,237,232,0.5)', fontSize: 14, textDecoration: 'none', marginBottom: 28, fontFamily: 'DM Sans, sans-serif' }}>
              ← Back to Services
            </Link>
            <div className="fade-up-1">
              <span className="section-label">IT Services for SMEs</span>
              <div className="divider" />
            </div>
            <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 24, maxWidth: 780, lineHeight: 1.1 }}>
              Technology That{' '}
              <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>Scales With You</span>
            </h1>
            <p className="fade-up-3" style={{ color: 'rgba(240,237,232,0.5)', fontSize: 18, maxWidth: 620, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', marginBottom: 36 }}>
              Comprehensive IT support and consulting for small and medium enterprises. We handle the technology so you can focus on growing your business.
            </p>
            <div className="fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book a Free Consultation <ArrowRight size={17} /></Link>
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
                src="/images/it-services.jpg"
                alt="IT consultant delivering technology solutions for small and medium enterprises through WolvesLogic"
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
              For most small and medium businesses, maintaining a full in-house IT department is simply not practical. Yet technology underpins nearly every business function — from customer communication and data storage to operations and growth. WolvesLogic bridges this gap with flexible, expert IT support tailored to your size and sector.
            </p>
            <p style={{ color: 'rgba(240,237,232,0.5)', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              We work as an extension of your team, not an external vendor. That means we take time to understand your business, your budget constraints, and your long-term plans before recommending any solution. Our approach is practical, not tech-for-tech's-sake.
            </p>
            <p style={{ color: 'rgba(240,237,232,0.5)', lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Whether you need a one-off project — like migrating to the cloud — or ongoing monthly IT support, we offer flexible engagement models that grow with you.
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
            Built for <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>Growing Businesses</span>
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
            Our <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>Engagement Model</span>
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
              <h3 style={{ fontSize: 26, fontWeight: 700, marginTop: 4 }}>Custom Pricing <span style={{ color: '#3D7A74' }}>for Every Business</span></h3>
              <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 15, marginTop: 10, fontFamily: 'DM Sans, sans-serif', maxWidth: 500, lineHeight: 1.7 }}>
                Project-based quotes or monthly retainers from ₹5,000/month. We scope carefully to avoid overcharging for things you don't need.
              </p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px', background: '#3D7A74' }}>
              Get a Quote <ArrowRight size={16} />
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
            Let's Build Your <span style={{ color: '#3D7A74', fontStyle: 'italic' }}>IT Foundation</span>
          </h2>
          <p style={{ color: 'rgba(240,237,232,0.5)', marginBottom: 36, fontSize: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            Start with a free 30-minute discovery call — no commitment required.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px', background: '#3D7A74' }}>
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
