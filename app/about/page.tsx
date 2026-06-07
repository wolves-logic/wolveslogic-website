'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const timeline = [
  {
    year: '2014',
    title: 'The Beginning',
    body: 'Mallachary Lingampet began his journey in the IT industry, working as a professional while quietly nurturing a passion for helping others navigate the complex world of technology and academics. The seeds of what would become WolvesLogic were planted in these early years — through late-night problem solving, peer mentoring, and a growing conviction that expertise should be accessible to everyone, not just a privileged few.',
  },
  {
    year: '2017',
    title: 'First Steps in Academic Support',
    body: "Recognising the struggle of students with complex assignments and dissertations, Mallachary began offering informal academic assistance to peers and colleagues. The demand grew rapidly — students needed reliable, expert help they could trust. Word spread organically. This wasn't just a service; it was a lifeline for students under pressure, and it planted the seed for what would become OriginalAssignmentHelp.com.",
  },
  {
    year: '2019',
    title: 'OriginalAssignmentHelp.com Launched',
    body: 'The first formal brand was born. OriginalAssignmentHelp.com was launched to provide dedicated academic assistance to students across the UK, US, Australia, and India. The platform quickly gained trust for its quality, originality, and on-time delivery. It became a go-to resource for thousands of students facing the pressures of modern academic life, with a reputation built entirely on results and reliability.',
  },
  {
    year: '2021',
    title: 'Expanding into IT & Career Support',
    body: 'With years of IT industry experience behind him, Mallachary identified another critical gap — IT professionals needed real-time job support and honest career guidance. He began offering personalised IT support and mentoring under the Harviera IT Solutions banner, helping professionals navigate production crises, upskill on the job, and plan their careers with clarity. The response was immediate and overwhelming.',
  },
  {
    year: '2022',
    title: 'Harviera IT Solutions LLP Established',
    body: 'The freelancing work formalised into Harviera IT Solutions LLP — a registered entity providing IT consulting, infrastructure support, and technology services to SMEs across India. With a legal structure in place, the organisation could take on larger clients, longer engagements, and more ambitious projects. Accountability, professionalism, and trust became the pillars of every engagement.',
  },
  {
    year: '2023',
    title: 'TheRealSkill.com Launched',
    body: 'To address the corporate learning gap, TheRealSkill.com was launched — a platform dedicated to online tutoring and skill development for corporate employees and individuals seeking to upskill in the fast-changing IT landscape. Live sessions, custom curricula, and practical hands-on labs made it stand out in a crowded e-learning market where passive video courses had long dominated.',
  },
  {
    year: '2025',
    title: 'WolvesLogic Born',
    body: 'Bringing all expertise under one powerful brand, WolvesLogic was created as the unified identity for all services — academic help, IT services, job support, career guidance, and online tutoring. The name was chosen deliberately: W for Wolves, L for Logic — intelligence, strategy, and the relentless pursuit of excellence. A brand that reflects not just what we do, but how and why we do it.',
  },
  {
    year: '2026',
    title: 'Growing Stronger',
    body: 'Today, WolvesLogic under Harviera IT Solutions LLP serves 500+ students, 50+ SME clients, and 200+ IT professionals. With wolveslogic.com now live, the mission continues — Empowering Minds. Enabling Careers. The journey that began with one person helping another has grown into a trusted platform serving clients across continents, and there is no intention of slowing down.',
  },
];

