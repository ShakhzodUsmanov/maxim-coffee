import { useState, useEffect } from 'react'
import { FaBars, FaXmark, FaPhone, FaArrowRight } from "react-icons/fa6"
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const translations = {
    ru: {
      logo: 'MAXIM',
      sublogo: '3 in 1 Coffee',
      home: 'Главная',
      about: 'О продукте',
      pricing: 'Цена',
      gallery: 'Галерея',
      contact: 'Контакты',
      quickOrder: 'Заказать',
    },
    uz: {
      logo: 'MAXIM',
      sublogo: '3 in 1 Coffee',
      home: 'Bosh sahifa',
      about: 'Mahsulot haqida',
      pricing: 'Narxi',
      gallery: 'Galereya',
      contact: 'Kontaktlar',
      quickOrder: 'Buyurtma',
    },
  }

  const t = translations[language]

  const navLinks = [
    { label: t.home, id: 'hero' },
    { label: t.about, id: 'about' },
    { label: t.pricing, id: 'pricing' },
    { label: t.gallery, id: 'gallery' },
    { label: t.contact, id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1E120A]/90 backdrop-blur-xl shadow-xl shadow-black/20 border-b border-[#C88D48]/20 py-3'
          : 'bg-[#1E120A]/70 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group text-left focus:outline-none"
            aria-label="Maxim Coffee Home"
          >
            <div className="relative">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:text-maxim-yellow transition-colors font-display">
                MAXIM
              </span>
              <span className="absolute -top-1 -right-3 w-2 h-2 rounded-full bg-maxim-yellow animate-ping" />
              <span className="absolute -top-1 -right-3 w-2 h-2 rounded-full bg-maxim-yellow" />
            </div>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#FFD400]/15 text-maxim-yellow border border-[#FFD400]/30 ml-2">
              KOREA 3in1
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                aria-label={`Scroll to ${link.label} section`}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200 relative"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side: Quick Action & Language Switcher */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Quick Order Button (Desktop) */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-maxim-yellow to-[#E5BD00] text-[#1E120A] text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full shadow-md hover:shadow-maxim-yellow/20 hover:scale-105 transition-all duration-200"
            >
              <span>{t.quickOrder}</span>
              <FaArrowRight className="text-[10px]" />
            </button>

            {/* Language Switcher */}
            <div className="flex bg-black/40 p-1 rounded-full border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => toggleLanguage('ru')}
                aria-label="Русский язык"
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                  language === 'ru'
                    ? 'bg-maxim-yellow text-[#1E120A] shadow-md shadow-black/20'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                РУ
              </button>
              <button
                onClick={() => toggleLanguage('uz')}
                aria-label="O'zbek tili"
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                  language === 'uz'
                    ? 'bg-maxim-yellow text-[#1E120A] shadow-md shadow-black/20'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                UZ
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#1E120A]/95 backdrop-blur-2xl border-t border-white/10 mt-3 pt-3 pb-6 rounded-2xl px-4 space-y-2 shadow-2xl"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2.5 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center gap-2 bg-maxim-yellow text-[#1E120A] font-bold py-3 rounded-xl shadow-lg text-sm"
                >
                  <FaPhone className="text-xs" />
                  <span>+998 (93) 093-00-53</span>
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
