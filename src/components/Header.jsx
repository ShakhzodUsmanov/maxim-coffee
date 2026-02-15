import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = ({ language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const translations = {
    ru: {
      logo: 'MAXIM',
      home: 'Главная',
      about: 'О продукте',
      advantages: 'Преимущества',
      gallery: 'Галерея',
      pricing: 'Цена',
      contact: 'Контакты',
    },
    uz: {
      logo: 'MAXIM',
      home: 'Bosh sahifa',
      about: 'Mahsulot haqida',
      advantages: 'Afzalliklari',
      gallery: 'Galereya',
      pricing: 'Narxi',
      contact: 'Kontaktlar',
    },
  }

  const t = translations[language]

  const navLinks = [
    { label: t.home, id: 'hero' },
    { label: t.about, id: 'about' },
    { label: t.advantages, id: 'advantages' },
    { label: t.gallery, id: 'gallery' },
    { label: t.pricing, id: 'pricing' },
    { label: t.contact, id: 'contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-maxim-yellow shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-maxim-dark">
              {t.logo}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-maxim-dark font-semibold hover:text-maxim-brown transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 bg-white rounded-lg p-1">
              <button
                onClick={() => toggleLanguage('ru')}
                className={`px-3 py-1 rounded font-semibold transition-colors ${
                  language === 'ru'
                    ? 'bg-maxim-brown text-white'
                    : 'text-maxim-dark hover:bg-gray-100'
                }`}
              >
                РУ
              </button>
              <button
                onClick={() => toggleLanguage('uz')}
                className={`px-3 py-1 rounded font-semibold transition-colors ${
                  language === 'uz'
                    ? 'bg-maxim-brown text-white'
                    : 'text-maxim-dark hover:bg-gray-100'
                }`}
              >
                UZ
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-maxim-dark"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-maxim-dark font-semibold hover:bg-maxim-beige rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
