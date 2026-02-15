import { Phone, MessageCircle } from 'lucide-react'

const Contact = ({ language }) => {
  const translations = {
    ru: {
      title: 'Контактная информация',
      subtitle: 'Свяжитесь с нами для заказов и информации',
      phone: '+998 (99) 123-45-67',
      address: language === 'ru' ? 'Ташкент, Узбекистан' : 'Toshkent, Oʻzbekiston',
      contactUs: 'Написать нам',
      order: 'Сделать заказ',
    },
    uz: {
      title: 'Aloqa ma\'lumotlari',
      subtitle: 'Buyurtmalar va ma\'lumot uchun biz bilan bog\'lanish',
      phone: '+998 (99) 123-45-67',
      address: 'Toshkent, Oʻzbekiston',
      contactUs: 'Bizga yozing',
      order: 'Buyurtma berish',
    },
  }

  const t = translations[language]

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-maxim-cream px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-maxim-dark mb-4 text-center">
          {t.title}
        </h2>
        <p className="text-center text-maxim-brown mb-12 text-lg">
          {t.subtitle}
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Phone Contact */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-maxim-yellow/30 text-center">
            <Phone className="w-12 h-12 text-maxim-brown mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-maxim-dark mb-2">
              {language === 'ru' ? 'Телефон' : 'Telefon'}
            </h3>
            <a
              href="tel:+998991234567"
              className="text-xl font-bold text-maxim-brown hover:text-maxim-dark transition-colors mb-4 block"
            >
              {t.phone}
            </a>
            <a
              href="tel:+998991234567"
              className="inline-block bg-maxim-yellow text-maxim-dark font-bold py-2 px-6 rounded-full hover:bg-maxim-brown hover:text-white transition-all"
            >
              {t.order}
            </a>
          </div>

          {/* Telegram/WhatsApp Contact */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-maxim-yellow/30 text-center">
            <MessageCircle className="w-12 h-12 text-maxim-brown mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-maxim-dark mb-2">
              {language === 'ru' ? 'Мессенджеры' : 'Xabarlar'}
            </h3>
            <p className="text-maxim-brown mb-4">
              {language === 'ru'
                ? 'Напишите нам в Telegram или WhatsApp'
                : 'Bizga Telegram yoki WhatsAppda yozing'}
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://t.me/maximcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold py-2 px-4 rounded-full hover:shadow-lg transition-shadow"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/998991234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-br from-green-400 to-green-600 text-white font-bold py-2 px-4 rounded-full hover:shadow-lg transition-shadow"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-maxim-yellow rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-maxim-dark mb-4">
            {language === 'ru' ? 'Адрес' : 'Manzil'}
          </h3>
          <p className="text-lg font-semibold text-maxim-dark mb-6">
            {t.address}
          </p>
          <button className="bg-maxim-dark hover:bg-maxim-brown text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg">
            {t.contactUs}
          </button>
        </div>

        {/* Hours */}
        <div className="mt-8 text-center text-maxim-dark">
          <p className="font-semibold">
            {language === 'ru'
              ? '⏰ Доступны 24/7'
              : '⏰ 24/7 mavjud'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
