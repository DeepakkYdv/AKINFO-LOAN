'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Loans from '@/components/Loans'
import Insurance from '@/components/Insurance'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar')
    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 60)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    reveals.forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Insurance />
      <Process />
      <Loans />
      <Contact />
      <Footer />
    </>
  )
}