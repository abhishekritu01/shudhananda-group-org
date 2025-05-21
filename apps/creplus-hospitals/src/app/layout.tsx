import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import ChatBot from "./component/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "CurePlus",
  description: " Cure Plus Hospital",
};


const customNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Our Hospitals', href: '/ourhospitals' },
  { name: 'Our Specialities', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header navLinks={customNavLinks} />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
