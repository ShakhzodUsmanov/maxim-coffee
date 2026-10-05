import { motion } from 'framer-motion'
import { FaAward, FaMugHot, FaScaleBalanced, FaCheck, FaWater, FaMugSaucer } from 'react-icons/fa6'

const About = ({ language }) => {
  const translations = {
    ru: {
      badge: 'О ПРОДУКТЕ',
      title: 'О Maxim Coffee',
      description:
        'Maxim Coffee — это популярный корейский растворимый кофе: кофе, сахар и сливки в одном стике. Каждая порция содержит идеальную комбинацию качественного кофе, сладости и кремовой гладкости. Идеален для тех, кто ценит вкус, удобство и корейское качество.',
      features: [
        {
          num: '01',
          title: 'Оригинальный вкус',
          desc: 'Подлинный корейский рецепт',
          icon: FaAward,
          tag: 'Рецепт из Сеула',
        },
        {
          num: '02',
          title: 'Быстрое приготовление',
          desc: 'Просто добавь горячую воду',
          icon: FaMugHot,
          tag: 'Готово за 30 сек',
        },
        {
          num: '03',
          title: 'Идеальный баланс',
          desc: 'Кофе + сахар + сливки',
          icon: FaScaleBalanced,
          tag: 'Золотое сечение 3в1',
        },
      ],
      stepsTitle: 'Как приготовить идеальную чашку за 30 секунд',
      steps: [
        { num: '1', title: 'Вскройте стик', desc: 'Удобная насечка Easy Cut' },
        { num: '2', title: '90–100 мл воды', desc: 'Горячая вода (85–90°C)' },
        { num: '3', title: 'Наслаждайтесь', desc: 'Нежная пенка и мягкий вкус' },
      ],
    },
    uz: {
      badge: 'MAHSULOT HAQIDA',
      title: 'Maxim Coffee haqida',
      description:
        'Maxim Coffee — mashhur koreys qahvasi: qahva, shakar va qaymoq bitta stikda. Har bir porsiya sifatli qahva, shirinlik va qaymoqli tekislikning ideal kombinatsiyasini o\'z ichiga oladi. Bu ular tat, qulaylik va koreys sifatini qadrlaydiganlar uchun ideal.',
      features: [
        {
          num: '01',
          title: 'Asl tat',
          desc: 'Haqiqiy koreys retsepti',
          icon: FaAward,
          tag: 'Seul retsepti',
        },
        {
          num: '02',
          title: 'Tez tayyorlash',
          desc: 'Shunchaki issiq suv qo\'shing',
          icon: FaMugHot,
          tag: '30 soniyada tayyor',
        },
        {
          num: '03',
          title: 'Ideal balans',
          desc: 'Qahva + shakar + qaymoq',
          icon: FaScaleBalanced,
          tag: 'Oltin nisbat 3in1',
        },
      ],
      stepsTitle: '30 soniyada mukammal qahva tayyorlash',
      steps: [
        { num: '1', title: 'Stikni oching', desc: 'Qulay Easy Cut tirqishi' },
        { num: '2', title: '90–100 ml suv', desc: 'Issiq suv (85–90°C)' },
        { num: '3', title: 'Bahramand bo‘ling', desc: 'Mayin ko‘pik va yumshoq tat' },
      ],
    },
  }

  const t = translations[language]

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#FAF5EC] px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative ambient coffee tints */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C88D48]/10 rounded-full filter blur-[100px] pointer-events-none" />

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
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E120A] tracking-tight font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.title}
          </motion.h2>
        </div>

        {/* Main Content Hero Card */}
        <motion.div 
          className="bg-white rounded-3xl p-8 sm:p-10 md:p-14 shadow-xl shadow-[#1E120A]/5 border border-[#EADBCC] mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle gold accent corner bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-maxim-yellow via-[#E8AF6A] to-maxim-yellow" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl text-[#2B1A10] leading-relaxed font-normal">
                {t.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#F0E6D8] pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-maxim-yellow/20 flex items-center justify-center mx-auto mb-3 text-maxim-dark">
                  <FaMugSaucer className="w-8 h-8 text-[#3D2817]" />
                </div>
                <p className="font-bold text-sm text-[#1E120A] uppercase tracking-wider">
                  Mocha Gold Mild
                </p>
                <p className="text-xs text-[#8A6A52] mt-0.5">
                  12g • Perfect Single Serve
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Key Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {t.features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-7 sm:p-8 shadow-lg shadow-[#1E120A]/5 hover:shadow-2xl hover:shadow-maxim-yellow/15 transition-all duration-300 border border-[#EADBCC] hover:border-maxim-yellow/50 hover:-translate-y-2 relative flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF6C4] group-hover:bg-maxim-yellow flex items-center justify-center text-[#1E120A] transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-[#1E120A]" />
                    </div>
                    <span className="text-2xl font-black text-[#EADBCC] group-hover:text-maxim-yellow/60 font-display transition-colors">
                      {feature.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E120A] mb-2 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B4C38] text-sm sm:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6]">
                  <span className="inline-block text-xs font-semibold text-[#8A6A52] group-hover:text-[#3D2817] transition-colors">
                    ✓ {feature.tag}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Preparation Steps Bar */}
        <motion.div
          className="bg-[#2B1A10] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-center text-maxim-yellow mb-8 font-display">
              {t.stepsTitle}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {t.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-maxim-yellow text-[#1E120A] font-extrabold flex items-center justify-center shrink-0 text-base">
                    {step.num}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base mb-1">
                      {step.title}
                    </h5>
                    <p className="text-xs text-gray-300">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