const values = [
  { title: 'Mission', desc: 'To deliver quality, affordable services that empower students, professionals, and businesses to achieve their goals — without compromise.' },
  { title: 'Vision', desc: 'To be the most trusted brand for academic, IT, and career support across South Asia and beyond.' },
  { title: 'Values', desc: 'Integrity, excellence, personalisation, and a genuine passion for helping people grow in whatever they pursue.' },
  { title: 'Promise', desc: 'Every engagement is treated with full professionalism — on time, high quality, fully confidential, every time.' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '10rem 2.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(61,122,116,0.18)', top: -100, right: -100 }} />
        <div className="glow-orb" style={{ width: 280, height: 280, background: 'rgba(196,121,122,0.09)', bottom: 0, left: 0, animationDelay: '3s' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="fade-up-1">
            <span className="section-label">About Us</span>
            <div className="divider" />
          </div>
          <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.6rem,5.5vw,4.4rem)', fontWeight: 700, marginTop: 4, marginBottom: 24, maxWidth: 820, lineHeight: 1.1 }}>
            A decade of empowering people through{' '}
            <span style={{ color: '#C4797A', fontStyle: 'italic' }}>technology and education.</span>
          </h1>
          <p className="fade-up-3" style={{ color: 'rgba(240,237,232,0.5)', fontSize: 18, maxWidth: 600, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif' }}>
            WolvesLogic was not built overnight. It is the product of years of real-world experience, genuine care for people, and an unwavering belief that quality support should be accessible to everyone.
          </p>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section style={{ padding: '2rem 2.5rem 5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: 28, position: 'relative', display: 'inline-block' }}>
              <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'linear-gradient(135deg,#3D7A74,#C4797A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#fff' }}>ML</div>
              <div style={{ position: 'absolute', bottom: 4, right: -2, width: 18, height: 18, borderRadius: '50%', background: '#C4797A', border: '3px solid #0A0F0E' }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 6 }}>Mallachary Lingampet</h2>
            <p style={{ color: '#C4797A', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Founder · WolvesLogic</p>
            <p style={{ color: 'rgba(240,237,232,0.5)', lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              WolvesLogic was founded by Mallachary Lingampet — a passionate IT professional and educator who saw a gap in accessible, high-quality support for students and professionals alike. Under Harviera IT Solutions LLP, WolvesLogic operates as a brand delivering real value through expertise, trust, and commitment.
            </p>
          </div>

          {/* Company card */}
          <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(61,122,116,0.4)', borderRadius: 14, padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 3, background: 'linear-gradient(90deg, #3D7A74, transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 22 }}>🏢</span>
              <h3 style={{ fontSize: 18, fontWeight: 600, fontFamily: 'Playfair Display, serif' }}>Harviera IT Solutions LLP</h3>
            </div>
            <p style={{ color: 'rgba(240,237,232,0.5)', lineHeight: 1.85, fontSize: 15, fontFamily: 'DM Sans, sans-serif', marginBottom: 16 }}>
              WolvesLogic operates as a brand under Harviera IT Solutions LLP — providing professional services with the trust and accountability of a structured, registered organisation.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: 20 }}>
              {[['500+', 'Students'], ['50+', 'SME Clients'], ['200+', 'Professionals']].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 700, color: '#C4797A', lineHeight: 1 }}>{val}</div>
                  <div style={{ color: 'rgba(240,237,232,0.35)', fontSize: 12, marginTop: 5, fontFamily: 'DM Sans, sans-serif' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '5rem 2.5rem 6rem', background: '#0A0F0E' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">Our Journey</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginTop: 4 }}>
              From One Idea to <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Many Lives Changed</span>
            </h2>
          </div>

          {/* Vertical timeline */}
          <div style={{ position: 'relative' }}>
            {/* Spine line */}
            <div style={{
              position: 'absolute', left: 72, top: 0, bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #C4797A 0%, rgba(196,121,122,0.3) 80%, transparent 100%)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {timeline.map(({ year, title, body }, i) => (
                <div key={year} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  {/* Year badge */}
                  <div style={{ flexShrink: 0, width: 64, textAlign: 'right' }}>
                    <span style={{
                      display: 'inline-block',
                      background: '#3D7A74',
                      color: '#F0EDE8',
                      fontSize: 12, fontWeight: 700,
                      fontFamily: 'DM Sans, sans-serif',
                      letterSpacing: '0.04em',
                      padding: '4px 10px',
                      borderRadius: 6,
                      lineHeight: 1.4,
                    }}>{year}</span>
                  </div>

                  {/* Dot on spine */}
                  <div style={{ flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'flex-start', paddingTop: 4 }}>
                    <div style={{
                      width: 16, height: 16, borderRadius: '50%',
                      background: i === timeline.length - 1 ? '#C4797A' : 'rgba(255,255,255,0.06)',
                      border: `2px solid #C4797A`,
                      boxShadow: i === timeline.length - 1 ? '0 0 12px rgba(196,121,122,0.5)' : 'none',
                      flexShrink: 0,
                    }} />
                  </div>

                  {/* Card */}
                  <div style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(61,122,116,0.35)',
                    borderRadius: 12, padding: '1.5rem',
                    marginBottom: 4,
                    transition: 'border-color 0.3s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,121,122,0.3)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(61,122,116,0.35)'}
                  >
                    <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                    <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section style={{ padding: '5rem 2.5rem 6rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">Our Foundation</span>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginTop: 4 }}>
              What <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Drives Us</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '1.5rem' }}>
            {values.map(({ title, desc }, i) => (
              <div key={title} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 2, background: i % 2 === 0 ? 'linear-gradient(90deg,#C4797A,transparent)' : 'linear-gradient(90deg,#3D7A74,transparent)' }} />
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: i % 2 === 0 ? '#C4797A' : '#3D7A74', fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2.5rem 6rem', textAlign: 'center', background: '#0A0F0E', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(61,122,116,0.14)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, marginBottom: 16 }}>
            Ready to <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Work With Us?</span>
          </h2>
          <p style={{ color: 'rgba(240,237,232,0.5)', marginBottom: 32, fontFamily: 'DM Sans, sans-serif', fontSize: 16, lineHeight: 1.7 }}>
            Let's talk about what we can build together.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 32px' }}>
            Get in Touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .timeline-year { display: none; }
        }
      `}</style>
    </>
  );
}
