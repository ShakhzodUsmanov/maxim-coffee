import { useState } from "react"
import { FaPhone, FaInstagram, FaXmark } from "react-icons/fa6"
import { RiTelegram2Fill } from "react-icons/ri"
import { motion, AnimatePresence } from "framer-motion"

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear()
  const [modalType, setModalType] = useState(null)

  const translations = {
    ru: {
      copyright: `© ${currentYear} Maxim Coffee. Все права защищены.`,
      brand: 'Корейское качество в каждом стике',
      linksTitle: 'Навигация',
      socialTitle: 'Мы в соцсетях',
      deliveryInfo: 'Оригинальный кофе из Южной Кореи с доставкой в Ташкенте',
      links: [
        { label: 'О нас', id: 'about' },
        { label: 'Цены', id: 'pricing' },
        { label: 'Условия', modal: 'terms' },
        { label: 'Политика', modal: 'privacy' },
      ],
      madeWith: 'Сделано с ❤️ для любителей настоящего кофе',
      modalTermsTitle: 'Условия заказа и доставки',
      modalTermsContent: [
        'Доставка по Ташкенту осуществляется в день заказа или на следующий рабочий день.',
        'Доставка в другие регионы Узбекистана — почтовыми и курьерскими службами за 1–3 дня.',
        'Оплата принимается наличными при получении, а также через Payme / Click.',
        '100% гарантия оригинальности корейской продукции Maxim.',
      ],
      modalPrivacyTitle: 'Политика конфиденциальности',
      modalPrivacyContent: [
        'Мы ценим вашу конфиденциальность и собираем только минимальные контактные данные, необходимые для подтверждения и доставки вашего заказа.',
        'Ваши данные ни при каких обстоятельствах не передаются третьим лицам.',
        'По всем вопросам вы можете связаться с нами напрямую в Telegram или по телефону.',
      ],
      closeBtn: 'Понятно',
    },
    uz: {
      copyright: `© ${currentYear} Maxim Coffee. Barcha huquqlar himoyalangan.`,
      brand: 'Har bir stikda koreys sifati',
      linksTitle: 'Navigatsiya',
      socialTitle: 'Ijtimoiy tarmoqlarda',
      deliveryInfo: 'Toshkentda yetkazib beriladigan Janubiy Koreyaning asl qahvasi',
      links: [
        { label: 'Biz haqida', id: 'about' },
        { label: 'Narxlar', id: 'pricing' },
        { label: 'Shartlar', modal: 'terms' },
        { label: 'Siyosat', modal: 'privacy' },
      ],
      madeWith: 'Haqiqiy qahva ixlosmandlari uchun ❤️ bilan yaratildi',
      modalTermsTitle: 'Buyurtma va yetkazib berish shartlari',
      modalTermsContent: [
        'Toshkent boʻyicha yetkazib berish buyurtma qilingan kuni yoki ertasi kuni amalga oshiriladi.',
        'Oʻzbekistonning boshqa viloyatlariga kuryerlik orqali 1–3 kunda yetkaziladi.',
        'Toʻlov buyurtmani olganda naqd pulda yoki Payme / Click orqali amalga oshiriladi.',
        'Maxim Janubiy Koreya mahsulotlarining 100% oʻziga xosligiga kafolat beramiz.',
      ],
      modalPrivacyTitle: 'Maxfiylik siyosati',
      modalPrivacyContent: [
        'Biz sizning maxfiyligingizni qadrlaymiz va faqat buyurtmani yetkazib berish uchun zarur boʻlgan minimal aloqa maʼlumotlarini yigʻamiz.',
        'Sizning maʼlumotlaringiz hech qachon uchinchi shaxslarga berilmaydi.',
        'Barcha savollar boʻyicha toʻgʻridan-toʻgʻri Telegram yoki telefon orqali murojaat qilishingiz mumkin.',
      ],
      closeBtn: 'Tushunarli',
    },
  }

  const t = translations[language]

  const handleLinkClick = (link) => {
    if (link.modal) {
      setModalType(link.modal)
    } else if (link.id) {
      const element = document.getElementById(link.id)
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
  }

  return (
    <footer className="bg-[#120A05] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#3D2817]/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl font-extrabold text-maxim-yellow font-display tracking-tight">
                MAXIM
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#FFD400]/15 text-maxim-yellow border border-[#FFD400]/30">
                Mocha Gold
              </span>
            </div>
            <p className="text-gray-300 text-sm max-w-sm mb-4 leading-relaxed">
              {t.brand}
            </p>
            <p className="text-xs text-[#8A6A52] leading-relaxed">
              {t.deliveryInfo}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-maxim-yellow mb-4 font-display">
              {t.linksTitle}
            </h4>
            <ul className="space-y-2.5">
              {t.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-gray-400 hover:text-maxim-yellow transition-colors text-sm text-left flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-maxim-yellow/40 group-hover:bg-maxim-yellow transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Contacts */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-maxim-yellow mb-4 font-display">
              {t.socialTitle}
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Ташкент, Узбекистан • +998 (93) 093-00-53
            </p>

            <div className="flex gap-3">
              <a
                href="https://t.me/maxkoffuz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Maxkoff"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-300 hover:text-[#1E120A] hover:bg-maxim-yellow hover:border-maxim-yellow hover:scale-105 transition-all duration-200"
              >
                <RiTelegram2Fill className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/maxkoff.uz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Maxkoff"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-300 hover:text-[#1E120A] hover:bg-maxim-yellow hover:border-maxim-yellow hover:scale-105 transition-all duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+998930930053"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Phone Maxkoff"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-300 hover:text-[#1E120A] hover:bg-maxim-yellow hover:border-maxim-yellow hover:scale-105 transition-all duration-200"
              >
                <FaPhone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>{t.copyright}</p>
          <p className="text-gray-400">{t.madeWith}</p>
        </div>
      </div>

      {/* Terms & Privacy Information Modal */}
      <AnimatePresence>
        {modalType !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalType(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1E120A] border border-[#C88D48]/30 max-w-lg w-full rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full"
                aria-label="Close modal"
              >
                <FaXmark size={18} />
              </button>

              <h3 className="text-2xl font-bold text-maxim-yellow mb-4 font-display">
                {modalType === 'terms' ? t.modalTermsTitle : t.modalPrivacyTitle}
              </h3>

              <div className="space-y-3 text-sm text-gray-300 leading-relaxed mb-6">
                {(modalType === 'terms' ? t.modalTermsContent : t.modalPrivacyContent).map(
                  (paragraph, idx) => (
                    <p key={idx} className="flex items-start gap-2">
                      <span className="text-maxim-yellow font-bold">•</span>
                      <span>{paragraph}</span>
                    </p>
                  )
                )}
              </div>

              <button
                onClick={() => setModalType(null)}
                className="w-full bg-maxim-yellow text-[#1E120A] font-bold py-3 rounded-2xl hover:bg-[#F5CA00] transition-colors text-sm"
              >
                {t.closeBtn}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
