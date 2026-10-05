import { useState } from 'react'
import { FaPhone, FaTelegram, FaInstagram, FaLocationDot, FaCopy, FaCheck, FaClock } from "react-icons/fa6"
import { motion } from 'framer-motion'

const Contact = ({ language }) => {
  const [copied, setCopied] = useState(false)

  const translations = {
    ru: {
      badge: 'СВЯЗЬ С НАМИ',
      title: 'Контактная информация',
      subtitle: 'Свяжитесь с нами для заказов и информации',
      phone: '+998 (93) 093-00-53',
      address: 'Ташкент, Узбекистан',
      addressSub: 'Быстрая доставка по всему Ташкенту и регионам',
      contactUs: 'Написать нам',
      order: 'Сделать заказ',
      phoneLabel: 'Телефон',
      messengersLabel: 'Мессенджеры',
      callNow: 'Позвонить',
      copyNumber: 'Скопировать номер',
      copiedText: 'Скопировано в буфер!',
      workingHours: 'Ежедневно: 09:00 — 21:00',
      fastReply: '⚡ Отвечаем быстро в Telegram и Instagram',
    },
    uz: {
      badge: 'BIZ BILAN BOGʻLANISH',
      title: "Aloqa ma'lumotlari",
      subtitle: "Buyurtmalar va ma'lumot uchun biz bilan bog'lanish",
      phone: '+998 (93) 093-00-53',
      address: 'Toshkent, Oʻzbekiston',
      addressSub: 'Toshkent va viloyatlar boʻylab tezkor yetkazib berish',
      contactUs: 'Bizga yozing',
      order: 'Buyurtma berish',
      phoneLabel: 'Telefon',
      messengersLabel: 'Xabarlar',
      callNow: 'Qoʻngʻiroq qilish',
      copyNumber: 'Raqamni nusxalash',
      copiedText: 'Nusxa olindi!',
      workingHours: 'Har kuni: 09:00 — 21:00',
      fastReply: '⚡ Telegram va Instagramda tezkor javob beramiz',
    },
  }

  const t = translations[language]

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+998930930053')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-[#180E07] via-[#23140B] to-[#120A05] px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C88D48]/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-maxim-yellow/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
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
            className="text-[#E8AF6A] text-base sm:text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Contact Grid: Phone Card & Messengers Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Phone Contact Card */}
          <motion.div 
            className="bg-[#24150D]/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-maxim-yellow/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-maxim-yellow/20 border border-maxim-yellow/30 flex items-center justify-center text-maxim-yellow mb-6">
                <FaPhone className="w-7 h-7 text-maxim-yellow" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#C88D48]">
                {t.phoneLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display mt-1 mb-2">
                {t.phone}
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-300 mb-6">
                <FaClock className="text-maxim-yellow text-xs" />
                <span>{t.workingHours}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+998930930053"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-maxim-yellow via-[#FFDC2E] to-maxim-yellow text-[#1E120A] font-extrabold py-3.5 px-6 rounded-2xl shadow-lg shadow-maxim-yellow/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm uppercase tracking-wider"
              >
                <FaPhone className="text-xs" />
                <span>{t.order}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-200 py-3 px-6 rounded-2xl border border-white/10 transition-colors text-xs font-semibold"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400 text-xs" />
                    <span className="text-emerald-400">{t.copiedText}</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-xs" />
                    <span>{t.copyNumber}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Telegram / Instagram Messengers Card */}
          <motion.div 
            className="bg-[#24150D]/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#E8AF6A]/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#E8AF6A]/20 border border-[#E8AF6A]/30 flex items-center justify-center text-[#E8AF6A] mb-6">
                <FaTelegram className="w-8 h-8 text-[#E8AF6A]" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#C88D48]">
                {t.messengersLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display mt-1 mb-2">
                {t.contactUs}
              </h3>

              <p className="text-xs text-gray-300 mb-6">
                {t.fastReply}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="https://t.me/us_muni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Us Muni"
                className="flex items-center justify-center gap-2.5 bg-[#229ED9] hover:bg-[#1E8CC0] text-white font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-[#229ED9]/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
              >
                <FaTelegram className="text-xl" />
                <span>Telegram</span>
              </a>

              <a
                href="https://instagram.com/maxkoff.uz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Maxkoff"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-[#FD1D1D]/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
              >
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Location Banner */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-maxim-yellow/20 flex items-center justify-center text-maxim-yellow shrink-0">
              <FaLocationDot className="text-base" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {t.address}
              </p>
              <p className="text-xs text-gray-400">
                {t.addressSub}
              </p>
            </div>
          </div>

          <span className="text-xs font-bold text-maxim-yellow px-3 py-1.5 rounded-full bg-maxim-yellow/10 border border-maxim-yellow/20">
            🚚 Express Delivery
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
