const Pricing = ({ language }) => {
  const translations = {
    ru: {
      title: 'Цена',
      price: '120 000',
      currency: 'UZS',
      description: 'Коробка 100 стиков',
      perStick: 'В пересчёте: 1 200 сум за стик',
      features: [
        '✓ 100 стиков кофе',
        '✓ Оригинальный вкус',
        '✓ Длительный срок хранения',
        '✓ Идеально для офиса',
      ],
      cta: 'Заказать',
      note: 'Доставка по Ташкенту бесплатно при заказе от 2 коробок',
    },
    uz: {
      title: 'Narxi',
      price: '120 000',
      currency: 'UZS',
      description: '100 stikli quti',
      perStick: 'Qayish: 1 stik uchun 1 200 so\'m',
      features: [
        '✓ 100 stik qahva',
        '✓ Asl tat',
        '✓ Uzoq saqlash muddati',
        '✓ Ofis uchun ideal',
      ],
      cta: 'Buyurtma berish',
      note: '2 ta quti va undan ortiq buyurtmalarda Toshkentga bepul yetkazib berish',
    },
  }

  const t = translations[language]

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-maxim-yellow px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-maxim-dark mb-12 text-center">
          {t.title}
        </h2>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-maxim-cream rounded-3xl shadow-2xl overflow-hidden">
            {/* Price Header */}
            <div className="bg-gradient-to-r from-maxim-brown to-maxim-dark text-white p-8 md:p-12 text-center">
              <p className="text-lg mb-2">{t.description}</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-bold">
                  {t.price}
                </span>
                <span className="text-2xl">{t.currency}</span>
              </div>
              <p className="text-sm mt-4 text-gray-200">{t.perStick}</p>
            </div>

            {/* Features */}
            <div className="p-8 md:p-12">
              <ul className="space-y-4 mb-8">
                {t.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-lg text-maxim-dark font-semibold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-maxim-dark hover:bg-maxim-brown text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg shadow-lg">
                {t.cta}
              </button>

              {/* Note */}
              <p className="text-center text-sm text-maxim-brown mt-6 px-4 bg-maxim-beige rounded-lg py-3">
                {t.note}
              </p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-8 text-center">
            <p className="text-maxim-dark font-semibold mb-4">
              {language === 'ru'
                ? 'Способы оплаты:'
                : 'To\'lov usullari:'}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-white text-maxim-dark px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-shadow">
                Наличные
              </button>
              <button className="bg-white text-maxim-dark px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-shadow">
                Карта
              </button>
              <button className="bg-white text-maxim-dark px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-shadow">
                Click
              </button>
              <button className="bg-white text-maxim-dark px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-shadow">
                Payme
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
