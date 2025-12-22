import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins' 
})
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat' 
})

export const metadata: Metadata = {
  title: 'Sirius Sports - Your Trusted Garment Manufacturing Partner | B2B Apparel Supplier',
  description: 'Premium B2B garment manufacturing company specializing in sportswear, winter wear, and custom apparel. OEM/private label solutions with global shipping from Sialkot, Pakistan.',
  keywords: 'Garment Manufacturer, Apparel Supplier, Sportswear Exporter, OEM Clothing, Custom Apparel Sialkot, B2B Garments, Winter Wear Manufacturer, Sportswear Factory',
  authors: [{ name: 'Sirius Sports' }],
  openGraph: {
    title: 'Sirius Sports - Premium Garment Manufacturing',
    description: 'Your Trusted Garment Manufacturing Partner',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

