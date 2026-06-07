'use client';
import Link from 'next/link';
import { ArrowRight, BookOpen, Monitor, Briefcase, Compass, GraduationCap, CheckCircle, MessageCircle, Search, UserCheck, PackageCheck, Zap } from 'lucide-react';
import AnimatedCounter from './components/AnimatedCounter';
import FAQAccordion from './components/FAQAccordion';

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
  { name: 'Priya S.', role: 'MBA Student', text: 'WolvesLogic helped me submit my dissertation on time. Exceptional quality and support, even with a brutal deadline.' },
  { name: 'Rajan M.', role: 'IT Professional', text: 'The job support service saved my project. Available whenever I needed help — even late at night before a release.' },
  { name: 'Anita K.', role: 'Corporate Trainer', text: 'Their online tutoring sessions are engaging and very well structured for our team. Genuinely some of the best L&D we have used.' },
  { name: 'Vikram T.', role: 'SME Owner', text: "Harviera's IT support transformed how our small team operates — responsive, knowledgeable, and always there when it matters." },
  { name: 'Sneha R.', role: 'Final-Year Student', text: "From research to formatting, every assignment came back polished and on time. I genuinely could not have managed my final year without them." },
  { name: 'Arjun D.', role: 'Aspiring Developer', text: 'The career guidance sessions gave me a clear roadmap. I landed my first developer role within three months of following their plan.' },
];

const trustBrands = [
  { name: 'OriginalAssignmentHelp.com', desc: 'Academic support since 2019' },
  { name: 'TheRealSkill.com', desc: 'Corporate learning since 2023' },
  { name: 'Harviera IT Solutions LLP', desc: 'Registered IT consultancy' },
];

