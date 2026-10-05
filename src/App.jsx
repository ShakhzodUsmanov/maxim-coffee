import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('ru')

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  useEffect(() => {
    document.documentElement.lang = language === 'ru' ? 'ru' : 'uz'
  }, [language])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#1E120A] text-maxim-dark flex flex-col selection:bg-maxim-yellow selection:text-maxim-dark">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="flex-grow">
        <Hero language={language} />
        <About language={language} />
        <Pricing language={language} />
        <Gallery language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App
