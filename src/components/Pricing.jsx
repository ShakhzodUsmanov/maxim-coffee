import sticks250 from '../assets/sticks-250.webp'
import sticks100 from '../assets/sticks-100.webp'
import stick1 from '../assets/stick-1.webp'
import { motion } from 'framer-motion';

const Pricing = ({ language }) => {
  const translations = {
    ru: {
      title: 'Цены Maxim',
      subtitle: 'Выберите удобный формат и наслаждайтесь любимым кофе каждый день',
      cards: [
        {
          sticks: '250 стиков',
          price: '550 000 сум',
          imageAlt: 'Упаковка на 250 стиков',
          imageUrl: sticks250,
          badge: 'Выгодно',
        },
        {
          sticks: '100 стиков',
          price: '240 000 сум',
          imageAlt: 'Упаковка на 100 стиков',
          imageUrl: sticks100,
          badge: 'Популярный',
        },
        {
          sticks: '1 стик',
          price: '2 500 сум',
          imageAlt: 'Один стик Maxim',
          imageUrl: stick1,
          badge: 'Пробный',
        },
      ],
      perText: 'за упаковку',
      perOneText: 'за 1 стик',
    },
    uz: {
      title: 'Maxim narxlari',
      subtitle: 'Qulay formatni tanlang va har kuni sevimli qahvangizdan bahramand bo‘ling',
      cards: [
        {
          sticks: '250 ta stik',
          price: '550 000 soʻm',
          imageAlt: '250 ta stik qadoq',
          imageUrl: sticks250,
          badge: 'Foydali',
        },
        {
          sticks: '100 ta stik',
          price: '240 000 soʻm',
          imageAlt: '100 ta stik qadoq',
          imageUrl: sticks100,
          badge: 'Mashhur',
        },
        {
          sticks: '1 ta stik',
          price: '2 500 soʻm',
          imageAlt: 'Bitta Maxim stiki',
          imageUrl: stick1,
          badge: 'Sinab ko‘rish uchun',
        },
      ],
      perText: 'qadoq uchun',
      perOneText: '1 stik uchun',
    },
  }

  const t = translations[language]

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-gradient-to-b bg-maxim-yellow px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-maxim-dark text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.title}
        </motion.h2>
        <motion.p 
          className="text-maxim-brown text-center mt-4 mb-12 md:text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, index) => (
            <motion.article
              key={index}
              className={` bg-maxim-cream rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl `}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="relative">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className="w-full h-52 object-cover bg-maxim-brown/10"
                />
                <span className="absolute top-4 left-4 bg-maxim-dark text-maxim-cream text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {card.badge}
                </span>
              </div>

              <div className="p-5 md:p-6">

                <div className="flex md:flex-col-reverse items-end justify-between gap-2">
                  <p className="text-3xl lg:text-4xl font-extrabold text-maxim-dark leading-none">
                    {card.price}
                  </p>
                  <p className="text-xs md:text-sm text-maxim-brown font-semibold uppercase tracking-wide text-right">
                    {card.imageAlt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing