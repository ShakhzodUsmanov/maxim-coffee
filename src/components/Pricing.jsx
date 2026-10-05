import sticks250 from '../assets/sticks-250.webp'
import sticks100 from '../assets/sticks-100.webp'
import stick1 from '../assets/stick-1.webp'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheck, FaFire, FaGem } from 'react-icons/fa6'

const Pricing = ({ language }) => {
  const translations = {
    ru: {
      badge: 'ВЫГОДНЫЕ ФОРМАТЫ',
      title: 'Цены Maxim',
      subtitle: 'Выберите удобный формат и наслаждайтесь любимым кофе каждый день',
      orderBtn: 'Заказать',
      popularTag: 'Хит продаж',
      cards: [
        {
          sticks: '250 стиков',
          price: '550 000 сум',
          imageAlt: 'Упаковка на 250 стиков',
          imageUrl: sticks250,
          badge: 'Выгодно',
          perStick: '2 200 сум за стик',
          isPopular: true,
          perText: 'за большую упаковку',
        },
        {
          sticks: '100 стиков',
          price: '240 000 сум',
          imageAlt: 'Упаковка на 100 стиков',
          imageUrl: sticks100,
          badge: 'Популярный',
          perStick: '2 400 сум за стик',
          isPopular: false,
          perText: 'за стандартную упаковку',
        },
        {
          sticks: '1 стик',
          price: '2 500 сум',
          imageAlt: 'Один стик Maxim',
          imageUrl: stick1,
          badge: 'Пробный',
          perStick: 'Идеально на пробу',
          isPopular: false,
          perText: 'за 1 стик',
        },
      ],
      perText: 'за упаковку',
      perOneText: 'за 1 стик',
      deliveryNotice: 'Быстрая доставка по Ташкенту и в регионы Узбекистана',
    },
    uz: {
      badge: 'QULAY FORMATLAR',
      title: 'Maxim narxlari',
      subtitle: 'Qulay formatni tanlang va har kuni sevimli qahvangizdan bahramand bo‘ling',
      orderBtn: 'Buyurtma berish',
      popularTag: 'Eng ommabop',
      cards: [
        {
          sticks: '250 ta stik',
          price: '550 000 soʻm',
          imageAlt: '250 ta stik qadoq',
          imageUrl: sticks250,
          badge: 'Foydali',
          perStick: 'Bitta stik 2 200 soʻm',
          isPopular: true,
          perText: 'katta qadoq uchun',
        },
        {
          sticks: '100 ta stik',
          price: '240 000 soʻm',
          imageAlt: '100 ta stik qadoq',
          imageUrl: sticks100,
          badge: 'Mashhur',
          perStick: 'Bitta stik 2 400 soʻm',
          isPopular: false,
          perText: 'standart qadoq uchun',
        },
        {
          sticks: '1 ta stik',
          price: '2 500 soʻm',
          imageAlt: 'Bitta Maxim stiki',
          imageUrl: stick1,
          badge: 'Sinab ko‘rish uchun',
          perStick: 'Sinab koʻrish uchun ideal',
          isPopular: false,
          perText: '1 stik uchun',
        },
      ],
      perText: 'qadoq uchun',
      perOneText: '1 stik uchun',
      deliveryNotice: 'Toshkent va Oʻzbekiston viloyatlari boʻylab tezkor yetkazib berish',
    },
  }

  const t = translations[language]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const headerOffset = 70
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 bg-gradient-to-b from-[#180E07] via-[#22130A] to-[#180E07] px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-maxim-yellow/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-maxim-yellow/15 text-maxim-yellow border border-maxim-yellow/30 mb-3"
          >
            {t.badge}
          </motion.span>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.title}
          </motion.h2>

          <motion.p 
            className="text-[#E8AF6A] text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {t.cards.map((card, index) => {
            const isHighlighted = card.isPopular

            return (
              <motion.article
                key={index}
                className={`relative flex flex-col justify-between rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2.5 ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#2D1B11] to-[#20130A] border-2 border-maxim-yellow shadow-2xl shadow-maxim-yellow/20 md:-translate-y-2'
                    : 'bg-[#24150D]/80 backdrop-blur-md border border-white/10 hover:border-[#C88D48]/50 shadow-xl shadow-black/30'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
              >
                {/* Featured Top Ribbon */}
                {isHighlighted && (
                  <div className="bg-gradient-to-r from-maxim-yellow via-[#FFE566] to-maxim-yellow text-[#1E120A] text-xs font-black py-1.5 text-center uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md">
                    <FaFire className="text-xs" />
                    <span>{t.popularTag}</span>
                  </div>
                )}

                <div>
                  {/* Card Image Container with overlay */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-black/40 group">
                    <img
                      src={card.imageUrl}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#20130A] via-transparent to-transparent opacity-80" />

                    {/* Badge Pill */}
                    <span
                      className={`absolute top-4 left-4 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg ${
                        isHighlighted
                          ? 'bg-maxim-yellow text-[#1E120A]'
                          : 'bg-black/70 text-white border border-white/20'
                      }`}
                    >
                      {card.badge}
                    </span>

                    {/* Stick Count Pill */}
                    <span className="absolute bottom-3 right-4 bg-[#1E120A]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-xl border border-white/10">
                      {card.sticks}
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold text-[#C88D48] uppercase tracking-wider mb-2">
                      {card.imageAlt}
                    </p>

                    <div className="mb-4">
                      <div className="text-3xl sm:text-4xl font-black text-white font-display">
                        {card.price}
                      </div>
                      <div className="text-xs text-gray-300 mt-1 flex items-center justify-between">
                        <span>{card.perText}</span>
                        <span className="text-maxim-yellow font-medium">{card.perStick}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-3.5 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-200 text-sm ${
                      isHighlighted
                        ? 'bg-maxim-yellow hover:bg-[#F5CA00] text-[#1E120A] shadow-lg shadow-maxim-yellow/25 hover:shadow-maxim-yellow/40 hover:scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-white/30'
                    }`}
                  >
                    <span>{t.orderBtn}</span>
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom Delivery Badge */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-300 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-maxim-yellow" />
            <span>{t.deliveryNotice}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing