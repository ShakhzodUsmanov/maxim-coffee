import { FaPhone, FaTelegram, FaMessage, FaInstagram  } from "react-icons/fa6"

const Contact = ({ language }) => {
  const translations = {
    ru: {
      title: 'Контактная информация',
      subtitle: 'Свяжитесь с нами для заказов и информации',
      phone: '+998 (93) 093-00-53',
      address: language === 'ru' ? 'Ташкент, Узбекистан' : 'Toshkent, Oʻzbekiston',
      contactUs: 'Написать нам',
      order: 'Сделать заказ',
    },
    uz: {
      title: 'Aloqa ma\'lumotlari',
      subtitle: 'Buyurtmalar va ma\'lumot uchun biz bilan bog\'lanish',
      phone: '+998 (93) 093-00-53',
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
            <FaPhone className="w-12 h-12 text-maxim-brown mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-maxim-dark mb-2">
              {language === 'ru' ? 'Телефон' : 'Telefon'}
            </h3>
            <a
              href="tel:+998930930053"
              className="text-xl font-bold text-maxim-brown hover:text-maxim-dark transition-colors mb-4 block"
            >
              {t.phone}
            </a>
            <a
              href="tel:+998930930053"
              className="inline-block bg-maxim-yellow text-maxim-dark font-bold py-2 px-6 rounded-full hover:bg-maxim-brown hover:text-white transition-all"
            >
              {t.order}
            </a>
          </div>

          {/* Telegram/WhatsApp Contact */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-maxim-yellow/30 text-center">
            <FaMessage className="w-12 h-12 text-maxim-brown mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-maxim-dark mb-2">
              {language === 'ru' ? 'Мессенджеры' : 'Xabarlar'}
            </h3>
            <p className="text-maxim-brown mb-4">
              {language === 'ru'
                ? 'Напишите нам'
                : 'Bizga yozing'}
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://t.me/maxkoffuz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Maxkoff"
                className="flex items-center justify-center gap-3 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold p-2 pr-4 rounded-full hover:shadow-lg transition-shadow"
              >
                <FaTelegram className="w-10 h-10 text-white" /> Telegram  
              </a>
              <a
                href="https://www.instagram.com/maxkoff.uz?igsh=bXl4YWM0cTVyZWZv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Maxkoff"
                className="flex items-center justify-center gap-3 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white font-bold p-2 pr-4 rounded-full hover:shadow-lg transition-shadow"
              >  
                <FaInstagram className="w-10 h-10" /> 
                Instagram 
              </a>
            </div>
          </div>
        </div>



      </div>
    </section>
  )
}

export default Contact
