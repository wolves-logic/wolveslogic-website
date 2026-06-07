import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: "WolvesLogic – Empowering Minds. Enabling Careers.",
  description: "WolvesLogic provides Assignment Help, IT Services for SMEs, Job Support, Career Guidance, and Online Tutoring to students, professionals, and corporates.",
  keywords: "assignment help, IT services, job support, career guidance, online tutoring, WolvesLogic, Harviera IT Solutions",
  icons: {
    icon: '/logo-symbol.png',
    shortcut: '/logo-symbol.png',
    apple: '/logo-symbol.png',
  },
  openGraph: {
    title: "WolvesLogic – Empowering Minds. Enabling Careers.",
    description: "Expert support for students, IT professionals, and corporate employees.",
    url: "https://wolveslogic.com",
    siteName: "WolvesLogic",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="orb" style={{ width: 500, height: 500, background: 'rgba(61,122,116,0.12)', top: '-100px', left: '-100px', animationDelay: '0s' }} />
        <div className="orb" style={{ width: 400, height: 400, background: 'rgba(196,121,122,0.08)', bottom: '-50px', right: '-50px', animationDelay: '4s' }} />
        <div className="orb" style={{ width: 300, height: 300, background: 'rgba(61,122,116,0.08)', top: '50%', right: '20%', animationDelay: '8s' }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
