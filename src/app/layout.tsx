import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import ChatBot from "./component/ChatBot";
import Script from 'next/script';
import type { Metadata } from 'next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CurePlus Hospitals",
  description:
    "As the Best Hospitals Near Me, we deliver compassionate, tech-driven care that puts patients first. Your well-being is our mission—today and always.",
};

const customNavLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Our Hospitals", href: "/ourhospitals" },
  { name: "Our Specialities", href: "/services" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/CUREPLUS HOSPITALS.png" />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="pQnt6mS_wcshxRH0ZNr509ccWv2ndrELGfAwageb2tI"
        />

        {/* ✅ JSON-LD Schema Added Below */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CurePlus Hospitals",
              url: "https://www.cureplushospitals.com/",
              logo: "",
              sameAs: [
                "https://www.facebook.com/cureplushospitals",
                "https://www.instagram.com/cureplus_hospitals/?next=%2F",
                "https://www.linkedin.com/company/sudhanand-health-care-solutions-private-limited/"
              ]
            }),
          }}
        />

        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QXLB1R89MK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-QXLB1R89MK');
  `}
        </Script>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header navLinks={customNavLinks} />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