const steps = [
  { icon: MessageCircle, title: 'Reach Out', desc: 'Message us on WhatsApp, call, or fill out the contact form. It takes less than a minute to start the conversation.' },
  { icon: Search, title: 'Free Consultation', desc: 'We listen to your requirement, ask the right questions, and explain how we can help — with no cost and no pressure.' },
  { icon: UserCheck, title: 'Get Matched & Start', desc: 'We pair you with the right specialist, agree on scope, timeline, and pricing upfront, and get to work.' },
  { icon: PackageCheck, title: 'Receive & Succeed', desc: 'Get your work or support delivered on time, with revisions until you are completely satisfied with the outcome.' },
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
        <div className="glow-orb" style={{ width: 600, height: 600, background: 'rgba(61,122,116,0.22)', top: -150, right: -150 }} />
        <div className="glow-orb" style={{ width: 350, height: 350, background: 'rgba(196,121,122,0.1)', bottom: 0, left: -80, animationDelay: '3s' }} />

        {/* Subtle noise texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(61,122,116,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(196,121,122,0.06) 0%, transparent 50%)',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="fade-up-1">
              <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(61,122,116,0.25)', border: '1px solid rgba(61,122,116,0.5)', padding: '5px 16px', borderRadius: 100, marginBottom: 32 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C4797A', display: 'inline-block' }} />
                Harviera IT Solutions LLP
              </span>
            </div>

            <h1 className="fade-up-2" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: 28, color: '#FFFFFF' }}>
              Expert help, exactly{' '}
              <span style={{ color: '#C4797A', fontStyle: 'italic' }}>when</span>
              <br />and where you{' '}
              <span style={{ color: '#3D7A74' }}>need it.</span>
            </h1>

            <p className="fade-up-3" style={{ fontSize: 17, color: 'rgba(240,237,232,0.5)', maxWidth: 520, marginBottom: 28, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif' }}>
              Whether you're racing an academic deadline, firefighting a production issue, plotting your next career move, or upskilling your team — WolvesLogic puts a decade of real-world expertise behind you. Empowering Minds. Enabling Careers.
            </p>

            <div className="fade-up-3" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: 100, padding: '7px 18px 7px 14px', marginBottom: 36 }}>
              <Zap size={14} color="#25D366" />
              <span style={{ color: '#F0EDE8', fontSize: 13, fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>
                Usually replies in <span style={{ color: '#25D366', fontWeight: 700 }}>under 2 hours</span> · Free first consultation
              </span>
            </div>

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
            <div className="glass-strong" style={{ borderRadius: 16, padding: '2rem' }}>
              <p style={{ color: 'rgba(240,237,232,0.35)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', marginBottom: 20 }}>By the numbers</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {stats.map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#C4797A', lineHeight: 1 }}>
                      <AnimatedCounter value={s.value} />
                    </div>
                    <div style={{ color: 'rgba(240,237,232,0.35)', fontSize: 13, marginTop: 6, fontFamily: 'DM Sans, sans-serif' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass" style={{ border: '1px solid rgba(196,121,122,0.2)', borderRadius: 12, padding: '1.25rem 1.5rem', display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg, #3D7A74, #C4797A)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 18, flexShrink: 0
              }}>🐺</div>
              <div>
                <p style={{ color: '#F0EDE8', fontSize: 14, fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>Free initial consultation</p>
                <p style={{ color: 'rgba(240,237,232,0.35)', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>No commitment required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ padding: '0 2.5rem 5rem' }}>
        <div className="glass" style={{
          maxWidth: 1200, margin: '0 auto',
          borderRadius: 14, padding: '1.75rem 2rem',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem 2.5rem',
        }}>
          <p style={{ color: 'rgba(240,237,232,0.35)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap' }}>
            One brand, three trusted platforms
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.25rem' }}>
            {trustBrands.map(b => (
              <div key={b.name} style={{
                display: 'flex', flexDirection: 'column', gap: 2,
                background: 'rgba(61,122,116,0.16)', border: '1px solid rgba(61,122,116,0.35)',
                borderRadius: 10, padding: '10px 18px',
              }}>
                <span style={{ color: '#F0EDE8', fontSize: 14, fontWeight: 600, fontFamily: 'DM Sans, sans-serif' }}>{b.name}</span>
                <span style={{ color: 'rgba(240,237,232,0.35)', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}>{b.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '6rem 2.5rem', background: '#0A0F0E' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span className="section-label">What We Offer</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginTop: 4, maxWidth: 520 }}>
              Services Built for <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Every Stage</span>
            </h2>
            <p style={{ color: 'rgba(240,237,232,0.5)', marginTop: 14, maxWidth: 480, fontFamily: 'DM Sans, sans-serif', fontSize: 16 }}>
              Expert support across academics, technology, and career growth.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.5rem' }}>
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="card" style={{ cursor: 'default' }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: i % 2 === 0 ? 'rgba(196,121,122,0.12)' : 'rgba(61,122,116,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={22} color={i % 2 === 0 ? '#C4797A' : '#3D7A74'} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 15, lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
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

      {/* ── WHY US ── */}
      <section style={{ padding: '6rem 2.5rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div>
            <span className="section-label">Why WolvesLogic</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 18 }}>
              Logic Meets <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Excellence</span>
            </h2>
            <p style={{ color: 'rgba(240,237,232,0.5)', marginBottom: 32, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              Founded by Mallachary Lingampet, WolvesLogic brings real-world expertise to every engagement — whether you are a student, an IT professional under pressure, or a corporate team seeking growth.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {highlights.map(point => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(196,121,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <CheckCircle size={12} color="#C4797A" />
                  </div>
                  <span style={{ color: 'rgba(240,237,232,0.5)', fontSize: 15, fontFamily: 'DM Sans, sans-serif' }}>{point}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary" style={{ marginTop: 36, fontSize: 15 }}>
              About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '6rem 2.5rem', background: '#0A0F0E', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-texture" />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span className="section-label">Getting Started</span>
            <div className="divider" style={{ margin: '16px auto' }} />
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, marginTop: 4 }}>
              How It <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Works</span>
            </h2>
            <p style={{ color: 'rgba(240,237,232,0.5)', marginTop: 14, maxWidth: 480, margin: '14px auto 0', fontFamily: 'DM Sans, sans-serif', fontSize: 16 }}>
              From your first message to a finished outcome — here's what working with us looks like.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '2rem', position: 'relative' }}>
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} style={{ textAlign: 'center', position: 'relative' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%', margin: '0 auto 20px',
                    background: i % 2 === 0 ? 'rgba(196,121,122,0.12)' : 'rgba(61,122,116,0.25)',
                    border: `2px solid ${i % 2 === 0 ? 'rgba(196,121,122,0.4)' : 'rgba(61,122,116,0.6)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', zIndex: 1,
                  }}>
                    <Icon size={24} color={i % 2 === 0 ? '#C4797A' : '#3D7A74'} />
                    <span style={{
                      position: 'absolute', top: -6, right: -6, width: 24, height: 24, borderRadius: '50%',
                      background: '#C4797A', color: '#fff', fontSize: 12, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'DM Sans, sans-serif', border: '2px solid #0A0F0E', zIndex: 2,
                    }}>{i + 1}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{title}</h3>
                  <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', maxWidth: 260, margin: '0 auto' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '6rem 2.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
            <span className="section-label">Client Stories</span>
            <div className="divider" style={{ margin: '16px auto' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginTop: 4 }}>
              What Our <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Clients Say</span>
            </h2>
            <p style={{ color: 'rgba(240,237,232,0.5)', marginTop: 14, maxWidth: 480, margin: '14px auto 0', fontFamily: 'DM Sans, sans-serif', fontSize: 16 }}>
              Real feedback from students, professionals, and businesses we've worked with.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1.5rem' }}>
            {testimonials.map(t => (
              <div key={t.name} className="glass" style={{ borderRadius: 12, padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C4797A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, lineHeight: 1.8, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic', flex: 1 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(196,121,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontFamily: 'Playfair Display, serif', color: '#C4797A', fontWeight: 700 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#F0EDE8', fontFamily: 'DM Sans, sans-serif' }}>{t.name}</div>
                    <div style={{ color: 'rgba(240,237,232,0.35)', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '6rem 2.5rem', background: '#0A0F0E', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-texture" />
        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-label">Common Questions</span>
            <div className="divider" style={{ margin: '16px auto' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginTop: 4 }}>
              Frequently Asked <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Questions</span>
            </h2>
            <p style={{ color: 'rgba(240,237,232,0.5)', marginTop: 14, maxWidth: 480, margin: '14px auto 0', fontFamily: 'DM Sans, sans-serif', fontSize: 16 }}>
              Answers to what people most often ask before getting started.
            </p>
          </div>

          <FAQAccordion />

          <p style={{ textAlign: 'center', color: 'rgba(240,237,232,0.35)', marginTop: 32, fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
            Still have a question?{' '}
            <Link href="/contact" style={{ color: '#C4797A', fontWeight: 600, textDecoration: 'none' }}>Get in touch with us →</Link>
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2.5rem', background: '#0A0F0E', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(61,122,116,0.18)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: 'rgba(196,121,122,0.08)', top: '30%', right: '10%', animationDelay: '2s' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 20 }}>Start Today</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
            Ready to <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Get Started?</span>
          </h2>
          <p style={{ color: 'rgba(240,237,232,0.5)', marginBottom: 36, fontSize: 17, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
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
