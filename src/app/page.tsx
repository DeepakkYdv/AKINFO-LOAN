import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import BankScroller from '@/components/sections/BankScroller'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Calculator from '@/components/sections/Calculator'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BankScroller />
        <Services />
        <About />
        <Calculator />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
