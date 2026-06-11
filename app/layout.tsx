import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Soutrik Mukherjee | Orthopedic, Joint Replacement & Spine Surgeon in Kolkata',
  description: 'Dr. Soutrik Mukherjee is a leading Orthopedic Surgeon specializing in Joint Replacement, Spine Surgery, Sports Injury Care, and Arthritis Treatment in Kolkata. Book your consultation today.',
  keywords: 'Orthopedic Surgeon in Kolkata, Best Orthopedic Surgeon in Kolkata, Joint Replacement Surgeon Kolkata, Spine Surgeon Kolkata, Knee Replacement Specialist Kolkata, Hip Replacement Surgeon Kolkata, Arthritis Treatment Kolkata, Sports Injury Specialist Kolkata',
  authors: [{ name: 'Dr. Soutrik Mukherjee' }],
  openGraph: {
    title: 'Dr. Soutrik Mukherjee | Orthopedic, Joint Replacement & Spine Surgeon',
    description: 'Advanced Orthopedic Care with a Patient-First Approach. Specializing in Joint Replacement, Spine Surgery, and Sports Injury Treatment.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
