import type { Metadata } from 'next'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'
import FadeInProvider from '@/components/ui/FadeInProvider'

export const metadata: Metadata = {
  title: 'AK Loan & Insurance Consultancy Services | Hajipur, Vaishali',
  description:
    'Expert loan and insurance consultancy in Hajipur, Vaishali, Bihar. Home Loan, Business Loan, Personal Loan, Life Insurance, Health Insurance and more. Director: Abhay Yadav.',
  keywords: 'loan consultancy, insurance, home loan, personal loan, business loan, hajipur, vaishali, bihar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FadeInProvider />
        {children}
      </body>
    </html>
  )
}
