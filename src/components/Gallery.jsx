import { useState, useEffect } from 'react'
import boxWith100 from '../assets/box-with-100.webp'
import coffeeCup from "../assets/coffee-cup.webp"
import coffeeSticks from "../assets/sticks.webp"
import presentBox from "../assets/presentBox.webp"

import { FaGift, FaBox, FaMugHot, FaWandMagicSparkles, FaXmark, FaChevronLeft, FaChevronRight, FaMagnifyingGlassPlus, FaTelegram } from "react-icons/fa6"
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = ({ language }) => {
  const [activeModalIndex, setActiveModalIndex] = useState(null)

  const translations = {
    ru: {
      badge: 'ФОТОГАЛЕРЕЯ',
      title: 'Галерея',
      subtitle: 'Посмотри как выглядит качество',
      clickToEnlarge: 'Нажмите для увеличения',
      close: 'Закрыть',
      telegramText: 'Еще фото в нашем Telegram',
    },
    uz: {
      badge: 'FOTOGALEREYA',
      title: 'Galereya',
      subtitle: "Sifat qanday ko'rinishga ega ekanligini ko'rish",
      clickToEnlarge: 'Kattalashtirish uchun bosing',
      close: 'Yopish',
      telegramText: "Bizning Telegram ko'proq rasmlar",
    },
  }

  const t = translations[language]

  const items = [
    { 
      id: 1, 
      img: boxWith100, 
      emoji: FaBox, 
      label: language === 'ru' ? 'Коробка 100 стиков' : '100 stikli quti',
      sublabel: language === 'ru' ? 'Оригинальная упаковка Maxim Mocha Gold' : 'Asl Maxim Mocha Gold qadogʻi'
    },
    { 
      id: 2, 
      img: coffeeCup, 
      emoji: FaMugHot, 
      label: language === 'ru' ? 'Кофе с пеной' : 'Kopiyka bilan qahva',
      sublabel: language === 'ru' ? 'Нежная кремовая текстура и аромат' : 'Mayin qaymoqli tuzilish va xushboʻy hid'
    },
    { 
      id: 3, 
      img: coffeeSticks, 
      emoji: FaWandMagicSparkles, 
      label: language === 'ru' ? 'Стики' : 'Stiklar',
      sublabel: language === 'ru' ? 'Индивидуальные стики с удобным срезом Easy Cut' : 'Qulay Easy Cut kesikli alohida stiklar'
    },
    { 
      id: 4, 
      img: presentBox, 
      emoji: FaGift, 
      label: language === 'ru' ? 'Подарок' : "Sovg'a",
      sublabel: language === 'ru' ? 'Идеальный подарок для друзей и коллег' : 'Doʻstlar va hamkasblar uchun ideal sovgʻa'
    },
  ]

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalIndex(null)
      if (e.key === 'ArrowRight' && activeModalIndex !== null) {
        setActiveModalIndex((prev) => (prev + 1) % items.length)
      }
      if (e.key === 'ArrowLeft' && activeModalIndex !== null) {
        setActiveModalIndex((prev) => (prev - 1 + items.length) % items.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeModalIndex, items.length])

  const openModal = (index) => {
    setActiveModalIndex(index)
  }

  const closeModal = () => {
    setActiveModalIndex(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setActiveModalIndex((prev) => (prev + 1) % items.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setActiveModalIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-[#FAF5EC] px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#2B1A10]/5 text-[#3D2817] border border-[#3D2817]/15 mb-3"
          >
            {t.badge}
          </motion.span>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E120A] tracking-tight font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.title}
          </motion.h2>

          <motion.p 
            className="text-[#6B4C38] text-base sm:text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {items.map((item, index) => {
            const Icon = item.emoji
            return (
              <motion.div
                key={item.id}
                onClick={() => openModal(index)}
                className="group relative overflow-hidden rounded-3xl shadow-lg shadow-[#1E120A]/5 bg-white cursor-pointer aspect-square border border-[#EADBCC] hover:border-maxim-yellow hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                tabIndex={0}
                role="button"
                aria-label={`${item.label} - ${t.clickToEnlarge}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openModal(index)
                  }
                }}
              >
                {/* Photo */}
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Always visible subtle bottom badge on mobile, full reveal on desktop hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E120A]/85 via-[#1E120A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-9 h-9 rounded-full bg-maxim-yellow text-[#1E120A] flex items-center justify-center font-bold shadow-md">
                      <FaMagnifyingGlassPlus className="text-sm" />
                    </span>
                    <Icon className="text-xl text-maxim-yellow/80" />
                  </div>
                  <h3 className="font-bold text-base text-white leading-tight font-display">
                    {item.label}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-1">
                    {item.sublabel}
                  </p>
                </div>

                {/* Corner Quick Label */}
                <div className="absolute top-3 left-3 bg-[#1E120A]/70 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full group-hover:opacity-0 transition-opacity">
                  {item.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Telegram CTA Box */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:p-5 sm:px-8 rounded-3xl shadow-lg border border-[#EADBCC]">
            <p className="text-[#2B1A10] font-semibold text-sm sm:text-base">
              {t.telegramText}
            </p>
            <a
              href="https://t.me/maxkoffuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#229ED9] hover:bg-[#1E8CC0] text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm"
            >
              <FaTelegram className="text-lg" />
              <span>@MAXKOFFUZ</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeModalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Card Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#1E120A] rounded-3xl overflow-hidden shadow-2xl border border-white/15"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label={t.close}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/20"
              >
                <FaXmark size={18} />
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/20"
              >
                <FaChevronLeft size={16} />
              </button>

              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/20"
              >
                <FaChevronRight size={16} />
              </button>

              {/* Active Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black/60 flex items-center justify-center overflow-hidden">
                <img
                  src={items[activeModalIndex].img}
                  alt={items[activeModalIndex].label}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bottom Caption Bar */}
              <div className="p-6 bg-gradient-to-r from-[#2B1A10] to-[#1E120A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
                <div>
                  <h4 className="text-xl font-bold text-white font-display">
                    {items[activeModalIndex].label}
                  </h4>
                  <p className="text-sm text-gray-300 mt-0.5">
                    {items[activeModalIndex].sublabel}
                  </p>
                </div>

                <div className="text-xs text-maxim-yellow font-bold px-3 py-1 bg-white/5 rounded-full border border-maxim-yellow/30">
                  {activeModalIndex + 1} / {items.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
