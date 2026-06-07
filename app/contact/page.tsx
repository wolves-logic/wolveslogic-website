'use client';
import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919959691347';
const PHONE_NUMBER = '+91 9959691347';
const EMAIL = 'wolveslogicit@gmail.com';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = ['Assignment Help', 'IT Services for SMEs', 'Job Support', 'Career Guidance', 'Online Tutoring', 'Other'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`WolvesLogic Enquiry – ${form.service || 'General'} from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nService: ${form.service || 'Not specified'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    await new Promise(r => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  };

  const whatsappMsg = encodeURIComponent(`Hi WolvesLogic! I am interested in your services. My name is ${form.name || '[Your Name]'} and I need help with ${form.service || 'your services'}.`);

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8, padding: '13px 16px', color: '#F0EDE8', fontSize: 15,
    outline: 'none', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
    transition: 'border-color 0.2s', fontFamily: 'DM Sans, sans-serif',
  };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '10rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 450, height: 450, background: 'rgba(61,122,116,0.18)', top: -80, right: -80 }} />
        <div className="glow-orb" style={{ width: 250, height: 250, background: 'rgba(196,121,122,0.1)', bottom: 0, left: 0, animationDelay: '2.5s' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="fade-up-1">
            <span className="section-label">Get in Touch</span>
            <div className="divider" />
          </div>
          <h1 className="fade-up-2" style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 700, marginTop: 4, marginBottom: 22, maxWidth: 640, lineHeight: 1.1 }}>
            Let's Start a{' '}
            <span style={{ color: '#C4797A', fontStyle: 'italic' }}>Conversation</span>
          </h1>
          <p className="fade-up-3" style={{ color: 'rgba(240,237,232,0.5)', fontSize: 18, maxWidth: 500, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif' }}>
            Reach us via WhatsApp, phone, or email. We typically respond within a few hours.
          </p>
        </div>
      </section>

      <section style={{ padding: '1rem 2.5rem 6rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '3.5rem', alignItems: 'start' }}>

          {/* ── Quick connect ── */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28 }}>Quick Connect</h2>

            {/* WhatsApp */}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: 'rgba(37,211,102,0.06)', border: '1px solid rgba(37,211,102,0.2)',
              borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: 14, textDecoration: 'none',
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(37,211,102,0.1)'; el.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(37,211,102,0.06)'; el.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 10, background: 'rgba(37,211,102,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MessageCircle size={22} color="#25D366" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16, color: '#F0EDE8', fontFamily: 'DM Sans, sans-serif' }}>Chat on WhatsApp</div>
                <div style={{ color: '#25D366', fontSize: 13, marginTop: 3, fontFamily: 'DM Sans, sans-serif' }}>Available · Usually responds fast</div>
              </div>
              <span style={{
                background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)',
                color: '#25D366', fontSize: 12, fontWeight: 600, padding: '5px 12px',
                borderRadius: 100, fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap', flexShrink: 0,
              }}>~ 15–30 min</span>
            </a>

            {/* Phone */}
            <a href={`tel:${PHONE_NUMBER}`} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: 'rgba(61,122,116,0.08)', border: '1px solid rgba(61,122,116,0.3)',
              borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: 14, textDecoration: 'none',
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(61,122,116,0.14)'; el.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(61,122,116,0.08)'; el.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 10, background: 'rgba(61,122,116,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={22} color="#3D7A74" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16, color: '#F0EDE8', fontFamily: 'DM Sans, sans-serif' }}>Call Us</div>
                <div style={{ color: 'rgba(240,237,232,0.5)', fontSize: 13, marginTop: 3, fontFamily: 'DM Sans, sans-serif' }}>{PHONE_NUMBER}</div>
              </div>
              <span style={{
                background: 'rgba(61,122,116,0.25)', border: '1px solid rgba(61,122,116,0.5)',
                color: 'rgba(240,237,232,0.5)', fontSize: 12, fontWeight: 600, padding: '5px 12px',
                borderRadius: 100, fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap', flexShrink: 0,
              }}>9 AM – 9 PM IST</span>
            </a>

            {/* Email */}
            <a href={`mailto:${EMAIL}`} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: 'rgba(196,121,122,0.06)', border: '1px solid rgba(196,121,122,0.2)',
              borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: 28, textDecoration: 'none',
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(196,121,122,0.1)'; el.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(196,121,122,0.06)'; el.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 10, background: 'rgba(196,121,122,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={22} color="#C4797A" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16, color: '#F0EDE8', fontFamily: 'DM Sans, sans-serif' }}>Email Us</div>
                <div style={{ color: 'rgba(240,237,232,0.5)', fontSize: 13, marginTop: 3, fontFamily: 'DM Sans, sans-serif' }}>{EMAIL}</div>
              </div>
              <span style={{
                background: 'rgba(196,121,122,0.12)', border: '1px solid rgba(196,121,122,0.3)',
                color: '#C4797A', fontSize: 12, fontWeight: 600, padding: '5px 12px',
                borderRadius: 100, fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap', flexShrink: 0,
              }}>~ within 24 hrs</span>
            </a>

            <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(61,122,116,0.35)', borderRadius: 10, padding: '1.25rem 1.5rem' }}>
              <p style={{ color: '#C4797A', fontWeight: 600, fontSize: 14, marginBottom: 8, fontFamily: 'DM Sans, sans-serif' }}>Response Time</p>
              <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 14, lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>WhatsApp & calls — within hours. Email — within 24 hours. We're here to help!</p>
            </div>

            <div style={{
              width: '100%',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(196,121,122,0.2)',
              marginTop: 24,
              height: 280,
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60896.78834900157!2d78.4351904!3d17.3850044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972ff1b11e4f%3A0x6ec7e1b5b7c9bcab!2sHyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0, filter: 'grayscale(80%) invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WolvesLogic Location"
              />
            </div>
            <p style={{ color: 'rgba(240,237,232,0.35)', fontSize: 13, marginTop: 8, textAlign: 'center' }}>
              📍 Hyderabad, Telangana, India — 500035
            </p>
          </div>

          {/* ── Contact form ── */}
          <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(61,122,116,0.4)', borderRadius: 16, padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 3, background: 'linear-gradient(90deg, #C4797A, #3D7A74, transparent)' }} />

            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(196,121,122,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={32} color="#C4797A" />
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: 'rgba(240,237,232,0.5)', lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>Thank you for reaching out. We will get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="btn-primary" style={{ marginTop: 24, border: 'none', cursor: 'pointer' }}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28 }}>Send a Message</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {[
                    { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                    { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'your@email.com' },
                    { id: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '+91 XXXXXXXXXX' },
                  ].map(field => (
                    <div key={field.id}>
                      <label style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,0.5)', marginBottom: 8, fontWeight: 500, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}>{field.label}</label>
                      <input
                        type={field.type} placeholder={field.placeholder} required={field.label.includes('*')}
                        value={(form as any)[field.id]}
                        onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'rgba(196,121,122,0.5)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,0.5)', marginBottom: 8, fontWeight: 500, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}>Service Required</label>
                    <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      style={{ ...inputStyle, color: form.service ? '#F0EDE8' : 'rgba(240,237,232,0.35)' }}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,0.5)', marginBottom: 8, fontWeight: 500, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}>Message *</label>
                    <textarea required placeholder="Tell us about your requirement..."
                      value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(196,121,122,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary" style={{
                    justifyContent: 'center', border: 'none',
                    opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer',
                    fontSize: 15, padding: '14px',
                  }}>
                    {loading ? 'Sending...' : <><Send size={17} /> Send Message</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
