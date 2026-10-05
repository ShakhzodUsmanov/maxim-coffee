import { FaAngleDown, FaCheck, FaArrowRight } from "react-icons/fa6"
import boxWithCoffee from '../assets/hero-box.webp'
import { motion } from 'framer-motion'

const Hero = ({ language }) => {
  const translations = {
    ru: {
      originBadge: '🇰🇷 100% Оригинальный импорт из Южной Кореи',
      headline: 'Maxim Coffee 3 в 1 уже Ташкенте',
      subtitle: 'настоящий вкус корейского кофе',
      cta: 'Купить сейчас',
      secondaryCta: 'О продукте',
      deliveryBadge: 'Доставка по Ташкенту и всему Узбекистану',
      features: [
        'Идеальная корейская рецептура',
        'Быстрое приготовление за 30 сек',
        'Удобно дома, в офисе и в дороге',
      ],
      chipMocha: '☕ Mocha Gold Mild',
      chipFormula: '✨ Кофе + Сливки + Сахар',
      chipTop: '⭐ Выбор №1 в Корее',
    },
    uz: {
      originBadge: '🇰🇷 Janubiy Koreyadan 100% asl import',
      headline: 'Maxim Coffee 3 in 1 Toshkentda',
      subtitle: 'haqiqiy koreys qahvasi',
      cta: 'Hozir sotib olish',
      secondaryCta: 'Mahsulot haqida',
      deliveryBadge: 'Toshkent va butun Oʻzbekiston boʻylab yetkazib berish',
      features: [
        'Ideal koreys retsepti',
        '30 soniyada tez tayyorlanadi',
        'Uyda, ofisda va yoʻlda juda qulay',
      ],
      chipMocha: '☕ Mocha Gold Mild',
      chipFormula: '✨ Qahva + Qaymoq + Shakar',
      chipTop: '⭐ Koreyada 1-raqamli tanlov',
    },
  }

  const t = translations[language]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] w-full bg-gradient-to-b from-[#140B06] via-[#1E120A] to-[#180E07] flex items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* Background Ambient Spotlights & Warm Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-maxim-yellow/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C88D48]/15 rounded-full filter blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid / Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFD400_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left Column: Value Proposition & CTAs */}
        <motion.div 
          className="text-center lg:text-left lg:col-span-7 flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Korean Origin Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-maxim-yellow/30 text-maxim-yellow text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md"
          >
            <span>{t.originBadge}</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 font-display">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-maxim-yellow via-[#FFE566] to-maxim-yellow">
              Maxim Coffee 3 в 1
            </span>{' '}
            <span className="block mt-1 text-white">
              {language === 'ru' ? 'уже в Ташкенте' : 'Toshkentda'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-[#E8AF6A] font-medium mb-6 capitalize tracking-wide">
            {t.subtitle}
          </p>

          {/* Feature Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 w-full max-w-lg lg:max-w-none text-left">
            {t.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/5"
              >
                <div className="w-5 h-5 rounded-full bg-maxim-yellow/20 flex items-center justify-center shrink-0">
                  <FaCheck className="text-[10px] text-maxim-yellow" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("contact")}
              aria-label="Scroll to contact section"
              className="shimmer-effect w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-maxim-yellow via-[#FFDC2E] to-maxim-yellow text-[#1E120A] font-extrabold py-4 px-8 md:px-10 rounded-full shadow-lg shadow-maxim-yellow/25 hover:shadow-maxim-yellow/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 text-base md:text-lg group"
            >
              <span>{t.cta}</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("about")}
              aria-label="Scroll to about section"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-7 rounded-full border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 text-sm md:text-base"
            >
              <span>{t.secondaryCta}</span>
            </button>
          </div>

          {/* Micro trust note */}
          <p className="mt-4 text-xs text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>{t.deliveryBadge}</span>
          </p>
        </motion.div>

        {/* Right Column: Hero Coffee Packaging Showcase */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Ambient Halo Behind Coffee Pack */}
          <div className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-gradient-to-tr from-maxim-yellow/30 to-[#E8AF6A]/20 filter blur-3xl pointer-events-none animate-pulse-subtle" />

          {/* Floating Product Container */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* The Main Pack Image */}
            <div className="relative group cursor-pointer">
              <img
                src={boxWithCoffee}
                alt="Maxim Coffee Mocha Gold Box"
                width="600"
                height="600"
                className="w-72 sm:w-80 md:w-96 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Dynamic Ground Shadow that scales with floating */}
            <motion.div
              className="w-56 h-6 rounded-full bg-black/60 filter blur-md mt-2 pointer-events-none"
              animate={{ scale: [1, 0.85, 1], opacity: [0.6, 0.35, 0.6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Info Pill: Top Right */}
            <motion.div
              className="absolute -top-4 -right-2 sm:-right-6 bg-[#2B1A10]/90 backdrop-blur-md text-maxim-yellow border border-maxim-yellow/40 px-3.5 py-1.5 rounded-2xl shadow-xl text-xs sm:text-sm font-bold flex items-center gap-1.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span>{t.chipMocha}</span>
            </motion.div>

            {/* Floating Info Pill: Bottom Left */}
            <motion.div
              className="absolute bottom-10 -left-2 sm:-left-8 bg-[#2B1A10]/90 backdrop-blur-md text-white border border-[#C88D48]/40 px-3.5 py-1.5 rounded-2xl shadow-xl text-xs sm:text-sm font-medium flex items-center gap-1.5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span>{t.chipFormula}</span>
            </motion.div>

            {/* Floating Info Pill: Bottom Right */}
            <motion.div
              className="hidden sm:flex absolute -bottom-2 -right-4 bg-maxim-yellow text-[#1E120A] px-3 py-1 rounded-full shadow-lg text-[11px] font-black uppercase tracking-wider"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <span>{t.chipTop}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 inset-x-0 flex flex-col items-center justify-center z-20 text-gray-400 hover:text-maxim-yellow transition-colors group cursor-pointer"
        aria-label="Scroll down to about section"
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest mb-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
          {language === 'ru' ? 'Листайте вниз' : 'Pastga suring'}
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 group-hover:border-maxim-yellow/60 flex items-start justify-center p-1 transition-colors">
          <motion.div 
            className="w-1.5 h-2.5 rounded-full bg-maxim-yellow"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </button>
    </section>
  )
}

export default Hero
