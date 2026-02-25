import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
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

  return (
    <main className="min-h-screen bg-maxim-cream">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Pricing language={language} />               
      <Gallery language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  )
}

export default App
