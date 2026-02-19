import boxWith100 from '../assets/box-with-100.webp'
import coffeeCup from "../assets/coffee-cup.webp"
import coffeeSticks from "../assets/sticks.webp"
import presentBox from "../assets/presentBox.webp"

import { FaGift, FaBox, FaMugHot, FaWandMagicSparkles  } from "react-icons/fa6";

const Gallery = ({ language }) => {
  const translations = {
    ru: {
      title: 'Галерея',
      subtitle: 'Посмотри как выглядит качество',
    },
    uz: {
      title: 'Galereya',
      subtitle: 'Sifat qanday ko\'rinishga ega ekanligini ko\'rish',
    },
  }

  const t = translations[language]

  const items = [
    { id: 1, img: boxWith100, emoji: FaBox, label: language === 'ru' ? 'Коробка 100 стиков' : '100 stikli quti' },
    { id: 2, img: coffeeCup, emoji: FaMugHot, label: language === 'ru' ? 'Кофе с пеной' : 'Kopiyka bilan qahva' },
    { id: 3, img: coffeeSticks, emoji: FaWandMagicSparkles, label: language === 'ru' ? 'Стики' : 'Stiklar' },
    { id: 4, img: presentBox, emoji: FaGift, label: language === 'ru' ? 'Подарок' : 'Sovg\'a' },
  ]

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 bg-maxim-cream px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-maxim-dark mb-4 text-center">
          {t.title}
        </h2>
        <p className="text-center text-maxim-brown text-lg mb-12">
          {t.subtitle}
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const IconComponent = item.emoji
            return (<div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square bg-white cursor-pointer"
            >
              {/* Image Placeholder with Gradient */}
              <div className="w-full h-full bg-gradient-to-br from-maxim-yellow/80 to-maxim-brown/20 flex items-center justify-center group-hover:from-maxim-yellow/100 transition-all duration-300">
                <img
                  src={item.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-maxim-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-maxim-cream">
                <div className="flex flex-col items-center">
                  <IconComponent size={100} className="text-9xl mb-2" />
                  <p className="text-2xl font-bold text-center px-2">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>)
          })}
        </div>

        {/* Telegram CTA */}
        <div className="text-center mt-12">
          <p className="text-maxim-dark mb-4">
            {language === 'ru'
              ? 'Еще фото в нашем Telegram'
              : 'Bizning Telegram ko\'proq rasmlar'}
          </p>
          <a
            href="https://t.me/maxcofuz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-maxim-yellow to-maxim-brown text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-shadow"
          >
            @MAXKOFFUZ
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
