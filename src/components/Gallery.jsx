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
    { id: 1, emoji: '📦', label: language === 'ru' ? 'Коробка 100 стиков' : '100 stikli quti' },
    { id: 2, emoji: '☕', label: language === 'ru' ? 'Кофе с пеной' : 'Kopiyka bilan qahva' },
    { id: 3, emoji: '✨', label: language === 'ru' ? 'Стики' : 'Stiklar' },
    { id: 4, emoji: '🎁', label: language === 'ru' ? 'Подарок' : 'Sovg\'a' },
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
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square bg-white cursor-pointer"
            >
              {/* Image Placeholder with Gradient */}
              <div className="w-full h-full bg-gradient-to-br from-maxim-yellow/80 to-maxim-brown/20 flex items-center justify-center group-hover:from-maxim-yellow/100 transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <p className="font-bold text-maxim-dark text-center px-2">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-maxim-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-maxim-yellow text-maxim-dark px-6 py-2 rounded-full font-bold hover:bg-maxim-brown hover:text-white transition-all">
                  {language === 'ru' ? 'Смотреть' : 'Ko\'rish'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-maxim-dark mb-4">
            {language === 'ru'
              ? 'Еще фото в нашем Instagram'
              : 'Bizning Instagramda ko\'proq rasmlar'}
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-maxim-yellow to-maxim-brown text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-shadow"
          >
            @MaximCoffee
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
