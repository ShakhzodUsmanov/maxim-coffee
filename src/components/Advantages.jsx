const Advantages = ({ language }) => {
  const translations = {
    ru: {
      title: 'Преимущества Maxim',
      advantages: [
        {
          icon: '🇰🇷',
          title: 'Корейское качество',
          description: 'Подлинная корейская рецептура и качество',
        },
        {
          icon: '⚡',
          title: 'Быстро и удобно',
          description: 'Готов за 1 минуту - просто добавь горячую воду',
        },
        {
          icon: '☕',
          title: 'Мягкий сливочный вкус',
          description: 'Идеальный баланс кофе, сахара и сливок',
        },
        {
          icon: '📦',
          title: 'Удобные стики',
          description: 'Идеальны для дома, офиса и путешествий',
        },
      ],
    },
    uz: {
      title: 'Maxim afzalliklari',
      advantages: [
        {
          icon: '🇰🇷',
          title: 'Koreys sifati',
          description: 'Haqiqiy koreys retsepti va sifati',
        },
        {
          icon: '⚡',
          title: 'Tez va qulay',
          description: '1 minutada tayyor - shunchaki issiq suv qo\'shing',
        },
        {
          icon: '☕',
          title: 'Yumshoq qaymoqli ta\'m',
          description: 'Qahva, shakar va qaymoqning ideal kombinatsiyasi',
        },
        {
          icon: '📦',
          title: 'Qulay stiklar',
          description: 'Uy, ofis va sayohatlar uchun ideal',
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section
      id="advantages"
      className="py-16 md:py-24 bg-maxim-yellow px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-maxim-dark mb-16 text-center">
          {t.title}
        </h2>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-maxim-cream rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-maxim-brown/10"
            >
              <div className="text-5xl mb-4 text-center">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-maxim-dark mb-3 text-center">
                {advantage.title}
              </h3>
              <p className="text-maxim-brown text-center text-sm md:text-base">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-maxim-dark font-bold text-lg">
            {language === 'ru'
              ? '✓ Доверие миллионов корейцев'
              : '✓ Millionlab koreys-ning ishontirishi'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Advantages
