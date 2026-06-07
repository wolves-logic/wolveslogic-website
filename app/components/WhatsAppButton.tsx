'use client';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919959691347';
const MESSAGE = encodeURIComponent("Hi WolvesLogic! I'd like to know more about your services.");

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WolvesLogic on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: '#25D366',
        color: '#0A0F0E',
        textDecoration: 'none',
        borderRadius: 100,
        padding: hovered ? '14px 22px 14px 14px' : 14,
        boxShadow: hovered ? '0 10px 36px rgba(37,211,102,0.45)' : '0 6px 24px rgba(37,211,102,0.35)',
        transition: 'all 0.25s ease',
      }}
    >
      <span style={{
        position: 'relative',
        width: 28, height: 28, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <MessageCircle size={26} color="#0A0F0E" />
        <span style={{
          position: 'absolute', top: -10, right: -10,
          width: 11, height: 11, borderRadius: '50%',
          background: '#C4797A', border: '2px solid #0A0F0E',
          display: hovered ? 'none' : 'block',
        }} />
      </span>
      <span style={{
        fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 14,
        letterSpacing: '0.01em', whiteSpace: 'nowrap',
        maxWidth: hovered ? 200 : 0,
        overflow: 'hidden',
        opacity: hovered ? 1 : 0,
        transition: 'all 0.25s ease',
      }}>
        Chat on WhatsApp
      </span>
    </a>
  );
}
