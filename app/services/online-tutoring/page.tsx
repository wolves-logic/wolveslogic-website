'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const included = [
  '1:1 live tutoring sessions via video call',
  'Corporate batch training programmes',
  'Custom curriculum design for your team',
  'Practical, hands-on labs & exercises',
  'Post-session notes & learning resources',
  'Progress tracking & milestone reviews',
  'Technology topics: Cloud, DevOps, Python, Java, SQL, etc.',
  'Business skills: Excel, Power BI, project management tools',
  'Certification exam preparation (AWS, Azure, Google Cloud, PMP)',
  'Flexible scheduling including evenings & weekends',
];

const audience = [
  { who: 'Corporate L&D teams', detail: 'Upskilling employees on new tools, platforms, or methodologies.' },
  { who: 'Individual professionals', detail: 'Learning a new technology or deepening expertise at their own pace.' },
  { who: 'Managers & team leads', detail: 'Building technical literacy to better lead and communicate with engineering teams.' },
  { who: 'Career switchers', detail: 'Gaining practical skills in a new domain quickly and efficiently.' },
  { who: 'Certification candidates', detail: 'Structured preparation for cloud, PM, or technical certification exams.' },
];

const steps = [
  { num: '01', title: 'Define Your Goals', desc: 'We discuss what you want to learn, your current level, timeline, and preferred format — 1:1 or group, intensive or relaxed.' },
  { num: '02', title: 'Custom Curriculum', desc: 'We design a learning plan built around your goals, not a generic syllabus — practical and relevant from session one.' },
  { num: '03', title: 'Live Sessions', desc: 'Interactive, hands-on sessions with real exercises. No PowerPoint marathons — we learn by doing.' },
  { num: '04', title: 'Review & Progress', desc: 'Regular check-ins, post-session notes, and milestone assessments keep you on track and motivated.' },
];

const faqs = [
  { q: 'What subjects and technologies do you teach?', a: 'We cover a wide range including cloud platforms (AWS, Azure, GCP), programming (Python, Java, SQL, JavaScript), DevOps, data analytics, Power BI, Excel, and soft skills for IT professionals.' },
  { q: 'How are corporate training programmes structured?', a: 'We begin with a needs assessment, then design a custom programme — typically delivered as a series of live sessions over several weeks, with hands-on labs and assessments.' },
  { q: 'Can sessions be recorded for team members who miss them?', a: 'Yes, for batch programmes we can arrange session recordings (subject to your agreement) so no team member falls behind.' },
  { q: 'What is the minimum commitment for 1:1 tutoring?', a: 'There is no minimum — you can book a single session to try it out. Most learners opt for packages of 5 or 10 sessions for better continuity and value.' },
];

export default function OnlineTutoringPage() {
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
            <span className="section-label">Online Tutoring</span>
            <div className="divider" />
          </div>
          <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 24, maxWidth: 780, lineHeight: 1.1 }}>
            Learning That Fits{' '}
            <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Your Schedule</span>
          </h1>
          <p className="fade-up-3" style={{ color: '#7A9490', fontSize: 18, maxWidth: 620, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', marginBottom: 36 }}>
            Live, personalised tutoring for individuals and corporate teams. We build custom learning programmes around your goals — practical, flexible, and built to accelerate your growth.
          </p>
          <div className="fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Book a Trial Session <ArrowRight size={17} /></Link>
            <a href="https://wa.me/919959691347" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
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
              Most online courses are passive — you watch a video, maybe do a quiz, and hope it sticks. WolvesLogic's tutoring is the opposite: live, interactive, and built around you. Every session is a conversation, not a lecture.
            </p>
            <p style={{ color: '#7A9490', lineHeight: 1.85, marginBottom: 16, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              For corporate teams, we design complete training programmes from scratch — aligned to your business tools, your timelines, and your people's existing skill levels. No irrelevant content, no wasted sessions.
            </p>
            <p style={{ color: '#7A9490', lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>
              For individuals, we offer flexible 1:1 sessions at a pace that suits your life — evenings, weekends, or intensive short bursts. Whether you're learning from zero or going deep on a specific topic, we adapt.
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
            For <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Curious Learners</span> at Every Level
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
            Built Around <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Your Goals</span>
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
              <h3 style={{ fontSize: 26, fontWeight: 700, marginTop: 4 }}>Starting from <span style={{ color: '#C4797A' }}>₹800/session</span></h3>
              <p style={{ color: '#7A9490', fontSize: 15, marginTop: 10, fontFamily: 'DM Sans, sans-serif', maxWidth: 500, lineHeight: 1.7 }}>
                1:1 sessions from ₹800. Corporate batch programmes priced per cohort. First trial session available — get in touch to discuss your needs.
              </p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
              Book a Session <ArrowRight size={16} />
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
            Start Learning <span style={{ color: '#C4797A', fontStyle: 'italic' }}>This Week</span>
          </h2>
          <p style={{ color: '#7A9490', marginBottom: 36, fontSize: 16, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            Book a trial session with no commitment — let's find the right programme for you.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
