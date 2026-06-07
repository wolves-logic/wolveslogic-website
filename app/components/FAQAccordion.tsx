'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How quickly can I get started with WolvesLogic?',
    a: 'Most engagements begin within 24–48 hours of your first message. Reach out via WhatsApp, phone, or our contact form, share what you need, and we will line up the right expert and timeline for you — often the same day.',
  },
  {
    q: 'Is the initial consultation really free?',
    a: 'Yes. Every new conversation starts with a free, no-obligation consultation where we understand your requirement, explain how we can help, and give you a clear idea of cost and timeline before you commit to anything.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Absolutely. We support students and professionals across the UK, US, Australia, India, and beyond — all coordination happens online via WhatsApp, email, and video calls, so location is never a barrier.',
  },
  {
    q: 'How is my information kept confidential?',
    a: 'Confidentiality is core to how we operate. Your details, documents, and conversations are never shared with third parties, and every engagement — academic, professional, or business — is handled with strict discretion.',
  },
  {
    q: 'What if I am not satisfied with the work delivered?',
    a: 'We work closely with you throughout the engagement and welcome feedback at every stage. If something does not meet expectations, we revise it with you until it does — your satisfaction is the measure of our success.',
  },
  {
    q: 'How do I pay, and are there flexible options?',
    a: 'Pricing is discussed upfront and tailored to the scope of your requirement, with affordable options for students as well as businesses. We will always agree on cost before starting any paid work — no surprises.',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {faqs.map(({ q, a }, i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="glass" style={{
            borderLeft: isOpen ? '3px solid #3D7A74' : '3px solid transparent',
            borderRadius: 12,
            overflow: 'hidden',
            transition: 'border-color 0.25s, transform 0.3s, box-shadow 0.3s',
          }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 16, background: 'none', border: 'none', cursor: 'pointer',
                padding: '1.25rem 1.5rem', textAlign: 'left',
              }}
            >
              <span style={{ color: '#F0EDE8', fontSize: 16, fontWeight: 600, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>{q}</span>
              <span style={{
                flexShrink: 0, width: 30, height: 30, borderRadius: '50%',
                background: isOpen ? 'rgba(61,122,116,0.22)' : 'rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.25s',
              }}>
                <Plus size={16} color={isOpen ? '#5A9B94' : 'rgba(240,237,232,0.5)'} style={{ transition: 'transform 0.25s', transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)' }} />
              </span>
            </button>
            <div style={{
              maxHeight: isOpen ? 240 : 0,
              opacity: isOpen ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.35s ease, opacity 0.25s ease',
            }}>
              <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: 15, lineHeight: 1.85, fontFamily: 'DM Sans, sans-serif', padding: '0 1.5rem 1.5rem' }}>{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
