const About = ({ language }) => {
  const translations = {
    ru: {
      title: 'О Maxim Coffee',
      description:
        'Maxim Coffee — это популярный корейский растворимый кофе 3 в 1: кофе, сахар и сливки в одном стике. Каждая порция содержит идеальную комбинацию качественного кофе, сладости и кремовой гладкости. Идеален для тех, кто ценит вкус, удобство и корейское качество.',
      features: [
        { title: 'Оригинальный вкус', desc: 'Подлинный корейский рецепт' },
        { title: 'Быстрое приготовление', desc: 'Просто добавь горячую воду' },
        { title: 'Идеальный баланс', desc: 'Кофе + сахар + сливки' },
      ],
    },
    uz: {
      title: 'Maxim Coffee haqida',
      description:
        'Maxim Coffee — mashhur koreys 3 in 1 qahvasi: qahva, shakar va qaymoq bitta stikda. Har bir porsiya sifatli qahva, shirinlik va qaymoqli tekislikning ideal kombinatsiyasini o\'z ichiga oladi. Bu ular tat, qulaylik va koreys sifatini qadrlaydiganlar uchun ideal.',
      features: [
        { title: 'Asl tat', desc: 'Haqiqiy koreys retsepti' },
        { title: 'Tez tayyorlash', desc: 'Shunchaki issiq suv qo\'shing' },
        { title: 'Ideal balans', desc: 'Qahva + shakar + qaymoq' },
      ],
    },
  }

  const t = translations[language]

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-maxim-cream px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-maxim-dark mb-6 text-center">
          {t.title}
        </h2>

        {/* Main Content Block */}
        <div className="bg-gradient-to-br from-maxim-beige to-maxim-cream rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <p className="text-lg md:text-xl text-maxim-dark leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-maxim-yellow/30"
            >
              <h3 className="text-xl md:text-2xl font-bold text-maxim-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-maxim-brown">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
